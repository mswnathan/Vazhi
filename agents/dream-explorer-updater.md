# Agent: Dream Explorer Updater

**Purpose:** Add or edit a **dream** in the dreams-first homepage (`index.html`) — the guidance layer that sits in front of the After-Class-12 database (`explore.html`).

**Read first:** `dreams-design-spec-v2.md` (§11) and `dreams-CHANGELOG.md` for the *why* behind every rule below. This agent is the *how*.

---

## Where the data lives

The Dream Explorer data currently lives **inline in `index.html`** as two JS objects:
- `DREAMDATA` — one entry per dream (cluster, lenses, unknown careers, paths)
- `DETAIL` — per-path deep content (institutions, story, scholarships, jobs, plan), keyed `DETAIL[dreamId][pathId]`

> **Recommended refactor (not yet done):** extract `DREAMDATA`/`DETAIL` into `data/dreams.js` to match the project's strict data/js split, and load it via `<script src>` before the inline render logic. Until then, edit the objects inside `index.html` and **do not touch the render functions** (`openExplorer`, `selectPath`, `showPaths`, `openUC`, etc.) — they are logic, not content.

The render UI is shared, so **adding a dream = adding a data object.** Set `live:true` on the dream card in the `DREAMS[]` array to surface it (others show "SOON").

---

## The non-negotiable design guardrails

These were settled over many review rounds. Do not relitigate them in a data edit:

1. **Top-level = a MOTIVATION, not a career or course.** "Helping People," not "Doctor." Motivations are stable; careers change. Test each label: *would a confused 15-year-old in a Tamil-medium school recognise themselves in it?*
2. **One dream → many PATHS, not many careers.** The framing the student must leave with is "many ways to reach this," not "many jobs exist."
3. **Dual-label every lesser-known career.** Plain label leads, technical title rides along: `label:'Disease Detective', n:'Epidemiologist'`. Plain = 3-second comprehension; technical = credibility. (Render auto-suppresses the technical line when `label === n`.)
4. **Every path card carries a "Best if you want…" fit line** (`fit:`) — the single sentence that differentiates paths before the student opens one.
5. **Institution = an ANCHOR, not a list.** One recognisable name on the card (`anchor:'AIIMS, JIPMER'`). In `DETAIL`, each institution may carry a `why:[]` of quality-signal chips (faculty / reputation / research / fees) — this teaches institutional quality, a core differentiator.
6. **Risk is NEVER shown without a backup.** Use neutral language — `riskLbl:'Main route: NEET'`, never "One exam" (awareness, not fear). A red badge means "high prize — pair it with a backup," so the primary path must set `backups:N` and a `stressLabel` ("What if I don't clear NEET?").
7. **Career Story = 5 concrete beats, no fluff** (`story{why,day,fact,gov,enter}`): why people choose it (a vivid image, not "it's rewarding"), a real day (specific tasks), ONE surprising true fact, named government employers, and the entry step. Every story ends on a door.
8. **Affordability contrast** (`feeContrast{here,priv,note}`) where the gap is dramatic (e.g. govt vs private MBBS). The contrast itself is the guidance.
9. **Scope rule (STRICTLY ENFORCED):** government, government-aided, and merit-access institutions only (per CLAUDE.md). Every unknown-career `gov:` and every institution must name a real govt/PSU/research body (GSI, IMD, NIOT, WII, ICAR, AIIMS, AERB…). Never a private self-financing college.
10. **Graceful fallback:** you do NOT need full `DETAIL` for every path. Paths without a `DETAIL` entry fall back to a complete generic experience automatically. Hand-author `DETAIL` for the primary + the most important alternative; let the rest fall back.

---

## Schema — a dream (`DREAMDATA[id]`)

```js
help:{
  ico:'🩺', dream:'Helping People',           // motivation label
  anchor:'Healthcare · Education · Public Service · Community',
  lenses:[{n:'Healthcare',ready:true},{n:'Education',ready:false}, …], // sub-clusters; ready:false → "soon"
  confidence:['I enjoy biology & how the body works', …],  // DISCRIMINATING resonance items (not all-agreeable)
  related:[{id:'nature',label:'🌿 Working with Nature'}, …], // shown if the student's self-check is low-fit
  unknownHeading:'Beyond doctor & nurse',     // the contrast headline for the unknown-careers strip
  clusterLabel:'Roles inside the Healthcare lens',
  cluster:[{e:'🩺',n:'Doctor'}, …],            // known careers (chips)
  unknown:[ {                                   // lesser-known careers (tap → snapshot bottom-sheet)
    ico:'🔍', n:'Epidemiologist', label:'Disease Detective',
    short:'Tracks disease outbreaks.',          // 4-word card line
    one:'The disease detective — tracks outbreaks…', // snapshot one-liner
    why:['Biology','Public impact','Research'], pathline:'B.Sc Life Sciences → MPH → Epidemiology',
    gov:'ICMR · NCDC', risk:'green', cost:'₹ low (govt)',
    related:['Public Health','Life Sciences'], path:'ph'  // path = id to hand off to
  }, … ],
  paths:{
    primary:[ { id:'mbbs', name:'MBBS', deg:'5.5 yr · Doctor',
                fit:'Best if you want to diagnose & lead patient care',
                anchor:'AIIMS, JIPMER', fee:'~free–₹2L (govt)',
                risk:'red', riskLbl:'Main route: NEET',
                backups:5, stressLabel:"What if I don't clear NEET?", lead:true } ],
    alt:[ {id:'nursing', …, risk:'green', riskLbl:'Several routes'}, … ],
    backup:[ … ],
  },
}
```
`risk` ∈ `red | amber | green` → renders 🔴/🟡/🟢. Only the **primary** path needs `backups` + `stressLabel` + `lead:true`.

## Schema — per-path detail (`DETAIL[dreamId][pathId]`)

```js
mbbs:{
  institutions:[ {nm:'AIIMS, New Delhi', tier:'Central · ~₹1,600/yr',
                  why:['India\'s top faculty','National reputation','Research','Near-free']} , … ],
  feeContrast:{here:'₹50k–2L total', priv:'₹50L–1.2Cr', note:'Same degree, same licence…'}, // optional
  ladder:{near:'Govt Medical College in your district', state:'MMC · Stanley · …', india:'AIIMS · JIPMER · …'},
  story:{why:'…', day:'…', fact:'…', gov:'…', enter:'…'},
  scholarships:['Post-Matric (SC/ST/OBC)', …],
  jobs:['Govt PHC Medical Officer', …],
  plan:[ {when:'Now–Jul', txt:'Register for NEET-UG', done:false}, … ],
}
```

---

## Connecting to the database (deep-links)

The homepage hands off to `explore.html` via URL hash, routed by `routeFromHash()` in `explore.html`:
`#courses · #exams · #colleges · #predictor · #scholarships · #find · #after-ug · #market`.
If you add a new research door, wire its button to `location.href='explore.html#<hash>'` and add the hash to `routeFromHash()`.

---

## ⚠️ Data-accuracy rule (the standing caveat)

**Risk badges (🔴/🟢) and fee figures must be VERIFIED, not guessed.** A 🟢 "several routes" on a path that actually has one gate is false reassurance — worse than no badge. Before a dream goes live publicly:
- confirm each path's real admission route (e.g. TN govt B.Sc Nursing is **state merit counselling, not NEET** — see `agents/` notes / CLAUDE.md);
- confirm fee ranges against official sources;
- keep an "indicative — verify on official sites" caveat visible.

---

## How to use this agent

> "You are the Vazhi Dream Explorer Updater. Read `agents/dream-explorer-updater.md` and `dreams-design-spec-v2.md §11`, then add the **Building Things** dream to `index.html` following every guardrail. Hand-author full DETAIL for the primary path + one alternative; let the rest fall back. Verify in the preview (no console errors) and report which risk/fee values still need real verification."

**Example tasks:**
- "Add the **Serving Society** dream (UPSC, State PSC, SSC, Banking, Railways, PSU) — maximise unknown govt careers."
- "Add the **Building Things** dream — engineering, with the missed-JEE backup routes (NIT, state govt, polytechnic + lateral entry, B.Sc → research)."
- "Add a 6th unknown career to Working with Nature."
- "Wire a new 'Internships' research door into the homepage and `routeFromHash()`."

**After editing:** load `index.html` in the preview, open the dream, walk cluster → snapshot → paths → a path detail; confirm no console errors; run `sh agents/check.sh`.
