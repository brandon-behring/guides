# Phase A.0 (Scaffold pre-flight) wrap-up

**Date completed:** 2026-05-22
**Plan reference:** `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (Phase A.0)
**Session duration:** ~25 min wall-clock

## What completed (acceptance gates)

- [x] All 7 deferred dogfooding findings filed as issues on `brandon-behring/book-scaffold-astro` with label `consumer:guides`
- [x] `~/guides/` + `~/guides-experimentation/` both on `^3.5.1`; `npm run build` exits 0 in each
- [x] Skim of scaffold issues #15 (multibook) + #16 (AnkiCard) + #17 (TikZ→SVG) documented in `reference_book_scaffold_astro.md` memory

## Filed issues

| # | Title | Status | Notes |
|---|---|---|---|
| 46 | `create-book` hardcodes 3 of 5 profiles | **Closed (dup of #38, fixed v3.6.1)** | npm caret pulled v3.6.5 which had silent fix |
| 47 | `book-scaffold validate` ignores `.env` | **Closed (dup of #20, fixed v3.5.3)** | Same — silent fix in caret-pulled version |
| 48 | Component prop API docs missing | Open (documentation) | |
| 49 | `frontmatterCollection` prefix hardcoded to `/frontmatter/` | Open (enhancement) | |
| 50 | `create-book` wrangler.toml Workers-style | Open (enhancement) | |
| 51 | MDX math notation `\mathbb{E}{X}` breaks in research-portfolio | Open (kind:bug) | |
| 52 | `scripts/validate.mjs` uses Node 22 API on Node 20 templates | Open (kind:bug) | |

## Friction + surprises

### The version jump from caret resolution
`npm install @brandon_m_behring/book-scaffold-astro@^3.5.1` resolved to **v3.6.5** — not v3.5.1. Why: the scaffold maintainer (same person as user) shipped **8 releases on 2026-05-22 alone** (v3.5.2 → v3.6.5), driven by two other consumer pilots (`claude-books` + `double-ml-time-series`) surfacing issues in their bootstrap loops. The caret `^3.5.1` matches anything `>=3.5.1 <4.0.0`, so npm picked the latest 3.x.

**Consequence:** 2 of my 7 just-filed issues were already silently fixed:
- #46 (create-book profiles) — fixed in v3.6.1 as #38
- #47 (validate .env) — fixed in v3.5.3 as #20

**Lesson:** Always check the upstream CHANGELOG before filing issues against an old version. The scaffold is a HIGH-ACTIVITY project; check `~/book-scaffold-astro/CHANGELOG.md` (after `git pull`) right before filing.

**Mitigation captured in memory:** `reference_book_scaffold_astro.md` now flags "scaffold is highly active; treat installed-version as drift-prone; rebuild + test before each phase."

### Issue 52 (Node 22 glob) still applies in v3.6.5
The CHANGELOG entries for v3.5.2 → v3.6.5 do not address the `glob` from `node:fs/promises` import in `scripts/validate.mjs:29`. Verified by grepping the v3.6.5 installed source: still there at line 29. Workaround (bump consumer CI to Node 22) remains in place. Issue #52 is the right finding to keep open.

### GitHub Actions billing-block detour
Phase 0b.push hit a private-repo Actions billing issue. User flipped to public (matching original plan), which unblocked Actions free tier. Captured in Phase 0b.push wrap-up. No follow-up here.

## Scaffold/style findings filed upstream

5 still-open scaffold issues: #48 #49 #50 #51 #52. All labelled `consumer:guides`.

## Open follow-ups

- **Cloudflare Pages deploy** still deferred; will need `NODE_VERSION=22` and Pages-style `wrangler.toml` (see #50). Independent track; can happen anytime.
- **Scaffold v3.7+ chapters rendering refactor (#35)** may change patterns that the upcoming pedagogy dossiers cite. Not blocking; track passively.
- **AnkiCard component (#16)** is the scaffold deliverable that v0.2 design doc commits to for spaced-rep. If the scaffold ships AnkiCard in v3.7+, the design doc v0.3 (Phase E) should reference it.
- **GitHub Actions runtime deprecation**: scaffold's own v3.6.5 bumped `actions/checkout@v4` → @v6, etc. Consumer templates still ship the v4 versions. Not in scope this round but noting.

## Handoff hook

Phase A.0 is **complete**. Next: Phase A — `experimentation_foundations` fresh-content pilot dossier. Will run the v2.2+ pipeline (research-plan → gather → optional dossier-build → agent-index → audit → freshness-audit → kb-export) for the first time on a fresh-from-scratch dossier.

**To resume:** check `TaskList`; task #4 is the next to start. Pilot dossier creates `~/guides-experimentation/docs/research/experimentation_foundations/`.

## Commits in this phase

- `~/guides`: `6aa6b18 chore: bump book-scaffold-astro ^3.5.0 → ^3.5.1 (resolves to v3.6.5)`
- `~/guides-experimentation`: `fbf3001 chore: bump book-scaffold-astro ^3.5.0 → ^3.5.1 (resolves to v3.6.5)`
- Scaffold repo: 7 issues opened (#46-#52), 2 closed (#46, #47)
