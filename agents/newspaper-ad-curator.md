# Agent: Newspaper Ad Curator

**Purpose:** Triage photos of newspaper ads (admissions, recruitments, scholarships, exam notifications, tenders) and update the relevant Vazhi data files.

**Rules:**
- Read photos from `~/Vazhi/vazhi-ads/` by default. Convert HEIC → JPG into a `jpg/` subfolder via `sips -s format jpeg` before reading.
- Edit only `data/*.js` files. Never touch `index.html`, `css/`, `js/`.
- Follow the schemas in `CLAUDE.md` exactly.
- After all edits, run `sh agents/check.sh` from project root.

**Standing decisions (do not re-ask the user each batch):**
1. **Every institution seen in any ad — admission, recruitment, tender, infographic, or social-media screenshot — must be checked against the database.** Even if the ad is a faculty recruitment notice, a salary comparison graphic, or an unrelated tender, extract the institution name, look it up in `data/colleges-*.js` and `data/pg-colleges.js`, and:
   - If missing **and in scope** (govt / aided / merit-only): add it with its full UG and/or PG programmes, entrance exams, and website. Research the correct courses if the ad doesn't list them — use what you know about the institution.
   - If already present for UG but not PG (or vice versa): add the missing level.
   - If already present at both levels: no action needed.
2. **Admission deadlines**: when a college/exam is added and the ad carries a future deadline, also create a dated entry in `data/announcements.js`.
3. **Passed deadlines** (date already in the past relative to today): add the institution, but skip the announcement entry.
4. **Scholarships**: scope is *not* restricted to govt/aided — NGO, corporate, professional-body and international scholarships are all in scope. Use the `level` field (`Central` / `State` / `Corporate` / `International`) to label. Colleges and exams still follow the strict CLAUDE.md scope rule (govt / aided / merit-only).
5. **Infographics / social-media screenshots** (salary comparisons, career lists, exam rankings, company lists): scan for institution names, entrance exam names, and career/course information. Check each institution against the database. Update career-guide.js, after-ug.js, or market.js if the career/exam data is missing or richer than what we have. Do not skip infographics — treat them as data sources.

**Per-batch workflow:**
1. List photos in `~/Vazhi/vazhi-ads/` (HEIC + JPG + PNG). Convert HEIC to JPG into `vazhi-ads/jpg/`.
2. Read each photo with the Read tool. For **every** photo — admission ad, recruitment notice, tender, infographic, salary graphic, social-media screenshot — extract:
   - Institution name(s), location/state, website
   - Course(s) offered (UG and PG), entrance exams
   - Deadlines, scholarship/internship details
   - Career/exam/salary data if the image is an infographic
3. **Scope-check colleges/exams** against CLAUDE.md §"College & Institute Scope". Reject private self-financing; allow Central / State / Aided / INI / merit-access exceptions (BITS / TISS / XLRI).
4. **Dedupe every institution seen** — regardless of the ad type — against existing data files:
   - `grep -l "<name>" data/colleges-*.js data/pg-colleges.js` — check both UG and PG files
   - `grep -l "<name>" data/exams.js data/pg-exams.js data/scholarships.js data/internships.js data/announcements.js data/career-guide.js data/after-ug.js`
   - If already present at both UG and PG level: no action. If present at one level only: add the other.
5. **For any institution not in the database**: add it with its full programme list and entrance exams. If the ad does not list all courses (e.g. it is a recruitment ad), use your knowledge of that institution to fill in the standard UG/PG offerings — read `agents/data-updater.md` or `agents/pg-data-updater.md` for the exact schema.
6. **For infographics / social-media screenshots**: extract all institutions, exam names, career roles, and salary data. Check each against career-guide.js, after-ug.js, exams.js, and market.js. Add or update entries that are missing or richer than what we have.
7. **Unreadable / blurry photos**: if an image cannot be read clearly enough to identify the institution or ad content, do NOT skip it — stop and ask the user what it shows before continuing with the rest of the batch.
8. **Ask the user** only for genuine ambiguity (unclear scope, two institutes with the same name, course not in any known category, or unreadable image). Never ask about the five standing decisions above.
9. **Add** missing in-scope entries to the correct files:
   - UG college → `data/colleges-XX.js` (correct state)
   - PG college → `data/pg-colleges.js`
   - Missing entrance exam → `data/exams.js` or `data/pg-exams.js`
   - Scholarship → `data/scholarships.js`
   - Internship → `data/internships.js`
   - Career/govt job pathway → `data/career-guide.js` or `data/after-ug.js`
   - Announcement for any future-dated admission/exam → `data/announcements.js`
10. **Verify**: `sh agents/check.sh` must pass. Then reload the preview server and confirm no console errors.
11. **Report a 3-column summary**: ✅ Added · ⏩ Already present · ❓ Skipped (with reason — only scope failures or genuine ambiguity count as valid skip reasons; "it was a recruitment ad" is NOT a valid reason to skip the institution).
12. **After user confirms the summary**: delete the processed originals (HEIC/JPG/PNG) from `~/Vazhi/vazhi-ads/` and the `jpg/` working copies.
13. **Do not auto-commit.** The user reviews `git diff data/` and commits themselves.

**How to invoke:**
- Slash command: `/vazhi-newspaper-ads`
- Or just say: "process the newspaper ads" — I read this file and follow the workflow.
