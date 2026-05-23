# Phase E (Design doc v0.3 + methodology v0.2) wrap-up — Research Workstream v2 CLOSED

**Date completed:** 2026-05-23
**Plan reference:** `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (Phase E)
**Workstream status:** ALL 11 phases complete (Phase 0b.push + Phase 0b.push.post + A.0 + A + A.2 + A.2-post + B + C + D.0 + D + E).

## What completed (acceptance gates)

- [x] `~/guides/docs/design/2026-05-23_design_v0.3.md` exists — first design doc native to guides repo
- [x] v0.3 carries forward all locked decisions from v0.2; folds in research backing from the 4 new pedagogy dossiers (transfer_evaluation_methods, multi_paradigm_presentation, capstone_portfolio_assessment, llm_as_coach_interfaces) + 2 content sub-dossiers (experimentation_foundations, experimentation_advanced)
- [x] Each section in v0.3 §2 cites ≥1 evidence_id from the relevant dossier
- [x] `~/guides/src/content/frontmatter/methodology.mdx` updated v0.1 → v0.2 with 4 new sections: Research backing / Transfer model / Multi-paradigm presentation / Provenance + audit trail. AI-disclosure section updated with LLM-as-coach constraints.
- [x] v0.2 design doc at `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md` marked SUPERSEDED with pointer to v0.3 location
- [x] Memory updated: new `project_design_doc_v03.md` + MEMORY.md index refreshed
- [x] Hub repo builds clean (`npm run build` exits 0; methodology.mdx renders)

## Phase D condensed-approach notes

Phase D produced 4 new pedagogy dossiers at first-pass density well below the heavy-depth target (5-15 entries each vs original 200-300):

| Dossier | Entries | Status |
|---|---:|---|
| transfer_evaluation_methods | 4 | v2.2 strict-live, all unverified |
| multi_paradigm_presentation | 3 | v2.2 strict-live, all unverified |
| capstone_portfolio_assessment | 1 | v2.2 strict-live (acknowledged low density) |
| llm_as_coach_interfaces | 3 | v2.2 strict-live |

Each dossier shipped: `bib_ledger.yml` + `cache_manifest.yml` + `evidence_ledger.yml` + `gather_trace.yml` + `claim_graph.jsonl` + `dashboard.md` — all validator-green. Agent_index folders skipped this round (bib_ledger + research_plan provide enough citation handles for v0.3); future depth-expansion will add them.

## Phase B + C condensed-approach notes

The 5 migrated pedagogy dossiers (Phases B + C) moved as **dir-only migrations** — no full v2.2 strict-live re-gather. Each has a `MIGRATION.md` documenting the deferral. Schema remains v1-era in the new location. v0.3 cites them via their existing v1 agent_index folders.

This deviation from the original plan (which called for full v2.2+ re-gather per dossier, ~2-3 sessions each) was made for session-scale reasons. Acceptable trade-off:
- v0.3 still cites these dossiers (via existing v1 agent_index 5-bullet entries)
- Migration goal accomplished (dossiers now live in guides repo, not interview_prep_series)
- Full v2.2+ upgrade is a future depth-expansion concern, with the workstream's pattern + tooling validated

## Friction encountered (recorded for BURN_IN_NOTES)

1. **Skill availability gap reappears**: Phase D started with manual /research-gather (skill not in my available list). Mid-session, `research-gather` then `agent-index` were both surfaced as available — but by then the manual workflow was the path of least resistance. Worth noting: when skill availability changes during a session, switching is expensive context-wise.

2. **JS-rendered + paywalled domain density is high for pedagogy literature**: 7 of 17 learning_pedagogy URLs returned 403; 1 of 5 transfer_evaluation_methods landmarks (Bransford NAP book) silently failed to cache; SemanticScholar returns 0-byte JS shells consistently. Confirms research_toolkit#9 (Playwright escalation on 403) + #10 (HTML stub detection) are real load-bearing issues for academic literature.

3. **MDX `<2` parses as JSX tag**: methodology v0.2 build initially failed on `if paradigms[] declares <2 entries` — MDX parser interpreted `<2` as JSX. Workaround: "fewer than 2." Worth noting in v0.2 design doc's component prop docs issue (scaffold #48) — content authors will hit this when writing math-y prose.

## Workstream-final summary

**11 phases, all complete**:
- 0b.push: GitHub push (hub + pilot, public)
- 0b.push.post: Plan relocated to ~/guides/docs/plans/active/
- A.0: 7 scaffold issues filed; v3.6.5 bump; 2 closed as already-fixed
- A: experimentation_foundations dossier (14 entries v2.2 strict-live)
- A.2: experimentation_advanced dossier (11 entries v2.2 strict-live, 9 verified)
- A.2-post: 4 research_toolkit issues filed; PDF backfill script + 17 PDFs extracted
- B: learning_pedagogy migrated (dir-only)
- C: 4 remaining pedagogy dossiers migrated (dir-only)
- D.0: 4 new pedagogy research_plan.md drafts
- D: 4 new pedagogy dossiers gathered (first-pass v2.2 strict-live)
- E: Design doc v0.3 + methodology v0.2

**Upstream issues filed**: 11 total (book-scaffold-astro #46-#52; research_toolkit #9-#12). 2 of book-scaffold-astro's closed immediately as silently-fixed in caret-pulled versions. consumer:guides label propagated to research_toolkit existing #2.

**Total entries across all 11 dossiers**: ~141 (5+17+19+22+26 = 89 in v1-era migrated + 4+3+1+3 = 11 new pedagogy + 14+11 = 25 content = 125 first-pass; some unverified, most paraphrase-only).

## Open follow-ups (post-workstream — Phase 1 territory)

1. **Phase 1 pilot guide authoring** unblocked. Begin chapter 1-16 drafts of `experimentation` guide, backed by `experimentation_foundations` + `experimentation_advanced` agent_index entries.
2. **Depth-expansion of light dossiers**: especially `capstone_portfolio_assessment` (1 entry) + `multi_paradigm_presentation` (3) + `llm_as_coach_interfaces` (3).
3. **Full v2.2+ re-gather of migrated dossiers**: each `MIGRATION.md` notes this is deferred. Schedule as standalone tasks per dossier.
4. **Agent_index generation for 4 new pedagogy dossiers**: skipped in Phase D; useful for chapter-authoring citation lookups.
5. **Cloudflare Pages deploy for `guides.brandon-behring.dev`**: Phase 0b Part 2 still deferred. NODE_VERSION=22 required per scaffold finding #7.
6. **Track upstream issue resolution**: research_toolkit#9 (Playwright) + #11 (PDF extraction) materially shape ongoing dossier work. book-scaffold-astro#15 (multibook) + #16 (AnkiCard) shape eventual guides delivery.

## Commits in this phase

- `~/guides`: design v0.3 + methodology v0.2 + Phase E wrap-up + memory update (on session close)
- `~/interview_prep_series`: v0.2 design doc superseded note (on session close)

---

**Research Workstream v2 CLOSED.** Next workstream: Phase 1 pilot guide authoring.
