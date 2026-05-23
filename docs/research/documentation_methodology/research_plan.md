# Research Plan: Documentation Methodology

Discover primary sources on how technical documentation is organized (Diátaxis), how Open Educational Resources (OER) are designed and adopted, and how Docs-as-Code communities approach version-controlled reference works. Output complements `technical_book_design` (which covers book-form authoring) by covering the documentation-organization layer — what makes a *system* of guides discoverable, navigable, remixable, and sustainably maintained. Feeds the style guide v0.0 with conventions for chapter classification (tutorial / how-to / reference / explanation), attribution + remix policies, contribution-flow design, and hypertext cross-link discipline. Target: heavy dossier (~200-300 entries), 5 sub-areas.

## Sub-areas

- A1. Diátaxis + documentation-organization frameworks
  - Source types: framework primary docs (diataxis.fr — Procida), conference talks (PyCon AU 2019, Write the Docs Portland), application case studies (Django docs, NumPy docs, Cloudflare docs), critical responses, predecessor frameworks (Information Mapping, DITA)
  - Notes: Daniele Procida's Diátaxis framework — four documentation types (tutorial / how-to / reference / explanation) with distinct purposes (learning / task / information / understanding) and different user modes (acquiring skill / applying skill / acquiring knowledge / applying knowledge). The framework's adoption pattern across major OSS projects (Django, NumPy, Cloudflare). When Diátaxis fits and when it doesn't (anything more linear-narrative). Specifically: how an interview-prep guide maps to the Diátaxis quadrants — is a chapter on CUPED a *reference* (looking up the formula), an *explanation* (understanding the variance reduction), a *tutorial* (learning to apply it), or all three? This classification might inform chapter-shape decisions. Also: predecessor frameworks like Information Mapping (Horn 1976) and DITA (OASIS standard) for completeness.

- A2. Open Educational Resources (OER) — research literature
  - Source types: peer-reviewed journals (Open Praxis, J. Interactive Online Learning, Open Learning), Hewlett Foundation / William & Flora Hewlett-funded research, Open Education Group studies (Hilton, Wiley), OER Commons curation studies, BCcampus OpenEd evaluations
  - Notes: OER literature defines + studies how educational materials become genuinely usable beyond their author. The 5R framework (Wiley) — Retain / Reuse / Revise / Remix / Redistribute. Research on OER efficacy (student outcomes when OER replaces traditional textbooks — Hilton 2016/2020 meta-analyses). The "permission cost" tradeoff between CC BY (max permissions) vs CC BY-SA (copyleft) vs CC BY-NC (no commercial). What attribution-by-design looks like — making it easy for downstream remixers to credit you. Relevant because the new guides repo is explicitly CC BY 4.0 / open educational resource per user vision.

- A3. Open-textbook adoption + sustainability signals
  - Source types: OpenStax adoption data, BCcampus OpenEd outcomes reports, Pressbooks usage analytics, Open Textbook Library reviews, faculty-adoption survey research (PIRG, BCcampus), longitudinal sustainability studies
  - Notes: What makes an OER actually adopted (vs sitting in a repository unused)? Predictors of adoption — quality bar, discoverability, alignment to common syllabi, supporting materials (slide decks, problem sets), maintainer responsiveness. Sustainability — what causes OER to be abandoned (single-maintainer fragility, lack of platform support, drift from current pedagogy). The "remix" reality — how often OER is actually remixed vs adopted verbatim (often verbatim per surveys). Relevant for our framing: realistic expectations about reach, and design choices that aid adoption (e.g., clean attribution, MDX-as-source, .apkg companion).

- A4. Docs-as-Code culture + workflow patterns
  - Source types: Write the Docs community (writethedocs.org — talks, conference proceedings, podcast, Slack archives), GitLab Docs / Cloudflare Docs / Stripe Docs / Vercel Docs case studies, "Docs as Code" book (Gentle, 2017), CI/CD for documentation (Read the Docs, Vercel previews, Netlify deploy previews for docs PRs)
  - Notes: Documentation in version-controlled repositories, reviewed via PRs, built in CI, deployed continuously. The cultural patterns — treating docs as engineering work; developer-author collaboration; the role of technical writers as code reviewers vs upstream authors. Tool-agnostic patterns (the "Docs as Code" book covers Sphinx, MkDocs, Hugo, Jekyll, GitBook, etc.). Specifically the *review workflow* — what works for reviewing prose-heavy PRs (line comments vs diff-of-rendered-output), versioned doc snapshots, and "merge → deploy preview → review → merge prod" patterns. Highly relevant for the planned solo-with-PR contribution model.

- A5. Hypertext + cross-link patterns for technical reference works
  - Source types: Andy Matuschak's evergreen-notes essays (notes.andymatuschak.org), Zettelkasten primary sources (Luhmann; Niklas Luhmann archive research), Vannevar Bush "As We May Think" (Atlantic 1945), TiddlyWiki + Obsidian community patterns, MIT OCW design notes, Wikipedia editorial guidelines on cross-linking
  - Notes: The "linked notes vs hierarchical book" question — when does dense cross-linking add value vs add cognitive load? Andy Matuschak's evergreen-notes principles (concept-oriented, densely linked, prefer association over hierarchy) and their applicability to a multi-guide repo (every guide is a "note cluster"; cross-guide hyperlinks become evergreen links). The Zettelkasten tradition — atomic notes, unique IDs (note IDs that survive renaming = stable anchors). Wikipedia's editorial conventions on internal linking — "first mention only" vs "every relevant mention," when to disambiguate. Specifically how this informs the `<XRef id="guide:semantic-id">` convention and when to use it. Edge case: the line between "a cross-link" and "a bibliographic citation" (do we use `<Cite>` for our own prior chapters? No — `<XRef>` for internal, `<Cite>` for external).

## Out-of-scope

- Generic "writing better docs" listicle / blog-post content — low signal, will pollute the gather step
- Documentation-tooling vendor-specific config (RTD vs MkDocs vs Quarto vs Astro Starlight setup) — Astro is already picked
- API-reference documentation standards (OpenAPI, Doxygen, Javadoc) — different artifact type, not relevant
- Patent / legal documentation conventions
- Children's educational material design (covered explicitly out-of-scope in `learning_pedagogy` too)
- Wiki software architecture / engineering (MediaWiki, DokuWiki implementation) — implementation, not method
- Internal company-wiki best practices (Notion / Confluence) — different audience, different incentive structure
- "Memex" and pre-web hypertext history except as it informs current practice (Vannevar Bush 1945 is in scope; Ted Nelson Xanadu deep history is not)
- Knowledge management / personal-PIM research (Roam, Obsidian usage patterns at the personal level) — covered indirectly via evergreen-notes if relevant

## Claim family taxonomy

- `docs_framework` — Diátaxis, DITA, Information Mapping, and other doc-type-classification frameworks
- `oer_research` — Open Educational Resources literature: efficacy, adoption, definitions, 5R framework
- `oer_adoption` — what makes OER actually adopted + sustained vs abandoned
- `docs_as_code` — version-controlled, CI-deployed, PR-reviewed documentation culture
- `hypertext_patterns` — cross-link discipline, evergreen-notes, Zettelkasten, encyclopedia-style internal linking

## Known landmark papers

- `procida_diataxis` — Procida, "Diátaxis: A systematic framework for technical documentation authoring" (diataxis.fr, ongoing). The framework primary source; adopted across major OSS projects.
- `hilton2016cost` — Hilton, John (2016) "Open Educational Resources and college textbook choices: A review of research on efficacy and perceptions" (*ETR&D*). Major meta-analysis of OER efficacy research; reads as the field's consensus state.
- `wiley_5r` — Wiley, David — "Defining the 'Open' in Open Content and Open Educational Resources" (opencontent.org). Canonical 5R framework (Retain / Reuse / Revise / Remix / Redistribute).
- `gentle2017docsascode` — Gentle, Anne (2017) *Docs Like Code* (2nd ed). Canonical reference for the docs-as-code workflow + tooling-agnostic patterns.
- `matuschak_evergreen` — Matuschak, Andy — "Evergreen notes" (notes.andymatuschak.org). Modern reference for densely-linked concept-oriented note systems; directly informs cross-guide `<XRef>` discipline.
- `bush1945memex` — Bush, Vannevar (1945) "As We May Think" (*Atlantic*). Foundational pre-web hypertext essay; cited as origin of associative-linking traditions.
- `horn1976mapping` — Horn, Robert (1976) — Information Mapping. Predecessor framework to Diátaxis worth noting for historical context.
