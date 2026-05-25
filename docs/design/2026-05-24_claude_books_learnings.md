# What `guides` can learn from `claude-books` — cross-pollination memo

**Status**: Design input (internal), 2026-05-24. Feeds the eventual **v0.4** design pass; not user-facing.
**Subject**: `claude-books` (`~/claude-books`, remote `brandon-behring/claude-books`) — a sibling project by the same author, on the **same scaffold** (`@brandon_m_behring/book-scaffold-astro` v4.2.0) with the **same upstream-issue discipline**. A 3-volume Claude practitioner reference (Handbook in progress; Architect's Reference + Field-Guide planned), plus a cross-cutting Glossary.
**Closes with**: ranked P1–P4 recommendations (§7).

---

## 0. Why this memo exists

A side-by-side read of the two repos to surface what `guides` can adopt from `claude-books`. Two facts frame everything below.

**This is the mirror of work `claude-books` already did.** It keeps a `docs/guides-recon.md` (45 KB, written 2026-05-24) studying *this* repo, and its `handbook/PEDAGOGY.md` decision log already carries two rows sourced from that recon — "PFL transfer-model adoption (P2 per guides-recon)" and "Multi-paradigm presentation lint (P3 per guides-recon)". So the cross-pollination is **bidirectional**: claude-books has been borrowing our transfer-model and multi-paradigm thinking; this memo collects the return flow.

**`guides` is ahead on research rigor.** Our v2.2 strict-live dossiers — `bib_ledger.yml` + `evidence_ledger.yml` + `cache_manifest.yml` + `claim_graph.jsonl` + `gather_trace.yml` + an `agent_index/` folder, 177 entries across the 4 strict-live dossiers plus 5 migrated v1-era ones — are materially heavier than claude-books' ~123 primary-source markdown notes. So the genuine learnings flow in **pedagogy and process**, not research infrastructure. Where this memo says "adopt," it almost always means *distill or operationalize something `guides` already half-has*, not import wholesale.

---

## 1. research-lint in CI — *(→ P1)*

**What claude-books does.** `.github/workflows/research-lint.yml` runs on every push/PR that touches `docs/research/**`. Two Python scripts:
- `docs/research/.lint.py` — research-note frontmatter + structure.
- `docs/research/.crossref.py` — cross-reference integrity + cert-task-area coverage.

Research-cache integrity is therefore **enforced by CI**, not by memory or a manual pass.

**What `guides` has today.** CI is `astro-build.yml`, `content-validate.yml`, `capstone-test.yml`, `companion-test.yml`. There is **no research workflow**. Dossier integrity is protected only by *manual* skills run on demand: `/dossier-audit` (factual verification), `/url-freshness-check` (URL liveness), `/freshness-audit` (v2 strict-live evidence integrity).

**The gap.** We have far *more* to lint than claude-books — five structured YAML artifacts per v2.2 dossier — and none of it is checked automatically. Schema drift, a broken `cache_manifest` SHA pointer, or a dangling `claim_graph` reference can land on `main` unnoticed until a human happens to run a skill.

**The learning.** Add a `research-lint.yml` mirroring claude-books' shape, but validating *our* richer schemas on push when `docs/research/**` changes:
- `bib_ledger.yml` / `evidence_ledger.yml` schema validity.
- `cache_manifest.yml` SHA pointers resolve under `~/Claude/research_cache/text/sha256/`.
- `evidence_ledger` ↔ `claim_graph.jsonl` cross-refs are consistent (no orphan evidence IDs).
- `agent_index/` internal links resolve.

Keep it to **deterministic, fast, offline** checks. Leave network-dependent, non-deterministic work — URL HEAD-checks (`/url-freshness-check`) and agent-based fact verification (`/dossier-audit`) — as periodic/manual, since they are flaky and slow in CI. This is the lowest-risk, highest-leverage item in the memo: it protects an asset we have *already* invested heavily in, and it fits the existing CI pattern exactly.

---

## 2. A distilled visual-pedagogy playbook + decision log — *(→ P2)*

**What claude-books does.** `handbook/PEDAGOGY.md` (~475 lines) is a single author-facing reference that turns research into authoring practice. It contains:
- **8 visual-presentation principles**, each backed by ≥2 sources *and* applied to a concrete design choice (e.g. "macro before micro," "two-level disclosure max," "data-ink discipline," "LATCH," "small multiples," "diagram-or-example rule," "F-pattern scanning," "form-to-reader-mode").
- A **four-layer model** (macro / chapter / section / micro) mapping each reader need to a specific tool.
- A **per-figure decision tree** over a 4-tier figure stack (Mermaid / TikZ→SVG / authored SVG / ASCII).
- A **26-row decision log** — every pedagogical choice tracked as OPEN / DECIDED / DEFERRED with a date and notes.
- A **"how to use this doc"** section addressing author / reviewer / contributor separately.

**What `guides` has today.** The raw material, spread across three places:
- `docs/design/2026-05-23_design_v0.3.md` — the *decisions and their research backing* in prose (§2.2 multi-paradigm, §2.1 transfer, §5 verification table).
- `docs/style-guide-v0.0.md` — 12 LaTeX-ported authoring rules with keep/change/drop markers.
- 9 dossiers — the evidence (e.g. `multi_paradigm_presentation`, 49 entries; `technical_book_design`; `documentation_methodology`).

**The gap.** We have the *research* and *decisions*, but no single **author-facing playbook** that distills them into principles you apply mid-draft. And our decisions are *scattered*: design v0.3 §1/§4, the session handoff's "v0.4 design-doc concerns," and style-guide keep/change/drop markers each hold a slice, with no consolidated status view.

**The learning.** Distill the existing material into a `guides`-flavored pedagogy playbook (a `docs/design/PEDAGOGY.md` or a methodology-playbook doc) — this is **synthesis, not new research**. The single highest-value steal is the **decision-log table**: one OPEN/DECIDED/DEFERRED + date + notes table consolidating today's scattered pedagogy decisions (transfer model, multi-paradigm, LLM-as-coach constraints, capstone contract, the `paradigms[]` question). It would immediately make the v0.4 pass easier by showing, at a glance, what is settled vs still open.

---

## 3. A multi-paradigm PoC round — *(→ P3)*

**What claude-books does.** `handbook/poc/` renders the *same* chapter content in multiple shapes side-by-side — 5 formats × Ch 1 (Round 1), then 4 chapters × 4 formats (Round 2) — synthesized in `poc/COMPARISON.md` and judged visually at `npm run dev`. Crucially, the PoCs **doubled as scaffold-gap discovery**: the round surfaced the need for `<PocLayout>`, `<WorkedExample>`, `<Pitfall>`, and `<YouWillLearn>`, which were then filed upstream *before* prose drafting committed to them.

**What `guides` has today.** Design v0.3 §2.2 commits to six presentation paradigms — `[visual | symbolic | code | prose | tabular | interactive]` — backed by UDL + Mayer + Paivio in `multi_paradigm_presentation`. **None has been prototyped.** And there is a live schema tension (session handoff, "v0.4 design-doc concerns"): the `paradigms[]` enum in `guides-experimentation/src/content.config.ts` is `[default | udl | srl | andragogy]` (pedagogical *frameworks*), not the §2.2 presentation *modes* — two distinct concepts under one field name, with resolution paths (i)/(ii)/(iii) parked for v0.4.

**The gap.** We are about to scale chapter authoring on a multi-paradigm commitment we have never tested, with an unresolved schema underneath it.

**The learning.** Run a PoC round on **one** pilot concept (e.g. CUPED or hypothesis testing in `guides-experimentation`), rendering it across all six paradigms side-by-side. It (a) empirically validates the multi-paradigm commitment before it scales, (b) surfaces our own scaffold gaps the way claude-books' rounds did (likely candidates: math/figure components already flagged untested in the handoff's §(a*) checklist), and (c) generates the concrete evidence to **resolve the v0.4 `paradigms[]` decision** — you cannot pick between paths (i)/(ii)/(iii) well without having seen the modes rendered. Structural note: this lives in the pilot repo, since the hub holds no chapter content.

---

## 4. An interview-competency coverage matrix — *(→ P4)*

**What claude-books does.** `docs/cert-coverage.md` is a Domain × task-area × {Handbook / Architect's Ref / Field-Guide} matrix with a status legend (✅ shipped / 🟡 outlined / 🟢 in rewrite / ⬜ not covered), anchored to Anthropic's **public 5-domain cert taxonomy**. It is paired with `cert-tracking.md` (a watch list for taxonomy changes) and a weekly sync agent, and its `.crossref.py` even CI-checks cert-task-area coverage. The matrix is used during each book's outline phase as a thoroughness check.

**What `guides` has today.** The *anchor concept* but no matrix: the `[IC5 Signal]` margin-note category (style-guide §1) and the `interview_prep_pedagogy` dossier's `signaling_communication` sub-area, which already targets "IC4/IC5 leveling" and "verbal patterns differentiating IC5 from IC4 per public Meta/Google rubric docs."

**The gap.** Our headline success criterion is *transfer* (design v0.3 §2.1) — "can the learner perform in an interview?" — but we have no artifact that asks "are we actually covering the competencies interviews test?"

**The learning.** Build an interview-competency coverage matrix (competency / rubric-dimension × guide/chapter × status), anchored to published DS/ML leveling rubrics. It operationalizes the transfer claim and gives outline reviewers the same thoroughness check claude-books gets from `cert-coverage.md`. Two honest caveats put this at P4, not higher: it is **structurally awkward** (it lives in the hub but references chapters in sibling repos), and it needs an **external rubric anchor assembled** first. Best deferred until ≥1 guide has real chapters; it could later earn a CI coverage-check à la `.crossref.py`.

---

## 5. Lower-priority also-rans

- **Living-document metadata.** claude-books carries per-chapter `volatility` (`stable-principle` / `evolving` / `fast-moving`) + `last_updated` + `introduced_in_version`, with a staleness banner that renders when content is non-stable and >90 days old. `guides` has the *seed* in style-guide §9 (freshness velocity HIGH/MEDIUM/LOW + a `<DatedContent>` marker). Worth adopting the staleness-banner mechanism mainly for *future fast-moving guides* (prompt-injection / LLM tooling); low value for stable math/stats content, where most of our corpus sits.
- **Inline source-attribution chips.** claude-books uses `<Tag kind="official|practitioner|convergence">` to mark provenance inline. `guides` has evidence Tier 1/2 (citation *requirements*, style-guide §4) but no inline chips. Less central for settled textbook content; if ever adopted, the analogue would be something like `textbook | industry | exam-reported`.
- **Competitive-landscape doc.** claude-books has `docs/landscape-2026-05.md`; `guides` has no equivalent survey of the interview-prep market. A nice-to-have, not load-bearing.
- **`llms.txt` + "for agents" pivot page.** PEDAGOGY decision #20 treats this as becoming table-stakes. Cross-cutting; belongs to the deploy phase (Phase 0b Part 2), not now.
- **Root `AUTHORS.md`.** claude-books keeps AI-authorship disclosure in a root file; `guides` already discloses it user-facing in `about.mdx`. A machine-readable root file is a minor nicety.

---

## 6. What `guides` should *not* copy

For completeness — claude-books patterns that are right for *it* but not for *us*:

- **Volume-level chrome differentiation** (separate typography/accent per volume). claude-books has three volumes with distinct reader-modes; the guides family differentiates by *topic*, not by Diátaxis mode, so per-volume chrome buys less.
- **Maturity-model (L1–L5) spine.** Fits a tool-adoption handbook; our spine is *transfer to an interview*, not adoption maturity.
- **Lighter research notes.** Do not regress our v2.2 strict-live ledgers toward claude-books' markdown-note model — that is the one axis where we are clearly ahead.

---

## 7. Prioritized recommendations

| # | Adoption | Leverage | Effort | Readiness | Why this rank |
|---|---|---|---|---|---|
| **P1** | research-lint in CI | High | Low | Ready now | Protects our largest existing investment (177-entry strict-live corpus) that has only manual protection today. Deterministic, offline, fits the existing CI pattern. Shippable immediately. |
| **P2** | Distill a visual-pedagogy playbook + decision log | High | Medium | Ready now | Pure synthesis of material we already hold. Bridges research → authoring before pilot chapters scale, and the consolidated decision log directly de-risks the v0.4 pass. |
| **P3** | Multi-paradigm PoC round (one concept) | High | Medium | Soon | Validates a core design commitment empirically *and* unblocks the v0.4 `paradigms[]` schema decision. Depends on pilot content + a few scaffold components. |
| **P4** | Interview-competency coverage matrix | Medium | Medium | Later | Operationalizes the transfer claim and builds on existing IC5-Signal work, but is structurally awkward (hub → sibling chapters) and needs an external rubric anchor. Defer until ≥1 guide has chapters. |

Also-rans (§5) are opportunistic, not ranked. Per the repo's durable upstream policy, anything here that turns into a scaffold/toolkit need is filed as a `consumer:guides` issue rather than patched around locally.

---

## 8. Provenance

- Source artifacts read in full (2026-05-24): `claude-books/handbook/PEDAGOGY.md`, `claude-books/.github/workflows/research-lint.yml`, `claude-books/docs/cert-coverage.md`, `claude-books/handbook/poc/COMPARISON.md`; existence confirmed for `claude-books/docs/guides-recon.md` + `claude-books/docs/landscape-2026-05.md`.
- `guides`-side anchors verified on disk: `docs/design/2026-05-23_design_v0.3.md` (§2.1/§2.2/§5), `docs/style-guide-v0.0.md` (§1/§9), `.github/workflows/` (4 files), `docs/research/` (9 dossiers; v2.2 file set confirmed on `transfer_evaluation_methods`), and the v0.4 `paradigms[]` concern in `docs/plans/active/2026-05-24_session_handoff.md`.
- Method: a two-agent Explore sweep + direct reads of the four cited artifacts. No code changes made by this memo.
