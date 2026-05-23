# Web-vs-Print Tradeoffs and Reader Flow

Synthesis of decisions when a single source must serve both web and print media (Paged.js pipeline, CSS print modules, web-to-print communities) and the reader-flow patterns that bridge sequential and random-access reading. Combines the `web_print_tradeoff` and `reader_flow` claim families since the latter has only one entry and the topics co-bind editorially.

## E1. Paged.js and the web-to-print pipeline

- **About Paged.js** — Coko Foundation / paged.js maintainers (pagedjs.org).
  - **Source:** https://pagedjs.org/en/about/
  - **Code:** https://github.com/pagedjs/pagedjs
  - **Mechanism:** Open-source JavaScript polyfill that paginates HTML in the browser per the W3C CSS Paged Media specifications, producing print-ready PDFs from web-native source markup.
  - **Result:** Defines the canonical FOSS toolchain for producing print-ready PDFs from web-native source markup without leaving the browser; the load-bearing tool for web-to-print workflows.
  - **Status:** Unverified.

- **Our position paper for the W3C CSS print workshop** — Coko Foundation / paged.js maintainers (pagedjs.org).
  - **Source:** https://pagedjs.org/posts/en/our-position-paper-for-the-w3c-css-print-workshop/
  - **Code:** —
  - **Mechanism:** Position paper outlining the gaps between the W3C CSS Paged Media specification and current browser implementations, and where Paged.js fills those gaps.
  - **Result:** Documents the standards-vs-implementation gap that shapes how a single CSS-and-HTML source becomes both a web page and a printable artifact; reference for understanding what is and is not standardized.
  - **Status:** Unverified. (no widely-known repo)

- **Paged.js documentation: The big picture** — Coko Foundation / paged.js maintainers (pagedjs.org).
  - **Source:** https://pagedjs.org/en/documentation/1-the-big-picture/
  - **Code:** —
  - **Mechanism:** High-level documentation explaining the Paged.js processing model: chunking source HTML into page boxes, applying margin boxes, and rendering running headers/footers.
  - **Result:** Reference for the conceptual model (chunker / page-box / margin-box) needed to author single-source web-and-print books; the entry-point document for Paged.js authoring.
  - **Status:** Unverified. (no widely-known repo)

- **PrePostPrint: Resources for web-to-print** — PrePostPrint community (prepostprint.org).
  - **Source:** https://prepostprint.org/resources/
  - **Code:** —
  - **Mechanism:** Community-maintained resources catalog for web-to-print authoring: tools, workflows, exemplar books, and CSS Paged Media references.
  - **Result:** Aggregates the practitioner-community knowledge around web-to-print workflows that complements Paged.js's official documentation; the practitioner cross-reference hub.
  - **Status:** Unverified. (no widely-known repo)

## E2. Reader-flow patterns

- **Evergreen notes** — Matuschak (notes.andymatuschak.org, ongoing).
  - **Source:** https://notes.andymatuschak.org/Evergreen_notes
  - **Code:** —
  - **Mechanism:** Working notes on the practice of writing evergreen notes — atomic, concept-oriented, densely linked notes designed for compounding utility across projects rather than for session-bound use.
  - **Result:** Defines the evergreen-note properties (atomic, concept-oriented, densely linked) that inform random-access reader-flow design for cross-referenced technical material; reference for the discipline of writing material that compounds.
  - **Status:** Unverified. (no widely-known repo)
