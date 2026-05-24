# Research Plan: Multi-paradigm presentation + UDL (Universal Design for Learning) — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for multi_paradigm_presentation. Read this README first. -->

**Purpose:** Ground future LLM-agent work on multi paradigm presentation in the relevant primary literature.
**Primary intended consumer:** future Claude Code / LLM agents working on adjacent guide-authoring tasks; secondary: humans reading directly.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself.
**Scope:** How content can be presented across multiple paradigms (visual/symbolic/code/prose; theory-first/practice-first; deductive/inductive) to serve readers with different cognitive styles + accessibility needs. Backs the v0.2 design doc's Dim 7 "paradigms" frontmatter field commitment + the scaffold v3.6.0+ UDL variant blocker. Target: ~60-100 entries across UDL, multimedia learning, accessibility, and dual-coding theory.
**Coverage:** 49 entries across 6 sub-areas; 5-bullet entries (Source / Code / Mechanism / Result / Status / Evidence).
**Last updated:** 2026-05-24.

## ⚠️ Scope boundary

This dossier covers **Research Plan: Multi-paradigm presentation + UDL (Universal Design for Learning)**. Out of scope (see sibling dossiers under `../`):

- K-12-classroom UDL implementation (different operationalization)
- Disability-rights policy or compliance law (we care about presentation, not regulation)
- Neuroimaging-level cognitive mechanisms
- Cognitive load (basic) — covered in sister `learning_pedagogy` dossier; cite, don't duplicate.

**Cross-vol overlap convention:** entries relevant to multiple dossiers live in ONE primary location keyed by claim_family; do NOT duplicate.

## How this is organized

| File | Topic | Entries |
|---|---|---|
| `00_overview.md` | Scope + sub-area map + glossary pointer | — |
| `01_universal_design_for_learning.md` | Universal Design for Learning (UDL) framework | 8 |
| `02_multimedia_learning_cognitive_load.md` | Multimedia learning + cognitive load (Mayer's principles) | 9 |
| `03_dual_coding_theory_visual_symbolic_verba.md` | Dual-coding theory + visual-symbolic-verbal coordination | 7 |
| `04_accessibility_paradigms.md` | Accessibility paradigms (screen readers, dyslexia-friendly typography, colorblind-safe palettes) | 9 |
| `05_theory_first_vs_practice_first_sequencin.md` | Theory-first vs practice-first sequencing | 8 |
| `06_code_first_vs_prose_first_technical_expo.md` | Code-first vs prose-first technical exposition | 8 |

## Lookup recipes

- **"Universal Design for Learning?"** → `01_universal_design_for_learning.md` § A1.1 (Al-Azawei, Serenelli & Lundqvist (2016)).
- **"Multimedia learning + cognitive load?"** → `02_multimedia_learning_cognitive_load.md` § A2.1 (Ginns (2005)).
- **"Dual-coding theory + visual-symbolic-verbal coordination?"** → `03_dual_coding_theory_visual_symbolic_verba.md` § A3.1 (Carney & Levin (2002)).
- **"Accessibility paradigms?"** → `04_accessibility_paradigms.md` § A4.1 (Galuschka et al. (2020)).
- **"Theory-first vs practice-first sequencing?"** → `05_theory_first_vs_practice_first_sequencin.md` § A5.1 (Ebner, MacDonald, Grekov & Aspiranti (2025)).
- **"Code-first vs prose-first technical exposition?"** → `06_code_first_vs_prose_first_technical_expo.md` § A6.1 (Kluyver, Ragan-Kelley, Perez, Granger et al. (2016)).

## Glossary

See `00_overview.md` and per-entry bullets.

## Verification & limits

- Citations resolved as of 2026-05-24.
- Strict-live v2.2 evidence IDs present. See `../evidence_ledger.yml`, `../cache_manifest.yml`, `../claim_graph.jsonl`, `pre_selection_manifest.yml`.
- All entries default to `status: unverified` (per /research-gather convention). Promotion via /dossier-audit (deferred).
- Standards/vendor/docs pages (W3C, CAST, MathJax, AWS, Google Cloud, CompTIA) evolve; re-check before citing specific version details.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`, v2.4.0+). URLs link to primary sources. No local file paths referenced.
