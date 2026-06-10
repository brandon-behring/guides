# guides — AI authoring guide

Hub repo for `guides.brandon-behring.dev`. Built with `@brandon_m_behring/book-scaffold-astro` v4.2.0 (`styles: [researchPortfolioStyle, guidesFamilyStyle]` composition; `routes.frontmatter: { prefix: '' }` mounts methodology + about at root).

## Where things live

- **Series roadmap v2 (read first if resuming)**: `docs/plans/active/2026-06-10_series_roadmap_v2.md` — canonical roadmap for the company-agnostic, interview-prep-led AI-native series; consolidates the 06-03 roadmap + 06-04 handoff + 06-08 audit (all now in `done/`). Guide #1 (Evaluation, 13 ch) complete + reviewed + public; guide #2 (llm-app-engineering) in progress — both in the sibling repo `~/guides-ai-engineering` (its `docs/RESUME.md` continues the build). Site launch gated on guide #2 completion. Demand framing: `docs/research/role_demand_and_interview_signals/`.
- **Active design doc (v0.4, canonical)**: `docs/design/2026-06-10_design_v0.4.md` — amends v0.3 (positioning → company-agnostic; architecture → series-scoped repos; build-validated chapter shape, 4-dim rubric spine, static-demo policy, independent-review gate). v0.3's §2 specs remain canonical where not amended.
- **Pedagogy playbook (author-facing digest)**: `docs/design/PEDAGOGY.md` — visual principles + four-layer authoring model + consolidated DECIDED/DEFERRED/OPEN decision log (distilled from an internal cross-pollination review, 2026-05-24; points to the design docs, not a new source of truth)
- **Research Workstream v2 (complete)**: `docs/plans/done/2026-05-22_research_workstream_v2.md` — all 11 phases done 2026-05-23.
- **Per-phase wrap-up docs** (friction logs): `docs/plans/done/*.md` (10 docs as of 2026-05-24)
- **Methodology page (v0.2, user-facing)**: `src/content/frontmatter/methodology.mdx`
- **Frontmatter pages** (this repo's primary content): `src/content/frontmatter/*.mdx` — methodology, about
- **Research dossiers (9 pedagogy)**: `docs/research/<topic>/` — 5 migrated v1-era (each has MIGRATION.md noting v2.2 upgrade deferred) + 4 new v2.2 strict-live
- **Shared scaffold style**: `shared/styles/guides-family.ts` — canonical `guidesFamilyStyle` (composes on top of researchPortfolioStyle)
- **Scripts**: `scripts/research_lint.py` — dossier integrity gate wrapping research_toolkit validators (CI: `.github/workflows/research-lint.yml`, pinned to toolkit **v2.4.0** — the v2.6.0 bump is blocked on display-vs-evidence repairs in the 4 depth-expanded dossiers; local full check via `--with-cache`)
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

- **book-scaffold-astro** (`brandon-behring/book-scaffold-astro`; hub on v4.2.0, guide repo on v4.14.2 — hub upgrade scheduled at site launch per roadmap v2 §5): [PACKAGE_DESIGN.md](https://github.com/brandon-behring/book-scaffold-astro/blob/main/package/PACKAGE_DESIGN.md), [MIGRATION-v3-to-v4.md](https://github.com/brandon-behring/book-scaffold-astro/blob/main/package/MIGRATION-v3-to-v4.md). File issues at https://github.com/brandon-behring/book-scaffold-astro/issues with label `consumer:guides`. As of 2026-06-10: 8 earlier `consumer:guides` issues closed; **#129/#130/#132 open**; #103 (demo kit) labeled; #15 (multibook) closed-deferred-post-v4.x.
- **research_toolkit** (`brandon-behring/research_toolkit`, v2.6.0): v2.2+ strict-live pipeline driving the 11 dossiers. All 6 `consumer:guides` issues closed. (The local PDF backfill script that worked around #11 was deleted 2026-06-10 after #11 shipped.)

## Durable policy

Any presentation / component / schema / build-tooling friction surfaces upstream as an issue with `consumer:guides` label — **not** patched around locally. See `docs/plans/done/2026-05-22_phase_a0_scaffold_preflight_wrap_up.md` for the policy rationale + history.
