---
name: style-guide-lint
description: "Lint MDX files against `docs/style-guide-v0.0.md` rules — margin-note categories, evidence-tier compliance, citation proximity, LOS traceability. Stub: Phase 1 deliverable."
---

# style-guide-lint

**Status**: Stub. Phase 1 deliverable. Activates after pilot chapters surface concrete linting needs.

## Purpose

Lint MDX content under `src/content/` against the rules in `docs/style-guide-v0.0.md`. Catches issues before commit so authoring stays within the style-guide envelope.

## Out of scope for Phase 0b

The skill is a placeholder. Phase 1 fills it in once pilot chapters reveal which rules want automation vs which stay human-judged.

## Phase 1 scope (planned)

| Check | Severity |
|---|---|
| MarginNote category is one of the 9 standard categories | error |
| MarginNote text under 25 words | warning |
| Tier-1 claim (specific %, named author/year, company practice) within 10 lines of citation | error |
| LOS `id` follows `PREFIX-CHAPTER.NUMBER` pattern | error |
| `mode` × `target` × `ordering` triple matches v0.2 §17.1 coherent-combinations table | warning |
| Cross-ref anchor exists (semantic kebab-case, not chapter-number) | error |

## Implementation sketch

Walk MDX files under `src/content/`, parse JSX → AST, apply per-rule visitor. Output rule violations as a structured report. Run via Claude Code skill from `~/guides/.claude/skills/style-guide-lint.md`.

Until Phase 1 fills this in, manual review against `docs/style-guide-v0.0.md` is the bar.
