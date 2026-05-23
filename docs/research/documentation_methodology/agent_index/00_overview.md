# Documentation Methodology — Overview

Navigation, framework comparison, and glossary for the documentation_methodology agent-index. Read this file first if you are new to the topic.

## Framework comparison at a glance

Three doc-classification frameworks appear in this dossier. They operate at different granularity levels and were developed in different industrial contexts.

| Framework | Granularity | Classification axis | Primary types | Originator | Year |
|---|---|---|---|---|---|
| Diátaxis | Document-level | Learning vs application × acquisition vs application | Tutorial, How-to, Reference, Explanation | Procida | Ongoing (post-2017 codification) |
| Information Mapping | Block-level | Information type of each content block | Procedure, Process, Concept, Principle, Structure, Fact, Classification | Horn | 1969–1976 origin; ongoing |
| DITA | Topic-level | XML-typed topics within a content map | Concept, Task, Reference (+ extensions) | OASIS DITA Technical Committee | 2010 (DITA 1.2 spec) |

Each framework classifies *what kind of artifact a document/block/topic is* before you start writing it, so the structure follows the artifact's purpose.

## OER (Open Educational Resources) — what's in scope

The OER literature treats educational materials as a public good with permissions and adoption studies. Two-sub-sections in this dossier cover OER:

| Sub-area | Sub-section | Focus |
|---|---|---|
| OER research | `02_oer_research.md` | Efficacy meta-analyses, the 5R framework, policy frameworks |
| OER adoption | `03_oer_adoption.md` | What makes OER actually adopted vs unused; sustainability case studies |

The 5R framework (Wiley) is the canonical permissions ladder: Retain, Reuse, Revise, Remix, Redistribute. The "Reuse" and "Retain" rights are the minimum bar for "open"; "Revise" and "Remix" enable derivative works; "Redistribute" enables downstream distribution.

## Docs-as-code — what's in scope

`04_docs_as_code.md` covers the version-controlled-documentation culture and its tooling. Core idea: treat documentation as code (PRs, CI builds, deploy previews) rather than as a separate artifact maintained outside the engineering workflow.

## Hypertext patterns — what's in scope

`05_hypertext_patterns.md` covers cross-link discipline across four traditions:

- **Evergreen notes (Matuschak)** — modern, concept-oriented, densely linked
- **Memex (Bush 1945)** — pre-web associative-linking essay
- **Zettelkasten (Luhmann tradition)** — atomic notes with unique IDs, cross-linked by association
- **Wikipedia linking** — operational community guideline for encyclopedia-scale internal links

## Glossary

Canonical term, common aliases, one-line definition, primary citation.

- **Diátaxis** (aliases: *Diataxis*): documentation-classification framework with four types — Tutorial, How-to Guide, Reference, Explanation — distinguished along learning-vs-application and acquisition-vs-application axes. (Procida, ongoing — `01_docs_framework.md` § A1)
- **Tutorial** (Diátaxis quadrant): learning-oriented documentation that takes a beginner through guided lessons; the goal is the learner's skill acquisition. (Procida, ongoing — `01_docs_framework.md` § A1)
- **How-to guide** (Diátaxis quadrant; alias: *recipe*): task-oriented documentation that walks an experienced user through accomplishing a specific goal. (Procida, ongoing — `01_docs_framework.md` § A1)
- **Reference** (Diátaxis quadrant): information-oriented documentation describing the machinery (APIs, options, parameters); accessed for lookup, not narrative reading. (Procida, ongoing — `01_docs_framework.md` § A1)
- **Explanation** (Diátaxis quadrant; alias: *discussion*, *conceptual docs*): understanding-oriented documentation discussing concepts, design rationale, and context. (Procida, ongoing — `01_docs_framework.md` § A1)
- **Information Mapping**: documentation methodology classifying *blocks* (not whole documents) into seven canonical information types — Procedure, Process, Concept, Principle, Structure, Fact, Classification. (Horn et al., ongoing — `01_docs_framework.md` § A2)
- **DITA** (Darwin Information Typing Architecture): XML-based authoring architecture with concept / task / reference topic types and content-reuse mechanisms (conrefs, DITA maps). (OASIS, 2010 — `01_docs_framework.md` § A2)
- **OER** (Open Educational Resources): educational materials released under licenses permitting some combination of the 5R rights. (UNESCO, 2019 — `02_oer_research.md` § B2)
- **5R framework** (alias: *5R permissions*): Wiley's canonical openness ladder — Retain, Reuse, Revise, Remix, Redistribute. (Wiley, n.d. — `02_oer_research.md` § B2)
- **Docs-as-code** (alias: *docs like code*, *DAC*): documentation maintained in version-controlled repositories, reviewed via PRs, built in CI, deployed continuously. (Gentle, 2017 — `04_docs_as_code.md` § D1)
- **ARID** (Write the Docs principle; *Accept some Repetition In Documentation*): documentation principle accepting that some repetition between docs is beneficial for the reader, unlike DRY in code. (Write the Docs, ongoing — `04_docs_as_code.md` § D1)
- **Evergreen notes**: concept-oriented, atomic, densely linked notes meant to be refined and compound in value over time. (Matuschak, ongoing — `05_hypertext_patterns.md` § E1)
- **Memex** (alias: *associative trails*): Bush's hypothetical 1945 desk-sized mechanical hypertext device for associatively linking documents. (Bush, 1945 — `05_hypertext_patterns.md` § E1)
- **Zettelkasten**: note-taking method developed by sociologist Niklas Luhmann — atomic notes with unique IDs cross-linked by association rather than hierarchy. (Schmidt / Zettelkasten.de, ongoing — `05_hypertext_patterns.md` § E2)

## Out of scope

This overview file intentionally omits the full per-entry detail; for that, read `01_docs_framework.md` through `05_hypertext_patterns.md`. See the README scope-boundary callout for adjacent dossiers (`ai_assisted_authoring`, `technical_book_design`).
