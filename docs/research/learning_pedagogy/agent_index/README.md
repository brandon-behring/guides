# Learning Pedagogy — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for the cognitive science of learning. Read this README first. -->

**Purpose:** Provide foundational primary-source grounding in the cognitive science of learning, organized for both humans (skimming directly) and future LLM agents (grounding reasoning in this literature). Designed as the theoretical floor under applied work in `interview_prep_pedagogy` and `ai_assisted_authoring`.
**Primary intended consumer:** future Claude Code / LLM agents working on instructional-design problems (study-card extraction policy, problem density, spaced-repetition cadence, learning-outcome specification) who need primary-source citations rather than ad-hoc memory.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself. Move it elsewhere and it still works.
**Scope:** seven foundational research lines (retrieval practice, spaced practice, cognitive load, multimedia learning, expertise development, learning outcomes, active strategies); primary sources span 1973–2014.
**Coverage:** 17 entries across 4 topic files plus a glossary file; 5-bullet entries (Source / Code / Mechanism / Result / Status).
**Last updated:** 2026-05-19.

## Scope boundary

This folder covers **foundational cognitive science of learning** — the empirical and theoretical primary sources that govern instructional design at the level of learning principles. It does NOT cover:

- **Applied interview-prep instructional design.** That work — how the principles below translate to LaTeX volume structure, card extraction policy, vignette density, drill-skill design — lives in the adjacent `interview_prep_pedagogy/` dossier. The synthesis here is the theoretical floor under that adjacent applied work.

- **LLM-mediated tutoring and prompt-engineering for instruction.** Work on using Claude / GPT / agentic systems to deliver instruction or generate study materials lives in the adjacent `ai_assisted_authoring/` dossier. The synthesis here covers the underlying learning principles; the adjacent dossier covers how an LLM workflow can apply or evaluate them.

- **K-12 classroom pedagogy and developmental-stage-specific instruction.** Different audience constraints; out of scope per the research_plan.

- **Educational neuroscience and brain-imaging studies of learning.** Different evidence base; the cognitive-psychological abstractions in this folder are the right level for instructional design.

- **Learning analytics, learning-management dashboards, and adaptive-tutoring system implementations.** Engineering domain; out of scope.

- **The learning-styles hypothesis as a constructive framework.** Included here only as the canonical negative result (Pashler et al. 2008); not engineered around.

**Cross-vol overlap convention:** when a paper is methodologically relevant to multiple dossiers, primary location is determined by claim_family and adjacency stated above. Do NOT duplicate entries across dossiers.

## How this is organized

Sub-section anchors use a per-file letter prefix (`## A1.` in file 01, `## B1.` in file 02, `## C1.` in file 03, `## D1.` in file 04). Lookup recipes below reference these anchors.

| File | Topic | When to read |
|---|---|---|
| `00_overview.md` | Theoretical orientation + glossary | Start here if new to the cognitive science of learning |
| `01_retrieval_and_spacing.md` | Testing effect, spacing, interleaving, desirable difficulties (anchors A1, A2) | When designing retrieval schedules or justifying spaced-practice cadence |
| `02_cognitive_load_and_multimedia.md` | Cognitive-load theory, expertise reversal, Mayer's CTML (anchors B1, B2) | When designing the structure of an individual study episode (text-figure pairings, worked-example fading) |
| `03_expertise_and_outcomes.md` | Deliberate practice, chunking, revised Bloom's taxonomy (anchors C1, C2) | When specifying learning outcomes or designing problems that build patterns rather than just solutions |
| `04_active_strategies.md` | Self-explanation, technique-efficacy meta-analysis, learning-styles refutation (anchor D1) | When choosing between active-study moves (self-explanation, elaboration) and avoiding low-utility patterns |

## Lookup recipes

Routes by question type. Each points to a specific file and section anchor.

- **"What's the foundational paper on the testing effect?"** → `01_retrieval_and_spacing.md` § A1 (Roediger & Karpicke 2006, *The Power of Testing Memory*).
- **"What's the canonical demonstration that retrieval practice beats restudy?"** → `01_retrieval_and_spacing.md` § A1 (Karpicke & Roediger 2008, *The Critical Importance of Retrieval for Learning*, Science).
- **"What's the foundational meta-analysis of the spacing effect?"** → `01_retrieval_and_spacing.md` § A2 (Cepeda et al. 2006, Psychological Bulletin).
- **"What's the canonical paper on interleaving in mathematics?"** → `01_retrieval_and_spacing.md` § A2 (Rohrer & Taylor 2007).
- **"Where does the term 'desirable difficulties' come from?"** → `01_retrieval_and_spacing.md` § A2 (Bjork 1994).
- **"What's the foundational paper for cognitive-load theory?"** → `02_cognitive_load_and_multimedia.md` § B1 (Sweller 1988).
- **"What's the expertise reversal effect?"** → `02_cognitive_load_and_multimedia.md` § B1 (Kalyuga 2007) and `00_overview.md` § Glossary.
- **"Where are Mayer's twelve multimedia-learning principles canonically stated?"** → `02_cognitive_load_and_multimedia.md` § B2 (Mayer 2009, *Multimedia Learning*, 2nd ed.).
- **"What's the comprehensive handbook for multimedia-learning research?"** → `02_cognitive_load_and_multimedia.md` § B2 (Mayer ed. 2014).
- **"What's a compact practitioner reference for reducing cognitive load in multimedia?"** → `02_cognitive_load_and_multimedia.md` § B2 (Mayer & Moreno 2003).
- **"What's the foundational paper on deliberate practice?"** → `03_expertise_and_outcomes.md` § C1 (Ericsson, Krampe, & Tesch-Römer 1993).
- **"What's the foundational paper on chunking in expertise?"** → `03_expertise_and_outcomes.md` § C1 (Chase & Simon 1973, *Perception in Chess*).
- **"Where is the revised Bloom's taxonomy canonically stated?"** → `03_expertise_and_outcomes.md` § C2 (Anderson, Krathwohl et al. 2001).
- **"What's a compact summary of the revised Bloom's taxonomy?"** → `03_expertise_and_outcomes.md` § C2 (Krathwohl 2002, Theory Into Practice).
- **"What's the canonical paper on the self-explanation effect?"** → `04_active_strategies.md` § D1 (Chi et al. 1989).
- **"What's the most-cited meta-analysis ranking study techniques by efficacy?"** → `04_active_strategies.md` § D1 (Dunlosky et al. 2013).
- **"What's the canonical critique of learning styles?"** → `04_active_strategies.md` § D1 (Pashler et al. 2008).
- **"Which study techniques are high-utility versus low-utility?"** → `04_active_strategies.md` § D1 (Dunlosky et al. 2013) and `00_overview.md` § Glossary.
- **"What's the intrinsic / extraneous / germane load distinction?"** → `00_overview.md` § Glossary and `02_cognitive_load_and_multimedia.md` § B1 (Sweller 1988).
- **"What unifies spacing, interleaving, retrieval, and variability of practice?"** → `01_retrieval_and_spacing.md` § A2 (Bjork 1994, desirable difficulties).
- **"Where do I start if I'm new to learning science?"** → `00_overview.md` then `01_retrieval_and_spacing.md`.

## Glossary

The full glossary lives in `00_overview.md`. Canonical terms covered: testing effect, spacing effect, interleaving, desirable difficulties, intrinsic / extraneous / germane cognitive load, expertise reversal effect, modality principle, redundancy principle, coherence principle, signaling principle, deliberate practice, chunking, revised Bloom's taxonomy, self-explanation effect, learning styles hypothesis, high-utility learning techniques, low-utility learning techniques.

## Verification & limits

- Citations resolved as of 2026-05-19.
- All entries are marked `Unverified` per the `/research-gather` first-pass protocol; promotion to `Verified` happens via `/dossier-audit` rounds against primary sources.
- All entries are academic publications (peer-reviewed journals, edited volumes, books). The Mayer 2009 monograph and the Anderson & Krathwohl 2001 book have stable publisher URLs but no open-access primary source; the cited URLs route to the canonical publisher pages.
- The cognitive science of learning is a slow-moving field. The 1973 (Chase & Simon) and 1988 (Sweller) primary sources remain canonical despite their age; this is not a freshness concern.
- No quantitative claims are made in the synthesis bullets that do not appear in the linked primary sources' abstracts or canonical summaries; specific effect sizes and intervention parameters live in the primary sources, not here.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`). URLs link to primary sources (publisher pages, archived PDFs, journal DOIs). No local file paths are referenced.
