# Technical Book Design — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for technical-book design (chapter shape, information design, figure-text integration, OSS exemplars, web-vs-print tradeoffs). Read this README first. -->

**Purpose:** Catalog the canonical doctrines, exemplars, and toolchains that inform technical-book authoring decisions for a public DS / MLE / AI-Eng interview-prep guides repo (Astro + MDX + Paged.js, Tufte typography, Pagefind search, hyperlinked + printable). Designed for dual consumption — humans (reading directly) and future LLM agents (grounding reasoning in this literature).
**Primary intended consumer:** future Claude Code / LLM agents working in the public-guides repo (and adjacent technical-book authoring projects) that need detailed context on chapter-shape doctrines, information-design discipline, figure-text patterns, and the web-vs-print tradeoff. Secondary consumers: humans reading the material directly when making style-guide decisions.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself. Move it elsewhere and it still works.
**Scope:** First-pass synthesis covering 5 sub-areas. Source set spans 1945 (Bush's Memex) through ongoing (Procida's Diátaxis, Matuschak's evergreen notes); coverage window biased toward canonical references that have not aged out (Tufte 1983-2006, Knuth 1984, Bruner 1960, Pólya 1945) plus recent web-native exemplars (Murphy PML 2022-2023, Wickham r4ds 2023, Hyndman & Athanasopoulos fpp3 2021).
**Coverage:** 32 entries across 5 topic files; structured 5-bullet entries (Source / Code / Mechanism / Result / Status).
**Last updated:** 2026-05-19.

## ⚠️ Scope boundary

**In scope:** named chapter-shape doctrines and authoring frameworks; Tufte's information-design canon and its web-native implementations; figure-text integration practice (captioning, interactivity, hypertext); specific OSS / web-first technical book exemplars worth modeling; web-vs-print pipeline decisions (Paged.js, CSS Paged Media) and reader-flow patterns including evergreen-note practice.

**Out of scope:** Generic writing advice (style, voice, grammar) — see *The Elements of Style* / *On Writing Well* if needed. Academic paper writing — paper structure is too short and too uniform to inform book design; deserves a separate research plan. Fiction or narrative literature design. Print-publishing logistics (ISBN, distribution, layout vendors, royalty contracts) — irrelevant when CC-BY-4.0-shipping a static site. Dashboard / notebook UX (Jupyter / Streamlit / Tableau patterns) — different read pattern (exploratory vs sequential), deserves its own scoping. Slide-deck or presentation design (Tufte's *Cognitive Style of PowerPoint* is in scope as meta-critique; slide design itself is out). Marketing copy. Children's textbook / K-12 pedagogy. Audiobook / podcast adaptation.

**Cross-vol overlap convention:** when an entry is methodologically relevant to multiple research dossiers (e.g., a foundational interview-prep book that is also an exemplar of web-native authoring), pick ONE primary location based on claim_family and reference adjacency in this scope-boundary callout. Do NOT duplicate entries across dossiers — the duplicate-detection rule lives here, not in the synthesis files.

## How this is organized

Sub-section anchors use a per-file letter prefix: `## A1.` / `## A2.` in file 01, `## B1.` / `## B2.` / `## B3.` in file 02, and so on. Lookup recipes in this README reference these anchors.

| File | Topic | When to read |
|---|---|---|
| `00_overview.md` | Overview, glossary, sub-area boundaries | Start here if new to technical-book design vocabulary or unsure which file applies |
| `01_chapter_pattern.md` | Chapter-shape doctrines (anchors A1) | When choosing a chapter structure or defending a structural choice |
| `02_information_design.md` | Tufte tradition, typography (anchors B1, B2, B3) | When making margin-note, data-display, or typographic decisions |
| `03_figure_integration.md` | Figure-text integration, explorables (anchors C1, C2) | When making captioning, interactivity, or cross-reference decisions |
| `04_exemplar_artifact.md` | OSS / web-first book exemplars (anchors D1, D2, D3) | When looking for a specific book to model on |
| `05_web_print_tradeoff.md` | Paged.js, web-vs-print, reader flow (anchors E1, E2) | When deciding how a single source serves both web and print, or reader-flow patterns |

## Lookup recipes

Routes by question type. Each points to a specific file and section anchor.

- **"What's the canonical chapter-shape doctrine for a book that spans definition through algorithmic operation?"** → `01_chapter_pattern.md` § A1 (Koller & Friedman 2009, *Probabilistic Graphical Models*) — the Representation / Inference / Learning trichotomy.
- **"How do I decide between writing a tutorial, how-to, reference, or explanation chapter?"** → `01_chapter_pattern.md` § A1 (Procida, *Diátaxis*) — content-typology decision rule.
- **"What's the canonical reference for the problem-method-reflection expository pattern?"** → `01_chapter_pattern.md` § A1 (Pólya 1945, *How to Solve It*).
- **"What's the doctrine that authoring source can simultaneously be the analysis source?"** → `01_chapter_pattern.md` § A1 (Xie 2017, *bookdown*) — the reproducible-pipeline pattern.
- **"What's the spiral curriculum?"** → `01_chapter_pattern.md` § A1 (Bruner 1960, *The Process of Education*); see also glossary in `00_overview.md`.
- **"What's the foundational reference for the data-ink ratio?"** → `02_information_design.md` § B1 (Tufte 1983, *The Visual Display of Quantitative Information*).
- **"Where is the canonical reference for margin-note / micro-macro integration discipline?"** → `02_information_design.md` § B1 (Tufte 1990, *Envisioning Information*).
- **"What's the canonical reference for captioning-as-argument?"** → `02_information_design.md` § B1 (Tufte 1997, *Visual Explanations*).
- **"Where did the sparkline come from?"** → `02_information_design.md` § B1 (Tufte 2006, *Beautiful Evidence*).
- **"Where do I get a web-native Tufte layout (sidenotes + margin notes + full-width figures)?"** → `02_information_design.md` § B2 (Liepmann et al., *Tufte CSS*).
- **"What's the canonical typography reference for line-length, leading, and page-proportion decisions?"** → `02_information_design.md` § B3 (Bringhurst 2004, *The Elements of Typographic Style*).
- **"What's the canonical reference for treating the authoring toolchain as part of the book's pedagogy?"** → `02_information_design.md` § B3 (Knuth 1984, *The TeXbook*).
- **"What's the contemporary clarity bar for technical exposition?"** → `03_figure_integration.md` § C1 (Olah & Carter 2017, *Research Debt*, Distill).
- **"What are the editorial standards for interactive web-native ML articles?"** → `03_figure_integration.md` § C1 (Distill editorial team, *About Distill*).
- **"What's the canonical reference for explorable / interactive technical exposition?"** → `03_figure_integration.md` § C2 (Victor 2011, *Up and Down the Ladder of Abstraction* and *Explorable Explanations*).
- **"What's the historical foundation of hyperlinked / cross-referenced reading?"** → `03_figure_integration.md` § C2 (Bush 1945, *As We May Think* — Memex).
- **"What modern web-native ML textbook should I model my structure on?"** → `04_exemplar_artifact.md` § D1 (Murphy 2022/2023, *PML*) — book-as-codebase pattern.
- **"What's the canonical notebook-book hybrid?"** → `04_exemplar_artifact.md` § D2 (Zhang et al. 2021, *Dive into Deep Learning*).
- **"What's the canonical example of conversational-rigor in a statistics textbook?"** → `04_exemplar_artifact.md` § D2 (McElreath 2020, *Statistical Rethinking*).
- **"What's the canonical Quarto-based reproducible-book exemplar?"** → `04_exemplar_artifact.md` § D2 (Wickham, Çetinkaya-Rundel & Grolemund 2023, *R for Data Science*).
- **"What's the model for an industry-grade technical book pairing academic rigor with practitioner anecdotes?"** → `04_exemplar_artifact.md` § D3 (Kohavi, Tang & Xu 2020, *Trustworthy Online Controlled Experiments*).
- **"What's the canonical open / web-first textbook in a paywall-dominated domain?"** → `04_exemplar_artifact.md` § D3 (Hyndman & Athanasopoulos 2021, *Forecasting: Principles and Practice 3rd ed*).
- **"What's the shared-vocabulary reference for the modern ML practitioner canon?"** → `04_exemplar_artifact.md` § D3 (Hastie, Tibshirani & Friedman 2009, *The Elements of Statistical Learning*).
- **"How do I produce a print-ready PDF from a single web-native HTML source?"** → `05_web_print_tradeoff.md` § E1 (Coko Foundation, *Paged.js*) — the canonical FOSS toolchain.
- **"Where is the gap between W3C CSS Paged Media and browser implementations documented?"** → `05_web_print_tradeoff.md` § E1 (Paged.js, *Position paper for the W3C CSS print workshop*).
- **"Where do I get the Paged.js conceptual model (chunker / page-box / margin-box)?"** → `05_web_print_tradeoff.md` § E1 (Paged.js, *The big picture*).
- **"Where is the practitioner-community knowledge around web-to-print workflows aggregated?"** → `05_web_print_tradeoff.md` § E1 (PrePostPrint community).
- **"What's the canonical reference for atomic, concept-oriented, densely-linked notes?"** → `05_web_print_tradeoff.md` § E2 (Matuschak, *Evergreen notes*).
- **"What's Diátaxis?"** → `00_overview.md` § Glossary; see also `01_chapter_pattern.md` § A1.
- **"What's an explorable explanation?"** → `00_overview.md` § Glossary; see also `03_figure_integration.md` § C2.
- **"What's Paged.js?"** → `00_overview.md` § Glossary; see also `05_web_print_tradeoff.md` § E1.

## Glossary

Canonical terms used across this synthesis. Full glossary lives in `00_overview.md`; this README excerpts the most-referenced terms.

- **Chartjunk** — Extraneous visual elements that do not encode data or aid comprehension; coined in Tufte (1983).
- **Data-ink ratio** — Proportion of ink in a graphic devoted to actual data display; Tufte's discipline metric (1983).
- **Diátaxis** — Documentation framework distinguishing four content types (tutorial / how-to / reference / explanation) by user need; Procida.
- **Evergreen note** — Atomic, concept-oriented, densely linked note designed for compounding utility; Matuschak.
- **Explorable explanation** — Technical-writing genre where the reader manipulates a model directly; Victor (2011).
- **Margin notes / sidenotes** — Notes placed in a layout margin adjacent to body prose, distinct from footnotes; canonical in Tufte (1990) and Tufte CSS.
- **Notebook-book hybrid** — Authoring pattern where every chapter is simultaneously a printable book chapter and an executable computational notebook; canonical in Zhang et al. (2021).
- **Paged.js** — Open-source JS polyfill that paginates HTML in the browser per W3C CSS Paged Media spec; canonical FOSS web-to-print toolchain.
- **Representation / Inference / Learning** — Chapter-shape trichotomy from Koller & Friedman (2009), sometimes called Representation / Operation / Evolution.
- **Research Debt** — Cost imposed on readers when authors fail to invest in clarity; Olah & Carter (2017).
- **Small multiples** — Series of similar small graphics shown together for direct visual comparison; Tufte (1983).
- **Sparkline** — Word-sized in-prose data graphic; Tufte (2006).
- **Spiral curriculum** — Pedagogical doctrine of revisiting topics at successively deeper levels; Bruner (1960).
- **Tufte CSS** — CSS stylesheet implementing Tufte's design principles for web articles; `edwardtufte/tufte-css`.

For full glossary including all 20 defined terms, see `00_overview.md` § Glossary.

## Verification & limits

- Citations resolved as of 2026-05-19. All entries are `Unverified` (first-pass — not yet WebFetch-confirmed against primary sources).
- Strict-live v2 evidence IDs: not applicable for this first-pass dossier.
- This synthesis is a snapshot of the first-pass gather (~32 entries). The research plan targets a heavy dossier of 200-300 entries; many sub-areas (especially OSS exemplars and figure-integration practice) have additional canonical sources not yet captured.
- Coverage gaps known at compilation time: Distill articles beyond *Research Debt* and *About Distill* are not yet catalogued; Cairo / Kosara / Wilkinson / Ware (Tufte critics and extenders) are not yet included; Mostly Harmless Econometrics and other paper-shaped books mentioned in the research plan are not yet added; Idyll-lang / Observable notebooks / Vega-Lite gallery for figure-integration are not yet catalogued; HCI reading-research (Mangen, Liu, Sellen) for the web-vs-print decision is not yet added.
- Promotion of entries from `Unverified` to `Verified` happens in `/dossier-audit` rounds — re-invoke per round.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`). URLs link to primary sources (book publisher pages, GitHub repos, vendor/community sites, conference proceedings). No local file paths are referenced.
