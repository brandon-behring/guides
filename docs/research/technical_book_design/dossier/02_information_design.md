# Technical Book Design — Tufte Tradition and Information Design

The Tufte tradition and adjacent information-design canon: margin notes, sidenotes, data-ink discipline, small multiples, the integration of micro and macro views, and the typographic foundations that make these patterns legible. Source set spans Tufte's four primary books, web-native implementations of the Tufte layout (Tufte CSS), and the broader typographic canon (Knuth's TeXbook, Bringhurst's Elements).

## B1. Tufte's primary canon

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| The Visual Display of Quantitative Information | Tufte (1983; 2nd ed 2001) | Graphics Press | (no arXiv) | — | Foundational treatise on statistical graphics: principles of data display, chartjunk, the data-ink ratio, and the lie factor. | Establishes the data-ink ratio and small-multiples patterns as design discipline; the most-cited reference for evidence-display craft. |
| Envisioning Information | Tufte (1990) | Graphics Press | (no arXiv) | — | Extension of VDQI focused on layering, micro/macro integration, color use in data display, and information density in physical layouts. | Codifies the margin/sidenote integration patterns and micro-macro reading models that web-native technical books inherit. |
| Visual Explanations: Images and Quantities, Evidence and Narrative | Tufte (1997) | Graphics Press | (no arXiv) | — | Treatment of evidence-narrative integration: how images and quantities work together to support inference and decision-making. | Frames figure-text integration as evidence assembly rather than illustration; central to the captioning-as-argument pattern. |
| Beautiful Evidence | Tufte (2006) | Graphics Press | (no arXiv) | — | Examines how evidence is presented, including sparklines, mapped pictures, and the integration of words, numbers, and images. | Introduces the sparkline as an in-prose data-display primitive; defines the standards for evidence-bearing graphics in technical writing. |

## B2. Web-native Tufte implementations

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Tufte CSS: Style your web articles in the manner of Edward Tufte | Liepmann et al. | GitHub Pages | (no arXiv) | edwardtufte/tufte-css | CSS stylesheet implementing Tufte's design principles for web articles, including sidenotes, margin notes, and full-width figures. | Provides the load-bearing web implementation of Tufte sidenote/margin-note patterns adopted by Distill, the Tufte handout LaTeX class derivatives, and many static-site book engines. |

## B3. Typographic foundations

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| The TeXbook | Knuth (1984) | Addison-Wesley | (no arXiv) | — | Canonical authoring-system manual for TeX, written as a pedagogical text that treats the typesetting tool as part of the book's craft. | Models the doctrine of treating the authoring toolchain as part of the book's pedagogy; the toolchain choice is part of the book's design. |
| The Elements of Typographic Style | Bringhurst (2004; multiple editions) | Hartley & Marks | (no arXiv) | — | Standard typographic reference covering grids, page proportions, font choice, and reader-comfort metrics. | Establishes the typographic principles (line-length, leading, page proportion) that govern web-and-print book legibility. |

---

**Section-anchor convention:** This file uses the `B` letter prefix.
