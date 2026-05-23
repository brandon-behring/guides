# Research Plan: Transfer evaluation methods for interview-prep guides

How to measure whether a pedagogical artifact (textbook, course, interview guide) actually produces **transfer** — application of learned concepts to novel problems — vs mere retention of stated facts. Target dossier: ~60-100 entries across cognitive-science, instructional-design, and educational-measurement traditions. Underwrites the v0.2 design doc's "Path D transfer" commitment.

## Sub-areas

- A1. Definitions + dimensions of transfer (near/far, surface/structural, low-road/high-road)
  - Source types: cognitive-science textbooks (Anderson, Bransford), Educational Psychologist, Journal of the Learning Sciences
  - Notes: IN — taxonomies of transfer + their empirical support. OUT — pure psychometrics without instructional implications.

- A2. Empirical evidence that transfer is hard (the canonical pessimism)
  - Source types: meta-analyses (Detterman 1993, Barnett & Ceci 2002), psychology of learning textbooks
  - Notes: IN — the "transfer is rare" canon + critiques. OUT — non-academic learning-style myths.

- A3. Conditions that promote transfer (varied practice, productive failure, contrasting cases)
  - Source types: Educational Psychologist, ICLS proceedings, Annual Review of Psychology
  - Notes: IN — Schwartz/Bransford "preparation for future learning," productive failure (Kapur), interleaved/varied practice. OUT — content-domain-specific tactics without generalizability.

- A4. Assessment instruments for transfer
  - Source types: educational-measurement journals, NRC reports, AERA standards
  - Notes: IN — far-transfer test design, performance assessment, situated assessment, capstone projects-as-assessment. OUT — single-domain standardized testing.

- A5. Transfer in technical / programming / quantitative domains
  - Source types: ICER / SIGCSE / ITiCSE, learning sciences journals applied to STEM
  - Notes: IN — programming-language transfer (does Python knowledge transfer to R?), statistical-method transfer, ML-concept transfer. Most directly relevant for interview-prep guides.

- A6. Authentic assessment + portfolio-based measurement
  - Source types: educational measurement journals, capstone-design literature, professional certification design
  - Notes: IN — portfolio rubrics, performance-based assessment, certification exam design. **Overlaps with capstone_portfolio_assessment dossier — claim "authentic assessment" lives there; this dossier cites it.**

## Out-of-scope

- Pure psychometric theory (IRT, factor analysis) without instructional design framing
- K-12-specific transfer interventions (audience here is adult interview prep, not classroom)
- Multi-language transfer in linguistics (different research family)
- Authentic assessment + portfolio rubric design — owned by `capstone_portfolio_assessment` dossier; this dossier cites that one for the assessment side and focuses on the **measurement validity** side.
- LLM-as-coach evaluation — owned by `llm_as_coach_interfaces` dossier.

## Claim family taxonomy

- `theory` — formal cognitive-science models of transfer (cognitive load, schema theory, situated cognition)
- `methodology` — actionable instructional design moves that increase transfer
- `evidence` — empirical findings (effect sizes, replication status, meta-analyses)
- `assessment` — instruments for measuring transfer
- `domain_application` — transfer findings in technical / programming / quantitative domains specifically
- `pitfall` — known failure modes (over-specification, surface-feature dependency, illusion of competence)

## Known landmark papers

- `bransford2000how` — Bransford, Brown & Cocking "How People Learn" (NAP 2000). Foundational synthesis; ch3 on transfer.
- `barnett2002when` — Barnett & Ceci "When and where do we apply what we learn? A taxonomy for far transfer" (Psych Bulletin 2002). Canonical far-transfer taxonomy.
- `detterman1993transfer` — Detterman "The case for the prosecution: Transfer as an epiphenomenon" (in Detterman & Sternberg 1993). The pessimistic canon.
- `schwartz2005efficiency` — Schwartz, Bransford & Sears "Efficiency and innovation in transfer" (in Mestre 2005). "Preparation for future learning" framework.
- `kapur2008productive` — Kapur "Productive failure" (Cognition and Instruction 2008). Counterintuitive transfer-promoting condition.
