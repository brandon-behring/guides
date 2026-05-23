# Style-Guide Enforcement & Constraint-Based Generation

This file covers methods for getting LLMs to conform to style guides and behavioural constraints — prompt-based scaffolding, constitutional principles, RLHF/instruction tuning, and tool-augmented generation. Human-in-the-loop interfaces live in `03_hitl_patterns.md`; multi-agent debate / critique workflows live in `05_multiagent_workflow.md`.

---

## D1. Constitutional & RLHF Approaches

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Constitutional AI: Harmlessness from AI Feedback | Bai et al. (2022) | arXiv preprint | arXiv:2212.08073 | — | Trains a model to critique and revise its own outputs against a written constitution of principles, then uses those revisions as feedback for RL training | Canonical "principles-encoded-as-prompt-plus-RL" recipe; introduces RLAIF (RL from AI Feedback) and the constitutional-critique pattern referenced by later style-conforming systems |
| Training language models to follow instructions with human feedback | Ouyang et al. (2022) | NeurIPS 2022 | arXiv:2203.02155 | — | Fine-tunes GPT-3 via supervised demonstrations then RL from human preference feedback to produce InstructGPT | Foundational RLHF instruction-tuning paper; the load-bearing reference for "how do we get an LLM to follow stylistic instructions reliably?" |

## D2. Prompting & Reasoning Scaffolds

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Chain-of-Thought Prompting Elicits Reasoning in Large Language Models | Wei et al. (2022) | NeurIPS 2022 | arXiv:2201.11903 | — | Shows that prompting LLMs with worked reasoning steps improves performance on arithmetic, commonsense, and symbolic reasoning benchmarks | Establishes chain-of-thought as a generic prompting primitive; directly underpins outline-then-draft style scaffolds in writing workflows |
| The Prompt Report: A Systematic Survey of Prompting Techniques | Schulhoff et al. (2024) | arXiv preprint | arXiv:2406.06608 | — | Systematic survey cataloguing prompting techniques across the literature with a unified taxonomy | Provides the reference taxonomy practitioners cite when describing prompt-based style-constraint approaches (few-shot, role, chain-of-thought, decomposition, etc.) |

## D3. Tool-Augmented Generation

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Toolformer: Language Models Can Teach Themselves to Use Tools | Schick et al. (2023) | NeurIPS 2023 | arXiv:2302.04761 | — | Trains an LLM to decide when to call external APIs (calculator, search, translation) by self-supervised augmentation of training data with tool-call annotations | Foundational reference for tool-augmented generation; relevant to style constraints that require external lookups (citation verification, fact-checking, glossary adherence) |

---

**Notes:** Sub-section split mirrors the three main constraint-enforcement strategies (training-time RLHF / inference-time prompting / tool-augmented). OpenAI Model Spec, Google DeepMind alignment work, and style-transfer-for-text references in the research_plan are deferred to second-pass /research-gather.
