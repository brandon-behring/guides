# claude-books cross-pollination — memo + P1 + P2 wrap-up

**Date completed:** 2026-05-24
**Plan reference:** `~/.claude/plans/anything-this-repo-can-rosy-candle.md` (two approved plans this session: the comparison memo, then the P1+P2 implementation)
**Scope:** Study what `guides` can learn from the sibling `claude-books` repo → write a ranked memo → implement the two near-term, hub-only adoptions (P1 research-lint CI, P2 pedagogy playbook).
**Session duration:** ~1 focused session

## TL;DR

A side-by-side read of `~/claude-books` (same author, same `book-scaffold-astro` scaffold, a 3-volume Claude practitioner reference) produced a ranked cross-pollination memo (`docs/design/2026-05-24_claude_books_learnings.md`, P1–P4). The two near-term picks were then built:

- **P1 — research-lint CI**: `scripts/research_lint.py` + `.github/workflows/research-lint.yml` wire up the upstream `research_toolkit` validators (no vendored copy) as a push-time integrity gate on `docs/research/**`. Offline gate green on all 9 dossiers.
- **P2 — pedagogy playbook**: `docs/design/PEDAGOGY.md` — visual principles + four-layer authoring model + a consolidated DECIDED/DEFERRED/OPEN decision log (every row traced to design v0.3 / handoff / style-guide).

Also fixed a pre-existing data issue the new gate surfaced: 4 `cache_manifest.yml` files used non-portable absolute paths; migrated to relative form via the toolkit's own script.

## What completed (acceptance gates)

| Deliverable | State | Verification |
|---|---|---|
| Cross-pollination memo (`docs/design/2026-05-24_claude_books_learnings.md`) | ✅ | 21 referenced paths confirmed; framing honest (guides ahead on research rigor; bidirectional) |
| `scripts/research_lint.py` (wrapper) | ✅ | offline tier green 9/9; v2.2-vs-v1-era detection correct; `--with-cache` green after migration |
| `.github/workflows/research-lint.yml` (pinned `research_toolkit` v2.4.0) | ✅ | valid YAML; CI-simulated against a clean v2.4.0 export → green using offline validators only (no local cache) |
| `npm run lint:research` alias | ✅ | exit 0 |
| `docs/design/PEDAGOGY.md` (full playbook) | ✅ | decision log traceable to source docs; points-to (does not duplicate) design v0.3 / style-guide / methodology |
| 4× `cache_manifest.yml` path migration | ✅ | 33 paths → relative; `--with-cache` 0 failures; diffs are path-lines-only |
| Cross-links (CLAUDE.md, session handoff) | ✅ | memo + PEDAGOGY + research-lint pointers added |

## Method

- **P1 = reuse, not reinvent.** Reading the validator source showed `research_toolkit` already ships deterministic, offline, PyYAML-only validators (`bib_ledger`, `evidence_ledger`, `claim_graph`, `gather_trace`, `cross_stage`) with proper exit codes + 67 regression tests. The wrapper shells out to them via `PYTHONPATH=<toolkit>` and aggregates. This matches the repo's durable upstream policy (use upstream directly; don't vendor/drift).
- **Two integrity tiers**, split by what CI can see: *offline* (CI gate) vs *cache-dependent* (`cache_manifest`, `pre_selection_manifest`, `verify_citations` — local-only, since the blob cache at `~/Claude/research_cache` is not in the repo).
- **Baseline-first**: ran all validators against the corpus before wiring the gate. Already green → safe to make blocking.
- **P2 = distillation, not new research.** Read design v0.3 in full + the handoff + style guide; the decision log is a consolidation, every row sourced. Visual principles re-grounded for interview-prep (not copied from claude-books).

## Friction encountered

1. **`research_toolkit` HEAD is on a feature branch, not `main`.** Local HEAD `630ed30` lives on `origin/feat/19-topic-discovery` (1 commit ahead of `origin/main`). Pinning CI to that SHA would be fragile, so the workflow pins the **published tag `v2.4.0`** instead — verified green against guides' corpus via a clean export before committing to the pin.
2. **`cache_manifest.yml` path portability (pre-existing).** All 4 v2.2 manifests stored `~/Claude/research_cache/...` absolute paths; the toolkit's v2.3+ portability guard (closes its #2/#13) rejects these. Surfaced only under `--with-cache`; **excluded from the CI gate** (cache tier is local-only). Fixed with the toolkit's `scripts/migrate_manifest_paths.py` (33 paths across 4 files; data-preserving, path-lines-only diffs). The manifests were written by a pre-v2.3 toolkit.
3. **`verify_citations.py` writes `citation_audit_report.md` per dossier** as a byproduct of `--with-cache`. Not a deliverable; the ones generated during verification were removed (not committed).
4. **`evidence_ledger.py` is offline-safe only while evidence is `paraphrase`.** It reads cached text spans for `verbatim_match` evidence. guides' corpus is all paraphrase (capped at 0.85 confidence), so the CI gate is safe today; the wrapper's docstring flags that adding `verbatim_match` evidence would require moving evidence_ledger to the cache tier (or a `--skip-anchor-io` upstream ask).

## Toolkit findings filed upstream

None this session. The cache_manifest portability issue was an *already-closed* toolkit concern (#2/#13) with a shipped migration script; the evidence_ledger `verbatim_match` caveat is a *potential* future `consumer:guides` ask, documented in the wrapper rather than filed (no current need).

## Open follow-ups / handoff hook

- **Push the branch + open a PR** when ready — the new `research-lint` workflow will run on the PR (touches `docs/research/**`).
- **Methodology v0.2 integration** (design v0.3 §3) — still tracked; the PEDAGOGY decision log marks it in-progress.
- **P3 (multi-paradigm PoC)** + **P4 (competency coverage matrix)** from the memo — not yet built (P3 lives in the pilot repo; P4 waits on chapters).
- **`/dossier-audit` promotion pass** — all dossier entries remain `status: unverified` (pre-existing; orthogonal to this session).
- Committed on a branch off `main`; see session-state memory for the branch + commit.
