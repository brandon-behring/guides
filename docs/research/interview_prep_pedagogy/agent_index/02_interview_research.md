# Empirical Research on Technical Interviews

Peer-reviewed empirical studies on technical interview formats — cognitive-load instrumentation, whiteboard-vs-private stress effects, what interviewers expect from candidates, and developer-reported friction. Industry credentialing-prep methodology lives in `01_highstakes_testprep.md`; mock-practice / behavior-description-interviewing methodology lives in `05_mock_practice.md`.

## B1. Cognitive-load and stress under whiteboard format

- **Dazed: cognitive-load measurement during whiteboard interviews** — Behroozi et al. (ICSE NIER 2018).
  - **Source:** https://denaeford.me/papers/dazed-ICSE-2018.pdf
  - **Code:** —
  - **Mechanism:** New-ideas-and-emerging-results paper proposing instrumentation to measure cognitive load during whiteboard coding interviews.
  - **Result:** Early empirical framing of whiteboard interviews as a cognitive-load measurement problem; sets up the line of work continued in Behroozi 2020.
  - **Status:** (no widely-known repo) Unverified.

- **Does Stress Impact Technical Interview Performance?** — Behroozi, Shirolkar, Barik & Parnin (ESEC/FSE 2020).
  - **Source:** https://dl.acm.org/doi/abs/10.1145/3368089.3409712
  - **Code:** —
  - **Mechanism:** Empirical comparison of candidates solving problems on a whiteboard with an observer versus solving the same problems privately.
  - **Result:** Provides empirical evidence that the whiteboard-with-observer format depresses measured problem-solving performance relative to a private format (specific effect sizes are in the paper body — unverified body claim).
  - **Status:** (no widely-known repo) Unverified.

## B2. Interviewer expectations and developer experience reports

- **The Tech-Talk Balance** — Ford, Barik, Rand-Pickett & Parnin (CHASE 2017).
  - **Source:** https://denaeford.me/papers/tech-talk-balance-CHASE-2017.pdf
  - **Code:** —
  - **Mechanism:** Interview-based study of what technical interviewers explicitly look for during candidate-interviewer technical conversations.
  - **Result:** Surfaces the "tech-talk" dimension — that interviews assess interactive technical communication, not only solution correctness. Distinct from the cognitive-load line.
  - **Status:** (no widely-known repo) Unverified.

- **Hiring is Broken: What Do Developers Say About Technical Interviews?** — Behroozi, Parnin & Barik (VL/HCC 2019).
  - **Source:** https://www.researchgate.net/publication/334448588_Hiring_is_Broken_What_Do_Developers_Say_About_Technical_Interviews
  - **Code:** —
  - **Mechanism:** Qualitative analysis of developer-authored posts about their technical-interview experiences.
  - **Result:** Documents the developer-population-reported friction with technical-interview formats, providing a population-level signal of where the format is perceived to misfire.
  - **Status:** (no widely-known repo) Unverified.

---

**Notes:** All four entries are peer-reviewed conference papers. The Behroozi-Ford-Parnin author cluster (NC State) contributes the bulk of the empirical line of work on this question. Quantitative effect sizes from Behroozi 2020 should be re-verified against the primary PDF before being asserted in synthesis material.
