#!/bin/sh
# Vazhi full data health check
# Run from project root: sh agents/check.sh

# ── Git safety rail (non-blocking) ─────────────────────────────────────────
# If git is set up, warn when there are uncommitted changes so the user knows
# their starting point isn't a clean checkpoint. Skips silently if no .git/.
if [ -d .git ]; then
  CHANGES=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
  if [ "$CHANGES" != "0" ]; then
    printf '\033[33m'
    echo "⚠  Uncommitted changes detected ($CHANGES file(s))."
    echo "   Consider snapshotting your CURRENT state before bulk edits:"
    echo "     git add -A && git commit -m \"before <what you're about to do>\""
    printf '\033[0m\n'
  fi
fi

# ── Schema validation + behavioral tests ───────────────────────────────────
node agents/validate.js && node agents/functional-test.js || exit 1

# ── Career keyword coverage audit ──────────────────────────────────────────
echo ""
node agents/career-audit.js || echo "\033[33m⚠  Fix gaps above or add terms to the 'game developer / blockchain' skip list in agents/career-audit.js\033[0m"

# ── Link authority + date consistency (advisory, diff-scoped) ──────────────
# These check only records changed vs what's live, so they're cheap. They warn
# rather than block — 🟡 findings (corporate .com links, passed deadlines) often
# need a human call, not a hard stop. Run with --all before a release.
echo ""
node agents/link-authority.js   || echo "\033[33m⚠  Review flagged links above (or add verified hosts to ALLOWLIST in agents/link-authority.js)\033[0m"
echo ""
node agents/date-consistency.js || echo "\033[33m⚠  Fix broken/future dates above; move passed announcements to archive/announcements-archive.js\033[0m"

# ── Post-pass nudge ────────────────────────────────────────────────────────
if [ -d .git ]; then
  POST_CHANGES=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
  if [ "$POST_CHANGES" != "0" ]; then
    printf '\n\033[32m'
    echo "✓ All checks passed. Save this as a checkpoint:"
    echo "    git add -A && git commit -m \"<what you added>\""
    printf '\033[0m\n'
  fi
fi
