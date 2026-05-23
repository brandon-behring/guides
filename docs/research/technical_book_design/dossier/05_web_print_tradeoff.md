# Technical Book Design — Web-vs-Print Tradeoffs and Reader Flow

Decisions when a single source must serve both web and print media (Paged.js pipeline, CSS print modules, web-to-print communities) and the reader-flow patterns that bridge sequential and random-access reading. Combines the `web_print_tradeoff` and `reader_flow` claim families from the source plan since reader_flow has only one entry and the topics co-bind editorially (web-vs-print decisions are reader-flow decisions in disguise).

## E1. Paged.js and the web-to-print pipeline

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| About Paged.js: a free and open source JavaScript library to paginate content in the browser | Coko Foundation / paged.js maintainers | pagedjs.org | (no arXiv) | pagedjs/pagedjs | About page for Paged.js, a JavaScript polyfill that paginates HTML in the browser per W3C CSS Paged Media specifications. | Defines the canonical FOSS toolchain for producing print-ready PDFs from web-native source markup without leaving the browser. |
| Our position paper for the W3C CSS print workshop | Coko Foundation / paged.js maintainers | pagedjs.org | (no arXiv) | — | Position paper outlining the gaps between the W3C CSS Paged Media spec and browser implementations, and where Paged.js fills them. | Documents the standards-vs-implementation gap that shapes how a single CSS-and-HTML source becomes both a web page and a printable artifact. |
| Paged.js documentation: The big picture | Coko Foundation / paged.js maintainers | pagedjs.org | (no arXiv) | — | High-level documentation explaining the Paged.js processing model: chunking, page boxes, margin boxes, and running headers. | Reference for the conceptual model (chunker / page-box / margin-box) needed to author single-source web-and-print books. |
| PrePostPrint: Resources for web-to-print | PrePostPrint community | prepostprint.org | (no arXiv) | — | Community resources catalog for web-to-print authoring: tools, workflows, exemplar books, and CSS Paged Media references. | Aggregates the practitioner-community knowledge around web-to-print workflows that complements Paged.js's official docs. |

## E2. Reader-flow patterns

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Evergreen notes | Matuschak (ongoing) | notes.andymatuschak.org | (no arXiv) | — | Working notes on the practice of writing evergreen notes — atomic, concept-oriented, densely linked notes that compound across projects. | Defines the evergreen-note properties (atomic, concept-oriented, densely linked) that inform random-access reader-flow design for cross-referenced technical material. |

---

**Section-anchor convention:** This file uses the `E` letter prefix.
