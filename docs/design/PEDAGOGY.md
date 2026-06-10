# Pedagogy playbook

**Status**: Author-facing digest, maintained in lockstep with the design doc. Created
2026-05-24 as **P2** of an internal cross-pollination review of a sibling project on the same
scaffold (memo kept local; the playbook shape is borrowed, the content re-grounded for
interview-prep).

> **This is not a new source of truth.** It *distills + indexes* decisions made elsewhere so
> a new author can act confidently. For the *why*, read design v0.3; for *authoring rules*,
> the style guide; for *user-facing philosophy*, the methodology page. The doc-fit map is §5.

---

## §0 What this is

A single place to answer: *"What's been decided, what's still open, and how do I write a
guides chapter that honors those decisions?"* Three audiences:

1. **New authors** picking up chapter work — read §1–§2 before drafting; consult §3 for what's
   locked vs open.
2. **v0.4 design reviewers** — §3 is the consolidated decision log; §4 is how to resolve open
   questions.
3. **Methodology adopters** — §1's principles are the transferable core.

Pointers (full map in §5): design v0.3 (`docs/design/2026-05-23_design_v0.3.md`) = decisions +
research rationale · style guide (`docs/style-guide-v0.0.md`) = authoring rules · methodology
(`src/content/frontmatter/methodology.mdx`) = user-facing.

---

## §1 Visual-presentation principles

Eight principles, grounded in guides' *own* research (the `multi_paradigm_presentation`,
`technical_book_design`, `documentation_methodology`, and `transfer_evaluation_methods`
dossiers) and the decisions in design v0.3 §2.1–§2.2. Each is stated as a rule + how it lands
in a guides chapter. (These are re-derived for an interview-prep / math-stats /
transfer-over-retention context — *not* copied from the sibling project's set.)

1. **Concrete scenario before formal machinery.** Open a hard concept with a "what would you
   do?" case, then formalize. *Grounds*: design v0.3 §2.1b (productive failure, `kapur2008productive`)
   + PFL (`schwartz2005efficiency`). *Lands as*: e.g. experimentation ch 4 opens on a real A/B
   outcome before the hypothesis-testing apparatus.

2. **Two-level disclosure, no deeper.** Primary prose for everyone + at most one optional depth
   layer (a collapsible `<WorkedExample>` or a margin note). No nested disclosure. *Grounds*:
   `documentation_methodology`, `technical_book_design` dossiers.

3. **Every key concept reachable via ≥2 paradigms — complementary, not redundant.** Pair prose
   with symbolic/visual/code/tabular; never duplicate the *same* information in prose AND
   on-screen text (Mayer redundancy violation). *Grounds*: design v0.3 §2.2 — `cast2018udl`,
   `mayer2014cambridge`, `paivio1991dual`. *Lands as*: the `paradigms[]` frontmatter rule (≥2).

4. **Signal over decoration.** Every margin note carries one of the 9 semantic categories; no
   decorative callouts; cut "seductive details" (Mayer coherence). *Grounds*: style guide §1+§2;
   evidence-tier discipline (§4).

5. **One organizing axis per level.** Guide = topic; chapter = concept progression; section =
   learning outcome; callout = semantic category. Don't mix axes within a level.

6. **One chapter template (small multiples).** Same section spine across chapters so the learner
   learns the shape once: *scenario → intuition → formal machinery → worked example → margin-note
   scaffolding → stretch problem*. *Grounds*: `technical_book_design` dossier.

7. **First word and first sentence carry the scan.** Headings lead with the distinctive content
   word; each section opens with its claim, not its plan; ≤5 bullets per list. *Grounds*:
   `documentation_methodology` dossier.

8. **Match form to learner need.** Chapter = learn; margin notes = interview/exam signal;
   cross-refs = navigate; capstone = *demonstrate transfer*. Don't inline what belongs in the
   capstone (design v0.3 §2.4).

---

## §2 Four-layer authoring model

Each layer maps a learner need to the concrete guides tool that serves it.

**Layer 1 — Chapter architecture.** *"Where does this chapter sit, and what must it declare?"*
Frontmatter: `mode: retention | transfer | both`, `paradigms[]` (≥2; §2.2), `los[]` (Bloom-tagged
outcomes), target audience, load targets. PFL ordering for hard chapters (§2.1b). Per-guide
capstone link (§2.4). Tools: design v0.3 §2.1–§2.4 + the chapter frontmatter schema in
`guides-experimentation/src/content.config.ts`.

**Layer 2 — Section authoring.** *"How does a section build a mental model?"* Section opens with
its claim sentence; ≥2 paradigms for any non-trivial concept; one "stretch problem" per chapter
(usually closing; ch 4 opens with it). Tier-1 claims cite within 10 lines (style guide §4).

**Layer 3 — Callout vocabulary (rich; used sparingly).** `<MarginNote category="…">` across the
9 categories (Interview / Practice / Pattern / Formula / IC5 Signal / Cross-Ref / Warning / SOA /
Exam), `<KeyIdea>`, `<TryThis>`, `<Theorem>`, `<WorkedExample>`, `<ContrastingCases>`,
`<VariationCluster>`, `<Cite>`. A chapter that uses each callout once is doing it right; 12
margin notes in one section has lost the signal (25-word cap enforces density).

**Layer 4 — Micro (sentence/notation).** 25-word margin-note cap; Tier-1 citation proximity;
KaTeX for all math notation; signal a paradigm shift in prose ("In SQL, this is…"). Tools: style
guide §1/§4/§8.

---

## §3 Consolidated decision log

Every row traces to design v0.3 (`§n`), the session handoff ("v0.4 concerns"), or the style
guide. **Status drift is annotated** — where reality has moved since a decision was recorded, the
note says so. This log is the living view; the source docs are the archival snapshots.

### DECIDED — carried forward from v0.2 (design v0.3 §1)

| Decision | Date | Note |
|---|---|---|
| Path D transfer-over-retention as primary success criterion | predates v0.3 | Re-confirmed by `transfer_evaluation_methods`; `detterman1993transfer` tempers, doesn't reverse |
| Three-artifact framing (guides + style-guide/skills + scaffold) | predates v0.3 | Unchanged |
| CC BY 4.0 content + MIT scripts | predates v0.3 | Unchanged |
| Topic-named slugs (no volume numbers) | predates v0.3 | Unchanged |
| Per-guide repos (`guides-<slug>`) | predates v0.3 | `guides-experimentation` pilot validates |
| Multi-content-collection workaround until book-scaffold-astro#15 | predates v0.3 | See OPEN: multibook routing |
| AI-disclosure footer + /about page | predates v0.3 | Unchanged |
| Soft-drop launch posture | predates v0.3 | Unchanged |

*(v0.3 states all ~28 v0.2 locked decisions carry forward; the 8 above are the ones it names
explicitly. The remainder live in the archived v0.2 doc.)*

### DECIDED — research-backed specifications (design v0.3 §2)

| Decision | §  | Evidence | Note |
|---|---|---|---|
| PFL-style "stretch problem" per chapter | 2.1a | `schwartz2005efficiency` | ~10% chapter-length cost; tests transfer not recall |
| Productive failure for hard chapters (ill-structured first) | 2.1b | `kapur2008productive` | Experimentation ch 4 designated test case |
| Aspire to near/medium transfer, NOT far transfer | 2.1 | `detterman1993transfer`, `barnett2002when` | Constrains reading-track design |
| Canonical `paradigms[]` enum (visual/symbolic/code/prose/tabular/interactive) | 2.2 | `cast2018udl`, `mayer2014cambridge`, `paivio1991dual` | **See OPEN: enum is the design intent; the *schema* enum differs** |
| `paradigms[]` lint: ≥2 entries; warn if <2 or declared-but-absent | 2.2 | — | Depends on schema resolution (OPEN) |
| LLM-coach: expect ITS-class benefit, not magical gains | 2.3 | `vanlehn2011relative`, `khan2024efficacy` | Implementation deferred (see DEFERRED) |
| LLM-coach: Socratic, not authoritative; no mastery claims from interaction alone | 2.3 | — | Constraint locked; UI is Phase 2 |
| LLM-coach: must cite in-repo dossier bibkeys; hallucinated citations hard-fail | 2.3 | — | Constraint locked |
| Per-guide capstone artifact + cross-guide portfolio as transfer demo | 2.4 | `kuh2008high` | Phase 1.5 specifics deferred |
| Dossier-location pattern: pedagogy→hub, content→per-guide repo | 2.5 | Phase A/A.2 wrap-ups | Pilot has 2 content sub-dossiers |

### DECIDED — methodology-page update spec (design v0.3 §3, drives methodology v0.2)

| Decision | Note |
|---|---|
| Add "Research backing" section (11-dossier corpus) | methodology.mdx integration tracked in handoff (v0.2 in progress) |
| Add "Transfer model" section (Path D + PFL) | " |
| Add "Multi-paradigm presentation" section (`paradigms[]`) | " |
| Add "Provenance + audit trail" section (→ dossier `dashboard.md`) | " |
| Update AI-disclosure with §2.3 LLM-coach constraints | " |

### DEFERRED (design v0.3 §4)

| Item | Blocked on / next | Drift note |
|---|---|---|
| Far-transfer measurement instruments | Longitudinal portfolio data (Phase 1.5+) | Still open |
| AnkiCard integration timeline | book-scaffold-astro#16 | Committed to `<Card>` + `.apkg` |
| First-class multibook routing | book-scaffold-astro#15 | Workaround continues |
| Depth-expand thin dossiers (target 100–200) | `/research-gather` rounds | **✅ Substantially done 2026-05-24** — 4 thin dossiers → 177 entries (see handoff update) |
| PDF text-extraction completeness | research_toolkit#11 | `scripts/backfill_pdf_cache_text.py` workaround |
| Migrated-dossier v2.2 upgrade (5 v1-era) | Future re-gather | Each has `MIGRATION.md`; cite from v1 agent_index meanwhile |

### OPEN — v0.4 design questions (session handoff, 2026-05-24)

| Question | Surfaced | Candidate paths |
|---|---|---|
| `paradigms[]` schema↔design mismatch — schema enum is `[default\|udl\|srl\|andragogy]` (frameworks); v0.3 §2.2 specifies `[visual\|symbolic\|code\|prose\|tabular\|interactive]` (modes) | 2026-05-24 | (i) extend enum + document duality; (ii) rename to `pedagogical_paradigms[]` + add `presentation_modes[]` (recommended); (iii) `consumer:guides` issue upstream |
| `presentation_modes[]` lint rule (warn if <2 modes) | 2026-05-24 | Depends on the schema decision above |
| Capstone artifact contract shape | 2026-05-24 | Phase 1.5 owes a concrete spec (design v0.3 §2.4) |
| LLM-as-coach interface implementation contract | 2026-05-24 | Phase 2 (constraints locked in §2.3) |

### Authoring-rule decisions (style guide v0.0 — keep / change / drop)

| Rule | Status | Note |
|---|---|---|
| Margin notes (9-category) | keep | `\marginnote` → `<MarginNote category>`; density targets Phase-1-deferred |
| Content quality (7-condition test) | keep | "Interviewer test" + "name a company/level" unchanged |
| Citation quality | change | BibLaTeX → `<Cite>` via `build:bib`; 90%+ bibkey match target |
| Evidence standards (Tier 1/2) | keep | Citation proximity ≤10 lines; suppression → per-guide `_meta.yml` |
| Cross-reference quality | keep | Semantic kebab anchors per design v0.3 §1 |
| Term consistency | keep | MDX mechanism (def-list vs `<Term>`) is a Phase-1 decision |
| LOS standards | change | Frontmatter `los[]` (id/bloom/statement/anchor/threshold) |
| Code quality | change | `minted` → fenced blocks; 0 syntax errors in Python target |
| Content freshness | change | `_meta.yml.freshness` + `<DatedContent>` |
| Card taxonomy / Card presentation | drop (hub) / Phase 1+ (per-guide) | Anki-specific; applies when `.apkg` ships |
| LaTeX environments | drop | Replaced by scaffold/Tier-2 components |

---

## §4 v0.4 decision-making heuristics

When a new question arises, place it on a layer, then evaluate it:

| Layer | Ask | Example | v0.3 precedent |
|---|---|---|---|
| Paradigm / architecture | "Does this change what a guide or chapter *is*?" | Numbered parts? | Path D transfer model (§2.1) |
| Methodology | "Does this change the authoring workflow or the evidence bar?" | "Cite a content dossier per chapter?" | LLM-coach citation rule (§2.3) |
| Authoring rule | "Does this change an author's day-to-day practice?" | "Max margin notes per section?" | 9-category margin notes (style guide §1) |
| Nice-to-have | "Improves reader experience without touching the spine?" | Per-chapter glossary sidebars? | Deferred pending pilot evidence |

**Process**: (1) higher layers cascade — settle architecture before rules. (2) Trace the
decision to dossier evidence; if the evidence is thin or contested, **defer + flag the dossier
for depth-expansion** rather than guess. (3) For authoring-rule questions, **prototype in the
next chapter draft before locking** (the style guide's v0.0→v0.1→v1.0 lifecycle exists for this).

---

## §5 Doc-fit — where to look (and what not to re-read)

| You need… | Go to | Don't re-read |
|---|---|---|
| *Why* a decision was made + its research backing | design v0.3 + the cited dossier | this playbook (it only points) |
| The concrete authoring rule / component mapping | style guide v0.0 + §2 here | design v0.3 (too dense for daily use) |
| *User-facing* philosophy (what a learner/contributor reads) | methodology.mdx | this playbook (internal) |
| What's locked vs still open, right now | §3 here (living) | design v0.3 §4 (archival snapshot) |
| Onboarding context as a new author | this playbook (§1–§4) | — |

---

## §6 Maintenance

- Update this log **in lockstep with design rounds**: a PR that locks/reverses a decision must
  update §3 in the same commit. Move resolved OPEN/DEFERRED rows into DECIDED (keep the date).
- Never silently delete a reversed decision — strike it through and add the superseding row.
- Once per design round, **drift-check** §3 against the live design doc + handoff (this is how
  the "depth-expand dossiers" drift above was caught).
- When a guide ships chapters, revisit §1–§2: principles validated in practice graduate from
  "stated" to "load-bearing"; ones that don't hold get revised.
