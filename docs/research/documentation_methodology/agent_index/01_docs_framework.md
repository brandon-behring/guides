# Documentation Methodology — Docs Frameworks (Diátaxis, Information Mapping, DITA)

Documentation-organization frameworks at three granularities (document, block, topic). These frameworks supply discipline for what kind of artifact a chapter is, which informs chapter-shape decisions in the public-guides repo.

## A1. Diátaxis and modern doc-type frameworks

- **Diátaxis: A systematic framework for technical documentation authoring** — Procida (diataxis.fr, ongoing).
  - **Source:** https://diataxis.fr/
  - **Status:** Unverified (website / ongoing).
  - **Mechanism:** Classifies documentation into four quadrants — tutorial, how-to guide, reference, explanation — along learning-vs-application and acquisition-vs-application axes; each quadrant has a distinct user mode and a corresponding writing discipline.
  - **Integration:** Use Diátaxis to classify each public-guide chapter into one of the four quadrants before drafting; this informs whether the chapter is narrative (tutorial/explanation) or lookup-oriented (reference/how-to).

## A2. Predecessor frameworks (Information Mapping, DITA)

- **Information Mapping methodology** — Horn et al. (Information Mapping Inc., method origin 1969–1976; ongoing).
  - **Source:** https://informationmapping.com/pages/information-mapping-methodology
  - **Status:** Unverified (website / ongoing).
  - **Mechanism:** Classifies content into block-level information types — Procedure, Process, Concept, Principle, Structure, Fact, Classification — with rules for structuring each type and labeling blocks consistently.
  - **Integration:** Operates at finer granularity than Diátaxis (block-level rather than document-level); useful as a within-chapter discipline complementing Diátaxis's document-level classification.

- **Darwin Information Typing Architecture (DITA) Version 1.2 Specification** — OASIS DITA Technical Committee (OASIS Standard, 2010).
  - **Source:** https://docs.oasis-open.org/dita/v1.2/os/spec/DITA1.2-spec.html
  - **Status:** Unverified (no widely-known repo).
  - **Mechanism:** Defines an XML topic architecture with three base topic types — Concept, Task, Reference — plus extension mechanisms (specialization), content reuse (content references / conrefs), and content maps (DITA maps).
  - **Integration:** Heavier-weight than Diátaxis; relevant for the public-guides repo only as historical comparison (the repo uses MDX, not DITA XML). The topic-type vocabulary (concept/task/reference) maps loosely onto Diátaxis (explanation/how-to/reference).
