# guides — AI authoring guide

Hub repo for `guides.brandon-behring.dev`. Built with `@brandon_m_behring/book-scaffold-astro` v4.2.0 (`styles: [researchPortfolioStyle, guidesFamilyStyle]` composition; `routes.frontmatter: { prefix: '' }` mounts methodology + about at root).

## Where things live

- **Active session handoff** (read first if resuming): `docs/plans/active/2026-05-24_session_handoff.md`
- **Active design doc (v0.3, canonical)**: `docs/design/2026-05-23_design_v0.3.md` — first design doc native to this repo; supersedes v0.2
- **claude-books cross-pollination memo (feeds v0.4)**: `docs/design/2026-05-24_claude_books_learnings.md` — ranked P1–P4 adoptions from the sibling `claude-books` repo (research-lint CI, pedagogy playbook, multi-paradigm PoC, competency coverage)
- **Pedagogy playbook (author-facing digest)**: `docs/design/PEDAGOGY.md` — visual principles + four-layer authoring model + consolidated DECIDED/DEFERRED/OPEN decision log (P2 of the memo above; points to design v0.3, not a new source of truth)
- **Active workstream plan**: `docs/plans/active/2026-05-22_research_workstream_v2.md` — Research Workstream v2 (all 11 phases complete)
- **Per-phase wrap-up docs** (friction logs): `docs/plans/done/*.md` (10 docs as of 2026-05-24)
- **Methodology page (v0.2, user-facing)**: `src/content/frontmatter/methodology.mdx`
- **Frontmatter pages** (this repo's primary content): `src/content/frontmatter/*.mdx` — methodology, about
- **Research dossiers (9 pedagogy)**: `docs/research/<topic>/` — 5 migrated v1-era (each has MIGRATION.md noting v2.2 upgrade deferred) + 4 new v2.2 strict-live
- **Shared scaffold style**: `shared/styles/guides-family.ts` — canonical `guidesFamilyStyle` (composes on top of researchPortfolioStyle)
- **Scripts**: `scripts/backfill_pdf_cache_text.py` — consumer-side workaround for research_toolkit#11 (deletable once #11 ships); `scripts/research_lint.py` — dossier integrity gate wrapping research_toolkit validators (CI: `.github/workflows/research-lint.yml`, pinned to toolkit v2.4.0; local full check via `--with-cache`)
- **Components, layouts, default routes**: `@brandon_m_behring/book-scaffold-astro/{components,layouts}/...`
- **Style customizations**: `src/styles/` (overrides package styles)
- **Style guide v0.0**: `docs/style-guide-v0.0.md`
- **Claude Code skills**: `.claude/skills/style-guide-lint.md`, `.claude/skills/methodology-update.md`

## What this hub does NOT contain

- Per-guide chapter MDX. That lives in sibling repos (`github.com/brandon-behring/guides-*`).
- Per-guide companion packages or capstones.
- Per-guide content dossiers (e.g., `experimentation_foundations` lives in `~/guides-experimentation/docs/research/`).

## Historical lineage (frozen reference, not canonical)

These design-doc-lineage references live in `~/interview_prep_series/docs/plans/active/`:
- v0.1 design doc (`2026-05-19_guides_design_rethink.md`)
- v0.2 design doc (`2026-05-19_guides_design_rethink_v0.2.md`) — superseded by v0.3 in this repo
- Comparative pedagogy critique (`2026-05-19_guides_pedagogy_alt_perspectives.md`)
- Public-guides-repo roadmap (`2026-05-19_public_guides_repo_roadmap.md`)
- Phase 0a + Phase 0b research handoff (`2026-05-19_research_phase_handoff.md`)
- Phase 0b wrap-up (`2026-05-20_phase_0b_wrap_up.md`)

These docs have local-only erratum + supersession notes added 2026-05-23 / 2026-05-24 that are NOT committed in interview_prep_series git (substantial unrelated WIP in that repo; user intentionally untouched). They live on local disk only.

## Toolkit references

- **book-scaffold-astro** (`brandon-behring/book-scaffold-astro`, v4.2.0): [PACKAGE_DESIGN.md](https://github.com/brandon-behring/book-scaffold-astro/blob/main/package/PACKAGE_DESIGN.md), [MIGRATION-v3-to-v4.md](https://github.com/brandon-behring/book-scaffold-astro/blob/main/package/MIGRATION-v3-to-v4.md). File issues at https://github.com/brandon-behring/book-scaffold-astro/issues with label `consumer:guides`. As of 2026-05-24, 8 of 8 our filed `consumer:guides` issues closed (a 9th docs-only filing is in progress this session).
- **research_toolkit** (`brandon-behring/research_toolkit`, v2.3.0-candidate): v2.2+ strict-live pipeline driving the 11 dossiers. 4 `consumer:guides` issues filed this session; 2 closed (#9, #12), 2 open (#10, #11). My PDF backfill script (`scripts/backfill_pdf_cache_text.py`) is the consumer-side workaround for #11.

## Durable policy

Any presentation / component / schema / build-tooling friction surfaces upstream as an issue with `consumer:guides` label — **not** patched around locally. See `docs/plans/done/2026-05-22_phase_a0_scaffold_preflight_wrap_up.md` for the policy rationale + history.
