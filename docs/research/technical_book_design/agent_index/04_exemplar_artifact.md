# OSS / Web-First Technical Book Exemplars

Synthesis of specific OSS and web-first technical books that are worth modeling: each entry surfaces the structural choice, navigation model, and what would be borrowed. Coverage spans probabilistic ML (Murphy PML1+PML2), notebook-book hybrids (Zhang et al. d2l), conversational rigor (McElreath), the Quarto-native data-science canon (Wickham r4ds), industry-grade applied texts (Kohavi et al.), the foundational statistical-learning reference (Hastie et al.), open forecasting texts (Hyndman & Athanasopoulos), and applied-ML survey (Géron).

## D1. Probabilistic ML web books

- **Probabilistic Machine Learning: An Introduction** — Murphy (MIT Press 2022).
  - **Source:** https://probml.github.io/pml-book/book1.html
  - **Code:** https://github.com/probml/pyprobml
  - **Mechanism:** Comprehensive introduction to probabilistic machine learning, organized around model representation, learning, and inference; pairs the book with a companion Python codebase.
  - **Result:** Modern web-native academic textbook exemplar; the PDF-plus-companion-notebooks model demonstrates the "book-as-codebase" pattern where prose and code live in a shared repository.
  - **Status:** Unverified.

- **Probabilistic Machine Learning: Advanced Topics** — Murphy (MIT Press 2023).
  - **Source:** https://probml.github.io/pml-book/book2.html
  - **Code:** https://github.com/probml/pyprobml
  - **Mechanism:** Companion advanced volume extending PML1 with deep generative models, variational inference, sequence models, and decision theory.
  - **Result:** Demonstrates the multi-volume modular book pattern where introductory and advanced material live in separately navigable artifacts that share a codebase and citation system.
  - **Status:** Unverified.

## D2. Notebook-book hybrids and reproducible texts

- **Dive into Deep Learning** — Zhang, Lipton, Li & Smola (Cambridge University Press 2021).
  - **Source:** https://d2l.ai/
  - **Code:** https://github.com/d2l-ai/d2l-en
  - **Mechanism:** Interactive deep-learning textbook combining narrative chapters with runnable Jupyter notebooks rendered against multiple deep-learning frameworks (PyTorch, TensorFlow, MXNet).
  - **Result:** Defines the notebook-book hybrid pattern where every chapter is simultaneously a printable book chapter and an executable notebook, with framework-portable code.
  - **Status:** Unverified.

- **Dive into Deep Learning (arXiv version)** — Zhang, Lipton, Li & Smola (arXiv preprint 2021).
  - **Source:** https://arxiv.org/abs/2106.11342
  - **Code:** https://github.com/d2l-ai/d2l-en
  - **Mechanism:** arXiv version of the d2l book, providing a stable academic citation handle paired with the live web book.
  - **Result:** Establishes the practice of pairing a web book with an arXiv handle so academic citations have a stable identifier even as the live web version evolves.
  - **Status:** Unverified.

- **Statistical Rethinking** — McElreath (Chapman & Hall / CRC 2020, 2nd ed).
  - **Source:** https://xcelab.net/rm/
  - **Code:** —
  - **Mechanism:** Bayesian statistics textbook with examples in R and STAN, written for active rereading; mixes conversational explanation with full-rigor derivations rather than treating them as alternatives.
  - **Result:** Models the conversational-rigor pattern where prose voice does not signal a tradeoff between accessibility and depth; cited as the canonical exemplar for warmth-plus-rigor in technical writing.
  - **Status:** Unverified. (no widely-known repo)

- **R for Data Science** — Wickham, Çetinkaya-Rundel & Grolemund (O'Reilly Media 2023, 2nd ed).
  - **Source:** https://r4ds.hadley.nz/
  - **Code:** https://github.com/hadley/r4ds
  - **Mechanism:** Tidyverse-centered introduction to data science workflows in R, structured around the import-tidy-transform-visualize-model pipeline.
  - **Result:** Canonical Quarto-based reproducible-book exemplar; pioneers the pipeline-as-chapter-structure pattern where each pipeline stage gets its own chapter cluster.
  - **Status:** Unverified.

## D3. Industry-grade and foundational reference books

- **Trustworthy Online Controlled Experiments** — Kohavi, Tang & Xu (Cambridge University Press 2020).
  - **Source:** https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59
  - **Code:** —
  - **Mechanism:** Practitioner-oriented book on online controlled experiments authored by Microsoft, LinkedIn, and Airbnb experimentation leads; combines academic rigor with platform anecdotes.
  - **Result:** Model for "industry-grade technical book" — combines academic rigor with practitioner anecdotes from large-scale experimentation platforms; load-bearing reference for the experimentation domain.
  - **Status:** Unverified. (no widely-known repo)

- **Forecasting: Principles and Practice (3rd ed)** — Hyndman & Athanasopoulos (OTexts 2021).
  - **Source:** https://otexts.com/fpp3/
  - **Code:** —
  - **Mechanism:** Open-source web book covering time-series forecasting methods from exponential smoothing through state-space and machine-learning approaches.
  - **Result:** Canonical example of an open, web-first, freely-licensed technical textbook in a domain otherwise dominated by paywalled references; sets the bar for open-textbook quality.
  - **Status:** Unverified. (no widely-known repo)

- **The Elements of Statistical Learning** — Hastie, Tibshirani & Friedman (Springer 2009, 2nd ed).
  - **Source:** https://hastie.su.domains/ElemStatLearn/
  - **Code:** —
  - **Mechanism:** Foundational reference covering supervised and unsupervised learning methods with sustained emphasis on statistical underpinnings rather than implementation detail.
  - **Result:** Foundational shared-vocabulary reference for the modern ML practitioner canon; cited across virtually every web-native ML book as the shared vocabulary baseline.
  - **Status:** Unverified. (no widely-known repo)

- **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow** — Géron (O'Reilly Media 2022, 3rd ed).
  - **Source:** https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/
  - **Code:** —
  - **Mechanism:** Applied machine-learning textbook organized around end-to-end project workflow, with reproducible Python notebooks paired to each chapter.
  - **Result:** Model for project-oriented applied-ML books that pair narrative chapters with code-heavy implementation exercises; canonical practitioner-onboarding reference for the scikit/Keras/TF stack.
  - **Status:** Unverified. (no widely-known repo)
