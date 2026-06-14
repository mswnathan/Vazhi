# Dream Explorer — Changelog

A durable, versioned record of the dreams-first prototype (`dreams.html`) and its companion design docs. Newest first.

---

## v1.1 — Pre-test comprehension upgrades (2026-06-13)

Two changes made *to improve the test*, not extend the product:
- **Dual-label career titles** — unknown careers now lead with a plain-language label and carry the technical title as a muted secondary: "Disease Detective · *Epidemiologist*", "Cancer-Radiation Scientist · *Medical Physicist*", "Earth Scientist · *Geologist*". Removes ambiguity in comprehension testing (was it the concept or the word that failed?). Secondary title is suppressed when label == technical (e.g. Soil Scientist).
- **Affordability contrast surfaced in Parent Mode** — the ₹50k–2L (govt) vs ₹50L–1.2Cr (private) MBBS comparison is now the hero of parent mode, not buried in path detail. Parents can now actually *see* the lead proposition (so testing measures the proposition, not navigation).

Test kit (`dreams-test-kit.md`) also gained: **Q4** (government-college belief-shift), a **"first thing clicked"** column, and **Gate 0** (test a cold first-timer on the homepage before any group).

---

## v1 — Dream-led exploration prototype (2026-06-13)

> **Vazhi v1 prototype: dream-led exploration with institution literacy, affordability framing, parent entry points, and actionable path planning.**

A testable prototype, not yet wired into the live site. Review copy only.

### What's in it
- **Three-audience homepage** — `🌟 Explore by dream` (default) · `🔍 I already know` (research launcher: search + 6 DB category tiles) · `👪 I'm a parent` (cost / scholarships / govt colleges / admissions). One panel at a time; the emotional hero stays above all modes. The database is never hidden from decided users.
- **Hero value proposition** — "Every dream has more than one path" + the WHY subline (affordable government & government-aided pathways).
- **Dream Explorer** (guidance layer), two live dreams — **Helping People** and **Working with Nature**:
  - Dream confidence self-check (tickable, counsellor-tone, redirects to related dreams on low fit)
  - Career cluster + lens row (sub-clusters) so a dream isn't implicitly one domain
  - **"Beyond doctor & nurse" unknown-careers** with tap-to-open snapshot bottom-sheet (what / why / path / govt employers / risk+cost / other paths / "see this path →")
  - Primary / Alternative / Backup path tiers — enriched cards with institution anchor, **"Best if you want…"** fit line, fee tag, and risk badge ("Main route: NEET" / "Several routes")
  - **"What if I don't clear NEET?"** banner surfaced after the primary path
  - Path detail: **"Why this institution?"** quality-signal chips, govt-vs-private fee contrast, local→state→India opportunity ladder, 5-beat career story, "other paths to the same dream," scholarships, dated action plan
- **Scope copy** — "government, aided & merit-based" (corrected from "merit-only", which excluded the real aided/merit-access scope).

### Companion design docs (in repo root)
- `dreams-design-spec.md` — v1 feature spec (Career GPS, Unknown Careers, Opportunity Map, Decision Framework, journeys, dream hierarchy)
- `dreams-design-spec-v2.md` — refinement: merge tools into Explorer, GPS downstream, "Other Paths" as platform pattern, emotional layer, + §11 (motivation entry, institution-early, risk language)
- `dreams-integration-architecture.md` — how Dream Explorer (guidance) and the existing After-Class-12 database (research) connect: pre-filtered deep-links, "back to your journey" chip, predictor as the key hinge

### Known gaps / deferred to real user-testing
- **English-only** — the make-or-break for the rural, first-generation, Tamil-medium target user. Bilingual EN/Tamil exists elsewhere (psychometric, wizard) but not here.
- **Risk badges & fee figures are illustrative** — each must be verified against real admission rules before launch (a 🟢 on a single-gate path = false reassurance).
- **Parent mode content is stubbed** — the cost/scholarship cards show deep-link captions, not live content.
- **Career-before-paths order** and **opportunity-ladder prominence** — to be decided by student behaviour, not pre-emptively reordered.
- **Synthetic-test finding:** the discovery layer is ~1.5 mobile screens with a single forward CTA at the bottom. Watch scroll-depth to "Show me the paths" and the snapshot "See this path" click-rate — that transition is the discovery→decision risk.

### Next builds (after testing)
Serving Society dream · Career GPS · end-of-journey "your 3 paths" takeaway · institution-first ("Explore by institution") 4th mode.
