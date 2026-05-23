# Multi-Agent Writing Workflows & Orchestration

This file covers multi-agent collaboration patterns for writing-adjacent tasks — debate, role specialization, and orchestration frameworks. Single-agent style-constraint methods live in `04_style_constraint.md`; co-writing interfaces with a single LLM live in `03_hitl_patterns.md`.

---

## E1. Multi-Agent Debate & Simulation

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| Improving Factuality and Reasoning in Language Models through Multiagent Debate | Du et al. (2023) | ICML 2024 | arXiv:2305.14325 | — | Has multiple LLM instances generate, critique, and revise answers across debate rounds, then aggregates the converged response | Canonical multi-agent-debate paper for improving factuality; directly motivates editor-vs-author and fact-checker-vs-author agent patterns in writing pipelines |
| Generative Agents: Interactive Simulacra of Human Behavior | Park et al. (2023) | UIST 2023 | arXiv:2304.03442 | joonspk-research/generative_agents | Simulates a population of LLM-driven agents with memory, reflection, and planning in a sandbox environment | Influential reference for multi-agent coordination patterns (memory, reflection, role-assignment); cited as inspiration for skill-orchestration frameworks |

## E2. Orchestration Frameworks

| Title | Authors (year) | Venue | arXiv/DOI | GitHub | One-line description | Key contribution |
|-------|----------------|-------|-----------|--------|----------------------|------------------|
| AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework | Wu et al. (2023) | arXiv preprint | arXiv:2308.08155 | — | Framework for composing multiple LLM agents (and human-in-the-loop) into conversational workflows with customizable agent roles | One of the canonical multi-agent orchestration frameworks; influential abstraction for writing-pipeline composition |
| MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework | Hong et al. (2023) | arXiv preprint | arXiv:2308.00352 | — | Multi-agent framework that assigns standard-operating-procedure roles (PM, architect, engineer) to LLM agents collaborating on software tasks | Demonstrates role-specialization-via-SOP as a coordination pattern; transferable to writing pipelines (researcher, drafter, editor, fact-checker) |
| ChatDev: Communicative Agents for Software Development | Qian et al. (2023) | arXiv preprint | arXiv:2307.07924 | OpenBMB/ChatDev | Multi-agent framework simulating a software-development company with specialized agents collaborating across phases | Working multi-agent system showing waterfall-style phase decomposition with LLM agents; reference pattern for chapter-authoring pipelines |

---

**Notes:** Sub-section split distinguishes empirical debate-style research (E1) from production-style orchestration frameworks (E2). LangChain, CrewAI, and Claude Code Skills documentation referenced in the research_plan are deferred to second-pass /research-gather. The /agent-index synthesis will cross-reference these orchestration patterns to the Claude Code skills layer.
