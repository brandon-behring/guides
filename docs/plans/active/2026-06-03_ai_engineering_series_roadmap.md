# Roadmap: a company-agnostic, interview-prep-led series on the AI-native dimensions of AI engineering

> ⚠️ **PARTIALLY SUPERSEDED (2026-06-04).** After this doc was written, the plan was course-corrected. Read
> `2026-06-04_session_handoff.md` first for the **final direction**: **ONE** repo `guides-ai-engineering` (guides as
> content collections — *not* 7 separate repos) · demand-prioritized set (evals · llm-app · production · craft ·
> working-with-AI lead; fine-tuning/safety demoted) · demand spine **folded into building** · success = **public
> teaching traction**. Still valid here: the pedagogy/chapter-shape (§5), demo strategy (§6–§6.1), dogfooding loop
> (§6.2), the Evaluation worked example (§13), and the build-your-own companions (§14). The first guide is built in
> `~/guides-ai-engineering`.

**Status:** approved 2026-06-03 · living roadmap for the AI-native guide-series workstream · **partially superseded — see banner above.**
**Relationship to canonical design:** supplements design v0.3 (`docs/design/2026-05-23_design_v0.3.md`); the
**company-agnostic, interview-prep-led, dual-use** positioning here supersedes v0.3's Anthropic-arc emphasis — a v0.4
design amendment to make that canonical is a recommended follow-up (not yet done).
**Method caveat (honest):** this roadmap's first "independent-first" pass (§2) was partly anchored — the orchestrator had
already absorbed the internal dossiers — so the demand-spine build (§9) re-runs the independent pass cleanly and records
it before reconciliation.

**One-line:** a dual-use (built-in-the-open + published), company-agnostic, interview-prep-led series on the AI-native
dimensions of AI engineering — a pedagogy-driven *transform* of the existing interview-prep volumes (vol08/09/25 + AIES),
grounded in an independent-then-reconciled demand study, taught via a transfer-focused chapter shape with
build-your-own-X companions and ICAP-scaffolded interactive demos. **First move: build the demand spine (§9, §11).**

## 0 · Executive summary (the consolidated read)

**What this is:** a **dual-use, company-agnostic, interview-prep-led** series on the **AI-native dimensions** of AI
engineering — *built in the open and published* (the maintained artifact is the public guides + a small hand-rolled
companion lib per guide, §14), which doubles as the author's **own learn-layer** (dogfooding). Private = raw research +
disposable one-shots; the **`/ai-eng-sim` simulator** is the personal, live-LLM **feedback instrument** (public-deferred).
**AI-native now; whole-ecosystem unification later.**

**How it's made:** **independent analysis first → reconcile with the mature internal system → iterate.** The content is
a **pedagogy-driven transform** of existing volumes (vol08/09/25 + AIES) — seed + inspiration, not a port, not from
scratch — **agnosticized**. Independent research **validated** the internal foundation: the **4-dim rubric** (Technical
Correctness · Trade-off Awareness · Evaluation Rigor · Communication) is the cross-guide **assessment spine**; demand
emphasis = **evals + production + judgment + AI-assisted-era** skills.

**Pedagogy (evidence-backed, §5):** productive-failure opener → worked-example fading → complementary multi-paradigm →
**ICAP-scaffolded** demo → interleaved retrieval → self-explanation/rubric → **PFL stretch** → series capstone.

**Demos/viz (§6–6.1):** public = **static, client-side only** (live-LLM = simulator); `dump→JSON→island` + light charts +
lazy Pyodide, **ICAP-wrapped**; shape the **upstream demo kit** via a `consumer:guides` issue. (Local scaffold is 12
versions behind → **upgrade first**; new pedagogy components already align.)

**Slicing is downstream of the demand spine** (working hypothesis: evals · llm-app-eng · production · fine-tuning · safety).

**→ First move:** **build the demand spine, independent-first** (§9) — foundational (determines slicing + per-guide
framing + the public/private seam), mostly research (low commitment, high information value). Precursor: land this doc.
Parallel prep: **upgrade the scaffold** (v4.2.0→v4.14.2+) + **file the demo-kit `consumer:guides` issue**.

## 1 · Context

The `guides` hub is a pedagogy-first meta-framework; subject content lives in `guides-*` siblings. The goal is a
**company-agnostic, interview-prep-led** series on the **AI-native dimensions** of AI engineering. A re-examination of
`interview_prep_series/docs/AI_ENG_SYSTEM_INVENTORY.md` showed the AI-native content already exists as mature, maintained
volumes (vol08 LLM Foundations, vol09 AI Engineering "strongest", vol25 Prompt Injection, AIES interview-sim companion)
plus gathered dossiers (vol26 evals, vol27 PEFT, vol28 calibration, vol29 RLHF) and a `/ai-eng-sim` drill loop with a
4-dimension rubric. So the series is a **pedagogy-driven transform** of that material — seeded and inspired by it, not
a from-scratch build and not a mechanical port — re-authored for transfer-focused pedagogy and made company-agnostic.

## 2 · Methodology: independent-first, then reconcile

For every knowledge input (demand, pedagogy, content), do an **independent analysis from primary/web sources before
consulting the internal dossiers/volumes**, then compare and reconcile — treating divergences as signal. The internal
corpus is rich but must be *validated*, not assumed. This roadmap already applied it (independent web research on demand
[94 sources] + pedagogy, triangulated in §3). The same discipline governs each downstream workstream.

## 3 · Triangulation result (the "iterate & refine" payoff)

**Outcome: strong convergence — prior work largely vindicated — plus timely refinements.**

**Demand.** The `/ai-eng-sim` 4-dim rubric (Technical Correctness · Trade-off Awareness · **Evaluation Rigor** ·
Communication) is *independently validated*: web research's #1 rejection reason = communication; #2 = jumping-without-
clarifying (↔ trade-offs); eval-rigor independently confirmed as rising. vol09's taxonomy matches the independent topic
map (RAG · evals · agents · prompting · production dominate). **Refinements to fold in** (volumes predate these):
1. **AI-assisted-coding interviews** (Meta/Canva/Google, late-2025) — assessed on guiding+verifying AI, not raw coding.
2. **Evals + integration are the scarce skill** (training commoditized) → independently validates Evaluation-first.
3. **Production/MLOps/cost/latency/monitoring** = common-core; "no production experience" + "ignoring operational
   concerns" are top failure modes.
4. **Judgment over technique** ("when NOT to fine-tune/RAG").
5. **Specialization premium** (≈75% of postings want domain expertise) → company-agnostic = **core + how-to-localize**
   (industry-variation callouts), not generic.

**Pedagogy.** Very high convergence on productive failure/PFL, retrieval practice, spacing+interleaving, worked-example
fading, contrasting cases, coherence/redundancy/modality, analytic rubrics, and the debunk-list (learning styles,
far-transfer, rereading). **Refinements:**
1. **Interactive demos/notebooks:** ICAP — interactivity must force *predict/modify/explain*; passive clicking doesn't
   help and can *backfire* under load → always scaffold + prompt.
2. **Multi-representation must be complementary, not redundant** (Mayer redundancy d≈0.87) — qualifies the UDL
   "≥2 paradigms" rule (design v0.3 already says "complementarily" — keep that).
3. **Concrete knobs:** spacing ≈10–20% of retention interval; mastery ≈70–80% first-attempt success.

## 4 · Positioning

- **Interview-prep-led, foundationally honest:** organize/prioritize by what AI-native interviews test, failure-mode-
  aware throughout, with foundational sections for genuine mastery.
- **Company-agnostic = core + how-to-localize:** teach the common core (validated above), with explicit industry-
  variation callouts (frontier labs · big tech · marketplaces · fintech/risk · healthcare · enterprise). Per-company
  research is *input* (aggregated up); no per-company content ships. `interview_prep_series` stays a frozen seed/source.
- **Supersedes** design v0.3's Anthropic-arc emphasis → recommend a v0.4 amendment (follow-up, not this deliverable).

## 5 · Reconciled pedagogy → the chapter shape (drives structure)

Every guide chapter, evidence-grounded (§3):
1. **Productive-failure / contrasting-case opener** — a "what would you do?" before the machinery.
2. **Principle + worked examples with fading** — full → partial → skeleton → independent; teach *deep structure*.
3. **Multi-paradigm, complementary (not redundant):** prose ↔ equation ↔ code ↔ visual ↔ **interactive demo**, each
   carrying distinct load; remove extraneous material (coherence).
4. **Interactive demo / notebook (ICAP-scaffolded):** must prompt predict/modify/explain; never passive.
5. **Interleaved practice + low-stakes retrieval checks** (spaced ≈10–20% of retention interval).
6. **Self-explanation + analytic rubric self-assessment**; the **4-dim rubric is the cross-guide assessment spine**.
7. **PFL stretch problem** on a related-but-unseen technique (transfer to novel interview questions).
8. **Capstone/mock at series level** — authentic, rubric-scored. Do-not-do: learning-styles, far-transfer claims,
   rereading, passive interactivity, over-scaffolding.

## 6 · Demo notebooks + visualizations (scaffold is 12 versions ahead of local)

**Reality check (remote re-examination):** local checkout is v4.2.0 but **remote is v4.14.2 + v5.x infra (~31 commits
ahead)** → **upgrade the consumer repos first.**
- **Visualization remains consumer-side** (no bundled Plotly/D3/Vega) — the **"dump → JSON → Preact island"** pattern
  (hub's `/lab/sampling`) holds. *Now better supported:* TikZ→SVG figures are **dark-mode-aware + accessible**
  (`<Figure desc>`, CSS-var-themed, inline SVG) [v4.11]; a **`book:theme:change`** window event lets canvas/JS islands
  repaint on theme flip [v4.14]; changelog flags a `useThemeColors` helper "graduating later **with the demo kit**" —
  **an upstream demo kit is forthcoming.**
- **Strategy (per durable upstream policy):** shape that demo kit via a **`consumer:guides` upstream issue** rather than
  a local hack. Interim: light charting consumer-side now; **Pyodide** later for live Python notebooks; static
  `nbconvert` render-alongs meanwhile. Every demo carries ICAP prompts (predict/modify/explain).

**Bonus — the scaffold has been evolving toward this plan's pedagogy.** v4.3–v4.8 shipped the §5 chapter-shape
components: `<Tip>`/`<TipsCard>`, `<Practice difficulty>`, `<Exercise>`+`<Solution>`/`<ExerciseSolutions auto>`,
`<WorkedExample>`/`<Pitfall>`/`<YouWillLearn>` (v4.1), and **`<Provenance>`** — a per-chapter "how this was made"
audit-trail + `provenance` frontmatter that directly serves the independent-first methodology, AI-authoring disclosure,
and the dogfooding improvement-log. The reconciled chapter shape is largely available out of the box post-upgrade.

## 6.1 · Demo / visualization strategy + `consumer:guides` issue draft

**Core split (dissolves the live-LLM problem):** public guides ship **static-deployable, client-side** interactivity
only (Pages, no server); anything needing a **live LLM** is the **simulator's** job (personal, deferred).
- **Public-guide demos = "frozen-/no-model":** precomputed LLM traces (dump→JSON, per `/lab/sampling`), client-side math
  (eval metrics, calibration, ROC — JS or Pyodide, *no* LLM), parameter sweeps over precomputed data, pipeline/algorithm
  step-throughs, lightweight self-checks.
- **Simulator demos = "live-model":** real-time calls, adaptive drilling, live grading → needs API → personal for now.

**Demo taxonomy the AI-eng guides need:** (a) explorable parameter-sweep (sampling knobs → token dist; threshold →
precision/recall); (b) pipeline/algorithm step-through (RAG, attention, chunking); (c) statistical charts (calibration,
ROC, score dist, cost/latency); (d) client-side code demo (modify eval/metric code, re-run — Pyodide, no LLM);
(e) retrieval/self-check (ties to `<Exercise>`/`<Practice>`).

**Tech decision (upstream-first):**
- **Primary — shape the upstream demo kit, already tracked at `book-scaffold-astro` #103** ("Proposal: native support
  for interactive demos (Tier-1 figures)", open 2026-06-02). **Extend #103** with the guides' requirements (below)
  rather than filing a duplicate.
- **Interim — `dump→JSON→Preact island`:** **custom SVG/CSS** for bespoke pedagogical viz; a **lightweight charting
  primitive** (uPlot ~40KB / Observable Plot) for standard charts — **avoid heavy libs (Plotly ~300KB+) as default**;
  **Pyodide** lazily (per-demo, `client:visible`) for client-side Python (no LLM).
- **Notebooks:** static `nbconvert` render-alongs + Colab/local links now; Pyodide-live (no-LLM) variant later; live-LLM
  notebooks out of scope for public guides (→ simulator).
- **ICAP non-negotiable:** every demo wraps **predict → interact → reveal/explain**; never passive.

**`consumer:guides` issue draft — "Demo kit for interactive guide content":**
1. **`<Demo>` explorable primitive** — client-side, lazy (`client:visible`), theme-aware (consumes `book:theme:change` /
   the planned `useThemeColors`), data via committed JSON; standardizes the `/lab/sampling` pattern.
2. **ICAP affordances baked in** — predict-before-reveal, modify-and-observe, explain-prompt slots; integrate with
   `<Exercise>`/`<Practice>`/`<Solution>`.
3. **Lightweight, theme-aware, accessible charting primitive** (line/bar/scatter/heatmap; `<title>/<desc>`, dark-mode —
   parity with the v4.11 figure pipeline); one light dependency, not a heavy lib per guide.
4. **Optional Pyodide-backed `<CodeDemo>`** — lazy, cost-bounded, client-side Python (no LLM); modify-and-rerun.
5. **Notebook story** — render-along + Colab/local link now; Pyodide-live (no-LLM) variant later.
6. **Static-deployable guarantee** — server-less on Pages; live-LLM explicitly out (→ simulator).
7. **A11y + dark-mode parity** with figures; **perf budget** (lazy hydrate; no site-wide heavy bundles).
Scope note: the kit serves *public, frozen-/no-model* interactivity; the *live-LLM* simulator is a separate track.

## 6.2 · The learn→drill→improve loop (the dogfooding quality engine)

The project's quality differentiator: the guide isn't written once and frozen — it's **continuously improved by its
author using it to prep real interviews**, with the simulator as the instrument that exposes what didn't transfer.

**The loop:** (1) **Learn** — author (first learner) works a chapter. (2) **Drill** — `/ai-eng-sim` (personal, live-LLM,
interview conditions) grades against the **4-dim rubric**; MISSes logged. (3) **Diagnose** — each MISS maps to a guide
location *and* a rubric dimension (existing decks already tag `source_concept:` + session-ID). (4) **Improve** — MISS →
a **guide-improvement backlog item** (better worked example / productive-failure framing / missing contrasting case)
*and* a spaced retrieval card; `<Provenance>` logs the revision. (5) **Re-verify** — spaced re-drill confirms closure.

**Public/private seam:** the *output* (better guides + visible `<Provenance>` history) is **public**; the *instrument +
personal data* (sim sessions, MISS log, cards, targeting) stay **private**. Readers surface gaps via normal feedback;
live-drill stays personal until the simulator is deployable.

**Guide must expose:** stable **section IDs + LOS tags**, a **section→rubric-dimension** mapping, the `<Provenance>`
improvement log, and — for readers without the live simulator — **static self-checks + ICAP demos** that approximate drill.

**Simulator → public (deferred), likely path:** **BYO-key** (reader supplies their own API key; client-side or thin
proxy) — sidesteps cost/auth. Alternatives: metered backend (you pay), free-tier limits, in-browser small model
(WebLLM/transformers.js — weaker grading). BYO-key is the cheapest route to a public drill.

**Why it matters:** continuous author-dogfooding + a visible improvement trail is a genuine **originality layer** and
credibility signal — and operationalizes "learning from it provides feedback for improvement."

## 7 · Content strategy: transform-from-volumes, pedagogy-driven

Volumes + AIES + dossiers = **seed + inspiration + research backing**, re-authored (substantial reuse of examples,
code, walkthroughs, cards; prose/structure re-shaped for §5 pedagogy; agnosticized by stripping company tags). Slicing
follows **demand-validated learning arcs**, not volume boundaries.

## 8 · Proposed guide set (demand-validated arcs, seeded by volumes) — to confirm via §9

| # | Guide (`guides-<slug>`) | Seeds (transform, not port) | Companion / dossier |
|---|---|---|---|
| 1 | **evaluation & benchmarking** *(first)* | vol09 ch8-9, AIES ch7 (heaviest), vol08 ch7 | `mini-eval` (build-your-own) + `eval-toolkit` (PyPI) + vol26 dossier |
| 2 | **llm application engineering** | vol08 ch3-4,8,10 · vol09 ch2-7,10-12 · AIES ch4-6,11 | `mini-rag`/`mini-agent` + research-kb waves + agent dossiers |
| 3 | **production AI systems** | vol08 ch6,12-13 · vol09 ch15-16,18 | (addresses top "no-prod-experience" failure) |
| 4 | **fine-tuning & post-training** | vol08 ch5 · vol09 ch13 · AIES ch3 | `mini-finetune-loop` + vol27 PEFT + vol29 RLHF + rlhf_datasets |
| 5 | **AI safety & prompt injection** | vol25 (whole) · vol08 ch11 · vol09 ch17 · AIES ch13 | `mini-injection-detector` + vol25 dossier (~520, wired) |

*Linked foundations (not built):* transformers/LLM-internals → `mathematical-guides-transformers` + vol08 ch1-2;
experimentation pilot; classical ML / stats / time-series → existing repos. *Cross-cutting (hub):* pedagogy dossiers +
the demand spine. *Separate, evolving:* `/ai-eng-sim` gets a new angle realigned to the new research.

## 9 · Demand spine — detailed plan: `role_demand_and_interview_signals` (hub, cross-cutting)

**Why it's first:** it (a) *determines the guide slicing* — the dimension set is an **output** of demand clustering, not
an input; (b) gives every guide its "what's tested / how candidates fail here" framing; (c) bifurcates cleanly into the
public agnostic layer vs. the private targeted layer.

**Build order (enacts the independent-first methodology cleanly — fixing this session's anchoring caveat):**
- **P0 · Independent baseline (blind).** A fresh agent does web-only research — real JDs, levels.fyi / Blind / Glassdoor,
  interviewing.io, engineering blogs, recruiter/HM writeups, 2025–26 hiring & "state of AI" surveys, public failure
  post-mortems — *blind to the internal corpus*, findings **recorded before any reconciliation** (independence auditable).
  (A first pass exists — 94 sources — but redo blind + timestamp, since the orchestrator was anchored.)
- **P1 · Reconcile vs. internal.** Triangulate against `vol_anthropic_roles` (audited, 182 claims),
  `frontier_labs_comparison`, the `/ai-eng-sim` 4-dim rubric + 24 calibration anchors, and the interview chapters
  (vol08 ch14-15, vol09 ch19-20, AIEC). Log agreements **and** divergences explicitly.
- **P2 · Net-new cross-lab/industry deepening.** Extend the shallow `frontier_labs_comparison` across OpenAI/DeepMind/Meta
  + big tech + a few industries (fintech/risk, healthcare, marketplaces, enterprise) so "company-agnostic" is *earned*.
- **P3 · Synthesize (strict-live).** `/research-plan → /research-gather → /agent-index`; emit
  `bib_ledger`+`evidence_ledger`+`claim_graph`+`cache`; confidence-grade every claim (Official / Corroborated /
  Community / Inference).

**Sub-areas (A1–A6):**
- **A1 Role & competency landscape** — common-core vs. variant vs. niche (2025–26 reality: production/MLOps + evals now core).
- **A2 Interview-content taxonomy** — round × role (coding incl. **AI-assisted-coding**, ML/LLM system design, take-home, applied/case, research-discussion, behavioral).
- **A3 Failure modes** — ranked, evidence-cited (communication, jumping-without-clarifying, shallow/outdated, ignoring ops/cost/eval, no production experience).
- **A4 Industry variation** — the localization axis (callouts inside agnostic guides, not separate guides).
- **A5 Trends 2025–26** — evals/agents rising, training commoditizing, judgment-over-technique, AI-assisted interviews.
- **A6 Method & evidence** — confidence grading; the **validated 4-dim rubric becomes the cross-guide assessment spine**.

**Bifurcation (the public/private seam):** common-core competencies + generalized failure modes + industry-variation
callouts + the rubric → **public agnostic guides (Layer 1)**; company-specific specifics → **private raw research /
disposable one-shots (Layer 2)**, never shipped.

**How it determines slicing:** demand *clusters* → candidate dimensions; failure-mode *density* × demand weight →
priority + per-guide chapter emphasis. *Working hypothesis from current evidence (to be confirmed/re-ranked by P0–P3):*
evals · llm-app-eng · production · fine-tuning · safety; Evaluation already independently validated as high-leverage.

**Home:** `docs/research/role_demand_and_interview_signals/`. **Acceptance:** independent pass recorded
pre-reconciliation; every claim confidence-graded; output is company-agnostic (no per-company prescriptions); emits a
**proposed slicing + per-dimension emphasis** that feeds §8.

## 10 · Sequencing

0. **Write + index** this roadmap doc.
1. **Demand spine** (independent-first → reconcile) — foundational; confirms priority + per-guide framing.
2. **Evaluation guide first** (independently validated as the scarce/rising skill) — seed from vol09 ch8-9 + AIES ch7 +
   vol26; companions = `mini-eval` + `eval-toolkit`; apply §5 pedagogy + §6 demos; agnosticize.
3. **Publish the hub "Dimensions of AI Engineering" path** (linked foundations → AI-native series).
4. **Iterate** per dimension; evolve `/ai-eng-sim` separately.

*Deferred:* Cloudflare deploy · 5 thin pedagogy-dossier re-gather · `guidesFamilyStyle`→npm · design v0.4 amendment.

## 11 · Execution — the first move (scoped)

Scope = **land the thinking + build the foundational research.** Authoring waits until the demand spine settles slicing.

1. **Land + index the roadmap doc.** This doc; + a `CLAUDE.md` "Where things live" pointer + a `MEMORY.md` line + a
   project memory.
2. **Build the demand spine (independent-first).** P0 blind web research (recorded *before* reconciliation) → P1
   reconcile vs. internal → P2 cross-lab/industry deepening → P3 synthesize the strict-live dossier at
   `docs/research/role_demand_and_interview_signals/`. **Report findings + a proposed slicing** (incl. whether Evaluation
   splits) for review.
3. **Lightweight prep (parallel).** Upgrade the hub scaffold v4.2.0 → v4.14.2+; file the demo-kit `consumer:guides`
   issue (from §6.1).

**Not in this move (waits for the demand spine to settle slicing):** mini-eval authoring · guide chapters · repo
creation · locking the guide set.

## 12 · Verification

- Roadmap doc renders and is linked from `CLAUDE.md`.
- Spot-check seed/substrate paths exist (`~/eval-toolkit`, `interview_prep_series/.../vol_anthropic_roles`, vol09 ch8,
  `~/guides/src/.../lab/sampling*`, `~/Claude/research_eval_methodology`).
- Demand spine: independent pass recorded *before* internal reconciliation (methodology auditable); claims confidence-
  graded; output company-agnostic (aggregated + industry callouts, no per-company prescriptions); passes `/freshness-audit`.
- First demo: a chapter ships a dump→JSON→island interactive demo with ICAP prompts; builds on the upgraded scaffold (v4.14.2+).

## 13 · Worked example — Evaluation guide skeleton (pressure-test)

Concretizing guide #1 to test whether the framing holds. Transform sources: vol09 ch8 (AI Evaluation & Evals) + ch9
(Evaluation Topology), AIES ch7 (Evaluation — heaviest, 63 cards), vol08 ch7, + the vol26_eval_methodology dossier.
Companions: `eval-toolkit` (production bridge) + `mini-eval` (hand-rolled, §14). Through-line: the **4-dim rubric**;
framing: evals = the scarce/rising skill.

**Chapter arc (~13 ch, book-sized):** 0 Why eval is the scarce skill (demand framing; "error-taxonomy-before-metrics";
rubric introduced) · 1 Eval mindset (what-before-how; failure-mode-first; contrasting cases) · 2 Offline metrics &
threshold tradeoff *(foundations-leaning → link)* · 3 Confidence & statistical rigor *(links experimentation
foundations)* · 4 Calibration & reliability *(vol28; foundations-leaning)* · 5 Data integrity — leakage, **benchmark
contamination**, reproducibility *(AI-native-critical)* · 6 Reference-based vs reference-free *(AI-native)* ·
7 **LLM-as-judge** — biases + mitigations *(net-new; top topic)* · 8 **Benchmark literacy** —
MMLU/GPQA/HumanEval/SWE-bench/GAIA/Arena/HELM/LiveBench; saturation/contamination/validity · 9 **RAG evaluation** —
retrieval + faithfulness/context-precision (RAGAS); failure diagnosis *(top topic)* · 10 **Agentic & task eval** —
trajectory/tool-use, success@k · 11 **Production eval & monitoring** — online, guardrails, drift, cost/latency-as-eval
*(addresses "ignoring ops" failure)* · 12 **System design: design an eval strategy** *(capstone + mock + rubric)*.

**Two chapters in the §5 shape (verify the shape works):**
- *Ch2 — threshold tradeoff:* `<YouWillLearn>` → productive-failure opener ("99%-accurate fraud classifier — ship it?";
  `<Pitfall>` accuracy paradox) → `<WorkedExample>` fading (confusion matrix → P/R/F1 → ROC/PR) → multi-paradigm (prose ·
  equations · `mini-eval`/`eval-toolkit` code · PR-curve figure) → **ICAP demo** (threshold slider → live confusion matrix
  + P/R/F1 + moving PR point; predict→modify→explain; dump→JSON→island) → interleaved `<Practice>` (pick an operating
  point for a business context) → rubric tie-in (Eval-Rigor + Trade-off + Communication) → industry callout (fraud
  recall-heavy · moderation P/R balance · medical high-recall) → **PFL stretch** ("now it's *ranking* — how to eval?" →
  unseen NDCG, bridges to ch9) → `<Provenance>`.
- *Ch7 — LLM-as-judge:* opener ("GPT grades you 95% pass — where's the bias?") → principle (judge design; position /
  verbosity / self-preference biases; mitigations) → multi-paradigm (bias-taxonomy table · judge-prompt code · bias-effect
  chart) → **ICAP demo** (precomputed judge traces: flip order → score flips; lengthen → verbosity bias; *no live LLM*) →
  `<Practice>` (spot the bias) → rubric tie-in (Eval-Rigor: the "names judge but misses bias mitigations" calibration
  signature) → industry callout → PFL stretch ("judge–human agreement low — diagnose" → unseen meta-eval) → `<Provenance>`.

**Tensions/insights surfaced (the payoff of going concrete):**
1. **Center of gravity is AI-native eval, not classical metrics.** Ch2-4 are *foundations* → **lean on links**
   (eval-toolkit + experimentation foundations); net-new authoring is ch5-12. Makes "AI-native built / foundations linked"
   concrete — and slightly re-slices this guide.
2. **Best static ICAP demos are the non-LLM ones** (threshold, calibration, judge-bias-via-precomputed-traces); live-LLM
   judging is the simulator's job — confirms §6.1 on a real case.
3. **The 4-dim rubric maps onto eval topics ~1:1** (esp. Eval-Rigor); calibration anchors already encode the failure
   signatures chapters should target — validates rubric-as-spine.
4. **Open slicing question for the demand spine:** is "Evaluation" one guide, or split into linked classical-eval-
   foundations + an AI-native "LLM/system evaluation" guide? The concrete arc suggests the latter is cleaner. → feeds §8/§9.

## 14 · Code-demonstration strategy: hand-rolled "build-a-minimal-X" companions

**Question:** demonstrate code via a hand-rolled mini-package (a simpler eval-toolkit) or via the real tools?
**Recommendation — hybrid, build-your-own-led.** Each guide's **companion is a deliberately-minimal, hand-rolled library
the learner builds chapter-by-chapter** (the active pedagogical spine), **explicitly bridged to the production tool**
(eval-toolkit / RAGAS / …). Proven "build your own X" genre (micrograd / nanoGPT / Crafting Interpreters); strongest
match for the evidence — active construction (ICAP-constructive), deep-structure-over-API, transfer, and the rubric's
Technical-Correctness + Evaluation-Rigor (you *built* it, so you can explain it cold).

**For Evaluation → `mini-eval`:** metrics → bootstrap CIs → calibration → a **mock-model LLM-as-judge *harness***
(bias-swaps + aggregation on *precomputed* outputs — **no live LLM**, per §6.1) → a tiny RAG-eval. Each chapter closes
with "…and here's what **`eval-toolkit` / RAGAS** do in production." We *own* `eval-toolkit`, so `mini-eval` is its
natural pedagogical precursor (cross-link them).

**Triple-duty (this unifies the plan):** the same hand-rolled functions are (a) the **companion package** the design
already calls for (pip-installable, MIT, portfolio/capstone artifact, built in the open), (b) the **engine behind the
ICAP demos** (Pyodide runs `mini-eval` in-browser, or dump→JSON), and (c) the **build-it-yourself learning spine**.
One artifact, three roles.

**Guardrails (`<Pitfall>`):** label "for learning, not production"; minimal + correct; **always bridge to the real tool**;
don't over-engineer the toy. Maintenance stays low (a few hundred LOC).

**Series identity (generalizes):** "**learn AI engineering by building a minimal version of each system, then bridge to
production**" — mini-eval · mini-rag · mini-agent · mini-finetune-loop · mini-injection-detector. Distinctive,
company-agnostic (mechanism, not a vendor), interview-honest, transfer-optimal. Per-guide judgment on build-vs-link depth.

**Insight surfaced:** a real value-add *beyond* the source volumes — vol08/09/AIES have cards/problems/walkthroughs but
**no built artifact**. The build-your-own companion is a *new active spine the transform adds* — so it's content to
**author**, not just transform: budget the added effort.
