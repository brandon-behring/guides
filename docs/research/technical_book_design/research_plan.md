# Research Plan: Technical Book Design

Discover primary sources and exemplar artifacts that inform the chapter shape, information design, figure-text integration, and reader-flow decisions for a public DS/MLE/AI-Eng interview-prep guides repo (Astro + MDX + Paged.js, Tufte typography, Pagefind search, hyperlinked + printable). Output feeds the style guide v0.0 of `interview-guides`. Target: heavy dossier (~200-300 entries), 5 sub-areas spanning chapter-shape doctrines, the Tufte tradition, figure-text patterns, OSS web-book exemplars, and web-vs-print medium decisions.

## Sub-areas

- A1. Chapter-shape doctrines
  - Source types: textbook front-matter, GitHub repos for OSS textbooks, conference / Distill methodology articles, instructional-design academic literature, vendor docs (Astro Starlight, Quarto, mdBook), expository talks
  - Notes: Catalog of named patterns — "Representation / Operation / Evolution" (Koller-Friedman PGM); "Definition → Theorem → Proof → Example" (math textbook canonical); "Spiral curriculum" (Bruner); academic 5-act (Overview/Theory/Examples/Reflections/Forward-map per book-scaffold-astro); pattern-and-language (Alexander); "Why → How → What" (Sinek-style, adapted for technical exposition); "Frame → Build → Stress-test" (interview-prep-relevant). For each, capture when it's chosen, what tradeoff it makes (rigor vs accessibility, depth vs survey, sequencing vs random-access). Specifically include the chapter-shape doctrines documented in `book-scaffold-astro/pedagogy/`.

- A2. Tufte tradition + information design
  - Source types: Tufte's four books (canonical), Tufte CourseNotes/poster talks (graphics.stanford.edu, ET Tufte personal site), academic critiques + extensions of Tufte (Cairo, Kosara, Wilkinson, Ware), GitHub Tufte-CSS implementations
  - Notes: Margin notes vs sidenotes vs footnotes (semantic distinction + layout discipline); small multiples; data-ink ratio; chartjunk; sparklines; the "supergraphic"; integration of micro/macro views. Practical implementation in web technical books — how Tufte-CSS achieves it; how Tufte Handout LaTeX class implements it; how Distill Pubs adapted it. The book-scaffold-astro implements a "three-tier Tufte width" (65ch / 80ch / 90ch); audit that decision against literature.

- A3. Figure-text integration patterns
  - Source types: Bret Victor's essays (worrydream.com), Distill.pub articles, Idyll-lang / Observable notebooks, R Markdown vignettes, Vega-Lite gallery, Mike Bostock's blocks, Pandoc / Quarto figure handling docs
  - Notes: Figure-first vs text-first chapters; explorable explanations vs static figures (when interactivity pays for itself); the captioning conventions for technical figures (caption as the body of the argument vs caption as supplement); cross-references (Figure 3.2 vs `<XRef>`); sparkline-in-prose patterns. Specifically the question: when does interactivity earn its complexity in a *book*-pace artifact (vs a paper or essay)?

- A4. OSS / web-first technical book exemplars
  - Source types: GitHub repos of OSS technical books, bookdown.org gallery, Quarto book gallery, Distill publication archive, Asciidoctor / mdBook / VitePress book examples
  - Notes: Catalog specific exemplar artifacts — Murphy's *Probabilistic Machine Learning* book 1 & 2 (web edition); *Dive into Deep Learning* (Zhang et al., interactive notebook-book hybrid); *R for Data Science* (Wickham & Grolemund, Quarto-based); *Statistical Rethinking* (McElreath, conversational rigor); *Forecasting: Principles and Practice* (Hyndman & Athanasopoulos); *Mostly Harmless Econometrics* (Angrist & Pischke, paper-shaped book); *Trustworthy Online Controlled Experiments* (Kohavi/Tang/Xu, interview-prep-relevant). For each: structural choice, navigation model, build pipeline, license, what works, what would be borrowed.

- A5. Web-vs-print decisions + reader-flow design
  - Source types: Web typography standards (W3C CSS Print, Paged.js docs), book-design tradition (Bringhurst's *Elements of Typographic Style*), HCI research on reading on screens (Mangen, Liu, Sellen), navigation studies (sidebar vs hamburger, breadcrumbs), search-vs-TOC studies
  - Notes: When the same source must serve web + print (Paged.js workflow), what tradeoffs are forced — pagination, page breaks within blocks, margin reuse, figure float in print only. Reader-flow design — entry points (search vs hub vs sidebar), prerequisites (declared vs inferred), jump-back support, the "deep-link from outside / forward-link from inside" pattern. Cross-link discipline — when to link inline vs sidebar vs "see also" footer.

## Out-of-scope

- Generic writing advice (style, voice, grammar) — covered by *The Elements of Style*, *On Writing Well*, etc., and is not load-bearing for the architecture this informs
- Fiction / narrative literature design — different objectives (entertainment, character) drive different patterns
- Academic paper writing — paper structure (Abstract / Intro / Method / Results / Discussion) is too short and too uniform to inform book design; deserves a separate research plan
- Print-publishing logistics — ISBN, distribution, layout vendors, royalty contracts — not relevant when CC-BY-4.0-shipping a Cloudflare-Workers-hosted site
- Dashboard / notebook UX — Jupyter / Streamlit / Tableau design patterns are a different read pattern (exploratory vs sequential), deserves its own scoping
- Slide-deck / presentation design — Tufte's "Cognitive Style of PowerPoint" is in-scope as a meta-critique but slide design itself is out
- Marketing copy / persuasive writing — different objective function
- Children's textbook design / K-12 pedagogy — different audience constraints
- Audiobook / podcast adaptation — different medium, different reader-flow

## Claim family taxonomy

- `chapter_pattern` — named chapter-shape doctrines and when each works
- `information_design` — Tufte tradition, density, margin/sidenote discipline, micro/macro integration
- `figure_integration` — figure-first vs text-first, captioning, interactivity decisions
- `reader_flow` — entry points, prerequisites, navigation, cross-reference discipline
- `web_print_tradeoff` — decisions when one source serves both media (Paged.js, CSS Print)
- `exemplar_artifact` — specific OSS / web-first technical books worth modeling

## Known landmark papers

- `tufte1983visual` — Tufte, *The Visual Display of Quantitative Information* (1st ed 1983; 2nd ed 2001). Foundational for information design; defines data-ink ratio, small multiples, chartjunk.
- `tufte1990envisioning` — Tufte, *Envisioning Information* (1990). Extends VDQI with sidenote/margin discipline and the "micro/macro" reading patterns this work cares about.
- `olah2017researchdebt` — Olah & Carter, "Research Debt" (Distill, 2017). Defines the obligation a technical writer has to invest in clarity; sets the bar for what "well-explained" means in modern technical writing.
- `victor2011ladder` — Bret Victor, "Up and Down the Ladder of Abstraction" (2011). Canonical reference for explorable / interactive technical exposition.
- `knuth1984texbook` — Knuth, *The TeXbook* (1984). Authoring-system-as-typography case study; the canonical reference for treating the toolchain as part of the book's pedagogy.
- `koller2009pgm` — Koller & Friedman, *Probabilistic Graphical Models* (MIT Press, 2009). Canonical chapter-shape exemplar — the "Representation / Operation / Evolution" pattern that `book-scaffold-astro` adapts for its tools profile.
- `murphy2022pml1` — Murphy, *Probabilistic Machine Learning: An Introduction* (MIT Press, 2022, web edition). Modern web-native academic textbook exemplar.
- `mcelreath2020rethinking` — McElreath, *Statistical Rethinking* (2nd ed 2020). Pedagogical text purposefully built for active rereading; conversational + rigorous.
- `kohavi2020trustworthy` — Kohavi, Tang & Xu, *Trustworthy Online Controlled Experiments* (Cambridge, 2020). Most relevant existing book in the domain (experimentation); model for "industry-grade technical book."
