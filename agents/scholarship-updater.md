# Agent: Scholarship Updater

**Purpose:** Add, edit, or remove entries in `data/scholarships.js`.

---

## Scholarship Scope

Vazhi lists all legitimate independent scholarships for UG students. The only exclusion is university "merit discount" schemes from private self-financing colleges (VIT, SRM, Manipal, LPU etc.) — these are admission incentives, not independent scholarships.

**Allowed:**
- Central Government schemes: NSP scholarships, INSPIRE, KVPY (discontinued but shown for reference), AICTE schemes, Central Sector, PM YASASVI, Top Class Education, Ishan Uday etc.
- State Government schemes: TN e-Kalvi, TN BC/MBC/SC/ST scholarships, Karnataka Vidyasiri, and equivalent schemes in other states
- PSU scholarships: ONGC, LIC, BPCL, HPCL, and other government-owned company schemes
- Research fellowships: JRF (CSIR-NET / UGC-NET), GATE fellowship, IISER, BARC, DRDO, ISRO stipends
- Corporate / Foundation: Reliance Foundation, SBI Asha, HDFC Parivartan, Tata Capital Pankh, Aditya Birla, Vidyasaarathi, FFE, and other legitimate private CSR scholarships
- International — government-funded: Fulbright (US Govt), DAAD (German Govt), Chevening (UK Govt), Erasmus+ (EU), MEXT (Japan Govt), Commonwealth Scholarships

**Never add:**
- University merit scholarships / fee waivers from private self-financing colleges (VIT, SRM, Manipal, Amity, Jain, LPU etc.) — these are admission discount schemes, not independent scholarships
- Coaching institute scholarships (Allen, Resonance etc.)

---

## Schema

```js
{
  id: 'unique-slug',             // lowercase, hyphens — e.g. 'inspire-she', 'nsp-post-matric'
  name: 'Scholarship Name',      // full official name
  short: 'Short Name',           // 2–4 words — shown on card badge
  body: 'DST / Ministry of Education / State Govt',  // governing body
  level: 'Central' | 'State' | 'Corporate' | 'International',
  for: 'B.Sc / Integrated M.Sc students in natural sciences',  // who is eligible — one line
  ugStream: ['Science', 'Engineering', 'Medical', 'Law', 'Arts', 'Commerce', 'Any'],  // for filter
  class12Pct: 80,               // minimum Class 12 % required — 0 if no cutoff
  amount: '₹80,000/year',       // use ₹ for India, € or $ for abroad — per year figure
  duration: '5 years',          // how long the scholarship continues
  deadline: '2026-10-31',       // ISO YYYY-MM-DD — next application deadline; '' if not known
  website: 'online-inspire.gov.in',  // official portal — no https://
  note: 'Important caveat shown as amber highlight. Empty string to omit.',
  badge: 'Short label',         // shown as coloured pill — e.g. 'Govt Funded', 'Girls Only'; '' to omit
  bc: 'teal',                   // badge/border colour — see values below
}
```

### level values
- `'Central'` — Government of India / central ministry / PSU schemes
- `'State'` — State government schemes (TN, KA, KL etc.)
- `'Corporate'` — Private company CSR and foundation scholarships
- `'International'` — Foreign government scholarships for study abroad

### ugStream values (one or more)
`'Science'` | `'Engineering'` | `'Medical'` | `'Law'` | `'Commerce'` | `'Arts'` | `'Any'`

Use `['Any']` only when the scholarship genuinely has no stream restriction.

### bc (colour) guidance
| Value | Use for |
|---|---|
| `'teal'` | Science / research fellowships (INSPIRE, KVPY, JRF) |
| `'coral'` | Corporate / foundation scholarships (Reliance, HDFC, Tata etc.) |
| `'amber'` | Central govt merit and PSU schemes (NSP, CSSS, ONGC, AICTE) |
| `'green'` | State govt schemes |
| `'purple'` | Minority / SC/ST / special category scholarships |
| `'accent'` | Study abroad — international government scholarships |

---

## File structure — `data/scholarships.js`

```js
// Vazhi — Scholarships Data
const SCHOLARSHIPS = [
  // ── RESEARCH FELLOWSHIPS ─────────────────────────────────────────────
  // INSPIRE SHE, KVPY, JRF (CSIR-NET), GATE M.Tech stipend …

  // ── CENTRAL GOVT MERIT SCHOLARSHIPS ──────────────────────────────────
  // NSP Central Sector Scheme, AICTE Pragati, AICTE Saksham, AICTE Swanath,
  // NSP Post Matric, PM YASASVI, Top Class Education, Ishan Uday …

  // ── PSU SCHOLARSHIPS ─────────────────────────────────────────────────
  // ONGC Merit, LIC Golden Jubilee …

  // ── STATE GOVT SCHOLARSHIPS ──────────────────────────────────────────
  // TN BC/MBC, TN SC/ST, Karnataka Vidyasiri, and other state schemes …

  // ── CORPORATE / FOUNDATION ───────────────────────────────────────────
  // Reliance Foundation UG, SBI Asha, HDFC Parivartan,
  // Tata Capital Pankh, Aditya Birla, Vidyasaarathi, FFE …

  // ── INTERNATIONAL (GOVERNMENT-FUNDED) ────────────────────────────────
  // Fulbright-Nehru, DAAD, Chevening, MEXT, Commonwealth, Erasmus+ …
];
```

---

## How to add a new scholarship

1. Open `data/scholarships.js`
2. Find the right section comment
3. Add the entry following the schema — every field must be present
4. Check brace balance: count `{` must equal `}` in the file

## How to update a deadline

Find the entry by `id`, update only the `deadline` field.

## How to mark a scholarship as temporarily closed

Set `deadline: ''` and update `note` to say "Applications currently closed — check website for next cycle."

---

## How to invoke this agent

```
You are the Vazhi Scholarship Updater agent.
Read CLAUDE.md and agents/scholarship-updater.md for the schema and rules.
Then read data/scholarships.js.

Task: [describe what to add/edit]
```

### Example tasks
- "Add INSPIRE SHE scholarship — ₹80,000/year for B.Sc natural science students"
- "Add Fulbright-Nehru Masters Fellowship for Indian students going to the US"
- "Update NSP Central Sector deadline to 2026-10-31"
- "Add a new state scholarship for Maharashtra — MahaDBT portal"
- "Mark PM YASASVI as temporarily closed"
