# Technical Book Design — Dossier (first-pass)

Compiled: 2026-05-19.

This dossier renders the first-pass `bib_ledger.yml` for the `technical_book_design` research workstream as five topic-organized Markdown table files. The dossier is the editable "raw research notes" form; consumed downstream by `/agent-index` which produces the dual-audience synthesis.

## Coverage

- **Total entries:** 32
- **Topic files:** 5 (one per primary claim_family, with `reader_flow` folded into `web_print_tradeoff`)

## Entries per claim_family

| Claim family | Entries | Topic file |
|---|---|---|
| `chapter_pattern` | 5 | `01_chapter_pattern.md` |
| `information_design` | 7 | `02_information_design.md` |
| `figure_integration` | 5 | `03_figure_integration.md` |
| `exemplar_artifact` | 10 | `04_exemplar_artifact.md` |
| `web_print_tradeoff` + `reader_flow` | 4 + 1 = 5 | `05_web_print_tradeoff.md` |

The `reader_flow` claim family had only one entry (`matuschak_evergreen`); per the dossier-build skill's "consider merging single-entry claim_families" rule, it is rendered in the `web_print_tradeoff` file as section E2. The source bib_ledger.yml still tags the entry as `reader_flow`.

## Source

- **Bib ledger:** `../bib_ledger.yml` — 32 first-pass entries with `status: unverified`.
- **Research plan:** `../research_plan.md` — 5 sub-areas, ~6 claim families, target heavy dossier (~200-300 entries; this first pass covers ~10-15% of that target).

## Status

All entries are `unverified` — they have not been fetched and cross-checked against primary sources. Promotion to `verified` happens in `/dossier-audit` rounds.

## Anchor convention

Per-file letter-prefix anchors:

| File | Anchor prefix |
|---|---|
| `01_chapter_pattern.md` | `A1`, `A2`, ... |
| `02_information_design.md` | `B1`, `B2`, `B3` |
| `03_figure_integration.md` | `C1`, `C2` |
| `04_exemplar_artifact.md` | `D1`, `D2`, `D3` |
| `05_web_print_tradeoff.md` | `E1`, `E2` |

These anchors are stable cross-reference targets used by the agent-index README's lookup recipes.
