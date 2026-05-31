# Vazhi வழி — Claude Code Instructions

This file tells Claude Code how to work on this project.
Claude Code reads this file automatically at the start of every session.

---

## Project Overview

Vazhi is an education guidance website for Indian students after Class 12.

**Live scope:**
- UG Courses & Exams — national coverage
- Colleges — Tamil Nadu, Puducherry, and all major Indian states
- PG Colleges & PG Exams — national coverage
- After UG pathways (Higher Education, Research, Govt Jobs, Professional, Study Abroad)
- JoSAA Rank Predictor (IIT/NIT/IIIT counselling)
- Career Guide — search by career goal
- Announcements — exam dates, results, counselling windows
- Glossary — 40 key education terms in English + Tamil
- Scholarships — government, central, and merit-based scholarships
- Internships — government, PSU, and research internships
- Know Yourself (Psychometric) — Holland RIASEC interest test with bilingual (EN/Tamil) support; results saved to localStorage and rendered as a separate career report page (`report.html`)

---

## College & Institute Scope — STRICTLY ENFORCED

Vazhi shows only **government-funded and merit-only institutions**. This applies to ALL data files.

**Allowed:**
- Central Govt: IITs, NITs, IIITs, AIIMS, NLUs, IIMs, IISER, NISER, IISc, ISI, CMI, IIST, RRU (MHA), IIMC, Central IHMs (NCHMCT), NIFT, NID, IITTM, LNIPE, TNPESU, FTII, SRFTI
- State Govt / Govt Aided: Anna University affiliates, state colleges (TNEA, KCET etc.), DU, BHU, JNU, Hyderabad Central, Pondicherry Central Univ, CMC Vellore (aided), Loyola Chennai (aided), Maulana Azad, TANUVAS, TNAU, etc.
- Merit-access exceptions (no donation seats, purely merit-based): **BITS Pilani/Goa/Hyderabad** (BITSAT), **TISS** (TISSBAT — central deemed, subsidised fees), **XLRI Jamshedpur** (XAT — post-UG PGDM only, mention in career trajectories)

**Never add:**
VIT, SRM, Manipal, Amrita, Amity, Jain, Symbiosis, Jindal, Christ, FLAME, Pearl Academy, Saveetha, SASTRA, JSS, Ashoka, Arena Animation, MIT-ID, or any other private self-financing college.

---

## Folder Structure

```
Vazhi/
  index.html              ← Shell only. Nav, tabs, HTML structure. Rarely edited.
  index-lite.html         ← PROPOSAL / review copy: UG-only nav + 3-step wizard home
                            + Firestore-backed contact form. Not yet live.
                            Once finalised, rename to index.html (or merge selectively).
  css/
    vazhi.css             ← All styles. Edit for visual changes only.
    vazhi-lite.css        ← Styles for the lite home (wizard + contact + tab banners).
                            Loaded by index-lite.html AFTER vazhi.css.

  data/                   ← ALL content lives here. Never touch js/ for data changes.
    courses.js            ← STREAMS[] — UG course cards, entrance exams, careers
    interest.js           ← INTEREST_AREAS{} — Find by Interest step-flow data
    market.js             ← TRENDING_COURSES[], SALARY_DATA[], OPPORTUNITIES[]
    exams.js              ← EXAM_GROUPS[] — UG entrance exam cards with institutes
    colleges-tn.js        ← COLLEGES[] — Tamil Nadu & Puducherry UG colleges
    colleges-ka.js        ← COLLEGES_KA[] — Karnataka
    colleges-kl.js        ← COLLEGES_KL[] — Kerala
    colleges-ap.js        ← COLLEGES_AP[] — Andhra Pradesh
    colleges-ts.js        ← COLLEGES_TS[] — Telangana
    colleges-mh.js        ← COLLEGES_MH[] — Maharashtra
    colleges-dl.js        ← COLLEGES_DL[] — Delhi
    colleges-wb.js        ← COLLEGES_WB[] — West Bengal
    colleges-up.js        ← COLLEGES_UP[] — Uttar Pradesh
    colleges-rj.js        ← COLLEGES_RJ[] — Rajasthan
    colleges-mp.js        ← COLLEGES_MP[] — Madhya Pradesh
    colleges-gj.js        ← COLLEGES_GJ[] — Gujarat
    colleges-pb.js        ← COLLEGES_PB[] — Punjab
    colleges-hr.js        ← COLLEGES_HR[] — Haryana
    colleges-hp.js        ← COLLEGES_HP[] — Himachal Pradesh
    colleges-br.js        ← COLLEGES_BR[] — Bihar
    colleges-jh.js        ← COLLEGES_JH[] — Jharkhand
    colleges-od.js        ← COLLEGES_OD[] — Odisha
    colleges-cg.js        ← COLLEGES_CG[] — Chhattisgarh
    colleges-uk.js        ← COLLEGES_UK[] — Uttarakhand
    colleges-as.js        ← COLLEGES_AS[] — Assam
    colleges-ne.js        ← COLLEGES_NE[] — North-East states
    colleges-ga.js        ← COLLEGES_GA[] — Goa
    colleges-jk.js        ← COLLEGES_JK[] — J&K / Ladakh
    colleges-ch.js        ← COLLEGES_CH[] — Chandigarh / UT colleges
    pg-colleges.js        ← PG_COLLEGES[] — PG universities, national scope
    pg-exams.js           ← PG_EXAM_GROUPS[] — PG entrance exams (GATE, CAT, JAM …)
    after-ug.js           ← AFTER_UG[] — After UG pathways (Higher Ed, Research, Govt …)
    josaa-meta.js         ← JOSAA_META{} — institute/program lookup for JoSAA predictor
    josaa.js              ← JOSAA_ROWS[] — compact allotment rows for JoSAA predictor
    career-guide.js       ← CAREER_MAP[] — career search keyword → degree/exam/path cards
    announcements.js      ← ANNOUNCEMENTS[] — exam dates, results, counselling windows
    glossary.js           ← GLOSSARY[] — 40 terms in English + Tamil
    scholarships.js       ← SCHOLARSHIPS[] — government & merit-based scholarship entries
    internships.js        ← INTERNSHIPS[] — government, PSU, and research internship entries
    psychometric.js       ← Holland RIASEC test data: questions, career map, profiles (bilingual)
    wizard.js             ← Home wizard data (lite home) — class & subject chips + bilingual UI strings
    subject-strengths.js  ← SUBJECT_STRENGTHS[] — Step 3 strength categories → grouped UG course lists (bilingual)

  js/                     ← ALL logic lives here. Never touch data/ for logic changes.
    app.js                ← State variables + switchTab(). Core navigation.
    explore.js            ← Tab: Explore Courses — render + filter
    interest.js           ← Tab: Find by Interest — step flow logic
    market.js             ← Tab: Market Trends — render
    exams.js              ← Tab: Entrance Exams — render + filter (UG)
    colleges.js           ← Tab: Colleges — render + filter (UG + PG mode)
    after-ug.js           ← Tab: After UG — render + filter
    josaa.js              ← Tab: College Predictor — JoSAA rank predictor logic
    career-guide.js       ← Career Guide search + render
    announcements.js      ← Announcements panel render
    glossary.js           ← Glossary render
    scholarships.js       ← Scholarships tab render + filter
    internships.js        ← Internships tab render + filter
    psychometric.js       ← Know Yourself tab — RIASEC test state machine + render
    report.js             ← Standalone career report page logic (reads localStorage)
    auth.js               ← Firebase Auth + Firestore + sign-in modal + saved colleges API (exposed as window.VazhiAuth)
    wizard.js             ← Home wizard (lite home) — 3-step state machine; reuses renderCareerPath()
    contact.js            ← "Talk to Vazhi" form — writes to Firestore `contact_requests`; mailto fallback. window.VazhiContact API
    firebase-config.js    ← Firebase project keys (safe to commit; security via Firestore rules + authorized domains)

  report.html             ← Standalone career report page (linked from psychometric results)
  css/
    vazhi.css             ← All styles for index.html. Edit for visual changes only.
    report.css            ← Styles for report.html only.
    auth.css              ← Sign-in button, modal, save heart, "My Shortlist" toggle

  agents/
    firestore.rules       ← Firestore security rules — paste into Firebase console (reference only, not served)
    data-updater.md       ← Add/edit UG colleges, exams, courses, interest areas
    pg-data-updater.md    ← Add/edit PG colleges and PG exams
    after-ug-updater.md   ← Add/edit After UG pathways
    content-updater.md    ← Add/edit announcements, career-guide entries, glossary terms
    counselling-predictor.md ← Add a new counselling rank predictor system
    annual-refresh.md     ← Yearly data refresh checklist (NIRF, exam dates, salaries)
    scholarship-updater.md   ← Add/edit scholarship entries
    internship-curator.md    ← Add/edit internship entries
    psychometric-updater.md  ← Edit RIASEC questions, career map, profiles
    newspaper-ad-curator.md  ← Triage newspaper-ad photos from ~/Vazhi/vazhi-ads/ into data files
    validator.md          ← Check data quality before publishing
    validate.js           ← Brace-balance checker script
    functional-tester.md  ← Behavioral correctness tests (filters, search, cross-refs)
    functional-test.js    ← Node script: run behavioral tests (node agents/functional-test.js)
    check.sh              ← Full data health check: runs validate.js + functional-test.js

  CLAUDE.md               ← This file
```

---

## Rules — Always Follow

1. **Never edit index.html or CSS for data changes.** Data lives in `data/*.js` only.
2. **Never edit data files for UI/logic changes.** Logic lives in `js/*.js` only.
3. **Match the existing schema exactly** when adding new entries.
4. **Test by checking brace balance** after any JS edit:
   Count `{` must equal count `}` in each file. Count `[` must equal `]`.
   Run `sh agents/check.sh` from the project root to run both the schema validator and behavioral tests.
5. **One file per task.** If asked to add a college, only touch the relevant `colleges-*.js`.
   If asked to fix a filter, only touch the relevant `js/` file.
6. **Read the agent file first.** Each agents/*.md file has the exact schema and rules
   for its domain. Always read it before editing the corresponding data file.

---

## Data Schemas (quick reference)

### UG College entry (`colleges-tn.js` and all `colleges-*.js`)
```js
{
  name: 'Full College Name',
  short: 'Short Name',
  type: 'Central' | 'State' | 'Aided' | 'Deemed' | 'Private',
  district: 'Chennai',
  state: 'Tamil Nadu',
  naac: 'A++' | 'A+' | 'A' | 'Accredited',
  nirf: 'Rank description',
  affil: 'Affiliated university or body',
  website: 'college.ac.in',  // no https://
  streams: ['Engineering', 'Medical'],  // for filter
  specialNote: 'Optional — shown as amber highlight',
  programGroups: [
    {
      stream: 'Engineering & Technology',
      programs: [
        { name: 'B.Tech CSE (4 years)', exam: 'JEE Main', examCss: 'ce-jee' }
      ]
    }
  ]
}
```

### examCss values (UG)
`ce-tnea | ce-jee | ce-cuet | ce-neet | ce-nata | ce-clat | ce-own | ce-merit | ce-icar | ce-nchm`

### examCss values (PG — additional)
`ce-gate | ce-cat | ce-jam | ce-net | ce-cuetpg | ce-neetpg`

### PG College entry (`pg-colleges.js`)
Same schema as UG colleges. Key differences:
- `type` can also be `'INI'` (Institute of National Importance — IISc, TISS etc.)
- `streams` uses PG stream labels: `'Arts & Science'`, `'Management'`, `'Engineering'` etc.
- `programs[].examCss` uses the PG examCss values above

### PG Exam entry (`pg-exams.js`)
```js
{
  name: 'GATE',
  full: 'Graduate Aptitude Test in Engineering',
  body: 'IIT (rotating) + IISc',
  level: 'National' | 'State' | 'Private' | 'Institute' | 'Professional',
  freq: 'Once a year (Feb)',
  for: 'Who this exam is for',
  website: 'gate.iitX.ac.in',
  note: 'Important note or empty string',
  seats: '~12,000 M.Tech seats at IITs + NITs',
  papers: [
    { code: 'CS', name: 'Computer Science & IT', topics: ['Algorithms', 'DBMS', 'OS', '…'] }
  ],
  institutes: [
    { name: 'IISc Bangalore', city: 'Bangalore, KA', tier: '🏆 #1 Research' }
  ]
}
```
Note: `papers[]` replaces `subjects[]` used in UG exams.

### UG Exam entry (`exams.js`)
```js
{
  name: 'JEE Main',
  full: 'Joint Entrance Examination Main',
  body: 'NTA',
  level: 'National' | 'State' | 'Private' | 'Institute' | 'Professional',
  freq: 'Twice a year (Jan & Apr)',
  subjects: ['PCM', 'PCM+CS', 'PCMB'],
  for: 'Who this exam is for',
  website: 'jeemain.nta.nic.in',
  note: 'Important note or empty string',
  seats: '~40,000 NITs + 15,000 IIITs',
  institutes: [
    { name: 'NIT Trichy', city: 'Trichy, TN', tier: '🏆 Top NIT' }
  ]
}
```

### Course entry (`courses.js`)
```js
{
  name: 'B.Tech CSE',
  exam: 'JEE Main / JEE Advanced',
  examLvl: 'National',
  institutes: 'IITs, NITs, BITS Pilani',
  careers: 'Software Engineer, AI/ML, Product Manager',
  salary: '₹6–35 LPA',
  market: 'High' | 'Growing' | 'Stable' | 'Niche',
  badge: 'Top demand',
  bc: 'coral' | 'teal' | 'green' | 'purple' | 'amber' | 'accent',
  subjects: ['PCM', 'PCM+CS', 'PCMB'],
  trending: true  // optional
}
```

### Announcement entry (`announcements.js`)
```js
{
  id: 'unique-slug',
  title: 'JEE Main 2026 — Session 1 Exam',
  category: 'exam' | 'result' | 'counselling' | 'application' | 'admission' | 'news',
  icon: '📝',
  date: '2026-01-22',       // ISO format YYYY-MM-DD
  endDate: '2026-01-31',    // optional — for multi-day events
  desc: 'Short description shown on the card.',
  link: 'jeemain.nta.nic.in',  // no https://
  priority: 'high' | 'normal',
  tentative: true            // optional — omit if date is confirmed
}
```

### Glossary entry (`glossary.js`)
```js
{ term: 'IIT', full: 'Indian Institute of Technology', tamil: 'இந்திய தொழில்நுட்பக் கழகம்', desc: 'Plain-English explanation.' }
```

### Career Guide entry (`career-guide.js`)
```js
{
  id: 'unique-slug',
  keywords: ['keyword1', 'keyword2'],   // search terms that trigger this card
  title: 'Career Title',
  ico: '🩺',
  bc: 'coral' | 'teal' | 'green' | 'purple' | 'amber' | 'accent',
  summary: 'One paragraph summary.',
  class12: {
    subjects: ['PCB', 'PCMB'],
    tip: 'Short advice for Class 12 students.',
  },
  streamId: 'Medical',        // matches STREAMS[].id in courses.js
  examNames: ['NEET-UG'],     // matches exam .name in EXAM_GROUPS
  augIds: [],                 // matches AFTER_UG[].id in after-ug.js
  careers: ['Role 1', 'Role 2'],
}
```

### Scholarship entry (`scholarships.js`)
```js
{
  id: 'unique-slug',
  name: 'Full Scholarship Name',
  short: 'Short Name',
  body: 'Administering body',
  level: 'Central' | 'State' | 'Corporate' | 'International',
  for: 'Who this is for',
  ugStream: ['Science' | 'Engineering' | 'Medical' | 'Law' | 'Commerce' | 'Arts' | 'Any'],
  class12Pct: 0,        // minimum Class 12 % required; 0 if none
  amount: '₹4,000 per month',
  duration: '3 years',
  deadline: '',         // deadline string or empty string if rolling
  website: 'example.gov.in',  // no https://
  note: 'Optional additional note',
  badge: 'Badge label',
  bc: 'coral' | 'teal' | 'green' | 'purple' | 'amber' | 'accent',
}
```

### Internship entry (`internships.js`)
```js
{
  id: 'unique-slug',
  name: 'Internship Name',
  short: 'Short Name',
  body: 'Administering body',
  type: 'Government' | 'PSU' | 'Research' | 'International',
  for: 'Who this is for',
  ugStream: ['Any'],    // one or more stream labels, or ['Any']
  duration: '2 months',
  stipend: '₹5,000/month',
  season: 'Summer (May–Jul)',
  deadline: '',         // deadline or empty string
  website: 'example.gov.in',  // no https://
  note: 'Optional additional note',
  badge: 'Badge label',
  bc: 'coral' | 'teal' | 'green' | 'purple' | 'amber' | 'accent',
}
```

---

## Common Tasks

### Add a UG college (Tamil Nadu)
→ Edit `data/colleges-tn.js` only

### Add a UG college (other state)
→ Edit the relevant `data/colleges-XX.js` only

### Add a PG college
→ Edit `data/pg-colleges.js` only — read `agents/pg-data-updater.md` first

### Add a UG entrance exam
→ Edit `data/exams.js` — find the right group and add the entry

### Add a PG entrance exam
→ Edit `data/pg-exams.js` — read `agents/pg-data-updater.md` first

### Add an After UG pathway
→ Edit `data/after-ug.js` — read `agents/after-ug-updater.md` first

### Add/update an announcement (exam date, result, counselling)
→ Edit `data/announcements.js` — read `agents/content-updater.md` first

### Add a career guide entry
→ Edit `data/career-guide.js` — read `agents/content-updater.md` first

### Add a glossary term
→ Edit `data/glossary.js` — read `agents/content-updater.md` first

### Add a new counselling rank predictor
→ Read `agents/counselling-predictor.md` first — it has the full pattern

### Add or edit a home-wizard chip (Step 1 class or Step 2 subject)
→ Edit `data/wizard.js` only — `WZ_CLASS[]` (Step 1) or `WZ_SUBJ[]` (Step 2).
→ Each chip needs `id`/`en`/`ta`/`ico`. Subject ids must also be referenced in `SUBJECT_STRENGTHS[].forSubjects[]` if relevant.
→ Never edit `js/wizard.js` or `index-lite.html` for content tweaks.

### Add or edit a Step 3 subject-strength category
→ Edit `data/subject-strengths.js` only — `SUBJECT_STRENGTHS[]`.
→ Each category needs `id`/`ico`/`en`/`ta`/`tagline{en,ta}`/`forSubjects[]` + `groups[]` with `label{en,ta}` and `courses[].name + .exam`.
→ `forSubjects` ids must match `WZ_SUBJ[].id` in `data/wizard.js` (PCM / PCB / PCMB / Commerce / Arts / unknown).
→ The wizard renders a "See colleges →" deep-link automatically if `course.exam` matches a known exam alias (`WZ_EXAM_ALIASES` in `js/wizard.js`); otherwise the row is text-only.

### Update the contact form / "Talk to Vazhi" copy
→ Edit `js/contact.js` (form HTML in `formHTML()`) for structural changes.
→ For Firestore rules, edit `agents/firestore.rules` and paste into Firebase console → Firestore → Rules.
→ Submissions land in the `contact_requests` collection (Firebase console only — no in-app reader yet).

### Fix a visual/layout issue
→ Edit `css/vazhi.css` only

### Fix a filter or render bug
→ Edit the relevant `js/*.js` file only

### Add/edit a scholarship
→ Edit `data/scholarships.js` — read `agents/scholarship-updater.md` first

### Add/edit an internship
→ Edit `data/internships.js` — read `agents/internship-curator.md` first

### Edit psychometric test questions or career map
→ Edit `data/psychometric.js` only — read `agents/psychometric-updater.md` first
→ Never edit `js/psychometric.js` or `js/report.js` for content changes

### Annual data refresh (NIRF, exam dates, salaries)
→ Read `agents/annual-refresh.md` — it has the full checklist

### Run data health checks
→ `sh agents/check.sh` — runs schema validator + behavioral tests (from project root)

### Bulk-check a list (colleges / exams / scholarships / etc.) — STANDARD WORKFLOW
When the user pastes a list with a prompt like "check and add these colleges:" or "check these exams:":

1. **Read the relevant agent doc first** (`agents/data-updater.md` for colleges/exams/courses; `agents/scholarship-updater.md` for scholarships; etc.) to get the exact schema
2. **For each item in the list:**
   - Search across ALL relevant data files to check if it's already present (don't add duplicates)
   - Verify it meets the scope rule (government / aided / merit-only — no private self-financing per CLAUDE.md §27)
   - If ambiguous (multiple institutes with similar names, unclear scope), SKIP it and list under "needs clarification" — don't guess
3. **Add only the genuinely missing + in-scope entries** to the correct data file (e.g. correct state's `colleges-XX.js`)
4. **Run `sh agents/check.sh`** — the git safety rail + schema check + behavioral tests
5. **Report a 3-column summary:**
   - ✅ Added: which ones (with file path)
   - ⏩ Already present: which ones (and where)
   - ❓ Skipped / needs clarification: which ones (and why)
6. **Do NOT auto-commit** — the user reviews then runs `git commit` themselves

This workflow applies to ANY bulk-add prompt where the user provides a list and wants Claude to dedupe + scope-check + add.

### Process newspaper-ad photos
→ Read `agents/newspaper-ad-curator.md` first — it has the full per-batch workflow.
→ Trigger phrases: "process the newspaper ads", "check the ads folder", "I added more ad photos", or the `/vazhi-newspaper-ads` slash command.
→ Default photo source: `~/Vazhi/vazhi-ads/`. HEIC → JPG via `sips`. After user confirms the summary, delete processed originals.
→ **Standing decisions** (don't re-ask):
  - Recruitment ads → skip the ad, add the institute only if missing.
  - Future admission deadline → add the institution AND a dated `announcements.js` entry.
  - Passed deadline → add the institution, skip the announcement.
  - Scholarships → no govt-only restriction (NGO/corporate/professional-body all OK). Colleges and exams still follow the strict scope rule.

### Add an auth-gated feature
→ Check `window.VazhiAuth && VazhiAuth.getUser()` before rendering protected UI
→ If null, call `VazhiAuth.openModal('signup')` to prompt sign-in
→ Re-render on `VazhiAuth.onAuthChange(u => { if(u) ...; })`
→ Example: see the 🔒 gate in `js/psychometric.js → renderPsychometricTab()`

### Save user data per account
→ Use Firestore subcollections under `users/{uid}/...` — Firestore rules already permit this scope
→ For saved colleges specifically: `VazhiAuth.toggleSaved(college)`, `VazhiAuth.getSavedIds()`, `VazhiAuth.isSaved(id)`
→ Cache returned IDs in a Set when listing — never query per-item in a loop

### Rotate Firebase project / add a new domain
→ Update keys only in `js/firebase-config.js` — no other file needs changes
→ In Firebase console → Authentication → Settings → Authorized domains, add the new domain (no `https://` prefix)
→ Current project: `vazhi-89b4b`. Authorized domains include `kalvivazhi.netlify.app` + `localhost`

### Filter dropdowns and scope rule
→ Filter `<select>` options are derived from the data at render time (`populateCollegeFilters` etc.)
→ This means the "STRICTLY ENFORCED" scope rule is self-enforcing — you can't accidentally show a filter option that has no matching colleges
→ Hardcoded `COL_TYPE_ORDER` in `js/colleges.js` must stay in sync with the scope rule (Central, State, Aided, Deemed — no Private)
