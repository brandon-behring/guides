# Documentation Methodology — Dossier README

**Compiled:** 2026-05-19
**Total entries:** 22
**Source ledger:** [`../bib_ledger.yml`](../bib_ledger.yml)
**Source plan:** [`../research_plan.md`](../research_plan.md)

## Per-claim-family counts

| claim_family | File | Entry count |
|---|---|---|
| `docs_framework` | `01_docs_framework.md` | 3 |
| `oer_research` | `02_oer_research.md` | 5 |
| `oer_adoption` | `03_oer_adoption.md` | 4 |
| `docs_as_code` | `04_docs_as_code.md` | 5 |
| `hypertext_patterns` | `05_hypertext_patterns.md` | 5 |
| **Total** | | **22** |

## Anchor convention

Sub-section anchors use a per-file letter prefix:

| File | Letter prefix | Used anchors |
|---|---|---|
| `01_docs_framework.md` | A | A1, A2 |
| `02_oer_research.md` | B | B1, B2 |
| `03_oer_adoption.md` | C | C1, C2 |
| `04_docs_as_code.md` | D | D1, D2 |
| `05_hypertext_patterns.md` | E | E1, E2, E3 |

## Notes

- All 22 entries are status `unverified` (first-pass gather, no primary-source check beyond URL collection).
- Many entries are non-paper (frameworks, standards documents, books, ongoing community websites). Venue cells reflect this honestly ("OASIS Standard", "self-published book", "community website") rather than guessing a journal venue.
- `(no preprint)` appears in arXiv/DOI cells for non-paper entries that have no preprint or DOI; the URL in `bib_ledger.primary_url` is the canonical handle.
- `code_url` is populated only for entries with widely-known canonical repositories (`readthedocs/readthedocs.org`, `sphinx-doc/sphinx`); other entries use `—` to avoid guessing.

## Next steps

1. `/agent-index` — synthesize the 5 dossier files into a dual-audience indexed folder at `../agent_index/`.
2. `/url-freshness-check` — HEAD-check every URL in the dossier; categorize 4xx breakers; correct inline.
3. `/dossier-audit` — one or more rounds of independent audit using WebSearch + WebFetch to promote entries from `unverified` to `verified`.
