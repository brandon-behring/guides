# Overview — Interview-Prep Pedagogy

This folder synthesizes 19 sources at the intersection of (1) high-stakes credentialing test-prep methodology (CFA / SOA / USMLE), (2) the peer-reviewed empirical literature on technical interviews (Behroozi / Ford / Parnin), and (3) classical expert problem-solving theory (Pólya / Schoenfeld). The synthesis is designed to ground design decisions in mock-interview integration, drill cadence, problem-difficulty progression, the cards-vs-problems-vs-vignettes tradeoff, and the verbalization callouts in interview-prep guide style.

## Three traditions in one folder

The literature here comes from three distinct academic and practitioner traditions that rarely co-cite:

1. **Educational measurement + applied learning science.** Dunlosky et al. (2013) and Roediger & Karpicke (2006) on retrieval practice and the testing effect. Wothe et al. (2023) applies this within high-stakes credentialing (USMLE-track medical school using Anki). Industry credentialing-prep resources (CFA pass-rate trackers, SOA-exam guides, USMLE high-yield curation) operationalize the same principles in vendor form, but without the academic citations.

2. **Empirical software-engineering on technical interviews.** The Behroozi-Ford-Parnin cluster at NC State has produced the bulk of peer-reviewed evidence on what whiteboard / technical interview formats actually measure (Behroozi 2018, 2019, 2020; Ford 2017). The 2020 stress paper is the headline result.

3. **Classical problem-solving theory.** Pólya (1945) and Schoenfeld (1985) anchor the conceptual framework for what expert problem-solving looks like. Soloway & Spohrer (1989) provides the CS-education empirical bridge. McDowell (2015) is the industry-canon practitioner book that downstream tech-interview prep is built around.

Mock-practice methodology (`05_mock_practice.md`) and signaling / communication (`06_signaling_communication.md`) round out the synthesis with industrial-organizational psychology (Janz 1986, McDaniel 1994), verbal-protocol methodology (Ericsson & Simon 1993), and practitioner-facing FAANG-leveling references.

## Glossary

- **CFA Level structure** — Three-level Chartered Financial Analyst credentialing exam sequence (Level I, II, III). Levels II and III rely heavily on the **vignette** format: multi-question scenarios with embedded data tables.
- **SOA exam path** — Society of Actuaries multi-exam credentialing ladder (P, FM, FAM, ALTAM, ASTAM, etc.) where candidates spend months per exam.
- **USMLE Step 1 high-yield** — Practitioner shorthand for the curated subset of medical content disproportionately tested on USMLE Step 1; foundation of First Aid + UWorld study programs.
- **FAANG L4 / L5 / L6** — Engineering-ladder rungs roughly corresponding to mid-IC (L4), senior IC (L5), and staff IC (L6) at Facebook/Google/Amazon/Netflix companies; rubrics vary across companies but the level granularity is similar.
- **Pólya 4-step heuristic** — Understand the problem → devise a plan → carry out the plan → look back. Ancestor to the clarify-then-plan-then-code-then-verify framework in CS-interview prep.
- **Deliberate practice** — Anders Ericsson's framework for skill acquisition through structured, feedback-rich practice on specific weakness areas; not present as a primary entry in this dossier but downstream of Ericsson & Simon's protocol-analysis methodology.
- **Behavior-description interviewing (BDI)** — Janz (1986) structured-interview methodology in which candidates recount specific past behaviors; intellectual ancestor of STAR (Situation-Task-Action-Result).
- **Tech-talk balance** — Ford et al. (2017) construct describing the interactive technical communication dimension that interviewers assess, distinct from raw solution correctness.
- **Retrieval practice / testing effect** — Robust experimental finding (Roediger & Karpicke 2006; Dunlosky et al. 2013) that practice-testing memory strengthens retention more than restudy.
- **Spaced repetition (SR)** — Practice scheduling that places repetitions at expanding intervals tuned to forgetting curves; operationalized in SuperMemo, Anki (SM-2, FSRS), and modern flashcard software.
- **Whiteboard interview format** — Live coding-interview format in which candidates write code on a physical or virtual whiteboard with an observer present; subject of the Behroozi 2020 stress study.
- **Structured interview** — Employment-interview format with predetermined questions and consistent rubric scoring across candidates; meta-analytically more valid than unstructured interviews (McDaniel et al. 1994).
- **Cracking the Coding Interview (CTCI)** — McDowell (2015) self-published practitioner book that defined the dominant pattern taxonomy contemporary tech-interview prep is built around.
- **Tech Interview Handbook** — Open-source handbook (yangshun/tech-interview-handbook, MIT license) covering technical and behavioral interview rubrics at top tech companies.
