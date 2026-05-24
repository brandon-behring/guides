# Phase D depth-expansion wrap-up

**Date completed:** 2026-05-24
**Plan reference:** `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (Phase D — depth round 2) + session plan `~/.claude/plans/here-is-the-handoff-composed-hollerith.md`
**Scope:** Depth-expand + agent-index all 4 thin Phase D pedagogy dossiers (handoff §4 item (c))
**Session duration:** ~1 focused session

## TL;DR

The 4 Phase D dossiers were flagged in the 2026-05-24 handoff as below first-pass density (1, 3, 3, 4 entries). This session depth-expanded all four via parallel discovery agents → `cache_source.py --escalate-on-failure` caching → v2.2 strict-live artifact rebuild → `/agent-index` Attribute-First indexing. Result: **177 total entries** across the four dossiers (up from 11), each now with a validated `agent_index/`. A new `consumer:guides` research_toolkit issue (#18) was filed for the `--escalate-on-failure` wrapper gap.

## What completed (acceptance gates)

| Dossier | Start | End | agent_index/ | All validators | Backs |
|---|---|---|---|---|---|
| `capstone_portfolio_assessment` | 1 | **48** | ✅ 6 sub-area files + overview + README | green (bib/evidence/gather/cross_stage/agent_index/pre_selection) | design v0.3 §2.4 (capstone artifact contract) |
| `multi_paradigm_presentation` | 3 | **49** | ✅ | green | design v0.3 §2.2 (presentation modes / UDL) |
| `llm_as_coach_interfaces` | 3 | **38** | ✅ | green | design v0.3 §2.3 (LLM-as-coach) |
| `transfer_evaluation_methods` | 4 | **42** | ✅ | green | "Path D transfer" commitment |

All four: `evidence coverage = N/N claims`, `cache completeness = N/N sources`, `0 stale blockers`, `atoms fully supported ≥ 98%`. Every entry defaults to `status: unverified` (promotion via /dossier-audit, deferred).

## Method (per dossier)

1. **Discovery**: 3 parallel `general-purpose` agents, each owning 2 sub-areas, returning structured candidate YAML (bibkey / canonical URL / title / authors / venue / claim_family / sub_area / evidence_excerpt / freshness_tier). Each capped at ~25-30 tool calls per the toolkit's `agent_discipline.md`.
2. **Merge** (`/tmp/merge_candidates.py`): for each candidate, ran `cache_source.py --topic <slug> --escalate-on-failure`, parsed the manifest entry, and appended fully-populated v2 strict-live entries to `bib_ledger.yml` + `evidence_ledger.yml` (schema 3, `extraction_method: paraphrase`, `link_confidence: 0.75`) + `gather_trace.yml` (Self-RAG accept records) + `cache_manifest.yml`.
3. **Validate + rebuild**: per-stage validators → `build_claim_graph.py` → `build_dashboard.py` → `cross_stage.py`.
4. **Index** (`/tmp/build_agent_index.py`): Attribute-First — emitted `pre_selection_manifest.yml` (2 atoms per cached entry: identifies + mechanism, with byte-offset spans + sha256) BEFORE rendering, then 5-bullet entries grouped by sub-area, 00_overview, and a scope-boundary README with lookup recipes.

## Friction encountered

### 1. `--escalate-on-failure` not threaded through `/research-gather` → filed research_toolkit #18
The handoff assumed `/research-gather --escalate-on-failure` would work after #9 closed. Verification against HEAD `4d5b420` (v2.4.0+3) showed the flag lives only on `scripts/cache_source.py`; the `/research-gather` skill signature is `<plan_path> [--cache-pdfs] [--output-dir]`. **Consumer workaround used this session:** drove `cache_source.py --escalate-on-failure` directly per-URL from the merge script (so escalation was applied to every fetch, not just stubs). Filed as **research_toolkit #18** (`enhancement, consumer:guides, P2`) requesting a pass-through flag (or escalate-by-default) on the wrapper.

### 2. Stale memory — all prior consumer:guides issues are closed
Session-state memory said research_toolkit #10 + #11 were open. In fact all 5 prior `consumer:guides` issues (#2, #9, #10, #11, #12) are **closed** (closed 2026-05-23, commit `e5d542f`). Consequence: PDF text extraction and JS-shell stub detection are now native in `cache_source.py`, so the `backfill_pdf_cache_text.py` workaround is effectively a no-op for fresh gathers (kept in tree; still useful for legacy raw_only caches). Memory updated this session.

### 3. Dead/404 source URLs requiring substitution (5 total)
Agents occasionally proposed URLs that 404'd or had expired SSL. Substituted canonical alternatives + re-cached:
- `batson2017fieldguide`: AAC&U 404 → `aaeebl.org/2021/11/06/field-guide-to-eportfolio/`
- `bryant2013eportfolioeffectiveness`: theijep.com expired SSL cert → `eric.ed.gov/?id=EJ1107810`
- `rhodes2014valuerubrics`: AAC&U 404 → Campus Compact mirror
- `meyer2014universal`: CAST resource 404 → CAST books-media canonical page
- (darling2000authentic: DOI cached fine but bare-parens URL failed the validator — URL-encoded the parens to `%28%29`)

### 4. Five candidates dropped for unverifiable provenance (llm_as_coach)
The fast-moving 2025-2026 LLM literature produced candidates the discovery agents explicitly flagged as not-individually-fetched (uncertain arXiv IDs) or with unknown first authors (placeholder bibkeys). Dropped `zheng2025socraticai`, `anon2026interactivescaffolding`, `deroock2026chatgptmeta35`, `barke2023copilotbrownfield`, `passi2024overreliance` rather than risk citing a hallucinated arXiv ID. The 35 retained candidates all cached cleanly (0 failures).

### 5. freshness_tier enum + stale_after_days caps
`mature`/`current` (agent terms) are not in the schema enum `[active, historical, stable, volatile]`; remapped `mature→stable`, `current→active`. Strict-live caps `stale_after_days` per tier (volatile 30, active 90, stable 365, historical 1825); the merge script's default needed correction for volatile entries. All capped before final validation.

## Toolkit findings filed upstream

- **research_toolkit #18** (NEW) — expose `--escalate-on-failure` on `/research-gather`. Cross-references closed #9/#10/#11.
- All 5 prior `consumer:guides` issues (#2, #9, #10, #11, #12) remain closed.

## Open follow-ups

1. **Dossier-audit pass** on all 4 — every entry is still `status: unverified`. A `/dossier-audit` round would WebFetch-confirm title/first-author/year and promote to `verified`. ~1 session.
2. **Attribute-First depth** — `pre_selection_manifest` uses `paraphrase` spans (link_confidence ≤ 0.85); no `verbatim_match` anchors yet (verbatim-anchored = 0% across all four). Promote selected load-bearing claims to `verbatim_match` when chapters cite them.
3. **Depth vs ~60-100-entry plan targets** — these are first-pass densities (38-49); the research_plan targets are higher. Further gather rounds (especially A6 of transfer, deliberately kept thin to avoid duplicating the capstone dossier) can expand.
4. **Downstream authoring hooks** — design v0.3 §2.2/§2.3/§2.4 now have citation backing. Chapter authoring (e.g., ch 4 productive-failure framing) can cite `multi_paradigm_presentation` A5 (Kapur, Schwartz) and `transfer_evaluation_methods` A3 directly.

## Trust dashboard summary

| Dossier | Evidence coverage | Cache completeness | Verbatim-anchored | Atoms fully supported |
|---|---|---|---|---|
| capstone | 48/48 | 48/48 | 0% | 100% |
| multi_paradigm | 49/49 | 49/49 | 0% | 98% |
| llm_as_coach | 38/38 | 38/38 | 0% | (partially grounded 38/38) |
| transfer | 42/42 | 42/42 | 0% | 100% |

0 stale blockers across all four. Verbatim-anchored 0% is expected for a paraphrase-based depth-expansion round (see follow-up #2).

## Handoff hook

Phase D depth round 2 is **complete**. Next session candidates (per session_state top-3 / handoff §4):
- **(a) Phase 1 ch 2 authoring** (randomization + AA tests) — still the most natural next unit.
- **(a*) ch 4 hypothesis testing** — now has stronger transfer/productive-failure citation backing from this session's dossiers.
- **dossier-audit** on the 4 new dossiers (promote unverified → verified).

## Commits in this phase

- `~/guides`: 4 dossier directories (bib_ledger / cache_manifest / evidence_ledger / gather_trace / claim_graph / dashboard modified; agent_index/ added) + this wrap-up doc. See session-close commit(s).
