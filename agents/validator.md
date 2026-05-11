# Agent: Validator

**Purpose:** Check data quality and find errors before publishing updates.

**How to use in Claude Code:**
"You are the Vazhi Validator agent. Read all files in the data/ folder and check for the issues listed below. Report findings as a simple list."

**What to check:**

### colleges-tn.js
- Every college has: name, short, type, district, state, naac, nirf, affil, website, streams, programGroups
- Every program has: name, exam, examCss
- examCss value is one of: ce-tnea ce-jee ce-cuet ce-neet ce-nata ce-clat ce-own ce-merit ce-icar ce-nchm
- district value exists in the dropdown in index.html

### exams.js
- Every exam has: name, full, body, level, freq, subjects, for, website, note, seats, institutes
- level is one of: National State Private Institute Professional
- Every institute has: name, city, tier

### courses.js
- Every course has: name, exam, examLvl, institutes, careers, salary, market, badge, bc, subjects
- market is one of: High Growing Stable Niche
- bc is one of: coral teal green purple amber accent

### interest.js
- Every subject group has at least 8 areas
- Every area has: id, ico, name, desc, insight, courses
- Every course in an area has: name, exam, examLvl, institutes, careers, salary, market, badge, bc

### Brace balance check
- Count { and } in each JS file — must be equal
- Count [ and ] in each JS file — must be equal

---

## Hardcoded Values Check

Run this check on every file listed below. Flag any violation as an error — the rule is that data must come from the JS data arrays, and constants must be defined once at the top of their file.

### index.html — filter dropdowns must have NO hardcoded options

The following `<select>` elements must contain **only** the default "All X" `<option>` tag.
Any additional `<option>` inside them is a violation.

| Select ID | Default option text |
|-----------|-------------------|
| `f-subj` | All combinations |
| `f-stream` | All streams |
| `ef-level` | All levels |
| `ef-stream` | All streams |
| `ef-subj` | Any subjects |
| `cf-state` | All States |
| `cf-type` | All types |
| `cf-stream` | All streams |
| `cf-district` | All districts |
| `aug-ug` | All degrees |
| `aug-cat` | All categories |
| `aug-pg-ef-stream` | All streams |
| `aug-pg-cf-type` | All types |
| `aug-pg-cf-stream` | All streams |

**How to check:** grep for each ID in index.html, count `<option` tags inside that select — must be exactly 1.

---

### js/colleges.js — no inline color/CSS maps inside functions

The following must be defined **only** as module-level constants (at the top of the file, outside any function).
If you find them declared with `const` inside a function body, flag as a violation.

- `TYPE_COLOR` — institution type → text colour hex
- `TYPE_BG` — institution type → background colour hex
- `TYPE_CSS` — institution type → CSS badge class string
- `NAAC_CSS` — NAAC grade → CSS class string

**Also check:** mode string comparisons in `setCollegeMode` and `resetCollegeFilters` must use
`COL_MODE_UG`, `COL_MODE_PG`, `COL_MODE_PREDICTOR` — not bare strings `'ug'`, `'pg'`, `'predictor'`.

---

### js/exams.js — no inline color/CSS maps inside functions

The following must be defined **only** as module-level constants:

- `LEVEL_COLOR` — exam level → text colour hex
- `LEVEL_BG` — exam level → background colour hex
- `LEVEL_CSS` — exam level → CSS class string
- `TIER_COLOR` — tier emoji → text colour hex
- `TIER_BG` — tier emoji → background colour hex

**Also check:** display limit constants must be used, not bare numbers:
- `INST_PREVIEW_COUNT` (must not see bare `slice(0, 3)` inside `examCard` or `pgExamCard`)
- `SUBJ_PILL_MAX` (must not see bare `.slice(0, 5)` on subjects)

---

### js/josaa.js — no bare exam strings or rank multipliers inside functions

**String constants** — these bare literals must not appear inside any function body:
- `'JEE Advanced'` → must use `EXAM_JEE_ADV`
- `'JEE Main'` → must use `EXAM_JEE_MAIN`
- `'IIT'` (in comparisons) → must use `INST_IIT`

**Magic numbers** — these must not appear as bare literals inside function bodies:
- `0.85`, `1.15`, `1.40` → must use `RANK_SAFE_FACTOR`, `RANK_GOOD_FACTOR`, `RANK_REACH_FACTOR`
- `-0.1`, `0.1` (as trend thresholds) → must use `TREND_HARDER_THRESHOLD`, `TREND_EASIER_THRESHOLD`
- `W = 80`, `H = 24`, `pad = 2` (sparkline) → must use `SPARK_W`, `SPARK_H`, `SPARK_PAD`

---

### js/announcements.js — no bare day thresholds inside functions

- `<= 7` or `<= 30` as day comparisons → must use `ANN_SOON_DAYS`, `ANN_NEAR_DAYS`

---

### js/career-guide.js — no bare search/display limits inside functions

- `raw.length < 2` → must use `CG_MIN_INPUT_LEN`
- `raw.length >= 4` → must use `CG_SUBSTR_MIN_LEN`
- `.slice(0, 6)` on suggestions → must use `CG_MAX_SUGGESTIONS`
- `.slice(0, 2)` on career results → must use `CG_MAX_CAREER_HITS`
- `.slice(0, 4)` on courses → must use `CG_MAX_COURSES`

---

### js/after-ug.js — no standalone inline color maps inside functions

The `renderPGCollegesForAug` function builds `pgTypeCols` / `pgTypeBgs` by referencing
`TYPE_COLOR` and `TYPE_BG` from `colleges.js`. This is allowed.
A violation would be a new inline object like `{Central:'#0F3098', ...}` defined from scratch inside any function.

---

**Summary — what counts as a hardcoded violation:**
1. A filter `<select>` in index.html has more than one `<option>` tag
2. A colour/CSS map object (`{National:'#...'}` or `{'elvl-nat': ...}`) is defined inside a function body instead of at module level
3. A bare exam name string (`'JEE Advanced'`) appears in an `if` or `filter` condition instead of a named constant
4. A bare number (`0.85`, `7`, `30`, `2`, `4`, `6`) is used in a threshold or slice call instead of a named constant

**Run this validator once a month or before any major content update.**
