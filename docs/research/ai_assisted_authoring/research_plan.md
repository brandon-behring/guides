# Research Plan: AI-Assisted Authoring

Discover primary sources on LLM-assisted technical writing — efficacy studies, disclosure norms, human-in-the-loop collaboration patterns, style-guide-enforced AI agents, multi-agent writing workflows, and evaluation of AI-assisted vs human-only writing quality. Output grounds the *methodology* layer that is itself part of the artifact ("how they were made" framing). Feeds the design of `.claude/skills/` for chapter authoring, the AI-disclosure copy on the About page, the style-guide rules that AI agents must conform to, and the evaluation rubric for "validated" status. Target: heavy dossier (~200-300 entries), 6 sub-areas.

## Sub-areas

- A1. LLM-assisted writing efficacy + research literature
  - Source types: peer-reviewed studies (CHI, EMNLP, ACL, NAACL, *Science*, *PNAS*), preprints (arXiv cs.CL + cs.HC), industry studies (GitHub, Microsoft, Anthropic, OpenAI), longitudinal productivity studies
  - Notes: The empirical evidence base on whether LLM-assisted writing produces better/faster/different output than unassisted writing. Foundational: Noy & Zhang (2023, *Science*) randomized study showing 37% time reduction + quality lift on midlevel professional writing. Follow-ups: domain-specific studies (legal writing, scientific writing, code documentation). Efficacy variance by task type (drafting vs editing vs ideation), expertise level (novice writers benefit most), and task complexity. Critical: claims about *quality* vs *speed* — speed gains are well-replicated, quality is more contested. Studies that compare AI-assisted to human-only blind-evaluated.

- A2. AI disclosure norms — publisher, academic, and platform guidelines
  - Source types: ACM Authorship Policy, IEEE author guidelines, *Nature* / *Science* / Cell / JAMA policies, Committee on Publication Ethics (COPE) guidance, Elsevier guidelines, university honor codes (selected — Harvard, MIT, Stanford), publishing-house policies (O'Reilly, Manning, MIT Press), Substack / Medium disclosure norms, ICML / NeurIPS author guidelines (the AI-in-papers debates)
  - Notes: What does responsible AI disclosure actually look like in 2025-26? The space ranges from "no AI use allowed" (some journals) to "AI tools acceptable for editing only" (most) to "AI as collaborator with disclosure" (emerging). Specifically: how publishers handle AI as a non-author contributor (most policies: AI cannot be listed as author; human authors retain responsibility). How disclosure copy is conventionally worded ("ChatGPT was used to draft the initial version of section 3, reviewed by the authors"). The distinction between AI-as-editor (low disclosure bar) vs AI-as-coauthor (high disclosure bar). Relevant: what's the right disclosure standard for a CC BY 4.0 open educational resource?

- A3. Human-in-the-loop authoring patterns
  - Source types: HCI research (CHI, CSCW, UIST), product literature (Copilot for Microsoft 365 design rationale, GitHub Copilot Workspace, Anthropic agentic-writing patterns, Cursor / Lex / Granola product docs), user-study papers on multi-turn editing
  - Notes: How humans + LLMs actually collaborate in practice. The "drafting → editing → refining" multi-turn pattern; the role of the LLM as ideator vs editor vs critic. Studies of effective prompt strategies for writing tasks (chain-of-thought for outlines; structured-output for sections). The "co-pilot" framing (assistance, not replacement) vs "agent" framing (autonomous tasks). Interface patterns that work — inline suggestions vs side-panel chat vs structured-output forms. Important: research on when humans *over-trust* AI suggestions (automation bias in writing) and the design responses to that.

- A4. Style-guide-enforced AI agents + constraint-based generation
  - Source types: alignment research (Anthropic Constitutional AI, OpenAI RLHF + spec, Google DeepMind alignment), prompt-engineering research (Wei et al., Schick et al.), style-transfer research (Pang & Gimpel, neural style transfer for text), academic studies of constrained generation, Claude Code / Cursor rules-file systems
  - Notes: How do you get an LLM to write in a specific style? The empirical answer space: detailed system prompts; few-shot examples; constitutional principles; fine-tuned models; rule-based post-processing; agent loops with self-critique. Anthropic's constitutional AI (Bai et al. 2022) as the canonical "principles-encoded-as-prompt" foundation. The current state of style adherence — what works for "Tufte typography in writing voice", "no first-person employer claims", "citations always backed by bib entry". The Claude Code `.claude/rules/` pattern as an emerging convention. The evaluation gap — how do you actually test that an LLM-written chapter conforms to a 10-page style guide?

- A5. Multi-agent writing workflows + skill orchestration
  - Source types: emerging multi-agent research (Park et al. generative agents, Wu et al. multi-agent debate, Du et al. improving factuality via debate), agent-framework literature (LangChain, CrewAI, AutoGen, MetaGPT papers), Claude Code Skills documentation, ChatGPT's Custom GPT patterns, applied use cases
  - Notes: When does multi-agent workflow beat single-agent for writing? The debate literature (Du et al. 2023) — multiple agents critiquing each other improve factuality. Applied to writing: editor-agent + author-agent + fact-checker-agent patterns. Claude Code Skills as a concrete instantiation of this — composing skills like `/author-chapter` + `/citation-check` + `/style-lint`. Tradeoffs: latency vs quality; coordination overhead; the failure modes (agents miscommunicating; consensus on wrong answers). Specifically: how the planned `.claude/skills/` would look — what skills, what composition pattern, what evaluation.

- A6. Evaluation: AI-assisted vs human-only writing quality
  - Source types: rubric-based evaluation studies (Gao et al. 2022 ChatGPT abstracts, follow-ups), human-judgment blind studies, AI-text-detection research (DetectGPT, GPTZero, watermarking), expert-rater studies of AI-written technical material, education research on AI-tutor / AI-author outputs
  - Notes: The two-pronged evaluation question: (1) can blind raters tell the difference, (2) when they can, does it matter (does AI-flagged text correlate with quality deficits)? Gao et al. 2022 — blind judges identified AI-generated scientific abstracts at high rates BUT also rated them as high quality. The detectability research (DetectGPT, watermarking) — increasingly unreliable as models improve. What this means for the guides project: detection by readers becomes irrelevant if disclosure is upfront; the question shifts to *quality* (does the chapter teach effectively?) and *trustworthiness* (are citations real?). Specifically: how validation should evaluate AI-assisted chapters — same rubric as human-written, plus check for hallucinated citations + made-up statistics.

## Out-of-scope

- Generic "ChatGPT for productivity" listicle / blog-post content — low signal
- AI-generated-content detection for academic-fraud / plagiarism — different domain, different incentive
- Image / video generation (DALL-E, Midjourney, Sora, etc.) — different modality
- Coding-Copilot studies (GitHub Copilot for code, not prose) — adjacent but different evaluation; covered partly in §A1 if writing/docs-specific
- Marketing-copy / SEO-content-farm patterns — different objective, low quality bar
- General LLM-capability papers (GPT-4 / Claude / Gemini benchmarks) — too broad; we want application-specific to writing
- Children's-content / education-aimed AI tools (different audience)
- AI-as-tutor research (ITS, intelligent tutoring) — sibling to learning_pedagogy, deserves separate scoping
- Pure alignment/safety research without writing application — covered in vol25_prompt_injection if relevant
- Recent (post-2025) model-specific capability claims that may have drifted — flag with `(post-2025; recheck)` tier

## Claim family taxonomy

- `llm_writing_efficacy` — empirical evidence of LLM-assisted writing productivity + quality changes
- `disclosure_norms` — publisher, academic, platform AI-disclosure policies + evolving conventions
- `hitl_patterns` — human-in-the-loop interaction designs, multi-turn editing patterns, automation-bias mitigation
- `style_constraint` — how to get LLMs to conform to style guides; constitutional + prompt-based + agent-loop approaches
- `multiagent_workflow` — multi-agent debate / collaboration patterns for writing tasks
- `ai_writing_evaluation` — rubric design, blind-judge studies, detection, hallucination + citation-verification

## Known landmark papers

- `noy2023chatgpt` — Noy & Zhang (2023) "Experimental evidence on the productivity effects of generative artificial intelligence" (*Science*). The foundational randomized study; ~37% time reduction + quality lift on midlevel professional writing.
- `bai2022constitutional` — Bai et al. / Anthropic (2022) "Constitutional AI: Harmlessness from AI Feedback" (arXiv). Canonical reference for principles-encoded-as-prompt; directly relevant to style-guide-enforced AI agents.
- `gao2022comparing` — Gao et al. (2022) "Comparing scientific abstracts generated by ChatGPT to original abstracts using an artificial intelligence output detector, plagiarism detector, and blinded human reviewers" (bioRxiv, later *NPJ Digital Medicine*). Foundational blind-evaluation study.
- `acm_aitools_policy` — ACM Policy on Authorship and AI Tools (2023). Canonical disclosure policy from a major venue; widely adopted.
- `nature_aiauthorship_2023` — *Nature* / Springer Nature editorial on AI authorship + tools policy (Jan 2023, updated). Defining publisher stance.
- `du2023improving` — Du et al. (2023) "Improving Factuality and Reasoning in Language Models through Multiagent Debate" (arXiv). Canonical multi-agent-debate paper; informs style-checker-vs-author agent patterns.
- `park2023generative` — Park et al. (2023) "Generative Agents: Interactive Simulacra of Human Behavior" (UIST). Influential multi-agent-coordination work; cited for orchestration patterns.
