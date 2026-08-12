# Agent: Annual Refresh

**Purpose:** Update time-sensitive data across all files once a year (ideally every April–May, after NIRF rankings are released and before the next admission season begins).

**Rules:**
- Work through the checklist one section at a time
- Only edit data files — never touch `js/`, `css/`, or `index.html`
- After each file edit, verify brace balance before moving on
- If a value is unknown or not yet announced, leave the old value and add `tentative: true` where the schema supports it — do not guess

---

## When to run this refresh

| Trigger | Timing |
|---|---|
| NIRF rankings released | Every June (Ministry of Education) |
| JEE / NEET exam dates announced | October–November for next year |
| GATE exam dates announced | July–August for next year |
| Salary data drift (>2 years old) | Any time you notice figures look stale |

Run the full checklist at least once a year. Partial refreshes (e.g. only announcements) are fine more frequently.

---

## Section 1 — Announcements (`data/announcements.js`)

This is the most time-sensitive file. Update it every 1–2 months.

**Tasks:**
1. Remove all entries where `date` (or `endDate` if present) is more than 30 days in the past
2. Update `date` / `endDate` for the next cycle of recurring exams:
   - JEE Main Session 1 & 2
   - JEE Advanced
   - NEET-UG
   - GATE
   - CAT
   - CLAT
   - CUET UG
   - TNEA counselling window
   - JoSAA counselling rounds
3. Add `tentative: true` to any dates not yet officially confirmed
4. Remove `tentative: true` from any dates that are now confirmed

**Sources to check:**
- `nta.ac.in` — JEE, NEET, CUET
- `jeeadv.ac.in` — JEE Advanced
- `gate.iitX.ac.in` — GATE (institute rotates each year)
- `consortiumofnlus.ac.in` — CLAT
- `tneaonline.org` — TNEA
- `josaa.nic.in` — JoSAA

---

## Section 2 — NIRF Rankings (`data/colleges-*.js` and `data/pg-colleges.js`)

NIRF releases rankings every June. Update the `nirf` field for colleges that moved significantly.

**Focus on:** IITs, NITs, IIMs, IISc, NLUs, AIIMS — rankings change yearly.
**Skip:** Colleges with generic text like "Top 50" — only update where you have the exact rank.

**Format:** `'Rank 12 (Engineering) — NIRF 2025'`
Always include the category and year.

**Files to update:**
- `data/colleges-tn.js` and all other `data/colleges-*.js`
- `data/pg-colleges.js`

---

## Section 3 — Exam Seat Counts (`data/exams.js` and `data/pg-exams.js`)

Seat counts change when new institutes are added or capacity is revised.

**Fields to update:** `seats` in each exam entry.

**Key exams to verify annually:**
- JEE Main → total NIT + IIIT + GFTI seats
- JEE Advanced → IIT seat total
- NEET-UG → total MBBS seats (govt colleges only)
- CLAT → NLU seat total
- GATE → IIT + NIT M.Tech seats (approximate)

**Sources:** Official counselling portals (JoSAA, MCC, JOSAA seat matrix) and NTA/conducting body notifications.

---

## Section 3b — Exam Timeline (`timeline[]` + `counselling` in `data/exams.js` and `data/pg-exams.js`)

Optional `timeline[]` field on exam entries — shows typical Application/Exam/Result **months**, not
exact dates (see schema in CLAUDE.md → "Exam timeline"). The optional `counselling`/`counsellingNote`
pair covers the seat-allotment window *after* results (JoSAA, MCC, university-run counselling, COAP,
etc.) — exam-level, not per-cycle, since counselling runs once a year regardless of how many test
sessions fed into it. Months drift by a few weeks year to year,
so re-verify annually against the two most recently completed cycles.

**Tasks:**
1. For each exam that already has a `timeline[]`, re-check its most recent completed cycle's actual
   dates against the official site (or careers360/similar tracker) and update the month(s) if they shifted.
2. Add `timeline[]` to exams that don't have it yet, prioritized: National → Institute → State →
   Professional (skip Professional/rolling-admission exams with no fixed window — see CLAUDE.md).
3. If a cycle had a one-off anomaly (re-exam, court-ordered delay, paper leak), use the *prior* normal
   cycle's months instead — don't let a one-off skew the "typical" pattern. Note the anomaly in the
   exam's own `note` field if worth flagging, not in `timeline`.
4. Re-run `sh agents/check.sh` after each file — `checkTimeline()` in `validate.js` flags missing
   `apply`/`test`/`result` sub-fields but not stale months, so accuracy is still on you.

**Sources:** Same as Section 1 (`nta.ac.in`, `jeeadv.ac.in`, `gate.iitX.ac.in`, `consortiumofnlus.ac.in`,
plus each exam body's own site) — cross-check with careers360 for a second source per date.

---

## Section 4 — Salary Data (`data/courses.js` and `data/market.js`)

Salary ranges drift over time. Check every 2 years or when data looks significantly off.

**In `data/courses.js`:** Update `salary` field for each course entry.
**In `data/market.js`:** Update `SALARY_DATA[]` array entries.

**Guidance:**
- Use median / median-range figures, not aspirational maximums
- Freshers at IITs / NITs: check placement report PDFs from institute websites
- Mid-career figures: check Glassdoor / LinkedIn Salary Insights for India
- Format: `'₹6–35 LPA'` — use ₹, use en-dash (–), use LPA

---

## Section 5 — Market Signals (`data/market.js`)

Review `TRENDING_COURSES[]` and `OPPORTUNITIES[]` arrays.

**Questions to ask:**
- Are any courses in `trending: true` in `courses.js` no longer trending? Remove the flag.
- Are any new fields growing fast enough to add to `TRENDING_COURSES[]`?
- Has any `OPPORTUNITIES[]` entry (like AI/ML hiring, climate jobs) changed direction?

This is a judgement call — make only clear, evidence-based changes.

---

## Section 6 — JoSAA Data (`data/josaa.js` and `data/josaa-meta.js`)

JoSAA data is year-specific. Add the new year's final-round allotment data when available (typically September).

**Do not delete old years** — the predictor uses multi-year trend data.
**Only add the new year** using the `tools/csv-to-josaa.py` converter.
See `agents/counselling-predictor.md` for the full conversion process.

---

## Section 7 — After UG Pathways (`data/after-ug.js`)

Review once a year for:
- Changed exam patterns (e.g. NEET-PG moved to NExT — update `exams[]` and `examNote`)
- New government schemes or fellowships (add as new entries)
- Outdated salary ranges (update `salary` field)
- Exam bodies that changed (UPSC, IBPS, SSC — update `examNote`)

---

## How to invoke this agent

```
You are the Vazhi Annual Refresh agent.
Read CLAUDE.md and agents/annual-refresh.md.
Today's date is [DATE]. The most recent NIRF ranking year is [YEAR].

Task: Run the annual refresh for Section [N] — [section name].
Read the relevant data file(s), make the updates, and report what changed.
```

Run one section per session to keep changes focused and reviewable.

### Suggested order
1. Announcements (most urgent — stale dates are visible to every user)
2. NIRF Rankings
3. Exam Seat Counts
3b. Exam Timeline
4. JoSAA Data (if new year's data is available)
5. Salary Data
6. Market Signals
7. After UG Pathways
