# Vazhi — Design Spec v2 (Refinement Layer)

> Companion to `dreams-design-spec.md`. Does **not** replace it. Where the two conflict, v2 wins.
> Direction approved. This pass does one thing: **collapse five tools into one experience + one optional refiner + one reusable pattern**, and add the missing emotional layer — so Vazhi feels like a counsellor, not a toolbox.

---

## The single idea that reorganises everything

Every observation you raised resolves to one sentence:

> **Vazhi is not five tools. It is one guided conversation that adapts — and one question it never stops asking: "If your first choice doesn't work out, what's next?"**

So the strategy is *subtraction*, not addition. Below, four of the five "features" stop being destinations and become **moments inside Dream Explorer**. Career GPS moves downstream. And the "next best option" idea graduates from a feature into Vazhi's **primary UX pattern**, present on every screen.

---

## 1. Critical review of the current spec

| What v1 got right (keep) | What v1 got wrong (this pass fixes) |
|--------------------------|-------------------------------------|
| Dream Explorer's Primary/Alt/Backup tiers | **Too many co-equal top-level tools.** v1 lists 5 features as 5 homepage sections → a wall of choices. Overwhelm is the opposite of counselling. |
| Career GPS's "options not verdicts" | **GPS placed at the top.** It interrogates a student before they know themselves. Wrong order. |
| Unknown Careers research depth | **Unknown Careers as a standalone section.** Nobody searches "unknown careers." It must arrive *contextually*. |
| Opportunity Map's local→state→India ladder | **Opportunity Map as a separate section.** It's an attribute of a path, not a place to visit. |
| Decision Framework's 7 axes | **Framework as a separate section.** Comparison is something you do *to paths you're already looking at*, not a standalone tab. |
| Affordability + Parent sections | **The "what if it fails" insight lived only in Dream Explorer.** It's the whole philosophy — it must be everywhere. |
| — | **No emotional layer.** All structure, no "why would I enjoy this life?" |

**Bottom line:** v1 designed a *suite*. v2 designs a *single counsellor* who pulls the right tool out at the right moment without naming it.

---

## 2. Features that should be MERGED (into Dream Explorer)

Three of the five stop being sections. They become **contextual reveals** triggered by where the student already is:

| v1 standalone feature | v2 — becomes a reveal inside Dream Explorer | Trigger |
|-----------------------|---------------------------------------------|---------|
| **Unknown Careers** | A *"You may not know these"* strip inside each dream's cluster, beside the known careers | When the cluster level renders |
| **Opportunity Map** | A *"Bigger than your district"* expander attached to each **path's institutions** | When a path's institutions show |
| **Decision Framework** | A *"⚖️ Compare"* action that appears once ≥2 paths are tapped/saved | When the student has 2+ candidates |

None of these needs its own homepage real estate. Each appears *because the student is already in a context where it's the obvious next thing* — which is exactly how a counsellor works.

---

## 3. Features that should remain STANDALONE

Only two, and one reusable component:

1. **Dream Explorer** — the primary experience. Everything else lives inside it.
2. **Career GPS** — stays a distinct tool, but **moves downstream** (see §7). It's the *refiner* a student reaches for *after* exploring, not the gate.
3. **"Other Paths To The Same Dream"** — not a feature, a **reusable component** that appears platform-wide (see §8).

So the product collapses from **5 tools → 1 experience + 1 optional refiner + 1 omnipresent pattern.** That is the simplification.

---

## 4. Recommended homepage flow

**Discovery before recommendation.** The homepage funnels into exploration, and only *offers* (never forces) Career GPS once the student has seen possibilities.

```
HOMEPAGE
  Hero — "What do you want from your future?"  + motivation cards
      ↓ tap a card
  DREAM EXPLORER  ← the main event; absorbs Unknown Careers,
      ↓            Opportunity Map, and Compare as contextual reveals
  (student explores 1–3 dreams freely, no profile required)
      ↓ only now, gently offered:
  "Want these narrowed to YOUR situation?  → Career GPS"
      ↓
  CAREER GPS (optional refiner) → Action Plan
```

Supporting sections (Why Vazhi is different, Affordability, **For Parents**) stay, but **below** the Explorer, condensed. The first thing a student *does* is explore, not fill a form.

Note for the anxious arrival (missed NEET/JEE): a small persistent entry — *"Already got your result? See your next-best options →"* — drops them straight into the relevant dream's Alternative/Backup tiers. Discovery for the undecided; direct answers for the urgent.

---

## 5. Revised Dream Explorer architecture

Dream Explorer is now the spine. It reveals progressively, and *each level can sprout one contextual tool*. The student never leaves; the tools come to them.

```
MOTIVATION  (e.g. 🌿 Work with Nature)
   │
   ├─▸ CAREER CLUSTER
   │     Known:  Agriculture · Veterinary · Forestry
   │     ┌─ "You may not know these" ────────────────┐   ← Unknown Careers, EMBEDDED
   │     │  Geologist · Oceanographer · Wildlife Biol.│
   │     │  Environmental Scientist                   │
   │     └────────────────────────────────────────────┘
   │
   ├─▸ PATHS  (Primary / Alternative / Backup)          ← the core "what if" moment
   │
   ├─▸ [tap a path] → INSTITUTIONS for that path
   │     ┌─ "Bigger than your district" ──────────────┐  ← Opportunity Map, EMBEDDED
   │     │  Near you → Your state → All India          │
   │     └────────────────────────────────────────────┘
   │
   ├─▸ CAREER STORY  (emotional layer — §9)             ← NEW, per career
   │     Why people choose it · A day in the life ·
   │     What makes it interesting · Govt openings ·
   │     How to enter
   │
   ├─▸ SCHOLARSHIPS + JOBS
   │
   └─▸ FOOTER (always): ⭐ Save · ⚖️ Compare (≥2) · 📋 Build plan · 🔁 Other paths
```

**Two structural rules:**
- Discovery (Unknown Careers) appears at the **cluster** level — when the student is forming the picture.
- Comparison appears only **after** ≥2 paths exist — when it's actually useful.

This is the whole simplification: one screen, context-aware, never a menu of five tools.

---

## 6. Role of Unknown Careers inside the ecosystem

**Decision: mostly embedded, thin standalone shell retained.**

| Part | Where it lives | Why |
|------|----------------|-----|
| The *discovery moment* ("you may not know these") | **Embedded** in each dream's cluster | This is how students actually encounter it — through an interest they already hold |
| The *career detail* (what they do, govt openings, how to enter) | **Shared** — same card whether reached via a dream or directly | One data source, two entry points |
| A *browsable index* of all lesser-known careers | **Thin standalone page**, low-priority, linked from footer/Glossary | Serves the rare curious browser + SEO, but is **not** a homepage section |

So the **data** (`data/unknown-careers.js`) stays as planned, but its **primary surface** is inside Dream Explorer. The standalone page is a backwater, not a headline. This directly answers your Observation 1: discovery feels natural because it's attached to a motivation the student arrived with.

---

## 7. Placement of Career GPS in the journey

**Move it downstream. Discovery → exposure → then GPS.** You're right that Class 10 / rural / first-gen students can't answer "your marks band, your budget, your mobility" before they know what's out there.

New role for GPS: it is the **"narrow this down for me"** step, offered *after* exploration, with two improvements:

1. **It pre-fills from exploration.** If the student lingered on Work-with-Nature paths, GPS opens with that dream already selected — fewer cold questions.
2. **It's skippable and reversible.** Never a gate. A student can explore forever without it; a student in a hurry can jump to it from the persistent "see my options" entry.

Placement summary:
- **Homepage top:** Dream Explorer (discovery).
- **After 1–3 dreams explored:** gentle GPS offer ("want these ranked for *your* situation?").
- **For result-day arrivals:** GPS reachable directly, because they *do* know their marks now.

So GPS isn't demoted — it's *repositioned* to fire when the student finally has the self-knowledge to use it well.

---

## 8. "Other Paths To The Same Dream" — the reusable component

**This becomes one of Vazhi's primary UX patterns** — arguably *the* signature pattern. It is the philosophy, rendered as a component, dropped onto **every** path/course/exam/career surface across the whole platform (not just the homepage).

### 8.1 What it is
A small, consistent block that appears on any "single path" view and answers the one question: *if this doesn't work out, what's next?*

```
┌─ 🔁 OTHER PATHS TO THE SAME DREAM ───────────────┐
│  If MBBS doesn't work out, you still reach        │
│  "helping people" through:                        │
│   • BDS            (NEET-UG, same exam)            │
│   • B.Sc Nursing   (state merit — no NEET in TN)   │
│   • Physiotherapy  (state counselling)            │
│   • Allied Health  (lab, imaging, optometry)      │
│   • Public Health  (CUET / state)                 │
│         [Compare these ⚖️]   [Explore →]          │
└──────────────────────────────────────────────────┘
```

### 8.2 Where it appears (platform-wide)
| Surface | "If X doesn't work out…" shows |
|---------|-------------------------------|
| Course page (MBBS) | BDS, Nursing, Physio, Public Health, Allied |
| Exam page (JEE) | NITs, state govt engineering, polytechnic + lateral entry, B.Sc + research |
| Exam page (NEET) | nursing merit route, allied health, life sciences, BDS |
| Govt-job page (UPSC) | State PSC, SSC, Banking, Railways, PSU routes |
| Career profile | adjacent careers serving the same motivation |
| Dream Explorer | the Primary/Alt/Backup tiers *are* this component, native |

### 8.3 Why it's powerful
It makes the **entire platform** repeat one reassuring message at exactly the moments students feel most anxious. It's cheap to render (just a mapping: anchor → same-motivation alternatives) and it's the thing no competitor does — because no competitor starts from the dream. It is Vazhi's emotional and strategic core in ~120px of UI.

### 8.4 Data model
One small map, reused everywhere:
```js
SAME_DREAM_PATHS = {
  'mbbs':  { dream:'help', alts:['bds','nursing','bpt','allied','public-health'] },
  'jee':   { dream:'build', alts:['nit','state-eng','poly-lateral','bsc-research'] },
  'upsc':  { dream:'serve', alts:['state-psc','ssc','banking','railways','psu'] },
  ...
}
```

---

## 9. Missing emotional / storytelling elements

The fix for Observation 4 is **concrete specificity, not motivation-poster fluff.** Emotion in Vazhi comes from *vivid, true detail*, never adjectives like "exciting" or "rewarding."

### 9.1 The "Career Story" block — five honest beats
Added to every career profile (and surfaced in Dream Explorer):

| Beat | What it contains | The anti-fluff rule |
|------|------------------|---------------------|
| **Why people choose this** | the real motivation, in a student's words | concrete: "you see a patient walk out fixed," not "it's fulfilling" |
| **A day in the life** | 3–4 actual activities, morning to evening | specific tasks, real tools/places |
| **What makes it interesting** | the genuinely surprising part | a fact, not a feeling — "an actuary's models decide a city's pension" |
| **Government opportunities** | named employers | GSI, IMD, NIOT, LIC, DRDO — already our scope |
| **How to enter** | the actual first step | exam → course → institution, in one line |

### 9.2 Tone guardrail (so it never feels motivational)
- **Show the day, don't sell the dream.** A timeline beats a slogan.
- **One surprising true fact** per career does more than a paragraph of encouragement.
- **No superlatives, no destiny language.** Vazhi is a calm counsellor, not a coach.
- Stories are *attached to paths*, so emotion always lands next to a concrete next step — feeling and action in the same view. This is how you "add emotion without fluff": every story ends in a door the student can open.

### 9.3 Example (Wildlife Biologist, embedded under Work-with-Nature)
```
WHY  "You spend weeks in a tiger reserve and your data
      changes how the forest is protected."
DAY  Camera-trap checks at dawn · log sightings ·
      analyse population data · brief the forest dept.
HUH? India's tiger census is the world's largest
      wildlife survey — biologists run it.
GOVT  Wildlife Institute of India, Zoological Survey,
      state forest depts, Project Tiger.
ENTER B.Sc Zoology/Forestry → M.Sc Wildlife → WII
```

---

## 10. Reduce complexity while increasing usefulness — the lens applied

**Observation 6 test:** every surviving feature must help answer *"if my first choice doesn't work out, what's next?"* Here's each, scored honestly:

| Feature | How it answers "what's next?" | Verdict |
|---------|-------------------------------|---------|
| **Dream Explorer** | The Primary/Alt/Backup tiers *are* the answer, made visual | ✅ Core — keep as spine |
| **"Other Paths" component** | Literally is the question, rendered everywhere | ✅ Promote to primary pattern |
| **Career GPS** | Output's *Stretch + Expand* buckets are "if Strongest Fit slips, here's the rest" | ✅ Keep, but move downstream (§7) |
| **Opportunity Map** | "if local options feel small, here's the bigger ladder" | ◐ Merge into Explorer as a reveal (§2) |
| **Unknown Careers** | "if the obvious path is blocked, here are adjacent ones you didn't know" | ◐ Merge into Explorer cluster (§2,§6) |
| **Decision Framework** | weighs the alternatives once you have them | ◐ Merge — appears only at ≥2 paths (§2) |

Nothing is deleted. **Three things stop being sections and become moments.** The student now perceives *one* coherent experience that happens to be smart about timing — which is precisely what "less overwhelming, more like a counsellor" means.

### Final product shape
```
BEFORE (v1):  5 co-equal tools, 9 homepage sections, GPS at the gate
AFTER  (v2):  1 experience (Dream Explorer)
              + 1 optional refiner (Career GPS, downstream)
              + 1 omnipresent pattern (Other Paths To The Same Dream)
              + emotion attached to every career, ending in a door
```

The goal was never more features. It's a product that, on every screen, quietly says: *you are not stuck — here is your next best move.*

---

## What I need from you before building

1. **Confirm the merge** — Unknown Careers, Opportunity Map, Decision Framework stop being homepage sections and become reveals inside Dream Explorer. (This is the big call.)
2. **Confirm GPS moves downstream** — discovery first, GPS offered after exploration.
3. **Confirm "Other Paths" as a platform-wide component** — I'll spec its exact placement on course/exam/career pages next.
4. Build order still stands with one change: since Unknown Careers is now *embedded*, the first build becomes **Dream Explorer with the embedded "you may not know these" strip + the Career Story block** for one dream (Work with Nature is the best showcase — it has the most surprising careers). That single build demonstrates 4 of the 6 ideas at once.

---

## §11 — Three pre-build decisions (all six features approved)

The three open questions converge: **answers to all three live on two enriched UI objects — the entry card and the path card.** Settling them now means the build has a single, consistent component to render everywhere.

### Q1 · Motivations or dreams as the entry point?

**Decision: motivation is the *root*, but each card is anchored by a recognizable concrete career — and there's a direct "I already know" escape hatch.** Neither pure option survives contact with the real audience.

- **Pure motivation** ("Making an Impact") is the most *stable* layer but risks being *abstract* — a Tamil-medium, first-gen 15-year-old may not recognize themselves in it.
- **Pure concrete dream** ("I want to be a doctor") is *recognizable* but *unstable and narrow* — it locks the student into one career, which is the exact failure Vazhi exists to prevent.

**The synthesis — a motivation card carrying a concrete anchor:**
```
┌─────────────────────────┐
│ 🩺  Helping People       │   ← motivation (stable root)
│ doctor · nurse · physio  │   ← concrete anchor (recognition)
└─────────────────────────┘
```
Plus an escape hatch above the grid for the student who already knows:
> *"Already have a goal in mind?  [ type it: e.g. doctor, IAS, engineer → ]"* — resolves "doctor" to **Helping People** and drops them in. Concrete-dream students are met where they are; the platform still re-frames them into the stable motivation.

**The test for every card label:** *would a confused 15-year-old in a Tamil-medium school recognize themselves in it?* Most pass (Helping People, Work with Nature, Earn Well). Flag for user-testing the abstract ones — **"Making an Impact"** especially; candidate plainer phrasings: "Change Things" / "Solve Big Problems." Recommendation: keep motivations as the root, but pressure-test the abstract labels in Tamil before launch.

### Q2 · How does institution strength become visible *earlier*?

**Decision: move the institution signal up from Level 4 (after tapping a path) onto the path card itself — as an *anchor*, not a directory.** Students under-focus on institution quality because we currently hide it until deep in the funnel. Brand recognition does the teaching for us.

On every path card, add one **institution-anchor line**: the single most recognizable institution + a tier hint.
```
MBBS · 5.5y · Doctor
🏛 incl. AIIMS, JIPMER          ← the name "AIIMS" conveys "strong + elite + affordable"
                                  before the student taps anything
```
- The recognizable name (**AIIMS, IIT, ISI, NID**) carries the strength message implicitly — no prose needed, no directory feel.
- Pair it with the **affordability tag** so Vazhi's whole thesis — *strong AND cheap* — lands in one glance (see Q3 card).
- A tiny ecosystem micro-hint (👨‍🏫🤝🎓) signals "there's faculty/peers/alumni depth here," expandable on tap into the full §4.2 institutions level.
- **Guardrail (your own rule):** this is a *quality signal*, not a list. One anchor name + one badge. The moment it becomes 12 college names on a card, it's a directory — don't.

### Q3 · How do we communicate path risk & single-exam dependency?

**Decision: every path card shows a "dependency" signal, and risk is *never shown alone* — it's always paired with the backup count.** This is the philosophy made literal, and the framing must be *empowering, not alarming*.

- A **dependency badge** on each path:
  - 🔴 **One exam decides** (MBBS → NEET only)
  - 🟡 **Limited routes**
  - 🟢 **Multiple routes** (TN nursing → merit counselling, no single gate)
- **Risk is always twinned with mitigation in the same view** — the backup count from the "Other Paths" component:
```
MBBS · 5.5y · Doctor
🏛 incl. AIIMS, JIPMER
💰 ~free–₹2L (govt)
🔴 Depends on one exam: NEET  →  but 5 other routes reach "Helping People"
```
- **The signature interaction — a "stress-test" button** that lets the student press their own worst case:
  > *"What if I don't clear NEET?"* → instantly expands the Alternative + Backup tiers.

  Making the anxiety question a literal, pressable button is the most counsellor-like move in the whole product: the student names their fear and is *immediately* shown the way through. Risk → reassurance in one tap.
- **Tone guardrail:** a red badge is never a "don't." It reads *"high prize, so pair it with a backup,"* not *"this is dangerous."* Risk you can plan around — never risk that dooms you. A naked red flag without an adjacent backup count is a bug.

### The convergence — one enriched path card

All three answers ship as a single component. This is what gets built first:
```
┌──────────────────────────────────────────┐
│ B.Sc Nursing · 4y · Nurse                  │
│ 🏛 incl. AIIMS CON, govt colleges   ← Q2   │
│ 💰 ~free–₹2L     🟢 Multiple routes ← Q3   │
└──────────────────────────────────────────┘
┌──────────────────────────────────────────┐
│ MBBS · 5.5y · Doctor                       │
│ 🏛 incl. AIIMS, JIPMER              ← Q2   │
│ 💰 ~free–₹2L     🔴 One exam: NEET  ← Q3   │
│ → 5 other routes to this dream  [stress▸]  │
└──────────────────────────────────────────┘
```
Entry card answers Q1; path card answers Q2 + Q3. Two components, three questions, one consistent visual language across the whole platform.
