# Vazhi — Dream Explorer × After Class 12 Integration

> How the **guidance layer** (Dream Explorer) and the **research layer** (the existing After Class 12 database — UG Courses, Exams, Colleges, Scholarships, Predictors, Career Search) become *one counsellor-led journey*.
>
> Hard rule: **do not replace the database.** It already works. We re-position it from "a set of tabs you land on" to "the evidence the guidance layer opens on demand."

---

## The one principle

> **Dream Explorer is the map. The database is the encyclopedia you open when you tap a place on the map.**

A counsellor talks you through your options (guidance), then hands you the prospectus for the one course you actually care about (research). They never open with the prospectus. Vazhi shouldn't either.

So: **guidance is the default surface; research is always one tap away but never the entry point.** Every database view is reached *in context, pre-filtered* — the student never faces an empty filter form or a 200-row table cold.

---

## 1. Information Architecture — two layers, one spine

```
╔═ LAYER 1 · GUIDANCE (Dream Explorer) — the home, the spine ═╗
║  Dream → Path → Strong Institutions → Entrance Routes        ║
║         → Affordability → Alternative Paths                  ║
║  (cards, progressive reveal, bottom-sheets, action plan)     ║
╚═══════════════╤═════════════════════════════════════════════╝
                │  every node carries a "Explore full details →"
                ▼
╔═ LAYER 2 · RESEARCH (After Class 12 DB) — reached on demand ═╗
║  UG Courses · Entrance Exams · Colleges · Scholarships       ║
║  College Predictors · Career Search                          ║
║  (the existing tables, filters, cards — unchanged)           ║
╚═════════════════════════════════════════════════════════════╝
```

**What changes:** the old top tab-nav stops being the front door. **Home = Dream Explorer.** The seven research tabs collapse behind a single secondary entrance — a **"Browse everything"** / **Research Library** link — for the two cases that legitimately want to skip guidance: (a) a returning user who already has a shortlist, (b) the student who types a goal in the escape hatch. Everyone else arrives through a dream.

**Nothing is deleted.** `switchTab('colleges' | 'exams' | 'scholarships' | 'josaa' | 'courses' | 'career-guide')` still works exactly as today — Dream Explorer just *calls it with a pre-set filter* instead of the student navigating to it blind.

---

## 2. Navigation Flow

```
HOME (dreams)
  │  pick a dream
  ▼
DREAM EXPLORER  ── guidance, self-contained, no DB needed ──
  │   at ANY node, an "Explore full details →" deep-link:
  │
  ├─ path card ……………→ Courses (filtered to that course)
  ├─ institution ………→ Colleges (filtered to that college)
  ├─ exam badge ………→ Exams (that exam's full page)
  ├─ scholarship ………→ Scholarships (filtered to eligibility)
  ├─ opportunity ring → Colleges (filtered to geography + stream)
  └─ risk / backup ……→ College Predictor (seeded with the exam)
  ▼
RESEARCH VIEW (existing DB, pre-filtered)
  │   persistent breadcrumb: "↩ Back to your [Helping People] journey"
  ▼
back to Explorer — context preserved
```

Two laws keep it one journey, not two products:
- **Forward links are always pre-filtered.** Tapping "full details" on MBBS opens the Courses tab *already scoped to MBBS* — never the unfiltered tab.
- **Every research view has a way home.** A persistent "↩ Back to your *Helping People* journey" chip sits on top of any DB view entered from Explorer, so research is a *detour*, not a destination.

---

## 3. Entry Points between systems (the exact handoffs)

| From (Explorer node) | Button | Lands in (existing tab) | Pre-filter |
|----------------------|--------|--------------------------|-----------|
| Path card / detail | "Full course details →" | **Courses** | that course |
| Institution row | "Full profile & all programmes →" | **Colleges** | that college |
| Opportunity ladder ring | "See all [state] colleges →" | **Colleges** | geography + stream |
| Exam risk badge | "Dates, syllabus, pattern →" | **Exams** | that exam |
| Action-plan deadline | "Official notice →" | **Announcements** | that event |
| Scholarship strip | "All scholarships you qualify for →" | **Scholarships** | stream + community |
| Risk badge / stress-test | "Will my rank get me in? →" | **College Predictor** | exam seeded |

**Reverse entry (research → guidance)** — just as important, so the DB isn't a one-way trapdoor:
- A Colleges/Exam page carries a quiet **"Why this matters for your dream →"** that opens (or returns to) the relevant Explorer path.
- **Career Search** results each get **"See this as a dream journey →"** — turning the existing keyword search into an on-ramp to Dream Explorer. (Career Search is the natural bridge: it already maps keyword → degree/exam/path.)

---

## 4. Mobile UX (the make-or-break)

Guide-first is *already* the mobile-friendly half — cards, progressive reveal, bottom-sheets. The danger is entirely in Layer 2: **tables and filters are where mobile breaks.** Rules:

- **Deep-links arrive pre-filtered**, so the student never meets an empty filter form on a phone — the hardest mobile interaction is skipped entirely.
- **Tables render as stacked cards on mobile** (the Colleges/Exams DB should already do this; if any view still shows a wide table, that's the one mobile fix worth making).
- **Research opens as a bottom-sheet or full-screen takeover**, not a side-by-side — with the "↩ Back to your journey" chip pinned top-left.
- **Persistent journey bar** at the bottom on mobile: `🩺 Helping People · B.Sc Nursing` so the student never loses the thread while deep in a college list.
- One screen, one decision. Never a table and a filter panel and a result list competing for 380px.

---

## 5. How institution discovery should appear (three depths)

Institution info already lives in Explorer at two depths; the DB is the third. The student descends only as far as they care to:

1. **Anchor (guidance)** — `🏛 incl. AIIMS, JIPMER` on the path card. Brand recognition = strength signal. *No DB.*
2. **Shortlist (guidance)** — the institutions list in path detail, with fee tags + the local→state→India opportunity ladder. *Still no DB.*
3. **Full profile (research)** — "Full profile & all programmes →" opens the **Colleges** entry: NAAC, NIRF, affiliation, website, every programme, cutoffs. *This is the DB, reached only now.*

The **opportunity ladder is the bridge**: each ring (Near you / TN / All India) is a live "see all of these →" into the Colleges tab filtered by that geography + the dream's stream. Discovery (guidance) and the full list (research) become the same gesture at different zoom levels.

---

## 6. How exam databases should appear

In Explorer, an exam is never a table — it's a **risk badge + one-line route** ("🔴 Main route: NEET"). That's all a deciding student needs. When they want the real detail:

- **"Dates, syllabus, pattern →"** opens the **Exams** tab for that exam (institutes, subjects, frequency, official site).
- **Dates specifically** surface inline in the **action plan** as "next deadline," pulled live from `announcements.js` — so the one piece of exam data that drives action (the date) is in the guidance layer; the full syllabus stays in research.

Principle: **the exam's *consequence* (what it gates, when it closes) is guidance; the exam's *contents* (syllabus, pattern) are research.**

---

## 7. How scholarship data should appear

- **Guidance:** 3–4 most-relevant scholarships in the path detail (already there) + the govt-vs-private affordability contrast. This answers the *parent's* first question — "can we afford this?" — without a table.
- **Research:** "All scholarships you qualify for →" deep-links to the **Scholarships** tab, pre-filtered by the path's stream and (if the student later gives it) community/income band.
- The **affordability *argument*** lives in guidance (the fee-contrast bars); the **eligibility *matrix*** lives in research (the full filterable list). Same split as exams: the persuasion is up front, the paperwork is one tap down.

---

## 8. How College Predictors connect to pathways

The predictor is the **reality-check that powers the whole "what if it doesn't work out" philosophy.** It's the hinge between aspiration and backup:

```
High-risk path (MBBS · 🔴 NEET)
   │  "Will my rank get me in? →"   (seeds the predictor with NEET/JoSAA)
   ▼
COLLEGE PREDICTOR (existing)
   │  output: "likely / borderline / unlikely"
   ▼
feeds straight back into the BACKUP framing:
   • Likely      → "You're on track. Here's your action plan."
   • Borderline  → "Possible — but lock in a backup. See alternatives ↓"
   • Unlikely    → "Let's be honest: aim your energy at the paths that
                    will land. Here are your strongest alternatives ↓"
```

So the predictor doesn't just predict — its result **re-ranks the Primary/Alternative/Backup tiers** and routes the student into the "Other Paths to the Same Dream" component with evidence, not vibes. The predictor is where Vazhi's counselling philosophy stops being reassuring copy and becomes a data-backed redirect. This is the single most valuable integration point — build it first when wiring the two layers.

---

## Implementation note (grounded in the current code)

The integration is mechanically small because the app already has the primitive:
- Extend `switchTab(tab)` → `switchTab(tab, filter)` (or set the tab's filter-state object, then `switchTab`). Every render function already reads its filter state on entry (`populateCollegeFilters` etc.), so a pre-seeded filter "just works."
- Each Explorer deep-link is one line: `switchTab('colleges', {college:'mmc'})`, `switchTab('exams', {exam:'neet'})`, `switchTab('josaa', {exam:'neet'})`.
- The "↩ Back to your journey" chip = store `lastDream`/`lastPath` in state on deep-link, render the chip when set, clear on home.
- Career Search → Explorer reverse link reuses the existing `CAREER_MAP` keyword match to resolve a search term to a dream id.

No new data files. No database rebuild. The research layer keeps every table and filter it has — it just stops being the front door, and starts being the thing the counsellor opens *for* you.

---

## The test of success

A student should never think "now I'm leaving the guidance and entering the database." They should think: *"I asked to see more, and it showed me more."* If the seams are invisible — if research always arrives pre-filtered with a way back — it's one counsellor-led journey. If the student ever lands on a raw, unfiltered table, the seam showed, and that's the bug.
