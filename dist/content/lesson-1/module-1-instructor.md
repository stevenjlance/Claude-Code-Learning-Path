# **Module 1: What Claude Code Is**

| Item | Detail |
| ----- | ----- |
| **Duration** | 25-30 minutes |
| **Format** | Hands-on activity → debrief → video → direct instruction → knowledge check |
| **Learning Goal** | Distinguish Claude Code from other AI coding tools and identify the conversational, agentic model that enables rapid development. |
| **Materials** | Starter repo, timer, YouTube video |
| **Audience** | Technical employees with little to no experience with Claude Code |

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

This is the engagement portion of the first lesson to get learners interested in the topic. The goal is to get them thinking about the "why" behind Claude Code and understanding the problems that it can solve.

As an instructor you should strive to be a **guide on the side** not a **sage on the stage**. The best learning moments happen when you get out of the way.

</div>
</div>

---

## **How Quick Can You Update the Tests?**

### **Add Unit Tests (5 minutes)**

It's your first day on the job and your boss has given you the following [starter repository](https://github.com/stevenjlance/L1-M1-Build-Tests). Clone this repository to your machine using the following commands:

```shell
git clone https://github.com/stevenjlance/L1-M1-Build-Tests.git
cd L1-M1-Build-Tests
npm install
```

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 1 minute</span>
</div>
<div class="instructor-note-content">

Walk the room. Help anyone stuck on git or npm. Have the zip file on USB as backup if git is blocked.

Additionally, help with Node installation if needed.

</div>
</div>

Verify you have Node on your machine by running:

```shell
node --version # Should output something like v24.1.0
```

If you don't have Node, [download the latest version](https://nodejs.org/en/download) before proceeding.

**Your task:** There are some issues with the codebase and he would like you to add unit tests for the calculateTotal function. You have 5 minutes to ship this.

Open src/cart.js. This module handles shopping cart calculations for an e-commerce app. Use whatever tools and workflow you normally use. ChatGPT, Copilot, manual writing—whatever gets the job done.

*Timer starts now.*

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 4 minutes</span>
</div>
<div class="instructor-note-content">

Start timer visibly. **Do NOT help with the task itself.** You want them to feel the friction.

**Watch for:**
- Who copies code to ChatGPT/Claude/Gemini?
- Who uses Copilot inline?
- Who writes tests manually?
- Who gets errors and has to iterate?

Make mental notes for the debrief.

</div>
</div>

---

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

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 2 minutes</span>
</div>
<div class="instructor-note-content">

Ask students to share out their process. Gather some common insights and focus on the common pain points that were arising.

Read through the 10 steps quickly. They'll recognize themselves.

**Say:** "You're the courier. The AI is working blind—it can't see your taxRates.js or discounts.js files, so it guesses. And it guesses wrong."

</div>
</div>

**Watch the video below:**

<iframe width="100%" height="400" src="https://www.youtube.com/embed/PhCI9mzRD3I" title="Claude Code Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This is the same task as you were instructed with above, but only one command was used. Claude Code read the file, understood the imports, wrote the tests, ran them, and fixed what broke. That's the difference between a suggestion tool and an agent.

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

**Ask:** "What power does this tooling that you just saw demonstrate?"

Gather a few responses about how this could unlock more powerful outputs on the job.

**Summary statement:** "Ultimately, this was the same task, but only one command was needed. No copy-paste. That's the difference between a suggestion tool and an agent."

</div>
</div>

## **Video: Claude Code in Action**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ ~5 minutes</span>
</div>
<div class="instructor-note-content">

**Say:** "This video from Anthropic shows the core workflow. Watch how Claude Code reads files, runs commands, and responds to errors—all without the user relaying information."

After the video, pause for questions. If none, move on.

**Backup:** Have offline video file ready if YouTube is blocked or slow.

</div>
</div>

What you saw above was Claude Code in action. Let's learn more about it by watching [Anthropic's official demo](https://www.youtube.com/watch?v=AJpK3YTTKZ4) showing Claude Code's core workflow.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/AJpK3YTTKZ4" title="Anthropic Claude Code Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## **Suggestion Tools vs. Agentic Tools**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 3-4 minutes</span>
</div>
<div class="instructor-note-content">

Keep this brisk. The activity already made the point viscerally, so this is just to ensure learners have the key ideas.

**Key talking points:**
- "Suggestion tools show you code. Agentic tools take action."
- "The difference isn't intelligence—it's access. Claude Code can read your files, run your tests, see the errors."

</div>
</div>

Most AI coding tools work like this:

![Screen Recording 2026-02-04 at 5.26.53 PM.mov][image3]

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

---

## **Why Agentic Matters**

The agentic model unlocks tasks that are impractical with suggestion tools:

1. **Refactor every API call in your codebase to use a new client library.** A suggestion tool can show you how to change one. Claude Code can find all 47 of them, change them consistently, run the tests, and fix what breaks.
2. **Debug a failing integration test.** The error might involve three services, two config files, and a race condition. Claude Code can read all of it, form hypotheses, add logging, run the test, and iterate until it finds the root cause.
3. **Add comprehensive error handling to an unfamiliar module.** Claude Code can read the module, trace its dependencies, understand the existing error patterns in your codebase, and apply consistent handling without you explaining the context.

![I Discovered This Claude Code Framework (That Automates Your Boring Stuff)  | by Joe Njenga | Medium][image5]

**Source**: [Medium](https://medium.com/@joe.njenga/i-discovered-this-claude-code-framework-that-automates-your-boring-stuff-d1d0ff9eb525)

Each of these tasks involves the same core loop: perceive what's there, reason about what to do, act on the codebase, observe the result, and continue. That loop is what makes Claude Code an agent.

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

**Say:** "These aren't toy examples. These are the tasks that can take up an entire afternoon. Refactoring, debugging, adding error handling across a module. Claude Code handles them because it can see and act, not just suggest."

</div>
</div>

## **Context That Accumulates**

Claude Code maintains context across your conversation:

![How Does Claude Code's Context Command Transform Custom Tool Development][image6]

**Source**: [API Dog](https://apidog.com/blog/claude-code-context-command-custom-tools-hooks-sdk/)

Each instruction builds on the last. When you say "same thing for login," Claude Code already knows your validation approach, your file structure, and your component patterns. You steer; you don't re-explain.

## **When Claude Code Fits**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 2 minutes</span>
</div>
<div class="instructor-note-content">

**Say:** "Claude Code isn't a replacement for autocomplete or chat. Different tools fit different moments. You'll develop intuition for this as you use it."

**Potential question:** "Is Copilot an agent now too?"

**Response:** "Copilot has added some agentic features. The lines are blurring. The key question is: can it read your files, run commands, and iterate without you relaying information? If yes, it's acting as an agent for that task."

</div>
</div>

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

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 3-5 minutes</span>
</div>
<div class="instructor-note-content">

**Say:** "Take 2 minutes. Answer the three questions. Then we'll review."

Give them time to think and write. Then review as a group.

**Minimum passing standard:** Learner correctly answers 2 of 3 questions and can verbally explain the difference between suggestion and agentic tools.

</div>
</div>

1. What is the core difference between a suggestion tool and an agentic tool?

2. Name two capabilities that Claude Code has because it runs in your terminal.

3. Why does context accumulation matter for multi-step tasks?

### **Answers**

1. Suggestion tools show you code to copy and apply manually. Agentic tools take actions directly in your environment: reading files, writing changes, running commands.

2. Any two of: reading files directly, writing/editing files, running shell commands, seeing command output, iterating without you relaying information.

3. Context accumulates across exchanges. You don't re-explain your codebase, patterns, or constraints. Each instruction builds on previous understanding, making multi-step tasks faster and more consistent.

---

## **Summary**

Claude Code is a terminal-based agent that reads your code, writes changes, runs commands, and iterates on results. Unlike suggestion tools where you shuttle code between interfaces, Claude Code operates directly in your environment. The conversational model means context persists, which makes it effective for tasks that span multiple files or require iteration.

In the next module, you'll install Claude Code and use it to make your first change to a real codebase.

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note — Transition to M2</span>
</div>
<div class="instructor-note-content">

**Say:** "You've seen what Claude Code can do. In the next module, you'll install it and use it yourself to make your first change to this same codebase."

</div>
</div>

---

## **Resources**

* [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) — Anthropic's free course
* [Claude Code: A Highly Agentic Coding Assistant](https://learn.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant/) — DeepLearning.AI course with Anthropic
* [Claude Code Product Page](https://www.anthropic.com/claude-code) — Official demos and documentation

---

# **Appendix A: Demo Scripts**

## **Demo 1: Claude Code Unit Test Generation**

**Purpose:** Show the contrast after the Engage activity

**Setup:**

* Terminal open in the claude-code-starter directory
* Claude Code installed and authenticated
* Clean state (no tests written yet)

**Script:**

\[Type in Claude Code\]
\> add unit tests for src/cart.js

\[Claude Code will:\]
1\. Read cart.js
2\. Identify dependencies (taxRates.js, discounts.js)
3\. Read those files to understand the actual values
4\. Create tests/cart.test.js with comprehensive tests
5\. Run npm test
6\. See any failures
7\. Fix the issues
8\. Run again until tests pass

**Talking points while it runs:**

* "Notice it's reading the dependency files without me telling it to."
* "It found the actual tax rates—7.25% for California, 0% for Oregon."
* "Now it's running the tests to verify."
* "There's a failure. Watch—it reads the error and fixes it."

**Expected duration:** 60-90 seconds

---

# **Appendix B: Anticipated Failure Points**

## **During the Engage Activity**

| Problem | Likely Cause | Resolution |
| ----- | ----- | ----- |
| git clone fails | Venue wifi blocks git, or repo URL wrong | Have USB drive with zip file |
| npm install hangs | Slow network | Provide pre-installed node\_modules as zip |
| Learner finishes in 2 minutes | Wrote trivial tests or already knows the pattern | Ask: "Do your tests cover the discount tiers? The state tax edge cases?" |
| Learner gives up immediately | Unfamiliar with Jest or testing | Pair them with someone experienced—the point is the process, not the output |

## **During the Demo**

| Problem | Likely Cause | Resolution |
| ----- | ----- | ----- |
| Claude Code not installed | Instructor setup issue | Have pre-recorded video backup |
| Claude Code asks for authentication | Session expired | Authenticate beforehand; have API key ready |
| Claude Code produces wrong tests | Model variability | Say: "Even Claude Code iterates. Watch it self-correct." |
| Claude Code hangs or is slow | API rate limits or network | Use backup GIF. Say: "In the interest of time, here's what this looks like." |

## **During Discussion**

| Problem | Likely Cause | Resolution |
| ----- | ----- | ----- |
| "Copilot is just as good" | Hasn't hit the limits | "Copilot is great for completions. The difference shows up with multi-file changes or iteration. You'll experience this in the Build Sprint." |
| Cost questions | Valid concern | "Claude Code requires a paid plan. We'll cover this in M2." |
| Security/privacy questions | Valid concern | "Claude Code runs locally and sends code to Anthropic's API. Anthropic's data policies are at anthropic.com/privacy. We'll cover configuration in M2." |

---

# **Appendix C: Success Criteria**

## **Observable Indicators**

| Criterion | Meeting | Not Yet Meeting |
| ----- | ----- | ----- |
| Distinguishes suggestion vs. agentic tools | Correctly answers Knowledge Check Q1; gives examples | Confuses the two; thinks Claude Code is "just another chatbot" |
| Identifies agentic capabilities | Names at least 2: read files, write files, run commands, see output, iterate | Cannot name any; focuses on "it's smarter" rather than access |
| Understands context accumulation | Explains why it matters for multi-step tasks | Thinks each message is independent |
| Recognizes appropriate use cases | Identifies tasks suited for Claude Code vs. autocomplete vs. chat | Thinks Claude Code should be used for everything |

---

# **Appendix D: Summative Assessment Rubric (Lesson 1\)**

*This rubric is used at the end of Lesson 1 (after M4: Build Sprint), not after M1 alone.*

## **Assessment Task**

Using Claude Code, add a new feature, fix, or utility to your own codebase (or the starter repo). Document your process and reflect on when Claude Code was most and least helpful.

## **Rubric**

| Dimension | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
| ----- | ----- | ----- | ----- | ----- |
| **Artifact Quality** | Works correctly, includes error handling, follows codebase conventions | Works correctly with minor issues | Partially works; bugs remain | Does not work or incomplete |
| **Tool Selection** | Clear understanding of when Claude Code fits vs. other tools; articulates reasoning | Uses Claude Code appropriately; can explain why | Uses Claude Code but can't articulate why | Uses Claude Code for unsuitable task |
| **Iteration Process** | Guides Claude Code effectively; steers when needed; lets it work when appropriate | Completes task with reasonable steering | Struggles to guide; over- or under-intervenes | Cannot complete task |
| **Reflection Quality** | Articulates specific moments of success and struggle; identifies transferable lessons | Reflects with some specificity; identifies one strength and limitation | Superficial reflection without examples | No meaningful reflection |

**Scoring:** 14-16 Exceeds / 10-13 Meets / 6-9 Approaching / 4-5 Does not meet

---

# **Appendix E: Technical Configuration**

## **Instructor Machine**

| Requirement | Minimum |
| ----- | ----- |
| Node.js | v18.0.0+ |
| Claude Code | Latest version |
| Anthropic API key | Valid, with credits |
| Internet | Stable, \>10 Mbps |

## **Pre-Session Checklist**

```shell
node --version        # v18+
claude --version      # Returns version
claude                # Opens without auth prompts

# Test starter repo
git clone https://github.com/stevenjlance/L1-M1-Build-Tests.git
cd claude-code-starter && npm install && npm test

# Test demo claude
> add unit tests for src/cart.js
# Verify completion
```

[image3]: /content/lesson-1/images/module-1-instructor-image3.gif

[image4]: /content/lesson-1/images/module-1-instructor-image4.gif

[image5]: /content/lesson-1/images/module-1-instructor-image5.gif

[image6]: /content/lesson-1/images/module-1-instructor-image6.gif
