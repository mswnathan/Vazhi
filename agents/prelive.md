# Agent: Pre-Live Verification (Content Accuracy Gate)

**Purpose:** The final gate before anything is pushed live to Netlify. It runs in
two stages — first the mechanical checks (schema, braces, behaviour), then a
**content-accuracy checklist** that a human/Claude session works through against
official sources. Mechanical checks catch broken code; this checklist catches
*wrong or stale facts*, which is the more dangerous failure for a guidance site.

> ⚡ **Scope = the diff, not the database.** Stage 2 is expensive (it reads records
> and checks official sources), so by default it runs on **only the records added
> or modified since what's live** — never the whole dataset. The changed-record
> worklist comes from `agents/changed-records.js` (see Stage 2). Full-dataset
> verification is reserved for the annual refresh or an explicit request.

**When to run:**
- Before every push to the live branch / Netlify deploy
- After any bulk data add (colleges, exams, scholarships, internships)
- As part of the yearly refresh (see `annual-refresh.md`) — the one time you go full-dataset

**How to invoke:**
```
You are the Vazhi Pre-Live Verification agent.
Read CLAUDE.md and agents/prelive.md.
Run Stage 1 (mechanical). Then run  node agents/changed-records.js  to get the
worklist, and apply the Stage 2 checklist to ONLY those added/modified records.
Report a pass/fail line per checklist item. Do NOT push — the user pushes after review.
```

---

## Stage 1 — Mechanical gate (deterministic, $0 tokens)

```
sh agents/check.sh
```
One command runs everything checkable by a machine: `validate.js` (all-file syntax,
schema, enums, duplicate IDs, cross-refs, **scope blocklist**) + `functional-test.js`
(filters/search/coverage) + `career-audit.js` + **`link-authority.js` (item 7)** +
**`date-consistency.js` (item 8)**. Fix anything it flags before Stage 2.
This layer costs no tokens — never do by hand what it already checks.

---

## Stage 2 — Facts a script CAN'T check (the only AI step)

Stage 1 already covered items 7–8 (links, dates) and scope. Stage 2 is the residue —
**items 1–6, judged against official sources, on CHANGED records only.** If you already
verified these facts while authoring the record, you don't need to repeat it here;
this stage is the safety net for anything added without source-checking, and the full
sweep belongs to the annual refresh, not every push.

**First, get the worklist — verify only what changed:**
```
node agents/changed-records.js            # vs origin/main (what's live)
node agents/changed-records.js HEAD       # vs last commit (uncommitted work only)
node agents/changed-records.js <ref>      # vs any baseline / deploy tag
```
It prints the `+ [ADDED]` / `~ [MODIFIED]` records per file (by id/name), parsed
from the actual data — no adjacent-record noise. **Apply the checklist below to
ONLY those records.** If it prints "nothing to verify", Stage 2 is done. Read the
full file for a changed record only when a checklist item needs a field you can't
see in the identifier — don't load whole data files.

Work through each item for those changed records (or **all** entries during the
annual refresh). Mark each ✅ pass / ❌ fail / ⏩ n/a and cite the source you
checked. When a fact can't be confirmed from an official source, treat it as ❌ —
**do not guess** (standing CLAUDE.md data-accuracy rule).

> "Official source" = the authority's own site: `.gov.in`, `.nic.in`, `.ac.in`,
> `.edu.in`, `.res.in`, or the recognised body's official domain. Aggregators
> (collegedunia, careers360, shiksha, universitykart) are **leads, not proof**.

- [ ] **1. Entrance exam names are correct.**
  Verify each `exam` / `examNames` / exam-group `name` against the conducting
  body's official name and current acronym (e.g. it's *CUET-UG*, not "CUCET";
  *ICAR AIEEA UG*, not "ICAR NET UG"). Check for renamed/merged exams.
  Files: `data/exams.js`, `data/pg-exams.js`, and the `exam`/`examNames` fields in
  `courses.js`, `interest.js`, `pg-colleges.js`, `colleges-*.js`, `scholarships.js`,
  `internships.js`, `career-guide.js`.

- [ ] **2. Eligibility criteria match official sources.**
  Confirm the `for` / `class12` / `ugStream` / `class12Pct` / subject
  requirements against the official eligibility page — age limits, minimum %,
  required subjects (PCM/PCB/PCMB), degree level. Flag anything stated more
  loosely or strictly than the source. (Remember the TN nursing exception: verify
  state-specific rules, don't assume a national mandate applies.)

- [ ] **3. College names are current.**
  Check each `name` / `short` against the institution's own site — catch
  renames (e.g. university upgrades, ISO/deemed status changes, city renames)
  and confirm it's still operating and in-scope (govt / aided / merit-only per
  CLAUDE.md — no private self-financing colleges).
  Files: `data/colleges-*.js`, `data/pg-colleges.js`.

- [ ] **4. Scholarship information is up to date.**
  Verify `amount`, `duration`, `class12Pct`, `deadline`, eligibility and that the
  scheme still exists for the current cycle. Discontinued or superseded schemes
  must be removed or clearly marked. Deadlines that have passed → set `deadline: ''`
  and update the note.
  Files: `data/scholarships.js`, `data/internships.js` (stipend/deadline too).

- [ ] **5. Course names are accurate.**
  Confirm degree nomenclature matches how the awarding institutes name it
  (e.g. *B.F.Sc*, *BVSc & AH*, *B.Tech (Ocean Engineering)*) — no invented or
  outdated titles. Branch lists should reflect real specialisations.
  Files: `data/courses.js`, `data/interest.js`, `programGroups[].programs[]` in
  the college files, `subject-strengths.js`.

- [ ] **6. Fees / reservation information isn't misleading.**
  Any fee, stipend, seat-count or reservation claim must be verifiable and
  presented without implying a guarantee. Prefer ranges with a source year.
  Do **not** state reservation percentages or quota specifics unless confirmed
  from the official prospectus/notification. Remove stale figures rather than
  leaving an unverified number.
  Fields: `salary`, `amount`, `stipend`, `seats`, `fee`-bearing `note`/`specialNote`.

- [ ] **7. Every external link points to the official authority.**
  Each `website:` / `link:` field must resolve to the authority's own domain,
  not an aggregator, blog, or dead page. Run the checker (diff-scoped by default):
  ```
  node agents/link-authority.js            # links on changed records vs what's live
  node agents/link-authority.js --live     # also verify each is reachable (needs net)
  node agents/link-authority.js --all       # whole dataset (annual refresh)
  ```
  🔴 = likely not the official authority (`.com`/`.net`/`.co.in`) — verify or replace.
  🟡 = plausibly official (`.org`/bare `.in`) — confirm, then add the host to the
  `ALLOWLIST` in `link-authority.js` to silence it on future runs. No `https://`
  prefix in the data (the script flags that too; the renderer adds it).

- [ ] **8. Any "last updated" dates are consistent.**
  Run the checker (diff-scoped; always also checks the two HTML stamps):
  ```
  node agents/date-consistency.js          # changed records + about/privacy stamps
  node agents/date-consistency.js --all    # every announcement/deadline (annual refresh)
  ```
  🔴 = broken/future date (unparseable "Last updated", invalid ISO, endDate before
  date) — fix before going live. 🟡 = passed event or deadline — remove/update the
  announcement, or clear a passed `deadline` to `''`. The "Last updated" stamps live
  in `about.html` (~line 98) and `privacy.html` (~line 96); bump both to the real
  edit date when content/policy changes. Set `tentative: true` on unconfirmed dates.

---

## Reporting format

Print one line per item, e.g.:
```
✅ 1. Exam names — checked JEE Main, CUET-UG, ICAR AIEEA UG vs nta.ac.in / icar.org.in
❌ 4. Scholarship — 'Everest Scholarships' amount unverifiable on source; needs review
⏩ 8. Last-updated — no about/privacy change in this diff
```
End with **PASS** (all ✅/⏩) or **NEEDS REVIEW** (any ❌, list them). Never push on
a ❌ — hand the list back to the user.

---

## Automation status (for future hardening)

| Item | Automatable? | Note |
|---|---|---|
| Scoping | ✅ Done | `agents/changed-records.js` restricts Stage 2 to added/modified records. |
| 7 external links | ✅ Done | `agents/link-authority.js` — TLD triage (diff-scoped) + optional `--live` reachability. |
| 8 date consistency | ✅ Done | `agents/date-consistency.js` — future/invalid "Last updated", invalid/inverted announcement dates, passed events & deadlines (diff-scoped). |
| 1–6 | No | Require judgement against official sources — this checklist is the control. |

All three automatable items now have scripts: `changed-records.js` (scoping),
`link-authority.js` (item 7), `date-consistency.js` (item 8). Wire any of them into
`check.sh` whenever you want them enforced as part of the one-command mechanical gate.
