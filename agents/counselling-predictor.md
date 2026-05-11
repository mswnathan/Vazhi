# Agent: Counselling Rank Predictor

**Purpose:** Add a new rank predictor tab for any Indian counselling system
(JoSAA is already done — this agent handles JOSAA extensions and new systems like
CSAB, MCC NEET, TNEA, TANCET, KCET, AP EAPCET, TS EAPCET, NMAT, CLAT, etc.)

---

## Pattern Overview

Every counselling predictor follows the same 5-file pattern:

| File | What it does |
|------|-------------|
| `tools/<name>-to-js.py` | One-time CSV → JS converter |
| `data/<name>-meta.js` | Lookup arrays (institutes, programs, types, states) |
| `data/<name>.js` | Compact allotment rows |
| `js/<name>.js` | Filter + classify + render logic |
| `index.html` | Nav button + tab div + script tags |

Styles are shared — all predictor CSS lives in `css/vazhi.css` under the `/* ── JOSAA PREDICTOR TAB ── */` section. Reuse the same class names where possible.

---

## Step 1 — Understand the data

Before writing any code, confirm:
1. **What round to keep?** — Use the final round (equivalent of JoSAA Round 6).
   Round number may be named differently: "Final", "Mop-Up", "Round 4" etc.
2. **What are the column names?** — Run `head -2 <file>.csv` to inspect.
3. **What is the rank type?** — CRL rank? Percentile? Score? State rank?
   If percentile/score (not rank), the classify logic must be inverted
   (higher percentile = better, unlike ranks where lower = better).
4. **What categories exist?** — OC/BC/MBC/SC/ST for Tamil Nadu state counselling;
   OPEN/OBC-NCL/EWS/SC/ST for central counselling. Map to integer codes.
5. **What quotas exist?** — AI, HS, OS, Management, NRI, etc.
6. **Does the exam type split institutes?** — e.g. JEE Advanced → IITs only.
   If all institutes share one exam, no exam-type filter is needed.

---

## Step 2 — Write the CSV converter (`tools/<name>-to-js.py`)

Copy from `tools/csv-to-josaa.py` and change:
- `QUOTA_MAP`, `SEAT_MAP`, `GENDER_MAP` — remap to the actual values in this CSV
- Column name lookups — match the actual header names
- Output filenames: `data/<name>-meta.js` and `data/<name>.js`
- Array names: `<NAME>_META` and `<NAME>_ROWS` (e.g. `TNEA_META`, `TNEA_ROWS`)

**Compact row format (always 8 integers):**
```python
rows.append([year, inst_idx, prog_idx, quota_code, seat_code, gender_code, open_rank, close_rank])
```
For systems with no quota distinction, set `quota_code = 0` for all rows.
For systems with no gender split, set `gender_code = 0` for all rows.

**Run the script:**
```bash
python3 tools/<name>-to-js.py path/to/allotment.csv
```
Check the output: institute count, program count, row count should all be non-zero.

---

## Step 3 — Write the predictor logic (`js/<name>.js`)

Copy from `js/josaa.js` and change:
- All function names: `jInit` → `<x>Init`, `jPredict` → `<x>Predict`, `jExplore` → `<x>Explore`, etc.
  Use a short prefix for the counselling system (e.g. `tn` for TNEA, `neet` for MCC NEET).
- All DOM element IDs: `j-rank` → `<x>-rank`, `j-exam` → `<x>-exam`, etc.
- Data references: `JOSAA_META` → `<NAME>_META`, `JOSAA_ROWS` → `<NAME>_ROWS`
- `jOnExamChange()` — only needed if different exams split the institute set.
  Delete it if all institutes share one exam.
- Classify direction — if the system uses **percentile or score** (higher = better),
  invert the Safe/Good/Reach logic:
  ```js
  // Score-based (higher = better): safe if score is well above worst cutoff
  if (score >= min * 1.15) return 'safe';
  if (score >= avg * 0.90) return 'good';
  if (score >= avg * 0.75) return 'reach';
  ```

### Key functions to keep (rename prefix only):
- `<x>Init()` — populate state dropdowns from META
- `<x>SetMode(mode)` — toggle predict vs explore forms
- `<x>FilterRows(...)` — filter ROWS by user inputs
- `<x>Aggregate(rows)` — group by (instIdx, progIdx), collect years
- `<x>Classify(prog, rank)` — Safe / Good / Reach
- `<x>Trend(years)` — harder / stable / easier
- `<x>Sparkline(years)` — SVG mini-chart
- `<x>Card(item)` — predict-mode result card HTML
- `<x>Bucket(...)` — collapsible bucket section
- `<x>Predict()` — main predict handler
- `<x>Explore()` — rank range explorer handler
- `<x>RangeProgBlock(...)` — program row with category table

---

## Step 4 — Add UI to `index.html`

All counselling systems live inside the single **"College Predictor"** tab (`tab-predictor`).
Do **not** add a new nav button or a new top-level tab.

### 1. Add a pill button inside `.cp-system-tabs`
```html
<button class="cp-sys-btn" data-sys="<name>" onclick="cpSetSystem('<name>')">
  <span><System></span>
  <span class="cp-sys-sub">Short description — e.g. Tamil Nadu Engineering</span>
</button>
```

### 2. Add a system panel after the JoSAA panel (before `</div><!-- /tab-predictor -->`)
```html
<!-- <SYSTEM> panel -->
<div class="cp-sys-panel" id="cp-<name>" style="display:none">

  <!-- Mode toggle -->
  <div class="j-mode-tabs">
    <button class="j-mode-btn active" data-mode="predict" onclick="<x>SetMode('predict')">My Rank</button>
    <button class="j-mode-btn" data-mode="explore" onclick="<x>SetMode('explore')">Rank Range Explorer</button>
  </div>

  <!-- Predict form -->
  <div class="j-form" id="<x>-form">
    <!-- fields: rank/score, category, quota, gender, optional filters -->
    <button class="j-btn" onclick="<x>Predict()">Find Colleges →</button>
  </div>

  <!-- Explore form -->
  <div class="j-form" id="<x>-form-range" style="display:none">
    <!-- fields: rank from, rank to, home state, gender -->
    <button class="j-btn" onclick="<x>Explore()">Explore Range →</button>
  </div>

  <div id="<x>-results"></div>
  <div class="j-note">⚠ Based on final round allotment data. Always verify on the official counselling portal.</div>

</div><!-- /cp-<name> -->
```

### 3. Add script tags (before `</body>`)
```html
<!-- <System> data -->
<script src="data/<name>-meta.js"></script>
<script src="data/<name>.js"></script>
<script src="js/<name>.js"></script>
```

`cpSetSystem()` in `js/josaa.js` already handles show/hide for all `.cp-sys-panel` divs —
no changes to that function are needed when adding a new system.

---

## Step 5 — Wire init to DOMContentLoaded

In `js/<name>.js`, the init block at the bottom should check the META guard:
```js
document.addEventListener('DOMContentLoaded', () => {
  if (typeof <NAME>_META !== 'undefined') <x>Init();
});
```

---

## Counselling systems — priority order

| System | Scope | Rank type | Categories | Notes |
|--------|-------|-----------|------------|-------|
| **CSAB** | NITs, IIITs (special rounds) | JEE Main rank | Same as JoSAA | Extension of JoSAA — same data format, different rounds |
| **MCC NEET UG** | MBBS/BDS Govt + Deemed | NEET score (higher=better) | OC/OBC/SC/ST/EWS | AIQ (15%) + State quota (85%) split |
| **TNEA** | Tamil Nadu Engineering | 12th marks (higher=better) | OC/BC/BCM/MBC/SC/SCA/ST | No entrance exam; cutoff = aggregate marks |
| **TANCET** | TN PG (ME/MBA/MCA) | TANCET score | OC/BC/MBC/SC/ST | Separate for each course type |
| **KCET** | Karnataka Engineering | KCET score + PCM marks | GM/SC/ST/OBC/Cat1 | State only; Kannada medium seats separate |
| **AP EAPCET** | Andhra Pradesh Engg | EAPCET rank | OC/BC-A/BC-B/SC/ST | Separate HS/OS quota |
| **TS EAPCET** | Telangana Engineering | EAPCET rank | OC/BC-A/BC-B/SC/ST | Separate HS/OS quota |
| **CLAT** | NLUs | CLAT score (higher=better) | UR/SC/ST/OBC/EWS/PWD | No HS/OS distinction at NLUs |
| **NMAT/SNAP/XAT** | Private MBA | Score (higher=better) | UR only (mostly) | No quota split typically |

---

## Common gotchas

1. **Percentile vs rank** — NEET, KCET, TNEA use scores/percentile where *higher* is better.
   The sparkline and classify logic must be inverted — see Step 3 above.

2. **Tamil Nadu categories** — OC, BC, BCM, MBC, SC, SCA, ST (7 categories, not the central 5).
   Map them to codes 0–6 in SEAT_MAP.

3. **No Round 6 equivalent** — Some counsellings end at Round 2 or 3, or have a "special round".
   Keep the final substantive round (not the stray vacancy rounds).

4. **Duplicate data across years** — If the CSV has year as a string like "2020-21",
   normalise to a 4-digit integer: `int(year_str[:4])`.

5. **Missing state column** — Some CSVs omit the state. Look up state from institute name
   using a hardcoded dict, or add a `state` column manually before running the converter.

6. **Large file size** — If the data file exceeds 3 MB, consider:
   - Keeping only the 2 most recent years
   - Dropping PwD categories (low volume, rarely queried)
   - Switching from JSON array to a binary format with a JS decoder

---

## How to invoke this agent

```
You are the Vazhi Counselling Predictor agent.
Read CLAUDE.md and agents/counselling-predictor.md for the full pattern.
Also read js/josaa.js and tools/csv-to-josaa.py as reference implementations.

Task: Add a [SYSTEM NAME] rank predictor tab.
The data file is at: [path to CSV]
Run `head -5 [path]` first to confirm column names, then proceed.
```
