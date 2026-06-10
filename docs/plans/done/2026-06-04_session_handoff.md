# Session handoff — AI Engineering guide series (2026-06-04)

> ⚠️ **SUPERSEDED (2026-06-10)** by `../active/2026-06-10_series_roadmap_v2.md` (series roadmap v2). The state
> below is stale — it describes a 3-chapter, local-only vertical slice; guide #1 has since shipped complete +
> independently reviewed + public, and guide #2 started. The "Final direction" section was folded into roadmap v2
> §1/§3 and design v0.4 §2.

**Read this first.** It supersedes the architecture/guide-set/sequencing in
`2026-06-03_ai_engineering_series_roadmap.md` (which records the *pre-correction*
plan — see §"Final direction" below for what changed).

## TL;DR
A company-agnostic, interview-prep-led **public** guide series on the AI-native
dimensions of AI engineering. The first guide (**Evaluation**) has a built,
**verified** vertical slice in a **new repo** `~/guides-ai-engineering`. Strategy +
demand research live in this hub repo. To continue building, read
`~/guides-ai-engineering/docs/RESUME.md`.

## Final direction (the corrected plan — supersedes the stale roadmap-doc sections)
The roadmap doc was course-corrected late in the planning session. The corrected
decisions:

- **Purpose / success.** Dual-use (built in the open + personal prep), but the
  **success metric is public teaching traction** — others read and use it; the
  author's own prep is the byproduct. Bar: broadly useful, high-quality, discoverable.
- **Audience.** Engineers **switching INTO AI-eng** (strong SWE/DS background).
  Foundations assumed/linked; focus on the AI-native delta + interview craft.
- **Architecture → ONE repo, multiple guides.** `guides-ai-engineering`, guides as
  Astro **content collections** (NOT one repo per guide — that earlier 7-repo plan
  is reversed). The `guides` hub stays the landing + pedagogy; `guides-experimentation`
  and `mathematical-guides*` are untouched. One shared `companion` lib + per-guide capstones.
- **Guide set = demand-prioritized** (judgment informed by the demand material, not a
  separate research run): **evals · llm-app-engineering · production · craft-capstone ·
  working-with-AI** lead; **fine-tuning + safety are demoted/absorbed** (later, thinner,
  or a section in llm-app). **Frontier-lab** is a cross-cutting track/callout, not a guide.
- **Content = pedagogy-driven transform** of the existing interview-prep volumes
  (`~/interview_prep_series`: vol08 LLM Foundations, vol09 AI Engineering, vol25 Prompt
  Injection, AIES; see its `docs/AI_ENG_SYSTEM_INVENTORY.md`) — **seed, not port**;
  agnosticized (strip company tags). "Completeness over DRY": guides may mildly
  duplicate other repos (e.g. `claude-books` agentic-coding) to stay self-contained.
- **Methodology.** Independent analysis FIRST → reconcile with the internal corpus →
  iterate. Never inherit prior conclusions.
- **Pedagogy (chapter shape).** productive-failure opener → principle + worked-example
  fading → complementary multi-paradigm → **ICAP-scaffolded interactive demo** →
  interleaved retrieval/practice → **4-dim-rubric tie-in** → PFL stretch → `provenance`.
  The **4-dim rubric** (Technical Correctness · Trade-off Awareness · Evaluation Rigor ·
  Communication; from `/ai-eng-sim`, independently validated) is the cross-guide spine.
- **Demos.** Public guides ship **static client-side** demos only (live-LLM work is the
  *personal* `/ai-eng-sim` simulator, deferred — likely BYO-key when public). Pattern:
  **dump → JSON → Preact island**, ICAP-wrapped. The upstream "demo kit" is tracked at
  `book-scaffold-astro` **#103** (extend it; don't local-hack).
- **Code demos = build-your-own-X companion** (`mini_eval`, then `mini_rag`, …) you build
  chapter-by-chapter, bridged to production tools (`eval-toolkit`, RAGAS).
- **Demand spine = FOLDED into building.** Gathered material lives in
  `docs/research/role_demand_and_interview_signals/` (independent baseline +
  new-topics gather); it frames each guide's "what's tested / how candidates fail."
  No separate strict-live synthesis run.

## What's built (current state)
- **Strategy + demand research** — this hub repo, branch `ai-engineering-series-roadmap`:
  `docs/plans/active/2026-06-03_ai_engineering_series_roadmap.md` (the roadmap; partly
  stale, see above) + `docs/research/role_demand_and_interview_signals/` (committed).
- **Evaluation guide vertical slice** — `~/guides-ai-engineering`, branch `main`,
  commit `9df5c7b` (LOCAL-ONLY, not pushed):
  - `mini_eval` companion (metrics + mock LLM-as-judge harness) — **7/7 tests pass**.
  - Chapters **0** (why-evaluation), **2** (threshold-tradeoff), **7** (llm-as-judge),
    in the §5 shape, each rubric-anchored.
  - Two ICAP demos (`ThresholdExplorer`, `JudgeBiasExplorer`) — dump→JSON→Preact island.
  - **`astro build` + `book-scaffold validate` pass** on scaffold **v4.14.2**.

## Locations (quick map)
- Hub strategy: `~/guides/docs/plans/active/` (this handoff + the roadmap) and
  `~/guides/docs/research/role_demand_and_interview_signals/`.
- The guide: `~/guides-ai-engineering/` — chapters `src/content/evaluation/`, companion
  `companion/`, demos `src/components/`, demo data `src/data/*_demo.json`, resume notes
  `docs/RESUME.md`.
- Source volumes (seed, frozen): `~/interview_prep_series/` (vol08/09/25, AIES).
- Working plan with full decision trail (session-local, will NOT persist): was
  `~/.claude/plans/i-want-to-think-typed-spark.md` (§17 = corrections, §18 = first build).

## Next steps
1. **Continue the Evaluation guide** — `~/guides-ai-engineering/docs/RESUME.md`: the
   remaining ~10 chapters (1, 3–6, 8–12) + capstone; extend `mini_eval` (calibration,
   RAG-eval); add demos. Use Ch 2 / Ch 7 as templates.
2. **Push `guides-ai-engineering`** to GitHub (currently local-only) — outward-facing,
   needs the user's go.
3. **File a `consumer:guides` issue** for the `/index` route collision (per the hub's
   durable upstream policy).
4. **(Optional)** Sync this corrected direction into the roadmap doc proper / a design
   v0.4 amendment.

## Known items / carry-forward
- `/` **route collision** — custom `src/pages/index.astro` duplicates the scaffold's
  auto-injected index (warning now; future Astro hard-error) → consumer:guides issue.
- **Multi-guide routing** — single `chapters` collection now (URLs `/ai-engineering/
  chapters/<slug>`); generalize to per-guide `[guide]/...` when guide #2 lands.
- **`paradigms` enum** is still the pilot's pedagogical-frameworks set, not the v0.3
  presentation-modes set (open design item; chapters use `[default]`).
- Demand-spine task is closed (folded in); its artifacts remain as reference.

## Build / test (the guide)
```bash
cd ~/guides-ai-engineering
npm install && npm run build
python3 companion/tests/test_mini_eval.py      # 7 tests
python3 scripts/build_demo_data.py             # regen demo JSON if mini_eval changes
```
