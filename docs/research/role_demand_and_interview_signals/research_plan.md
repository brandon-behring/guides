# Research Plan: role_demand_and_interview_signals

A company-agnostic study of what AI-engineering employers want, what AI-native interviews actually test, and why
qualified candidates fail — the **demand spine** for a company-agnostic, interview-prep-led AI-engineering guide series.
Its output **determines the guide slicing** and gives every guide its "what's tested / how candidates fail here" frame.
Rough size: ~6 sub-areas, ~40–70 web sources (market reports + interview-experience corpora, not academic papers);
~2–3 days of pipeline work. Narrow by design: aggregated, generalizable signals only — not a per-company prep manual.

> **Methodology — INDEPENDENT-FIRST (binding for `/research-gather`).** The gather is a **blind web pass**, recorded
> *before* any reconciliation against internal sources. Reconciliation against the internal corpus
> (`~/interview_prep_series`: `vol_anthropic_roles` [audited], `frontier_labs_comparison`, the `/ai-eng-sim` 4-dim
> rubric + calibration anchors, interview chapters vol08 ch14-15 / vol09 ch19-20 / AIEC) is a **separate later phase**,
> not part of the independent gather. Confidence-grade every claim (Official / Corroborated / Community / Inference).
> **Output is company-agnostic:** aggregated common-core + industry-variation callouts; **no per-company prescriptions.**

## Sub-areas

- **A1. Role & competency landscape** — what AI Engineer / ML Engineer / Applied Scientist / GenAI-LLM Engineer roles
  require (2025–26), as common-core vs. variant vs. niche competencies.
  - Source types: job postings (company career pages, LinkedIn, Indeed), public leveling rubrics, skills/JD-analysis
    blogs, hiring surveys, role-taxonomy writeups.
  - Notes: synthesize across ≥6–8 employers spanning sectors; distinguish what's near-universal from sector-specific.
    Tag each competency common-core / variant / niche. Out: deep per-role JD transcription for any single company.
- **A2. Interview-content taxonomy** — what's actually asked, by round type × role family.
  - Source types: interviewing.io, Blind, Glassdoor interview reports, interview-experience GitHub repos / Medium
    writeups, recruiter prep guides, HackerRank-style assessment writeups.
  - Notes: rounds = coding (incl. **AI-assisted-coding** interviews), ML/LLM system design, take-home/applied,
    case/product, research-discussion, behavioral. Capture topic emphasis (RAG, evals, agents, prompting, production).
- **A3. Failure modes** — ranked, evidence-cited reasons qualified candidates get rejected.
  - Source types: recruiter/hiring-manager writeups, "why candidates fail" essays, interview post-mortems, hiring-review
    articles, structured-interview research where public.
  - Notes: e.g. communication/articulation, jumping-without-clarifying, shallow/outdated skills, ignoring
    ops/cost/eval, no production experience. Each failure mode → which round it shows up in + how to avoid.
- **A4. Industry variation** — how demand differs by sector (the localization axis).
  - Source types: sector-specific JDs + interview reports (frontier labs · big tech · marketplaces/consumer ·
    fintech/risk · healthcare · enterprise B2B), domain hiring guides.
  - Notes: produces *callouts inside agnostic guides*, not separate guides. Identify which competencies/failure modes
    are sector-amplified (e.g. recall-heavy eval in risk; compliance/governance in healthcare/enterprise).
- **A5. Trends 2025–26** — what's rising, commoditizing, or fading.
  - Source types: "state of AI/ML hiring" surveys, market-analysis blogs, role-growth reports, vendor hiring data.
  - Notes: evals/agents rising; model-training commoditizing (integration+evals = scarce skill); judgment-over-technique
    ("when NOT to fine-tune"); AI-assisted-coding interviews normalizing; specialization premium. Date every trend.
- **A6. Method & evidence** — sourcing discipline + confidence grading (meta sub-area).
  - Source types: n/a (governs the others).
  - Notes: every claim tagged Official (primary JD / first-party) / Corroborated (≥2 independent) / Community
    (Blind/Glassdoor/anecdote) / Inference (synthesis). Record the independent-pass timestamp before reconciliation.

## Out-of-scope

- **Per-company prep manuals / private rubrics / company-specific prescriptions** — those are the private Layer-2
  (raw research + disposable one-shots) and `~/interview_prep_series` company packs; never shipped in the agnostic guides.
- **The live `/ai-eng-sim` simulator** and any live-LLM drilling/grading — separate personal track (public-deferred).
- **Non-AI-native foundations** (classical ML / statistics / DSA theory) as *demand topics* — covered by linked
  foundations, not re-researched here.
- **Internal-corpus reconciliation** — deliberately excluded from the independent gather; it is a separate later phase
  (so independence stays auditable).
- **Compensation/levels-benchmarking depth** and **general non-AI SWE hiring** — adjacent; deferred (own effort if needed).

## Claim family taxonomy

- `competency` — role/skill demand signals (A1).
- `interview_format` — round types + topic emphasis / what's asked (A2).
- `failure_mode` — documented reasons candidates fail (A3).
- `industry_variation` — sector-specific demand/failure differences (A4).
- `trend` — dated 2025–26 shifts in demand/format (A5).
- `evidence_method` — sourcing/confidence-grading meta-claims (A6).

## Known landmark sources (public-web anchors; not academic papers)

These surfaced in the independent web pass and are public; listing them so `/research-gather` cross-checks rather than
re-claims them. Bibkeys are provisional (`{source}{year}{slug}`).

- `grigorev2025aiengfieldguide`: practitioner field guide mapping the AI-engineering interview process + topic trends.
- `hackerrank2025genaihiring`: assessment-vendor data on how RAG/LLM skills are tested (2025).
- `burleigh2025genaimarket`: GenAI job-market analysis (role distinctions, production-experience premium).
- `meta2025aiassistedcoding`: the late-2025 shift to AI-assisted coding interviews (guide+verify, not raw coding).
- `interviewingio_reports`: aggregated technical-interview-experience corpus (anchor for A2/A3).
