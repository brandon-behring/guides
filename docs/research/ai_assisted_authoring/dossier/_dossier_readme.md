# AI-Assisted Authoring — Dossier README

**Compiled:** 2026-05-19
**Total entries:** 26
**Source ledger:** `../bib_ledger.yml`
**Source plan:** `../research_plan.md`

This dossier organizes first-pass research on LLM-assisted technical writing into 6 topic files matching the research_plan's claim_family taxonomy. Heavy-depth target is 200-300 entries; this first-pass establishes anchor coverage across all 6 sub-areas. Re-run `/research-gather` on the same plan to append additional entries — the skill dedupes by bibkey.

## Per-file entry counts

| File | Claim family | Entries | Section anchors |
|------|-------------|---------|-----------------|
| `01_llm_writing_efficacy.md` | llm_writing_efficacy | 4 | A1 |
| `02_disclosure_norms.md` | disclosure_norms | 3 | B1 |
| `03_hitl_patterns.md` | hitl_patterns | 5 | C1, C2 |
| `04_style_constraint.md` | style_constraint | 5 | D1, D2, D3 |
| `05_multiagent_workflow.md` | multiagent_workflow | 5 | E1, E2 |
| `06_ai_writing_evaluation.md` | ai_writing_evaluation | 4 | F1, F2 |

**Total:** 26 entries across 6 files.

## Status summary

All 26 entries are `unverified` first-pass. Promotion to `verified` happens in `/dossier-audit`, which cross-checks titles, authors, and quantitative claims against primary sources. Non-paper policy documents (file 02) require additional last-updated-date verification because publisher policies drift quarterly.

## Notes on schema

- File 01 uses anchors `## A1`; file 02 uses `## B1`; file 03 uses `## C1`, `## C2`; etc. — per-file letter-prefix convention enforced by the dossier validator.
- File 02 uses the non-paper variant schema (column 2 = organization, not "Authors (year)") because publisher policies don't have conventional author lists.
- All other files use the canonical 7-column paper schema.

## Downstream

This dossier is consumed by `/agent-index` to produce the dual-audience synthesis at `../agent_index/`. The agent-index mirrors this file structure (one synthesis file per dossier file) and uses the same section-anchor scheme so cross-references survive round-tripping.
