# Pedagogical prompt engineering + scaffolding patterns

Sub-area `A3` of the Research Plan: LLM-as-coach interfaces for technical learning dossier. 6 entries.

## A3.1 Anthropic and Teach For All launch global AI training initiative for educators

- **Anthropic and Teach For All launch global AI training initiative for educators** — Anthropic (2025); *Anthropic (vendor, 2025)*. [interface]
  - **Source:** https://www.anthropic.com/news/anthropic-teach-for-all
  - **Code:** —
  - **Mechanism:** Describes Claude Learning Mode, which employs the Socratic method, prompting users with exploratory questions (How would you approach this problem?) rather than delivering direct answers, alongside an educator AI-fluency training series.
  - **Result:** Vendor educator-prompting guidance for a Socratic, answer-withholding tutoring style.
  - **Status:** Unverified
  - **Evidence:** ev_llm_as_coach_interfaces_0030

## A3.2 SocraticLM: Exploring Socratic Personalized Teaching with Large Language Models

- **SocraticLM: Exploring Socratic Personalized Teaching with Large Language Models** — Liu et al. (2024); *NeurIPS 2024 (Spotlight)*. [methodology]
  - **Source:** https://proceedings.neurips.cc/paper_files/paper/2024/hash/9bae399d1f34b8650351c1bd3692aeae-Abstract-Conference.html
  - **Code:** —
  - **Mechanism:** Proposes a Socratic Thought-Provoking teaching paradigm to replace the passive Question-Answering paradigm, built via a Dean-Teacher-Student multi-agent pipeline producing the 35K-dialogue SocraTeach dataset grounded in math problems.
  - **Result:** Primary source for training/prompting LLMs toward Socratic questioning instead of direct answers.
  - **Status:** Unverified
  - **Evidence:** ev_llm_as_coach_interfaces_0028

## A3.3 MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors

- **MathTutorBench: A Benchmark for Measuring Open-ended Pedagogical Capabilities of LLM Tutors** — Macina et al. (2025); *EMNLP 2025*. [methodology]
  - **Source:** https://arxiv.org/abs/2502.18940
  - **Code:** —
  - **Mechanism:** A benchmark evaluating LLM tutors across teacher skills including scaffolding generation and pedagogical instruction-following; its reward model contrasts effective vs.
  - **Result:** less-effective utterances by whether they offer structured questions/hints instead of giving away the answer.
  - **Status:** Unverified
  - **Evidence:** ev_llm_as_coach_interfaces_0027

## A3.4 Introducing study mode

- **Introducing study mode** — OpenAI (2025); *OpenAI (vendor, 2025)*. [interface]
  - **Source:** https://openai.com/index/chatgpt-study-mode/
  - **Code:** —
  - **Mechanism:** Study mode guides students with questions, scaffolding, and feedback instead of giving answers outright, designed with educators and cognitive scientists across 40+ institutions to support active questioning and scaffolded support.
  - **Result:** Vendor educator-facing pedagogical-prompting reference for scaffolded, hint-first tutoring.
  - **Status:** Unverified
  - **Evidence:** ev_llm_as_coach_interfaces_0031

## A3.5 Towards the Pedagogical Steering of Large Language Models for Tutoring: A Case Study with Modeling Productive Failure

- **Towards the Pedagogical Steering of Large Language Models for Tutoring: A Case Study with Modeling Productive Failure** — Puech et al. (2024); *Findings of ACL 2025 (arXiv Oct 2024)*. [methodology]
  - **Source:** https://arxiv.org/abs/2410.03781
  - **Code:** —
  - **Mechanism:** Introduces StratL, an algorithm to optimize LLM prompts and steer the model to follow a predefined multi-turn tutoring plan represented as a transition graph; validated in a field study with 17 high-school students following a Productive Failure design.
  - **Result:** Canonical worked example of prompting an LLM tutor to enact productive-failure scaffolding rather than answer-giving.
  - **Status:** Unverified
  - **Evidence:** ev_llm_as_coach_interfaces_0026

## A3.6 Boosting Large Language Models with Socratic Method for Conversational Mathematics Teaching

- **Boosting Large Language Models with Socratic Method for Conversational Mathematics Teaching** — Shi et al. (2024); *CIKM 2024*. [methodology]
  - **Source:** https://dl.acm.org/doi/10.1145/3627673.3679881
  - **Code:** —
  - **Mechanism:** Builds a knowledge-enhanced Socratic teaching LLM that tutors step-by-step via a review-heuristic-rectify-summarize structure, paired with the human-annotated SocraticMATH dialogue dataset over 513 primary-school math knowledge points.
  - **Result:** Provides an explicit Socratic hint-laddering structure (review/heuristic/rectify/summarize) for math tutoring prompts.
  - **Status:** Unverified
  - **Evidence:** ev_llm_as_coach_interfaces_0029
