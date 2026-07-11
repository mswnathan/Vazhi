#!/usr/bin/env node
// Vazhi — Link Authority Checker
// Run from project root:
//   node agents/link-authority.js               # links on records changed vs origin/main
//   node agents/link-authority.js HEAD          # ...changed vs last commit (uncommitted work)
//   node agents/link-authority.js --all         # every website/link in the whole dataset
//   node agents/link-authority.js --live        # also do a network reachability check (needs net)
//   node agents/link-authority.js <ref> --live  # combine
//
// Checklist item 7 (agents/prelive.md): every external link should point to the
// official authority. This flags `website:` / `link:` fields whose domain is NOT
// a recognised official pattern, so a human verifies them. Like changed-records.js
// it defaults to the DIFF, not the whole database, to stay cheap.
//
// Exit code: 1 if any 🔴 SUSPICIOUS link is found (so it can gate check.sh); 0 otherwise.

import { execSync } from 'child_process';
import { readFileSync, existsSync, readdirSync } from 'fs';

// ── args ─────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const ALL  = argv.includes('--all');
const LIVE = argv.includes('--live');
const baseRef = argv.find(a => !a.startsWith('--'));

// ── record loading (same approach as changed-records.js) ─────────────────────
function git(cmd, allowFail = false) {
  try { return execSync(`git ${cmd}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }); }
  catch (e) { if (allowFail) return null; throw e; }
}
function evalData(src) {
  if (src == null) return null;
  const cleaned = src.replace(/^\s*\/\/.*/gm, '').replace(/\bconst\s+/g, 'var ');
  const names = [...new Set(
    [...cleaned.matchAll(/\bvar\s+([A-Z][A-Z0-9_]{2,})\s*=\s*[\[{]/g)].map(m => m[1])
  )];
  if (!names.length) return null;
  try { return new Function(cleaned + `; return {${names.join(',')}};`)(); }
  catch { return null; }
}
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
function recordsFrom(src) {
  const b = evalData(src);
  return b ? Object.values(b).flatMap(toRecords) : [];
}
function keyOf(r) {
  return r.id || r.name || r.short || r.term || r.title || JSON.stringify(r).slice(0, 60);
}

// ── which records to check ───────────────────────────────────────────────────
// Returns [{ file, record }]
function targetRecords() {
  if (ALL) {
    const files = readdirSync('data').filter(f => f.endsWith('.js')).map(f => `data/${f}`);
    return files.flatMap(file =>
      recordsFrom(readFileSync(file, 'utf8')).map(record => ({ file, record })));
  }
  const base = baseRef || (git('rev-parse --verify origin/main', true) ? 'origin/main' : 'HEAD');
  const nameList = git(`diff --name-only ${base} -- data/`, true);
  if (nameList === null) { console.error(`Cannot diff against '${base}'.`); process.exit(1); }
  const changedFiles = nameList.split('\n').map(s => s.trim()).filter(f => f.endsWith('.js'));
  const out = [];
  for (const file of changedFiles) {
    const oldMap = new Map(recordsFrom(git(`show ${base}:${file}`, true)).map(r => [keyOf(r), JSON.stringify(r)]));
    for (const record of recordsFrom(existsSync(file) ? readFileSync(file, 'utf8') : null)) {
      const k = keyOf(record);
      if (!oldMap.has(k) || oldMap.get(k) !== JSON.stringify(record)) out.push({ file, record });
    }
  }
  return { list: out, base };
}

// ── domain classification ────────────────────────────────────────────────────
const OFFICIAL = ['.gov.in', '.nic.in', '.ac.in', '.edu.in', '.res.in', '.edu', '.gov.uk', '.go.jp', '.ernet.in'];
const SUSPICIOUS = ['.com', '.net', '.co.in', '.info', '.biz'];
const REVIEW = ['.org.in', '.org', '.in'];

// Known-official exceptions that use a non-standard TLD — extend as you verify links.
const ALLOWLIST = new Set([
  'sacon.in', 'mssrf.org', 'cmfri.org.in', 'icar.org.in', 'cdac.in',
  'mahacet.org', 'reliancefoundation.org', 'nid.edu',
]);

function host(link) {
  return String(link).replace(/^https?:\/\//i, '').split('/')[0].split('?')[0].trim().toLowerCase();
}
function classify(h) {
  if (ALLOWLIST.has(h)) return 'ok';
  if (OFFICIAL.some(s => h.endsWith(s))) return 'ok';
  if (SUSPICIOUS.some(s => h.endsWith(s))) return 'suspicious';
  if (REVIEW.some(s => h.endsWith(s))) return 'review';
  return 'review';
}

// ── optional live reachability ───────────────────────────────────────────────
async function reachable(h) {
  const url = 'https://' + h;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 8000);
  try {
    let r = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ac.signal });
    if (r.status === 405 || r.status === 501) r = await fetch(url, { method: 'GET', redirect: 'follow', signal: ac.signal });
    return r.ok || r.status < 400 ? null : `HTTP ${r.status}`;
  } catch (e) {
    return e.name === 'AbortError' ? 'timeout' : 'unreachable';
  } finally { clearTimeout(t); }
}

// ── run ──────────────────────────────────────────────────────────────────────
const res = targetRecords();
const targets = Array.isArray(res) ? res : res.list;
const base = Array.isArray(res) ? null : res.base;

if (!targets.length) {
  console.log(ALL ? 'No records found.' : `No changed records vs ${base} — no links to check. ✅`);
  process.exit(0);
}

const findings = []; // { file, key, url, host, level, note }
for (const { file, record } of targets) {
  for (const field of ['website', 'link']) {
    const raw = record[field];
    if (!raw || typeof raw !== 'string') continue;
    const h = host(raw);
    if (!h) continue;
    const level = classify(h);
    const notes = [];
    if (/^https?:\/\//i.test(raw)) notes.push('has http(s):// prefix (schema wants bare domain)');
    if (level !== 'ok' || notes.length) {
      findings.push({ file, key: keyOf(record), field, url: raw, host: h, level, note: notes.join('; ') });
    }
  }
}

// optional live check (adds reachability to whatever we're already looking at)
if (LIVE) {
  const seen = new Map();
  for (const f of findings) {
    if (!seen.has(f.host)) seen.set(f.host, await reachable(f.host));
    const problem = seen.get(f.host);
    if (problem) { f.level = 'suspicious'; f.note = [f.note, `live: ${problem}`].filter(Boolean).join('; '); }
  }
}

// ── report ───────────────────────────────────────────────────────────────────
const ICON = { suspicious: '🔴', review: '🟡', ok: '🟢' };
console.log(`\nLink authority — ${ALL ? 'FULL dataset' : `changed records vs ${base}`}${LIVE ? ' + live check' : ''}`);
console.log('═'.repeat(72));

if (!findings.length) {
  console.log('All links use official-authority domains. ✅\n');
  process.exit(0);
}

let redCount = 0, yellowCount = 0;
let lastFile = '';
for (const f of findings.sort((a, b) => (a.file + a.level).localeCompare(b.file + b.level))) {
  if (f.file !== lastFile) { console.log(`\n${f.file}`); lastFile = f.file; }
  if (f.level === 'suspicious') redCount++; else if (f.level === 'review') yellowCount++;
  const tail = f.note ? `  — ${f.note}` : '';
  console.log(`   ${ICON[f.level] || '🟡'} ${f.url}   (${f.key})${tail}`);
}

console.log('\n' + '═'.repeat(72));
console.log(`🔴 ${redCount} suspicious   🟡 ${yellowCount} to review`);
console.log('🔴 = likely NOT the official authority — verify or replace before going live.');
console.log('🟡 = plausibly official (.org / bare .in) — confirm, then add to ALLOWLIST to silence.');
console.log('');
process.exit(redCount > 0 ? 1 : 0);
