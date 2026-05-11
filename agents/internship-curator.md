# Agent: Internship Curator

**Purpose:** Add, edit, or remove entries in `data/internships.js` once that file is created.

> **Status:** This data file does not exist yet. When the Internships tab is built,
> create `data/internships.js` following the schema below, then use this agent to maintain it.

---

## Internship Scope — STRICTLY ENFORCED

Vazhi only lists **government, public sector, and research internships**. No private company listings.

**Allowed:**
- Research institutions: ISRO VSSC/URSC, DRDO labs, BARC, TIFR, NCBS, CCMB, CDAC, IIT summer research (SURGE, SRIP, IITM Research Park), IISc summer fellowships, IISER summer program, NIOT, NIO, IIIT Hyderabad, CSIR labs
- Government ministries and departments: Ministry of Science & Technology, DST, DBT, ICMR, ICAR, PMO internship (when offered), Census, Election Commission, NITI Aayog
- Public Sector Undertakings (PSUs): BHEL, ONGC, NTPC, BSNL, HAL, BEL, SAIL, Indian Railways (RDSO), BARC, NPCIL, IOCL, PGCIL — offered to engineering/science UG students
- International — government: CERN summer programs, DESY (Germany), ANU Canberra, JSPS (Japan), IAS (India–Australia Science Exchange)
- National labs and bodies: NCERT, NIEPA, Archaeological Survey of India, NIC, NITI Aayog, RBI (for economics students)

**Never add:**
- Private company internships (TCS, Infosys, Wipro, Zoho, Google, Amazon etc.) — scope creep, and they are already covered by LinkedIn/Internshala
- Startup internships
- Paid internship aggregator listings (Internshala, LetsIntern)
- Any internship that is not independently verifiable from an official (.gov.in / .ac.in / .res.in) source

---

## Schema

```js
{
  id: 'unique-slug',           // lowercase, hyphens — e.g. 'isro-yuvika', 'iit-madras-surp'
  name: 'Internship / Program Name',
  short: 'Short Name',         // 2–4 words for card pill — e.g. 'ISRO YUVIKA'
  body: 'ISRO / IIT Madras / DRDO',  // host organisation
  type: 'Research' | 'Industrial' | 'Government' | 'International',
  for: 'B.Tech 2nd/3rd year — Engineering',  // who is eligible — one line
  ugStream: ['Engineering', 'Science', 'Any'],  // for filter
  duration: '4–8 weeks',       // typical duration
  stipend: '₹10,000/month' | 'No stipend — accommodation provided' | 'Varies',
  season: 'May–July',          // typical window — 'Year-round' if rolling
  deadline: '2026-03-31',      // ISO YYYY-MM-DD — next application deadline; '' if not known
  website: 'isro.gov.in/yuvika',  // official page — no https://
  note: 'Amber-highlighted note for important caveats. Empty string to omit.',
  badge: 'Short label',        // shown as coloured pill — e.g. 'Space', 'Nuclear', 'IIT'; '' to omit
  bc: 'teal',                  // badge/border colour — see values below
}
```

### type values
- `'Research'` — research internship at IIT, IISc, IISER, CSIR, DRDO, ISRO, TIFR etc.
- `'Industrial'` — PSU internship (BHEL, ONGC, NTPC etc.) — factory / plant / project exposure
- `'Government'` — ministry / department internship (policy, data, admin)
- `'International'` — abroad, government-sponsored (CERN, DAAD, JSPS)

### ugStream values (one or more)
`'Engineering'` | `'Science'` | `'Medical'` | `'Law'` | `'Commerce'` | `'Arts'` | `'Any'`

### bc (colour) guidance
| Value | Use for |
|---|---|
| `'teal'` | Engineering / technology internships (IIT, NIT, PSU) |
| `'accent'` | Research science (ISRO, DRDO, BARC, TIFR) |
| `'coral'` | Competitive / highly selective (CERN, IISc) |
| `'amber'` | Government / policy internships |
| `'green'` | Agriculture, environment, public health |
| `'purple'` | Humanities, law, social sciences |

---

## File structure (when creating `data/internships.js`)

```js
// Vazhi — Internships Data
// Only government, PSU, and research internships. See agents/internship-curator.md.
// Schema: { id, name, short, body, type, for, ugStream[], duration, stipend, season, deadline, website, note, badge, bc }

const INTERNSHIPS = [

  // ── SPACE & DEFENCE RESEARCH ──────────────────────────────────────────
  // ISRO YUVIKA, DRDO labs, BARC OCES training, HAL apprenticeship …

  // ── IIT / IISc / IISER SUMMER PROGRAMS ───────────────────────────────
  // IIT Madras SURP, IIT Bombay SRIP, IISc summer fellowship …

  // ── CSIR / NATIONAL LABS ──────────────────────────────────────────────
  // CSIR labs, NIOT, NIO, CDAC, NCBS, CCMB …

  // ── PSU INDUSTRIAL INTERNSHIPS ────────────────────────────────────────
  // BHEL, ONGC, NTPC, IOCL, BEL, PGCIL, Indian Railways RDSO …

  // ── GOVERNMENT / POLICY ───────────────────────────────────────────────
  // NITI Aayog, RBI, DST, DBT, ICMR, ICAR …

  // ── INTERNATIONAL (GOVERNMENT-FUNDED) ────────────────────────────────
  // CERN summer, DAAD WISE, JSPS, ANU, DESY …

];
```

---

## How to add a new internship

1. Confirm the internship host is a government / PSU / public research body (see scope above)
2. Find the official program page — must have a `.gov.in`, `.ac.in`, or `.res.in` URL
3. Open `data/internships.js`
4. Find the right section comment
5. Add the entry following the schema — every field must be present
6. Check brace balance

## How to update a deadline

Find the entry by `id`, update only the `deadline` field.

## How to mark an internship as currently closed

Set `deadline: ''` and update `note` to say "Applications typically open in [month] — check website."

---

## How to invoke this agent

```
You are the Vazhi Internship Curator agent.
Read CLAUDE.md and agents/internship-curator.md for the schema and rules.
Then read data/internships.js.

Task: [describe what to add/edit]
```

### Example tasks
- "Add ISRO YUVIKA program for Class 11 students"
- "Add IIT Madras SURP (Summer Undergraduate Research Program)"
- "Add CERN Summer Student Programme for physics/engineering students"
- "Add DRDO RAC internship for final-year B.Tech students"
- "Update BHEL internship deadline to 2026-02-28"
- "Add NITI Aayog policy internship for economics / public policy students"
