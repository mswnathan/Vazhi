# Agent: After UG Updater

**Purpose:** Add, edit, or remove pathways in the After UG tab.

**Rules:**
- Only touch `data/after-ug.js`
- Never modify `index.html`, `css/`, or `js/after-ug.js`
- Match the schema exactly — every field must be present
- After editing, count `{` and `}` in the file — they must be equal
- Do not change the `AFTER_UG` array name or the file header

---

## Schema (one entry)

```js
{
  id: 'unique-slug',           // lowercase, hyphens, no spaces — used internally
  name: 'Display Name',        // shown as card title
  category: 'Higher Education',// see Categories below — controls which section it appears in
  field: 'Field / Discipline', // e.g. 'Engineering & Technology', 'Law', 'Ocean & Marine Technology'
  duration: '2 years',         // e.g. '1–2 years', '3–5 years', 'Permanent position'
  ugFor: ['B.Tech/B.E.'],      // see UG Degree values below — controls filter
  exams: ['GATE', 'CSIR-NET'], // array of exam names shown as pills
  examNote: 'Short note about the exam — dates, validity, tips.',
  institutes: 'IITs, NITs, IISc — short freeform text',
  careers: 'Role 1, Role 2, Role 3',
  salary: '₹8–25 LPA',         // use ₹ for India, $ for abroad
  market: 'High',              // see Market values below
  badge: 'Short label',        // optional — shown as coloured pill on card; '' to omit
  bc: 'teal',                  // badge/border colour — see Colour values below
  note: 'Amber highlighted note shown at bottom of card. Use for important caveats. Empty string to omit.',
}
```

---

## Field values

### category (exactly one of):
- `'Higher Education'`  — PG degrees: M.Tech, MBA, M.Sc, MA, LLM, MCA, MD/MS…
- `'Research'`          — PhD, research institutes (IISc, TIFR, NIOT, DRDO, ISRO…)
- `'Government Jobs'`   — UPSC, SSC, Banking, State PSC, Railways…
- `'Professional'`      — CA, CS, CMA, ICSI, Bar exam, CFA…
- `'Study Abroad'`      — MS/MBA/PhD abroad (GRE/GMAT routes)

### ugFor (one or more of):
- `'B.Tech/B.E.'`
- `'B.Sc'`
- `'B.A./B.Com'`
- `'MBBS'`
- `'LLB/LLB(Hons)'`
- `'Any'`               — use when open to all graduates

### market:
- `'High'`     — green pill
- `'Growing'`  — blue pill
- `'Stable'`   — grey pill
- `'Niche'`    — amber pill

### bc (card accent colour):
- `'coral'`  — red-orange (competitive/prestigious paths)
- `'teal'`   — teal (engineering/technical)
- `'green'`  — green (stable/safe paths)
- `'purple'` — purple (humanities/law/social)
- `'amber'`  — amber (government/defence)
- `'accent'` — dark teal (research/global)

---

## How to add a new entry

1. Open `data/after-ug.js`
2. Find the right category section (marked with comments like `// ── HIGHER EDUCATION ──`)
3. Add the new entry object inside the `AFTER_UG` array, following the schema
4. Check brace balance: `{` count must equal `}` count

### Example — adding State PSC:
```js
{
  id: 'state-psc',
  name: 'State PSC (TNPSC / KPSC / UPSC State Services)',
  category: 'Government Jobs',
  field: 'State Government Administration',
  duration: '6–18 months of preparation',
  ugFor: ['Any'],
  exams: ['TNPSC Group I/II/IV', 'KPSC', 'MPPSC', 'UPPSC'],
  examNote: 'Each state conducts its own PSC. TNPSC Group I is equivalent to state IAS. Conducted in regional language + English.',
  institutes: 'State secretariats, Revenue dept., District administration — postings across the state',
  careers: 'Deputy Collector, DSP, Commercial Tax Officer, Block Development Officer',
  salary: '₹36,000–1,50,000/month',
  market: 'Stable',
  badge: 'State Govt.',
  bc: 'amber',
  note: 'TNPSC exams are conducted in Tamil + English. Questions include Tamil history, polity, and current affairs.',
},
```

---

## How to add a new category

If a new category is needed (e.g. 'Entrepreneurship', 'Defence'):
1. Add the new entry with the new `category` value in `data/after-ug.js`
2. Then also edit `js/after-ug.js` — add to the `AUG_CATEGORIES` array:
   ```js
   { id: 'Entrepreneurship', label: 'Entrepreneurship', ico: '🚀' },
   ```
3. And add an `<option>` to the category filter in `index.html`:
   ```html
   <option value="Entrepreneurship">🚀 Entrepreneurship</option>
   ```
4. **No other files need changing.**

---

## How to add a new UG degree filter

If a new UG degree is needed (e.g. 'B.Arch', 'BDS', 'B.Pharm'):
1. Use the new value in the `ugFor` array of the relevant entries in `data/after-ug.js`
2. Then add an `<option>` to the UG filter in `index.html` (`id="aug-ug"`):
   ```html
   <option value="B.Arch">B.Arch</option>
   ```

---

## How to invoke this agent

```
You are the Vazhi After UG Updater agent.
Read CLAUDE.md and agents/after-ug-updater.md for the schema and rules.
Then read data/after-ug.js to see the current entries.

Task: [describe what to add/edit]
```

## Example tasks
- "Add TNPSC Group I under Government Jobs"
- "Add MD/MS (NEET PG) under Higher Education for MBBS graduates"
- "Add CMA (Cost and Management Accountant) under Professional"
- "Add Fulbright / DAAD scholarships under Study Abroad"
- "Update the NIOT entry — add that it offers internships to B.Tech final year students"
- "Add a new category: Defence — with NDA, CDS, AFCAT entries"
