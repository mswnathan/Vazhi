# Agent: Newspaper Ad Curator

**Purpose:** Triage photos of newspaper ads (admissions, recruitments, scholarships, exam notifications, tenders) and update the relevant Vazhi data files.

**Rules:**
- Read photos from `~/Vazhi/vazhi-ads/` by default. Convert HEIC → JPG into a `jpg/` subfolder via `sips -s format jpeg` before reading.
- Edit only `data/*.js` files. Never touch `index.html`, `css/`, `js/`.
- Follow the schemas in `CLAUDE.md` exactly.
- After all edits, run `sh agents/check.sh` from project root.

**Standing decisions (do not re-ask the user each batch):**
1. **Recruitment ads** (faculty/staff vacancies, walk-in interviews, tenders): skip the ad itself. But if the *institute* in the ad is missing from the relevant `data/colleges-*.js` or `data/pg-colleges.js`, add the institute.
2. **Admission deadlines**: when a college/exam is added and the ad carries a future deadline, also create a dated entry in `data/announcements.js`.
3. **Passed deadlines** (date already in the past relative to today): add the institution to data files, but skip the announcement entry.
4. **Scholarships**: scope is *not* restricted to govt/aided — NGO, corporate, professional-body and international scholarships are all in scope. Use the `level` field (`Central` / `State` / `Corporate` / `International`) to label. Colleges and exams still follow the strict CLAUDE.md scope rule (govt / aided / merit-only).

**Per-batch workflow:**
1. List photos in `~/Vazhi/vazhi-ads/` (HEIC + JPG + PNG). Convert HEIC to JPG into `vazhi-ads/jpg/`.
2. Read each photo with the Read tool. For each ad, extract: institution name, location/state, course(s), exam(s), deadlines, scholarship/internship details, website.
3. **Scope-check colleges/exams** against CLAUDE.md §"College & Institute Scope". Reject private self-financing; allow Central / State / Aided / INI / merit-access exceptions (BITS / TISS / XLRI).
4. **Dedupe** every candidate against existing data files with `grep -l` across `data/colleges-*.js`, `data/pg-colleges.js`, `data/exams.js`, `data/pg-exams.js`, `data/scholarships.js`, `data/internships.js`, `data/announcements.js`.
5. **Ask the user** only for genuine ambiguity (e.g. an ad's wording leaves scope unclear). Don't ask about the four standing decisions above.
6. **Add** missing in-scope entries to the correct files:
   - UG college → `data/colleges-XX.js` (correct state)
   - PG college → `data/pg-colleges.js`
   - Missing entrance exam → `data/exams.js` or `data/pg-exams.js`
   - Scholarship → `data/scholarships.js`
   - Internship → `data/internships.js`
   - Announcement for any future-dated admission/exam → `data/announcements.js`
7. **Verify**: `sh agents/check.sh` must pass. Then reload the preview server and confirm no console errors.
8. **Report a 3-column summary**: ✅ Added · ⏩ Already present · ❓ Skipped (with reason).
9. **After user confirms the summary**: delete the processed originals (HEIC/JPG/PNG) from `~/Vazhi/vazhi-ads/` and the `jpg/` working copies. Do this only after explicit user confirmation per batch.
10. **Do not auto-commit.** The user reviews `git diff data/` and commits themselves.

**How to invoke:**
- Slash command: `/vazhi-newspaper-ads`
- Or just say: "process the newspaper ads" — I read this file and follow the workflow.
