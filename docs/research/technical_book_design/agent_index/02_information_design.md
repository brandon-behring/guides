# Tufte Tradition and Information Design

Synthesis of the Tufte canon and its web-native and typographic extensions. Covers the four primary Tufte books, the Tufte CSS implementation that ports the layout to web articles, and the typographic foundations (Knuth's TeXbook, Bringhurst's Elements) that govern legibility for technical text.

## B1. Tufte's primary canon

- **The Visual Display of Quantitative Information** — Tufte (Graphics Press 1983; 2nd ed 2001).
  - **Source:** https://www.edwardtufte.com/book/the-visual-display-of-quantitative-information/
  - **Code:** —
  - **Mechanism:** Establishes principles of statistical graphic display: the data-ink ratio, chartjunk, the lie factor, and small multiples as direct-comparison primitives.
  - **Result:** Foundational reference for evidence-display craft; the most-cited source for technical-book figure discipline and the load-bearing reference for data-ink-style design choices.
  - **Status:** Unverified. (no widely-known repo)

- **Envisioning Information** — Tufte (Graphics Press 1990).
  - **Source:** https://www.edwardtufte.com/book/envisioning-information/
  - **Code:** —
  - **Mechanism:** Extends the VDQI principles to layering, micro/macro integration, color in data display, and information density in physical layouts.
  - **Result:** Codifies the margin/sidenote integration patterns and micro-macro reading models that web-native technical books inherit; the canonical reference for margin-discipline decisions.
  - **Status:** Unverified. (no widely-known repo)

- **Visual Explanations: Images and Quantities, Evidence and Narrative** — Tufte (Graphics Press 1997).
  - **Source:** https://www.edwardtufte.com/book/visual-explanations-images-and-quantities-evidence-and-narrative/
  - **Code:** —
  - **Mechanism:** Treats figure-text integration as evidence assembly rather than illustration; emphasizes the role of images plus quantities in supporting inference and decision-making.
  - **Result:** Frames captioning as argument-bearing rather than supplementary; central to the captioning-as-argument pattern used in Distill-era ML articles.
  - **Status:** Unverified. (no widely-known repo)

- **Beautiful Evidence** — Tufte (Graphics Press 2006).
  - **Source:** https://www.edwardtufte.com/book/beautiful-evidence/
  - **Code:** —
  - **Mechanism:** Examines how evidence is presented across multiple media: sparklines as in-prose data primitives, mapped pictures, and the integration of words, numbers, and images.
  - **Result:** Introduces the sparkline as a word-sized in-prose data-display element and defines the standards for evidence-bearing graphics in technical writing.
  - **Status:** Unverified. (no widely-known repo)

## B2. Web-native Tufte implementations

- **Tufte CSS** — Liepmann et al. (GitHub Pages).
  - **Source:** https://edwardtufte.github.io/tufte-css/
  - **Code:** https://github.com/edwardtufte/tufte-css
  - **Mechanism:** CSS stylesheet implementing Tufte's design principles for web articles — sidenotes, margin notes, full-width figures, and typographic settings.
  - **Result:** Provides the load-bearing web implementation of Tufte sidenote/margin-note patterns; adopted by Distill, by Tufte handout LaTeX class derivatives, and by many static-site book engines.
  - **Status:** Unverified.

## B3. Typographic foundations

- **The TeXbook** — Knuth (Addison-Wesley 1984).
  - **Source:** https://www-cs-faculty.stanford.edu/~knuth/abcde.html
  - **Code:** —
  - **Mechanism:** Canonical authoring-system manual for TeX, written as a pedagogical text that treats the typesetting tool itself as part of the book's craft.
  - **Result:** Models the doctrine that the authoring toolchain is part of the book's pedagogy; informs the modern practice of documenting build pipelines as first-class chapters.
  - **Status:** Unverified. (no widely-known repo)

- **The Elements of Typographic Style** — Bringhurst (Hartley & Marks 2004, multiple editions).
  - **Source:** https://www.hartleyandmarks.com/9780881792126/the-elements-of-typographic-style/
  - **Code:** —
  - **Mechanism:** Standard typographic reference covering grids, page proportions, font choice, leading, and reader-comfort metrics for printed and digital text.
  - **Result:** Establishes the typographic principles (line-length, leading, page proportion) that govern web-and-print book legibility; the canonical cross-medium typography reference.
  - **Status:** Unverified. (no widely-known repo)
