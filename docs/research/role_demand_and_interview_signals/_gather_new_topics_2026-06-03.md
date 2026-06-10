# New-topics gather — 2026-06-03 (independent web pass, extends the P0 baseline)

> **Provenance:** two blind web-only agents (WebSearch/WebFetch; no internal files). Extends
> `_independent_baseline_2026-06-03.md` on the gaps it flagged (A4 industry variation, AI-assisted-coding interviews,
> frontier-lab depth, stat verification). Pre-reconciliation. Confidence: Official / Corroborated / Community / Inference.

## A4 · Industry variation (7 sectors) — for agnostic guides' per-sector callouts

| Sector | Amplified competency | Interview emphasis | Sector-specific failure mode |
|---|---|---|---|
| **Frontier labs** | research-to-prod fluency; read/implement novel papers; safety conviction; math first-principles | paper-discussion; ML-systems design (training/serving); values screened every stage | faking cultural alignment; LeetCode-only without ML intuition; shallow paper knowledge |
| **Big tech (scale)** | prod AI at billion-user scale; latency (p99); cost control; eval infra; staged retrieval | **AI-assisted coding** now mainstream; system design = LLM integration + cost/latency budgets | cost-blindness; accuracy-only (no latency/monitoring); "startup answers" in enterprise context |
| **AI startups** | build prod from scratch; multi-role; eval+prompt-opt; shipping velocity | portfolio-first; "have you shipped?"; collaborative take-home + pair | notebook-only; overstated impact w/o metrics; enterprise-mindset killing velocity; no cost awareness |
| **Marketplaces/consumer** | real-time inference (tight latency); massive A/B; multi-stage rank; two-sided dynamics | system design specific to marketplace; monitoring as first-class; multi-objective trade-offs | notebook-scale thinking; ignoring marketplace dynamics; single-metric optimization; cold-start brittleness |
| **Fintech/risk** | compliance-as-architecture; explainability (XAI); risk modeling; FP/FN cost; data quality | domain gatekeeping (credit/fraud/AML); "how do you audit your model?"; FP/FN trade-offs | compliance-as-checkbox; missing financial domain; accuracy-only (ignoring customer friction); adversarial blind spots |
| **Healthcare** | clinical literacy; FDA/SaMD pathway; clinician-facing explainability; bias/fairness; safety-first | domain verification; regulatory awareness; bias deep-dive across demographics; clinical reasoning | treating it like consumer AI; ignoring regulatory pathway; bias blindness; no post-market plan |
| **Enterprise B2B SaaS** | fine-tuning/domain adaptation; RAG maturity; eval at scale; cost-for-margin; multi-tenancy/data isolation | end-to-end RAG design; eval design; cost-aware architecture; data-isolation; observability | AI feature-dump; missing data isolation; over-promise; eval debt; cost/LTV misalignment |

**Cross-sector generalizations (highest-ROI agnostic content):** production-thinking is table-stakes everywhere ·
evaluation rigor is the differentiator (sectors differ in *what* to measure) · communication > pure coding · cost
awareness now universal · domain expertise no longer optional (≈75% of postings). **Sector pieces become callouts, not
separate guides** — confirming the §4 "core + how-to-localize" stance.

## Stat verification (the reconciliation/verification payoff — one correction)

- ✅ **"~30–50% specialization premium / ~75% of postings cite domain expertise"** → **Official**, multiple independent
  sources (KORE1, Curominds, Second Talent, Acceler8).
- ✅ **"AI-engineer comp ~$155k→$206k median 2024→2025"** → **Official** (Veritone Q1'25 $157k; KORE1/Coursera $206k '25;
  ~7% further in Q1'26).
- ❌ **"~68% of companies integrated AI into evaluation by end-2025"** → **NOT verified; CORRECT IT.** Closest real data:
  Gartner — "~18% of software-eng teams had AI eval/observability in 2025 → projected 60% by 2028." (Broad AI *adoption*
  is ~78–90%, but that's a different metric.) **Use the Gartner framing; drop the 68% figure.** ← baseline updated.

## AI-assisted-coding interviews (a genuinely new interview-prep skill area)

- **Adoption:** Meta (Oct 2025 — CoderPad 3-panel; pick GPT/Claude/Gemini/Llama; 60-min multi-file, phased bug→build→
  optimize) [Corroborated] · Google (May 2026 pilot — "code comprehension" round w/ Gemini; 75% of Google's new code is
  AI-generated) [Official] · Canva (Jun 2025 — problems "more complex, ambiguous, realistic", un-one-shottable) [Corroborated].
- **Assessed (4 dims):** strategic prompting/clarification · code comprehension (genuine, not reliance) · **verification &
  debugging** (prompt→review→run→confirm) · communication during automation. Meta: "rely solely on prompting → you fail."
- **Design frontier:** "preregistration, not prompt theater" — commit your theory (files/invariants/tests) *before* using
  AI; assesses *governance over automation*, a tool-version-durable skill.
- **Anti-pattern (visible failure):** copy-paste 200 lines, feel productive, can't explain/defend it → "failing while the
  code looks fine." **Guide implication:** teach clarify→pseudocode→prompt→review→run→explain; judgment > prompt fluency.

## Frontier-lab hiring (overlaps internal corpus → reconcile in P1)

- **Roles:** MTS unified title (OpenAI/Anthropic, flattens researcher/engineer) · **Research Engineer** (make it work at
  scale; MS+prod-ML) vs **Research Scientist** (decide what to work on; PhD+publications) vs **Applied Scientist** (method→
  prod).
- **Per-lab:** Anthropic 5-stage + hard CodeSignal + **safety screened at every stage** (safety-risk → eliminated) ·
  OpenAI decentralized + mission-alignment · DeepMind **publication-gated** + paper-discussion + **AI banned** in rounds ·
  METR **paid work-tests > interviews**. Anti-LeetCode / domain-specific ("design inference serving for a 70B MoE").
- **On-ramps:** OpenAI Residency (6mo); **Anthropic Fellows** (4mo, stipend+compute, 25–50% convert) — far higher-yield
  than cold apply. **Prep horizon 6–12 months** (build public work), not "cram 4 weeks."
- **vs product AI-eng:** publication/research-taste required; safety as first-order; smaller cohorts/higher bar; longer
  take-homes; faster timelines (4–6 wk vs 6–12). **Note:** this duplicates internal `vol_anthropic_roles` (audited) +
  `frontier_labs_comparison` — **triangulate in P1**, don't double-count.

## What this feeds

- **Industry callouts** (A4) — drop-in per-sector blocks; highest-ROI = evaluation rigor + cost + production + domain.
- **AI-assisted-coding** — a new cross-cutting interview-prep skill area (verification-under-automation) → likely a
  recurring section / its own short treatment; flag for the slicing decision.
- **Frontier-lab track** — possibly a distinct "track/callout" (research-eng vs product-AI-eng); reconcile vs internal first.
