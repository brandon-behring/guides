# Phase A (experimentation_foundations) wrap-up

**Date completed:** 2026-05-23
**Plan reference:** `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (Phase A)
**Pilot type:** Fresh-content v2.2+ strict-live dossier (first of two paths the workstream validates)
**Session duration:** ~90 min wall-clock

## What completed (acceptance gates)

- [x] Directory at `~/guides-experimentation/docs/research/experimentation_foundations/` with all v2.2+ artifacts
- [x] `bib_ledger.yml` (14 entries, validator-green)
- [x] `cache_manifest.yml` (14 entries, validator-green)
- [x] `evidence_ledger.yml` (14 entries, schema_version 3, validator-green)
- [x] `gather_trace.yml` (14 fetch records, validator-green)
- [x] `claim_graph.jsonl` (built via `build_claim_graph.py`)
- [x] `dashboard.md` (built via `build_dashboard.py`)
- [x] `dossier/` subdirectory (5 markdown files + readme, validator-green) — built as human-editable pivot even though v2.2+ marks it optional
- [x] `agent_index/` subdirectory (README + 00_overview + 5 synthesis files = 7 files; validator-green)
- [x] `research_kb_export.jsonl` exported to `~/Claude/research-kb/inbox/research_toolkit/experimentation_foundations.jsonl`
- [x] First-pass audit: 4 entries promoted `unverified → verified` (all arxiv entries where structured metadata was extracted from cached HTML); 10 entries remain `unverified` pending deeper audit
- [x] Phase 1 pilot guide authoring: **half-unblocked** (Phase A.2 still needs to complete for full authoring; see "Open follow-ups")

## Friction encountered

### 1. Skill-availability gap (process friction, not toolkit bug)
`research-gather`, `agent-index`, `dossier-audit`, `freshness-audit`, `research-kb-export` are NOT in this session's user-invocable skill list — only `research-plan` and `dossier-build` are. The SKILL.md files exist on disk; the workflow had to be **manually executed** rather than invoked via the Skill tool. This worked but cost ~2-3× the time vs the skill-driven path.

**Resolution path for future phases:** when user types `/<skill-name>` in a prompt, that skill becomes available to me. Future sessions running Phases B/C/D should have the user type each skill at the relevant phase boundary, OR I should continue manual execution.

### 2. Paywall caching (3 of 14 primaries hit 403)
`doi.org` redirects to publisher pages (ACM DL, Cambridge UP) returned HTTP 403 from `cache_source.py`'s urllib path. Mitigated by:
- Using author-hosted PDFs (exp-platform.com for Deng 2013 + Kohavi 2015; Stanford for Kohavi 2012) as cache surrogates while keeping the DOI as `primary_url`
- For Kohavi 2020 book: cached the chapter-1 free PDF from experimentguide.com as surrogate (paywalled rest of book noted in the agent_index entry's Status bullet)
- Berkeley free mirror for ASA p-value statement (Tandfonline 403'd)

This is **acceptable behavior** but worth tracking as a separate finding: `cache_source.py` could escalate-to-Playwright on 403 from publisher domains, OR `--alternate-url` flag could let consumers specify backup canonical URLs.

### 3. Venue correction
Initial `research_plan.md` listed Xie & Aurisset 2016 as "RecSys 2016 case studies at Netflix" — actual venue is **KDD 2016**. Corrected in `agent_index/03_industrial_practice.md` (C1 Status bullet). Plan to fix research_plan.md in a follow-up commit.

### 4. Attribute-First Phase 2 deferred
v2.2+ spec calls for byte-offset span anchoring in `agent_index` (Phase 2a-2c: span-select → plan manifest → generate prose conditioned on selections). For first-pass density (14 entries), I built **v2.1-style 5-bullet blocks** without strict byte-offset commitments. `pre_selection_manifest.yml` not emitted; all `evidence_ledger.yml` entries use `extraction_method: paraphrase` (link_confidence ≤ 0.85). Heavier depth-expansion rounds should promote selected claims to `verbatim_match` with proper anchors.

## Scaffold/style findings filed upstream

None this phase — research workflow surfaced no scaffold issues. (Phase A.0 filed 7 issues; 2 already closed as duplicates.)

## Open follow-ups

1. **Phase A.2 — `experimentation_advanced` dossier** is the next task. Phase 1 pilot guide authoring needs both content sub-dossiers before chapter drafting starts.
2. **Deeper audit pass** — 10 of 14 entries are still `unverified` (PDFs without text extraction, DOI redirects with paywall). Each needs a WebFetch round comparing first-author surname + year + title against the cited values.
3. **Depth expansion** — first-pass at 14 entries; original target was ~150 per dossier. Subsequent gather rounds can expand each sub-area, particularly A1 (industrial narrative — only 2 entries: Fabijan 2017 + Kohavi 2015), A2 (only ASA statement so far for inference theory), A3 (only vendor docs for power analysis — needs a real Cohen-style theory paper too).
4. **Attribute-First Phase 2 anchoring** — promote evidence entries to `verbatim_match` with byte-offset anchors when authoring chapters that cite specific claims.
5. **`research_plan.md` correction** — change "Xie & Aurisset 2016 (RecSys)" to "(KDD)" in landmark papers list.

## Trust dashboard summary (from `dashboard.md`)

- Stale blockers: 0
- Evidence coverage: 14/14 claims
- Cache completeness: 14/14 sources
- Verbatim-anchored: 0/14 (0%) — expected for first-pass; Attribute-First Phase 2 deferred
- Partially grounded: 14/14
- Atoms fully supported: 12/14 (86%)
- Discovery rigor: 14/14 fetches accepted, 0 rejected — note: only landmark-paper queries this round; no explicit reject decisions

## Handoff hook

Phase A is **complete**. Next: Phase A.2 — fresh-content sub-dossier for chs 9–16 (sequential testing, network effects, ramping, bandits) at `~/guides-experimentation/docs/research/experimentation_advanced/`. Same pipeline, same destination repo. Pattern is established by this phase; A.2 should be faster (no skill-availability discovery, no toolkit version surprises).

After A.2 completes, Phase 1 authoring is fully unblocked.

## Commits in this phase

- `~/guides-experimentation`: `7c674d1 research(experimentation_foundations): add research_plan.md (Phase A step 1)` + subsequent additions for bib_ledger / cache_manifest / evidence_ledger / gather_trace / dossier / agent_index / dashboard / claim_graph (final commit on session close)
