# Phase A.2 (experimentation_advanced) wrap-up

**Date completed:** 2026-05-23
**Plan reference:** `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (Phase A.2)
**Session duration:** ~45 min wall-clock (faster than Phase A — workflow established)

## What completed (acceptance gates)

- [x] Directory at `~/guides-experimentation/docs/research/experimentation_advanced/`
- [x] `research_plan.md` — 6 sub-areas, 6 landmark papers (validator-green)
- [x] `bib_ledger.yml` — 11 entries (validator-green); 9 promoted to `verified`, 2 remain `unverified` (PDF caches with `extraction_status: raw_only`)
- [x] `cache_manifest.yml` — 11 entries (validator-green)
- [x] `evidence_ledger.yml` — 11 entries, schema_version 3 (validator-green)
- [x] `gather_trace.yml` — 11 accepts + 2 explicit rejects (validator-green)
- [x] `claim_graph.jsonl` — built
- [x] `dashboard.md` — built
- [x] `agent_index/` — README + 00_overview + 5 synthesis files (validator-green)
- [x] `research_kb_export.jsonl` exported to `~/Claude/research-kb/inbox/research_toolkit/experimentation_advanced.jsonl`
- [x] **Phase 1 pilot guide authoring fully unblocked** (both content sub-dossiers complete: foundations chs 1–8 + advanced chs 9–16)

## Friction encountered

### 1. Two genuine rejects this round (`decision: reject`)
- `careersatdoordash.com/blog/...` returned HTTP 403 from `cache_source.py` urllib path. DoorDash engineering blogs are likely Cloudflare-protected with anti-bot ruleset. Statsig blog used as A5 fallback. Worth a follow-up dogfooding finding: `cache_source.py` could escalate to Playwright on 403 from known-content-rich domains.
- Lan-DeMets 1983 Biometrika paper paywalled — foundational alpha-spending paper but no free preprint located. Tracked as a follow-up; will need either a Biometrika institutional cache OR a free monograph chapter that replicates the derivation.

### 2. ProjectEuclid stub cache
First attempt to cache athey2019generalized via `projecteuclid.org/journals/annals-of-statistics/...` returned a 1152-byte stub (JS-rendered page). Retried via arxiv 1610.01271; cache shape correct. Lesson: prefer arxiv URLs over journal-publisher pages when both are available.

### 3. Initial author miscall
First sub-area search for network interference framework used author names "Saint Jacques & Varshney" (which I'd conflated with Pinterest/Lyft engineering blogs from memory). Actual author of arXiv 1708.08522 is Edward Kao (Harvard PhD dissertation, MIT Lincoln Labs). Caught via WebFetch on the abs page; bibkey corrected to `kao2017causal`.

### 4. Bytes mismatch validator error
cache_manifest validator caught a placeholder I left for athey2019generalized (`bytes: 45000` was a guess; actual was 46217). One-line fix. Reinforces that cache_manifest bytes MUST match filesystem reality; don't placeholder them.

## Scaffold/style findings filed upstream

None this phase.

## Open follow-ups

1. **Phase B** — migration-path pilot (`learning_pedagogy`) is next.
2. **2 entries still `unverified`**: chapelle2011empirical + kohavi2014seven (both PDFs with `extraction_status: raw_only`). A future deeper-audit round should run pdfminer or similar to extract text + promote.
3. **Lan-DeMets 1983** + **DoorDash engineering blog** — 2 rejected fetches worth retrying in subsequent gather rounds (Playwright for DoorDash; institutional access for Biometrika).
4. **HTE depth-expansion** — athey2019generalized is the only HTE entry; if the pilot guide goes deep on uplift modeling (ch 14?), needs more (Künzel et al. meta-learners, Wager-Athey 2018, Xie-Ye-Yu 2024).
5. **Bandit depth** — only 2 entries (li2010 + chapelle2011). Add UCB family (Auer 2002), regret bounds (Lattimore-Szepesvári textbook), industrial bandit deployments (Netflix MAB framework was surfaced but not cached).
6. **Sequential testing depth** — 2 entries; add e-values (Vovk 2021), mSPRT theory (Robbins 1970s), the Pocock and O'Brien-Fleming spending functions.
7. **Bayesian A/B depth** — only 1 entry (gronau2019). Add Kruschke ROPE references, Bayes factor decision rules.
8. **Industrial switchback** — DoorDash blog 403 leaves industrial coverage thin. Statsig fallback is OK but not deeply technical. Try DoorDash via archive.org or Wayback in next round.

## Trust dashboard summary (post-audit)

- Stale blockers: 0
- Evidence coverage: 11/11
- Cache completeness: 11/11
- Verbatim-anchored: 0/11 (Attribute-First Phase 2 deferred)
- Status: 9 verified / 2 unverified (PDF cache `raw_only`)
- Discovery rigor: 11 accept + 2 reject = 13 fetches total in `gather_trace.yml`

## Handoff hook

Phase A.2 is **complete**. Phase 1 pilot guide authoring is now fully unblocked (both content sub-dossiers verified-ish in v2.2+ strict-live state).

Next per workstream plan: Phase B (`learning_pedagogy` migration-path pilot — first dossier moved from `~/interview_prep_series/docs/research/` to `~/guides/docs/research/`).

## Commits in this phase

- `~/guides-experimentation`: single commit covering research_plan + bib_ledger + cache_manifest + evidence_ledger + gather_trace + claim_graph + dashboard + agent_index + final audit promotions (on session close)

---

## Addendum (2026-05-23): Phase A.2-post — file research_toolkit issues + PDF backfill

After Phase A.2 closed, three friction findings from Phase A + Phase A.2 manual `/research-gather` execution warranted upstream filing on `brandon-behring/research_toolkit`. Mirrors Phase A.0's "file scaffold issues before authoring scales" pattern.

**4 issues filed (#9–#12) with `consumer:guides` label:**

| # | Title | Type | Priority |
|---|---|---|---|
| 9 | cache_source.py Playwright escalation on 403 not firing | bug | P2 |
| 10 | cache_source.py undersized HTML stub detection | bug | P3 |
| 11 | Add PDF text extraction (currently raw_only) | enhancement | P2 |
| 12 | consumer:guides reproduction of existing #2 (cache_manifest absolute paths) | bug | P2 |

Also applied `consumer:guides` label to existing #2 for cross-cutting tracking.

**Consumer-side workaround: PDF backfill**

Wrote `~/guides/scripts/backfill_pdf_cache_text.py` (~110 LOC, idempotent) that runs `pdftotext` (poppler-utils, already on PATH) against raw_only PDF caches:

- 17 PDFs extracted total (8 from Phase A + A.2; 9 more from other research sessions in the shared `~/Claude/research_cache/`)
- All 8 project-relevant PDF caches now have `extraction_status: ok`:
  - Phase A foundations (6): Kohavi ch1, Deng 2013 CUPED, Xie 2016 KDD, Kohavi 2012 puzzling, Kohavi 2015 keynote, ASA p-value Berkeley
  - Phase A.2 advanced (2): Chapelle 2011 Thompson sampling, Kohavi 2014 seven rules
- Both `cache_manifest.yml` files updated (`raw_only → ok` via `replace_all=true` since all `raw_only` entries in these files were PDFs to flip)
- Both dashboards + claim_graphs rebuilt

Script is marked **delete-able** once research_toolkit#11 lands upstream (the toolkit will handle PDFs natively).

**Verified-anchored coverage uplift**: With 8 PDF caches now text-extracted, future depth-expansion + dossier-audit rounds can promote PDF-backed evidence from `extraction_method: paraphrase` (link_confidence ≤ 0.85) to `verbatim_match` (link_confidence ≤ 1.0). Phase D + B benefit automatically.

Phase A.2-post wrap-up acceptance gates: all met (4 issues filed + label propagated; backfill script idempotent; 8 caches flipped to `ok`; both cache_manifests + dashboards + claim_graphs re-validated green; memory updated).
