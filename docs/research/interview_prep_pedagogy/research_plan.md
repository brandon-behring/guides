# Research Plan: Interview-Prep Pedagogy

Discover primary sources at the intersection of high-stakes test-prep methodology, empirical interview-process research, and the pedagogy that bridges "knowing the material" and "performing on the day." Output feeds the design of mock-interview integration, drill cadence, problem-difficulty progression, the cards-vs-problems-vs-vignettes tradeoff, and the verbalization/communication callouts in the style guide v0.0 of `interview-guides`. Target: heavy dossier (~200-300 entries), 6 sub-areas covering high-stakes credential prep, empirical interview research, spaced-repetition-in-credentialing, expert problem-solving, mock practice, and communication-under-pressure.

## Sub-areas

- A1. High-stakes professional-credential test-prep methodology
  - Source types: educational-measurement journals, exam-vendor research (CFA Institute, Society of Actuaries, NBME for USMLE, bar-exam pedagogy literature), commercial prep-provider whitepapers (Kaplan, Schweser, ASM, Coaching Actuaries), peer-reviewed studies on cohort outcomes
  - Notes: How CFA / actuarial / USMLE / bar candidates structure ~6-12 months of study. The role of question banks (TBLE, ASM problem sets, USMLEWorld) vs textbook reading; the schedule of mocks; "high-yield" content curation vs comprehensive coverage. Specifically: the *vignette* format that CFA uses extensively is a direct model for guide vignette design — multi-question scenarios with embedded data tables and increasing item difficulty. Capture studies of pass-rate predictors (study hours, mock-exam scores, prior coursework). Out: the actual content of these exams; we want the *method*, not the syllabus.

- A2. Empirical research on technical interviews
  - Source types: ICSE / CHI / FSE / SIGCSE proceedings, applied-psychology journals (Personnel Psychology, J. Applied Psych), industry studies, gender / equity research on interview outcomes
  - Notes: What the empirical literature actually shows about coding/whiteboarding/take-home/system-design formats. The Behroozi et al. line of work (CHI 2019/2020) showing stress impact on whiteboard performance; gender effects in technical-interview pipelines; private vs whiteboard format A/B research; the *signal value* of various interview formats (correlation with on-the-job performance, when published). Also: what does "demonstrating reasoning" empirically mean — the difference between candidates who explain process vs those who silently produce solutions. Critical question: does the interview format we're preparing for actually measure what we hope it measures? Pedagogically relevant because it informs what to practice + the verbalization protocol.

- A3. Spaced repetition + flashcard methodology in professional credentialing
  - Source types: Anki / SuperMemo community evidence (Wozniak's site, r/Anki, AnKing for medical, applied SR research in medical/dental/CFA contexts), spaced-repetition platform vendor research (Brainscape, Quizlet for credentialing), educational-data-mining studies
  - Notes: The actually-applied SR literature for professional credentialing — what schedules work, when do candidates burn out, what card-design conventions help (atomic facts, cloze deletions, image occlusion). The "card creation as learning" hypothesis (writing your own cards beats consuming pre-made ones); the Anki algorithm (SM-2 / FSRS) parameter choices for adult learners. Important: the *medical-school AnKing pattern* of comprehensive shared decks vs the *handcrafted personal deck* approach — which serves technical interview prep better? Also the practical question: when do flashcards stop adding value (mastery threshold)?

- A4. Expert problem-solving + pattern recognition for technical interviews
  - Source types: Polya tradition (Polya 1945 + descendants), Schoenfeld's mathematical-problem-solving research, computer-science-education research on novice-to-expert pattern recognition, LeetCode-style "pattern" frameworks (industry literature, blog posts from Google / Meta / Stripe engineers), the McDowell *Cracking the Coding Interview* canon
  - Notes: Polya's four-phase heuristic (Understand / Plan / Execute / Look Back) and its descendants in CS contexts. Schoenfeld's expansion — metacognition, beliefs about problem-solving as load-bearing. Empirical work on chunking in code-pattern recognition (Soloway et al.). The "patterns" literature that LeetCode prep books rely on (Sliding Window, Two Pointers, BFS/DFS, DP-as-decision-tree) — what's the academic provenance and what does empirical work say about pattern-based vs principle-based learning? Pedagogical implication: when is a problem teaching a *pattern* (recognition shortcut) vs teaching a *principle* (deep transfer)?

- A5. Mock-interview design + behavioral / think-aloud protocols
  - Source types: industrial-organizational psychology (employment-interview meta-analyses, McDaniel et al., Campion, Janz), the STAR method's origin literature (behavior-description interviewing), think-aloud protocol research (Ericsson & Simon), coaching-as-development literature
  - Notes: STAR (Situation-Task-Action-Result) has a real academic ancestry in behavior-description interviewing (Janz 1982, 1986). Empirical research on its validity (McDaniel et al. 2007 meta-analysis). Think-aloud / verbalize-while-solving protocols (Ericsson & Simon 1993) — these are research methods, but also a pedagogical lever (forces reflection). Mock-interview cadence research (how often, with whom, with what feedback). The role of the *interviewer-as-pedagogue* vs *interviewer-as-evaluator* tension when a peer is mocking you. Practical implication: when guides should script "say this out loud" prompts; how vignettes should require verbalization.

- A6. Communication + signaling under time pressure
  - Source types: communication-skills research, public-speaking / explanatory-skills literature, "executive presence" research from leadership-development, applied-cognitive-psychology on chunking output for listeners, software-industry style-guide literature on "tech communication"
  - Notes: The L4-vs-L5 vs L5-vs-L6 progression — what literature exists on the leveling distinctions that interview rubrics use? "Senior signal" — what verbal patterns differentiate IC5 candidates from IC4 (per public rubric documentation from Meta, Google, etc.). Verbalization-as-load-management (offloading cognition through speech). The "uphill / downhill" framing for status-management in conversations. Pedagogical implication: callouts in guides marked `[IC5 Signal]` (already a pattern in the existing LaTeX) — what's the evidence base for the specific verbal patterns flagged?

## Out-of-scope

- General job-search strategy (resume writing, LinkedIn optimization, networking, salary negotiation) — separate domain
- Bootcamp curriculum design — different audience (career-switchers; this work targets mid-senior IC)
- Clinical anxiety / interview-anxiety as a therapeutic question — there's a literature but it's outside the pedagogy scope
- Whiteboard / IDE / coding-tool design — engineering, not pedagogy
- Industry-specific interviewing outside DS/MLE/AI-Eng (legal, medical residency match, music auditions) — share methodology but the prep specifics differ
- Recruiting-process design (the vendor side: how to *give* good interviews, calibration, structured interviewing for hiring teams) — important but deserves its own plan; we're prep-side here
- The "learning styles" hypothesis — debunked; do not gather supporting work
- Generic test-anxiety pop-psychology (breathing exercises, etc.) — not load-bearing for a written guide
- Specific company interview rubrics that aren't publicly documented — won't speculate

## Claim family taxonomy

- `highstakes_testprep` — CFA / actuarial / USMLE / bar methodology applicable to technical-interview prep
- `interview_research` — empirical studies of technical-interview formats, stress, signal value, equity
- `spaced_repetition_credentialing` — Anki / SuperMemo evidence specific to professional cert contexts
- `expert_problemsolving` — Polya, Schoenfeld, CS-education pattern-recognition, LeetCode-pattern empirics
- `mock_practice` — STAR ancestry, think-aloud protocols, peer mock cadence
- `signaling_communication` — verbalization patterns, IC4/IC5 leveling, executive-presence under time pressure

## Known landmark papers

- `polya1945howtosolveit` — Polya, *How to Solve It* (1945). Foundational problem-solving heuristic; ancestor to most CS interview prep frameworks.
- `schoenfeld1985mathematical` — Schoenfeld, *Mathematical Problem Solving* (1985). Extends Polya with metacognition + beliefs as load-bearing in expert performance.
- `ericsson1993protocol` — Ericsson & Simon, *Protocol Analysis: Verbal Reports as Data* (rev. ed. 1993). Canonical reference for think-aloud as a method and (downstream) as a pedagogy.
- `janz1986behaviordescription` — Janz, Hellervik & Gilmore, *Behavior Description Interviewing* (1986). The intellectual ancestor of STAR.
- `mcdaniel1994validity` — McDaniel, Whetzel, Schmidt & Maurer (1994) "The Validity of Employment Interviews: A Comprehensive Review and Meta-Analysis" (*J. Applied Psych*). Foundational interview-validity meta-analysis.
- `behroozi2019doesstress` — Behroozi, Lui, Moore, Ferrari & Parnin (2019) "Does Stress Impact Technical Interview Performance?" (FSE/ESEC). Empirical demonstration that whiteboarding format depresses measured skill.
- `dunlosky2013improving` — Dunlosky et al. (2013) — already a landmark in `learning_pedagogy`; relevant here because retrieval practice + distributed practice are the high-utility techniques the prep cadence should be built around.
