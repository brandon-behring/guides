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
| **Guide #3 — Production AI systems** | **Outline + Ch 0 authored (2026-06-10).** `docs/guide-03-production-ai-systems.md` (13-ch production-loop spine + `mini_prod` companion shape) + Ch 0 in the §5 shape, on the landing picker as "in progress". Ch 1+ start post-launch. |
| Companion (`companion/`, stdlib-only) | `mini_eval` 6 modules **24/24** · `mini_rag` 5 modules (search·chunk·pipeline·rerank·budget) **29/29** · `mini_agent` 3 modules (loop·tools·orchestrate+crew) **12/12**. `mini_prod` planned (guide-3 Ch 2+). |
| Multi-guide routing | One `chapters` collection + `generateId` folder-namespacing → `/chapters/<guide>/<slug>/`; slugs unique per guide. `/chapters/` index still mixes guides (scaffold #15). |
| Scaffold | **Both repos v4.14.2** (hub upgraded 2026-06-10 during L0 pre-work; build+validate green both; npm latest 4.23.0 deliberately not taken — matched shells beat newest). |
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
- *Claude (pre-work)*: **✅ DONE 2026-06-10** — builds + validate green in both repos; guide repo
  `public/_redirects` added (`/ → /ai-engineering/ 302`, verified in `dist/`); Node notes reconciled (**both repos
  Node 22** — Astro 6.1.7 requires ≥22.12.0; the old "hub: Node 20" notes were stale); hub scaffold upgraded (pulled
  forward from L1, below); runbook rewritten. **The user dashboard sitting is the only L0 step left.**
- *User (Cloudflare dashboard — account actions, not scriptable here)*: Workers & Pages → create Pages project from
  `github.com/brandon-behring/guides-ai-engineering` (build `npm run build`, output `dist`, Node 22) → yields
  `guides-ai-engineering.pages.dev`. Same for the hub (`guides-hub`, Node 22). Step-by-step runbook (both projects):
  `docs/deploy-cloudflare-pages.md` (rewritten 2026-06-10 — Node 22, no `BOOK_PRESET`, root-mounted URLs).
- *Claude (post)*: full link-check of the live URLs (`/url-freshness-check`), verify islands hydrate + demo JSON loads.

**Phase L1 — custom domain + path proxy**
- *User*: attach `guides.brandon-behring.dev` to the hub Pages project (Cloudflare DNS handles the CNAME).
- *Path proxy*: **Worker on `guides.brandon-behring.dev/ai-engineering/*` → fetches from the guide Pages project**
  (matches both wrangler.toml comments). Claude writes the Worker + wrangler config in the hub repo; user deploys the
  route. Fallback only if the Worker is unwanted: `ai-engineering.` subdomain (requires `site`/`base` churn — avoid).
- *Claude*: ~~hub scaffold v4.2.0 → v4.14.x upgrade~~ (**done early, 2026-06-10** — both repos on v4.14.2) ·
  ~~correct the stale "is connected" comment in the hub `wrangler.toml`~~ (**done 2026-06-10**) · hub landing links
  to `/ai-engineering/`; sitemap/robots sanity.

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
| 3 | **Production AI systems** | vol08 ch6,12-13 · vol09 ch15-16,18 | `mini_prod` (latency/cascade/trace/monitor/drift), reuses `mini_eval`+`mini_rag`+`mini_agent` — shape decided 2026-06-10 | production ~18%; "no prod experience" + "ignoring ops/cost/eval" failure modes | **Outline + Ch 0 authored 2026-06-10** (`~/guides-ai-engineering/docs/guide-03-production-ai-systems.md`); Ch 1+ post-launch |
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

**Executed 2026-06-10 (later session — hygiene tie-offs + L0 pre-work + guide-3 kickoff)**:
- The 2026-05-24 cross-pollination work (research-lint CI + `scripts/research_lint.py` + `docs/design/PEDAGOGY.md` +
  4× cache_manifest portable-path migration) **squash-merged to `main` and pushed** — it had sat on an unmerged local
  branch since 05-24 despite being recorded as "shipped". The memo itself stays local (it reviews a private sibling
  repo in detail); the wrap-up doc was redacted + renamed (`2026-05-24_cross_pollination_p1_p2_wrap_up.md`).
- `fix/inactive-test-workflows` branch found **superseded** (main already carries the `if: false` no-op-job fix) —
  deleted. `ai-engineering-series-roadmap` (merged) deleted local + origin.
- `scripts/backfill_pdf_cache_text.py` **deleted** — research_toolkit#11 shipped (closed 2026-05-23).
- Hub scaffold **v4.2.0 → v4.14.2**; runbook rewritten; `wrangler.toml` corrected; guide repo `_redirects` added.
  All hub CI green incl. the new research-lint workflow.

**Standing flags**:
- ~~`AI_ENG_SYSTEM_INVENTORY.md` untracked~~ — **resolved 2026-06-10**: committed + pushed in `interview_prep_series`
  (`e8acc735`, WIP-snapshot commit) as part of the cross-machine remote-completeness pass. That repo's regenerated
  freshness audit (same commit) reports **25 HIGH findings in vol08 — but all 25 are one velocity-scanner rule**
  (`datedcontent{March 2026}` past vol08's HIGH-velocity threshold), mostly evergreen chapter-intro stamps, *not* 25
  distinct stale numbers. **Examined 2026-06-10**: the real re-verify surface is the volatile-number subset
  (`appendix_b` API/pricing, `appendix_c` model comparison, `ch13` cost, `ch08` MCP/agent landscape, `ch11` OWASP
  version). Figures refreshed + parked in the guide-3 outline's "Seed freshness notes (vol08)" block [verified
  2026-06-10] — that drives the guide-3 transforms when chapter authoring starts.
- **research-lint pin stays at toolkit v2.4.0**: v2.6.0's stricter display-vs-evidence substring check fails the 4
  depth-expanded dossiers (~140 agent-index Mechanism bullets not verbatim substrings of cached sources). Bumping the
  pin is blocked on that repair pass — natural to fold into the long-pending `/dossier-audit` promotion round.
- Two name-only `claude-books` mentions remain in older public `done/` wrap-ups (05-22 preflight, 06-04 handoff) —
  name + one-line context only, judged tolerable 2026-06-10; the detailed memo is what stays local.
- `book-scaffold validate` counts include `authors.mdx` (28 in the guide repo as of guide-3 Ch 0) — cosmetic.

## 8 · Deferred / not-doing

Demand-spine P1/P3 strict-live synthesis · `/ai-eng-sim` live-LLM personal simulator (BYO-key public variant remains
the likely future path) · Pyodide in-browser execution · scaffold **#15** per-guide chapter index (upstream-deferred;
keep feeding evidence via **#132**) · standalone fine-tuning/safety guides · `methodology.mdx` refresh from v0.4
(follow-up, noted in v0.4) · Cloudflare deploy of anything **before** the §5 gate.

## 9 · Next unit of work

*(Updated 2026-06-10, third pass: hygiene tie-offs done (§7) · L0 Claude pre-work done · hub scaffold upgraded ·
guide-3 outline + Ch 0 authored (§6). Items 1–2 of the previous pass are executed up to their user-action gates.)*

1. **User Cloudflare-dashboard sitting** — the only step left in Phase L0: create the two Pages projects per the
   rewritten runbook (`docs/deploy-cloudflare-pages.md`; both repos, Node 22, ~20 min). Claude post-checks
   (`/url-freshness-check` on live URLs, island hydration) immediately after.
2. **Then L1** (custom domain + the `/ai-engineering/*` Worker proxy — Claude writes it, user deploys the route) **and
   L2** (OG metadata, guide-repo CI, analytics token). Note for L2's WIP-labeling decision: guide-3 Ch 0 is live on
   the landing picker labeled "in progress — chapter 0 of ~13" (the building-in-the-open option, de facto).
3. **Post-launch**: guide-3 Ch 1+ authoring (outline at `~/guides-ai-engineering/docs/guide-03-production-ai-systems.md`);
   revisit the craft-capstone open decision (§3); the dossier display-vs-evidence repair pass that unblocks the
   research-lint v2.6.0 pin bump (§7).
