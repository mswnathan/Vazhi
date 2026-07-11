# Agent: Editing Data (the one data-editing guide)

**Purpose:** Add or edit any record in `data/*.js` — colleges, exams, courses,
interest areas, PG colleges/exams, after-UG pathways, announcements, career-guide,
glossary, scholarships, internships.

This one doc replaces the old per-domain updaters (data-updater, pg-data-updater,
after-ug-updater, content-updater, scholarship-updater, internship-curator). The
reasoning is the same for all of them; only the schema and a few scope rules differ.

> **Schemas live in ONE place: `CLAUDE.md` → "Data Schemas (quick reference)".**
> Don't restate schemas here — read the schema for the record type in CLAUDE.md and
> match it exactly. This doc holds the *procedure* and the *per-domain rules*.

---

## Universal procedure (every data edit)

1. **Pick the one file** for the task (routing table below). One file per task.
2. **Read the schema** for that record type in CLAUDE.md and match it exactly — every
   field present, enum values valid.
3. **Respect the scope rule** (below). When scope is ambiguous, SKIP and ask — never guess.
4. **Never invent facts.** Names, eligibility, fees, links must come from the official
   source (the authority's own `.gov.in`/`.ac.in`/`.res.in` site), not memory or aggregators.
5. **Run `sh agents/check.sh`** — it now enforces syntax, schema, enums, duplicate IDs,
   cross-references, the scope blocklist, links, and dates deterministically.
6. **Do NOT auto-commit.** Report a summary; the user reviews and commits.

For a pasted list ("check and add these…"): dedupe across ALL relevant files, scope-check
each, add only the genuinely missing + in-scope, and report a 3-column summary
(✅ added / ⏩ already present / ❓ skipped — needs clarification).

---

## Routing table — task → file → special rule

| To add/edit… | Edit only… | Special rule beyond the schema |
|---|---|---|
| UG college (Tamil Nadu) | `data/colleges-tn.js` | Scope rule (below) |
| UG college (other state) | `data/colleges-XX.js` | Scope rule |
| UG entrance exam | `data/exams.js` | `examCss` enum (CLAUDE.md); `institutes[]` need name/city/tier |
| UG course | `data/courses.js` | Add under the right `STREAMS[]` group |
| Find-by-interest area/course | `data/interest.js` | — |
| PG college | `data/pg-colleges.js` | Scope rule; `type` may be `INI`; PG `examCss` set |
| PG exam | `data/pg-exams.js` | Uses `papers[]` not `subjects[]` |
| After-UG pathway | `data/after-ug.js` | Enums: `category`/`ugFor`/`market`/`bc` |
| Announcement | `data/announcements.js` | **Only current/upcoming.** Passed → move to `archive/announcements-archive.js` (see below) |
| Career-guide entry | `data/career-guide.js` | **Cross-refs must resolve** (below) |
| Glossary term | `data/glossary.js` | English + Tamil + plain-English desc |
| Scholarship | `data/scholarships.js` | Scholarship scope (below); clear passed `deadline` to `''` |
| Internship | `data/internships.js` | Internship scope (below); official URL required |

Genuinely different workflows keep their own docs: **newspaper-ad-curator.md** (photo→data),
**dream-explorer-updater.md** (homepage dreams — design/voice guardrails),
**psychometric-updater.md** (RIASEC structural + bilingual rules),
**counselling-predictor.md** (new predictor tab — code generation),
**annual-refresh.md** (yearly time-sensitive refresh).

---

## Scope rules (per domain)

### Colleges (UG + PG) — STRICTLY ENFORCED
Government / government-aided / merit-only institutions **only**. Never private
self-financing (VIT, SRM, Manipal, Amrita, Amity, Jain, Symbiosis, Jindal, Christ,
FLAME, Saveetha, SASTRA, Ashoka, JSS, Pearl Academy, Arena Animation, MIT-ID …).
Merit-access exceptions allowed: BITS (BITSAT), TISS, XLRI. Full list in CLAUDE.md.
→ `validate.js` now screens college names against this blocklist automatically.

### Scholarships — broader than colleges
All legitimate independent UG scholarships are allowed: Central/State govt (NSP,
INSPIRE, PM YASASVI…), PSU (ONGC, LIC…), research fellowships (CSIR-NET JRF…),
**corporate/foundation CSR (Reliance, SBI Asha, HDFC, Aditya Birla…)**, and
government-funded international (Fulbright, DAAD, Chevening…). **Never add:** private
college fee-waiver/merit-discount schemes, or coaching-institute scholarships (Allen…).

### Internships — govt / PSU / research only
Research institutions, government ministries/departments, PSUs, government-funded
international. **Never add** private-company or startup internships, or aggregator
listings. Every entry needs an **official `.gov.in`/`.ac.in`/`.res.in` URL**
(non-profit research foundations like MSSRF are acceptable with a verifiable site).

---

## Cross-reference rules (checked by `validate.js`)

- **career-guide entry:** `streamId` must match a `STREAMS[].id` (courses.js);
  `examNames[]` must match exam `.name` values (exams.js / pg-exams.js);
  `augIds[]` must match `AFTER_UG[].id` (after-ug.js).
- **Deadlines** (scholarships/internships) and **dates** (announcements) must be real
  ISO `YYYY-MM-DD`; a passed `deadline` → set to `''` and update the note.

## Announcement archiving
Keep only current/upcoming items in `data/announcements.js`. When an item's date
(`endDate || date`) has passed, MOVE it (don't delete) to
`archive/announcements-archive.js`. Find passed items with
`node agents/date-consistency.js`.

---

## Verify before pushing live
Read `agents/prelive.md`. The mechanical gate (`check.sh`) is deterministic and free;
the only AI step is confirming the *facts* on changed records against official sources
(exam names, eligibility, fees) — scoped to `node agents/changed-records.js`, not the
whole dataset.
