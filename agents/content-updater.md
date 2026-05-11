# Agent: Content Updater

**Purpose:** Add, edit, or remove entries in `announcements.js`, `career-guide.js`, and `glossary.js`.

**Rules:**
- Only touch the file relevant to the task — never touch more than one file per session
- Never modify `index.html`, `css/`, or any `js/` file
- Match the schema exactly — every field must be present
- After editing, count `{` and `}` in the file — they must be equal

---

## File 1 — Announcements (`data/announcements.js`)

### When to add
- A new exam notification or date is confirmed
- A result or merit list is published
- A counselling window opens
- An application deadline is announced

### Schema
```js
{
  id: 'unique-slug',            // lowercase, hyphens — must be unique in the array
  title: 'Short display title',
  category: 'exam',             // see categories below
  icon: '📝',                   // pick a relevant emoji
  date: '2026-01-22',           // ISO YYYY-MM-DD — start date or the key date
  endDate: '2026-01-31',        // optional — only for multi-day events
  desc: 'One or two sentence description shown on the card.',
  link: 'officialwebsite.ac.in',  // no https://
  priority: 'high',             // 'high' or 'normal'
  tentative: true,              // optional — omit entirely if date is confirmed
}
```

### category values
| Value | Use for |
|---|---|
| `'exam'` | Exam dates (JEE, NEET, GATE, CAT, CLAT …) |
| `'result'` | Score / merit list announcements |
| `'counselling'` | JoSAA, TNEA, MCC rounds |
| `'application'` | Form open / close deadlines |
| `'admission'` | Seat allotment, reporting dates |
| `'news'` | Policy changes, seat increases, anything else |

### priority guidance
- `'high'` — affects large numbers of students, deadline within 60 days, or an exam students cannot miss
- `'normal'` — useful but not urgent

### How to add
1. Open `data/announcements.js`
2. Find the right category section (they are grouped with `// ── SECTION ──` comments)
3. Insert the new object — keep entries sorted by `date` within each section (nearest date first)
4. If `tentative: true` should be removed when the date is confirmed, delete the field entirely (do not set it to `false`)

### How to remove a past event
Delete the entire object. Do not leave a comment placeholder.

---

## File 2 — Career Guide (`data/career-guide.js`)

### When to add
A student asks "how do I become X" and no existing entry covers that career well.

### Schema
```js
{
  id: 'unique-slug',
  keywords: ['keyword1', 'keyword2', 'keyword3'],  // search terms that trigger this card
  title: 'Career Title',                            // shown as card heading
  ico: '🩺',                                        // one emoji
  bc: 'coral',                                      // badge/border colour — see values below
  summary: 'One paragraph. Explain what this career is and why it matters in India.',
  class12: {
    subjects: ['PCB', 'PCMB'],   // valid values: PCM, PCM+CS, PCB, PCMB, Commerce, Commerce+Maths, Arts, Any
    tip: 'Practical advice for a Class 12 student aiming for this career.',
  },
  streamId: 'Medical',       // must match a STREAMS[].id in data/courses.js
  examNames: ['NEET-UG'],    // must match exam .name values in data/exams.js or data/pg-exams.js
  augIds: [],                // must match AFTER_UG[].id values in data/after-ug.js
  careers: ['Role 1', 'Role 2', 'Role 3'],  // 3–6 specific job titles
}
```

### bc (colour) guidance
| Value | Use for |
|---|---|
| `'coral'` | Competitive/prestigious careers (medicine, IAS, IIT) |
| `'teal'` | Engineering, technology |
| `'green'` | Stable, well-established careers |
| `'purple'` | Humanities, law, social sciences |
| `'amber'` | Government, defence |
| `'accent'` | Research, global/abroad paths |

### keywords guidance
- Include common misspellings and short forms (e.g. `'ai'`, `'ml'`, `'data science'`)
- Include exam names if students search by exam (`'jee'`, `'neet'`, `'clat'`)
- Include both formal (`'physician'`) and informal (`'doctor'`) terms
- 8–15 keywords is a good range — too few misses searches, too many causes false matches

### How to add
1. Open `data/career-guide.js`
2. Add the new object at the end of the `CAREER_MAP` array (before the closing `]`)
3. Verify all `streamId`, `examNames`, and `augIds` values exist in their source files before saving

---

## File 3 — Glossary (`data/glossary.js`)

### When to add
A term that students commonly encounter on the site or in college applications, not yet in the list.

### Schema
```js
{ term: 'GATE', full: 'Graduate Aptitude Test in Engineering', tamil: 'பொறியியல் திறன் தேர்வு', desc: 'Plain-English explanation. 2–4 sentences. Mention who conducts it, what it unlocks, and one practical tip.' }
```

### Rules for good glossary entries
- `term` — the abbreviation or short name as students encounter it
- `full` — expand every abbreviation fully
- `tamil` — Tamil translation of the full name (not the abbreviation). If unsure, use the English full form
- `desc` — write for a Class 12 student with no prior knowledge. No jargon. Mention the governing body, what the term unlocks (admission / job / funding), and one number or practical fact that helps students

### How to add
1. Open `data/glossary.js`
2. Add the new object at the end of the `GLOSSARY` array (before the closing `]`)
3. Keep `desc` under 3 sentences

---

## How to invoke this agent

```
You are the Vazhi Content Updater agent.
Read CLAUDE.md and agents/content-updater.md for the schema and rules.
Then read the relevant data file.

Task: [describe what to add/edit]
```

### Example tasks
- "Add NEET-PG 2026 exam date (May 15, 2026) to announcements"
- "Mark the JEE Main Session 1 announcement as confirmed — remove tentative flag"
- "Add a career guide entry for Town Planner / Urban Designer"
- "Add the term TANCET to the glossary"
- "Remove all announcements with dates before 2026-01-01"
