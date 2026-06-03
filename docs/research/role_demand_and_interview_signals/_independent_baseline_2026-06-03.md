# P0 Independent Baseline — recorded 2026-06-03 (BEFORE any internal reconciliation)

> **Provenance (independent-first methodology):** consolidates a **blind web-only pass** (~94 public sources: real JDs,
> levels.fyi / Blind / Glassdoor, interviewing.io, engineering blogs, recruiter/HM writeups, 2025–26 hiring & "state of
> AI" surveys, public failure post-mortems). The gathering agent was instructed **not** to read any internal files.
> This is the auditable independent record; reconciliation against the internal corpus is a **separate later phase** and
> must not overwrite this file. Confidence tiers: **Official** (first-party JD) · **Corroborated** (≥2 independent) ·
> **Community** (Blind/Glassdoor/anecdote) · **Inference** (synthesis).

## A1 · Competency landscape (common-core / variant / niche)

- **Common-core (~80% of roles):** Python (+SQL); cloud fundamentals (AWS/GCP/Azure); Docker/containerization,
  Kubernetes, model-lifecycle (MLflow/W&B), CI/CD; ML fundamentals (lin-alg/prob/stats, optimization, neural nets,
  read-a-paper); LLM/GenAI fundamentals (transformers/attention, fine-tune-vs-prompt trade-off, embeddings + vector DBs,
  RAG design, API integration); **evaluation/measurement** (beyond perplexity; LLM-as-judge; hallucination/failure
  modes); **communication** (articulate reasoning, trade-offs, write code for others). [Corroborated, high]
- **Variant (by track):** product-science → A/B testing, causal inference, experimentation, recsys; model-building →
  PyTorch/TF at scale, distributed training, paper implementation; LLMOps/infra → prompt-opt, inference cost/latency,
  agentic design, serving (Ray/vLLM), multimodal; enterprise/governance → explainability, PII/data governance,
  compliance (HIPAA/SOC2/fin-reg), drift monitoring, audit/repro. [Corroborated]
- **Niche (premium, lower penetration):** agentic systems; **evals infrastructure** (rising fast); fine-tuning
  (LoRA/PEFT/RLHF — and judgment of *when not to*); multimodal; advanced RAG (reranking/HyDE/adaptive routing); **MCP**;
  cost/latency optimization. [Community/Corroborated]

## A2 · Interview-content map (round × topic)

- **Rounds:** recruiter screen → coding/algorithms (LeetCode-style, increasingly LLM-flavored + **AI-assisted** sandbox)
  → AI/ML deep-dive (LLM arch, RAG, fine-tune-vs-prompt, evals) → take-home (build a RAG/agent/LLM feature + evaluate) →
  system design (LLM product: scale/cost/latency/hallucination) → behavioral (STAR).
- **Topic emphasis (per practitioner guides):** LLM architecture/transformers ~25% · RAG ~20% · production LLM + **evals**
  ~18% · agentic ~15% · prompting/structured-output ~10%; classical ML still ~30% of roles; stats ~26% (product-science).
  [Corroborated]
- **AI-assisted-coding interviews (late-2025, Meta/Canva/Google):** assessed on prompt quality, code comprehension,
  verification, judgment (when to use AI vs reason) — *exposes weak fundamentals faster*. [Corroborated, medium-high]

## A3 · Failure modes (ranked, with rough rejection-share from one 50-hire review + corroboration)

1. **Communication/articulation** (~40–45%) — solving in silence, shallow reasoning signalling recitation, no
   trade-off discussion, vague behavioral. [Corroborated, high]
2. **Jumping without understanding** (~30–35%) — no clarifying Qs, proposing DL/fine-tune/RAG before understanding
   data/scale/bottleneck, over-engineering. [Corroborated]
3. **Outdated/shallow skills** (~32%) — impressive résumé, can't write production code; notebook-only; can't justify
   tech choices. [Community, medium]
4. **Flawed interview process** (~36%) — irrelevant LeetCode, theory divorced from implementation, take-homes gamed by
   ChatGPT. [Community]
5. **Work-style/motivation mismatch** (~24–28%) — generalist in a specialist role; comp-primary; research-vs-production
   mismatch. [Community]
6. **Forgetting operational concerns** (~20–25%) — no monitoring/cost/latency in system design; no eval strategy; ignoring
   safety/PII/compliance. [Corroborated]
7. **No production experience** — prototype/research only; nothing shipped/maintained. [Corroborated]

## A5 · Trends 2025–26

- Production + **evals** over theory ("how did you *measure* it?"). · Model-training **commoditizing** → integration +
  evals are the scarce skill. · **AI-assisted coding interviews** normalizing (~68% of companies integrated AI into
  evaluation by end-2025 — **NOT verified; corrected in `_gather_new_topics`**: Gartner ~18% in 2025 → 60% by 2028).
· **Specialization premium** (~30–50%; ~75% of postings cite domain
  expertise). · Agentic systems now core interview content. · Longer hiring timelines (6–12 wks); comp jump
  (~$155k→$206k median, single-source). [mixed Corroborated/Community]

## A4 · Industry variation — THIN in this pass

Only the variant-track sketch above; no per-sector depth on what each industry amplifies (e.g., recall-heavy eval in
risk; compliance/governance in healthcare/enterprise; safety/research depth at frontier labs). → **flagged for fresh gather.**

## Confidence summary (from the pass)

VERY HIGH: Python+cloud+LLM are common-core; RAG & evals top interview topics. HIGH: communication = #1 rejection;
agentic-as-new-topic; specialization premium. MEDIUM: the 32%/68%/comp/MCP-download stats (often single-source) — treat
as directional, verify in reconciliation.

## Anchor sources (curated; full ~94-source list is in the session gather record)

Grigorev *AI-Engineering Field Guide* (interview process + trends) · HackerRank GenAI hiring assessments (Apr/Oct 2025) ·
Tyler Burleigh GenAI market analysis (Jan 2025) · Meta AI-assisted coding interview writeups (interviewing.io, Hello
Interview) · Modern Descartes ML-interview essay · Zen van Riel AI-interview-mistakes · "I reviewed 50 failed AI hires"
(Fonzi/Medium) · InterviewStack applied-scientist skills (3,146 postings) · Pragmatic Engineer state-of-job-market 2026 ·
Karat engineering-interview-trends 2026 · CNN (2026-05) "AI changing jobs faster than interviews."

## Gaps flagged for the fresh gather (the "new topics that need review")

1. **A4 industry variation** — per-sector demand + failure differences (frontier labs · big tech · marketplaces ·
   fintech/risk · healthcare · enterprise B2B).
2. **AI-assisted-coding interviews** — deeper, current specifics (which companies, what's assessed, how to prep).
3. **Cross-lab / frontier-lab depth** — research-engineer vs applied-AI hiring across OpenAI/DeepMind/Meta/safety labs.
4. **2026-current** confirmation of the medium-confidence stats.
