# Research workstream v2 — depth-expand, cache primaries, migrate

## Context

The guides project has 5 first-pass pedagogy dossiers in `~/interview_prep_series/docs/research/` (116 entries total) that informed design doc v0.2 and `/methodology` v0.1. They are **v1-era**: no primary-doc cache, no `evidence_ledger.yml`, no `cache_manifest.yml`, all entries `status: unverified`, and 30–50% of the original depth target (200–300/topic).

The `research_toolkit` shipped v2.2.1 on 2026-05-20. **v2.2+ strict-live mode** caches primary documents to `~/Claude/research_cache/`, writes evidence/manifest artifacts, and enforces Attribute-First span-anchoring in agent indexes. Upgrading v1 → v2.2+ is not automatic (it requires re-running `/research-gather` with WebFetch live-verification of every entry), but the toolkit ships one prior migration case study.

**Goal this round**: bring all guide-relevant dossiers up to v2.2+ strict-live with cached primaries, depth-expanded toward target, audit-promoted past `unverified`, and relocated into the new `~/guides/` repo so they are owned where they are consumed.

## Scope — 11 dossiers (initial), growing over time

**5 existing (migrate + cache + depth-expand + audit):**
1. `technical_book_design` (32 → ~200 target)
2. `learning_pedagogy` (17 → ~200) — **migration-path pilot**
3. `interview_prep_pedagogy` (19 → ~200)
4. `documentation_methodology` (22 → ~200)
5. `ai_assisted_authoring` (26 → ~200)

**4 new pedagogy (fresh v2.2+ from scratch):**
6. `multi_paradigm_presentation` — UDL + Dim 7 paradigms field
7. `llm_as_coach_interfaces` — LLM-tutor UX patterns
8. `capstone_portfolio_assessment` — portfolio assessment + Phase 1.5 capstone basis
9. `transfer_evaluation_methods` — measuring transfer (vs retention) for interview-prep guides

**2 new pilot-content sub-dossiers (lives in guide repo, not hub):**
10. `experimentation_foundations` — Causal-statistical core: hypothesis testing, MDE/power/alpha, p-values, t/z tests, variance reduction (CUPED), stratification. Roughly chapters 1–8 of the pilot guide. **Fresh-content pilot for the v2.2+ workflow** — Phase A.
11. `experimentation_advanced` — Operational + advanced: sequential testing (mSPRT, alpha spending), network effects / interference (SUTVA violations), ramping, AA tests, multi-armed bandits. Roughly chapters 9–16. Phase A.2.

Both live under `~/guides-experimentation/docs/research/`. Initial scope is breadth-then-depth: 2 sub-dossiers cover the 16-chapter span at first-pass depth; more sub-dossiers OR deeper entry counts in existing ones get added as authoring reveals where deeper grounding is needed. (E.g., if CUPED authoring exposes a need for variance-reduction-specific depth, spin out `experimentation_variance_reduction` as a 3rd sub-dossier later — outside this plan's scope.)

The 2-dossier initial split is a reasonable starting partition; `/research-plan` for each will validate or refine the chapter-cluster boundary.

### Dossier-location pattern (established this round)

- **Pedagogy + methodology dossiers** (cross-cutting, shared across many future guides): `~/guides/docs/research/<topic>/` in the hub. The 5 migrated + 4 new = 9 dossiers go here.
- **Content dossiers** (specific to one guide's subject matter): `~/<guide-repo>/docs/research/<sub-topic>/`. `experimentation_foundations` + `experimentation_advanced` (initial 2) live in the pilot repo. Each future guide repo (`guides-mle`, `guides-prompt-injection`, etc.) owns its content research, and may chunk into multiple sub-dossiers along chapter clusters.
- Both flavors run the same v2.2+ pipeline; only the parent dir differs.

## Scaffold awareness + upstream-issue policy

`@brandon_m_behring/book-scaffold-astro` is **live infrastructure under active development**, not a frozen dependency. The research workstream needs to be aware of what's shipping and where to push findings.

**Current state (as of 2026-05-22):**
- Installed in both `~/guides/` and `~/guides-experimentation/`: **v3.5.0**
- Latest released: **v3.5.1** (2026-05-19) — patch release; demo build hygiene only, no consumer-facing functional changes. Safe to bump but non-blocking.
- 5 open issues filed since v3.5.0; 2 are directly load-bearing for this project:
  - **#15 multibook** — first-class corpus routing + schema support. The v0.2 design doc currently uses a multi-content-collection workaround for the multi-guide pattern. If #15 lands, that pattern gets replaced. Likely shapes how `technical_book_design` + `documentation_methodology` dossiers cite scaffold patterns.
  - **#16 AnkiCard component + extract-cards CLI** — v0.2 commits to inline MDX `<Card>` + `.apkg` export from single source. This is the scaffold work that unblocks it. Likely shapes `learning_pedagogy` (spaced-rep evidence) + `interview_prep_pedagogy` (cards-as-rehearsal) findings.
  - #17 TikZ → SVG (figure handling), #35 chapters rendering refactor v3.7+, #36 visual regression baseline — scaffold-internal, less direct impact.

**Deferred dogfooding findings (Phase 0b Part 4) — file now, before research starts:**
The Phase 0b wrap-up doc enumerated 6 findings to file as scaffold issues with label `consumer:guides`. None were filed. Address before Phase A so any style/structural decisions during research go upstream cleanly:
1. `create-book@3.5.x` CLI hardcodes 3 of 5 profiles (rejects `research-portfolio` + `course-notes`)
2. `book-scaffold validate` ignores `.env` auto-load (drift from `defineBookConfig` resolution)
3. Component prop API docs needed (`PreReleaseBanner state=` not `status=`; `AICollaborationDisclosure model/role/commit_attribution`)
4. Frontmatter route prefix `/frontmatter/<slug>/` vs design doc's `/<slug>/` root
5. `create-book` bootstraps Workers-style `wrangler.toml`; research-portfolio consumers want Pages
6. MDX vs `\mathbb{E}{X}` math notation breaks under braces in research-portfolio (academic preset works)

**Durable policy — for the rest of this round and beyond:**
> Any finding about presentation, components, schemas, build tooling, or layout patterns that surfaces during research or design work goes upstream to `brandon-behring/book-scaffold-astro` as a labelled issue (`consumer:guides`). Do **not** patch around scaffold issues locally in `~/guides/` or `~/guides-experimentation/` — local workarounds drift and obscure the consumer-driven feedback loop that's the toolkit's stated evolution mechanism (see scaffold `recipes/12-where-to-file-issues.md`).

Pedagogy + content decisions remain guide-local (design doc / methodology / research). Style + scaffold issues go upstream.

## Location decisions

Per the v0.2 design doc, the dossiers were "private during pilot in current LaTeX repo; **may migrate to new guides repo when mature**." The v2.2+ upgrade is the maturity trigger.

**Pedagogy dossiers (9 total)** — destination `~/guides/docs/research/`:
- 5 migrated: `technical_book_design`, `learning_pedagogy`, `interview_prep_pedagogy`, `documentation_methodology`, `ai_assisted_authoring`
- 4 new: `multi_paradigm_presentation`, `llm_as_coach_interfaces`, `capstone_portfolio_assessment`, `transfer_evaluation_methods`

**Content sub-dossiers (2 initial)** — destination `~/guides-experimentation/docs/research/`:
- `experimentation_foundations` (new, Phase A)
- `experimentation_advanced` (new, Phase A.2)

**Migration cadence**: per-dossier, just-in-time. Move `learning_pedagogy` only when Phase B starts; move each of the remaining 4 only when its Phase C slot starts. `interview_prep_series/docs/research/` will be in a partial-migration state for several sessions — accepted trade-off for unambiguous single-location ownership of each dir at any given time. (Other-volume dossiers vol25–29 stay in `interview_prep_series` permanently — they're not in the guides scope.)

**Per-dossier cross-reference updates** (run at the same time as each move):
- `~/interview_prep_series/docs/plans/active/2026-05-19_public_guides_repo_roadmap.md` §13 — change dossier path references
- `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md` — change dossier path references
- `~/interview_prep_series/docs/plans/active/2026-05-19_research_phase_handoff.md` — mark dossier rows "migrated to ~/guides/docs/research/<topic>/"
- `~/.claude/projects/-Users-brandonbehring-interview-prep-series/memory/` — update any memory files referencing dossier paths
- Append "Migrated <date>" note to the moved dossier's `README.md` (or write one if absent) so the lineage is recorded at the new location too

## Canonical per-dossier pipeline (v2.2+ strict-live)

Reference: `~/Claude/research_toolkit/references/strict_live_v2.md` + `~/Claude/research_toolkit/BURN_IN_NOTES.md` § "Phase 1: toolkit_design migration".

| Step | Skill | Output | Notes |
|---|---|---|---|
| 1 | `/research-plan` | `research_plan.md` | Existing 5: reuse current plan. New 5: write fresh. |
| 2 | `/research-gather` (v2.2+) | `bib_ledger.yml` + `evidence_ledger.yml` + `cache_manifest.yml` + `claim_graph.jsonl` + `gather_trace.yml` | Existing 5: re-run on existing plan, WebFetch-verifies all 116 entries + appends toward depth target. New 5: full gather from scratch. Primary docs cache to `~/Claude/research_cache/` via `scripts/cache_source.py` (urllib → Playwright escalation). |
| 3 | `/dossier-build` | `dossier/*.md` | **Optional in v2.2+** but useful as human-editable pivot. Run for the 5 migrated dossiers (preserve continuity); skip for the 5 new ones. |
| 4 | `/agent-index` (Attribute-First Phase 2) | `agent-index/` folder + `pre_selection_manifest.yml` | Reads `cache_manifest.yml` text_paths for span selection. Phase 2a span-select → 2b plan manifest → 2c generate prose conditioned on selections. |
| 5 | `/dossier-audit` | inline edits + `evidence_ledger.yml` updates + `claim_graph.jsonl` updates | One round per dossier. Will promote `unverified` → verified/dropped/flagged. Expect ~10–20% DROP rate on v1-era entries (dead URLs, can't reproduce claim). |
| 6 | `/freshness-audit` | `dashboard.md` | Refresh stale entries, validate hashes, emit dashboard. |
| 7 | `/research-kb-export` | JSONL inbox file | Emit for `~/Claude/research-kb` ingestion. |

## Sequencing — two pilots (one per pipeline path), then scale

The v2.2+ work has **two distinct paths** that each warrant a validating pilot:
- **Fresh-content path** — new dossier from scratch, no v1 baggage. Used for the 5 new dossiers (4 pedagogy + 1 PoC content).
- **v1 → v2.2+ migration path** — re-running `/research-gather` on an existing populated `bib_ledger.yml`. Used for the 5 existing dossiers.

Each path has different failure modes (toolkit BURN_IN_NOTES only has one prior migration case study), so each gets its own pilot run before scaling.

**Phase 0b.push: Hard prerequisite (GitHub only; Cloudflare deferred)**
Before Phase A.0 starts, the hub and pilot must be pushed to GitHub:
- `cd ~/guides && gh repo create brandon-behring/guides --public --source=. --remote=origin --push`
- `cd ~/guides-experimentation && gh repo create brandon-behring/guides-experimentation --public --source=. --remote=origin --push`
- Verify CI fires green on both (`gh run list -R brandon-behring/<repo> --limit 3`)

Reason for gating: the dogfooding issues filed in Phase A.0 reference consumer repos by URL; those URLs must exist. Cloudflare deploy (Phase 0b Part 2) remains independent and can happen anytime — `guides.brandon-behring.dev` doesn't gate research work.

**Phase 0b.push.post: Relocate this plan into the hub repo**
Immediately after the push succeeds:
- `mkdir -p ~/guides/docs/plans/active/`
- Copy `~/.claude/plans/tranquil-greeting-turtle.md` → `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (rename to date-prefixed convention matching `interview_prep_series/docs/plans/active/` lineage).
- Commit + push to `brandon-behring/guides`.
- This in-repo file becomes the canonical plan; the `~/.claude/plans/` original is ephemeral.
- Update `~/interview_prep_series/docs/plans/active/2026-05-19_research_phase_handoff.md` with a new row pointing at the in-repo plan path.

**Phase A.0: Pre-flight (scaffold housekeeping, ~1 session)**
Before the first dossier run, close the upstream loop so subsequent findings have a clean channel:
- Re-verify the 6 deferred Phase 0b dogfooding findings are still applicable against v3.5.1 (some may have been silently fixed). Drop any that no longer reproduce.
- File the remaining findings as scaffold issues on `brandon-behring/book-scaffold-astro` with label `consumer:guides`. Use the filing template in `~/interview_prep_series/docs/plans/active/2026-05-20_phase_0b_wrap_up.md` Part 4. Reference the now-existing `brandon-behring/guides` + `brandon-behring/guides-experimentation` repos for consumer-side reproduction.
- Bump `~/guides/` + `~/guides-experimentation/` from `^3.5.0` → `^3.5.1` (`npm install @brandon_m_behring/book-scaffold-astro@^3.5.1`); run `npm run build` in each to confirm no regression. Cosmetic but aligns lock-step with `create-book@3.5.1`.
- Skim scaffold issues #15 (multibook) + #16 (AnkiCard) + #17 (TikZ→SVG) to know what's in flight; note any that would shape research-plan questions in affected dossiers.

**Phase A: Fresh-content pilot — `experimentation_foundations`**
- Create `~/guides-experimentation/docs/research/experimentation_foundations/` from scratch (note: pilot repo, not hub — per dossier-location pattern).
- Run full pipeline steps 1–7 (research-plan → gather → optional dossier-build → agent-index → audit → freshness-audit → kb-export). `/research-plan` will validate or refine the chapter-cluster boundary (chs 1–8 vs different cut).
- Capture friction in `~/Claude/research_toolkit/BURN_IN_NOTES.md`.
- Capture any scaffold/style findings as upstream issues (per durable policy).
- Validates the fresh-content path on a content (not pedagogy) dossier.
- **Side effect**: half of the content research that unblocks Phase 1 pilot guide authoring.

**Phase A.2: Second content sub-dossier — `experimentation_advanced`**
Run immediately after Phase A while the fresh-content pipeline is still fresh in mind (avoid context-switching cost back to migration). Same pattern, same destination dir:
- Create `~/guides-experimentation/docs/research/experimentation_advanced/`.
- Run full pipeline steps 1–7.
- After both content dossiers are at v2.2+ verified, Phase 1 pilot guide authoring is unblocked (does not have to wait for Phases B–E).

**Phase B: Migration-path pilot — `learning_pedagogy`**
- Move `~/interview_prep_series/docs/research/learning_pedagogy/` → `~/guides/docs/research/learning_pedagogy/` (just-in-time, only this one — other 4 stay in interview_prep_series until their Phase C slot).
- Update cross-references in the 3 plan docs + memory files for this one dossier path only.
- Run full pipeline steps 1–7.
- Capture friction (compare to toolkit_design migration case study from BURN_IN_NOTES).
- Decide go/no-go on remaining 4 migrations.

**Phase C: Remaining 4 migrations**
Sequence by load-bearing weight on v0.2 design doc: `interview_prep_pedagogy` → `technical_book_design` → `documentation_methodology` → `ai_assisted_authoring`. Same pipeline per dossier; each move happens just-in-time at the start of its slot (not bulk-moved up-front). Each move-then-upgrade is independent — could parallelize via worktrees later if wall-clock pressure emerges.

**Phase D.0: Up-front research-plan drafting for all 4 new pedagogy dossiers (1 session)**
Before any new-pedagogy gather runs, draft all 4 `research_plan.md` files as a batch. This surfaces topic overlaps + duplicated claim-families + scope-creep early, and locks the taxonomy before depth-gathering 4 separate dossiers.
- Create `~/guides/docs/research/{transfer_evaluation_methods,multi_paradigm_presentation,capstone_portfolio_assessment,llm_as_coach_interfaces}/` (skeleton).
- Run `/research-plan` for each (4 invocations). Output: 4 `research_plan.md` files.
- Cross-check claim-families across the 4 plans — e.g., `transfer_evaluation_methods` and `capstone_portfolio_assessment` may both want to cover "authentic assessment"; decide which owns it.
- Reconcile + commit. Phase D's gather steps now run against locked plans.

**Phase D: Remaining 4 new pedagogy dossiers (gather + index + audit)**
Sequence by load-bearing weight on outstanding design-doc commitments: `transfer_evaluation_methods` (Path D backing) → `multi_paradigm_presentation` (Dim 7) → `capstone_portfolio_assessment` (Phase 1.5) → `llm_as_coach_interfaces` (least-mature literature; smallest expected entry count). Each runs pipeline steps 2–7 (research-plan is already done in D.0).

**Phase E: Design doc v0.3 + methodology v0.2**
Once all 10 dossiers are at v2.2+ verified, fold new findings into the canonical design doc — and migrate the design-doc lineage into the guides repo at the same time:
- Create `~/guides/docs/design/` (new directory in hub).
- Draft `~/guides/docs/design/2026-XX-XX_design_v0.3.md` — **first design doc native to the guides repo**, closing the lineage migration.
- Update `~/guides/src/content/frontmatter/methodology.mdx` (v0.1 → v0.2) with new pedagogy citations and any commitments that changed.
- Cross-check v0.2 → v0.3 deltas against the 4 new dossiers; each new dossier should yield ≥1 decision update or explicit "no change, reaffirmed" note.
- Archive v0.2 in `~/interview_prep_series/docs/plans/active/` (mark superseded; add pointer to v0.3 location). Same pattern v0.1 → v0.2 followed.
- Update memory entries to reference v0.3 as canonical going forward.

## Per-phase wrap-up discipline

Every phase ends with a short wrap-up doc (~1–2 pages) at `~/guides/docs/plans/done/<date>_phase_<id>_<slug>_wrap_up.md`. Pattern matches the existing `~/interview_prep_series/docs/plans/active/2026-05-20_phase_0b_wrap_up.md`. Contents:
- What completed (acceptance-gate checklist)
- Friction encountered + workarounds (also added to `BURN_IN_NOTES.md` for toolkit feedback)
- Scaffold/style findings filed upstream (issue IDs)
- Open follow-ups (deferred to a later phase or to a "future-self note")
- Handoff hook: how to resume if interrupted

Phases that get wrap-ups: 0b.push, A.0, A, A.2, B, C (one per migrated dossier — 4 docs), D.0, D (one per new dossier — 4 docs), E. Total: ~13 wrap-up docs across the project. Each is fast (~10 min) and pays off in future-session resumability.

## Critical files / dirs

**Sources to read before executing:**
- `~/Claude/research_toolkit/references/strict_live_v2.md` (v2.2 protocol)
- `~/Claude/research_toolkit/references/workflow_overview.md` (stage diagram)
- `~/Claude/research_toolkit/references/dual_audience_design.md` (required pre-`/agent-index` read)
- `~/Claude/research_toolkit/BURN_IN_NOTES.md` § Phase 1 (only prior migration case study)
- `~/Claude/research_toolkit/scripts/cache_source.py` (cache mechanism)

**Skills to invoke (in pipeline order):**
- `/research-plan`, `/research-gather`, `/dossier-build`, `/agent-index`, `/dossier-audit`, `/freshness-audit`, `/research-kb-export`

**Existing dossier dirs (sources to migrate, per-dossier just-in-time):**
- `~/interview_prep_series/docs/research/{technical_book_design,learning_pedagogy,interview_prep_pedagogy,documentation_methodology,ai_assisted_authoring}/`

**Destinations:**
- Pedagogy (9 dossiers): `~/guides/docs/research/<topic>/` (create parent dir; one subdir per dossier)
- Content (1 dossier, `experimentation_content`): `~/guides-experimentation/docs/research/<topic>/`

**Design doc destination (Phase E):**
- `~/guides/docs/design/` (new dir in hub; first design doc native to guides repo)

**Cache location (already exists, gitignored, local-only):**
- `~/Claude/research_cache/`

## Verification

**Per-dossier acceptance gates:**
- [ ] Directory under correct destination (`~/guides/docs/research/<topic>/` for pedagogy; `~/guides-experimentation/docs/research/<topic>/` for `experimentation_content`) exists with `bib_ledger.yml`, `evidence_ledger.yml`, `cache_manifest.yml`, `claim_graph.jsonl`, `gather_trace.yml`, `pre_selection_manifest.yml`, `dashboard.md`
- [ ] `agent-index/` folder rendered with 5-bullet entries
- [ ] Every `bib_ledger.yml` entry has non-empty `cache_ids: [...]` (or explicit `unreachable: true` annotation)
- [ ] Every primary cached in `~/Claude/research_cache/` is referenced by SHA-256 in `cache_manifest.yml`
- [ ] No `status: unverified` entries remain (audit promotes them)
- [ ] `/freshness-audit` dashboard shows 0 broken URLs
- [ ] Entry count reaches ≥150 (existing dossiers) or ≥100 (new dossiers) — depth-expansion not necessarily 200-300 target on first pass
- [ ] For migrated dossiers: original location in `interview_prep_series` no longer exists; cross-refs in plan docs + memory updated for this dossier path

**Cross-cutting acceptance gates:**
- [ ] `~/guides/` repo builds clean after `docs/research/` added (no Astro errors from new dir)
- [ ] Add `docs/research/` to `~/guides/.gitignore` for `cache_manifest.yml`'s cache_ids' raw blobs (cache itself lives outside the repo; manifests are committed)
- [ ] Design doc v0.2 + roadmap + handoff doc updated with new dossier paths
- [ ] Memory entries updated: `project_public_guides_repo.md` reflects v2.2+ migration; new `reference_research_toolkit_v2.md` documents the v2.2+ pipeline as it ran here
- [ ] Phase 0b wrap-up doc still accurate (or amended if the location migration creates dependencies)

**Scaffold pre-flight acceptance gates (Phase A.0):**
- [ ] All 6 deferred dogfooding findings filed as issues on `brandon-behring/book-scaffold-astro` with label `consumer:guides`
- [ ] `~/guides/` + `~/guides-experimentation/` both on `^3.5.1`; `npm run build` exits 0 in each
- [ ] Skim of scaffold issues #15 + #16 documented in `project_public_guides_repo.md` memory (what they unlock, expected timing)

**End-to-end sanity test:**
- [ ] Pick one atomic claim from `experimentation_foundations` agent-index, follow the `evidence_id` → `cache_manifest.yml` → cached PDF → verify the claim's span exists in the cached text
- [ ] Pick one bullet from `learning_pedagogy` agent-index, confirm the design doc v0.2 cites it (or it cites something equivalent), confirm the cited evidence anchors verify
- [ ] After Phase E: open `~/guides/docs/design/<v0.3 file>.md` and verify it cites at least one bullet from each of the 4 new pedagogy dossiers

## Effort & risk

**Wall-clock estimate**:
- Phase 0b.push (GitHub push + plan relocation): 0.5–1 session
- Phase A.0 (scaffold pre-flight): 1 session
- Phase A (fresh-content pilot, `experimentation_foundations`): 2–3 sessions
- Phase A.2 (`experimentation_advanced`): 2 sessions (pattern established by A)
- Phase B (migration pilot, `learning_pedagogy`): 2–3 sessions
- Phase C (4 remaining migrations): ~1–2 sessions each = 4–8 sessions
- Phase D.0 (up-front research-plans for 4 new dossiers): 1 session
- Phase D (4 remaining new dossiers, gather + index + audit): ~1–2 sessions each = 4–8 sessions
- Phase E (design doc v0.3 + methodology v0.2): 1–2 sessions
- Per-phase wrap-up docs: included in each phase's session budget (~10 min each)
- **Total: ~17.5–29 sessions** spread over weeks; not a single-sitting job.
- Phase 1 pilot guide authoring unblocked after Phase A.2 (does not wait for B–E).

**Known frictions (from toolkit BURN_IN_NOTES):**
- v1 → v2.2+ migration is labor-intensive: per-source WebFetch re-verification required, no shortcut.
- Some URLs from the existing 116 will be dead; freshness check first, accept some attrition.
- Playwright escalation needed for sites returning 403/429 (toolkit handles automatically since v2.2.1).
- `/dossier-audit` will likely DROP 10–20% of entries — sources that don't survive verification. This is a feature, not a bug.

**Migration risk**: Moving dossiers out of `interview_prep_series/docs/research/` creates dangling references in that repo's design docs. Mitigated by updating the 3 referenced plan files + memory files in the same change.

**Scope-creep risk**: The 5 new dossiers (especially `llm_as_coach_interfaces`) have less mature literature. May yield <100 entries even with aggressive gather. Accept lower density for these; the existing 5 are the load-bearing ones.

## Out of scope

- Cloudflare Pages setup + DNS (Phase 0b Part 2). Independent of research workstream; `guides.brandon-behring.dev` does not need to resolve before research starts. Can happen anytime in parallel.
- Phase 1 pilot guide authoring. Unblocked after Phase A.2 completes (both `experimentation_*` content sub-dossiers at v2.2+ verified). May proceed in parallel with Phases B–E.
- Reaching the original 200–300 entry/topic target. First pass aims for ≥150 (migrated) and ≥100 (new); further depth can come from subsequent gather rounds.
- Spinning out additional content sub-dossiers (`experimentation_variance_reduction`, `experimentation_interference`, etc.). Triggered by authoring need, not this plan.
- Migrating other-volume dossiers (vol25/26/27/28/29) — not in the guides scope right now. They stay in `interview_prep_series/docs/research/`.
- Parallelization via worktrees. Plan is sequential; revisit if Phase C/D wall-clock becomes a constraint.
- Bulk-move of all 5 existing dossiers up-front. Per-dossier just-in-time move was chosen for unambiguous ownership during transition.
