# Style-Guide Enforcement & Constraint-Based Generation — Synthesis

Methods for getting LLMs to conform to style guides and behavioural constraints. Source: dossier `04_style_constraint.md`.

---

## D1. Constitutional & RLHF Approaches

- **Constitutional AI** — Bai et al. (Anthropic, arXiv 2022).
  - **Source:** https://arxiv.org/abs/2212.08073
  - **Code:** —
  - **Mechanism:** Trains a model to critique and revise its own outputs against a written constitution of principles, then uses those AI-generated revisions as preference data for RL training (RL from AI Feedback).
  - **Result:** Canonical "principles-encoded-as-prompt-plus-RL" recipe; introduces RLAIF and the constitutional-critique pattern that later style-conforming systems reference when describing how to bake a style guide into model behaviour at training time.
  - **Status:** Unverified (no widely-known repo).

- **InstructGPT** — Ouyang et al. (NeurIPS 2022).
  - **Source:** https://arxiv.org/abs/2203.02155
  - **Code:** —
  - **Mechanism:** Fine-tunes a base LM via supervised demonstrations of preferred behaviour then performs RL from human preference feedback (RLHF) over pairs of model outputs.
  - **Result:** Foundational RLHF instruction-tuning paper and the load-bearing reference for "how do we get an LLM to follow stylistic instructions reliably?" Establishes the supervised-then-preference-RL recipe replicated across the industry.
  - **Status:** Unverified (no widely-known repo).

## D2. Prompting & Reasoning Scaffolds

- **Chain-of-Thought Prompting** — Wei et al. (NeurIPS 2022).
  - **Source:** https://arxiv.org/abs/2201.11903
  - **Code:** —
  - **Mechanism:** Adds worked reasoning-step demonstrations to few-shot prompts so that the model emits intermediate reasoning before its answer on multi-step tasks.
  - **Result:** Establishes chain-of-thought as a generic prompting primitive; directly underpins outline-then-draft style scaffolds in writing workflows where staged reasoning improves output structure.
  - **Status:** Unverified (no widely-known repo).

- **The Prompt Report** — Schulhoff et al. (arXiv 2024).
  - **Source:** https://arxiv.org/abs/2406.06608
  - **Code:** —
  - **Mechanism:** Systematic survey cataloguing prompting techniques across the literature with a unified taxonomy (few-shot, role, chain-of-thought, decomposition, ensembling, self-criticism, etc.).
  - **Result:** Provides the reference taxonomy practitioners cite when naming prompt-based style-constraint approaches; used as the lookup index for "which prompting technique applies to this style problem?"
  - **Status:** Unverified (no widely-known repo).

## D3. Tool-Augmented Generation

- **Toolformer** — Schick et al. (NeurIPS 2023).
  - **Source:** https://arxiv.org/abs/2302.04761
  - **Code:** —
  - **Mechanism:** Self-supervised augmentation of training data with tool-call annotations (calculator, search, translation) so the model learns when to invoke external APIs at inference time.
  - **Result:** Foundational reference for tool-augmented generation; relevant to style constraints that require external lookups — citation verification, fact-checking, glossary adherence — where the constraint cannot be satisfied from model parameters alone.
  - **Status:** Unverified (no widely-known repo).

---

**Notes:** Sub-section split distinguishes training-time constraint-baking (D1), inference-time prompting scaffolds (D2), and tool-augmentation for external-lookup constraints (D3). OpenAI Model Spec, DeepMind alignment work, and text-style-transfer literature deferred to second-pass /research-gather.
