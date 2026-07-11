#!/usr/bin/env node
// Vazhi Data Validator
// Run from project root: node agents/validate.js
//
// Checks: schema completeness, valid enum values, brace balance,
//         duplicate IDs, and cross-references between data files.

import { readFileSync, readdirSync } from 'fs';

const issues = [];
const warn = (file, msg) => issues.push(`[${file}] ${msg}`);

function loadJS(path, varName) {
  let src = readFileSync(path, 'utf8')
    .replace(/^\s*\/\/.*/gm, '')   // strip line comments
    .replace(/\bconst\s+/g, 'var '); // allow re-declaration in Function scope
  try {
    return new Function(src + `; return ${varName};`)();
  } catch (e) {
    warn(path, `PARSE ERROR: ${e.message}`);
    return null;
  }
}

// ── 1. SYNTAX / COMPILE CHECK (every data + js file) ─────────────────
// Compile-only (never executes) — catches unbalanced braces/brackets and any
// syntax error in ALL files. More reliable than counting { vs }, which would
// false-positive on brackets that appear inside description strings, and it
// covers every file automatically instead of a hand-maintained list.
const listJs = dir => readdirSync(dir).filter(f => f.endsWith('.js')).map(f => `${dir}/${f}`);
const ALL_JS = [...listJs('data'), ...listJs('js')];
let compiled = 0;
for (const f of ALL_JS) {
  try {
    new Function(readFileSync(f, 'utf8'));   // compile-only: throws on syntax/brace errors
    compiled++;
  } catch (e) {
    warn(f, `SYNTAX ERROR: ${e.message}`);
  }
}
console.log(`✅ syntax           — ${compiled}/${ALL_JS.length} data+js files compile clean`);

// ── 2. SHARED VALID VALUES ───────────────────────────────────────────
const validMkt = new Set(['High', 'Growing', 'Stable', 'Niche']);
const validBc  = new Set(['coral', 'teal', 'green', 'purple', 'amber', 'accent']);
const validLvl = new Set(['National', 'State', 'Private', 'Institute', 'Professional']);
const validExamCss = new Set([
  'ce-tnea', 'ce-jee', 'ce-cuet', 'ce-neet', 'ce-nata',
  'ce-clat', 'ce-own', 'ce-merit', 'ce-icar', 'ce-nchm',
  'ce-gate', 'ce-cat', 'ce-jam', 'ce-net', 'ce-cuetpg', 'ce-neetpg',
]);
const validCat = new Set([
  'Higher Education', 'Research', 'Government Jobs', 'Professional', 'Study Abroad',
]);

// ── 3. COURSES.JS ────────────────────────────────────────────────────
const STREAMS = loadJS('data/courses.js', 'STREAMS');
if (STREAMS) {
  let courseCount = 0;
  for (const s of STREAMS) {
    if (!s.id)    warn('courses.js', `Stream missing id`);
    if (!s.label) warn('courses.js', `Stream "${s.id}" missing label`);
    for (const c of (s.courses || [])) {
      courseCount++;
      const req = ['name', 'exam', 'examLvl', 'institutes', 'careers', 'salary', 'market', 'badge', 'bc', 'subjects'];
      for (const r of req) {
        if (!c[r]) warn('courses.js', `Course "${c.name || '?'}" missing field: ${r}`);
      }
      if (c.market && !validMkt.has(c.market))   warn('courses.js', `Course "${c.name}" invalid market: "${c.market}"`);
      if (c.bc     && !validBc.has(c.bc))         warn('courses.js', `Course "${c.name}" invalid bc: "${c.bc}"`);
      if (c.examLvl && !validLvl.has(c.examLvl)) warn('courses.js', `Course "${c.name}" invalid examLvl: "${c.examLvl}"`);
    }
  }
  console.log(`✅ courses.js       — ${STREAMS.length} streams, ${courseCount} courses`);
}

// ── 4. EXAMS.JS ──────────────────────────────────────────────────────
const EXAM_GROUPS = loadJS('data/exams.js', 'EXAM_GROUPS');
if (EXAM_GROUPS) {
  let examCount = 0;
  for (const g of EXAM_GROUPS) {
    for (const e of (g.exams || [])) {
      examCount++;
      const req = ['name', 'full', 'body', 'level', 'freq', 'subjects', 'for', 'website', 'note', 'seats', 'institutes'];
      for (const r of req) {
        if (e[r] === undefined || e[r] === null) warn('exams.js', `Exam "${e.name || '?'}" missing: ${r}`);
      }
      if (e.level && !validLvl.has(e.level)) warn('exams.js', `Exam "${e.name}" invalid level: "${e.level}"`);
      if (!Array.isArray(e.institutes) || e.institutes.length === 0)
        warn('exams.js', `Exam "${e.name}" has no institutes`);
      for (const inst of (e.institutes || [])) {
        if (!inst.name) warn('exams.js', `Exam "${e.name}" — institute missing name`);
        if (!inst.city) warn('exams.js', `Exam "${e.name}" institute "${inst.name}" missing city`);
        if (!inst.tier) warn('exams.js', `Exam "${e.name}" institute "${inst.name}" missing tier`);
      }
    }
  }
  console.log(`✅ exams.js         — ${EXAM_GROUPS.length} groups, ${examCount} exams`);
}

// ── 5. COLLEGES-TN.JS ────────────────────────────────────────────────
const COLLEGES = loadJS('data/colleges-tn.js', 'COLLEGES');
if (COLLEGES) {
  let progCount = 0;
  for (const c of COLLEGES) {
    const req = ['name', 'short', 'type', 'district', 'state', 'naac', 'nirf', 'affil', 'website', 'streams', 'programGroups'];
    for (const r of req) {
      if (c[r] === undefined || c[r] === null) warn('colleges-tn.js', `College "${c.name || '?'}" missing: ${r}`);
    }
    for (const g of (c.programGroups || [])) {
      for (const p of (g.programs || [])) {
        progCount++;
        if (!p.name)    warn('colleges-tn.js', `College "${c.name}" — program missing name`);
        if (!p.exam)    warn('colleges-tn.js', `College "${c.name}" program "${p.name}" missing exam`);
        if (!p.examCss) warn('colleges-tn.js', `College "${c.name}" program "${p.name}" missing examCss`);
        if (p.examCss && !validExamCss.has(p.examCss))
          warn('colleges-tn.js', `College "${c.name}" invalid examCss: "${p.examCss}"`);
      }
    }
  }
  console.log(`✅ colleges-tn.js   — ${COLLEGES.length} colleges, ${progCount} programs`);
}

// ── 6. AFTER-UG.JS ───────────────────────────────────────────────────
const AFTER_UG = loadJS('data/after-ug.js', 'AFTER_UG');
if (AFTER_UG) {
  const seenIds = new Set();
  for (const e of AFTER_UG) {
    if (!e.id) {
      warn('after-ug.js', `Entry "${e.name || '?'}" missing id`);
    } else {
      if (seenIds.has(e.id)) warn('after-ug.js', `Duplicate id: "${e.id}"`);
      seenIds.add(e.id);
    }
    // badge is intentionally optional — skip it in required check
    const req = ['id', 'name', 'category', 'field', 'duration', 'ugFor', 'exams', 'institutes', 'careers', 'salary', 'market', 'bc'];
    for (const r of req) {
      if (!e[r]) warn('after-ug.js', `Entry "${e.name || '?'}" missing: ${r}`);
    }
    if (e.market   && !validMkt.has(e.market))   warn('after-ug.js', `Entry "${e.name}" invalid market: "${e.market}"`);
    if (e.bc       && !validBc.has(e.bc))         warn('after-ug.js', `Entry "${e.name}" invalid bc: "${e.bc}"`);
    if (e.category && !validCat.has(e.category))  warn('after-ug.js', `Entry "${e.name}" invalid category: "${e.category}"`);
  }
  console.log(`✅ after-ug.js      — ${AFTER_UG.length} entries`);
}

// ── 7. CAREER-GUIDE.JS — cross-reference check ───────────────────────
const CAREER_MAP = loadJS('data/career-guide.js', 'CAREER_MAP');
if (CAREER_MAP && STREAMS && AFTER_UG) {
  const streamIds = new Set(STREAMS.map(s => s.id));
  const augIds    = new Set(AFTER_UG.map(e => e.id));
  for (const c of CAREER_MAP) {
    if (!c.id)               warn('career-guide.js', `Entry missing id`);
    if (!c.title)            warn('career-guide.js', `Entry "${c.id}" missing title`);
    if (!c.keywords?.length) warn('career-guide.js', `Entry "${c.id}" has no keywords`);
    if (!c.careers?.length)  warn('career-guide.js', `Entry "${c.id}" has no careers list`);
    if (c.streamId && !streamIds.has(c.streamId))
      warn('career-guide.js', `Entry "${c.id}" streamId "${c.streamId}" not found in STREAMS`);
    for (const aid of (c.augIds || [])) {
      if (!augIds.has(aid))
        warn('career-guide.js', `Entry "${c.id}" augId "${aid}" not found in AFTER_UG`);
    }
  }
  console.log(`✅ career-guide.js  — ${CAREER_MAP.length} career entries`);
}

// ── 8. INTEREST.JS ───────────────────────────────────────────────────
const INTEREST_AREAS = loadJS('data/interest.js', 'INTEREST_AREAS');
if (INTEREST_AREAS) {
  for (const [subj, areas] of Object.entries(INTEREST_AREAS)) {
    for (const area of areas) {
      if (!area.id || !area.ico || !area.name || !area.desc || !area.insight)
        warn('interest.js', `Area "${area.name || '?'}" (${subj}) missing required field`);
      for (const c of (area.courses || [])) {
        const req = ['name', 'exam', 'institutes', 'careers', 'salary', 'market', 'badge', 'bc'];
        for (const r of req) {
          if (!c[r]) warn('interest.js', `Area "${area.name}" course "${c.name || '?'}" missing: ${r}`);
        }
        if (c.market && !validMkt.has(c.market))
          warn('interest.js', `Area "${area.name}" course "${c.name}" invalid market: "${c.market}"`);
        if (c.bc && !validBc.has(c.bc))
          warn('interest.js', `Area "${area.name}" course "${c.name}" invalid bc: "${c.bc}"`);
      }
    }
  }
  console.log(`✅ interest.js      — ${Object.keys(INTEREST_AREAS).length} subject groups`);
}

// ── 9. SCOPE BLOCKLIST — no private self-financing colleges ──────────
// CLAUDE.md's "STRICTLY ENFORCED" scope rule, made deterministic. Flags known
// private brands appearing in a college name/short field. Edit BANNED to extend
// or whitelist. NOTE: bare 'MIT' is intentionally NOT banned — 'Anna University
// — MIT Campus' (AU-MIT) is a legitimate government college.
const BANNED = [
  /\bVIT\b/i, /\bSRM\b/i, /\bManipal\b/i, /\bAmrita\b/i, /\bAmity\b/i,
  /\bSymbiosis\b/i, /\bJindal\b/i, /\bFLAME\b/i, /\bSaveetha\b/i, /\bSASTRA\b/i,
  /\bAshoka\b/i, /\bJain\b/i, /\bChrist\b/i, /\bJSS\b/i,
  /Pearl Academy/i, /Arena Animation/i, /MIT-?ID\b/i, /MIT-?WPU/i,
];
let scopeChecked = 0;
for (const f of listJs('data').filter(p => /colleges-|pg-colleges/.test(p))) {
  const lines = readFileSync(f, 'utf8').split('\n');
  lines.forEach((line, i) => {
    for (const fm of line.matchAll(/\b(?:name|short):\s*'([^']*)'/g)) {
      scopeChecked++;
      for (const re of BANNED) {
        if (re.test(fm[1]))
          warn(f, `SCOPE: line ${i + 1} "${fm[1]}" matches banned private brand /${re.source}/ — remove or whitelist in validate.js`);
      }
    }
  });
}
console.log(`✅ scope            — ${scopeChecked} college names screened against blocklist`);

// ── SUMMARY ──────────────────────────────────────────────────────────
console.log('');
if (issues.length === 0) {
  console.log('🎉 All checks passed — no issues found!');
} else {
  console.log(`⚠️  ${issues.length} issue(s) found:\n`);
  issues.forEach(i => console.log('  •', i));
  process.exit(1); // non-zero exit so CI/scripts can detect failures
}
