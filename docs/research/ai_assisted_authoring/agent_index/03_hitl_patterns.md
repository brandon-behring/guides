# Human-in-the-Loop Authoring Patterns — Synthesis

HCI research on human-LLM collaboration interfaces, multi-turn editing, and evaluation-in-the-loop tools. Source: dossier `03_hitl_patterns.md`.

---

## C1. Co-Writing Datasets & Interfaces

- **CoAuthor** — Lee, Liang, & Yang (CHI 2022).
  - **Source:** https://arxiv.org/abs/2201.06796
  - **Code:** —
  - **Mechanism:** Collects keystroke-level traces of human-LLM collaborative-writing sessions in a controlled web-based editor, releasing the dataset for downstream analysis of co-writing behaviour.
  - **Result:** Establishes the first widely-cited public dataset and methodological template for studying AI-suggestion acceptance and co-writing patterns at scale.
  - **Status:** Unverified (no widely-known repo).

- **Wordcraft** — Yuan et al. (IUI 2022).
  - **Source:** https://dl.acm.org/doi/10.1145/3490099.3511105
  - **Code:** https://github.com/PAIR-code/wordcraft
  - **Mechanism:** Interactive story-writing tool integrating LLM-based suggestions with structured affordances (continue, rewrite, fill-in, elaborate) controlled by the writer.
  - **Result:** Demonstrates structured-prompt interface patterns that became influential design vocabulary for co-writing tools; the rewrite/continue/fill-in primitives appear in many follow-on systems.
  - **Status:** Unverified.

- **Dhillon et al.** — "Shaping Human-AI Collaboration: Varied Scaffolding Levels" (CHI 2024).
  - **Source:** https://arxiv.org/abs/2402.11723
  - **Code:** —
  - **Mechanism:** User study varying the granularity of AI scaffolding (none / next-sentence / next-paragraph / outline) in a writing task and measuring effects on output and writer experience.
  - **Result:** Shows scaffolding level interacts with writer expertise and task type — lighter scaffolding helps novices, heavier scaffolding can crowd out expert voice. Reference for choosing AI-suggestion granularity.
  - **Status:** Unverified (no widely-known repo).

## C2. Multi-Variation & Evaluation-in-the-Loop Tools

- **ABScribe** — Reza et al. (CHI 2024).
  - **Source:** https://arxiv.org/abs/2310.00117
  - **Code:** https://github.com/mohireza/abscribe
  - **Mechanism:** Co-writing interface that materializes multiple LLM-generated variations as in-place alternatives the writer can compare, organize, and selectively merge.
  - **Result:** Introduces "variation" as a first-class object in the editor, moving the interaction beyond single-suggestion accept/reject and demonstrating that variation-organization affordances change how writers explore the LLM output space.
  - **Status:** Unverified.

- **EvalLM** — Kim et al. (CHI 2024).
  - **Source:** https://arxiv.org/abs/2309.13633
  - **Code:** https://github.com/kixlab/EvalLM
  - **Mechanism:** Tool letting prompt authors specify natural-language evaluation criteria and iteratively check LLM outputs against those criteria within the editing workflow.
  - **Result:** Operationalizes rubric-driven prompt iteration as a UI primitive; directly relevant to "is this chapter well-written by my rubric?" loops on top of LLM-generated content.
  - **Status:** Unverified.

---

**Notes:** Sub-section split mirrors the dossier: C1 covers data/interface foundations (datasets + canonical co-writing tools), C2 covers tools that elevate variation and criteria-driven evaluation as first-class interactions. Microsoft Copilot, Cursor, and Lex product docs deferred to second-pass /research-gather.
