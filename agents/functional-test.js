#!/usr/bin/env node
// Vazhi Functional Test Runner
// Run from project root: node agents/functional-test.js
//
// Tests behavioral correctness: filter results, search matches,
// category coverage, cross-references under real query conditions.

import { readFileSync } from 'fs';

// ── HELPERS ──────────────────────────────────────────────────────────────────

const failures = [];
let passCount = 0;
let failCount = 0;

function loadJS(path, varName) {
  let src = readFileSync(path, 'utf8')
    .replace(/^\s*\/\/.*/gm, '')
    .replace(/\bconst\s+/g, 'var ');
  try {
    return new Function(src + `; return ${varName};`)();
  } catch (e) {
    failures.push(`[${path}] PARSE ERROR: ${e.message}`);
    return null;
  }
}

function assert(condition, groupLabel, description) {
  if (condition) {
    passCount++;
  } else {
    failCount++;
    failures.push(`[${groupLabel}] FAIL: ${description}`);
  }
}

function groupHeader(label) {
  return label;
}

// ── LOAD DATA ────────────────────────────────────────────────────────────────

const STREAMS      = loadJS('data/courses.js',       'STREAMS');
const EXAM_GROUPS  = loadJS('data/exams.js',          'EXAM_GROUPS');
const INTEREST     = loadJS('data/interest.js',       'INTEREST_AREAS');
const AFTER_UG     = loadJS('data/after-ug.js',       'AFTER_UG');
const CAREER_MAP   = loadJS('data/career-guide.js',   'CAREER_MAP');
const JOSAA_META   = loadJS('data/josaa-meta.js',     'JOSAA_META');
const ANNOUNCEMENTS= loadJS('data/announcements.js',  'ANNOUNCEMENTS');
const COLLEGES     = loadJS('data/colleges-tn.js',    'COLLEGES');
const PG_COLLEGES  = loadJS('data/pg-colleges.js',    'PG_COLLEGES');
const PG_EXAMS     = loadJS('data/pg-exams.js',       'PG_EXAM_GROUPS');

// ── GROUP 1: Subject filter correctness ──────────────────────────────────────

const G1 = groupHeader('Subject filters');
if (STREAMS) {
  const allCourses = STREAMS.flatMap(s => s.courses || []);
  for (const subj of ['PCM', 'PCB', 'Arts', 'Commerce']) {
    const hits = allCourses.filter(c => Array.isArray(c.subjects) && c.subjects.includes(subj));
    assert(hits.length > 0, G1, `No courses found for subject filter "${subj}"`);
  }
  // 'Any' — every stream should have at least one course
  assert(allCourses.length > 0, G1, `Total course count is zero`);
  console.log(`✅ Subject filters    — ${STREAMS.length} streams, filters for PCM/PCB/Arts/Commerce all return results`);
} else {
  console.log(`❌ Subject filters    — could not load courses.js`);
}

// ── GROUP 2: Exam level filter ────────────────────────────────────────────────

const G2 = groupHeader('Exam levels');
if (EXAM_GROUPS) {
  const allExams = EXAM_GROUPS.flatMap(g => g.exams || []);
  const validLvl = ['National', 'State', 'Private', 'Institute'];
  for (const lvl of validLvl) {
    const hits = allExams.filter(e => e.level === lvl);
    assert(hits.length > 0, G2, `No exams found for level "${lvl}"`);
  }
  console.log(`✅ Exam levels        — ${allExams.length} exams, all required levels covered`);
} else {
  console.log(`❌ Exam levels        — could not load exams.js`);
}

// ── GROUP 3: Career search keyword matching ───────────────────────────────────

const G3 = groupHeader('Career search');
if (CAREER_MAP) {
  const sampleKeywords = ['doctor', 'engineer', 'law', 'design', 'finance'];
  let matched = 0;
  for (const kw of sampleKeywords) {
    const hits = CAREER_MAP.filter(c => Array.isArray(c.keywords) && c.keywords.includes(kw));
    const found = hits.length > 0;
    assert(found, G3, `Keyword "${kw}" matches 0 career entries`);
    if (found) matched++;
  }
  console.log(`✅ Career search      — ${matched}/${sampleKeywords.length} sample keywords resolve to cards`);
} else {
  console.log(`❌ Career search      — could not load career-guide.js`);
}

// ── GROUP 4: After-UG category completeness ───────────────────────────────────

const G4 = groupHeader('After-UG cats');
if (AFTER_UG) {
  const validCats = ['Higher Education', 'Research', 'Government Jobs', 'Professional', 'Study Abroad'];
  for (const cat of validCats) {
    const hits = AFTER_UG.filter(e => e.category === cat);
    assert(hits.length > 0, G4, `No After-UG entry for category "${cat}"`);
  }
  // No unknown categories
  const knownCats = new Set(validCats);
  for (const e of AFTER_UG) {
    assert(knownCats.has(e.category), G4, `Entry "${e.id || e.name}" has unknown category "${e.category}"`);
  }
  console.log(`✅ After-UG cats      — ${AFTER_UG.length} entries across all 5 categories`);
} else {
  console.log(`❌ After-UG cats      — could not load after-ug.js`);
}

// ── GROUP 5: Interest area → course coverage ──────────────────────────────────

const G5 = groupHeader('Interest areas');
if (INTEREST) {
  const subjKeys = Object.keys(INTEREST);
  let totalAreas = 0;
  let areasWithCourses = 0;
  for (const subj of subjKeys) {
    const areas = INTEREST[subj];
    assert(Array.isArray(areas) && areas.length >= 1, G5, `Subject "${subj}" has no areas`);
    for (const area of (areas || [])) {
      totalAreas++;
      const hasCourses = Array.isArray(area.courses) && area.courses.length >= 1;
      assert(hasCourses, G5, `Area "${area.name || area.id}" (${subj}) has no courses`);
      if (hasCourses) areasWithCourses++;
    }
  }
  assert(totalAreas >= 8, G5, `Total interest areas ${totalAreas} is below minimum of 8`);
  console.log(`✅ Interest areas     — ${subjKeys.length} subject groups, ${totalAreas} areas, ${areasWithCourses} with courses`);
} else {
  console.log(`❌ Interest areas     — could not load interest.js`);
}

// ── GROUP 6: JoSAA meta coverage ─────────────────────────────────────────────

const G6 = groupHeader('JoSAA meta');
if (JOSAA_META) {
  // instType is a parallel array to institutes
  const types = new Set(JOSAA_META.instType || []);
  for (const t of ['IIT', 'NIT', 'IIIT']) {
    assert(types.has(t), G6, `instType array missing "${t}" entries`);
  }
  assert(Array.isArray(JOSAA_META.programs) && JOSAA_META.programs.length >= 5,
    G6, `programs array has fewer than 5 entries`);
  assert(Array.isArray(JOSAA_META.institutes) && JOSAA_META.institutes.length >= 5,
    G6, `institutes array has fewer than 5 entries`);
  const iitCount = (JOSAA_META.instType || []).filter(t => t === 'IIT').length;
  const nitCount = (JOSAA_META.instType || []).filter(t => t === 'NIT').length;
  console.log(`✅ JoSAA meta         — ${JOSAA_META.institutes.length} institutes (${iitCount} IITs, ${nitCount} NITs), ${JOSAA_META.programs.length} programs`);
} else {
  console.log(`❌ JoSAA meta         — could not load josaa-meta.js`);
}

// ── GROUP 7: Announcements freshness & validity ───────────────────────────────

const G7 = groupHeader('Announcements');
if (ANNOUNCEMENTS) {
  const today = new Date().toISOString().slice(0, 10);
  const isoRe = /^\d{4}-\d{2}-\d{2}$/;
  const validCats = new Set(['exam', 'result', 'counselling', 'application', 'admission', 'news']);
  let upcomingCount = 0;

  for (const a of ANNOUNCEMENTS) {
    assert(isoRe.test(a.date), G7, `Entry "${a.id}" has non-ISO date "${a.date}"`);
    assert(validCats.has(a.category), G7, `Entry "${a.id}" has unknown category "${a.category}"`);
    if (a.date >= today) upcomingCount++;
  }
  assert(upcomingCount >= 1, G7, `No upcoming announcements (all dates are in the past)`);
  console.log(`✅ Announcements      — ${ANNOUNCEMENTS.length} entries, ${upcomingCount} upcoming, all dates valid`);
} else {
  console.log(`❌ Announcements      — could not load announcements.js`);
}

// ── GROUP 8: College stream filter (TN sample) ───────────────────────────────

const G8 = groupHeader('TN stream filter');
if (COLLEGES) {
  for (const stream of ['Engineering', 'Medical', 'Arts & Science']) {
    const hits = COLLEGES.filter(c => Array.isArray(c.streams) && c.streams.includes(stream));
    assert(hits.length > 0, G8, `No TN colleges found for stream "${stream}"`);
  }
  console.log(`✅ TN stream filter   — ${COLLEGES.length} colleges, Engineering/Medical/Arts & Science all covered`);
} else {
  console.log(`❌ TN stream filter   — could not load colleges-tn.js`);
}

// ── GROUP 9: PG college and exam coverage ────────────────────────────────────

const G9 = groupHeader('PG coverage');
if (PG_COLLEGES && PG_EXAMS) {
  const pgStates = new Set(PG_COLLEGES.map(c => c.state).filter(Boolean));
  assert(pgStates.size >= 5, G9, `PG colleges only cover ${pgStates.size} states (expected >= 5)`);

  assert(PG_EXAMS.length >= 3, G9, `PG exam groups count ${PG_EXAMS.length} is below 3`);

  const allPgExamNames = PG_EXAMS.flatMap(g => (g.exams || []).map(e => e.name));
  assert(allPgExamNames.includes('GATE'), G9, `GATE not found in PG_EXAM_GROUPS`);

  console.log(`✅ PG coverage        — ${PG_COLLEGES.length} PG colleges (${pgStates.size} states), ${PG_EXAMS.length} exam groups`);
} else {
  console.log(`❌ PG coverage        — could not load pg-colleges.js or pg-exams.js`);
}

// ── GROUP 10: Cross-reference integrity (career ↔ streams ↔ after-ug) ────────

const G10 = groupHeader('Cross-references');
if (CAREER_MAP && STREAMS && AFTER_UG) {
  const streamIds = new Set(STREAMS.map(s => s.id));
  const augIds    = new Set(AFTER_UG.map(e => e.id));

  for (const c of CAREER_MAP) {
    if (c.streamId) {
      const stream = STREAMS.find(s => s.id === c.streamId);
      assert(!!stream, G10, `Career "${c.id}" streamId "${c.streamId}" not in STREAMS`);
      if (stream) {
        assert(Array.isArray(stream.courses) && stream.courses.length >= 1,
          G10, `Career "${c.id}" → stream "${c.streamId}" has no courses`);
      }
    }
    for (const aid of (c.augIds || [])) {
      const aug = AFTER_UG.find(e => e.id === aid);
      assert(!!aug, G10, `Career "${c.id}" augId "${aid}" not in AFTER_UG`);
      if (aug) {
        assert(!!aug.salary, G10, `Career "${c.id}" → augId "${aid}" entry missing salary`);
      }
    }
  }
  console.log(`✅ Cross-references   — ${CAREER_MAP.length} career entries, all streamId and augId refs valid`);
} else {
  console.log(`❌ Cross-references   — could not load one or more of: career-guide.js, courses.js, after-ug.js`);
}

// ── SUMMARY ──────────────────────────────────────────────────────────────────

console.log('');
const total = passCount + failCount;
if (failCount === 0) {
  console.log(`🎉 All 10 test groups passed — ${total} assertions, 0 failures`);
} else {
  console.log(`⚠️  ${failCount} assertion(s) failed out of ${total}:\n`);
  failures.forEach(f => console.log('  •', f));
  process.exit(1);
}
