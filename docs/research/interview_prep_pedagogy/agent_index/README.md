<!-- AGENT-INDEX: this folder is a self-contained reference for interview-prep pedagogy at the intersection of credentialing test-prep, empirical interview research, and classical problem-solving theory. 19 entries across 6 topic files. Read this README first. -->

# Interview-Prep Pedagogy — Research Synthesis

**Purpose:** synthesize the literature at the intersection of (1) high-stakes credentialing test-prep methodology (CFA / SOA / USMLE), (2) peer-reviewed empirical research on technical interviews (Behroozi / Ford / Parnin), and (3) classical expert problem-solving theory (Pólya / Schoenfeld) — feeding decisions on mock-interview integration, drill cadence, problem-difficulty progression, the cards-vs-problems-vs-vignettes tradeoff, and verbalization callouts in the interview-prep guide style. Designed for dual consumption — humans (reading directly) and future LLM agents (grounding reasoning in this literature).
**Primary intended consumer:** future Claude Code / LLM agents working on `interview_prep_series` content, deck design, drill skills, and guide style decisions who need pedagogy-side grounding. Secondary consumers: humans reading directly to inform design choices.
**Self-containedness guarantee:** this folder has no hard dependence on sibling research folders. Move it elsewhere and it still works.
**Scope:** 1945 (Pólya) through 2026 (industry-resource pages); 19 entries across high-stakes credentialing, empirical interview research, spaced-repetition application, problem-solving theory, mock-practice methodology, and FAANG-signaling references.
**Coverage:** 19 entries across 6 topic files plus `00_overview.md`; structured 5-bullet entries (Source / Code-or-Status / Mechanism / Result / Status).
**Last updated:** 2026-05-19.

## ⚠️ Scope boundary

This folder is **not** a general learning-pedagogy reference. For base learning science (cognitive load theory, multimedia learning, instructional design beyond credentialing applications), see the adjacent `../learning_pedagogy/` dossier — that folder covers the broader pedagogical foundations, while this one focuses specifically on the credentialing / interview-prep application layer.

This folder is **not** a reference on LLM-assisted authoring or mock-interview tooling. For literature on AI-assisted writing efficacy, disclosure norms, and human-in-the-loop interface patterns relevant to AI-assisted interview prep, see the adjacent `../ai_assisted_authoring/` dossier — that folder covers LLM authoring tooling, while this one covers the human-pedagogy side of interview preparation.

Out-of-scope (per the source research plan): general job-search strategy (resume / LinkedIn / networking / negotiation), bootcamp curriculum design, clinical anxiety as a therapeutic question, whiteboard/IDE engineering, industry-specific interviewing outside DS/MLE/AI-Eng, recruiting-process design (the hiring-side vs prep-side), the debunked "learning styles" hypothesis, generic test-anxiety pop-psychology, and speculation on private company rubrics.

**Cross-vol overlap convention:** Wothe et al. (2023) and Dunlosky et al. (2013) appear in this dossier because they sit in the credentialing-application layer. Foundational base-learning-science citations (Sweller cognitive-load primary papers, Mayer multimedia-learning primary papers, etc.) live in `../learning_pedagogy/`, not here, to avoid duplication.

## How this is organized

Sub-section anchors use a per-file letter prefix (`## A1.` in file 01, `## B1.` in file 02, etc.). Lookup recipes below reference these anchors.

| File | Topic | When to read |
|---|---|---|
| `00_overview.md` | Three-traditions overview + glossary | Start here if new to interview-prep pedagogy as a research area |
| `01_highstakes_testprep.md` | CFA / SOA / USMLE industry-prep resources (A1) | When designing study-cadence or pass-rate calibration arguments |
| `02_interview_research.md` | Empirical SE research on technical interviews (B1, B2) | When evaluating the whiteboard format or what tech-talk dimensions interviewers test |
| `03_spaced_repetition_credentialing.md` | Dunlosky / Roediger / Wothe — testing effect + Anki in med school (C1, C2) | When designing card-deck cadence and spaced-repetition arguments |
| `04_expert_problemsolving.md` | Pólya / Schoenfeld / Soloway / McDowell (D1, D2) | When discussing problem-solving heuristics, metacognition, or industry-canon pattern taxonomy |
| `05_mock_practice.md` | Janz BDI / McDaniel meta-analysis / Ericsson & Simon (E1, E2, E3) | When designing mock-interview protocols or verbalization callouts |
| `06_signaling_communication.md` | FAANG leveling + behavioral rubrics (F1) | When making L4-vs-L5 senior-signal claims or behavioral-rubric calibration |

## Lookup recipes

Routes by question type. Each points to a specific file and section anchor.

- **"What's the empirical evidence that whiteboarding depresses performance?"** → `02_interview_research.md` § B1 (Behroozi et al. 2020, *Does Stress Impact Technical Interview Performance?*).
- **"What's the cognitive-load instrumentation for whiteboard interviews?"** → `02_interview_research.md` § B1 (Behroozi et al. 2018, *Dazed*).
- **"What do interviewers actually expect during the tech-talk part of an interview?"** → `02_interview_research.md` § B2 (Ford et al. 2017, *Tech-Talk Balance*).
- **"What do developers say about technical interviews?"** → `02_interview_research.md` § B2 (Behroozi, Parnin & Barik 2019, *Hiring is Broken*).
- **"What's the foundational paper on retrieval practice and the testing effect?"** → `03_spaced_repetition_credentialing.md` § C1 (Roediger & Karpicke 2006; Dunlosky et al. 2013).
- **"What's the evidence that Anki works for high-stakes credentialing?"** → `03_spaced_repetition_credentialing.md` § C2 (Wothe et al. 2023, *Anki in Medical School*).
- **"What's the academic ancestor of the clarify-plan-code-verify framework?"** → `04_expert_problemsolving.md` § D1 (Pólya 1945, *How to Solve It*).
- **"Why does metacognition matter in problem solving?"** → `04_expert_problemsolving.md` § D1 (Schoenfeld 1985, *Mathematical Problem Solving*).
- **"What's the empirical basis for chunking in code pattern recognition?"** → `04_expert_problemsolving.md` § D2 (Soloway & Spohrer 1989, *Studying the Novice Programmer*).
- **"Where does the dominant tech-interview pattern taxonomy come from?"** → `04_expert_problemsolving.md` § D2 (McDowell 2015, *Cracking the Coding Interview*).
- **"What's the academic ancestor of the STAR format?"** → `05_mock_practice.md` § E1 (Janz, Hellervik & Gilmore 1986, *Behavior Description Interviewing*).
- **"What's the meta-analytic evidence on employment-interview validity?"** → `05_mock_practice.md` § E2 (McDaniel et al. 1994).
- **"What's the methodological foundation for think-aloud / verbalize-while-solving?"** → `05_mock_practice.md` § E3 (Ericsson & Simon 1993, *Protocol Analysis*).
- **"Where can I look up CFA pass rates?"** → `01_highstakes_testprep.md` § A1 (300Hours CFA pass-rate tracker).
- **"What's the multi-exam structure of the SOA actuarial path?"** → `01_highstakes_testprep.md` § A1 (Coaching Actuaries SOA exam path guide).
- **"What's the USMLE Step 1 high-yield curation approach?"** → `01_highstakes_testprep.md` § A1 (The Match Guy high-yield topics).
- **"What's the FAANG L5-vs-L4 signal difference?"** → `06_signaling_communication.md` § F1 (Apt FAANG levels explained).
- **"How are behavioral interviews evaluated at top tech companies?"** → `06_signaling_communication.md` § F1 (Tech Interview Handbook behavioral rubrics).
- **"What's the difference between structured and unstructured employment interviews?"** → `05_mock_practice.md` § E2 (McDaniel et al. 1994 meta-analysis).
- **"What is the testing effect?"** → `00_overview.md` § Glossary; `03_spaced_repetition_credentialing.md` § C1.
- **"What is STAR / behavior-description interviewing?"** → `00_overview.md` § Glossary; `05_mock_practice.md` § E1.

## Glossary

The full glossary lives in `00_overview.md`. The most-referenced terms:

- **Pólya 4-step heuristic** — Understand the problem → devise a plan → carry out the plan → look back. Pólya 1945. Ancestor to the clarify-then-plan-then-code-then-verify framework in CS-interview prep.
- **Testing effect / retrieval practice** — Practice-testing memory strengthens retention more than restudy. Roediger & Karpicke 2006; Dunlosky et al. 2013.
- **STAR / behavior-description interviewing (BDI)** — Janz, Hellervik & Gilmore 1986. Structured-interview methodology asking candidates to recount specific past behaviors.
- **Whiteboard interview format** — Live coding-interview with observer present; subject of Behroozi 2020 stress study.
- **Structured interview** — Predetermined questions and consistent rubric scoring; meta-analytically more valid than unstructured (McDaniel et al. 1994).
- **CFA vignette format** — Multi-question scenarios with embedded data tables (Levels II / III); direct model for guide vignette design.
- **USMLE high-yield curation** — Selecting heavily-tested content over comprehensive coverage; First Aid + UWorld approach.
- **FAANG L4 / L5 / L6** — Mid-IC / senior-IC / staff-IC engineering-ladder rungs at top tech companies.
- **Tech-talk balance** — Ford et al. 2017 construct: interactive technical communication is assessed distinct from solution correctness.

## Verification & limits

- Citations resolved as of 2026-05-19.
- All 19 entries are status `Unverified` per the /research-gather first-pass protocol; promotion to `Verified` would happen in a future `/dossier-audit` round that independently checks claims against primary sources.
- Quantitative claims (effect sizes, pass-rate percentages, meta-analytic d-values) are deliberately rendered as qualitative descriptions; specific numbers cited inline are flagged `(unverified body claim)` per the "no LLM-generated specifics" rule in `~/Claude/research_toolkit/references/citation_rules.md`.
- Industry-resource entries (300Hours, Coaching Actuaries, The Match Guy, tryapt.ai, Tech Interview Handbook) are vendor / community-maintained pages; specific factual claims should be re-verified against primary exam-vendor or company-level publications before being asserted in synthesis material.
- This synthesis is a snapshot. Industry-resource pages may be updated quarterly; academic citations (Pólya, Schoenfeld, Janz, McDaniel, Ericsson & Simon) are stable.

## Attribution

Synthesized from the `bib_ledger.yml` and `research_plan.md` in the parent `interview_prep_pedagogy/` directory, using the `/dossier-build` and `/agent-index` skills from `~/Claude/research_toolkit/`. URLs link to primary sources (arXiv, DOI, vendor pages, GitHub). No local file paths are referenced.
