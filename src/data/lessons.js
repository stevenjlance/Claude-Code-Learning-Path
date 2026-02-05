export const lessons = [
  {
    id: 1,
    title: "Ship Something Today",
    description: "Get started with Claude Code and build something real in your own codebase",
    artifact: "Feature, fix, or new project in learner's codebase",
    modules: [
      {
        id: 1,
        title: "What Claude Code Is",
        description: "Distinguish Claude Code from other AI coding tools and identify the conversational, agentic model that enables rapid development.",
        volatility: "Stable",
        duration: "30 min"
      },
      {
        id: 2,
        title: "Setup & Shipping a Feature",
        description: "Configure Claude Code in your environment and create a small, scoped addition to a codebase.",
        volatility: "Volatile",
        duration: "55 min"
      },
      {
        id: 3,
        title: "Context & Codebase Awareness",
        description: "Analyze how Claude Code builds understanding of a codebase and apply strategies for scoping context effectively.",
        volatility: "Moderate",
        duration: "45 min"
      },
      {
        id: 4,
        title: "Build Sprint",
        description: "Create a functional feature, fix, or utility within your own codebase, evaluating outputs and iterating toward production-ready code.",
        volatility: "Stable",
        duration: "90 min"
      }
    ]
  },
  {
    id: 2,
    title: "Claude as Pair Programmer",
    description: "Master debugging and testing workflows with Claude Code as your coding partner",
    artifact: "Test suite for a real codebase module",
    modules: [
      {
        id: 1,
        title: "Debugging with Claude Code",
        description: "Apply systematic approaches to diagnose bugs collaboratively with Claude Code.",
        volatility: "Moderate"
      },
      {
        id: 2,
        title: "Test Generation & TDD Workflows",
        description: "Create test suites using Claude Code and apply test-driven development workflows.",
        volatility: "Moderate"
      },
      {
        id: 3,
        title: "Refactoring with Confidence",
        description: "Apply incremental refactoring strategies with Claude Code, using tests and code review.",
        volatility: "Stable"
      },
      {
        id: 4,
        title: "Test Suite Build Sprint",
        description: "Create a comprehensive test suite for a module in your own codebase.",
        volatility: "Stable"
      }
    ]
  },
  {
    id: 3,
    title: "Make It Yours",
    description: "Customize Claude Code with commands and configurations tailored to your workflow",
    artifact: "Custom slash commands and CLAUDE.md configuration",
    modules: [
      {
        id: 1,
        title: "Slash Commands",
        description: "Explain the slash command system and apply built-in commands to accelerate common tasks.",
        volatility: "Moderate"
      },
      {
        id: 2,
        title: "Custom Slash Commands",
        description: "Create custom slash commands tailored to your personal or team workflows.",
        volatility: "Moderate"
      },
      {
        id: 3,
        title: "CLAUDE.md & Project Memory",
        description: "Design a CLAUDE.md file that encodes project context, conventions, and preferences.",
        volatility: "Moderate"
      }
    ]
  },
  {
    id: 4,
    title: "Understand and Run Agents",
    description: "Build autonomous agents that work independently on defined tasks",
    artifact: "Autonomous agent running in headless mode",
    modules: [
      {
        id: 1,
        title: "What Makes an Agent",
        description: "Distinguish between assisted coding and autonomous agent behavior, and identify the core loop.",
        volatility: "Stable"
      },
      {
        id: 2,
        title: "Designing Agent Tasks",
        description: "Analyze tasks for agent suitability and design well-scoped objectives.",
        volatility: "Stable"
      },
      {
        id: 3,
        title: "Headless Mode & Permissions",
        description: "Apply headless mode to run Claude Code without interactive input.",
        volatility: "Volatile"
      },
      {
        id: 4,
        title: "Agent Build Sprint",
        description: "Design and create a working agent that autonomously performs a defined task.",
        volatility: "Stable"
      }
    ]
  },
  {
    id: 5,
    title: "Extend Your Agent with Hooks",
    description: "Add dynamic event-driven behaviors to your agents",
    artifact: "Agent with dynamic event-driven behaviors",
    modules: [
      {
        id: 1,
        title: "Introduction to Hooks",
        description: "Explain the hook system in Claude Code and identify use cases where hooks add value.",
        volatility: "Moderate"
      },
      {
        id: 2,
        title: "Implementing Hooks",
        description: "Implement hooks to intercept and respond to Claude Code events.",
        volatility: "Volatile"
      },
      {
        id: 3,
        title: "Hook-Enhanced Agent Build Sprint",
        description: "Extend your existing agent with hooks that enable dynamic responses to events.",
        volatility: "Stable"
      }
    ]
  },
  {
    id: 6,
    title: "Give Your Agent Reach",
    description: "Connect your agent to external tools and data sources via MCP",
    artifact: "Agent integrated with external tools via MCP",
    modules: [
      {
        id: 1,
        title: "MCP Fundamentals",
        description: "Explain the Model Context Protocol and distinguish between different MCP server types.",
        volatility: "Moderate"
      },
      {
        id: 2,
        title: "Connecting MCP Servers",
        description: "Configure Claude Code to connect with existing MCP servers.",
        volatility: "Volatile"
      },
      {
        id: 3,
        title: "Integration Build Sprint",
        description: "Create an agent that combines Claude Code with external data or services.",
        volatility: "Stable"
      }
    ]
  }
];

export const volatilityInfo = {
  Stable: {
    color: "#10b981",
    description: "Core concepts, workflow patterns, design principles",
    updateTrigger: "Annual review or major paradigm shifts"
  },
  Moderate: {
    color: "#f59e0b",
    description: "Features that exist but whose syntax or interface may change",
    updateTrigger: "Review within 30 days of Claude Code releases"
  },
  Volatile: {
    color: "#ef4444",
    description: "Cutting-edge features, specific command syntax, configuration details",
    updateTrigger: "Review within 2 weeks of any Claude Code release"
  }
};
