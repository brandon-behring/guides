# AI-Assisted Authoring — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for ai_assisted_authoring research. Read this README first. -->

**Purpose:** A first-pass synthesis of the literature on LLM-assisted technical writing — efficacy studies, publisher disclosure norms, human-in-the-loop authoring interfaces, style-conformance methods, multi-agent writing workflows, and AI-vs-human evaluation/detection. Designed for dual consumption — humans (reading directly) and future LLM agents (grounding reasoning in this literature when designing chapter-authoring skills, drafting disclosure copy, or specifying style-conformance evaluation).
**Primary intended consumer:** future Claude Code / LLM agents working on the public-guides repo's authoring layer (skills design, About-page disclosure copy, style-guide rules-files, and validation rubrics) who need detailed context on ai-assisted authoring methodology.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself. Move it elsewhere and it still works.
**Scope:** 2022-2024 publications and standards-body policies covering the 6 sub-areas of the research plan.
**Coverage:** 26 entries across 6 topic files; structured 5-bullet entries (Source / Code / Mechanism / Result / Status) for paper synthesis, 5-bullet variant (Source / Status / Document type / Mechanism / Integration) for policy documents.
**Last updated:** 2026-05-19.

## Scope boundary

This folder covers the *methodology* layer for LLM-assisted authoring: what we know empirically about productivity effects, what publishers require for disclosure, how humans and LLMs collaborate in practice, how style guides are enforced on LLM output, how multi-agent workflows are composed, and how AI-assisted writing is evaluated and detected. It is NOT a guide to writing prose for the public-guides repo, NOT a survey of LLM-capability benchmarks, and NOT a coverage of image/video generation. Coding-Copilot studies are touched only where they directly inform writing-productivity claims.

**Adjacent dossiers (do NOT duplicate entries here):**

- **Documentation methodology** — sibling dossier `../documentation_methodology/` covers technical-documentation practices (Diátaxis, docs-as-code, OER quality) independent of AI assistance.
- **Learning pedagogy** — sibling dossier `../learning_pedagogy/` covers learning-science evidence (retrieval practice, spaced repetition, Mayer's principles). The AI-as-tutor research family (intelligent tutoring systems) belongs there, not here.
- **Technical book design** — sibling dossier `../technical_book_design/` covers typography, Tufte conventions, and book-design heritage. Style-as-typography lives there; style-as-LLM-constraint lives here.

**Cross-vol overlap convention:** when an entry is methodologically relevant across dossiers (e.g., a co-writing study that informs both authoring methodology and learning pedagogy), pick ONE primary location based on claim_family and reference adjacency here. Do NOT duplicate entries across sibling dossiers.

## How this is organized

Sub-section anchors use a per-file letter prefix (`## A1.` in file 01, `## B1.` in file 02, etc.) — anchors stay stable across edits so lookup-recipe pointers don't break.

| File | Topic | When to read |
|---|---|---|
| `01_llm_writing_efficacy.md` | Field & randomized productivity studies (anchors A1) | Start here for "does LLM-assisted writing actually work?" |
| `02_disclosure_norms.md` | Publisher & standards-body policies (anchors B1) | Start here when writing AI-disclosure copy or designing publication compliance |
| `03_hitl_patterns.md` | Co-writing datasets, interfaces, multi-variation tools (anchors C1, C2) | Start here when designing the human-LLM interaction layer of an authoring tool |
| `04_style_constraint.md` | Constitutional / RLHF / prompting / tool-augmentation (anchors D1, D2, D3) | Start here when figuring out how to get an LLM to conform to a style guide |
| `05_multiagent_workflow.md` | Multi-agent debate + orchestration frameworks (anchors E1, E2) | Start here when composing multiple skills/agents into a writing pipeline |
| `06_ai_writing_evaluation.md` | Blind evaluation + detection + watermarking (anchors F1, F2) | Start here when designing the "validated" rubric or evaluating LLM-written output quality |

The `../dossier/` sibling folder contains the same 26 entries rendered as the raw 7-column dossier tables; the agent-index summarizes one layer up (5-bullet per entry with explicit mechanism/result framing).

## Lookup recipes

Routes by question type. Each points to a specific file and section anchor.

- **"What's the foundational empirical evidence that LLM-assisted writing saves time?"** → `01_llm_writing_efficacy.md` § A1 (Noy & Zhang 2023, *Science*).
- **"Is there a randomized study on GitHub Copilot productivity?"** → `01_llm_writing_efficacy.md` § A1 (Peng et al. 2023).
- **"What field-deployment evidence exists for generative AI at scale?"** → `01_llm_writing_efficacy.md` § A1 (Brynjolfsson, Li, Raymond 2023 NBER).
- **"What's the 'jagged frontier' framing for AI tool capability?"** → `01_llm_writing_efficacy.md` § A1 (Dell'Acqua et al. 2023).
- **"What's the ACM policy on AI-tool authorship?"** → `02_disclosure_norms.md` § B1 (ACM 2023).
- **"What does Nature say about LLMs as authors?"** → `02_disclosure_norms.md` § B1 (Nature Portfolio 2023).
- **"Is there a cross-publisher consensus on AI authorship?"** → `02_disclosure_norms.md` § B1 (COPE 2023).
- **"What's the canonical co-writing dataset for HCI research?"** → `03_hitl_patterns.md` § C1 (CoAuthor, Lee Liang Yang CHI 2022).
- **"What co-writing tool introduced rewrite/continue/fill-in primitives?"** → `03_hitl_patterns.md` § C1 (Wordcraft, Yuan et al. IUI 2022).
- **"How does AI-scaffolding granularity affect writers?"** → `03_hitl_patterns.md` § C1 (Dhillon et al. CHI 2024).
- **"What tool supports rubric-driven prompt iteration in a UI?"** → `03_hitl_patterns.md` § C2 (EvalLM, Kim et al. CHI 2024).
- **"What's Constitutional AI?"** → `04_style_constraint.md` § D1 (Bai et al. 2022) and § Glossary.
- **"What's the foundational RLHF instruction-tuning paper?"** → `04_style_constraint.md` § D1 (InstructGPT, Ouyang et al. NeurIPS 2022).
- **"What's chain-of-thought prompting?"** → `04_style_constraint.md` § D2 (Wei et al. NeurIPS 2022) and § Glossary.
- **"Is there a systematic taxonomy of prompting techniques?"** → `04_style_constraint.md` § D2 (Schulhoff et al. 2024 "Prompt Report").
- **"What's the foundational paper on tool-augmented LLMs?"** → `04_style_constraint.md` § D3 (Toolformer, Schick et al. NeurIPS 2023).
- **"What's the canonical multi-agent debate paper?"** → `05_multiagent_workflow.md` § E1 (Du et al. ICML 2024).
- **"What's the Generative Agents (Smallville) paper?"** → `05_multiagent_workflow.md` § E1 (Park et al. UIST 2023).
- **"Which multi-agent framework should I reference for writing-pipeline composition?"** → `05_multiagent_workflow.md` § E2 (AutoGen, MetaGPT, ChatDev).
- **"What's the foundational blind-evaluation study of ChatGPT abstracts?"** → `06_ai_writing_evaluation.md` § F1 (Gao et al. 2022).
- **"Is there evidence of LLM-modified text in conference peer reviews?"** → `06_ai_writing_evaluation.md` § F1 (Liang et al. ICML 2024).
- **"What's DetectGPT?"** → `06_ai_writing_evaluation.md` § F2 (Mitchell et al. ICML 2023) and § Glossary.
- **"What's the canonical LLM-watermarking paper?"** → `06_ai_writing_evaluation.md` § F2 (Kirchenbauer et al. ICML 2023) and § Glossary.

## Glossary

Canonical terms used across the synthesis, with one-line definitions and primary citations. Resolves ambiguous lookups without forcing a web search.

- **HITL co-writing** (human-in-the-loop co-writing): an authoring workflow where a human writer interacts iteratively with an LLM that offers suggestions, edits, or variations the human accepts, rejects, or modifies. Canonical references: CoAuthor (Lee et al. 2022), Wordcraft (Yuan et al. 2022). See file 03.
- **Constitutional AI** (CAI): Anthropic's approach to training LLMs to critique and revise their own outputs against an explicit set of written principles, then using those revisions as preference data for RL training. Sometimes shortened to "constitutional" or "principles-based" alignment. Canonical reference: Bai et al. 2022 (arXiv:2212.08073). See file 04 § D1.
- **RLHF** (Reinforcement Learning from Human Feedback): a training technique that fine-tunes a language model using preference comparisons collected from human raters, typically as a reward-model-driven RL stage on top of supervised fine-tuning. Canonical reference: InstructGPT, Ouyang et al. 2022 (arXiv:2203.02155). See file 04 § D1.
- **Prompt scaffolding** (or "prompting scaffold"): structured prompt elements — outlines, role assignments, worked reasoning steps, decomposition templates — designed to guide LLM generation. Reference taxonomy: Schulhoff et al. 2024 "The Prompt Report". See file 04 § D2.
- **Multi-agent debate**: a workflow where multiple LLM instances independently generate answers and then critique each other across debate rounds, with the converged response aggregated as output. Canonical reference: Du et al. 2023 (arXiv:2305.14325). See file 05 § E1.
- **LLM watermarking**: proactive embedding of a statistical signal at generation time (typically via biased token sampling against a pseudorandom green-list) so machine-generated text can be later identified by hypothesis test. Canonical reference: Kirchenbauer et al. 2023 (arXiv:2301.10226). See file 06 § F2.
- **AI text detection**: post-hoc classification of text as machine- or human-generated, often using probability-curvature or perplexity-based signals on a reference LM. Canonical reference: DetectGPT, Mitchell et al. 2023 (arXiv:2301.11305). Note: detection reliability declines as models scale and paraphrasing attacks emerge. See file 06 § F2.
- **Disclosure norms**: publisher, academic-society, and platform policies specifying when and how authors must disclose LLM use in submitted work. Canonical references: ACM, Nature, COPE 2023 policies. See file 02 § B1.

## Verification & limits

- Citations resolved as of 2026-05-19 from `../bib_ledger.yml`.
- All entries first-pass `unverified` — promotion to `verified` happens in `/dossier-audit`, which cross-checks titles, authors, and quantitative claims against primary sources.
- Quantitative claims are deliberately not asserted in the synthesis above. Any specific percentage time-reduction, quality-lift, or detection-accuracy figure cited in secondary coverage of these papers must be re-checked against the primary-source abstract before being reproduced in downstream artifacts (chapters, slide decks, About-page disclosure copy).
- Publisher policies (file 02) carry an explicit `(recheck after 2026-12)` flag — these documents drift quarterly as the field's consensus evolves.
- This synthesis is a snapshot. The detection / watermarking literature (file 06 § F2) is particularly volatile — detection-robustness claims age rapidly as models scale and adversarial paraphrasing techniques mature.
- _Add audit-trail notes here as `**Independent audit, round N (YYYY-MM-DD):** ...` paragraphs after each `/dossier-audit` invocation._

## Attribution

Synthesized from the research dossier at `../dossier/` (compiled 2026-05-19) and the source ledger at `../bib_ledger.yml` (26 entries). Maintained by the research_toolkit (`~/Claude/research_toolkit/`). URLs link to primary sources (arXiv, DOIs, publisher policy pages, GitHub). No local file paths are referenced.
