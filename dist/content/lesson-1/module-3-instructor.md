# **Module 3: Context & Codebase Awareness**

| Element | Details |
| ----- | ----- |
| **Duration** | 35–45 minutes |
| **Learning Goal** | Apply context management strategies to complete a multi-step change on own codebase |
| **Core Principle** | Learners discover the problem through experience, then apply tools to solve it on their own code. |

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

This module follows the **M1 pattern**: experience the problem first, then learn the solution.

The opening activity deliberately creates frustration (context baggage). **Don't rescue them from it—that's the point.**

Your job is to get them into the activity fast, let them feel the friction, then give them tools and time to practice.

</div>
</div>

## **Opening Activity: Experience the Problem**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 8–10 minutes</span>
</div>
<div class="instructor-note-content">

**Setup:** Everyone should still have the starter repo from M1/M2.

**Say:** "You're going to do a quick sequence of tasks. Don't skip ahead—run them in order and watch what happens."

**Your role:** Circulate. Don't explain why they're doing this yet. Let them experience it.

**Watch for:**
- Learners who skip Part 2 (make sure they do the logger task WITH context first)
- Learners who clear context early (ask them to try without clearing first)

</div>
</div>

![Anthropic launches Claude 3.7 Sonnet hybrid AI model and Claude Code  programming tool][image1]

**Source**: [Decoder](https://the-decoder.com/anthropic-launches-claude-3-7-sonnet-hybrid-ai-model-and-claude-code-programming-tool/)

Let’s return the demo repository that we have been using to learn about Claude Code:

```shell
cd claude-code-starter
claude
```

Run these requests in sequence, approving actions as needed:

```shell
> add a method to Cart called getSubtotal that returns the total before tax
```

```shell
> now add a method called applyBulkDiscount that takes a percentage and reduces all item prices by that amount
```

```shell
> add comprehensive error handling to the Cart class - throw errors for invalid quantities, missing prices, and invalid discount values
```

You've now had a conversation with Claude Code about the Cart class. It has read files, made changes, and built up an understanding of your codebase.

Now ask Claude Code to do something unrelated:

```shell
> create a new file called src/logger.js with a simple logging utility that has debug, info, warn, and error methods
```

Watch what happens. Claude Code may:

* Reference Cart patterns that don't apply to a logger  
* Over-engineer the solution based on the error handling discussion  
* Take longer than expected for a simple task

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 2 minutes</span>
</div>
<div class="instructor-note-content">

**Debrief:** Quick hand-raise: "Who noticed something strange with the logger?"

Draw out 1-2 observations. Don't lecture, just validate what they saw and capture some common themes.

**Transition:** "Context accumulation helps when tasks are related. It hurts when you shift to something new. Knowing how to manage this will help ensure you are harnessing the full power of Claude Code. Let me show you how Claude Code actually builds that context."

</div>
</div>

Context accumulation helps when tasks are related. However, it hurts when you shift to something new. Knowing how to manage this will help ensure you are harnessing the full power of Claude Code.

## **How Claude Code Sees Your Codebase**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 3–4 minutes</span>
</div>
<div class="instructor-note-content">

**Format:** Brief explanation. Don't belabor this because they just experienced it.

Point at each item, don't read verbatim.

**Say:** "Here's what's actually happening in four simple steps."

</div>
</div>

When you start Claude Code in a project directory, it doesn't immediately read every file. Instead, it:

1. **Scans the project structure.** Claude Code reads directory names, file names, and common configuration files (like package.json, tsconfig.json, .gitignore) to understand what kind of project this is.  
2. **Reads files on demand.** When you ask about something, Claude Code reads the relevant files. If those files import other files, it follows the chain.  
3. **Accumulates context.** As you work, Claude Code remembers what it has read. This accumulated understanding is called the **context window**.  
4. **Hits limits.** The context window has a size limit. When you've been working for a while, older information may get pushed out, or Claude Code may start to slow down.

This is fundamentally different from a traditional IDE. Your IDE indexes everything upfront. Claude Code reads selectively and builds understanding through conversation.

## **Context in Action**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 5–7 minutes</span>
</div>
<div class="instructor-note-content">

**Purpose:** See context accumulation working FOR them (contrast to the opening where it worked against them).

**Say:** "Clear your context and let's see how accumulation helps when tasks ARE related."

</div>
</div>

Return to your demo project that we have used in the last two sections. If you're still in Claude Code, use /clear to start fresh. Then navigate back:

```shell
cd claude-code-starter
claude
```

Let’s run some experiments to see context in action.

### **Experiment 1: Watch the chain**

Ask Claude Code to explain a function:

```shell
> explain what calculateTotal does and how it handles discounts
```

Watch the output. Claude Code will:

* Read cart.js  
* Discover imports for taxRates.js and discounts.js  
* Read those files  
* Synthesize an explanation

Now ask a follow-up:

```shell
> what tax rate applies to California orders?
```

Claude Code answers immediately. It already has taxRates.js in context from your first question.

### **Experiment 2: Fresh context vs. accumulated context**

Use /clear to wipe context. Ask the same California question:

```shell
/clear 
> what tax rate applies to California orders?
```

This time, Claude Code has to figure out where tax rates are defined. It may take a slightly different path to find the answer. 

**KEY POINT**: Context accumulation makes follow-up questions faster and more accurate. But it also means Claude Code may carry assumptions from earlier in the conversation.

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

**Checkpoint:** "What was the difference of the output once we used /clear? When do you think you would need to use this in your own projects?"

Take a few responses to see what examples they come up with.

Related tasks benefit from accumulated context. Unrelated tasks suffer from it. Now let's look at the tools you have to manage this.

</div>
</div>

## **Check Your Context**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 3–4 minutes</span>
</div>
<div class="instructor-note-content">

**Format:** Quick demo of each command. Don't explain at length as they'll use these in the main activity.

**Say:** "Three commands. Let me show you each one quickly, then you'll practice."

</div>
</div>

Claude Code gives you tools to understand what's in context:

### **Check context size**

```shell
/cost
```

This shows token usage for your current session. Higher numbers mean more context accumulated.

### **Reduce context while preserving information**

```shell
/compact
```

This summarizes the conversation to reduce context size while preserving key information. Use it when:

* Claude Code starts responding slowly  
* You're switching to a different area of the codebase  
* You want to keep working but don't need full conversation history

### **Start fresh**

```shell
/clear
```

This wipes context entirely. Use it when:

* Starting a completely new task  
* Claude Code seems confused by earlier conversation  
* You want a fresh perspective on a problem

### **Scope your requests**

How you phrase a request affects how much context Claude Code needs to build.

**Specific \= focused context:**

```shell
> add a method to Cart that returns the subtotal before tax
```

Claude Code reads cart.js, understands the class, adds the method. Minimal context.

**Vague \= wasted context:**

```shell
> fix the discount bug
```

Claude Code doesn't know which bug. It reads files looking for issues, or asks you to clarify. Be specific about the outcome. Let Claude Code figure out the implementation.

## **Apply It: Multi-Step Change on Your Own Code**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 15–18 minutes</span>
</div>
<div class="instructor-note-content">

**This is where the main learning happens.** Everything before was setup.

**Your role:**
- Circulate constantly
- Help learners who are stuck on task selection (push them to pick something specific)
- Ask "Did you use /compact or /clear between steps? Why?"
- Encourage deliberate choices, not autopilot

**Watch for:**
- Learners trying to do everything in one request (help them break it down)
- Learners who /clear reflexively without thinking (ask them to consider if context would help)
- Learners who never /clear even when switching focus (nudge them to try it)

**Don't:**
- Demo for the whole room
- Let anyone sit idle. Working in pairs and using pair programming here is a strong suggestion to promote engagement
- Let learners get stuck for more than 2 minutes without having them raise that concern with a peer.

</div>
</div>

Now you are ready to complete a meaningful change on your own codebase that requires multiple steps. This will give you practice managing context across a longer task.

Return to the project you worked on in M2.

### **Step 1: Pick a multi-step task**

Choose something that requires at least 2-3 related changes. Examples:

* **Add a feature with tests:** Implement a new function AND write tests for it  
* **Refactor with updates:** Rename a function AND update all call sites AND update documentation  
* **Add validation end-to-end:** Add input validation to a function AND add error handling where it's called AND add user-facing error messages  
* **Improve a module:** Add error handling to a file AND add logging AND add JSDoc comments

Write down your task before starting:

**My task:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **Step 2: Break it into scoped requests**

Don't ask Claude Code to do everything at once. Plan 2-3 specific requests:

**Request 1:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Request 2:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Request 3 (if needed):** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### **Step 3: Execute with context awareness**

Run your first request. Before running the second request, consider:

* Did Claude Code read the files it will need for request 2?  
* Is context accumulation helping (Claude Code already understands the area) or hurting (carrying assumptions you need to override)?  
* Should you /compact or /clear before continuing?

Make a deliberate choice, then run request 2\. Repeat for request 3\.

### **Step 4: Verify the complete change**

Your multi-step task should now be complete. Verify it works:

* Run tests if applicable  
* Manually test the feature  
* Review the changes Claude Code made

If something isn't right, use what you learned: guide Claude Code with specific feedback, or /clear and try a different approach.

### **Reflect**

When you've completed your task, note:

* How many files did Claude Code touch across all requests?  
* Did you use /compact or /clear between steps? Why or why not?  
* What would you do differently next time?

---

## **Shareout: Context Decisions**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 4–5 minutes</span>
</div>
<div class="instructor-note-content">

**Purpose:** Surface different strategies. Create social proof that there's no single "right" way.

**Prompt:** "Who used /clear between steps? Why? Who kept accumulated context? Why?"

**Guide the conversation toward:**
- When accumulated context helped
- When it got in the way
- How they decided

</div>
</div>

## **When Context Works Against You**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

**Format:** Quick reference. Just point at warning signs.

**Say:** "Quick reference for later. These are signs you need to clear."

</div>
</div>

Context accumulation is usually helpful, but it can cause problems:

* **Stale assumptions.** If you asked Claude Code to use a particular approach early in the session, it may keep using that approach even when a different one would be better.  
* **Conflicting information.** If you discussed multiple solutions, Claude Code may mix elements from different approaches.  
* **Scope creep.** A long conversation about one feature may cause Claude Code to over-engineer a simple addition.

Look for the following warning signs that you need to clear context:

* Claude Code references code you deleted  
* Responses include details from earlier tasks that don't apply  
* Claude Code seems to be solving a different problem than you asked about

When in doubt, /clear and start fresh. It's faster than debugging a confused context.

## **Knowledge Check**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 2–3 minutes</span>
</div>
<div class="instructor-note-content">

The main evidence of their success in this module is that they can build something using Claude Code on their own codebase.

These are summary questions, so are not the main form of assessment. These can be done aloud to stamp the key points of the lesson.

</div>
</div>

1. When you start Claude Code in a new project, does it immediately read all files? Why or why not?

2. What's the difference between /compact and /clear?

3. In your Experiment 1, what files did Claude Code read to answer the question about calculateTotal?

4. Describe the multi-step task you completed. How did you decide whether to /compact, /clear, or continue with accumulated context between steps?

### **Answers**

1. No. Claude Code scans the project structure but reads files on demand as you ask questions. This keeps context focused on what's relevant to your current task.

2. /compact summarizes the conversation to reduce token usage while preserving key information. /clear wipes context entirely, giving you a fresh start. Use /compact when you want to continue but free up space; use /clear when starting a new, unrelated task.

3. Claude Code read cart.js first, then followed imports to read taxRates.js and discounts.js. It needed all three to explain how calculateTotal handles discounts and tax.

4. Answers will vary. Key considerations: If the next step builds directly on the previous one (same files, same concepts), accumulated context helps. If the next step is in a different area or requires a fresh perspective, /clear may be better. /compact is useful when context is helpful but getting large.

---

## **Summary**

You completed a multi-step change on your own codebase, practicing context management along the way.

Claude Code builds context by reading files on demand and following imports. This accumulated context makes follow-up questions faster but can also carry stale assumptions. Use /cost to check context size, /compact to reduce it while preserving information, and /clear to start fresh.

For multi-step tasks, break work into scoped requests and make deliberate choices about context between steps. Sometimes accumulated context helps; sometimes a fresh start is faster.

In the next module, you'll put everything together in a build sprint, completing a more substantial feature from scratch.

---

## **Resources**

* [Claude Code Context Management](https://docs.anthropic.com/en/docs/claude-code/context) — How context works  
* [Effective Prompting for Claude Code](https://docs.anthropic.com/en/docs/claude-code/prompting) — Writing good requests  
* [Claude Code CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference) — All available commands

# **Appendices (Instructor Reference Only)**

---

## **Appendix A: Anticipated Failure Points**

### **Opening Activity**

| Issue | Symptoms | Resolution |
| ----- | ----- | ----- |
| Learner clears context early | Doesn't experience the problem | Ask them to try the logger WITHOUT clearing first |
| Starter repo missing | Directory not found | Help re-clone from original source |
| No visible difference with logger | Claude Code happens to produce clean output | Ask them to look at response time, or note it may vary |

### **Experiments**

| Issue | Symptoms | Resolution |
| ----- | ----- | ----- |
| Claude Code doesn't follow imports | Only reads cart.js | May be model variation; have them ask "what files did you read?" |
| /clear doesn't feel different | Similar response time | Normal variation; focus on the conceptual point |

### **Own Code Activity**

| Issue | Symptoms | Resolution |
| ----- | ----- | ----- |
| Task too big | Can't break into 2-3 requests | Help them scope down to one module/file |
| Task too small | Only one step needed | Encourage adding tests or docs as step 2 |
| No project available | Learner doesn't have code to work on | Use a public repo they're familiar with |
| Reflexive /clear | Clears after every request | Ask "Would context have helped here?" |
| Never /clear | Context clearly stale | Ask "Is Claude Code carrying assumptions you don't want?" |

## **Appendix B: Success Criteria**

### **Opening Activity Complete**

* \[ \] Learner ran all three Cart requests  
* \[ \] Learner ran logger request WITH accumulated context  
* \[ \] Learner can articulate what went wrong (or what felt slow/over-engineered)

### **Experiments Complete**

* \[ \] Learner observed Claude Code following imports  
* \[ \] Learner saw difference between accumulated and fresh context

### **Own Code Activity Complete**

* \[ \] Learner completed a multi-step task (2-3 requests minimum)  
* \[ \] Learner made at least one deliberate choice about /compact or /clear  
* \[ \] Learner can explain their context management decision

## **Appendix C: Time Blocks**

| Phase | Duration | % of Module |
| ----- | ----- | ----- |
| Opening Activity \+ Debrief | 8–10 min | \~20% |
| How Claude Code Sees Codebase | 3–4 min | \~10% |
| Context in Action (Experiments) | 5–7 min | \~15% |
| Check Your Context (Tools) | 3–4 min | \~10% |
| **Own Code Activity** | **15–18 min** | **\~40%** |
| Shareout | 4–5 min | \~10% |
| Knowledge Check | 2–3 min | \~5% |
| **Total** | **35–45 min** | **100%** |

**Key principle:** If running short on time, cut from explanation sections, not from Own Code or Shareout.

## **Appendix D: Facilitation Tips**

### **Before the Module**

* Confirm all learners still have starter repo from M1/M2  
* Have a backup project ready for learners without their own code

### **During Opening Activity**

* Don't explain the purpose until AFTER they experience the problem  
* Let them feel the friction—that's the learning moment

### **During Experiments**

* These should be quick. Don't let them turn into extended exploration.  
* The point is to see the contrast, not to master the commands yet

### **During Own Code Activity**

* **Circulate constantly.** Don't sit down.  
* Push learners to make deliberate choices: "Are you keeping context? Clearing? Why?"  
* If someone finishes early: "Try a second multi-step task with a different context strategy"

### **During Shareout**

* Draw out variety: "Who did it differently?"  
* Celebrate both "I kept context and it helped" AND "I cleared and it was faster"  
* The point is deliberate choice, not one right answer

### **Transitions**

* Opening → Explanation: "That's why context matters. Here's how it works."  
* Experiments → Tools: "Now you've seen it. Here are the tools to manage it."  
* Tools → Own Code: "Time to practice. Pick a task that matters to you."

[image1]: /content/lesson-1/images/module-3-instructor-image1.png