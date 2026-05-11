# Agent: Functional Tester

**Purpose:** Verify that Vazhi's data layer behaves correctly under real query conditions — filters return the right results, searches resolve to cards, categories are fully covered, and cross-references are intact.

**How to run:**
```bash
node agents/functional-test.js
```
Run from the project root. Exits 0 on success, 1 on any failure (CI-compatible).

**Complement to `validate.js`:**
- `validate.js` — checks *schema correctness* (required fields, valid enum values, brace balance)
- `functional-test.js` — checks *behavioral correctness* (does filtering actually work? do searches resolve?)

---

## Test Groups

| # | Group | What it verifies |
|---|-------|-----------------|
| 1 | Subject filters | Filtering by PCM, PCB, Arts, Commerce each returns ≥1 course |
| 2 | Exam levels | All required levels (National, State, Private, Institute) have ≥1 exam |
| 3 | Career search | Sample keywords ('doctor', 'software', 'law', 'design', 'finance') each match ≥1 career card |
| 4 | After-UG categories | All 5 categories present; no entries with unknown categories |
| 5 | Interest areas | Every area has ≥1 course; total area count ≥8 |
| 6 | JoSAA meta | `instType` includes IIT, NIT, IIIT; programs and institutes arrays populated |
| 7 | Announcements | ≥1 upcoming entry; all dates in ISO format; all categories valid |
| 8 | TN stream filter | Engineering, Medical, Arts & Science each have ≥1 TN college |
| 9 | PG coverage | ≥5 states covered; ≥3 exam groups; GATE present |
| 10 | Cross-references | All `streamId` and `augId` refs in career-guide.js point to real entries with salary |

---

## Adding a New Test

1. Load the data file at the top of `functional-test.js` using `loadJS()`.
2. Create a group label: `const GN = groupHeader('My group name');`
3. Write `assert(condition, GN, 'description of what failed')` calls.
4. Add a `console.log(...)` summary line at the end of the block.
5. Update the table above in this file.

**assert() signature:**
```js
assert(condition, groupLabel, failureDescription)
// condition  — boolean. true = pass, false = fail
// groupLabel — string shown in failure output (use the GN variable)
// failureDescription — plain English, shown only on failure
```

---

## When to Run

- Before and after any data file edit (`data/*.js`)
- After running `validate.js` (run both together for full coverage)
- As part of an annual refresh (`agents/annual-refresh.md`)

---

## Common Failures and Fixes

| Failure message | Likely cause | Fix |
|----------------|--------------|-----|
| `Keyword "X" matches 0 career entries` | New keyword added to UI but not in `career-guide.js` | Add keyword to matching entry's `keywords[]` |
| `No upcoming announcements` | All announcement dates are in the past | Add or update entries in `data/announcements.js` |
| `No After-UG entry for category "X"` | Category removed or renamed | Check `data/after-ug.js` — restore or add entry |
| `Career "X" streamId "Y" not in STREAMS` | Stream ID changed in `courses.js` | Update `streamId` in `career-guide.js` to match |
| `No TN colleges found for stream "X"` | Stream label changed | Check `colleges-tn.js` streams array values |
| `GATE not found in PG_EXAM_GROUPS` | GATE entry removed or renamed | Restore in `data/pg-exams.js` |
