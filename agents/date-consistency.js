#!/usr/bin/env node
// Vazhi — Date Consistency Checker
// Run from project root:
//   node agents/date-consistency.js          # dates on records changed vs origin/main + the two HTML stamps
//   node agents/date-consistency.js HEAD      # ...changed vs last commit (uncommitted work)
//   node agents/date-consistency.js --all     # every announcement/deadline in the dataset
//
// Checklist item 8 (agents/prelive.md): "last updated" dates and event/deadline
// dates must be real, consistent, and not stale. Purely mechanical, so it's fully
// automated. Like the other pre-live scripts it is diff-scoped by default.
//
// Checks:
//   • about.html / privacy.html "Last updated:" — must parse and not be in the FUTURE
//   • announcements.js date/endDate — valid ISO, endDate not before date, flag past events
//   • scholarships/internships deadline — non-empty deadlines in the past should be cleared
//
// Exit code: 1 if any 🔴 (real error); 0 otherwise (🟡 are warnings).

import { execSync } from 'child_process';
import { readFileSync, existsSync, readdirSync } from 'fs';

const argv = process.argv.slice(2);
const ALL  = argv.includes('--all');
const baseRef = argv.find(a => !a.startsWith('--'));

// Timezone-neutral "today": use the machine's LOCAL calendar date, not UTC
// (toISOString would shift a day in +offset zones like IST).
const _now = new Date();
const _pad = n => String(n).padStart(2, '0');
const todayISO = `${_now.getFullYear()}-${_pad(_now.getMonth() + 1)}-${_pad(_now.getDate())}`;
const TODAY = new Date(_now.getFullYear(), _now.getMonth(), _now.getDate()); // local midnight
const CUR_YEAR = _now.getFullYear();

const red = [], yellow = [];   // { where, msg }
const flagRed = (where, msg) => red.push({ where, msg });
const flagYellow = (where, msg) => yellow.push({ where, msg });

// ── record loading (shared approach with changed-records.js) ─────────────────
function git(cmd, allowFail = false) {
  try { return execSync(`git ${cmd}`, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }); }
  catch (e) { if (allowFail) return null; throw e; }
}
function evalData(src) {
  if (src == null) return null;
  const cleaned = src.replace(/^\s*\/\/.*/gm, '').replace(/\bconst\s+/g, 'var ');
  const names = [...new Set([...cleaned.matchAll(/\bvar\s+([A-Z][A-Z0-9_]{2,})\s*=\s*[\[{]/g)].map(m => m[1]))];
  if (!names.length) return null;
  try { return new Function(cleaned + `; return {${names.join(',')}};`)(); } catch { return null; }
}
function toRecords(data) {
  if (!data) return [];
  const arr = Array.isArray(data) ? data : Object.values(data);
  const out = [];
  for (const el of arr) {
    if (!el || typeof el !== 'object') continue;
    const hasOwnIdentity = el.name || el.term || el.title;
    const childKey = ['courses', 'exams', 'programs'].find(k => Array.isArray(el[k]) && el[k].some(x => x && (x.name || x.id)));
    if (childKey && !hasOwnIdentity) out.push(...el[childKey]);
    else out.push(el);
  }
  return out;
}
function recordsFrom(src) {
  const b = evalData(src);
  return b ? Object.values(b).flatMap(toRecords) : [];
}
function keyOf(r) { return r.id || r.name || r.short || r.term || r.title || JSON.stringify(r).slice(0, 60); }

// ── date helpers ─────────────────────────────────────────────────────────────
function isValidISO(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return false;
  const y = +m[1], mo = +m[2], d = +m[3];
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return false;
  const dt = new Date(Date.UTC(y, mo - 1, d));   // UTC construction is TZ-neutral
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d; // rejects 2026-02-30 etc.
}
const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
// Parse "9 July 2026" or "July 2026". Returns {date, future} or null if unparseable.
function parseHumanDate(text) {
  let m = text.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (m) {
    const mo = MONTHS.indexOf(m[2].toLowerCase());
    if (mo < 0) return null;
    const d = new Date(+m[3], mo, +m[1]); d.setHours(0, 0, 0, 0);
    return { d, future: d > TODAY };
  }
  m = text.match(/([A-Za-z]+)\s+(\d{4})/);
  if (m) {
    const mo = MONTHS.indexOf(m[1].toLowerCase());
    if (mo < 0) return null;
    const d = new Date(+m[2], mo, 1); d.setHours(0, 0, 0, 0);   // first of that month
    return { d, future: d > TODAY };
  }
  return null;
}

// ── 1. HTML "Last updated" stamps (always checked — cheap, 2 files) ──────────
for (const file of ['about.html', 'privacy.html']) {
  if (!existsSync(file)) continue;
  const m = readFileSync(file, 'utf8').match(/Last updated:\s*([^<]+)</i);
  if (!m) { flagYellow(file, 'no "Last updated:" stamp found'); continue; }
  const raw = m[1].trim();
  const parsed = parseHumanDate(raw);
  if (!parsed) flagRed(file, `"Last updated: ${raw}" — cannot parse the date`);
  else if (parsed.future) flagRed(file, `"Last updated: ${raw}" is in the FUTURE (today is ${todayISO})`);
}

// ── which records to check for date/deadline fields ──────────────────────────
function targetRecords() {
  if (ALL) {
    const files = readdirSync('data').filter(f => f.endsWith('.js')).map(f => `data/${f}`);
    return { list: files.flatMap(file => recordsFrom(readFileSync(file, 'utf8')).map(record => ({ file, record }))), base: null };
  }
  const base = baseRef || (git('rev-parse --verify origin/main', true) ? 'origin/main' : 'HEAD');
  const nameList = git(`diff --name-only ${base} -- data/`, true);
  if (nameList === null) { console.error(`Cannot diff against '${base}'.`); process.exit(1); }
  const changedFiles = nameList.split('\n').map(s => s.trim()).filter(f => f.endsWith('.js'));
  const list = [];
  for (const file of changedFiles) {
    const oldMap = new Map(recordsFrom(git(`show ${base}:${file}`, true)).map(r => [keyOf(r), JSON.stringify(r)]));
    for (const record of recordsFrom(existsSync(file) ? readFileSync(file, 'utf8') : null)) {
      const k = keyOf(record);
      if (!oldMap.has(k) || oldMap.get(k) !== JSON.stringify(record)) list.push({ file, record });
    }
  }
  return { list, base };
}

const { list, base } = targetRecords();

// ── 2 & 3. per-record date checks ────────────────────────────────────────────
for (const { file, record } of list) {
  const id = keyOf(record);

  // Announcement-style event dates
  if ('date' in record) {
    const { date, endDate } = record;
    if (date && !isValidISO(date)) flagRed(file, `${id}: invalid date '${date}' (need YYYY-MM-DD)`);
    if (endDate && !isValidISO(endDate)) flagRed(file, `${id}: invalid endDate '${endDate}'`);
    if (isValidISO(date) && isValidISO(endDate) && endDate < date)
      flagRed(file, `${id}: endDate '${endDate}' is before date '${date}'`);
    const effective = isValidISO(endDate) ? endDate : (isValidISO(date) ? date : null);
    if (effective && effective < todayISO) {
      const prevYear = +effective.slice(0, 4) < CUR_YEAR;
      flagYellow(file, `${id}: event date ${effective} has passed${prevYear ? ' (previous cycle — likely remove/update)' : ' — consider removing/updating'}`);
    }
  }

  // Scholarship / internship deadlines
  if ('deadline' in record && record.deadline) {
    const dl = record.deadline;
    if (!isValidISO(dl)) flagYellow(file, `${id}: deadline '${dl}' is not ISO YYYY-MM-DD (or clear it to '')`);
    else if (dl < todayISO) flagYellow(file, `${id}: deadline ${dl} has passed — set deadline: '' and update the note`);
  }
}

// ── report ───────────────────────────────────────────────────────────────────
console.log(`\nDate consistency — ${ALL ? 'FULL dataset' : `changed records vs ${base}`} + HTML stamps  (today ${todayISO})`);
console.log('═'.repeat(74));
if (!red.length && !yellow.length) {
  console.log('All dates parse, are consistent, and none are stale. ✅\n');
  process.exit(0);
}
for (const f of red)    console.log(`   🔴 [${f.where}] ${f.msg}`);
for (const f of yellow) console.log(`   🟡 [${f.where}] ${f.msg}`);
console.log('\n' + '═'.repeat(74));
console.log(`🔴 ${red.length} error(s)   🟡 ${yellow.length} to review`);
console.log('🔴 = broken/future date — fix before going live.   🟡 = stale/passed — review.\n');
process.exit(red.length > 0 ? 1 : 0);
