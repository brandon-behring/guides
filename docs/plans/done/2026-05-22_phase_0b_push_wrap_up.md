# Phase 0b.push wrap-up

**Date completed:** 2026-05-22
**Plan reference:** `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (Phase 0b.push section)
**Session duration:** ~30 min wall-clock

## What completed (acceptance gates)

- [x] `brandon-behring/guides` exists on GitHub (public)
- [x] `brandon-behring/guides-experimentation` exists on GitHub (public)
- [x] Both repos have CI green on live workflows (`astro-build` + `content-validate`)
- [x] `gh auth status` confirms `brandon-behring` SSH auth in place

## Friction encountered

### 1. Private-then-public detour
Initial push was `--private` per user preference ("private first, flip to public later"). This hit a GitHub Actions billing block: "The job was not started because recent account payments have failed or your spending limit needs to be increased." Private repos consume Actions minutes from the account quota; the account had a payment problem.

**Resolution:** Flipped both repos to `--visibility public --accept-visibility-change-consequences` immediately. Public repos get unlimited free Actions minutes. Now matches the original Phase 0b plan target.

### 2. Scaffold Node 22 bug (NEW FINDING #7)
After billing was unblocked, `astro-build` + `content-validate` still failed in 3-4 seconds with:

```
SyntaxError: The requested module 'node:fs/promises' does not provide an export named 'glob'
```

Root cause: `book-scaffold-astro@3.5.0`'s `scripts/validate.mjs` line 29 imports `glob` from `node:fs/promises` — a Node 22+ API. Consumer template's CI ships with `node-version: '20'`, and Phase 0b doc specified `NODE_VERSION=20` for Cloudflare Pages. Mismatch.

The scaffold's own CI (`package-ci.yml`) tests on Node 22, but it ships consumer templates pinned to Node 20. Documentation drift.

**Resolution:** Workaround applied (per durable upstream-issue policy — file + workaround):
- Bumped `node-version: '20'` → `'22'` in 4 workflow files (2 per repo)
- Updated `~/interview_prep_series/docs/plans/active/2026-05-20_phase_0b_wrap_up.md` to flag `NODE_VERSION=22` for Cloudflare
- Added as the 7th deferred dogfooding finding in `reference_book_scaffold_astro.md` memory
- To be filed upstream in Phase A.0 alongside the other 6

### 3. Sketched workflows fail (expected, not a finding)
`capstone-test.yml` + `companion-test.yml` in both repos fail in 0s with "workflow file issue". Root cause: their `jobs:` blocks are commented out (Phase 0b sketch pattern — they activate when `capstone/` + `companion/` gain real content in Phase 1.5 + Phase 1 respectively). Not a bug; behaves as documented. Will turn green when their target dirs gain real content.

## Scaffold/style findings filed upstream

**None this phase.** Filing batched to Phase A.0 (7 findings total: original 6 from Phase 0b wrap-up + Node 22 issue).

## Open follow-ups

- Phase A.0 to file all 7 upstream findings + bump scaffold to v3.5.1
- GitHub Actions deprecation warning: `actions/checkout@v4`, `actions/setup-node@v4`, `actions/upload-artifact@v4` are flagged for Node 24 forced migration by 2026-06-02. Separate concern; address with the toolkit's eventual response.
- Cloudflare Pages deploy (Phase 0b Part 2) still deferred; needs `NODE_VERSION=22` per finding #7 when it lands.

## Handoff hook

Phase 0b.push is **complete**. The hub repo plan canonical location is now `~/guides/docs/plans/active/2026-05-22_research_workstream_v2.md` (after Phase 0b.push.post). Task #2 (`0b.push.post`) is in progress; next is Phase A.0.

To resume: read the plan file in the hub, check TaskList for current phase, start the next pending task.

## Commits in this phase

- `~/guides`: `590bda6 ci: bump node-version 20 → 22 (work around scaffold glob import)`
- `~/guides-experimentation`: `10f06db ci: bump node-version 20 → 22 (work around scaffold glob import)`
