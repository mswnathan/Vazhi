# Agent: Psychometric Updater

**Purpose:** Add, edit, or extend the Holland RIASEC interest test content in `data/psychometric.js`.  
This file drives the entire "Know Yourself" tab and the career report page (`report.html`).  
**Never edit `js/psychometric.js` or `js/report.js` for content changes** — all questions, profiles, and career mappings live in `data/psychometric.js`.

---

## File Map — `data/psychometric.js`

| Constant | Lines | What it contains |
|---|---|---|
| `WORKSTYLE_QUESTIONS[]` | ~6–38 | 5 forced-choice A/B pairs (workstyle, used in final phase) |
| `INTEREST_QUESTIONS_8_10[]` | ~44–181 | 30 forced-choice pairs for Class 8–10 (simple language) |
| `INTEREST_QUESTIONS_11_12[]` | ~184–321 | 30 forced-choice pairs for Class 11–12 (mature language) |
| `FOLLOWUP_QUESTIONS{}` | ~327–456 | Adaptive follow-up: 2 questions per Holland type (keyed R/I/A/S/E/C) |
| `SKILL_QUESTIONS[]` | ~461–522 | 15 self-assessment skill questions (0–4 Likert) |
| `SKILL_LABELS{}` | ~526–541 | Behavioral anchor descriptions for the 5 skill-score levels |
| `HOLLAND_CAREER_MAP{}` | ~547–593 | Two-letter Holland code → array of career IDs (matches `career-guide.js`) |
| `RIASEC_PROFILES{}` | ~598–660 | Per-type name, description, traits (EN + Tamil) shown on results page |
| `CLASS11_STREAM_MAP{}` | ~664–710 | Holland type → Class 11 stream suggestions |
| `STREAM_DETAILS{}` | ~712–end | Stream label → subjects, colleges, careers (shown in report) |

---

## Schemas

### Interest question (both grade tiers)
```js
{ id: 'ri-1',                   // unique, format: <typepair>-<n>
  types: ['R', 'I'],            // always exactly 2 Holland types in the pair
  a: {
    text: 'Option A in English',
    text_ta: 'விருப்பம் A தமிழில்',
    type: 'R',                  // which Holland type this option scores
  },
  b: {
    text: 'Option B in English',
    text_ta: 'விருப்பம் B தமிழில்',
    type: 'I',
  },
}
```
- Each of the 15 type-pairs (RI, RA, RS, RE, RC, IA, IS, IE, IC, AS, AE, AC, SE, SC, EC) must have **exactly 2 questions** in both `INTEREST_QUESTIONS_8_10` and `INTEREST_QUESTIONS_11_12`.
- IDs must be unique across the whole array.

### Follow-up question
```js
{ id: 'fu-R-1',         // unique, format: fu-<TYPE>-<n>
  forType: 'R',         // Holland type this question refines
  q: 'Question text in English',
  q_ta: 'கேள்வி தமிழில்',  // optional but recommended
  options: [
    { text: 'Option text', text_ta: 'தமிழில்', subtype: 'R-fix' },
    // exactly 4 options per question
  ],
}
```
- Each Holland type (R/I/A/S/E/C) must have **exactly 2 follow-up questions**.
- Each question must have **exactly 4 options**.
- `subtype` values must be consistent across both questions for the same type (they refine the final profile label).

### Workstyle question
```js
{ id: 'ws-1',
  typeA: 'R',     // Holland type scored if student chooses A
  typeB: 'I',
  en_a: 'Option A description in English',
  en_b: 'Option B description in English',
  ta_a: 'விருப்பம் A தமிழில்',
  ta_b: 'விருப்பம் B தமிழில்',
}
```
- There are **5 workstyle questions**. Do not change this count — it's hard-coded in the logic.

### Skill question
```js
{ id: 'sk-1',
  category: 'numerical' | 'verbal' | 'spatial' | 'interpersonal' | 'creative',
  text_en: 'Self-assessment statement',
  text_ta: 'தமிழில்',
}
```
- There are 3 questions per category × 5 categories = **15 questions total**. Keep this count.

### RIASEC profile entry
```js
R: {
  name_en: 'Realistic — The Builder',
  name_ta: 'யதார்த்தம் — கட்டுபவர்',
  short_en: 'The Builder',
  short_ta: 'கட்டுபவர்',
  desc_en: 'Paragraph shown on results page.',
  desc_ta: 'தமிழில் விளக்கம்.',
  color: '#c0392b',     // hex color for the type badge
  icon: '🔧',
}
```

### HOLLAND_CAREER_MAP entry
```js
'RI': ['engineer', 'scientist', 'data-scientist'],
```
- Keys are all 30 two-letter Holland combinations (both orders: RI and IR).
- Values are arrays of career IDs that **must exist** in `CAREER_MAP` in `data/career-guide.js`.
- Keep arrays to 4–6 items for display quality.

### CLASS11_STREAM_MAP entry
```js
R: {
  primary: ['Science (PCM)', 'Vocational'],
  note_en: 'Short advice in English.',
  note_ta: 'தமிழில் குறிப்பு.',
}
```

---

## Rules

1. **Both language fields are required** for every question and profile. Never add a question with only English text.
2. **Career IDs in `HOLLAND_CAREER_MAP` must match** an existing `id` in `data/career-guide.js`. Verify with `grep 'id:' data/career-guide.js` before adding.
3. **Preserve question counts**: 30 interest questions per tier, 2 follow-ups per type, 5 workstyle questions, 15 skill questions. The JS logic uses these counts — changing them will break the progress bar and phase transitions.
4. **Run brace check after any edit**: `node agents/validate.js` or `sh agents/check.sh`.
5. **Do not touch `js/psychometric.js` or `js/report.js`** for content-only changes. Those files contain logic, not data.

---

## Common Tasks

### Add a question to the interest block
1. Decide which type-pair and grade tier.
2. Write both A and B options with EN + Tamil text.
3. Add at the end of that type-pair's group (between the `// ── XX ──` comments).
4. Use the next available ID number (e.g. `ri-3` if `ri-2` exists).
5. Note: adding a 3rd question per pair is fine for variety — the logic samples randomly.

### Update a profile description
→ Edit the `desc_en` / `desc_ta` fields in `RIASEC_PROFILES`. Keep to 2–3 sentences.

### Add a career to the career map
1. Confirm the career ID exists in `data/career-guide.js`.
2. Add the ID to the relevant two-letter keys in `HOLLAND_CAREER_MAP` (both orders).

### Update stream suggestions
→ Edit `CLASS11_STREAM_MAP` for stream names, `STREAM_DETAILS` for subjects/colleges/careers shown in the report.
