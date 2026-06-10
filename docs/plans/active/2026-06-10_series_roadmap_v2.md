# AI-engineering series — roadmap v2

**Date**: 2026-06-10 · **Status**: canonical roadmap for the AI-native guide series — the single read-first doc.
**Supersedes** (all moved to `../done/`):
- `2026-06-03_ai_engineering_series_roadmap.md` — the original roadmap. Still-valid reference there: **§5** chapter
  shape (full spec), **§6–6.2** demo/viz strategy + the learn→drill→improve dogfooding loop, **§13** Evaluation
  worked example, **§14** build-your-own companions.
- `2026-06-04_session_handoff.md` — the course-corrected direction (folded into §1 and §3 here).
- `2026-06-08_roadmap_audit.md` — the state audit (ground truth + locked decisions absorbed into §2–§3 here).

**Relationship to design**: design **v0.4** (`../../design/2026-06-10_design_v0.4.md`) is the canonical design doc —
positioning, architecture, chapter shape, demo policy, quality gate live there at design level; this roadmap is the
series **execution plan**. To continue building: `~/guides-ai-engineering/docs/RESUME.md`.

## 1 · Mission & positioning (recap — canonical statement in design v0.4)

A **public, company-agnostic, interview-prep-led** series on the **AI-native dimensions** of AI engineering, built as
**one multi-guide repo** `github.com/brandon-behring/guides-ai-engineering` (this hub stays landing + pedagogy +
strategy). **Success = public teaching traction** — others read and use it; the author's own prep is the byproduct.
Audience: engineers **switching INTO AI-eng** (strong SWE/DS background; foundations assumed/linked). Content:
pedagogy-driven **transform** of `~/interview_prep_series` vol08/09/25 + AIES — seed, not port; agnosticized;
completeness over DRY. Assessment spine: the **4-dim rubric** (Technical Correctness · Trade-off Awareness ·
Evaluation Rigor · Communication), independently validated. Demand framing comes from
`docs/research/role_demand_and_interview_signals/` (P0 baseline: RAG ~20% · production+evals ~18% · agentic ~15% ·
prompting ~10%; failure modes: communication #1 · jumping-without-clarifying · outdated skills · ignoring-ops ·
no-prod-experience).

**Chapter shape (recap; full spec = design v0.4 + 06-03 §5)**: `<YouWillLearn>` → productive-failure opener +
`<Pitfall>` → principle + worked-example fading, multi-paradigm-complementary → **ICAP island demo** (static,
dump→JSON→Preact, no live LLM) → interleaved `<Practice>` → "How this is graded" 4-dim-rubric tie-in +
industry-variation callout → PFL stretch. LOS frontmatter anchors ↔ prose anchors stay bijective.

## 2 · Ground truth (2026-06-10)

| Item | State |
|---|---|
| **Guide #1 — Evaluation** | **COMPLETE + independently reviewed + public.** 13 ch (0–12), ~2,369 MDX lines, 9 ICAP island demos. 5-dim review done, all findings fixed (`~/guides-ai-engineering/docs/REVIEW_FINDINGS_2026-06-08.md`); anchors bijective. Pushed `f52ea51`. |
| **Guide #2 — LLM app engineering** | **COMPLETE + independently reviewed (2026-06-10, same-day update).** All 13 ch (0–12) in the §5 shape; 7 new islands; 3-agent review, all findings fixed (`~/guides-ai-engineering/docs/REVIEW_FINDINGS_2026-06-10.md`). Pushed through `121cca4`. **→ the §5 launch gate is MET.** |
| Companion (`companion/`, stdlib-only) | `mini_eval` 6 modules **24/24** · `mini_rag` 5 modules (search·chunk·pipeline·rerank·budget) **29/29** · `mini_agent` 3 modules (loop·tools·orchestrate+crew) **12/12**. |
| Multi-guide routing | One `chapters` collection + `generateId` folder-namespacing → `/chapters/<guide>/<slug>/`; slugs unique per guide. `/chapters/` index still mixes guides (scaffold #15). |
| Scaffold | Guide repo **v4.14.2** (build+validate green) · hub **v4.2.0** (upgrade scheduled at launch-prep, §5). |
| Upstream (`book-scaffold-astro`) | **#129** /index collision, **#130** LOS-anchor lint, **#132** 2nd-consumer multi-guide signal — open; **#103** demo kit — labeled+commented; **#15** multibook — closed-deferred-post-v4.x. |
| **Distribution** | **No live site.** `guides.brandon-behring.dev` does not resolve; no Cloudflare Pages project for either repo; guide repo had no LICENSE and no CI (license fixed this session, §7; CI lands at launch, §5). Both repos are public **source**. |
| Hub repo | Strategy + demand research; branch `ai-engineering-series-roadmap` merged to `main` this session. |

## 3 · Decision ledger

**Carried** (from the 06-08 audit, still in force):
- **Demand-spine P1/P3 stay descoped** — build on judgment; the P0 baseline is the framing. No strict-live synthesis run.
- **One self-contained Evaluation guide** — no foundations/AI-native split; completeness over DRY.

**Retired**:
- **"Publish gate = complete guide"** — met and passed 2026-06-09 (guide #1 complete+reviewed, both repos public).
  Guide-2 WIP commits are public as authored; the only remaining publish question is the **site**, which is §5's gate.

**New (locked 2026-06-10)**:
| Decision | Resolution | Rationale |
|---|---|---|
| **Site launch timing** | **After guide #2 completes** (complete + independently reviewed) | Strongest first impression: two complete guides at launch. Interim mitigation: the README's dead URL claim fixed now (§7). |
| **Guide #3** | **Production AI systems** | Demand ~18%; two top failure modes ("no prod experience", "ignoring ops"); strong seeds; guide-2 Ch7 hands off to it. |
| **Craft-capstone guide** | **OPEN — decide after guide #2** | Absorb case: per-guide capstone+craft chapters already exist (guide-1 ch12; guide-2 ch11–12). Keep case: a mock-interview-led guide is where the 4-dim rubric + sim-style drills get full treatment. |
| **Doc consolidation** | One canonical roadmap (this doc); 06-03/06-04/06-08 chain retired to `done/` | Three layers of partially-stale docs were the failure mode this doc cures. |
| **Licensing** | **CC BY 4.0 (prose) + MIT (code)** in the guide repo | Matches the hub's `LICENSE`/`LICENSE-SCRIPTS` pair and design v0.3 §1's locked decision; unlicensed-by-default contradicted the traction goal. |
| **Design v0.4** | **Authored** (not just a banner) | Pending since 06-03; v0.3 §4 explicitly deferred open questions to v0.4+. |
| **Hub branch** | Merge `ai-engineering-series-roadmap` → `main` | Ends "canonical strategy lives on an unmerged branch". |

## 4 · Workstream A — finish guide #2 (ACTIVE)

**Next unit of work: Ch 2 — Retrieval 101** (embeddings & vector search; first chapter to import `mini_rag`).

Chapter order (locked, per `docs/guide-02-llm-app-engineering.md`):
**Ch2** Retrieval 101 → **Ch3** chunking & document representation → **Ch4** RAG end-to-end → **Ch5** evaluating RAG
(bridges guide #1) → **Ch6** advanced RAG (rerank/HyDE/routing) → **Ch7** RAG in production (latency/cost; hands off
to guide #3) → **Ch8** agents & tool use → **Ch9** multi-agent orchestration → **Ch10** fine-tune vs RAG vs prompt
(judgment) → **Ch11** system-design capstone → **Ch12** interview craft & transfer.

**Companion growth map**: `mini_rag.search` exists (Ch2) → `chunk` (Ch3) → `pipeline` (Ch4) → **bridge to
`mini_eval.retrieval`** at Ch5 (reuse, don't rebuild) → `rerank` (Ch6) → profiler/caching patterns (Ch7) →
**`mini_agent` seeded Ch8–9** (ReAct loop, then multi-agent) → Ch10–12 prose/judgment, no new modules. Every module:
stdlib-only, tested, "for learning, not production", bridged to the production tool (LangChain/LlamaIndex/RAGAS).

**Demo policy continues**: computed demos via `scripts/build_demo_data.py` (dump→JSON→island); hand-authored quiz
JSON (`ScenarioQuiz`) wherever live model outputs would otherwise be fabricated.

**Completion gate (replicates guide #1)**: independent **5-dimension review** (math / demo-honesty / factual /
pedagogy / island+MDX) by a fresh agent → findings doc (`docs/REVIEW_FINDINGS_<date>.md`) → all fixes applied →
LOS anchors bijective in all chapters → `npm run build` + validate green → all companion tests pass. Only then is
guide #2 "complete" — which opens §5.

## 5 · Workstream B — launch (gated on guide #2 complete + reviewed)

**The gap, stated plainly**: the success metric is public teaching traction, but nothing is deployed — the domain
doesn't resolve and guide #1 is readable only as MDX source on GitHub. Launch closes that gap. Architecture (per both
repos' `wrangler.toml`): hub Pages project serves `guides.brandon-behring.dev`; guide repo deploys as its own Pages
project, proxied at `/ai-engineering/*`.

**Phase L0 — live at all (pages.dev)**
- *Claude (pre-work)*: verify `npm run build` green in **both** repos (hub on v4.2.0 unverified recently — and see
  the upgrade below); add `public/_redirects` to the guide repo (`/ → /ai-engineering/ 302` — with
  `base=/ai-engineering/` the pages.dev root otherwise 404s); reconcile Node-version notes (guide: 22, hub: 20).
- *User (Cloudflare dashboard — account actions, not scriptable here)*: Workers & Pages → create Pages project from
  `github.com/brandon-behring/guides-ai-engineering` (build `npm run build`, output `dist`, Node 22) → yields
  `guides-ai-engineering.pages.dev`. Same for the hub (`guides-hub`, Node 20). Step-by-step runbook (hub):
  `docs/deploy-cloudflare-pages.md` (written 2026-05-20; re-verify settings against it at launch).
- *Claude (post)*: full link-check of the live URLs (`/url-freshness-check`), verify islands hydrate + demo JSON loads.

**Phase L1 — custom domain + path proxy**
- *User*: attach `guides.brandon-behring.dev` to the hub Pages project (Cloudflare DNS handles the CNAME).
- *Path proxy*: **Worker on `guides.brandon-behring.dev/ai-engineering/*` → fetches from the guide Pages project**
  (matches both wrangler.toml comments). Claude writes the Worker + wrangler config in the hub repo; user deploys the
  route. Fallback only if the Worker is unwanted: `ai-engineering.` subdomain (requires `site`/`base` churn — avoid).
- *Claude*: **hub scaffold v4.2.0 → v4.14.x upgrade** (load-bearing now: two visibly different shells on one domain
  otherwise); hub landing links to `/ai-engineering/`; sitemap/robots sanity; correct the stale "is connected"
  comment in the hub `wrangler.toml`.

**Phase L2 — traction polish + instrumentation**
- *Claude*: OG/social metadata + canonical URLs (link unfurls matter); README "Read it live →" links;
  `gh repo edit --homepage` on both repos; **CI quality gates for the guide repo** (mirror the hub's four workflows:
  astro-build, companion-test covering `mini_eval`+`mini_rag`, content-validate; Pages git-integration handles deploys).
- *User*: Cloudflare Web Analytics token → Claude adds the snippet. **Instrumentation is part of launch**: without
  it (plus GitHub stars/traffic via `gh api`), the success metric is unmeasurable.
- **WIP visibility decision (decide at launch)**: in-progress guides on the live site — label "in progress" on the
  landing picker (on-brand for building in the open) vs `draft:` flags. Before relying on drafts: route filtering is
  verified, **listing filtering is not** — if the listing shows unrouted drafts, that's an upstream bug → file
  `consumer:guides`, don't hack locally.

## 6 · Workstream C — guide #3+

| # | Guide | Seeds (transform) | Companion | Demand evidence | Status |
|---|---|---|---|---|---|
| 3 | **Production AI systems** | vol08 ch6,12-13 · vol09 ch15-16,18 | eval-in-prod/monitoring atop `mini_eval` (shape decided at planning) | production ~18%; "no prod experience" + "ignoring ops/cost/eval" failure modes | **Locked next after #2** |
| 4? | **Working with AI** (AI-assisted engineering) | demand-spine AI-assisted-coding deep-dive · AIES | light (workflow artifacts, not a lib) | AI-assisted-coding interviews normalizing; communication = #1 failure mode | Candidate |
| — | **Craft-capstone** | AIES · vol09 ch19-20 · 4-dim rubric anchors | — | per-guide ch12s may already carry it | **OPEN** — decide post-guide-2 (§3) |

Unchanged: **fine-tuning absorbed** (guide-2 Ch10 teaches the judgment call), **safety absorbed** as callouts,
**frontier-lab = cross-cutting callout**, not a guide. Foundations stay linked, not built.

## 7 · Hygiene

**Executed this session (2026-06-10)**:
- This doc written; 06-03 roadmap, 06-04 handoff, 06-08 audit, 05-24 handoff, 05-22 research-workstream plan
  (complete since 2026-05-23) → banners + moved to `done/`. `active/` = this doc only.
- **Design v0.4 authored** (`docs/design/2026-06-10_design_v0.4.md`); v0.3 banner added.
- Hub `CLAUDE.md` repointed (single canonical roadmap pointer; design v0.4; workstream → done).
- Guide repo: `docs/RESUME.md` repointed here; README dead-URL claim reworded to launch-gated; **LICENSE (CC BY 4.0)
  + LICENSE-MIT added** + README licensing section. Committed + pushed.
- Memory: roadmap/design/session-state files + MEMORY.md repointed; research-toolkit version corrected to v2.6.0.
- Hub branch merged to `main` + pushed.

**Standing flags**:
- `~/interview_prep_series/docs/AI_ENG_SYSTEM_INVENTORY.md` — the transform's seed inventory — is still **untracked**
  in that repo (user's repo, user's call; re-flagging per the 06-08 audit).
- Hub `wrangler.toml` claims a Pages connection that doesn't exist — correct during §5 L1.
- `book-scaffold validate` counts 16 files in the guide repo (13+2 chapters + authors.mdx) — cosmetic.

## 8 · Deferred / not-doing

Demand-spine P1/P3 strict-live synthesis · `/ai-eng-sim` live-LLM personal simulator (BYO-key public variant remains
the likely future path) · Pyodide in-browser execution · scaffold **#15** per-guide chapter index (upstream-deferred;
keep feeding evidence via **#132**) · standalone fine-tuning/safety guides · `methodology.mdx` refresh from v0.4
(follow-up, noted in v0.4) · Cloudflare deploy of anything **before** the §5 gate.

## 9 · Next unit of work

*(Updated same-day, 2026-06-10: §4 executed in full — guide #2 complete + reviewed. The gate is met.)*

1. **Open the §5 launch workstream** — Phase L0 needs one user Cloudflare-dashboard sitting (create the two Pages
   projects) plus Claude pre-work (hub build check, `_redirects`, link checks); then L1 domain + proxy (incl. the hub
   scaffold upgrade), then L2 polish + instrumentation.
2. **Pre-draft the guide-3 (Production AI systems) outline** while the guide-2 Ch 7 material is warm (seeds in §6).
3. **Post-launch**: revisit the craft-capstone open decision (§3) and the WIP-labeling choice with real pages live.
