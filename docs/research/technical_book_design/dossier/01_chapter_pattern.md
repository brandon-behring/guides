# Technical Book Design — Chapter-Shape Doctrines

Named chapter-shape doctrines and authoring frameworks: when each works, what tradeoffs each forces (rigor vs accessibility, depth vs survey, sequencing vs random-access). Sources span textbook front-matter (Koller-Friedman PGM), documentation frameworks (Diátaxis), expository methodology (Pólya), authoring toolchains (bookdown), and pedagogical theory (Bruner's spiral curriculum).

## A1. Doctrines and frameworks

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Probabilistic Graphical Models: Principles and Techniques | Koller & Friedman (2009) | MIT Press | (no arXiv) | — | Comprehensive PGM textbook organized around the Representation / Inference / Learning chapter trichotomy. | Canonical exemplar of the "Representation / Operation / Evolution" chapter-shape doctrine used to scaffold technical exposition that spans definition through algorithmic operation. |
| Diátaxis: A systematic framework for technical documentation authoring | Procida (ongoing) | diataxis.fr | (no arXiv) | — | Documentation authoring framework distinguishing four orthogonal content types: tutorials, how-to guides, reference, and explanation. | Provides a content-typology decision rule for routing a piece of writing to one of four chapter shapes based on user need (learning vs goal vs information vs understanding). |
| How to Solve It: A New Aspect of Mathematical Method | Pólya (1945) | Princeton University Press | (no arXiv) | — | Heuristic-driven framework for mathematical problem-solving organized around understand-plan-execute-review. | Canonical reference for the "problem-method-reflection" expository pattern used in mathematical chapters; the four-phase heuristic underlies many modern textbook problem sections. |
| bookdown: Authoring Books and Technical Documents with R Markdown | Xie (2017) | Chapman & Hall / CRC The R Series | (no arXiv) | — | Authoring-system manual for producing book-length technical documents from R Markdown sources with cross-references, equations, and multi-format output. | Defines a reproducible pipeline pattern where the authoring source is also the analysis source, enabling figures and computation to live inline with prose. |
| The Process of Education | Bruner (1960) | Harvard University Press | (no arXiv) | — | Foundational text on curriculum design introducing the spiral curriculum and the claim that any subject can be taught honestly at any developmental stage. | Establishes the spiral-curriculum doctrine — chapters revisit topics at successively deeper levels rather than treating each topic linearly. |

---

**Section-anchor convention:** This file uses the `A` letter prefix (`A1`). Sibling dossier files use `B`, `C`, `D`, `E` matching their two-digit prefix.
