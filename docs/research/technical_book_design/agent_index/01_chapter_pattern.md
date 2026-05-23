# Chapter-Shape Doctrines

Synthesis of named chapter-shape doctrines that inform how a technical-book chapter is structured. Entries cover the Representation/Inference/Learning trichotomy (Koller-Friedman), the Diátaxis content-type quadrant (Procida), Pólya's heuristic problem-solving frame, the bookdown reproducible-pipeline pattern (Xie), and Bruner's spiral curriculum.

## A1. Doctrines and frameworks

- **Probabilistic Graphical Models** — Koller & Friedman (MIT Press 2009).
  - **Source:** https://mitpress.mit.edu/9780262013192/probabilistic-graphical-models/
  - **Code:** —
  - **Mechanism:** Organizes the PGM domain around a chapter trichotomy: Representation (what a graphical model is), Inference (how to compute with one), Learning (how to estimate one from data).
  - **Result:** Canonical exemplar of the "Representation / Operation / Evolution" chapter-shape doctrine; the trichotomy is borrowed by downstream technical writers for any topic that spans definition through algorithmic operation.
  - **Status:** Unverified. (no widely-known repo)

- **Diátaxis** — Procida (ongoing, `diataxis.fr`).
  - **Source:** https://diataxis.fr/
  - **Code:** —
  - **Mechanism:** Distinguishes four content types — tutorials, how-to guides, reference, explanation — and routes each piece of documentation to one type based on user need (learning vs goal vs information vs understanding).
  - **Result:** Provides a content-typology decision rule; resolves the common authoring failure of mixing tutorial and reference material in the same chapter.
  - **Status:** Unverified. (no widely-known repo)

- **How to Solve It** — Pólya (Princeton University Press 1945).
  - **Source:** https://press.princeton.edu/books/paperback/9780691164076/how-to-solve-it
  - **Code:** —
  - **Mechanism:** Frames mathematical problem-solving as a four-phase heuristic: understand the problem, devise a plan, carry out the plan, look back.
  - **Result:** Canonical reference for the "problem-method-reflection" expository pattern used in mathematical chapters; the four-phase heuristic structures problem sections in many modern textbooks.
  - **Status:** Unverified. (no widely-known repo)

- **bookdown: Authoring Books and Technical Documents with R Markdown** — Xie (Chapman & Hall / CRC 2017).
  - **Source:** https://bookdown.org/yihui/bookdown/
  - **Code:** —
  - **Mechanism:** Defines a reproducible-pipeline pattern where the authoring source (R Markdown) is also the analysis source; figures and computation render inline with prose at build time.
  - **Result:** Establishes the doctrine that the authoring source can simultaneously be the analysis source, enabling reproducible technical books where figures live alongside the code that produced them.
  - **Status:** Unverified. (no widely-known repo)

- **The Process of Education** — Bruner (Harvard University Press 1960).
  - **Source:** https://www.hup.harvard.edu/books/9780674710016
  - **Code:** —
  - **Mechanism:** Foundational text on curriculum design; introduces the spiral curriculum and the claim that any subject can be taught honestly at any developmental stage if framed appropriately.
  - **Result:** Establishes the spiral-curriculum doctrine where chapters revisit topics at successively deeper levels rather than treating each topic linearly; informs progressive-disclosure design in modern technical books.
  - **Status:** Unverified. (no widely-known repo)
