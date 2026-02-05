# **Module 1: What is Claude Code?**

## **How Quick Can You Update the Tests?**

### **Add Unit Tests (5 minutes)**

It’s your first day on the job and your boss has given you the following [starter repository](https://github.com/stevenjlance/L1-M1-Build-Tests). Clone this repository to your machine using the following commands:

```shell
git clone https://github.com/stevenjlance/L1-M1-Build-Tests.git
cd L1-M1-Build-Tests 
npm install
```

Verify you have Node on your machine by running:

```shell
node --version # Should output something like v24.1.0
```

If you don’t have Node, [download the latest version](https://nodejs.org/en/download) before proceeding.

**Your task:** There are some issues with the codebase and he would like you to add unit tests for the calculateTotal function. You have 5 minutes to ship this.

Open src/cart.js. This module handles shopping cart calculations for an e-commerce app. Use whatever tools and workflow you normally use. ChatGPT, Copilot, manual writing—whatever gets the job done.

*Timer starts now.*

### **Debrief**

**Share with a partner (2 minutes):**

* How many steps did it take?  
* How many times did you copy/paste between tools?  
* Did the tests pass on the first run? If not, how many iterations?

For many developers, the process looks something like this:

1. Open the file, copy the function  
2. Paste it into ChatGPT: "Write tests for this"  
3. Get a response, copy the test code  
4. Create a new test file, paste it in  
5. Run the tests. They fail because of an import path issue.  
6. Copy the error back to ChatGPT  
7. Get a fix, copy it back  
8. Tests still fail. The mock is wrong because ChatGPT didn't see the actual taxRates.js module.  
9. Copy the dependency file...  
10. Repeat until it works

You are the courier. You shuttle code, errors, and context between your editor and the AI. Every round trip costs time, and the AI is working blind.

**Watch the video below:**

<iframe width="100%" height="400" src="https://www.youtube.com/embed/PhCI9mzRD3I" title="Claude Code Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This is the same task as you were instructed with above, but only one command was used. Claude Code read the file, understood the imports, wrote the tests, ran them, and fixed what broke. That's the difference between a suggestion tool and an agent.

## **Claude Code in Action**

What you saw above was Claude Code in action. Let's learn more about it by watching [Anthropic's official demo](https://www.youtube.com/watch?v=AJpK3YTTKZ4) showing Claude Code's core workflow.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/AJpK3YTTKZ4" title="Anthropic Claude Code Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## **Suggestion Tools vs. Agentic Tools**

Most AI coding tools work like this:

## **![Screen Recording 2026-02-04 at 5.26.53 PM.mov \[video-to-gif output image\]][image3]**

This process is very user intensive: you provide context, the AI responds, you apply the suggestion, and then you report back to the AI what happened. The AI is stateless; it only knows what you tell it.

Claude Code works like this:

![][image4]

**Source**: [Buspa](https://www.buspa.it/en/news/150/claude-code-ai-coding-tool-guide) 

Claude Code operates in your environment. It reads files, writes changes, runs commands, and responds to results without you relaying information.

| Suggestion tools | Agentic tools |
| ----- | ----- |
| You copy code to the AI | AI reads your files directly |
| AI shows you what to change | AI makes the changes |
| You run commands, report results | AI runs commands, sees results |
| You interpret errors | AI interprets and fixes errors |
| Context resets each message | Context accumulates |

## **Why Agentic Matters**

The agentic model unlocks tasks that are impractical with suggestion tools:

1. **Refactor every API call in your codebase to use a new client library.** A suggestion tool can show you how to change one. Claude Code can find all 47 of them, change them consistently, run the tests, and fix what breaks.  
2. **Debug a failing integration test.** The error might involve three services, two config files, and a race condition. Claude Code can read all of it, form hypotheses, add logging, run the test, and iterate until it finds the root cause.  
3. **Add comprehensive error handling to an unfamiliar module.** Claude Code can read the module, trace its dependencies, understand the existing error patterns in your codebase, and apply consistent handling without you explaining the context.

![I Discovered This Claude Code Framework (That Automates Your Boring Stuff)  | by Joe Njenga | Medium][image5]

**Source**: [Medium](https://medium.com/@joe.njenga/i-discovered-this-claude-code-framework-that-automates-your-boring-stuff-d1d0ff9eb525)

Each of these tasks involves the same core loop: perceive what's there, reason about what to do, act on the codebase, observe the result, and continue. That loop is what makes Claude Code an agent.

## **Context That Accumulates**

Claude Code maintains context across your conversation:

![How Does Claude Code's Context Command Transform Custom Tool Development][image6]

**Source**: [API Dog](https://apidog.com/blog/claude-code-context-command-custom-tools-hooks-sdk/)

Each instruction builds on the last. When you say "same thing for login," Claude Code already knows your validation approach, your file structure, and your component patterns. You steer; you don't re-explain.

## **When Claude Code Fits**

| Task | Best tool |
| ----- | ----- |
| Complete a function signature while typing | Autocomplete (Copilot) |
| "How does React's useEffect cleanup work?" | Chat (Claude.ai, ChatGPT) |
| Add input validation to three forms | Claude Code |
| Debug why a test passes locally but fails in CI | Claude Code |
| Refactor a module to use dependency injection | Claude Code |
| Generate tests for a service class | Claude Code |

Claude Code is the right choice when the task requires reading existing code, making changes across files, running commands, or iterating based on real results.

## **Knowledge Check**

1. What is the core difference between a suggestion tool and an agentic tool?

2. Name two capabilities that Claude Code has because it runs in your terminal.

3. Why does context accumulation matter for multi-step tasks?

---

## **Summary**

Claude Code is a terminal-based agent that reads your code, writes changes, runs commands, and iterates on results. Unlike suggestion tools where you shuttle code between interfaces, Claude Code operates directly in your environment. The conversational model means context persists, which makes it effective for tasks that span multiple files or require iteration.

In the next module, you'll install Claude Code and use it to make your first change to a real codebase.

[image1]: /content/lesson-1/images/module-1-student-image1.png

[image2]: /content/lesson-1/images/module-1-student-image2.png

[image3]: /content/lesson-1/images/module-1-student-image3.gif

[image4]: /content/lesson-1/images/module-1-student-image4.gif

[image5]: /content/lesson-1/images/module-1-student-image5.gif

[image6]: /content/lesson-1/images/module-1-student-image6.gif