# Demand spine — resume notes (paused for review 2026-06-03)

Part of the **first move** of the AI-native series roadmap (`docs/plans/active/2026-06-03_ai_engineering_series_roadmap.md`,
§9 + §11). Methodology = independent-first → reconcile → synthesize.

## Done
- ✅ **research_plan.md** — validated (6 sub-areas A1–A6, taxonomy, independent-first methodology binding).
- ✅ **P0 independent baseline** (`_independent_baseline_2026-06-03.md`) — blind 94-source web pass, recorded *before*
  reconciliation. Competency taxonomy (common-core/variant/niche), interview-content map, ranked failure modes, trends.
- ✅ **New-topics gather** (`_gather_new_topics_2026-06-03.md`) — A4 industry variation (7-sector table),
  AI-assisted-coding interviews (Meta/Google/Canva), frontier-lab hiring (overlaps internal — reconcile in P1), and a
  **stat correction** (the "~68% integrated AI eval" figure is unverified → use Gartner ~18%/2025→60%/2028).

## Next — P1 · Reconcile vs. internal corpus (do NOT overwrite the P0 baseline)
Triangulate the independent findings against `~/interview_prep_series`:
- `docs/research/vol_anthropic_roles/` (audited, 182 claims) — frontier-lab hiring; expect strong overlap.
- `docs/research/frontier_labs_comparison/` (shallow) — cross-lab.
- `.claude/skills/ai-eng-sim.md` + `docs/practice/ai_eng_sim_calibration.yml` — the **4-dim rubric** + 24 calibration anchors.
- Interview chapters: vol08 ch14-15, vol09 ch19-20, AIEC ch04/08.
Produce a reconciliation note: **agreements** (validate) + **divergences** (flag). Confirm the 4-dim rubric as the spine.

## Next — P3 · Synthesize the strict-live dossier
Run the structuring: `/research-gather` (seed from the baseline + new-topics findings → `bib_ledger.yml`,
`evidence_ledger.yml`, `claim_graph.jsonl`, `cache_manifest.yml`; confidence-grade Official/Corroborated/Community/
Inference) → `/agent-index`. Then `/freshness-audit`.

## The deliverable this all feeds: the proposed guide slicing (→ roadmap §8)
Open questions the synthesis must answer:
1. Does **"Evaluation"** split into linked classical-eval-foundations + an AI-native "LLM/system evaluation" guide?
2. Where do **AI-assisted-coding interviews** live — a cross-cutting skill section across guides, or its own short treatment?
3. Is **frontier-lab hiring** a distinct track/callout, or folded into industry callouts?
4. Final dimension set + priority (working hypothesis: evals · llm-app-eng · production · fine-tuning · safety).

## State
All artifacts are in the working tree, **uncommitted** (on `main`). Nothing pushed. Task #2 ("Build the demand spine")
is in_progress — paused here.
