# Vazhi — Decision-Support Design Spec

> Iteration 3 — from "interesting idea" to "this helps me decide."
> Scope locked: dreams-first philosophy, institution-first guidance, affordability, parent section, and the One Dream → Many Paths framework are **approved and retained**. This document does not redesign them. It specifies the *features and interactions* that operationalize them.
>
> Status: spec for review. No homepage code changed in this round. Build order (per your call): **Unknown Careers first**, then the rest.

---

## 0. The one-line reframe

Vazhi today *explains* a good philosophy. To make it *useful*, every screen must answer a student's real question:

> "Given who I am and what I have, what are my strongest moves — and what happens if my first move fails?"

Everything below serves that sentence. The test for any feature: **does it move the student one concrete step closer to a decision they can act on this week?** If not, it's a manifesto, and it's cut.

---

## 1. UX critique of the current homepage

**What's working (keep, don't touch):**
- Interaction-first hero ("What do you want from your future?") — correct instinct.
- One Dream → Primary / Alternative / Backup paths — this is the differentiator and it reads clearly.
- Affordability fee-bar — visceral, decision-relevant.
- Parent section — rare and trust-building.

**What's holding it back (the gap between "interesting" and "useful"):**

| # | Problem | Why it blocks a decision |
|---|---------|--------------------------|
| C1 | **Only one dream is live.** 8 of 9 cards say "Soon." | A student who isn't "Help People" hits a dead end on their first click — the exact moment we promised to help. |
| C2 | **The journey is the same for everyone.** | A 92%-marks Chennai student and a 58%-marks rural student see identical content. Real counselling is *conditional* on the student. Nothing here adapts. |
| C3 | **No input, so no personalization.** | We tell students "many paths exist" but never narrow to *their* paths. That's a brochure, not a counsellor. |
| C4 | **No comparison.** | Paths are listed, never weighed. A student still can't answer "is Nursing-at-a-govt-college a better bet for me than private MBBS?" |
| C5 | **No exposure mechanism.** | The "your district is not your ceiling" goal isn't expressed anywhere yet. |
| C6 | **No follow-through.** | The journey ends on "jobs" — inspiring, but the student closes the tab with no next action. No saved plan, no checklist, no deadline. |
| C7 | **Scrolling cost.** | Manifesto + 6 sections is a long scroll before the student *does* anything beyond the one drilldown. The decision tools should compete for the fold. |

**Verdict:** the homepage is a strong *pitch* and a weak *tool*. The fixes below add the tool without removing the pitch.

---

## 2. Missing functionality (the honest list)

1. **Breadth** — the other 8 dreams must drill down, even if lighter than Help People.
2. **A profile** — even 5 lightweight inputs (class, marks band, budget band, state, mobility) unlock everything conditional.
3. **Conditional paths** — Primary/Alt/Backup should *re-rank* based on marks and budget. A 55% student's "primary" is not MBBS.
4. **Comparison** — a way to put 2–3 paths side by side on more than salary.
5. **Exposure** — local → state → India laddering, surfaced proactively.
6. **Discovery** — lesser-known careers the student would never search for.
7. **Persistence + action** — save a shortlist, generate a dated action plan (Firebase auth already exists; reuse it).

Items 2–7 are net-new. Item 1 is finishing what's started.

---

## 3. Missing decision-support tools

Three tools turn the philosophy into decisions. They map directly to your features:

| Tool | Answers the question | Maps to |
|------|----------------------|---------|
| **Career GPS** | "Where do I personally stand, and what should I do next?" | Feature 2 |
| **Decision Framework** | "Path A vs Path B — which is the smarter bet for me?" | Feature 5 |
| **Opportunity Map** | "What exists beyond what I can see from my town?" | Feature 3 |

Career GPS is the *funnel in* (narrow to me). Decision Framework is the *weigh* (compare my options). Opportunity Map is the *expand* (don't decide too small). Together they behave like a counsellor: understand the student → widen the view → narrow rationally.

---

## 4. Dream Explorer — design

**Goal:** turn the existing one-shot drilldown into a *guided, stepped reveal* that works for all 9 dreams and feels like being walked through, not handed a wall.

### 4.1 Interaction model — progressive reveal, not a data dump

Today the whole journey appears at once. Instead, reveal **one level at a time**, each triggered by the student's tap. This is the single most "counsellor-like" change: a counsellor doesn't recite everything; they answer, pause, then ask "want to see where that leads?"

```
Tap dream
   ↓  reveal Level 2 (Career Cluster) + button "Show me the paths →"
Tap "Show me the paths"
   ↓  reveal Level 3 (Primary / Alternative / Backup)  ← the core moment
Tap a specific path (e.g. "B.Sc Nursing")
   ↓  reveal Level 4 (Strong Institutions for THAT path) + Level 5 (Scholarships) + Level 6 (Jobs)
Persistent footer button: "⭐ Save this path"  /  "⚖️ Compare paths"  /  "📋 Build my plan"
```

Key change vs current: **Level 4+ is scoped to the path the student tapped**, not the whole dream. Tapping "B.Sc Nursing" shows *nursing* colleges, *nursing* scholarships, *nursing* careers — that specificity is what makes it feel like guidance.

### 4.2 The six revealed levels (per dream)

1. **Career Cluster** — the roles inside the dream (Doctor, Dentist, Nurse, Physio, Public Health).
2. **Paths**, in three labelled tiers — Primary / Alternative / Backup (already designed; keep).
3. **Strong Institutions** — scoped to the tapped path; each shows type + a fee tag (govt/aided/central) so affordability is inline.
4. **Scholarships** — filtered to the path's stream (reuse `SCHOLARSHIPS[]`).
5. **Jobs & Future** — entry roles + the "if interests change later" flexibility note.
6. **Next action** — Save / Compare / Build plan. The journey never dead-ends.

### 4.3 Conditional behaviour (ties to Career GPS)

If a Career GPS profile exists, Dream Explorer **re-orders the path tiers**:
- 55–65% marks → Nursing/Allied promoted to Primary; MBBS shown as "stretch" with the honest cut-off note.
- Budget = "govt only" → private/deemed institutions hidden entirely (already our scope), and the fee tag is emphasised.
- "Won't leave state" → out-of-state institutions greyed with a gentle "worth reconsidering — here's why" nudge (feeds Opportunity Map).

Without a profile, it shows the neutral default we have now. **The profile is optional; the explorer never requires it.**

### 4.4 Wireframe — Dream Explorer stepped reveal

```
┌──────────────────────────────────────────────┐
│  🩺  "I want to help people"        [your dream]│   ← dark header
├──────────────────────────────────────────────┤
│  CAREER CLUSTER                                │
│  (Doctor)(Dentist)(Nurse)(Physio)(Public Hlth)│   ← chips
│                                                │
│            [  Show me the paths →  ]           │   ← reveal trigger
└──────────────────────────────────────────────┘
        ↓ (tap)
┌──────────────────────────────────────────────┐
│  ● PRIMARY PATH — most direct                  │
│  ┌────────────┐                                │
│  │ MBBS       │  5.5y · Doctor · NEET-UG       │
│  └────────────┘                                │
│  ● ALTERNATIVE — same dream, different door    │
│  ┌──────┐┌──────────┐┌─────┐                   │
│  │ BDS  ││B.Sc Nursng││ BPT │  ← tap any       │
│  └──────┘└──────────┘└─────┘                   │
│  ● BACKUP — keep the dream alive               │
│  ┌──────────┐┌────────────┐┌─────────┐         │
│  │Public Hlt││Life Science││Research │         │
│  └──────────┘└────────────┘└─────────┘         │
└──────────────────────────────────────────────┘
        ↓ (tap "B.Sc Nursing")
┌──────────────────────────────────────────────┐
│  B.Sc Nursing — your selected path             │
│  ── STRONG INSTITUTIONS (nursing) ──           │
│  🏛 CON, AIIMS Delhi      Central · ~free      │
│  🏛 Govt College of Nursing, Chennai  State    │
│  ── SCHOLARSHIPS ──   ── JOBS & FUTURE ──      │
│  • Post-Matric        • Staff Nurse (govt)     │
│  • State fee waiver    • → M.Sc / Nurse Pract. │
│ ────────────────────────────────────────────  │
│  [⭐ Save]   [⚖️ Compare]   [📋 Build my plan] │   ← always present
└──────────────────────────────────────────────┘
```

---

## 5. Career GPS — design (flagship)

**Promise:** the student answers 5–6 quick questions and gets *"here are your strongest options,"* never *"become X."* It's a funnel, not a verdict.

### 5.1 Inputs (one screen, chip-based, ~30 seconds)

| Input | Control | Values |
|-------|---------|--------|
| Current class | chips | 10 · 11 · 12 · Passed 12 · Dropper |
| Marks / band | chips (not exact %) | <50 · 50–60 · 60–75 · 75–85 · 85–95 · 95+ · Don't know yet |
| Stream / subjects | chips | PCM · PCB · PCMB · Commerce · Arts · Undecided |
| Interests | multi-select dreams | the 9 motivation cards (reuse) |
| Budget | chips | Govt only · Up to ₹1L/yr · Up to ₹3L/yr · Flexible |
| Home state | dropdown | TN, PY, KA … (reuse college state list) |
| Study outside state? | toggle | Yes, anywhere · Prefer nearby · No |

Design rules: **no exact marks, no personal data, no sign-up to run it.** Bands keep it low-pressure and privacy-safe (aligns with the rule against collecting sensitive data). Sign-in only to *save* the result.

### 5.2 Output — "Your strongest options" (never a single answer)

A ranked **set**, framed as options with honest reasoning:

```
Based on what you told us, here are your strongest options
(not a verdict — a starting point you can refine)

╔═ STRONGEST FIT ════════════════════════════════╗
║ 🩺 Help People → B.Sc Nursing                   ║
║ Why this fits you: PCB · 60–75 band · govt-only ║
║ budget · TN. Govt nursing seats are merit-based ║
║ in TN and affordable.                           ║
║ [Explore this path →]                           ║
╚════════════════════════════════════════════════╝

╔═ STRETCH (reach higher) ═══════════════════════╗
║ 🩺 MBBS — needs ~NEET 600+. Worth attempting;   ║
║ here's the backup if it doesn't land. [See →]   ║
╚════════════════════════════════════════════════╝

╔═ EXPAND (you may not have considered) ═════════╗
║ 🔬 Allied Health — Medical Lab Tech, Imaging.   ║
║ Same "help people" motivation, strong govt      ║
║ demand, lower cut-offs. [See →]                 ║
╚════════════════════════════════════════════════╝

→ 4 government institutions match you   [view]
→ 3 scholarships you're eligible for    [view]
→ [📋 Generate my action plan]
```

Three buckets — **Strongest Fit / Stretch / Expand** — are themselves a piece of counselling: anchor, ambition, horizon. This is the structure that says "this understands my situation."

### 5.3 Personalized Action Plan (the follow-through)

Generated from the output, dated, checklist-style. This is what converts "interesting" into "I did something."

```
YOUR PLAN — Class 12, PCB, targeting govt nursing + MBBS stretch
□ Now–Jul   Register for NEET-UG 2027
□ Now       Shortlist 5 govt nursing colleges in TN  [done: 0/5]
□ Aug       Apply: Post-Matric Scholarship
□ Ongoing   Keep PCB ≥ 75% for merit counselling
□ Backup    If NEET < 500 → TN nursing merit counselling route
            [⭐ Save plan]   [⤓ Download]   [📲 Remind me of deadlines]
```

Reuse Firebase auth to persist; reuse `ANNOUNCEMENTS[]` for real dates; reuse `SCHOLARSHIPS[]` for eligibility.

### 5.4 Wireframe — Career GPS

```
STEP 1/2 · TELL US ABOUT YOU            ●●○○○○ progress
┌──────────────────────────────────────────────┐
│ I'm in:   (10)(11)(12●)(Passed)(Dropper)       │
│ Marks:    (<50)(50-60)(60-75●)(75-85)(85+)(?)  │
│ Subjects: (PCM)(PCB●)(PCMB)(Comm)(Arts)        │
│ Dreams:   (Help●)(Build)(Nature)(Serve)...     │
│ Budget:   (Govt only●)(≤1L)(≤3L)(Flexible)     │
│ State:    [ Tamil Nadu ▾ ]                      │
│ Outside?  (Anywhere)(Nearby●)(No)               │
│                       [ Show my options → ]     │
└──────────────────────────────────────────────┘
        ↓
STEP 2/2 · YOUR STRONGEST OPTIONS
[ Strongest Fit ] [ Stretch ] [ Expand ]   ← 3 cards
[ 4 institutions ][ 3 scholarships ][ 📋 plan ]
```

---

## 6. Unknown Careers — "Careers you may not know exist" (BUILD FIRST)

**Why first:** it's pure exposure, needs no profile, no logic, no auth — just well-researched cards. Highest differentiation per unit of effort, and it's the most "wow, I didn't know that was a job" moment. It earns trust fast.

### 6.1 Card content model

Each career is one expandable card. Data lives in a new `data/unknown-careers.js` (`UNKNOWN_CAREERS[]`), following the project's data/JS split.

```js
{
  id: 'actuary',
  name: 'Actuary',
  ico: '📊',
  oneLine: 'Prices risk for insurers and pension funds using statistics.',
  whatTheyDo: 'Short plain-English paragraph.',
  whyItMatters: 'Why society needs this role.',
  motivations: ['earn','build'],      // links back to the dream cards
  govOpportunities: 'LIC, GIC, IRDAI, public-sector insurers, RBI.',
  courses: ['B.Sc Statistics','B.Stat (ISI)','Actuarial via IAI exams'],
  institutions: ['ISI Kolkata','CMI','Central Universities','Univ. of Madras'],
  exam: 'CUET / ISI admission / IAI',
  demand: 'High · niche',
  bc: 'teal'
}
```

Seed set (your list, all with genuine **government/PSU/research** angles — stays in scope):
Actuary · Food Technologist · Geologist (GSI) · Oceanographer (NIOT/INCOIS) · Wildlife Biologist (WII) · Statistician (ISI, MoSPI) · Meteorologist (IMD) · Patent Examiner (IPO) · Materials Scientist (DRDO/ISRO).

### 6.2 Interaction

- Grid of teaser cards → tap to expand into the full 5-part detail (What / Why / Govt opportunities / Courses / Institutions).
- Each card carries a **"matches your dream" tag** (links to the motivation cards) and a **"See the path →"** that hands off to Dream Explorer.
- A filter row: *"Show careers for → (a dream)"* so a "Work with Nature" student finds Geologist, Oceanographer, Wildlife Biologist.

### 6.3 Wireframe — Unknown Careers

```
CAREERS YOU MAY NOT KNOW EXIST
Filter: ( All )( Help )( Build )( Nature● )( Discover )...
┌───────────┐┌───────────┐┌───────────┐
│📊 Actuary ││🌊 Oceanogr.││🦅 Wildlife │
│Prices risk││Studies the ││ Biologist  │
│for insurers││ open ocean ││ protects…  │
│[Govt: LIC]││[NIOT,INCOIS]│[WII, forest]│
│   tap ↓   ││   tap ↓    ││   tap ↓    │
└───────────┘└───────────┘└───────────┘
        ↓ (tap Oceanographer)
┌──────────────────────────────────────────────┐
│ 🌊 Oceanographer                               │
│ WHAT  Studies currents, marine life, climate. │
│ WHY   India has 7,500 km coastline + blue econ│
│ GOVT  NIOT, INCOIS, NCPOR, ICMAM, Navy hydro. │
│ COURSE B.Sc Marine Sci → M.Sc Oceanography     │
│ WHERE Cochin Univ (CUSAT), Annamalai, Goa Univ│
│ EXAM  CUET / state · then IIT/NIO for research │
│ [matches: 🌿 Work with Nature]  [See path →]  │
└──────────────────────────────────────────────┘
```

---

## 7. Opportunity Expansion — "Your opportunities are bigger than your district"

**Goal:** break the "I only know colleges near me" ceiling. Surfaced proactively whenever a student picks a dream/interest.

### 7.1 The three-ring ladder

For any chosen interest, render three concentric tiers — **Local → State → India** — so the student literally sees the jump in scale.

```
🔬 You're interested in SCIENCE. Here's what's open to you:

◉ NEAR YOU (your district)
   Govt Arts & Science College · your-district
◉ TAMIL NADU
   Anna University · University of Madras · Govt Arts Colleges
◉ ALL OF INDIA  ← most students never see this row
   IISER · NISER · IIST · ISI · CMI · Central Universities
   "Same merit. Same affordable fees. Far bigger ceiling."
```

### 7.2 Mechanics

- Powered by the existing `COLLEGES_*` files (district → state) + a curated **national** list per stream (IISER/NISER/IIST/ISI/CMI etc. already in scope).
- The India ring carries the punchline copy: these are **government / merit-only**, so "bigger" doesn't mean "more expensive."
- "Won't leave state" students still see the India ring, greyed, with: *"You said you'd prefer to stay — but here's what staying costs you. Worth a look."* Gentle, not pushy. This is the exposure mission in one interaction.

### 7.3 Wireframe

```
┌──────────────────────────────────────────────┐
│  Bigger than your district →  🔬 Science       │
│  ┌────────────────────────────────────────┐   │
│  │ ◉ NEAR YOU                              │   │
│  │   Govt Arts & Science College           │   │
│  ├────────────────────────────────────────┤   │
│  │ ◉ TAMIL NADU                            │   │
│  │   Anna Univ · Madras Univ · Govt Arts   │   │
│  ├────────────────────────────────────────┤   │
│  │ ◉ ALL INDIA  (the ceiling-lifter)       │   │
│  │   IISER NISER IIST ISI CMI Central Univ │   │
│  │   "Same merit, same fees, bigger reach" │   │
│  └────────────────────────────────────────┘   │
└──────────────────────────────────────────────┘
```

---

## 8. Decision Framework (Feature 5) — rational comparison

**Goal:** let a student weigh 2–3 paths on what actually matters, not just salary.

### 8.1 The seven axes (your list), scored 1–5 or Low/Med/High

Institution Strength · Affordability · Future Flexibility · Government Opportunities · Scholarship Support · Risk Level (inverted — lower is better) · Backup Options.

### 8.2 Presentation — comparison scorecard

Not a single "winner." A scorecard that exposes trade-offs so the student decides with eyes open.

```
COMPARE PATHS                Govt MBBS  Pvt MBBS  Govt Nursing
Institution strength          ●●●●●     ●●●○○     ●●●●○
Affordability                 ●●●●●     ●○○○○     ●●●●●
Future flexibility            ●●●●○     ●●●●○     ●●●○○
Govt opportunities            ●●●●●     ●●●●●     ●●●●●
Scholarship support           ●●●●○     ●●○○○     ●●●●●
Risk (lower = safer)          ●●○○○     ●●●●○     ●●●●●
Backup options                ●●●○○     ●●●○○     ●●●●○
─────────────────────────────────────────────────────────
Vazhi's read: Govt MBBS is the prize but high-risk on one
exam. Govt Nursing is the safest high-ROI bet. Pvt MBBS
buys certainty with debt — weakest on affordability.
```

The bottom "Vazhi's read" line is the counsellor's voice — interpreting the table, not deciding for them.

---

## 9. Recommended dream hierarchy (Feature 7)

**Recommendation: the top-level cards should be MOTIVATIONS, not careers, not courses.** Reasoning (your own insight, now made structural):

> Courses change. Job markets change. Interests drift. **Motivations are the most stable layer** — anchor the entry point there.

### 9.1 The model — motivation is the root, everything else hangs off it

```
MOTIVATION   (stable — the homepage entry card)
   └─ Career Cluster   (a handful of roles)
        └─ Path         (Primary / Alternative / Backup)
             └─ Institution   (govt / merit-only)
                  └─ Exam + Scholarship + Job
```

So the cards are **motivations**, and Career Clusters are the *first reveal* — not the entry point. This fixes a subtle inconsistency in the current set (some cards read as motivations — "Help People" — others drift toward clusters).

### 9.2 Recommended final 9 cards (motivation-phrased, stable)

| Card | Motivation it names | Sample clusters underneath |
|------|---------------------|----------------------------|
| 🩺 Helping People | care, service to individuals | Doctor, Nurse, Physio, Public Health |
| 🛠️ Building Things | making, engineering | Engineer, Architect, Roboticist |
| 🔒 Financial Security | stability, earning | Actuary, Banker, CA, Data roles |
| 🌍 Making an Impact | changing systems | Policy, Development, Social entrepreneurship |
| 🌿 Working with Nature | environment, living world | Agri scientist, Geologist, Wildlife biologist |
| 🔬 Discovering Knowledge | research, understanding | Scientist, Statistician, Researcher |
| 🎨 Creating & Designing | expression, design | Designer, Architect, Media, Animation (govt: NID/IITs) |
| 🏛️ Serving Society | duty, public institutions | Civil services, Law, Defence, Teaching |
| 🧭 Not Sure Yet | exploration | → routes into Career GPS + Unknown Careers |

Two deliberate changes from the current set:
- **"Earn Well" → "Financial Security"** and **add "Making an Impact"** — both are pure motivations (the most stable framing) and directly echo your software-engineer example (a student keeps wanting *security* and *impact* even after dropping the SE dream).
- **"Not Sure Yet"** becomes the on-ramp to Career GPS + Unknown Careers — the undecided student is the one who needs the tools most, so that card should *route to tools*, not apologise.

---

## 10. Complete student journeys

Each journey shows the **entry → tools used → concrete exit action**. This is how we prove Vazhi behaves like a counsellor for *different* people, not one persona.

### J1 · Class 10 student (exploring early)
Entry: "Not Sure Yet" → **Unknown Careers** (broadens horizon) → **Dream Explorer** on 2–3 motivations → **Opportunity Map** (sees India-wide ceiling).
Exit: a saved shortlist of 3 motivations + "subjects to keep open in Class 11" note. *No pressure to decide — the win is awareness.*

### J2 · Class 12 student (deciding now)
Entry: picks a motivation → **Career GPS** (full profile) → Strongest Fit / Stretch / Expand → **Decision Framework** comparing top 2 → **Action Plan** with NEET/JEE/CUET dates.
Exit: dated action plan + 5 saved govt colleges + 3 scholarship applications queued.

### J3 · Student who missed NEET
Entry: lands on "Help People" or arrives anxious → **Dream Explorer** immediately surfaces **Alternative + Backup** tiers (Nursing, Allied Health, Life Sciences, Public Health) → **Decision Framework** shows Govt Nursing as the safest high-ROI bet → **Opportunity Map** for nursing/allied nationally.
Exit: "the dream isn't over" — a re-anchored plan around merit-counselling routes. *This journey is Vazhi's emotional core: the One-Dream-Many-Paths promise paying off exactly when it matters.*

### J4 · Student who missed JEE
Entry: "Build Things" → Explorer surfaces Alt/Backup: state govt engineering (TNEA), lateral entry via govt polytechnic diploma, B.Sc + research, IISER/IIST routes via different exams → **Opportunity Map** (NITs/IIITs via JEE Main still open; state colleges; central universities).
Exit: plan around TNEA + a diploma→B.E. backup; no lost year framed as a dead end.

### J5 · Parent evaluating options
Entry: **For Parents** section → **Decision Framework** (affordability + risk + backup columns speak directly to parent concerns) → **Affordability** fee-bars → **Opportunity Map** (govt = bigger ceiling, not bigger cost).
Exit: a shareable comparison + plan they trust enough to support. *Parent leaves thinking "practical and trustworthy."*

### Journey coverage matrix

| Journey | Dream Explorer | Career GPS | Decision Fwk | Opportunity Map | Unknown Careers | Action Plan |
|---------|:---:|:---:|:---:|:---:|:---:|:---:|
| J1 Class 10 | ✓ | – | – | ✓ | ✓ | light |
| J2 Class 12 | ✓ | ✓ | ✓ | – | – | ✓ |
| J3 Missed NEET | ✓ | ✓ | ✓ | ✓ | – | ✓ |
| J4 Missed JEE | ✓ | ✓ | ✓ | ✓ | – | ✓ |
| J5 Parent | ✓ | – | ✓ | ✓ | – | ✓ |

Every tool earns its place across multiple journeys. None is decorative.

---

## 11. Homepage information architecture (where features land)

No new manifesto sections. The order optimises for *doing*:

```
1. Hero — "What do you want from your future?" + motivation cards   [keep]
     ↳ tapping a card opens Dream Explorer (stepped reveal)         [upgrade]
2. Career GPS entry — "Not sure where you stand? Get your options"  [NEW, high]
     (a single prominent band, not a section of prose)
3. Why Vazhi is different — course-first vs dream-first             [keep, condense]
4. Careers you may not know exist                                   [NEW · build first]
5. Bigger than your district (Opportunity Map)                      [NEW]
6. Why institutions matter / Affordability                         [keep]
7. For Parents                                                      [keep]
8. Decision Framework (compare)                                     [NEW, reachable from Explorer too]
9. CTA — Find My Paths → Career GPS                                 [keep, re-point]
```

Career GPS and Unknown Careers move *up*, near the fold, because they are the "this helps me decide" moments. The philosophy stays but stops being the first thing after the cards.

---

## 12. Build order & reuse

| Priority | Feature | New file(s) | Reuses |
|----------|---------|-------------|--------|
| **1** | Unknown Careers | `data/unknown-careers.js` | dream cards, `bc` colour tokens |
| 2 | Dream Explorer upgrade | (logic only) | existing `JOURNEY` model, scholarships data |
| 3 | Career GPS | `data/gps-rules.js` | colleges-*, scholarships, announcements, VazhiAuth |
| 4 | Opportunity Map | curated national list | `COLLEGES_*` |
| 5 | Decision Framework | scoring config | path data from Explorer |

Everything respects the **data/ vs js/ split** and the **govt/merit-only scope rule**. Nothing here introduces a private college or a paywall.

---

## 13. What this is NOT

- Not a college directory with search filters bolted on. The directory tabs already exist; these features *interpret* that data for a decision.
- Not more philosophy. Every screen above ends in an action: tap, compare, save, plan.
- Not a verdict machine. Career GPS gives *options with reasoning*, never "become X."

The throughline: **Vazhi should feel like sitting across from a counsellor who knows the system, respects your constraints, and refuses to let you pin your future on one exam.**
