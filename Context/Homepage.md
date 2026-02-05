# **Claude Code Learning Path: From Pair Programmer to Agent Builder**

## **Path Overview**

This learning path is designed for technical developers who want to leverage Claude Code to produce tangible, immediate value in their work. Rather than walking through features abstractly, each lesson culminates in a real artifact, **something the learner builds, keeps, and uses**. The progression moves from using Claude Code as a powerful collaborator, to mastering the daily craft of debugging and testing, to customizing it for personal workflows, to building fully autonomous agents that extend a developer's reach. Every module is structured around application: learners don't just understand concepts, they apply them to their own codebases and workflows before moving on.

## **Learning Pedagogy**

The design of this learning path and subsequent modules were guided by a few foundational learning pedagogies:

* **Designed for the struggling AI enthusiast**: The materials are designed for the following learner persona:

| *“I like AI, but have limited knowledge of the tooling since everything is moving so fast. I want to build something that I can use IMMEDIATELY so that I can be more successful at my job. I like to learn, but I need it to be in chunks that have me apply the idea and see it in action quickly.”* |
| :---- |

* **Be a guide on the side, not a sage on the stage**: Trainers can love to be the source of knowledge for the room, but the most impactful learning comes from doing. Learners should hit the problem before they get a solution. Experiencing this problem leads to impactful learning.  
* **Build something that you can use**: All lessons must terminate in a product that learners can take away and apply in their roles. The audience of technical professionals want to see the value of these tools as quickly as possible. Learners are encouraged to work on their own codebases rather than pre-defined codebases from the instructor. The more they can build something they thought was impossible before they took this lesson, the better the learning will be.  
* **Artifacts over syntax**: Every module states what they'll walk away with: a working feature, a multi-step change, a demo. The goal here is to have hands on the keyboard and building and figuring out syntax as they need to learn it (not before).

## **System Architecture: Module Learning to Promote Maintenance at Scale**

The learning path has been designed foundationally to be maintainable at scale. With the rapid changes in AI tooling, this means we need discrete components that can be modified without breaking the entire system.

As such, the learning journey is broken into two components:

1. **Lessons** that teach a core skill that are made up of about 3 \- 6 modules   
2. **Modules** that teach a discrete discrete chunk of learning that is essential within the lesson.

This modular structure ensures maintainability as the technology changes over time. For example, if there is a change in the syntax for installing Claude Code via the command line, you only will need to change M2 in lesson 1 rather than the all of lesson 1\. Thus, the product does not degrade as the technology evolves. 

Modules are tagged with a volatility rating to understand how often these modules are likely to change given the current pace of changes to the AI models. The following table indicates how frequently each module's content is likely to require updates as Claude Code evolves. Use this to prioritize maintenance efforts and to flag content that trainers should verify before delivery.

| Volatility | Definition | Update Trigger | Examples |
| :---- | :---- | :---- | :---- |
| **Stable** | Core concepts, workflow patterns, design principles | Annual review or major paradigm shifts | What makes an agent, TDD principles, task scoping strategies |
| **Moderate** | Features that exist but whose syntax or interface may change | Review within 30 days of Claude Code releases | Slash command structure, CLAUDE.md conventions, headless mode concepts |
| **Volatile** | Cutting-edge features, specific command syntax, configuration details | Review within 2 weeks of any Claude Code release | Specific CLI commands, MCP server configuration, permission flag syntax |

# **Claude Code Learning Pathway**

The Claude Code learning pathway consists of 5 lessons that are built using 21 modules. The lessons in this learning pathway are:

* **Lesson 1**: Ship Something Today  
* **Lesson 2**: Claude as Pair Programmer  
* **Lesson 3**: Make It Yours  
* **Lesson 4**: Understand and Run Agents  
* **Lesson 5**: Extend Your Agent with Hooks   
* **Lesson 6**: Give Your Agent Reach

Given our learning pedagogy, each of these lessons terminates in an artifact that they can immediately use on the job and/or as a showcase of their knowledge of Claude Code.

| Lesson | Title | Artifact |
| :---- | :---- | :---- |
| 1 | Ship Something Today | Feature, fix, or new project in learner's codebase |
| 2 | Claude as Pair Programmer | Test suite for a real codebase module |
| 3 | Make It Yours | Custom slash commands and CLAUDE.md configuration |
| 4 | Understand and Run Agents | Autonomous agent running in headless mode |
| 5 | Extend Your Agent with Hooks | Agent with dynamic event-driven behaviors |
| 6 | Give Your Agent Reach | Agent integrated with external tools via MCP |

## **Lesson 1: Ship Something Today**

*Lesson Outcome: Learners leave with a tangible output built in their own codebase*

| Module | Learning Goal(s) | Volatility |
| :---- | :---- | :---- |
| **M1: What Claude Code Is** | Learners will *distinguish* Claude Code from other AI coding tools and *identify* the conversational, agentic model that enables rapid development. | Stable |
| **M2: Setup & Shipping a Feature** | Learners will *configure* Claude Code in their environment, *demonstrate* basic commands to verify successful installation, and *create* a small, scoped addition to a codebase (e.g., a utility function) to experience the core workflow. | Volatile |
| **M3: Context & Codebase Awareness** | Learners will *analyze* how Claude Code builds understanding of a codebase and *apply* strategies for scoping context effectively, drawing on their Quick Win experience. | Moderate |
| **M4: Build Sprint** | Learners will *create* a functional feature, fix, or utility within their own codebase, *evaluating* outputs and iterating toward production-ready code. | Stable |

## **Lesson 2: Claude as Pair Programmer**

*Lesson Outcome: Learners leave with a test suite for a real module in their codebase*

| Module | Learning Goal(s) | Volatility |
| :---- | :---- | :---- |
| **M1: Debugging with Claude Code** | Learners will *apply* systematic approaches to diagnose bugs collaboratively with Claude Code, and *evaluate* when to provide more context versus when to let Claude Code investigate. | Moderate |
| **M2: Test Generation & TDD Workflows** | Learners will *create* test suites using Claude Code and *apply* test-driven development workflows where Claude Code generates tests before implementation. Learners will also *evaluate* scenarios where AI-assisted testing is most and least effective. | Moderate |
| **M3: Refactoring with Confidence** | Learners will *apply* incremental refactoring strategies with Claude Code, using tests and code review to *evaluate* changes and maintain stability. | Stable |
| **M4: Test Suite Build Sprint** | Learners will *create* a comprehensive test suite for a module in their own codebase (or a provided starter repository), *applying* debugging and TDD workflows from prior modules. Learners will *evaluate* Claude Code's output quality throughout and *apply* recovery strategies when output is incorrect or incomplete. | Stable |

## **Lesson 3: Make It Yours**

*Lesson Outcome: Learners leave with custom commands and project configuration that automate their specific workflows*

| Module | Learning Goal(s) | Volatility |
| :---- | :---- | :---- |
| **M1: Slash Commands** | Learners will *explain* the slash command system and *apply* built-in commands to accelerate common tasks. | Moderate |
| **M2: Custom Slash Commands** | Learners will *create* custom slash commands tailored to their personal or team workflows. | Moderate |
| **M3: CLAUDE.md & Project Memory** | Learners will *design* a CLAUDE.md file that encodes project context, conventions, and preferences to improve Claude Code's effectiveness across sessions. | Moderate |

## **Lesson 4: Understand and Run Agents**

*Lesson Outcome: Learners leave with a working autonomous agent running in headless mode*

| Module | Learning Goal(s) | Volatility |
| :---- | :---- | :---- |
| **M1: What Makes an Agent** | Learners will *distinguish* between assisted coding and autonomous agent behavior, and *identify* the core loop (perceive → reason → act) that defines agentic systems. | Stable |
| **M2: Designing Agent Tasks** | Learners will *analyze* tasks for agent suitability and *design* well-scoped objectives that agents can accomplish autonomously. | Stable |
| **M3: Headless Mode & Permissions** | Learners will *apply* headless mode to run Claude Code without interactive input, and *configure* appropriate permission levels for automated execution. | Volatile |
| **M4: Agent Build Sprint** | Learners will *design* and *create* a working agent that autonomously performs a defined task (e.g., log monitor, test runner, file organizer). | Stable |

---

## **Lesson 5: Extend Your Agent with Hooks**

*Lesson Outcome: Learners leave with an agent that uses hooks to respond dynamically to events*

| Module | Learning Goal(s) | Volatility |
| :---- | :---- | :---- |
| **M1: Introduction to Hooks** | Learners will *explain* the hook system in Claude Code and *identify* use cases where hooks add value to agent workflows. | Moderate |
| **M2: Implementing Hooks** | Learners will *implement* hooks to intercept and respond to Claude Code events, creating feedback loops and conditional behaviors. | Volatile |
| **M3: Hook-Enhanced Agent Build Sprint** | Learners will *extend* their existing agent (or build a new one) with hooks that enable dynamic responses to events (e.g., code review bot that comments on PRs, deployment monitor that alerts on failures). | Stable |

## **Lesson 6: Give Your Agent Reach**

*Lesson Outcome: Learners leave with an agent connected to external tools and data sources*

| Module | Learning Goal(s) | Volatility |
| :---- | :---- | :---- |
| **M1: MCP Fundamentals** | Learners will *explain* the Model Context Protocol and *distinguish* between different MCP server types and their applications. | Moderate |
| **M2: Connecting MCP Servers** | Learners will *configure* Claude Code to connect with existing MCP servers, extending agent capabilities to external tools. | Volatile |
| **M3: Integration Build Sprint** | Learners will *create* an agent that combines Claude Code with external data or services to accomplish a workflow that spans multiple systems. | Stable |

