# Research Plan: LLM-as-coach interfaces for technical learning — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for llm_as_coach_interfaces. Read this README first. -->

**Purpose:** Ground future LLM-agent work on llm as coach interfaces in the relevant primary literature.
**Primary intended consumer:** future Claude Code / LLM agents working on adjacent guide-authoring tasks; secondary: humans reading directly.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself.
**Scope:** How LLM-tutor UX patterns are designed, evaluated, and deployed in educational + skill-acquisition contexts — with attention to interview-prep + technical-skills training as direct applications. Underwrites v0.2 design doc's LLM-as-coach commitment. Target: ~40-80 entries (literature is younger; depth target lower than other pedagogy dossiers).
**Coverage:** 38 entries across 6 sub-areas; 5-bullet entries (Source / Code / Mechanism / Result / Status / Evidence).
**Last updated:** 2026-05-24.

## ⚠️ Scope boundary

This dossier covers **Research Plan: LLM-as-coach interfaces for technical learning**. Out of scope (see sibling dossiers under `../`):

- Self-assessment as a portfolio component — owned by `capstone_portfolio_assessment` dossier.
- LLM evaluation as a research methodology — sister `transfer_evaluation_methods` dossier covers transfer measurement; this one covers LLM-tutor evaluations specifically.
- LLM safety + alignment broadly — only the subset that affects tutor design.
- Non-tutor LLM applications (chat assistants, code-completion when not in a learning context).

**Cross-vol overlap convention:** entries relevant to multiple dossiers live in ONE primary location keyed by claim_family; do NOT duplicate.

## How this is organized

| File | Topic | Entries |
|---|---|---|
| `00_overview.md` | Scope + sub-area map + glossary pointer | — |
| `01_intelligent_tutoring_systems.md` | Intelligent tutoring systems (ITS) historical foundations | 7 |
| `02_llm_tutoring_evaluation_studies.md` | LLM tutoring evaluation studies (2023-2026) | 6 |
| `03_pedagogical_prompt_engineering_scaffoldi.md` | Pedagogical prompt engineering + scaffolding patterns | 6 |
| `04_interactive_learning_interfaces.md` | Interactive learning interfaces (chat vs notebook vs structured exercise) | 4 |
| `05_risks_failure_modes.md` | Risks + failure modes (hallucination, sycophancy, illusion of mastery) | 7 |
| `06_specific_deployments_their_published_out.md` | Specific deployments + their published outcomes | 8 |

## Lookup recipes

- **"Intelligent tutoring systems?"** → `01_intelligent_tutoring_systems.md` § A1.1 (Anderson, Corbett, Koedinger & Pelletier (1995)).
- **"LLM tutoring evaluation studies?"** → `02_llm_tutoring_evaluation_studies.md` § A2.1 (Deng et al. (2024)).
- **"Pedagogical prompt engineering + scaffolding patterns?"** → `03_pedagogical_prompt_engineering_scaffoldi.md` § A3.1 (Anthropic (2025)).
- **"Interactive learning interfaces?"** → `04_interactive_learning_interfaces.md` § A4.1 (Kazemitabaar et al. (2023)).
- **"Risks + failure modes?"** → `05_risks_failure_modes.md` § A5.1 (Ai et al. (2024)).
- **"Specific deployments + their published outcomes?"** → `06_specific_deployments_their_published_out.md` § A6.1 (Bastani et al. (2025)).

## Glossary

See `00_overview.md` and per-entry bullets.

## Verification & limits

- Citations resolved as of 2026-05-24.
- Strict-live v2.2 evidence IDs present. See `../evidence_ledger.yml`, `../cache_manifest.yml`, `../claim_graph.jsonl`, `pre_selection_manifest.yml`.
- All entries default to `status: unverified` (per /research-gather convention). Promotion via /dossier-audit (deferred).
- Standards/vendor/docs pages (W3C, CAST, MathJax, AWS, Google Cloud, CompTIA) evolve; re-check before citing specific version details.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`, v2.4.0+). URLs link to primary sources. No local file paths referenced.
