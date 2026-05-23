# Technical Book Design — Overview and Glossary

Orientation file for the `technical_book_design` research synthesis. Read this first if you are new to the topic; otherwise jump to the topic file that matches your question via the `README.md` lookup recipes.

## Scope and framing

This synthesis catalogs the canonical doctrines, exemplars, and toolchains that inform technical-book authoring decisions for a public DS / MLE / AI-Eng interview-prep guides repo. It is opinionated about which sources are load-bearing for the design decisions a modern web-and-print book author must make: chapter shape, information density, figure-text integration, navigation discipline, and the web-vs-print tradeoff.

Five sub-areas are in scope:

1. **Chapter-shape doctrines** — named patterns for how a chapter is structured, and the tradeoff each pattern forces.
2. **Tufte tradition and information design** — margin notes, data-ink discipline, the typographic foundation.
3. **Figure-text integration** — captioning conventions, the explorable-explanation question, hyperlinked reading.
4. **OSS / web-first exemplars** — specific technical books worth modeling for structure, tooling, and licensing.
5. **Web-vs-print tradeoffs and reader flow** — Paged.js pipeline, the W3C CSS Print gap, reader-flow patterns including evergreen-note practice.

## Glossary

Canonical terms used across this synthesis with one-line definitions and primary citations.

- **Chartjunk** — Extraneous visual elements that do not encode data or aid comprehension; coined to flag non-data-bearing ornamentation. Defined in Tufte (1983) *The Visual Display of Quantitative Information*.
- **Data-ink ratio** — The proportion of ink in a graphic devoted to actual data display versus non-data elements; Tufte's discipline metric. Defined in Tufte (1983).
- **Diátaxis** — Documentation framework distinguishing four content types (tutorial / how-to / reference / explanation) by user need (learning / goal / information / understanding). Procida, `diataxis.fr`.
- **Distill** — Online machine-learning research journal that adapted Tufte's print-design principles to interactive web-native articles; defined a contemporary clarity bar via the "Research Debt" editorial. See Olah & Carter (2017).
- **Evergreen note** — Atomic, concept-oriented, densely linked note designed for compounding utility across projects rather than session-bound use. Defined in Matuschak's working notes (ongoing).
- **Explorable explanation** — Genre of technical writing where the reader manipulates a model directly rather than passively consuming exposition; coined and motivated by Victor (2011).
- **Hypertext / Memex** — Historical foundation of cross-referenced reading; the Memex is Bush's 1945 thought-experiment device for navigating hyperlinked recorded knowledge. See Bush (1945) "As We May Think".
- **Margin notes** — Notes placed in a layout margin adjacent to body prose, distinct from footnotes (bottom of page) and endnotes (back of book). Tufte's preferred form for evidence-display; codified in Envisioning Information (1990).
- **Micro / macro integration** — The pattern of presenting fine-detail and high-level views simultaneously in a single graphic or layout. Defined in Tufte (1990).
- **Notebook-book hybrid** — Authoring pattern where every chapter is simultaneously a printable book chapter and an executable computational notebook. Canonical exemplar: Zhang et al. (2021) *Dive into Deep Learning*.
- **Paged.js** — Open-source JavaScript polyfill that paginates HTML in the browser per the W3C CSS Paged Media specification; the canonical FOSS toolchain for web-to-print book authoring.
- **Representation / Inference / Learning** (R/I/L) — Chapter-shape trichotomy used in Koller & Friedman (2009) *Probabilistic Graphical Models* to structure a topic from definition through algorithmic operation; sometimes referred to as the Representation / Operation / Evolution pattern.
- **Research Debt** — The cost imposed on readers when authors fail to invest in clarity; an editorial frame motivating distillation as research work. Coined in Olah & Carter (2017) *Research Debt*.
- **Sidenote** — A note placed beside body prose in a wide margin, halfway between an inline note and a footnote; canonical in the Tufte-CSS implementation.
- **Small multiples** — A series of similar small graphics shown together for direct visual comparison across a varying dimension; coined by Tufte (1983).
- **Sparkline** — A small word-sized in-prose data graphic, designed for embedding in text rather than as a standalone figure. Coined in Tufte (2006) *Beautiful Evidence*.
- **Spiral curriculum** — Pedagogical doctrine that revisits topics at successively deeper levels rather than treating each linearly; introduced in Bruner (1960) *The Process of Education*.
- **Three-tier Tufte width** — Layout pattern using three column widths (e.g., 65ch / 80ch / 90ch) to distinguish body prose, body-with-margin, and full-width content; used in book-scaffold-astro.
- **Tufte CSS** — Open-source CSS stylesheet implementing Tufte's design principles (sidenotes, margin notes, full-width figures) for web articles; `edwardtufte/tufte-css`.
- **W3C CSS Paged Media** — Web standard defining how CSS controls page-based media (print, PDF); incompletely implemented across browsers, which is why Paged.js exists.

## Sub-area boundaries (orientation)

| Sub-area | Topic file | When this is the right place |
|---|---|---|
| Chapter-shape doctrines | `01_chapter_pattern.md` | You are choosing a chapter structure or defending a structural choice. |
| Information design | `02_information_design.md` | You are deciding margin-note discipline, data display, or typographic settings. |
| Figure-text integration | `03_figure_integration.md` | You are deciding captioning, interactivity, or cross-reference style. |
| Exemplar artifacts | `04_exemplar_artifact.md` | You are looking for a specific book to model on. |
| Web-vs-print | `05_web_print_tradeoff.md` | You are deciding how a single source serves both web and print, or reader-flow patterns. |

For lookup by question, see the lookup recipes in `README.md`.
