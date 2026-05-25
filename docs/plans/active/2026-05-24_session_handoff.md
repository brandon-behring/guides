# Session handoff — 2026-05-24

## Update 2026-05-24 (later same day) — Phase D depth-expansion DONE

Follow-up **(c)** from §4 below was executed. All 4 thin Phase D dossiers depth-expanded + agent-indexed:

| Dossier | Start → End | agent_index/ |
|---|---|---|
| capstone_portfolio_assessment | 1 → **48** | ✅ |
| multi_paradigm_presentation | 3 → **49** | ✅ |
| llm_as_coach_interfaces | 3 → **38** | ✅ |
| transfer_evaluation_methods | 4 → **42** | ✅ |

177 entries total; all v2.2 strict-live artifacts + `agent_index/` validated green. Entries default `status: unverified` → a `/dossier-audit` promotion pass is the natural next round. **research_toolkit #18 filed** (expose `--escalate-on-failure` on `/research-gather`); all 5 prior consumer:guides issues now closed. Full detail: `docs/plans/done/2026-05-24_phase_d_depth_expansion_wrap_up.md`. Item (c) below is now closed; next-pick reverts to **(a) Phase 1 ch 2** or a **dossier-audit** round.

---

## TL;DR

A 1.5-day session (2026-05-23 → 2026-05-24) closed **Research Workstream v2** (all 11 phases), drafted **Phase 1 chapter 1** of the experimentation pilot guide, migrated the whole stack to **scaffold v4.2.0**, and closed **all 8 of our filed consumer:guides scaffold issues**. Canonical artifacts live at `docs/design/2026-05-23_design_v0.3.md` + `src/content/frontmatter/methodology.mdx` (v0.2) + `docs/research/` (9 pedagogy dossiers) + `guides-experimentation/docs/research/` (2 content sub-dossiers). **Suggested next action: Phase 1 ch 2 authoring** (most natural next unit; #63 is unblocked; the experimentation_foundations dossier has dense citation backing for sub-area A5 randomization).

## State snapshot

| Workstream | Status | Where |
|---|---|---|
| Research Workstream v2 (11 phases) | ✅ closed | `docs/plans/active/2026-05-22_research_workstream_v2.md` |
| Design doc v0.3 + methodology v0.2 | ✅ canonical (this repo) | `docs/design/2026-05-23_design_v0.3.md` + `src/content/frontmatter/methodology.mdx` |
| Phase 1 pilot guide authoring | 🔄 1 of 16 chapters drafted | `~/guides-experimentation/src/content/experimentation/` |
| Scaffold v3→v4 migration | ✅ both repos v4.2.0 | `astro.config.mjs` + `shared/styles/guides-family.ts` |
| Scaffold consumer:guides issues | ✅ 8/8 of mine closed; 9th docs-only filing in progress | `brandon-behring/book-scaffold-astro` #46-52, #63 closed |
| research_toolkit consumer:guides | 4 filed; 2 closed (#9, #12), 2 open (#10, #11) | `brandon-behring/research_toolkit` |
| Cloudflare Pages deploy (Phase 0b Pt 2) | ⏳ still deferred | `guides.brandon-behring.dev` not yet live |

## Canonical artifact index

| When you need to find... | Path |
|---|---|
| Active workstream plan | `docs/plans/active/2026-05-22_research_workstream_v2.md` |
| Active design doc | `docs/design/2026-05-23_design_v0.3.md` |
| claude-books cross-pollination memo (feeds v0.4) | `docs/design/2026-05-24_claude_books_learnings.md` |
| Pedagogy playbook + consolidated decision log | `docs/design/PEDAGOGY.md` |
| Research-lint dossier gate (script + CI) | `scripts/research_lint.py` + `.github/workflows/research-lint.yml` |
| User-facing methodology page (v0.2) | `src/content/frontmatter/methodology.mdx` |
| Shared style across the guides family | `shared/styles/guides-family.ts` |
| 9 pedagogy dossiers (5 migrated v1-era + 4 new v2.2) | `docs/research/<topic>/` |
| 2 content sub-dossiers for experimentation pilot | `~/guides-experimentation/docs/research/{experimentation_foundations,experimentation_advanced}/` |
| Phase 1 ch 0 + ch 1 chapter MDX | `~/guides-experimentation/src/content/experimentation/{00-introduction,01-industrial-narrative}.mdx` |
| Bibliography for pilot's Cite components | `~/guides-experimentation/bibliography.bib` |
| Phase wrap-up docs (per-phase friction logs) | `docs/plans/done/` (10 docs across the session) |
| PDF text-extraction backfill script | `scripts/backfill_pdf_cache_text.py` |
| Historical lineage docs (v0.1, v0.2, comparative critique, roadmap) | `~/interview_prep_series/docs/plans/active/` (frozen reference; not canonical) |

## Open follow-ups — ranked by likely next-pick

### (a) Phase 1 ch 2 authoring — RECOMMENDED
Most natural next unit. #63 unblocked + chapter rendering verified end-to-end. Likely scope: **"Randomization fundamentals + AA tests"** from `experimentation_foundations` sub-area A5. Authoring path: read `agent_index/03_industrial_practice.md` or A5-relevant agent_index entries → cite 3-5 bibkeys from `bibliography.bib` (need to add more entries for A5-specific papers) → draft + build + push. Pattern set by ch 1; ~90-120 min wall-clock.

### (a*) Design v0.3 testing coverage — exercise via ch 4 draft

**Coverage status (current)**: ~10% of design v0.3's pedagogical + scaffold commitments are validated through actual chapter content.

- **Validated by ch 0 + ch 1**: v0.2 schema fields (mode/target/ordering/los/load_targets/commitment/paradigms), 4 of ~44 research-portfolio components (MarginNote, KeyIdea, TryThis, Cite), markdown tables, PFL-style stretch problem pattern (basic — Apex Pay vignette in ch 1).
- **NOT validated**: KaTeX math rendering (scaffold #51 closed in v3.7.1 enables `\mathbb{E}\{X\}` in research-portfolio); TikZ figures (scaffold #17 closed in v4.2.0 ships `build-figures.mjs` with auto `pdflatex` compile); productive-failure framing (design v0.3 §2.1b, designated for ch 4); UDL/multi-paradigm declaration via `paradigms[]` (only `[default]` used so far); Theorem + WorkedExample + Figure + CodeBlock + ConceptBox + 30+ other untouched components.

**Recommended test approach**: exercise these capabilities through real ch 4 (hypothesis testing) drafting, NOT a dedicated showcase chapter. Ch 4 is a natural canvas — the formal-machinery introduction needs math (`$P(\text{Type I error})$`, `$\mathbb{E}\{X\}$`, etc.), benefits from a power-curve or significance-test diagram (TikZ figure), and is explicitly designated for productive-failure framing per design v0.3 §2.1b ("what would you do?" worked case BEFORE the formal apparatus).

**Checklist for the ch 4 draft to intentionally exercise**:
- [ ] KaTeX brace-math (`\mathbb{E}\{X\}`, indicator functions, etc.) — validates scaffold #51 fix
- [ ] Productive-failure section ordering per v0.3 §2.1b — opens with informal "what would you do?", then formalizes
- [ ] ≥2 untested components — likely candidates: `<Theorem>` + `<WorkedExample>` (or `<Figure>` if a TikZ diagram is included)
- [ ] At least one TikZ figure — power curve OR significance-region diagram. Source at `figures/experimentation/<name>.tex`; build-figures pipeline compiles to SVG via `pdflatex`. Needs TeX Live on local machine + Cloudflare deploy env.

**Out of explicit-test scope (this round)**: LLM-as-coach (Phase 2 — nothing to render yet); capstone (Phase 1.5 — deferred per ADR-0001); `paradigms[]` schema migration (v0.4 — see new section below).

**Effort estimate**: ~3-4 hours, one focused session. Ch 4 is heavier than ch 1 was (math + figure + productive-failure framing all in one) but covers a lot of validation ground.

**Decision-point at next session**: this follow-up gets executed naturally if/when next session picks ch 4 instead of ch 2. If ch 2 is the pick, the test gap persists until ch 4 lands; flag at that point as "still untested."

### (b) Cloudflare Pages deploy (Phase 0b Part 2)
`deploy: 'pages'` signaling is in place via `guidesFamilyStyle`. Needs: Cloudflare dashboard wire-up (project create, env vars `BOOK_PRESET=research-portfolio` + `NODE_VERSION=22`, GitHub repo connect), custom domain `guides.brandon-behring.dev`, DNS validation. ~30-60 min. Detailed steps in `~/guides/docs/deploy-cloudflare-pages.md`.

### (c) Depth-expand thin Phase D dossiers
4 Phase D dossiers (capstone_portfolio_assessment 1 entry; multi_paradigm_presentation 3; llm_as_coach_interfaces 3; transfer_evaluation_methods 4) are below first-pass density. Particularly `capstone_portfolio_assessment` (1 entry) is too thin to soundly back v0.3 §2.4. Re-run `/research-gather` with --escalate-on-failure (research_toolkit#9 is closed; Playwright escalation should now work for previously-paywalled sources).

### (d) Full v2.2+ re-gather of migrated dossiers
5 dossiers in `docs/research/` were dir-only migrated (B/C condensed approach); each has a `MIGRATION.md` noting the deferral. Full upgrade per dossier: re-run `/research-gather` → upgrade to v2.2 schema → run `/agent-index` Attribute-First. ~2-3 sessions per dossier.

### (e) `guidesFamilyStyle` → npm package
Currently canonical in hub repo + inline-duplicated in pilot. When 2nd guide ships (likely `guides-prompt-injection` per Anthropic-arc fit), extract to `@brandon-behring/guides-shared-style` npm package. Both consumers then import from npm. Until then, current setup works fine.

### (f) research_toolkit #10 + #11 — passive
- **#10** HTML stub detection — affects depth-expansion when retrying JS-rendered pages (semanticscholar, projecteuclid). Workaround: use arxiv URL when both available.
- **#11** PDF text extraction — `~/guides/scripts/backfill_pdf_cache_text.py` is the consumer-side workaround; runs `pdftotext` on raw_only PDF caches. Script becomes delete-able when #11 ships upstream.

## Suggested first action of next session

1. **MEMORY.md** auto-loads + you read `project_session_state.md` (richer breadcrumb)
2. **Read this handoff doc** (this file)
3. **Pick from §"Open follow-ups" ranked list** — default to (a) Phase 1 ch 2 authoring unless you have a reason to redirect
4. **Spawn a focused plan** for the chosen task; reference the wrap-up docs below for prior friction patterns

## References (per-phase wrap-up docs from this session)

All in `docs/plans/done/`:
- `2026-05-22_phase_0b_push_wrap_up.md` — GitHub push + private→public flip + Node 22 bump
- `2026-05-22_phase_a0_scaffold_preflight_wrap_up.md` — first 7 scaffold issues filed
- `2026-05-23_phase_a_experimentation_foundations_wrap_up.md` — first content dossier (14 entries)
- `2026-05-23_phase_a2_experimentation_advanced_wrap_up.md` — second content dossier (11 entries) + research_toolkit issues filed
- `2026-05-23_phase_e_design_v03_wrap_up.md` — design doc v0.3 + methodology v0.2 + workstream closure
- `2026-05-23_phase1_ch1_industrial_narrative_wrap_up.md` — chapter 1 draft (see Update 2026-05-24 section)
- `2026-05-24_scaffold_v4_migration_wrap_up.md` — v3→v4 migration + #63 resolution

## v0.4 design-doc concerns (deferred from this session)

These are gaps surfaced during the session that the design v0.3 doc doesn't fully resolve. Park them for an eventual v0.4 design pass.

> **Input for the v0.4 pass**: `docs/design/2026-05-24_claude_books_learnings.md` ranks four adoptions from the sibling `claude-books` repo. Its **P3** (a one-concept multi-paradigm PoC round) is the recommended way to generate evidence for the `paradigms[]` decision immediately below; its **P2** — now built at `docs/design/PEDAGOGY.md` §3 — collects these v0.4 concerns into one OPEN-status table (kept in lockstep with this doc).

### `paradigms[]` schema/design mismatch

The v0.2 schema enum in `~/guides-experimentation/src/content.config.ts` accepts `paradigms: [default | udl | srl | andragogy]` — **pedagogical frameworks** (Universal Design for Learning, Self-Regulated Learning, andragogy). Design v0.3 §2.2 specifies a different canonical set: `[visual | symbolic | code | prose | tabular | interactive]` — **presentation modes** (per UDL "multiple means of representation" + Mayer's multimedia learning principles + Paivio dual-coding).

These are semantically distinct concepts conflated under the same field name. Both have legitimate pedagogical justification + cited backing in the dossiers.

**Resolution paths (decide in v0.4)**:
- **(i)** Extend the v0.2 `paradigms[]` enum to include both sets, accept the conceptual overlap, document the duality.
- **(ii)** Rename the existing field to `pedagogical_paradigms[]` (preserves v0.2 semantic) + add a separate `presentation_modes[]` field for design v0.3 §2.2 (clearest separation; requires schema migration in `~/guides-experimentation/src/content.config.ts` + back-fill ch 0 + ch 1 frontmatter).
- **(iii)** File a `consumer:guides` issue requesting upstream `book-scaffold-astro` either extends `researchPortfolioChapterSchema` to add a presentation-modes field OR provides design guidance on whether consumers should add it via their `.merge()` extension.

**Decision deferred**. Recommended path is likely (ii) when v0.4 lands; (iii) is a viable alternative if upstream cares to weigh in. Don't tackle in chapter-authoring sessions; cluster with other v0.4 schema concerns.

### Other v0.4 candidates (parked here for later collection)

- `presentation_modes[]` lint rule (per v0.3 §2.2): warn if <2 modes declared. Depends on (ii) above shipping first.
- Capstone artifact contract (per v0.3 §2.4): currently aspirational; Phase 1.5 plan owes a concrete shape.
- LLM-as-coach interface constraints (per v0.3 §2.3): Phase 2 deliverable; design doc has constraints but no implementation contract.

## Known local-only state (not in any repo)

Three files in `~/interview_prep_series/docs/plans/active/` have local-only documentation amendments preserving the design-doc lineage:
- `2026-05-19_research_phase_handoff.md` — dossier-migration erratum
- `2026-05-19_guides_design_rethink_v0.2.md` — SUPERSEDED by v0.3 note
- `2026-05-20_phase_0b_wrap_up.md` — Node 22 errata + correction

These are untracked in interview_prep_series git; user has substantial unrelated WIP in that repo intentionally untouched. Decision: leave as-is; user can commit at their discretion.

## Versions in play

- **scaffold v4.2.0** — installed in both repos; `preset:` API removed (BREAKING); use `styles: [<presetStyle>, guidesFamilyStyle]`
- **research_toolkit** — v2.3.0 candidate (HEAD `daf6699`); `git pull` to refresh; latest tag remains v1.9.1 (v2.x is HEAD-only)
- **Astro 6.1.7** — Node ≥22.12.0 required (binding constraint, not just scaffold)
- **Node 22** — both repos' CI; also required for Cloudflare Pages when deploy lands
