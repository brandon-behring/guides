# Documentation Methodology — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for documentation_methodology. Read this README first. -->

**Purpose:** Reference synthesis on technical-documentation organization (Diátaxis, Information Mapping, DITA), Open Educational Resources research and adoption, docs-as-code culture and tooling, and hypertext / cross-link patterns — feeding the public-guides repo's style guide v0.0 with conventions for chapter classification, attribution and remix policy, contribution-flow design, and cross-link discipline. Designed for dual consumption — humans (reading directly) and future LLM agents (grounding reasoning in this literature).
**Primary intended consumer:** future Claude Code / LLM agents working in the public-guides repo (or adjacent OER / documentation projects) who need detailed context on documentation_methodology. Secondary consumers: humans reading the material directly.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself. Move it elsewhere and it still works.
**Scope:** First-pass gather covering five sub-areas — A1 docs frameworks, A2 OER research, A3 OER adoption, A4 docs-as-code, A5 hypertext patterns. Sources span 1945 (Bush Memex) through 2022 (Hewlett retrospective); most are ongoing community projects, frameworks, or websites.
**Coverage:** 22 entries across 5 topic files + 1 overview file; structured 5-bullet entries (Source / Code / Mechanism / Result / Status for paper-style, Source / Status / Mechanism / Integration for framework/website/standards entries).
**Last updated:** 2026-05-19.

## Scope boundary

This folder covers the **organization layer** of technical documentation — how a system of guides is classified, attributed, remixed, version-controlled, and cross-linked. It does NOT cover:

- **Book-form authoring craft** (page-level prose, chapter-shape decisions for narrative books) — see the adjacent `technical_book_design` dossier (sibling folder under `docs/research/`).
- **AI-assisted authoring workflows** (prompting techniques, AI-disclosure conventions, hallucination mitigation in technical writing) — see the adjacent `ai_assisted_authoring` dossier.
- **Pedagogy and learning science** (spaced repetition, retrieval practice, Bloom's taxonomy) — covered in the `learning_pedagogy` dossier and in the existing `los-standards.md` / `card-taxonomy.md` rules.
- **API-reference documentation standards** (OpenAPI, Doxygen, Javadoc) — different artifact type, intentionally out-of-scope per `research_plan.md`.
- **Wiki / company-internal-knowledge-base architecture** (MediaWiki implementation, Notion, Confluence) — different audience and incentive structure.
- **Documentation-tooling vendor-specific configuration** (RTD vs MkDocs vs Quarto vs Astro Starlight setup) — Astro is already chosen for the public-guides repo.

**Cross-vol overlap convention:** when an entry is methodologically relevant to multiple research dossiers (e.g., evergreen-notes touches both documentation_methodology and learning_pedagogy), pick ONE primary location based on claim_family and reference adjacency in this scope-boundary callout. Do NOT duplicate entries across dossiers — the duplicate-detection rule lives here, not in the synthesis files.

## How this is organized

Sub-section anchors use a per-file letter prefix (`## A1.` in file 01, `## B1.` in file 02, etc.) — see the dossier's section-anchor convention for the full table. Lookup recipes in this README reference these anchors.

| File | Topic | When to read |
|---|---|---|
| `00_overview.md` | Framework comparison + glossary + scope sub-overview | Start here if new to the topic |
| `01_docs_framework.md` | Diátaxis, Information Mapping, DITA (anchors A1, A2) | Picking a doc-type classification framework |
| `02_oer_research.md` | OER efficacy meta-analyses + 5R framework + policy (anchors B1, B2) | Understanding OER literature and the 5R permissions ladder |
| `03_oer_adoption.md` | OER adoption surveys + sustainability case studies (anchors C1, C2) | Setting realistic adoption expectations + sustainability design |
| `04_docs_as_code.md` | Docs-as-code culture + Read the Docs / Sphinx / MDN (anchors D1, D2) | Setting up the public-guides contribution model |
| `05_hypertext_patterns.md` | Evergreen notes + Memex + Zettelkasten + Wikipedia linking (anchors E1, E2, E3) | Designing cross-guide reference discipline |

## Lookup recipes

Routes by question type. Each points to a specific file and section anchor.

- **"What is Diátaxis?"** → `00_overview.md` § Glossary + `01_docs_framework.md` § A1 (Procida, ongoing).
- **"What are the four Diátaxis quadrants?"** → `00_overview.md` § Glossary (Tutorial / How-to / Reference / Explanation) + `01_docs_framework.md` § A1.
- **"How does Diátaxis relate to Information Mapping?"** → `00_overview.md` § Framework comparison at a glance (granularity difference: document-level vs block-level).
- **"What is DITA and when would I use it?"** → `01_docs_framework.md` § A2 (OASIS, 2010; XML topic types: Concept / Task / Reference).
- **"What is the 5R framework?"** → `00_overview.md` § Glossary + `02_oer_research.md` § B2 (Wiley — Retain, Reuse, Revise, Remix, Redistribute).
- **"Is there evidence that OER works pedagogically?"** → `02_oer_research.md` § B1 (Hilton 2016 + Hilton 2020 meta-analyses).
- **"What does UNESCO say about OER?"** → `02_oer_research.md` § B2 (UNESCO 2019 Recommendation).
- **"What makes an OER actually get adopted?"** → `03_oer_adoption.md` § C1 (Pitt et al. 2017 + Jhangiani et al. 2018 surveys).
- **"How do open-textbook platforms stay sustainable?"** → `03_oer_adoption.md` § C2 (Pressbooks case study).
- **"What is docs-as-code?"** → `00_overview.md` § Glossary + `04_docs_as_code.md` § D1 (Gentle 2017).
- **"What is ARID and how does it differ from DRY?"** → `00_overview.md` § Glossary + `04_docs_as_code.md` § D1 (Write the Docs principle: Accept some Repetition In Documentation).
- **"Where do I host a Sphinx documentation site?"** → `04_docs_as_code.md` § D2 (Read the Docs).
- **"What style guide should I model my style guide on?"** → `04_docs_as_code.md` § D2 (MDN Writing style guide).
- **"What are evergreen notes?"** → `00_overview.md` § Glossary + `05_hypertext_patterns.md` § E1 (Matuschak).
- **"What's the Memex?"** → `05_hypertext_patterns.md` § E1 (Bush 1945, *The Atlantic*).
- **"What is the Zettelkasten method?"** → `05_hypertext_patterns.md` § E2 (Schmidt / Zettelkasten.de + Ahrens 2017).
- **"How does Wikipedia decide when to link internally?"** → `05_hypertext_patterns.md` § E3 (Wikipedia Manual of Style/Linking — link on first mention).
- **"Which doc-classification framework should the public-guides repo adopt?"** → `00_overview.md` § Framework comparison at a glance + `01_docs_framework.md` § A1 (Diátaxis at document level + Information Mapping discipline within blocks).
- **"What permissions should the public-guides repo grant?"** → `02_oer_research.md` § B2 (5R framework; CC BY 4.0 grants all 5Rs with attribution).
- **"How should cross-guide links be placed?"** → `05_hypertext_patterns.md` § E1 + E3 (evergreen-notes density + Wikipedia first-mention convention).

## Glossary

Canonical term + aliases + one-line definition. Full version lives in `00_overview.md` § Glossary. Key terms reproduced here for fast lookup:

- **Diátaxis** (alias: *Diataxis*): four-quadrant documentation framework (Tutorial / How-to / Reference / Explanation). (Procida — `01_docs_framework.md` § A1)
- **Information Mapping**: block-level documentation classification by Horn (seven info-types). (Horn — `01_docs_framework.md` § A2)
- **DITA**: XML topic-typed authoring architecture (Concept / Task / Reference + extensions). (OASIS 2010 — `01_docs_framework.md` § A2)
- **OER** (Open Educational Resources): educational materials released under licenses permitting some combination of the 5R rights. (UNESCO — `02_oer_research.md` § B2)
- **5R framework**: Retain, Reuse, Revise, Remix, Redistribute. (Wiley — `02_oer_research.md` § B2)
- **Docs-as-code** (alias: *DAC*): documentation in version-controlled repositories, PR-reviewed, CI-deployed. (Gentle — `04_docs_as_code.md` § D1)
- **ARID**: Accept some Repetition In Documentation (vs DRY for code). (Write the Docs — `04_docs_as_code.md` § D1)
- **Evergreen notes**: concept-oriented atomic densely-linked notes. (Matuschak — `05_hypertext_patterns.md` § E1)
- **Memex**: Bush's 1945 hypothetical mechanical hypertext device. (Bush — `05_hypertext_patterns.md` § E1)
- **Zettelkasten**: Luhmann's atomic-notes-with-unique-IDs method. (Schmidt / Ahrens — `05_hypertext_patterns.md` § E2)

See `00_overview.md` § Glossary for the full term list including each Diátaxis quadrant definition.

## Verification & limits

- Citations resolved as of 2026-05-19.
- Strict-live v2 evidence IDs: not applicable (v1 ledger; no evidence_ledger.yml / cache_manifest.yml in this dossier).
- All 22 entries are status `Unverified` — first-pass gather, URLs collected but not HEAD-checked or primary-source-verified. Many are ongoing community websites whose specific content may drift; `(website / ongoing)` flags mark these.
- Some entries (Ahrens 2017 self-published book, Gentle 2017 self-published book) have no DOI; the primary URL is the canonical handle.
- This synthesis is a snapshot. Doc-classification frameworks (Diátaxis) and OER literature evolve slowly; OER adoption case studies more rapidly. Re-verify OER efficacy claims if cited in publication-grade work.
- `(no widely-known repo)` flags appear on entries with no canonical code repository; `(website / ongoing)` flags appear on entries that are themselves living web resources (frameworks, manuals).
- Audit-trail placeholder: `**Independent audit, round N (YYYY-MM-DD):**` notes will be appended here after each `/dossier-audit` invocation.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`). URLs link to primary sources (DOIs, foundation publications, community websites, OASIS standards). No local file paths are referenced.
