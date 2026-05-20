# guides — AI authoring guide

Hub repo for `guides.brandon-behring.dev`. Built with `@brandon_m_behring/book-scaffold-astro` (research-portfolio preset, v3.5.0).

## Where things live

- **Frontmatter pages** (this repo's primary content): `src/content/frontmatter/*.mdx` — methodology, about
- **Components, layouts, default routes**: `@brandon_m_behring/book-scaffold-astro/components/...`
- **Style customizations**: `src/styles/` (overrides package styles)
- **Style guide v0.0**: `docs/style-guide-v0.0.md`
- **Claude Code skills**: `.claude/skills/style-guide-lint.md`, `.claude/skills/methodology-update.md`

## What this hub does NOT contain

- Per-guide chapter MDX. That lives in sibling repos (`github.com/brandon-behring/guides-*`).
- Per-guide companion packages or capstones.

## Design docs (canonical references)

- v0.2 design doc: `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md`
- Roadmap: `~/interview_prep_series/docs/plans/active/2026-05-19_public_guides_repo_roadmap.md`
- Comparative critique: `~/interview_prep_series/docs/plans/active/2026-05-19_guides_pedagogy_alt_perspectives.md`

## Toolkit reference

[`book-scaffold-astro` PACKAGE_DESIGN.md](https://github.com/brandon-behring/book-scaffold-astro/blob/v3.0/PACKAGE_DESIGN.md) — single source of truth for the API. File issues at https://github.com/brandon-behring/book-scaffold-astro/issues with label `consumer:guides`.
