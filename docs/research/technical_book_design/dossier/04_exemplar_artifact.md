# Technical Book Design — OSS / Web-First Technical Book Exemplars

Specific OSS and web-first technical books worth modeling: each entry captures the structural choice, navigation model, build pipeline, and what would be borrowed. Coverage spans Bayesian / probabilistic machine learning (Murphy PML1+PML2), notebook-book hybrids (Zhang et al. d2l), conversational rigor (McElreath), the Quarto-native data-science canon (Wickham r4ds), industry-grade applied texts (Kohavi et al.), the foundational statistical-learning reference (Hastie et al.), open forecasting texts (Hyndman & Athanasopoulos), and applied-ML survey (Géron).

## D1. Probabilistic ML web books

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Probabilistic Machine Learning: An Introduction | Murphy (2022) | MIT Press | (no arXiv) | probml/pyprobml | Comprehensive introduction to probabilistic machine learning organized into model representation, learning, and inference. | Modern web-native academic textbook exemplar; the PDF + companion Python notebooks model the "book-as-codebase" pattern. |
| Probabilistic Machine Learning: Advanced Topics | Murphy (2023) | MIT Press | (no arXiv) | probml/pyprobml | Companion advanced volume extending PML1 with deep generative models, variational inference, sequence models, and decision theory. | Demonstrates the multi-volume modular book pattern where introductory and advanced material live in separately navigable artifacts that share a codebase. |

## D2. Notebook-book hybrids and reproducible texts

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Dive into Deep Learning | Zhang, Lipton, Li & Smola (2021) | Cambridge University Press | (no arXiv) | d2l-ai/d2l-en | Interactive deep-learning textbook combining narrative chapters with runnable Jupyter notebooks in multiple deep-learning frameworks. | Defines the notebook-book hybrid pattern where every chapter is simultaneously a printable book chapter and an executable notebook. |
| Dive into Deep Learning | Zhang, Lipton, Li & Smola (2021) | arXiv preprint | arXiv:2106.11342 | d2l-ai/d2l-en | arXiv version of the d2l book, providing a stable citation handle for the web book. | Establishes the practice of pairing a web book with an arXiv handle so academic citations can use a stable identifier. |
| Statistical Rethinking: A Bayesian Course with Examples in R and STAN | McElreath (2020; 2nd ed) | Chapman & Hall / CRC Texts in Statistical Science | (no arXiv) | — | Bayesian statistics text purposefully written for active rereading, mixing conversational explanation with full-rigor derivations. | Models the conversational-rigor pattern where prose voice does not signal a tradeoff between accessibility and depth. |
| R for Data Science: Import, Tidy, Transform, Visualize, and Model Data | Wickham, Çetinkaya-Rundel & Grolemund (2023; 2nd ed) | O'Reilly Media | (no arXiv) | hadley/r4ds | Tidyverse-centered introduction to data science workflows in R, organized around the import-tidy-transform-visualize-model pipeline. | Canonical Quarto-based reproducible-book exemplar; pioneers the pipeline-as-chapter-structure pattern for tooling-heavy texts. |

## D3. Industry-grade and foundational reference books

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing | Kohavi, Tang & Xu (2020) | Cambridge University Press | (no arXiv) | — | Practitioner-oriented book on online controlled experiments authored by Microsoft / LinkedIn / Airbnb experimentation leads. | Model for "industry-grade technical book" — combines academic rigor with practitioner anecdotes from large-scale experimentation platforms. |
| Forecasting: Principles and Practice (3rd ed) | Hyndman & Athanasopoulos (2021) | OTexts | (no arXiv) | — | Open-source web book covering time-series forecasting methods from exponential smoothing through state-space and ML approaches. | Canonical example of an open, web-first, freely-licensed technical textbook in a domain dominated by paywalled references. |
| The Elements of Statistical Learning: Data Mining, Inference, and Prediction | Hastie, Tibshirani & Friedman (2009; 2nd ed) | Springer Series in Statistics | (no arXiv) | — | Foundational reference covering supervised and unsupervised learning methods with emphasis on statistical underpinnings. | Foundational shared-vocabulary reference for the modern ML practitioner canon; cited across virtually every web-native ML book. |
| Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow | Géron (2022; 3rd ed) | O'Reilly Media | (no arXiv) | — | Applied machine-learning textbook organized around end-to-end project workflow with reproducible Python notebooks. | Model for project-oriented applied-ML books that pair narrative chapters with code-heavy implementation exercises. |

---

**Section-anchor convention:** This file uses the `D` letter prefix.
