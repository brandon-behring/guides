# Roadmap audit — AI-engineering guide series (2026-06-08)

## Context

An audit of the AI-engineering series roadmap "and where we are." The planning docs
were last touched 2026-06-04 (the course-correction handoff); this audit establishes
**ground truth as of 2026-06-08** and measures it against the roadmap's stated plan.
Its purpose: **pick the next unit of work** for the series — which is confirmed the
**active priority**. Scope was **report-only**: document findings + the decisions
taken + the recommended next unit (no doc/memory edits, no build execution).

Method: three parallel read-only passes over `~/guides`, `~/guides-ai-engineering`,
`~/guides-experimentation`, `~/interview_prep_series`, and `~/Claude/research_toolkit`,
cross-checked against the roadmap (`2026-06-03_ai_engineering_series_roadmap.md`), the
handoff (`2026-06-04_session_handoff.md`), and project memory.

---

## Verdict

**Healthy but paused.** The Evaluation vertical slice is real and independently
verified. The roadmap is essentially on-track — and the build actually *exceeded* its
"first move" scope (authoring was supposed to wait; it happened anyway). The drift is
almost entirely **documentation hygiene** (the written roadmap body lags the corrected
plan, already banner-flagged) plus **deliberately deferred** items.

**No guide work has moved in 4 days.** The only recent ecosystem activity is in the
*seed* repo (`interview_prep_series` — Starr volume edits + a research-refresh
appendix), not in the series repos.

---

## Scorecard — roadmap plan vs. reality

| Roadmap item | State | Evidence / note |
|---|---|---|
| Land + index roadmap doc | ✅ Done | Roadmap + handoff committed on `ai-engineering-series-roadmap`; CLAUDE.md + memory pointers added. Branch **not merged to `main`** |
| Demand spine **P0** (blind baseline) | ✅ Done | 94-source blind pass (`_independent_baseline_2026-06-03.md`) + new-topics gather (`_gather_new_topics_2026-06-03.md`); recorded pre-reconciliation |
| Demand spine **P1 reconcile / P3 strict-live** | ⛔ Descoped (not drift) | "Folded into building" per the course-correction. No `bib_ledger/evidence_ledger/claim_graph/cache/agent_index`. Leaves slicing formally open |
| Evaluation vertical slice | ✅ Done — **exceeds scope** | 3/13 ch (0,2,7), `mini_eval` 7/7 tests, 2 ICAP demos, `build`+`validate` green on v4.14.2. Roadmap had *deferred* authoring |
| Hub scaffold v4.2.0 → v4.14.2 | ⚠️ Split | Sibling guide is on **v4.14.2**; **hub still v4.2.0**. Hub isn't being actively built, so low-impact |
| Push `guides-ai-engineering` | ❌ Not done | Local-only, **no git remote configured**. Blocks the "public teaching traction" success metric |
| File `consumer:guides` issues | ❌ Not done | Demo-kit (#103 extension) + `/index` route collision both undrafted upstream |
| Design v0.4 amendment | ❌ Not done | Explicitly deferred. v0.3 (`2026-05-23`) still latest |

---

## What's built (verified facts, 2026-06-08)

**`guides-ai-engineering`** — branch `main`, HEAD `9df5c7b` (2026-06-04), clean, **single commit, no remote**:
- Chapters (`src/content/evaluation/`, all `draft: false`): `00-why-evaluation` (131 ln), `02-threshold-tradeoff` (198 ln), `07-llm-as-judge` (179 ln).
- Companion `mini_eval`: `metrics.py` (124 ln — confusion matrix, P/R/F1, threshold_sweep, average_precision) + `judge.py` (87 ln — PairwiseJudge, position/verbosity bias, debias) + **7 tests, reported passing**.
- Demos: `ThresholdExplorer.tsx`, `JudgeBiasExplorer.tsx` (Preact islands) reading precomputed `threshold_demo.json` / `judge_demo.json`; `scripts/build_demo_data.py` is the dump half. **No live model** — matches the static-client-side decision.
- Scaffold **v4.14.2**; `astro build` + `book-scaffold validate` green. `docs/RESUME.md` carries per-chapter templates for the remaining work.
- **Remaining:** ch 1, 3–6, 8–12 + capstone (~10 ch). Extensions flagged in RESUME: bootstrap CIs (ch3), calibration (ch4), RAG-eval (ch9).

**Demand spine** (`~/guides/docs/research/role_demand_and_interview_signals/`):
`research_plan.md` (A1–A6 sub-areas) + the P0 baseline + new-topics gather + `_RESUME.md`. Findings already usable as framing: top topics (LLM arch ~25%, RAG ~20%, production+evals ~18%, agentic ~15%); top failure modes (communication, jumping-without-clarifying, outdated skills, ignoring ops/cost/eval, no prod experience); 7-sector industry-variation table; AI-assisted-coding interview deep-dive.

**Seed for Evaluation** (`~/interview_prep_series`, all present): vol09 ch8 (1,413 ln / 34 cards), ch9 (1,405 / 16), **AIES ch7 (1,896 / 63 — heaviest)**, vol08 ch7 (827 / 13), vol26 eval dossier (719 ln markdown, v1 — not yet pipelined). ≈5,541 LaTeX lines + 719 research lines + 126 cards back the unbuilt chapters — ample raw material.

---

## Drift & hygiene (specifics)

1. **`2026-06-03` roadmap body is stale** (banner already redirects to the handoff): architecture (ONE repo, not 7), guide set (evals · llm-app-eng · production · craft-capstone · working-with-AI lead; fine-tuning/safety demoted; frontier-lab = cross-cutting track — **not** the §8 five-guide table), and §10 sequencing. **Still valid:** pedagogy/chapter-shape (§5), demo strategy (§6–6.1), dogfooding loop (§6.2), Evaluation worked example (§13), build-your-own companions (§14).
2. **`2026-05-24` session handoff** still sits in `plans/active/` though superseded by the 06-04 handoff → belongs in `done/`.
3. **Memory drift (minor):** `research_toolkit` is now **v2.6.0** (HEAD `0d733a1`); memory says v2.4.1. Otherwise the session-state + roadmap memories are accurate.
4. **Seed inventory is uncommitted:** `interview_prep_series/docs/AI_ENG_SYSTEM_INVENTORY.md` — the doc the whole transform plan leans on — is **untracked** in that repo (alongside Starr-volume WIP). User's repo, user's call, but worth flagging since the plan references it as a fixture.
5. **Open content questions** (were unanswered because P1/P3 was descoped; now resolved by the decisions below): does "Evaluation" split? where does AI-assisted-coding live? frontier-lab = track or callout? final dimension set + priority.

---

## Decisions locked this session (2026-06-08)

The vertical slice proved the build approach (chapter shape, dump→JSON→island demos, build-your-own companion, rubric tie-in) works end-to-end. Resolving the open questions so authoring can resume cleanly:

| Decision | Resolution | Rationale |
|---|---|---|
| **Priority** | AI-eng series is the **active thread**; resume here | The 4-day gap was a pause, not a deprioritization |
| **Demand spine P1/P3** | Stay **descoped**; build on judgment | P0 baseline is enough framing; per-chapter calls beat a blocking synthesis run |
| **Guide shape** | **One self-contained Evaluation guide** (~13 ch) — do **not** split | No existing eval-metrics-foundations guide to link to (the experimentation pilot teaches A/B-test foundations, a different thing); completeness-over-DRY; keeps the built Ch2; best standalone artifact. Center of gravity stays AI-native (ch5–12) |
| **Publish trigger** | Gate on a **readiness bar = the complete Evaluation guide** | Push to GitHub only once all chapters + capstone are done & polished — strongest first impression for the public-traction metric |

> These decisions supersede the corresponding open questions in the 06-03 roadmap §13
> and 06-04 handoff. **Not yet persisted** to memory or folded into the roadmap/handoff
> proper (report-only scope) — see deferred hygiene.

---

## The next unit of work → the path to a complete guide

**Next unit: author the Ch 1 + Ch 3 block**, extending the built front (0, 2) into a coherent 0–3 opening:
- **Ch 1 — Eval mindset** (what-before-how; failure-mode-first; contrasting cases): mostly prose, reuses existing scaffold components, **no new companion code** — a low-friction way to restart after the gap.
- **Ch 3 — Confidence & statistical rigor**: extend `mini_eval` with **bootstrap confidence intervals** (RESUME.md's flagged next companion step) → generate a CI demo (dump→JSON→island; e.g. CI bands on the Ch2 P/R/F1 data) → author in the §5 shape. **Re-exercises the full chapter+companion+demo loop** and builds directly on the already-built Ch 2 (metrics → CIs on those metrics).

Why this unit: lowest-friction resume, completes the foundations block, re-validates the pipeline end-to-end, and continues straight from existing work. Scope ≈ 1–2 focused sessions. Use Ch 2 / Ch 7 as templates.

**Ordered path to the publish bar** (complete guide = all of 0–12 + capstone):
`3 → 4 → 9 → 8 → 5 → 6 → 10 → 11 → 12`. The three net-new `mini_eval` extensions cluster early — **CIs (ch3) · calibration + reliability-diagram (ch4) · RAG retrieval/faithfulness (ch9, top-demand)**; the remainder are prose + static charts. Ch 12 is the rubric-scored system-design capstone. **Then push to GitHub** (currently no remote) — the chosen publish gate.

**Deferred hygiene (queue for later):** move the 05-24 handoff to `done/`; bump memory's toolkit version to v2.6.0; persist the four locked decisions into memory + the roadmap/handoff; (optional) design v0.4 amendment; decide hub scaffold upgrade vs. leave (hub isn't being built — "leave" is defensible). The two `consumer:guides` issues (demo-kit #103 ext; `/index` collision) can wait until they actually block authoring.

---

## How to re-verify (spot-checks)

```bash
# Build state of the guide is local-only with no remote:
git -C ~/guides-ai-engineering remote -v          # expect: empty
git -C ~/guides-ai-engineering log --oneline       # expect: single commit 9df5c7b
python3 ~/guides-ai-engineering/companion/tests/test_mini_eval.py   # expect: 7 tests passed

# Scaffold version split:
grep book-scaffold-astro ~/guides/package.json                    # ^4.2.0
grep book-scaffold-astro ~/guides-ai-engineering/package.json     # ^4.14.2

# Demand spine has no strict-live artifacts:
ls ~/guides/docs/research/role_demand_and_interview_signals/      # plan + 2 gather md + _RESUME; no *_ledger.yml

# Hub branch not merged to main:
git -C ~/guides log --oneline main..ai-engineering-series-roadmap # 4 commits ahead
```
