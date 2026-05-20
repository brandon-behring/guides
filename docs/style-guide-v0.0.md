# Style Guide v0.0

**Status**: Draft, pre-pilot. Each rule below is marked `keep` / `change` / `drop` per roadmap §6.3.
**Source**: Ported from `interview_prep_series/.claude/rules/` (the LaTeX-era style guide).
**Lifecycle**: v0.0 → v0.1 (Phase 1 end, refined from pilot authoring) → v1.0 (after 2 guides validated).

## How to read this

Each section below corresponds to one LaTeX-era rule file. Each section has:

- **Status**: `keep` (rule applies to MDX as-is), `change` (rule applies but mechanism differs), `drop` (LaTeX/Anki-specific)
- **MDX adaptation** (when `change`): how the rule translates
- **Source**: pointer to the original LaTeX-era rule
- **Phase 1 deferred**: items requiring pilot evidence before locking

## 1. Margin notes — `keep`

**Source**: `interview_prep_series/.claude/rules/margin-notes.md`

The 9-category system (`[Interview]`, `[Practice]`, `[Pattern]`, `[Formula]`, `[IC5 Signal]`, `[Cross-Ref]`, `[Warning]`, `[SOA]`, `[Exam]`) carries over verbatim. The mechanism switches from `\marginnote[Category]{text}` to:

```mdx
<MarginNote category="Cross-Ref">
For production permutation test code, see Vol 3 Ch 9.2 (DS-ST-9.2)
</MarginNote>
```

Quality rules unchanged: max ~25 words, one idea, actionable, consistent category. 4-group color routing (Danger / Action / Navigate / Signal) carries over via scaffold component styles.

**Phase 1 deferred**: density targets (1-2 / section foundations, 2-3 / section core methods) — reinterpret for chapter-length MDX vs LaTeX chapter sections.

## 2. Content quality — `keep`

**Source**: `interview_prep_series/.claude/rules/content-quality.md`

The seven-condition margin-note test (supplementary, non-redundant, not seductive, atomic, category-tagged, actionable, density-controlled) applies to MDX margin notes. Keyconcept boxes use `<KeyIdea>` (scaffold component) instead of `\begin{keyconcept}`; the "interviewer test" rule applies unchanged. Interview-context boxes use scaffold components; the "name a company or role level" rule applies. Actuarial-bridge cards use scaffold components when needed; the "where it breaks" section remains the most valuable.

**Phase 1 deferred**: quality dashboard targets (margin notes per chapter, keyconcepts per chapter, etc.) — recalibrate for MDX chapter shape.

## 3. Citation quality — `change`

**Source**: `interview_prep_series/.claude/rules/citation-quality.md`

LaTeX BibLaTeX → MDX with scaffold's `<Cite>` component fed by BibTeX `references.bib` → `npm run build:bib` → `src/data/references.json`. The 90%+ bibkey match-rate target carries over. `\textcite{}` → `<Cite key="..." inline />` or similar (per scaffold convention).

**MDX adaptation**:
- `\cite{kohavi2020}` → `<Cite key="kohavi2020" />`
- `\textcite{kohavi2020}` → `<Cite key="kohavi2020" inline />`
- `\footcite{kohavi2020}` → use `<MarginNote>` containing `<Cite>` (no direct footcite equivalent in MDX)

**Phase 1 deferred**: dangling-reference audit script for MDX (the LaTeX-era `audit_citation_quality.py` doesn't port directly).

## 4. Evidence standards — `keep`

**Source**: `interview_prep_series/.claude/rules/evidence-standards.md`

Tier 1 (must-cite specific percentages, named author/year, company practice claims, multiplier claims) and Tier 2 (should-cite soft quantifiers, causal claims, comparative claims, research attribution) apply unchanged. Citation proximity (within 10 lines of claim) applies. Suppression mechanism switches: instead of `docs/review/claim-suppressions.yml`, use per-guide `_meta.yml.claim_suppressions` array (Phase 1 spec).

**Phase 1 deferred**: tier-1 audit script port.

## 5. Cross-reference quality — `keep`

**Source**: `interview_prep_series/.claude/rules/crossref-quality.md`

Cross-ref format pattern: `<MarginNote category="Cross-Ref">For [topic], see [guides.brandon-behring.dev/guide/chapter](url) ([LOS prefix])</MarginNote>`. Validation rules (volume exists, chapter exists, LOS ID valid, no self-references) apply to MDX cross-refs.

**MDX adaptation**:
- Old: "Vol 1 Ch 4 (EXP-4.2)"
- New: "[experimentation:cuped-introduction](https://guides.brandon-behring.dev/experimentation/03-cuped/#cuped-introduction)" — semantic anchors per design doc §1

**Phase 1 deferred**: stable-anchor validation script (semantic anchors are kebab-case immutable per design doc lock).

## 6. Term consistency — `keep`

**Source**: `interview_prep_series/.claude/rules/term-consistency.md`

Within-guide duplicate tolerance (0), cross-guide inconsistency threshold (Jaccard < 0.5), canonical form rule (one authoritative definition per term) apply. Mechanism switches from `\term{name}{definition}` to MDX inline definition lists or a dedicated `<Term name="...">` component (TBD Phase 1).

**MDX adaptation**:
- LaTeX: `\term{CUPED}{Controlled-experiment Using Pre-Experiment Data...}`
- MDX option 1: standard markdown definition list (`CUPED\n: definition`)
- MDX option 2: scaffold-component `<Term name="CUPED" expansion="Controlled-experiment Using Pre-Experiment Data">...</Term>` (filed as upstream issue)

**Phase 1 decision**: pick option at pilot authoring.

## 7. LOS standards — `change`

**Source**: `interview_prep_series/.claude/rules/los-standards.md`

Bloom's taxonomy levels (define, explain, calculate, compare, analyze, design) and naming convention (`PREFIX-CHAPTER.NUMBER`) carry over. Mechanism switches:

**LaTeX**:
```latex
\begin{learningoutcomes}
  \los{EXP-1.1}{define}{State the null and alternative hypotheses}
\end{learningoutcomes}
```

**MDX (v0.2 schema)**: each chapter's `_meta.yml`-style frontmatter carries `los[]`:

```yaml
los:
  - id: EXP-1.1
    bloom: define
    statement: "State the null and alternative hypotheses"
    anchor: experimentation:null-alternative
    threshold: false
```

The cognitive-level-progression discipline (foundations 70/20/10, core 40/45/15, etc.) applies. Threshold-concept flag is new (per design doc v0.2 §10.9).

**Phase 1 deferred**: LOS coverage audit script port; per-guide LOS prefix registry.

## 8. Code quality — `change`

**Source**: `interview_prep_series/.claude/rules/code-quality.md`

LaTeX `minted` → MDX fenced code blocks (` ``` `). The classification taxonomy (`standalone` / `dependent` / `snippet` / `pseudocode` / `syntax_error`) and quality targets (0 syntax errors in Python blocks) apply.

**MDX adaptation**:
- LaTeX: `\begin{minted}{python}...\end{minted}`
- MDX: ```` ```python ` (with optional file path + line ranges for cross-references via scaffold's `<CodeRef>`)

**Phase 1 deferred**: Python AST syntax-check CI script for MDX fenced blocks.

## 9. Content freshness — `change`

**Source**: `interview_prep_series/.claude/rules/content-freshness.md`

Volume velocity classification (HIGH / MEDIUM / LOW) carries over per-guide via `_meta.yml.freshness` enum (`experimental-result`, `literature-survey`, `theoretical`, `reference`). `\datedcontent{YYYY-MM}{text}` LaTeX marker → MDX scaffold component `<DatedContent date="YYYY-MM">text</DatedContent>` (TBD upstream) or inline frontmatter freshness field.

**Phase 1 deferred**: staleness-detection audit script port.

## 10. Card taxonomy — `drop` for hub; `Phase 1+` for per-guide

**Source**: `interview_prep_series/.claude/rules/card-taxonomy.md`

Anki-specific. The card-types catalog (term / problem / vignette / cloze / etc.) and LOS-traceability policy apply when a per-guide repo ships an `.apkg` deck. The hub does not.

**MDX adaptation when card support lands** (Phase 1+):
- LaTeX: `\term{name}{def}` → `<Card type="term" front="..." back="..." />` (filed as scaffold issue)
- Card-extraction pipeline: `extract_cards.py` → MDX-AST traversal extracting `<Card>` blocks → `.apkg` via `generate_anki.py` (Phase 1 deliverable)

## 11. Card presentation — `drop` for hub; `Phase 1+` for per-guide

**Source**: `interview_prep_series/.claude/rules/card-presentation.md`

Anki-specific formatting rules (bullets, headers, whitespace, splitting criteria). Apply to per-guide `<Card>` extraction at Phase 1.

## 12. LaTeX environments — `drop`

**Source**: `interview_prep_series/.claude/rules/latex-environments.md`

LaTeX-only (`\begin{problem}`, `\begin{vignette}`, etc.). MDX uses scaffold components (`<MarginNote>`, `<KeyIdea>`, `<Theorem>`, etc.) or custom Tier 2 components per design doc v0.2 §15.2 (`<Card type="problem">`, `<ContrastingCases>`, `<VariationCluster>`, etc.).

## Cross-reference

- Original rules: `~/interview_prep_series/.claude/rules/*.md`
- Design doc: `~/interview_prep_series/docs/plans/active/2026-05-19_guides_design_rethink_v0.2.md`
- Phase 0b plan: `~/.claude/plans/continue-with-working-on-gentle-cocke.md`

## Next steps

- Phase 1: refine each `change` and `Phase 1 deferred` item from actual pilot authoring evidence
- Phase 1 end: promote v0.0 → v0.1 (revised from doing)
- Phase 2 end (after 2 guides): promote v0.1 → v1.0 (cross-guide stress-tested)
