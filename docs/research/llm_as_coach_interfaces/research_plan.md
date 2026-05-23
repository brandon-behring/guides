# Research Plan: LLM-as-coach interfaces for technical learning

How LLM-tutor UX patterns are designed, evaluated, and deployed in educational + skill-acquisition contexts — with attention to interview-prep + technical-skills training as direct applications. Underwrites v0.2 design doc's LLM-as-coach commitment. Target: ~40-80 entries (literature is younger; depth target lower than other pedagogy dossiers).

## Sub-areas

- A1. Intelligent tutoring systems (ITS) historical foundations
  - Source types: International Journal of AI in Education, AIED proceedings, classic VanLehn/Carbonell papers
  - Notes: IN — model-tracing tutors, cognitive tutors, expert-system tutoring history. Establishes the design-space LLMs now extend. OUT — non-educational expert-system applications.

- A2. LLM tutoring evaluation studies (2023-2026)
  - Source types: arXiv, EDM / AIED / LAK proceedings, education researcher preprints
  - Notes: IN — Khan Academy Khanmigo evaluations, GPT-tutor learning-outcome studies, comparative AB-tests of LLM-tutored vs untutored learning. Fast-moving area; expect 2024-2026 papers to dominate.

- A3. Pedagogical prompt engineering + scaffolding patterns
  - Source types: AIED proceedings, arXiv, Anthropic + OpenAI educator-prompting guides
  - Notes: IN — Socratic-questioning prompts, hint-laddering, productive-failure framing for LLM tutors, error-correction patterns. OUT — generic prompt-engineering not specific to teaching.

- A4. Interactive learning interfaces (chat vs notebook vs structured exercise)
  - Source types: CHI / CSCW / Learning at Scale proceedings, ed-tech case studies
  - Notes: IN — UX patterns for LLM-tutor interfaces (free-form chat, scaffolded exercise, REPL-tutoring, code-review-style coaching). Direct interview-prep relevance.

- A5. Risks + failure modes (hallucination, sycophancy, illusion of mastery)
  - Source types: arXiv, FAccT / EAAMO proceedings, Anthropic + OpenAI safety pubs
  - Notes: IN — confabulation risk in factual tutoring, sycophancy → false-positive competence signals, dark patterns in adaptive tutoring. **Most-cited cautions; load-bearing for design doc v0.3.**

- A6. Specific deployments + their published outcomes
  - Source types: vendor blog posts (Anthropic Skills + Computer-Use case studies, OpenAI customer stories), conference talks, K-12 + higher-ed pilot reports
  - Notes: IN — Khanmigo, Duolingo Max, Github Copilot for learning, university LLM-tutor pilots. OUT — pure marketing case studies without measurable outcome data.

## Out-of-scope

- Self-assessment as a portfolio component — owned by `capstone_portfolio_assessment` dossier.
- LLM evaluation as a research methodology — sister `transfer_evaluation_methods` dossier covers transfer measurement; this one covers LLM-tutor evaluations specifically.
- LLM safety + alignment broadly — only the subset that affects tutor design.
- Non-tutor LLM applications (chat assistants, code-completion when not in a learning context).

## Claim family taxonomy

- `theory` — pedagogical theory underpinning ITS / LLM-tutor design
- `methodology` — actionable design + prompting patterns
- `evidence` — empirical outcome studies (learning gains, retention, transfer)
- `interface` — UX patterns + interface design findings
- `risk` — known failure modes + mitigation strategies
- `deployment` — case studies of in-production LLM tutors

## Known landmark papers

- `vanlehn2011relative` — VanLehn "The relative effectiveness of human tutoring, intelligent tutoring systems, and other tutoring systems" (Educational Psychologist 2011). Foundational ITS meta-analysis.
- `khanmigo_evals` — Khan Academy's published evaluations of Khanmigo (specific papers TBD via gather).
- `ouyang2023chatgpt` — Ouyang et al. ChatGPT-in-education systematic review (multiple 2023 papers — pick most-cited via gather).
