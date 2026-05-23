# Documentation Methodology — Docs-as-Code Culture and Tooling

Version-controlled, CI-deployed, PR-reviewed documentation culture and the supporting tooling and community. Covers the canonical "Docs Like Code" reference, the Write the Docs community principles, and major open-source platforms (Read the Docs, Sphinx, MDN). Relevant for the public-guides repo's contribution model.

## D1. Cultural principles and references

- **Docs Like Code** — Gentle (Just Write Click, self-published; 2017; 3rd ed. 2022).
  - **Source:** https://justwriteclick.com/books/docs-like-code/
  - **Status:** Unverified (no widely-known repo).
  - **Mechanism:** Book covering the docs-as-code workflow — treating documentation as version-controlled engineering work with PR review, CI deploys, and tooling-agnostic patterns; covers Sphinx, MkDocs, Hugo, Jekyll, GitBook, and other static-site generators.
  - **Integration:** Canonical book-length reference for the docs-as-code workflow; the public-guides repo's Astro/MDX + PR-review + Vercel-preview model is a direct application of these patterns.

- **Documentation principles** — Write the Docs community (writethedocs.org, ongoing).
  - **Source:** https://www.writethedocs.org/guide/writing/docs-principles/
  - **Status:** Unverified (website / ongoing).
  - **Mechanism:** Community-maintained set of principles for technical documentation including ARID (Accept some Repetition In Documentation, in contrast to DRY for code), discoverability heuristics, and writing-process patterns.
  - **Integration:** ARID is particularly load-bearing for the public-guides repo — chapters are intentionally self-contained, so beneficial repetition is expected rather than refactored away.

## D2. Documentation platforms and style guides

- **Read the Docs — Full featured documentation deployment platform** — Holscher et al. (readthedocs.com, since 2010).
  - **Source:** https://about.readthedocs.com/
  - **Code:** https://github.com/readthedocs/readthedocs.org
  - **Mechanism:** Open-source documentation hosting platform offering automated builds from Git repositories, support for Sphinx and MkDocs generators, versioned hosting (per branch / tag), and integrated search.
  - **Result:** Canonical hosting platform for the docs-as-code workflow in the Python ecosystem; widely used by major open-source projects (NumPy, Django docs were historically hosted there).
  - **Status:** Unverified.

- **Writing style guide** — MDN Web Docs / Mozilla (developer.mozilla.org, ongoing).
  - **Source:** https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Writing_style_guide
  - **Status:** Unverified (website / ongoing).
  - **Mechanism:** Style guide for contributors to MDN Web Docs covering tone, voice, structure conventions, code formatting, terminology, and accessibility guidelines.
  - **Integration:** Major open style-guide reference; useful template for the public-guides repo's contributor style guide.

- **Sphinx — Python documentation generator** — Brandl et al. (sphinx-doc.org, since 2008).
  - **Source:** https://www.sphinx-doc.org/en/master/
  - **Code:** https://github.com/sphinx-doc/sphinx
  - **Mechanism:** Static-site documentation generator using reStructuredText as the primary input format (with MyST/Markdown via extensions); supports cross-references, autodoc (from Python docstrings), and a rich extension ecosystem.
  - **Result:** Foundational documentation generator in the Python ecosystem; powers most Read the Docs sites and the official Python language documentation.
  - **Status:** Unverified.
