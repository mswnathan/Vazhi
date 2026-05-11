# Agent: PG Data Updater

**Purpose:** Add, edit, or remove entries in `data/pg-colleges.js` and `data/pg-exams.js`.

**Rules:**
- Only touch `data/pg-colleges.js` or `data/pg-exams.js` — one file per task
- Never modify `index.html`, `css/`, or any `js/` file
- College scope applies here too — only government / aided / merit-only institutes (see CLAUDE.md)
- After editing, count `{` and `}` in the file — they must be equal

---

## File 1 — PG Colleges (`data/pg-colleges.js`)

### Schema

Same as UG colleges (`colleges-tn.js`) with these differences:

```js
{
  name: 'Full University / Institute Name',
  short: 'Short Name',
  type: 'Central' | 'State' | 'Deemed' | 'INI',
  // INI = Institute of National Importance (IISc, TISS, AIIMS for PG etc.)
  district: 'City / District',
  state: 'State Name',
  naac: 'A++' | 'A+' | 'A' | 'Accredited' | '',
  nirf: 'Rank description — e.g. "Rank 2 (University) — NIRF 2024"',
  affil: 'Central University — established YYYY',
  website: 'university.ac.in',  // no https://
  streams: ['Arts & Science', 'Engineering', 'Management', 'Law', 'Medical'],
  specialNote: 'Optional — shown as amber highlight. Use for fellowship info, fees, unique strengths.',
  programGroups: [
    {
      stream: 'Stream label shown as section heading',
      programs: [
        { name: 'M.Tech CSE (2 years)', exam: 'GATE', examCss: 'ce-gate' }
      ]
    }
  ]
}
```

### PG examCss values
| CSS class | Exam |
|---|---|
| `ce-gate` | GATE |
| `ce-cat` | CAT / XAT / GMAT (management) |
| `ce-jam` | IIT JAM (science PG) |
| `ce-net` | CSIR-NET / UGC-NET / JEST (research / lectureship) |
| `ce-cuetpg` | CUET-PG (central universities) |
| `ce-neetpg` | NEET-PG / INI-CET (medical PG) |
| `ce-own` | Institute's own entrance exam |
| `ce-merit` | Merit / interview only |

### streams values (PG — use these consistently)
`'Engineering'` | `'Arts & Science'` | `'Management'` | `'Law'` | `'Medical'` | `'Design & Architecture'` | `'Agriculture & Veterinary'`

### Allowed PG colleges
Scope is national — any government-funded or merit-only PG institute across India.
Priority: Central Universities > IIMs > IITs (PG) > NITs (PG) > IISc / TISS / AIIMS (PG) > State Universities (A++ / A+).

### How to add a PG college
1. Open `data/pg-colleges.js`
2. Find the right type section (marked with `// ═══ CENTRAL UNIVERSITIES ═══` etc.)
3. Add the entry following the schema
4. Verify `examCss` values are from the PG list above
5. Check brace balance

---

## File 2 — PG Exams (`data/pg-exams.js`)

### Schema

```js
{
  name: 'GATE',
  full: 'Graduate Aptitude Test in Engineering',
  body: 'IIT (rotating) + IISc',
  level: 'National' | 'State' | 'Private' | 'Institute' | 'Professional',
  freq: 'Once a year (Feb)',
  for: 'Who this exam is for — one sentence',
  website: 'gate.iitX.ac.in',  // no https://
  note: 'Important note shown on card, or empty string',
  seats: 'Approximate seats or scope',
  papers: [
    {
      code: 'CS',                    // short label shown as pill — '' for single-paper exams
      name: 'Computer Science & IT', // full paper name
      topics: ['Topic 1', 'Topic 2'] // broad syllabus areas (not exhaustive)
    }
  ],
  institutes: [
    { name: 'IISc Bangalore', city: 'Bangalore, KA', tier: '🏆 #1 Research' }
  ]
}
```

Key difference from UG exams: `papers[]` replaces `subjects[]`.
- Single-paper exams: use `papers: [{ code: '', name: 'Exam name', topics: [...] }]`
- Multi-paper exams (like GATE): one object per paper branch

### tier emoji guide (institutes)
| Emoji | Meaning |
|---|---|
| 🏆 | Top institute — IIT, IISc, top IIM, AIIMS |
| ⭐ | Very good — NIT, IIM (tier 2), central university |
| ✅ | Good option — state university, other NITs |

### How to add a PG exam
1. Open `data/pg-exams.js`
2. Find the right group (Engineering, Management, Sciences etc.)
3. Add the exam entry inside that group's `exams` array
4. Check brace balance

### How to update exam details (dates, seats, notes)
- Find the entry by `name`
- Edit only the fields that changed (`note`, `seats`, `freq`, `website`)
- Do not restructure the entry

---

## How to invoke this agent

```
You are the Vazhi PG Data Updater agent.
Read CLAUDE.md and agents/pg-data-updater.md for the schema and rules.
Then read data/pg-colleges.js or data/pg-exams.js as relevant.

Task: [describe what to add/edit]
```

### Example tasks
- "Add IIM Calcutta to pg-colleges.js — MBA via CAT"
- "Add Tata Institute of Social Sciences (TISS) as INI type — MSW, MA, PhD programs"
- "Add TANCET ME / M.Tech to pg-exams.js under Engineering group"
- "Update GATE 2027 website URL to gate2027.iitX.ac.in"
- "Add M.Sc programs at Pondicherry Central University"
