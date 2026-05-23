# Research Plan: Multi-paradigm presentation + UDL (Universal Design for Learning)

How content can be presented across multiple paradigms (visual/symbolic/code/prose; theory-first/practice-first; deductive/inductive) to serve readers with different cognitive styles + accessibility needs. Backs the v0.2 design doc's Dim 7 "paradigms" frontmatter field commitment + the scaffold v3.6.0+ UDL variant blocker. Target: ~60-100 entries across UDL, multimedia learning, accessibility, and dual-coding theory.

## Sub-areas

- A1. Universal Design for Learning (UDL) framework
  - Source types: CAST UDL guidelines, Educational Researcher, AERA Handbook on UDL
  - Notes: IN — the 3-principle UDL framework (engagement / representation / action+expression), guideline checkpoints. OUT — UDL implementation rubrics for K-12 classrooms (different operationalization).

- A2. Multimedia learning + cognitive load (Mayer's principles)
  - Source types: Cambridge Handbook of Multimedia Learning, Educational Psychology Review, Mayer + Sweller papers
  - Notes: IN — coherence + modality + redundancy + segmenting + pre-training principles. Underwrites code-vs-prose presentation choices. **Some overlap with `learning_pedagogy` dossier (cognitive load entries) — cross-cite, don't duplicate.**

- A3. Dual-coding theory + visual-symbolic-verbal coordination
  - Source types: Paivio's dual-coding work, Educational Psychology Review, Journal of Educational Psychology
  - Notes: IN — Paivio dual-coding, picture-superiority effect, code-vs-text integration in technical writing. OUT — neuroimaging-level mechanisms.

- A4. Accessibility paradigms (screen readers, dyslexia-friendly typography, colorblind-safe palettes)
  - Source types: WCAG 2.1+ standards, ACM ASSETS proceedings, web accessibility literature
  - Notes: IN — accessibility as a design constraint for technical content. OUT — disability-rights policy.

- A5. Theory-first vs practice-first sequencing
  - Source types: Educational Psychologist, ICLS proceedings, math-education literature on contrasting cases
  - Notes: IN — deductive vs inductive sequencing tradeoffs, "concrete-representational-abstract" CRA progression, productive-struggle ordering. **Overlap with `transfer_evaluation_methods` dossier on contrasting cases — cross-cite.**

- A6. Code-first vs prose-first technical exposition
  - Source types: SIGCSE/ICER proceedings, technical writing literature, programming-language pedagogy
  - Notes: IN — when to lead with code vs lead with explanation, executable-documentation patterns (Jupyter notebooks, REPL-driven teaching). Most directly load-bearing for interview-prep guide design.

## Out-of-scope

- K-12-classroom UDL implementation (different operationalization)
- Disability-rights policy or compliance law (we care about presentation, not regulation)
- Neuroimaging-level cognitive mechanisms
- Cognitive load (basic) — covered in sister `learning_pedagogy` dossier; cite, don't duplicate.

## Claim family taxonomy

- `theory` — formal UDL / dual-coding / cognitive-load models
- `principle` — actionable multimedia-learning principles (Mayer et al.)
- `accessibility` — accessibility-as-paradigm + WCAG-grounded design choices
- `evidence` — empirical research on paradigm-switching effects
- `domain_application` — technical-content + code-vs-prose specific findings
- `tooling` — tools for multi-paradigm authoring (e.g., MDX components, Jupyter, observable notebooks)

## Known landmark papers

- `mayer2014cambridge` — Mayer (ed.) "Cambridge Handbook of Multimedia Learning" (2nd ed., 2014). Canonical reference.
- `cast2018udl` — CAST "Universal Design for Learning Guidelines version 2.2" (CAST 2018). Field-defining framework.
- `paivio1991dual` — Paivio "Dual coding theory: Retrospect and current status" (Canadian J. Psychology 1991). Dual-coding canon.
