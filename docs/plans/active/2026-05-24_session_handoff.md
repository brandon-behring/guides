# Session handoff — 2026-05-24

## TL;DR

A 1.5-day session (2026-05-23 → 2026-05-24) closed **Research Workstream v2** (all 11 phases), drafted **Phase 1 chapter 1** of the experimentation pilot guide, migrated the whole stack to **scaffold v4.2.0**, and closed **all 8 of our filed consumer:guides scaffold issues**. Canonical artifacts live at `docs/design/2026-05-23_design_v0.3.md` + `src/content/frontmatter/methodology.mdx` (v0.2) + `docs/research/` (9 pedagogy dossiers) + `guides-experimentation/docs/research/` (2 content sub-dossiers). **Suggested next action: Phase 1 ch 2 authoring** (most natural next unit; #63 is unblocked; the experimentation_foundations dossier has dense citation backing for sub-area A5 randomization).

## State snapshot

| Workstream | Status | Where |
|---|---|---|
| Research Workstream v2 (11 phases) | ✅ closed | `docs/plans/active/2026-05-22_research_workstream_v2.md` |
| Design doc v0.3 + methodology v0.2 | ✅ canonical (this repo) | `docs/design/2026-05-23_design_v0.3.md` + `src/content/frontmatter/methodology.mdx` |
| Phase 1 pilot guide authoring | 🔄 1 of 16 chapters drafted | `~/guides-experimentation/src/content/experimentation/` |
| Scaffold v3→v4 migration | ✅ both repos v4.2.0 | `astro.config.mjs` + `shared/styles/guides-family.ts` |
| Scaffold consumer:guides issues | ✅ 8/8 of mine closed; 9th docs-only filing in progress | `brandon-behring/book-scaffold-astro` #46-52, #63 closed |
| research_toolkit consumer:guides | 4 filed; 2 closed (#9, #12), 2 open (#10, #11) | `brandon-behring/research_toolkit` |
| Cloudflare Pages deploy (Phase 0b Pt 2) | ⏳ still deferred | `guides.brandon-behring.dev` not yet live |

## Canonical artifact index

| When you need to find... | Path |
|---|---|
| Active workstream plan | `docs/plans/active/2026-05-22_research_workstream_v2.md` |
| Active design doc | `docs/design/2026-05-23_design_v0.3.md` |
| User-facing methodology page (v0.2) | `src/content/frontmatter/methodology.mdx` |
| Shared style across the guides family | `shared/styles/guides-family.ts` |
| 9 pedagogy dossiers (5 migrated v1-era + 4 new v2.2) | `docs/research/<topic>/` |
| 2 content sub-dossiers for experimentation pilot | `~/guides-experimentation/docs/research/{experimentation_foundations,experimentation_advanced}/` |
| Phase 1 ch 0 + ch 1 chapter MDX | `~/guides-experimentation/src/content/experimentation/{00-introduction,01-industrial-narrative}.mdx` |
| Bibliography for pilot's Cite components | `~/guides-experimentation/bibliography.bib` |
| Phase wrap-up docs (per-phase friction logs) | `docs/plans/done/` (10 docs across the session) |
| PDF text-extraction backfill script | `scripts/backfill_pdf_cache_text.py` |
| Historical lineage docs (v0.1, v0.2, comparative critique, roadmap) | `~/interview_prep_series/docs/plans/active/` (frozen reference; not canonical) |

## Open follow-ups — ranked by likely next-pick

### (a) Phase 1 ch 2 authoring — RECOMMENDED
Most natural next unit. #63 unblocked + chapter rendering verified end-to-end. Likely scope: **"Randomization fundamentals + AA tests"** from `experimentation_foundations` sub-area A5. Authoring path: read `agent_index/03_industrial_practice.md` or A5-relevant agent_index entries → cite 3-5 bibkeys from `bibliography.bib` (need to add more entries for A5-specific papers) → draft + build + push. Pattern set by ch 1; ~90-120 min wall-clock.

### (b) Cloudflare Pages deploy (Phase 0b Part 2)
`deploy: 'pages'` signaling is in place via `guidesFamilyStyle`. Needs: Cloudflare dashboard wire-up (project create, env vars `BOOK_PRESET=research-portfolio` + `NODE_VERSION=22`, GitHub repo connect), custom domain `guides.brandon-behring.dev`, DNS validation. ~30-60 min. Detailed steps in `~/guides/docs/deploy-cloudflare-pages.md`.

### (c) Depth-expand thin Phase D dossiers
4 Phase D dossiers (capstone_portfolio_assessment 1 entry; multi_paradigm_presentation 3; llm_as_coach_interfaces 3; transfer_evaluation_methods 4) are below first-pass density. Particularly `capstone_portfolio_assessment` (1 entry) is too thin to soundly back v0.3 §2.4. Re-run `/research-gather` with --escalate-on-failure (research_toolkit#9 is closed; Playwright escalation should now work for previously-paywalled sources).

### (d) Full v2.2+ re-gather of migrated dossiers
5 dossiers in `docs/research/` were dir-only migrated (B/C condensed approach); each has a `MIGRATION.md` noting the deferral. Full upgrade per dossier: re-run `/research-gather` → upgrade to v2.2 schema → run `/agent-index` Attribute-First. ~2-3 sessions per dossier.

### (e) `guidesFamilyStyle` → npm package
Currently canonical in hub repo + inline-duplicated in pilot. When 2nd guide ships (likely `guides-prompt-injection` per Anthropic-arc fit), extract to `@brandon-behring/guides-shared-style` npm package. Both consumers then import from npm. Until then, current setup works fine.

### (f) research_toolkit #10 + #11 — passive
- **#10** HTML stub detection — affects depth-expansion when retrying JS-rendered pages (semanticscholar, projecteuclid). Workaround: use arxiv URL when both available.
- **#11** PDF text extraction — `~/guides/scripts/backfill_pdf_cache_text.py` is the consumer-side workaround; runs `pdftotext` on raw_only PDF caches. Script becomes delete-able when #11 ships upstream.

## Suggested first action of next session

1. **MEMORY.md** auto-loads + you read `project_session_state.md` (richer breadcrumb)
2. **Read this handoff doc** (this file)
3. **Pick from §"Open follow-ups" ranked list** — default to (a) Phase 1 ch 2 authoring unless you have a reason to redirect
4. **Spawn a focused plan** for the chosen task; reference the wrap-up docs below for prior friction patterns

## References (per-phase wrap-up docs from this session)

All in `docs/plans/done/`:
- `2026-05-22_phase_0b_push_wrap_up.md` — GitHub push + private→public flip + Node 22 bump
- `2026-05-22_phase_a0_scaffold_preflight_wrap_up.md` — first 7 scaffold issues filed
- `2026-05-23_phase_a_experimentation_foundations_wrap_up.md` — first content dossier (14 entries)
- `2026-05-23_phase_a2_experimentation_advanced_wrap_up.md` — second content dossier (11 entries) + research_toolkit issues filed
- `2026-05-23_phase_e_design_v03_wrap_up.md` — design doc v0.3 + methodology v0.2 + workstream closure
- `2026-05-23_phase1_ch1_industrial_narrative_wrap_up.md` — chapter 1 draft (see Update 2026-05-24 section)
- `2026-05-24_scaffold_v4_migration_wrap_up.md` — v3→v4 migration + #63 resolution

## Known local-only state (not in any repo)

Three files in `~/interview_prep_series/docs/plans/active/` have local-only documentation amendments preserving the design-doc lineage:
- `2026-05-19_research_phase_handoff.md` — dossier-migration erratum
- `2026-05-19_guides_design_rethink_v0.2.md` — SUPERSEDED by v0.3 note
- `2026-05-20_phase_0b_wrap_up.md` — Node 22 errata + correction

These are untracked in interview_prep_series git; user has substantial unrelated WIP in that repo intentionally untouched. Decision: leave as-is; user can commit at their discretion.

## Versions in play

- **scaffold v4.2.0** — installed in both repos; `preset:` API removed (BREAKING); use `styles: [<presetStyle>, guidesFamilyStyle]`
- **research_toolkit** — v2.3.0 candidate (HEAD `daf6699`); `git pull` to refresh; latest tag remains v1.9.1 (v2.x is HEAD-only)
- **Astro 6.1.7** — Node ≥22.12.0 required (binding constraint, not just scaffold)
- **Node 22** — both repos' CI; also required for Cloudflare Pages when deploy lands
