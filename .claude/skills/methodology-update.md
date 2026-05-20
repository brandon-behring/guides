---
name: methodology-update
description: "Edit src/content/frontmatter/methodology.mdx — extension points: LLM-as-coach interface, scaffold-dogfooding retrospective, design-doc-version-changelog, open-questions. Use when /methodology page needs a v0.1+ update."
---

# methodology-update

Edits `src/content/frontmatter/methodology.mdx` to keep `/methodology` in sync with the design doc + scaffold-dogfooding learnings + Phase progression.

## When to invoke

| Trigger | Update |
|---|---|
| Design doc v0.2 → v0.3 lands | Add design-doc-version-changelog row |
| Scaffold v3.6.0+ lands | Update "Scaffold-dogfooding retrospective" section with issues filed + PRs landed |
| Phase 1 retrospective complete | Update "Status + commitment" + "Open questions" sections |
| LLM-as-coach interface designed | Move from "open questions" to "novel methodology (TBD)" → "Novel methodology" if pilot validates |
| New phase starts | Update phase status banner + table |

## Extension points (v0.1 → v1.0)

Per design doc v0.2 §10.11, the page should grow to include:

1. LLM-as-coach interface design + sample interactions (v1.1 deliverable)
2. Scaffold-dogfooding retrospective — filled in over time
3. Comparative-critique cross-reference deep dive (currently just linked)
4. Design-doc v0.2 vs v0.1 changelog (currently summarized)
5. Per-paradigm declaration usage (Dim 7) once UDL variant ships in v1.1

## Authoring discipline

- Maintain the originality-spectrum table (4 positions) as decisions land
- Keep AI-disclosure norms section in sync with current Anthropic / ACM / Nature / COPE positions
- Don't bloat the page above ~600 lines; spin off sub-pages if needed

## File path

`src/content/frontmatter/methodology.mdx`

## Cross-references

- Design doc: `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md`
- v0.0 plan: `~/.claude/plans/continue-with-working-on-gentle-cocke.md` (Phase 0b)
