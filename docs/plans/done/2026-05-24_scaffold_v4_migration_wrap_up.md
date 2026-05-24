# Scaffold v3.7.1 → v4.2.0 migration wrap-up

**Date completed:** 2026-05-24
**Plan reference:** `~/.claude/plans/tranquil-greeting-turtle.md`
**Session duration:** ~25 min wall-clock (matches estimate)

## What completed (acceptance gates)

- [x] **Both repos on scaffold v4.2.0** (was v3.7.1; npm install at session start pulled v4.2.0)
- [x] **Hub `astro.config.mjs` migrated**: `preset: 'research-portfolio'` → `styles: [researchPortfolioStyle, guidesFamilyStyle]`
- [x] **Pilot `astro.config.mjs` migrated**: same pattern, with inline-duplicated `guidesFamilyStyle`
- [x] **`~/guides/shared/styles/guides-family.ts`** NEW — canonical `guidesFamilyStyle` definition (site + `routes.frontmatter: { enabled: true, prefix: '' }` + `deploy: 'pages'`)
- [x] **Hub build green**: `dist/methodology/index.html` + `dist/about/index.html` now at root URLs (was `/frontmatter/methodology/` etc.)
- [x] **Pilot build green**: `dist/chapters/introduction/index.html` + `dist/chapters/industrial-narrative/index.html` now render (PREVIOUSLY MISSING due to #63)
- [x] `book-scaffold validate` reports **2 chapter(s) checked** (was 0 before #63 fix landed)
- [x] **Cite components render correctly** in ch 1: clean Author-Year hyperlinks (`<a href="/references#kohavi2012puzzling" class="cite">Kohavi et al. (2012)</a>`)
- [x] **Sidebar lists both chapters**, auto-generated TOC works
- [x] **CI green** on both repos: hub astro-build 25s ✓, pilot astro-build 22s ✓ + content-validate 19s ✓ (sketched capstone-test + companion-test still fail as expected)

## What this unblocks

The full set of scaffold-related blockers from Phase 1 ch 1 wrap-up is now resolved:

1. **Chapter rendering** (Phase 1 ch 1 wrap-up §2 "Friction encountered"): chapter 1's HTML now renders + spot-check confirms content. Effectively reverses the "blocked by #63" caveat in that wrap-up doc.
2. **Frontmatter route prefix** (design v0.3 §2.5 commitment): /methodology + /about + /experimentation/authors now at root URLs via `prefix: ''`.
3. **`deploy: 'pages'` field set**: when Cloudflare Pages dashboard wire-up happens (Phase 0b Part 2 still deferred), this signaling is in place.

Phase 1 ch 2 authoring is unblocked. Cloudflare Pages deploy is independently unblocked when the dashboard task is scheduled.

## Friction encountered

### 1. v3 → v4 migration error surfaced as expected
First `npm run build` after the npm install threw `BookConfigError` from `defineBookConfig` (v3 `preset:` syntax under v4). Error message included auto-suggested replacement code + link to MIGRATION-v3-to-v4.md — useful diagnostics. No real friction; just the documented breaking change.

### 2. `draft: true` filter as the "third symptom" of #63
The v4.1.1 changelog noted that `getCollection('chapters')` "works correctly in v4.1.0 when loader.base is properly configured (verified in reproduction). The scaffold fix targets validate + build-labels (the 2/3 symptoms with scaffold-side causes); the third symptom is consumer-side configuration."

Investigation revealed: both chapters had `draft: true` in frontmatter, and `src/pages/chapters/[...slug].astro` filters via `getCollection('chapters', (entry) => !entry.data.draft)`. So `draft: true` chapters get filtered out. That's the documented behavior of the canonical scaffold filter.

Resolution: flipped both chapter frontmatters from `draft: true → false`. The `draft` field is now the canonical signal — chapters under active development can use `draft: true` to opt out of rendering; finalized chapters use `draft: false`.

### 3. Cross-repo `guidesFamilyStyle` sharing requires npm package
The v4 migration recipe (`MIGRATION-v3-to-v4.md` §"Cross-book reuse") shows `import { guidesFamilyStyle } from '../shared/styles/...'` — assumes hub + pilot are in the same workspace. Our setup has them as separate Git repos.

Resolution: hub repo owns the canonical `~/guides/shared/styles/guides-family.ts`; pilot inline-duplicates the same fields in its own `astro.config.mjs` with a TODO marker for the eventual npm-package extraction. Pattern is "real" (hub imports the canonical style); only the cross-repo reuse is deferred. When a 2nd guide arrives (probably `guides-prompt-injection` per Anthropic-arc fit), extract to `@brandon-behring/guides-shared-style` npm package.

## Filed issues impact

**All 8 of our consumer:guides scaffold issues are now closed:**
- #46, #47 — fixed before v3.7.1 (v3.5.3 + v3.6.1, dups of earlier #20 + #38)
- #48, #51, #52 — fixed in v3.7.1
- **#49, #50, #63 — fixed in v4.0.0 + v4.1.2** (this round's wins)

Two filings from Phase A.0 + one filing from Phase 1 ch 1 (the #63 surface). Closure cycle: ~24 hours.

## Open follow-ups

1. **Extract `guidesFamilyStyle` to npm package** when 2nd guide arrives. Until then, inline-duplicate in pilot stays.
2. **Cloudflare Pages deploy** (Phase 0b Part 2). `deploy: 'pages'` is set; needs dashboard wire-up + custom domain.
3. **Phase 1 ch 2 authoring**. Now fully unblocked. Likely scope: "Randomization fundamentals + AA tests" from `experimentation_foundations` sub-area A5.
4. **Phase 1 ch 1 wrap-up doc** has a "blocked by #63" caveat that's now resolved — addendum could be added; or just point at this wrap-up doc.
5. **Depth-expansion of thin Phase D dossiers** (capstone, multi-paradigm, llm-coach). Independent track.

## Commits

- `~/guides`: `ed19823 chore: migrate to scaffold v4.2.0; add guidesFamilyStyle`
- `~/guides-experimentation`: `8c0b426 chore: migrate to scaffold v4.2.0; resolve #63 chapter rendering`
