# guides

Hub repo for [`guides.brandon-behring.dev`](https://guides.brandon-behring.dev) — interview-prep guides for data science, ML engineering, and AI engineering. Built with [`@brandon_m_behring/book-scaffold-astro`](https://github.com/brandon-behring/book-scaffold-astro) (`research-portfolio` preset, v3.5.0).

This repo serves the landing page, `/methodology`, and `/about`. **Per-guide content lives in sibling repos** and deploys to subroutes:

| Guide | Repo | URL |
|---|---|---|
| `experimentation` | `github.com/brandon-behring/guides-experimentation` | `guides.brandon-behring.dev/experimentation/` (Phase 1) |

Why split: per-guide self-contained repos (Architecture A, locked in design doc v0.2 §9) so each guide has its own companion Python package, capstone artifact, ADRs, and independent release cadence. See `/methodology` once live.

## Getting started

```bash
npm install
npm run dev    # http://localhost:4321
```

## Build + deploy

```bash
npm run validate    # pre-flight content checks
npm run build       # → dist/
```

Cloudflare Pages auto-deploys from `main` via dashboard config (no manual wrangler invocation required). See `wrangler.toml` for the connected-project metadata.

## Content

- `src/content/frontmatter/methodology.mdx` — design doc + Claude Code workflow disclosure + research dossier links + comparative critique cross-link
- `src/content/frontmatter/about.mdx` — AI collaboration disclosure + licenses + repo links

## Style guide

- `docs/style-guide-v0.0.md` — ported from `interview_prep_series/.claude/rules/` during Phase 0b
- `.claude/skills/` — Claude Code skills for hub-level authoring (style-guide-lint, methodology-update)

## License

- Content: CC BY 4.0 (see `LICENSE`)
- Scripts / code: MIT (see `LICENSE-SCRIPTS`)
