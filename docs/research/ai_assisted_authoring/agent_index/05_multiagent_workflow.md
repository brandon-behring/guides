# Multi-Agent Writing Workflows & Orchestration — Synthesis

Multi-agent collaboration patterns for writing-adjacent tasks. Source: dossier `05_multiagent_workflow.md`.

---

## E1. Multi-Agent Debate & Simulation

- **Multi-Agent Debate** — Du et al. (ICML 2024).
  - **Source:** https://arxiv.org/abs/2305.14325
  - **Code:** —
  - **Mechanism:** Has multiple LLM instances independently generate answers, then critique each other's outputs across rounds of structured debate, with a final aggregation step yielding the consensus response.
  - **Result:** Canonical multi-agent-debate paper for improving factuality and reasoning; directly motivates editor-vs-author and fact-checker-vs-author agent patterns in writing pipelines.
  - **Status:** Unverified (no widely-known repo).

- **Generative Agents** — Park et al. (UIST 2023).
  - **Source:** https://arxiv.org/abs/2304.03442
  - **Code:** https://github.com/joonspk-research/generative_agents
  - **Mechanism:** Simulates a population of LLM-driven agents with persistent memory, reflection, and planning loops in a sandbox environment that supports inter-agent interaction.
  - **Result:** Influential reference for multi-agent coordination primitives (memory, reflection, role-assignment); cited as inspiration for skill-orchestration frameworks that compose specialised LLM roles.
  - **Status:** Unverified.

## E2. Orchestration Frameworks

- **AutoGen** — Wu et al. (arXiv 2023).
  - **Source:** https://arxiv.org/abs/2308.08155
  - **Code:** —
  - **Mechanism:** Framework for composing multiple LLM agents (and optional human-in-the-loop participants) into conversational workflows with customizable agent roles and turn-taking logic.
  - **Result:** One of the canonical multi-agent orchestration frameworks; influential abstraction for composing writing pipelines where each phase (research, draft, edit, fact-check) is a distinct agent role.
  - **Status:** Unverified (no widely-known repo).

- **MetaGPT** — Hong et al. (arXiv 2023).
  - **Source:** https://arxiv.org/abs/2308.00352
  - **Code:** —
  - **Mechanism:** Multi-agent framework that assigns standard-operating-procedure roles (product manager, architect, engineer) to LLM agents and constrains their interaction to documented hand-offs between phases.
  - **Result:** Demonstrates role-specialization-via-SOP as a coordination pattern; the SOP framing is transferable to writing pipelines (researcher → drafter → editor → fact-checker) where each role's deliverable is well-specified.
  - **Status:** Unverified (no widely-known repo).

- **ChatDev** — Qian et al. (arXiv 2023).
  - **Source:** https://arxiv.org/abs/2307.07924
  - **Code:** https://github.com/OpenBMB/ChatDev
  - **Mechanism:** Multi-agent framework simulating a software-development company with specialized agents collaborating across phases (requirements, design, coding, testing).
  - **Result:** Working multi-agent system demonstrating waterfall-style phase decomposition with LLM agents; a reference pattern for chapter-authoring pipelines that decompose the work across specialized roles.
  - **Status:** Unverified.

---

**Notes:** Sub-section split distinguishes empirical debate-style research (E1) from production-style orchestration frameworks (E2). LangChain, CrewAI, and Claude Code Skills documentation referenced in the research_plan are deferred to second-pass /research-gather; the Claude Code Skills layer is the most direct downstream consumer of these patterns.
