#!/usr/bin/env node
// Vazhi Career Keyword Coverage Audit
// Run from project root: node agents/career-audit.js
//
// Tests whether each career term in the master list matches at least one
// course (via name/exam/institutes/careers field) or one after-UG entry.
// Prints a ✅/❌ report and exits non-zero if gaps are found.

import { readFileSync } from 'fs';

function loadJS(path, varName) {
  const src = readFileSync(path, 'utf8')
    .replace(/^\s*\/\/.*/gm, '')
    .replace(/\bconst\s+/g, 'var ');
  try {
    return new Function(src + `; return ${varName};`)();
  } catch (e) {
    console.error(`[${path}] PARSE ERROR: ${e.message}`);
    process.exit(1);
  }
}

const STREAMS  = loadJS('data/courses.js',  'STREAMS');
const AFTER_UG = loadJS('data/after-ug.js', 'AFTER_UG');

const ALL_COURSES = STREAMS.flatMap(s => s.courses || []);

function searchable(c) {
  return [c.name, c.exam, c.institutes, c.careers].join(' ').toLowerCase();
}
function searchableAug(e) {
  return [e.name, e.field, e.careers, e.note || ''].join(' ').toLowerCase();
}

function matches(keyword) {
  const kw = keyword.toLowerCase();
  return ALL_COURSES.some(c => searchable(c).includes(kw))
      || AFTER_UG.some(e => searchableAug(e).includes(kw));
}

// ── MASTER LIST ───────────────────────────────────────────────────────────────
// Add new terms here whenever a gap is found. Group by domain for readability.

const CAREER_TERMS = [
  // Medicine & Health
  'doctor', 'mbbs', 'surgeon', 'physician', 'radiologist', 'cardiologist',
  'dentist', 'nurse', 'nursing', 'pharmacist', 'physiotherapist',
  'dietitian', 'nutritionist', 'psychologist', 'psychiatrist',
  'optometrist', 'speech therapist', 'audiologist', 'lab technician',
  'paramedical', 'ayurveda', 'homeopathy', 'siddha', 'naturopath',
  'veterinarian', 'veterinary',

  // Engineering & Tech
  'software developer', 'software engineer', 'coder', 'programmer',
  'web developer', 'app developer', 'data scientist', 'data analyst',
  'ai engineer', 'machine learning', 'cyber security', 'ethical hacker',
  'electronics engineer', 'mechanical engineer', 'civil engineer',
  'chemical engineer', 'aerospace engineer', 'marine engineer',
  'petroleum engineer', 'mining engineer', 'chip designer', 'vlsi',

  // Civil Services & Government
  'ias officer', 'ips officer', 'ifs officer', 'collector',
  'district magistrate', 'dgp', 'secretary to government',
  'civil services', 'upsc', 'forest officer',
  'bank po', 'probationary officer', 'rbi', 'nabard',
  'ssc', 'defence', 'army officer', 'navy officer', 'air force officer',
  'pilot', 'fighter pilot', 'coast guard',

  // Law & Policy
  'advocate', 'lawyer', 'judge', 'judicial services', 'corporate counsel',
  'public prosecutor', 'legal advisor',

  // Commerce & Finance
  'chartered accountant', 'ca', 'company secretary', 'cost accountant',
  'actuary', 'investment banking', 'financial analyst', 'auditor',
  'tax consultant', 'economist', 'banking officer',

  // Management
  'management consultant', 'product manager', 'marketing', 'mba', 'iim',

  // Science & Research
  'scientist', 'researcher', 'isro', 'drdo', 'barc', 'physics',
  'chemist', 'biologist', 'statistician', 'mathematician',
  'marine biologist', 'oceanographer',

  // Agriculture & Environment
  'agricultural officer', 'agribusiness', 'horticulture', 'food technology',
  'sericulture', 'fisheries', 'environmental consultant', 'wildlife scientist',

  // Design & Architecture
  'architect', 'urban planner', 'interior designer', 'fashion designer',
  'graphic designer', 'ux designer', 'product designer', 'animator',

  // Arts, Media & Communication
  'journalist', 'news anchor', 'content writer', 'copywriter',
  'photographer', 'film director', 'cinematographer', 'actor',
  'pr professional', 'social media',

  // Education
  'teacher', 'lecturer', 'assistant professor', 'professor',

  // Sports & Fitness
  'sports coach', 'fitness trainer', 'physiotherapist', 'yoga teacher',
  'physical education teacher',

  // Hospitality & Tourism
  'hotel manager', 'chef', 'event manager', 'travel',

  // Maritime
  'ship captain', 'merchant navy', 'deck officer',

  // Emerging
  'entrepreneur', 'startup', 'game developer', 'blockchain',
];

// ── RUN AUDIT ─────────────────────────────────────────────────────────────────

const hits   = [];
const misses = [];

for (const term of CAREER_TERMS) {
  if (matches(term)) {
    hits.push(term);
  } else {
    misses.push(term);
  }
}

const pad = Math.max(...CAREER_TERMS.map(t => t.length));

console.log('\n── Vazhi Career Keyword Coverage Audit ──────────────────────────\n');

console.log('✅  COVERED\n');
for (const t of hits) {
  console.log(`   ✅  ${t}`);
}

if (misses.length) {
  console.log('\n❌  NOT COVERED — add career synonyms or a new course entry\n');
  for (const t of misses) {
    console.log(`   ❌  ${t}`);
  }
}

console.log(`\n─────────────────────────────────────────────────────────────────`);
console.log(`   ${hits.length} covered  |  ${misses.length} gaps  |  ${CAREER_TERMS.length} total terms`);
console.log(`─────────────────────────────────────────────────────────────────\n`);

if (misses.length > 0) process.exit(1);
