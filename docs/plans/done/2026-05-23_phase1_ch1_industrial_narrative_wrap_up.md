# Phase 1 ch 1 (industrial narrative) wrap-up

**Date completed:** 2026-05-23 (same session as Research Workstream v2 closure + follow-up)
**Plan reference:** `~/.claude/plans/tranquil-greeting-turtle.md` (overwritten Phase E plan with ch 1 plan)
**Session duration:** ~90 min wall-clock for ch 1 + ~30 min for the scaffolding bug surface

## What completed (acceptance gates)

- [x] `~/guides-experimentation/src/content/experimentation/01-industrial-narrative.mdx` written, ~2200 words across 7 sections (opening hook → Microsoft ExP era → Evolution Model → org maturity → pitfalls preview → PFL stretch → what's next)
- [x] `~/guides-experimentation/bibliography.bib` populated with 5 BibTeX entries: kohavi2020trustworthy, fabijan2017evolution, kohavi2015lessons, kohavi2012puzzling, kohavi2014seven
- [x] `book-scaffold build-bib` exits success: `5 entries -> src/data/references.json` (auto-generated reference data)
- [x] `book-scaffold validate` exits 0 — but reports "0 chapter(s) checked" (scaffold bug; see Friction §2 below)
- [x] `npm run build` exits 0; site builds + Pagefind indexes — but only 5 of the 7 expected routes emitted (Friction §2)
- [x] 6 `<Cite>` invocations across the chapter (kohavi2012puzzling ×2, kohavi2014seven ×2, kohavi2020trustworthy ×3, kohavi2015lessons ×3, fabijan2017evolution ×1)
- [x] PFL stretch problem block (TryThis component) with Apex Pay vignette + 3 transfer questions
- [x] 3 LOs declared (EXP-1.1, EXP-1.2 threshold, EXP-1.3) per v0.2 schema

**Not met:**
- [ ] Browser preview confirming chapter renders at `/experimentation/chapters/01-industrial-narrative/` — blocked by scaffold #63 (chapter discovery bug)
- [ ] CI verification post-push (would presumably also fail to render chapters)

## Friction encountered

### 1. `paradigms[]` field semantic conflict (design doc v0.3 vs current schema)
Design doc v0.3 §2.2 specifies `paradigms[]` as **presentation paradigms** (`visual / symbolic / code / prose / tabular / interactive`). The current `content.config.ts` v0.2 schema defines `paradigms[]` as **pedagogical frameworks** (`default | udl | srl | andragogy`). These are semantically different concepts conflated under the same field name.

Chapter 1 used `paradigms: [default]` matching the current schema (chapter 0's pattern). Design v0.3's presentation-paradigm spec is a future schema migration owed; track for v0.4 or a separate `presentation_modes[]` field.

### 2. Scaffold chapter-discovery bug (NEW, FILED AS #63)
Three separate flows report "0 chapters" despite valid MDX files existing:
- `book-scaffold validate`
- `book-scaffold build-labels`
- Astro's `getCollection('chapters', ...)` in `src/pages/chapters/[...slug].astro` (so no per-chapter HTML routes emitted)

The MDX files themselves parse correctly; the schema validates; the build succeeds. The chapters just silently don't render as routes.

**Filed as [scaffold #63](https://github.com/brandon-behring/book-scaffold-astro/issues/63)** — `bug, consumer:guides`. Three hypotheses in the issue body about root cause (Astro 5+ loader.base behavior vs scaffold scripts hardcoding paths vs research-portfolio profile's `routes.chapters: false` setting).

Workaround options if #63 doesn't ship soon:
- **(a)** Rename `src/content/experimentation/` → `src/content/chapters/` to match Astro 5+ default. Removes the `loader.base` override from `content.config.ts`. Cost: contradicts multi-guide pattern (each guide repo's content under `src/content/<slug>/`).
- **(b)** Wait for #63 fix.
- **(c)** Investigate by reading Astro's content loader source + scaffold's validate.mjs to identify which of the three hypotheses is actually the cause.

Chapter 1 source committed regardless — the prose is reviewable in the .mdx file even if it doesn't render as HTML yet.

### 3. `src/pages/` directory wasn't shipped at Phase 0b bootstrap
Pilot was bootstrapped 2026-05-20; scaffold v3.6.1 (which added auto-scaffolded `src/pages/index.astro` + `src/pages/chapters/[...slug].astro` per scaffold #28) shipped 2026-05-22. So Phase 0b created the consumer with NO pages — only auto-injected `/references/`, `/print/`, `/search/`, `/frontmatter/authors/` routes worked. Added the two missing files today by copying the canonical pattern from `~/book-scaffold-astro/create-book/bin/create-book.mjs:228-271`.

This wasn't a NEW scaffold finding — just consumed time tracking down. Future consumers bootstrapped with create-book v3.6.1+ get these for free.

### 4. `references.bib` vs `bibliography.bib` naming
Scaffold's `build-bib.mjs` expects `./bibliography.bib` at repo root (per `BOOK_BIB_PATH` default). I initially placed BibTeX at `src/data/references.bib` (consumer-side intuition) and `build-bib` reported "bibliography.bib not found". Moved to `./bibliography.bib`; immediately worked.

Not a scaffold bug — the script's expectation is documented in its `--help` output, but the consumer's mental model is "BibTeX lives in src/data/ next to references.json." Worth noting as docs friction but not a blocker.

## Scaffold/style findings filed upstream

- **New issue: scaffold #63** — Chapter discovery fails when content.config.ts overrides loader.base.

## Open follow-ups

1. **Wait for or investigate #63**: blocks rendering. Decide between waiting + rename-as-workaround + manual investigation in a future session.
2. **paradigms[] field semantic clarification**: needed for design doc v0.4. Either schema migration (extending to presentation modes) or rename the v0.2 field to `pedagogical_paradigms` + add a separate `presentation_modes` field.
3. **Sources frontmatter usage**: chapter 1 has `sources: []`. Schema allows up to 5 `{tier, url, label}` objects per chapter. Future authoring practice: populate `sources` with the structured citation list to support upstream tier-aware bibliography rendering.
4. **Citation-level verification deferred**: planned to verify each `<Cite>` against cached primary text. Did spot-checks but full audit deferred to depth-expansion + dossier-audit rounds.
5. **Chapter 2 planning**: deferred until ch 1 actually renders (blocked by #63). Likely scope: "Randomization fundamentals + AA tests" from experimentation_foundations sub-area A5.

## Author's note on session pacing

Chapter 1 ended up being the third sub-task of a single very long session that closed Research Workstream v2 + did the v3.7.1 follow-up + drafted chapter 1. The session ran much longer than the plan's "~2-3 hours" estimate when scaffold issues surfaced. The lesson is that infrastructure-validation tasks (build + route rendering) can absorb arbitrary time in a way that pure-prose authoring cannot. Future per-chapter sessions should be scoped to "1 chapter, infrastructure assumed working" — the moment build/route issues surface, defer to a dedicated tooling session.

## Commits

- `~/guides-experimentation`: chapter 1 MDX + bibliography.bib + src/pages/ files (on session close)
- scaffold repo: 1 new issue #63
