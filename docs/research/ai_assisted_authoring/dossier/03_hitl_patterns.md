# Human-in-the-Loop Authoring Patterns — Co-Writing Interfaces & Studies

This file covers HCI research on human-LLM collaboration interfaces and multi-turn editing patterns. Style-conformance methods (prompts, fine-tuning, constitutional approaches) live in `04_style_constraint.md`; multi-agent workflows live in `05_multiagent_workflow.md`.

---

## C1. Co-Writing Datasets & Interfaces

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| CoAuthor: Designing a Human-AI Collaborative Writing Dataset for Exploring Language Model Capabilities | Lee, Liang, & Yang (2022) | CHI 2022 | arXiv:2201.06796 | — | Collects and releases a dataset of human-LLM collaborative-writing sessions instrumented at the keystroke level | Establishes a public, reproducible dataset for studying co-writing behaviour and a methodological template for capturing AI-suggestion acceptance |
| Wordcraft: Story Writing With Large Language Models | Yuan et al. (2022) | IUI 2022 | DOI:10.1145/3490099.3511105 | PAIR-code/wordcraft | Interactive story-writing tool integrating LLM-based suggestions with user editing controls and prompt-rewriting affordances | Demonstrates structured-prompt interface patterns (rewrite, continue, fill-in) that became influential design vocabulary for co-writing tools |
| Shaping Human-AI Collaboration: Varied Scaffolding Levels in Co-writing with Language Models | Dhillon et al. (2024) | CHI 2024 | arXiv:2402.11723 | — | User study varying the level of AI scaffolding (none / next-sentence / next-paragraph / outline) in a writing task | Shows that scaffolding-level interacts with writer expertise and task type — light scaffolding helps novices, heavy scaffolding can crowd out expert voice |

## C2. Multi-Variation & Evaluation-in-the-Loop Tools

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| ABScribe: Rapid Exploration & Organization of Multiple Writing Variations in Human-AI Co-Writing Tasks using Large Language Models | Reza et al. (2024) | CHI 2024 | arXiv:2310.00117 | mohireza/abscribe | Co-writing interface that materializes multiple LLM-generated variations as in-place alternatives the writer can compare and merge | Introduces "variation" as an explicit first-class object in the editor, moving beyond single-suggestion accept/reject interaction |
| EvalLM: Interactive Evaluation of Large Language Model Prompts on User-Defined Criteria | Kim et al. (2024) | CHI 2024 | arXiv:2309.13633 | kixlab/EvalLM | Tool letting prompt authors specify natural-language criteria and iteratively evaluate LLM outputs against those criteria | Operationalizes rubric-driven prompt iteration in a UI; directly relevant to "is this chapter well-written" loops on top of LLM-generated content |

---

**Notes:** Entries cluster into two sub-sections — data/interface foundations (C1) and multi-variation / criterion-driven tools (C2). Microsoft Copilot for Microsoft 365 design papers, GitHub Copilot Workspace docs, and Cursor/Lex/Granola product docs referenced in the research_plan are deferred to second-pass /research-gather.
