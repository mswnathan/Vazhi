# Vazhi — Pipeline Philosophy

Why the tooling in `agents/` looks the way it does — so it isn't slowly rebuilt
into the complexity it was designed to avoid. **Principles, not rules.**

Vazhi is a static site maintained by one non-technical person. Every design choice
below follows from that reality. If that stops being true, revisit — but not before.

## Principles

1. **Scripts decide everything deterministic. AI decides only what needs human-like judgment.**
2. **One source of truth.** Record schemas live in `CLAUDE.md`; `validate.js` enforces them; nothing else restates them.
3. **Review the diff, not the database.** `changed-records.js` scopes every check to what actually changed.
4. **One gate.** `sh agents/check.sh` is the single PASS/FAIL. Its exit code is the contract.
5. **Don't automate hypothetical pain.** Build a tool when the problem has actually happened — *or* when the tool is so cheap that cost, not pain, justifies it (cost × blast-radius, not pain alone).
6. **Simplicity beats cleverness.** Fewer files, fewer moving parts, fewer things to remember.
7. **AI is for authoring and semantic accuracy** — writing records, judging facts against official sources. Never for work a script can already do.

## When to touch the pipeline (otherwise, leave `agents/` alone)

- A bug reached production.
- The same manual task has recurred ~3–5 times.
- A validation gap caused real rework.
- A deployment failure slipped through the gate.

If none of these happened this month, the pipeline needs no changes. Spend the time
on content, career data, and student features — that produces more value than tooling.

## Deliberately rejected — do NOT re-propose without new evidence

- **Orchestrator / routing AI** — a diff already decides what to check; `check.sh` is ~30 lines of shell.
- **Event-driven pipeline** — nothing here reacts to external events; it's one person editing files.
- **Micro-agents / more doc-splitting** — we went 15 docs → 7 on purpose; splitting re-adds the drift.
- **`report.json` from `check.sh` (for now)** — nothing consumes it yet, and caching free, deterministic work invites stale-status bugs. Revisit only when a real consumer exists (CI, dashboard, status badge). The exit code is already the machine-readable contract.
- **Versioned `check.sh` copies (check-v1/v2/v3)** — git already versions it; `git log`/`git blame` answer "what did PASS mean back then."

## One noted future candidate (intentionally unbuilt)

A **link/asset integrity checker** — every `<script src>` / `<img src>` / internal
`href` and anchor resolves to a real file or id. It's the one tool worth adding the
moment it's cheap to write, or the first time a broken link ships — whichever comes
first. Until then, unbuilt on purpose.

---
*The durable takeaway isn't the scripts added or the agents removed. It's the mindset:
deterministic code wherever possible, AI only where reasoning adds value, automation
only after real friction.*
