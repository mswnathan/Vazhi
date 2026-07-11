#!/usr/bin/env node
// Vazhi — Changed-Records Lister
// Run from project root:  node agents/changed-records.js [baseRef]
//
// Prints ONLY the data records that were ADDED or MODIFIED versus what is
// currently live, so the pre-live content-accuracy checklist (agents/prelive.md,
// Stage 2) runs on just those records instead of the whole dataset. This is the
// token-saver: verify the diff, not the database.
//
// It parses the record arrays in each changed data file (old version from git,
// new version from the working tree) and compares them by identity key
// (id / name / short / term / title), so it reports clean per-record results —
// no duplicate id+name lines, no adjacent-record leakage.
//
// baseRef = the git ref representing what's live. Default: 'origin/main' if it
// exists, else 'HEAD' (so uncommitted working-tree edits are still scoped).

import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';

function git(cmd, allowFail = false) {
  try {
    return execSync(`git ${cmd}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  } catch (e) {
    if (allowFail) return null;
    throw e;
  }
}

// Eval a data-file source and return every top-level ALL-CAPS data binding
// (STREAMS, EXAM_GROUPS, SCHOLARSHIPS, TRENDING_COURSES …). ALL-CAPS ≥3 chars
// skips helpers like `BS` and lower-case functions, and captures files that
// export several arrays (market.js, wizard.js).
function evalData(src) {
  if (src == null) return null;
  const cleaned = src
    .replace(/^\s*\/\/.*/gm, '')        // strip line comments
    .replace(/\bconst\s+/g, 'var ');     // allow re-declaration in Function scope
  const names = [...new Set(
    [...cleaned.matchAll(/\bvar\s+([A-Z][A-Z0-9_]{2,})\s*=\s*[\[{]/g)].map(m => m[1])
  )];
  if (!names.length) return null;
  try {
    return new Function(cleaned + `; return {${names.join(',')}};`)();
  } catch {
    return null;
  }
}

// Flatten a data structure to its natural record level. Descends ONE level into
// a container object (e.g. a stream/exam-group whose records live in .courses /
// .exams / .programs) but keeps colleges, scholarships, internships etc. at their
// own level.
function toRecords(data) {
  if (!data) return [];
  const arr = Array.isArray(data) ? data : Object.values(data);
  const out = [];
  for (const el of arr) {
    if (!el || typeof el !== 'object') continue;
    const hasOwnIdentity = el.name || el.term || el.title;
    const childKey = ['courses', 'exams', 'programs'].find(
      k => Array.isArray(el[k]) && el[k].some(x => x && (x.name || x.id))
    );
    if (childKey && !hasOwnIdentity) out.push(...el[childKey]);
    else out.push(el);
  }
  return out;
}

function keyOf(r) {
  return r.id || r.name || r.short || r.term || r.title || JSON.stringify(r).slice(0, 60);
}

// Source string -> flat list of records across every exported data binding.
function recordsFrom(src) {
  const bindings = evalData(src);
  if (!bindings) return [];
  return Object.values(bindings).flatMap(toRecords);
}

// ── Resolve baseline ────────────────────────────────────────────────────────
let base = process.argv[2];
if (!base) base = git('rev-parse --verify origin/main', true) ? 'origin/main' : 'HEAD';

// ── Which data files changed ────────────────────────────────────────────────
const nameList = git(`diff --name-only ${base} -- data/`, true);
if (nameList === null) {
  console.error(`Could not diff against '${base}'. Is this a git repo with that ref?`);
  process.exit(1);
}
const changedFiles = nameList.split('\n').map(s => s.trim()).filter(f => f.endsWith('.js'));

if (changedFiles.length === 0) {
  console.log(`No data/*.js changes vs ${base} — nothing to verify. ✅`);
  process.exit(0);
}

// ── Per-file structured diff ────────────────────────────────────────────────
let totalAdded = 0, totalModified = 0;
console.log(`\nChanged records to verify (baseline: ${base})`);
console.log('═'.repeat(66));

for (const file of changedFiles) {
  const oldRecs = recordsFrom(git(`show ${base}:${file}`, true));      // [] if new file
  const newRecs = recordsFrom(existsSync(file) ? readFileSync(file, 'utf8') : null);

  const oldMap = new Map(oldRecs.map(r => [keyOf(r), JSON.stringify(r)]));
  const added = [], modified = [];
  for (const r of newRecs) {
    const k = keyOf(r);
    if (!oldMap.has(k)) added.push(k);
    else if (oldMap.get(k) !== JSON.stringify(r)) modified.push(k);
  }

  if (!added.length && !modified.length) continue;
  totalAdded += added.length;
  totalModified += modified.length;

  console.log(`\n${file}`);
  for (const k of added)    console.log(`   + [ADDED]    ${k}`);
  for (const k of modified) console.log(`   ~ [MODIFIED] ${k}`);
}

console.log('\n' + '═'.repeat(66));
console.log(`${totalAdded} added, ${totalModified} modified across ${changedFiles.length} file(s).`);
console.log('Run the agents/prelive.md Stage 2 checklist on ONLY these records.\n');
