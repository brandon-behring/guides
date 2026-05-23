# Research Plan: Learning Pedagogy

Discover primary sources in the cognitive science of learning that inform how interview-prep guides should be structured to maximize learning + retention. Output feeds card design (cloze vs term vs problem types), problem/vignette density, spaced-repetition cadence assumptions, worked-example structure, learning-outcome framing, and active-strategy callouts in the style guide v0.0 of `interview-guides`. Target: heavy dossier (~200-300 entries), 7 sub-areas covering retrieval practice, spaced repetition, cognitive load, multimedia learning, expertise development, Bloom's taxonomy, and active-learning strategies.

## Sub-areas

- A1. Retrieval practice + testing effect
  - Source types: peer-reviewed psychology / cognitive-science journals (JEP, Memory, Psychological Science, JML), conference proceedings, meta-analyses, replication studies, textbooks (Roediger, Karpicke, Bjork)
  - Notes: The single most-replicated finding in learning science — testing > restudying for long-term retention. Core questions: free-recall vs cued-recall vs multiple-choice formats; spacing of retrieval attempts; the relationship between retrieval difficulty and retention ("desirable difficulties"); retrieval-induced forgetting; transfer of retrieval-practice effects. Practical implication for guides: when to use `<Card>` (active recall) vs `<Problem>` (constructed-response retrieval) vs prose summary. Also cover the "pretesting effect" — being tested on material *before* studying it boosts later learning.

- A2. Spaced repetition + interleaving
  - Source types: cognitive-psychology journals, applied learning-science research (Anki / SuperMemo evidence base), educational psychology, instructional-design studies, Wozniak's SuperMemo technical reports
  - Notes: Ebbinghaus forgetting curve; the spacing effect (Cepeda, Pashler); expanding-interval schedules (Pimsleur, Leitner box, SM-2 / FSRS); interleaving vs blocking (Rohrer); when interleaving helps (high-similarity items requiring discrimination) vs hurts (low-similarity items where chunked context aids encoding). Practical implication: card-extraction policy for `<Card>`-derived .apkg files; how to cue interleaving in problem sets vs let the reader manage it; the design of "review chapters" or end-of-section consolidation.

- A3. Worked examples, faded scaffolding, cognitive load
  - Source types: educational psychology (Sweller, Renkl, van Merriënboer, Paas), instructional-design journals (Cognition & Instruction, Educational Psychologist), CHI / educational-technology proceedings
  - Notes: Sweller's cognitive-load theory — intrinsic vs extraneous vs germane load. The worked-example effect (Sweller & Cooper 1985); how the *expertise reversal effect* (Kalyuga) modifies it for advanced learners (relevant for L4-L6 audience — they're not novices); faded scaffolding (worked → partial → solo); split-attention and modality effects; the redundancy effect (don't narrate what's also displayed in text). Practical implication: how problem-solutions should be structured (full worked example vs hints vs blank space); when to use vignettes (case studies are worked examples at scale).

- A4. Multimedia learning principles (Mayer's CTML)
  - Source types: Mayer's *Cambridge Handbook of Multimedia Learning* (canonical), his individual papers, ed-tech research applying CTML, A/B-tested instructional-video studies
  - Notes: The 12 principles of multimedia learning — multimedia, contiguity (spatial + temporal), coherence, signaling, redundancy, modality, segmenting, pre-training, personalization, voice, image, embodiment. Relevance to a print/web technical book: most of CTML is derived from narrated-animation studies, but the modality, signaling, coherence, contiguity, and segmenting principles port directly to text-with-figure design. Specifically the *coherence principle* (cut anything that doesn't directly serve the learning objective) and the *signaling principle* (highlight structure; use headers/typography to mark organization).

- A5. Expertise development + deliberate practice + chunking
  - Source types: Ericsson's "expert performance" line of work, chess / sports / music studies, cognitive-science studies of chunking and pattern recognition, naturalistic-decision-making (Klein), domain-specific (programming-expertise) studies, "Peak" (Ericsson popular), the Hambrick et al. critiques
  - Notes: Deliberate practice (Ericsson, Krampe, Tesch-Romer 1993) — specific, effortful, with feedback. Chunking and pattern recognition (Chase & Simon 1973, chess studies). The 10,000-hour heuristic and its limitations (Hambrick et al. domain-effect-size critique). Programming-specific expertise — chunking of code patterns, mental models, debugging schemas. *Pattern recognition* over enumeration in technical interviews — the L4 → L5 → L6 progression maps to this. Practical implication: how to frame vignettes / problems to build *patterns* not just *solutions*; the design of "compare and contrast" exercises.

- A6. Bloom's taxonomy + learning-outcome design
  - Source types: Bloom (1956) original, Anderson & Krathwohl (2001) revision, applied LO-design literature in higher education, competency-based education research, criterion-referenced testing literature, ACGME / professional-certification curriculum-design docs
  - Notes: The revised taxonomy — Remember / Understand / Apply / Analyze / Evaluate / Create. Knowledge-dimension vs cognitive-process-dimension (the 2D matrix). Practical implication: every chapter in the existing LaTeX guides opens with `\los{}{}{}` macros mapping to Bloom's levels (`define` / `explain` / `calculate` / `compare` / `analyze` / `design`); this is already in use but the rationale + the granular conventions for what counts as "design" vs "evaluate" need grounding. Also: criterion-referenced vs norm-referenced testing — interview prep is somewhere between (criterion-referenced for self-study; norm-referenced when comparing to other candidates).

- A7. Active learning strategies (elaboration, self-explanation, dual coding)
  - Source types: cognitive psychology (Chi, Pressley, Mayer), education research (Dunlosky meta-analyses), study-skills research, the Learning Scientists blog (Weinstein, Sumeracki, Smith — popular summary of academic literature)
  - Notes: Self-explanation effect (Chi et al. 1989, 1994) — generating explanations boosts comprehension. Elaborative interrogation — asking "why is this true?". Dual coding (Paivio, Clark) — combining verbal + visual representations. The Dunlosky et al. 2013 meta-analysis classifying learning techniques by efficacy (practice testing + distributed practice = high utility; highlighting + rereading = low utility — counterintuitive). Practical implication: prose should *invite* self-explanation (open questions in text, "Why does this work?" sidenotes); figures should pair with verbal description (dual coding); discourage low-utility patterns the design might accidentally enable (overly highlighted PDFs).

## Out-of-scope

- K-12 classroom pedagogy and developmental-stage-specific instruction — different audience constraints; deserves its own plan if ever needed
- Standardized-test psychometrics (SAT/GRE item-response theory, equating, scaling) — measurement focus, not learning focus
- ML/AI tutoring system implementation (intelligent tutoring systems, LLM-tutor design) — separate engineering domain
- Adult learning theory at the institutional/policy level (Knowles' andragogy, MOOC platform design) — not relevant for an open guides repo
- Foreign-language acquisition — different mechanisms (interleaved L1/L2, immersion, etc.) and not relevant
- Motor-skill learning — different mechanisms (procedural memory, motor consolidation)
- Special education / disability-specific learning supports — deserves its own scoping; not a competence we should fake
- The "learning styles" hypothesis — repeatedly debunked (Pashler et al. 2008); we should not engineer around it. Note in passing in the dossier; do not gather supporting work.
- Brain-training apps / general cognitive enhancement claims — different evidence base, mostly null results

## Claim family taxonomy

- `retrieval_practice` — testing effect, retrieval formats, pretesting, retrieval-induced forgetting
- `spaced_interleaving` — spacing effect, interleaving, scheduling algorithms (Leitner, SM-2, FSRS)
- `cognitive_load` — Sweller's load types, worked examples, expertise reversal, faded scaffolding
- `multimedia_learning` — Mayer's 12 principles applied to print/web
- `expertise_development` — deliberate practice, chunking, pattern recognition, mental models
- `learning_outcomes` — Bloom's taxonomy, LO writing conventions, competency frameworks
- `active_strategies` — self-explanation, elaboration, dual coding, study-skill efficacy

## Known landmark papers

- `roediger2006testing` — Roediger & Karpicke (2006) "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention" (*Psychological Science*). The canonical testing-effect demonstration.
- `karpicke2008critical` — Karpicke & Roediger (2008) "The Critical Importance of Retrieval for Learning" (*Science*). Definitive separation of retrieval practice from re-study.
- `sweller1988cognitive` — Sweller (1988) "Cognitive Load During Problem Solving" (*Cognitive Science*). Foundational paper for cognitive-load theory.
- `mayer2009multimedia` — Mayer (2009) *Multimedia Learning* (2nd ed). Canonical synthesis of the 12 multimedia principles; CTML.
- `ericsson1993role` — Ericsson, Krampe, Tesch-Römer (1993) "The Role of Deliberate Practice in the Acquisition of Expert Performance" (*Psychological Review*). Foundational deliberate-practice paper.
- `bjork1994memory` — Bjork (1994) "Memory and Metamemory Considerations in the Training of Human Beings" (in Metcalfe & Shimamura). Introduces "desirable difficulties."
- `anderson2001taxonomy` — Anderson & Krathwohl (2001) *A Taxonomy for Learning, Teaching, and Assessing*. The revised Bloom's taxonomy.
- `dunlosky2013improving` — Dunlosky et al. (2013) "Improving Students' Learning With Effective Learning Techniques" (*Psychological Science in the Public Interest*). Meta-analysis classifying techniques by efficacy.
