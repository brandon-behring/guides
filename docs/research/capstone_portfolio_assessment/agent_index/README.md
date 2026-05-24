# Capstone + portfolio assessment — Research Synthesis

<!-- AGENT-INDEX: this folder is a self-contained reference for capstone + portfolio assessment. Read this README first. -->

**Purpose:** Ground future LLM-agent work on capstone scoping, ePortfolio design, rubric construction, and competency-based credentialing in the relevant primary literature.
**Primary intended consumer:** future Claude Code / LLM agents working on `~/guides-experimentation/capstone/` (Phase 1.5) and adjacent chapter-authoring tasks that need to back design v0.3 §2.4 claims.
**Self-containedness guarantee:** this folder has no hard dependence on sibling files outside itself.
**Scope:** pre-LLM-era authentic-assessment / portfolio / competency-based credentialing literature (Wiggins 1998 → 2024); 48 entries across 6 sub-areas.
**Coverage:** 48 entries, structured 5-bullet entries (Source / Code / Mechanism / Result / Status / Evidence).
**Last updated:** 2026-05-24.

## ⚠️ Scope boundary

This dossier covers **portfolio-style capstones and project-based assessment design** in higher education and professional credentialing. It does NOT cover:

- **K-12 portfolio assessment** — different audience, accountability structure, and validity frameworks. 
- **Pure psychometric theory** (IRT, factor analysis, item-response modeling) — see general educational-measurement references, not this dossier.
- **LLM-coached self-assessment** — owned by the sister `llm_as_coach_interfaces` dossier (`../llm_as_coach_interfaces/agent_index/`). This dossier cites that one when needed but does not duplicate.
- **Cognitive-load / learning-pedagogy theory** — sister `learning_pedagogy` and `transfer_evaluation_methods` dossiers.
- **Multi-paradigm presentation design** — sister `multi_paradigm_presentation` dossier.

**Cross-vol overlap convention:** entries methodologically relevant to multiple research dossiers (e.g., the AAC&U VALUE rubrics, which touch both authentic-assessment AND ePortfolio design) live in ONE primary location keyed by claim_family. Do NOT duplicate.

## How this is organized

Sub-section anchors are per-file (A1.1, A1.2 in `01_authentic_assessment.md`; A2.1, A2.2 in `02_capstone_design.md`; etc.).

| File | Topic | When to read |
|---|---|---|
| `00_overview.md` | Scope + glossary + navigation | Start here if new to portfolio/capstone assessment |
| `01_authentic_assessment.md` | Wiggins, Messick, Newmann, Gulikers framework | When designing authentic performance tasks |
| `02_capstone_design.md` | Engineering / CS / SE capstone design | When scoping a capstone course or comparing models |
| `03_eportfolios.md` | ePortfolio implementation + Catalyst framework | When designing a longitudinal ePortfolio program |
| `04_professional_certification.md` | Vendor certs + CBE + programmatic assessment | When comparing capstone outcomes to vendor credentials |
| `05_rubric_design.md` | Analytic vs holistic; reliability statistics | When designing or auditing a scoring rubric |
| `06_self_assessment.md` | Schön, Boud, reflection + SRL | When designing reflective-writing prompts |

## Lookup recipes

- **"What's the canonical reference for authentic assessment?"** → `01_authentic_assessment.md` § A1.1 (Wiggins 1998, *Educative Assessment*).
- **"How do I operationalize 'authentic' for assessment design?"** → `01_authentic_assessment.md` § A1.6 (Gulikers et al. 2004 five-dimensional framework).
- **"What's the validity argument for authentic assessment?"** → `01_authentic_assessment.md` § A1.3 (Messick 1994, construct representation).
- **"Where's the empirical evidence that authentic pedagogy works?"** → `01_authentic_assessment.md` § A1.4 (Newmann, Marks & Gamoran 1996).
- **"Doesn't authentic assessment hurt standardized-test scores?"** → `01_authentic_assessment.md` § A1.5 (Newmann, Bryk & Nagaoka 2001, refutes the conflict assumption).
- **"What's the modern engineering capstone literature?"** → `02_capstone_design.md` § A2.2 (Dym et al. 2005) + § A2.4 (Howe & Wilbarger 2010, national survey).
- **"What's the systematic review of SE capstones?"** → `02_capstone_design.md` § A2.8 (Tenhunen et al. 2023, 127 articles).
- **"How do I map a capstone to ABET outcomes?"** → `02_capstone_design.md` § A2.5 (Meah, Hake & Wilkinson 2020, FSAE EV case study).
- **"What's the foundational ePortfolio research agenda?"** → `03_eportfolios.md` § A3.4 (Cambridge, Cambridge & Yancey eds. 2009, *Electronic Portfolios 2.0*).
- **"What's the Catalyst Framework?"** → `03_eportfolios.md` § A3.5 (Eynon & Gambino 2017, *High-Impact ePortfolio Practice*).
- **"What VALUE rubrics exist for ePortfolio assessment?"** → `03_eportfolios.md` § A3.1 (AAC&U VALUE rubrics canonical landing).
- **"Is the ePortfolio evidence base actually strong?"** → `03_eportfolios.md` § A3.3 (Bryant & Chittum 2013 — answer: mostly theory + practitioner accounts, thin empirical base).
- **"What's the standard for educational/psychological testing validity?"** → `04_professional_certification.md` § A4.1 (AERA/APA/NCME 2014 *Standards*).
- **"How does CBE / competency-based education claim mastery?"** → `04_professional_certification.md` § A4.4 (van der Vleuten et al. 2018, programmatic assessment).
- **"What does AWS / Google / CompTIA expect from ML/data certs?"** → `04_professional_certification.md` § A4.5–A4.8 (vendor cert exam guides).
- **"Analytic vs holistic rubrics — which is better when?"** → `05_rubric_design.md` § A5.2 (Brookhart 2013) + § A5.5 (Jonsson & Svingby 2007 review).
- **"Which interrater-reliability statistic should I report?"** → `05_rubric_design.md` § A5.8 (Stemler 2004 three-families framework). Kappa for nominal/2-rater; Krippendorff's alpha otherwise.
- **"What's wrong with reporting correlation as rubric IRR?"** → `05_rubric_design.md` § A5.4 (Hayes & Hatch 1999 pitfall).
- **"What's the reflective-practitioner framework?"** → `06_self_assessment.md` § A6.7 (Schön 1983) + § A6.8 (Schön 1987 practicum design).
- **"How do students self-assess accurately?"** → `06_self_assessment.md` § A6.2 (Andrade 2019 review — accuracy limits for novices) + § A6.1 (Andrade & Valtcheva 2009 three-step formative process).
- **"What connects metacognition to portfolio reflection?"** → `06_self_assessment.md` § A6.8 (Zimmerman 2002 SRL model).

## Glossary

See `00_overview.md § Glossary` for canonical term definitions.

## Verification & limits

- Citations resolved as of 2026-05-24.
- Strict-live v2.2 evidence IDs present. See `../evidence_ledger.yml`, `../cache_manifest.yml`, `../claim_graph.jsonl`, and `pre_selection_manifest.yml`.
- All entries default to `status: unverified` (per /research-gather convention). Promotion to `verified` happens via /dossier-audit (deferred).
- This synthesis is a snapshot. Vendor certification pages (AWS, Google Cloud, CompTIA) evolve frequently — re-check before citing specific exam blueprints or pricing.
- Three sources required Playwright-escalation re-caching during Phase D depth-expansion (2026-05-24): batson2017fieldguide, bryant2013eportfolioeffectiveness, rhodes2014valuerubrics. Original AAC&U / theijep.com URLs returned 404 or expired-SSL; canonical alternatives substituted.

## Attribution

Synthesized from a research dossier maintained by the research_toolkit (`~/Claude/research_toolkit/`, v2.4.0+). URLs link to primary sources (publishers, DOIs, ERIC, AAC&U, AAEEBL, vendor docs). No local file paths are referenced.
