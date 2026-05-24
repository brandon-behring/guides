# Research Plan: Transfer evaluation methods for interview-prep guides — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for transfer_evaluation_methods. Read this README first. -->

**Purpose:** Ground future LLM-agent work on transfer evaluation methods in the relevant primary literature.
**Primary intended consumer:** future Claude Code / LLM agents working on adjacent guide-authoring tasks; secondary: humans reading directly.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself.
**Scope:** How to measure whether a pedagogical artifact (textbook, course, interview guide) actually produces **transfer** — application of learned concepts to novel problems — vs mere retention of stated facts. Target dossier: ~60-100 entries across cognitive-science, instructional-design, and educational-measurement traditions. Underwrites the v0.2 design doc's "Path D transfer" commitment.
**Coverage:** 42 entries across 6 sub-areas; 5-bullet entries (Source / Code / Mechanism / Result / Status / Evidence).
**Last updated:** 2026-05-24.

## ⚠️ Scope boundary

This dossier covers **Research Plan: Transfer evaluation methods for interview-prep guides**. Out of scope (see sibling dossiers under `../`):

- Pure psychometric theory (IRT, factor analysis) without instructional design framing
- K-12-specific transfer interventions (audience here is adult interview prep, not classroom)
- Multi-language transfer in linguistics (different research family)
- Authentic assessment + portfolio rubric design — owned by `capstone_portfolio_assessment` dossier; this dossier cites that one for the assessment side and focuses on the **measurement validity** side.
- LLM-as-coach evaluation — owned by `llm_as_coach_interfaces` dossier.

**Cross-vol overlap convention:** entries relevant to multiple dossiers live in ONE primary location keyed by claim_family; do NOT duplicate.

## How this is organized

| File | Topic | Entries |
|---|---|---|
| `00_overview.md` | Scope + sub-area map + glossary pointer | — |
| `01_definitions_dimensions_of_transfer.md` | Definitions + dimensions of transfer (near/far, surface/structural, low-road/high-road) | 9 |
| `02_empirical_evidence_that_transfer_is_hard.md` | Empirical evidence that transfer is hard (the canonical pessimism) | 7 |
| `03_conditions_that_promote_transfer.md` | Conditions that promote transfer (varied practice, productive failure, contrasting cases) | 10 |
| `04_assessment_instruments_for_transfer.md` | Assessment instruments for transfer | 6 |
| `05_transfer_in_technical_programming_quanti.md` | Transfer in technical / programming / quantitative domains | 6 |
| `06_authentic_assessment_portfolio_based_mea.md` | Authentic assessment + portfolio-based measurement | 4 |

## Lookup recipes

- **"Definitions + dimensions of transfer?"** → `01_definitions_dimensions_of_transfer.md` § A1.1 (Anderson, Reder & Simon (1996)).
- **"Empirical evidence that transfer is hard?"** → `02_empirical_evidence_that_transfer_is_hard.md` § A2.1 (Day & Goldstone (2012)).
- **"Conditions that promote transfer?"** → `03_conditions_that_promote_transfer.md` § A3.1 (Bjork, Dunlosky & Kornell (2013)).
- **"Assessment instruments for transfer?"** → `04_assessment_instruments_for_transfer.md` § A4.1 (Mislevy, Steinberg & Almond (2003)).
- **"Transfer in technical / programming / quantitative domains?"** → `05_transfer_in_technical_programming_quanti.md` § A5.1 (Fong, Krantz & Nisbett (1986)).
- **"Authentic assessment + portfolio-based measurement?"** → `06_authentic_assessment_portfolio_based_mea.md` § A6.1 (Frederiksen & Collins (1989)).

## Glossary

See `00_overview.md` and per-entry bullets.

## Verification & limits

- Citations resolved as of 2026-05-24.
- Strict-live v2.2 evidence IDs present. See `../evidence_ledger.yml`, `../cache_manifest.yml`, `../claim_graph.jsonl`, `pre_selection_manifest.yml`.
- All entries default to `status: unverified` (per /research-gather convention). Promotion via /dossier-audit (deferred).
- Standards/vendor/docs pages (W3C, CAST, MathJax, AWS, Google Cloud, CompTIA) evolve; re-check before citing specific version details.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`, v2.4.0+). URLs link to primary sources. No local file paths referenced.
