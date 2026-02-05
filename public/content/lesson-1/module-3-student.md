# **Module 3: Context & Codebase Awareness**

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

Context accumulation helps when tasks are related. However, it hurts when you shift to something new. Knowing how to manage this will help ensure you are harnessing the full power of Claude Code.

## **How Claude Code Sees Your Codebase**

When you start Claude Code in a project directory, it doesn't immediately read every file. Instead, it:

1. **Scans the project structure.** Claude Code reads directory names, file names, and common configuration files (like package.json, tsconfig.json, .gitignore) to understand what kind of project this is.  
2. **Reads files on demand.** When you ask about something, Claude Code reads the relevant files. If those files import other files, it follows the chain.  
3. **Accumulates context.** As you work, Claude Code remembers what it has read. This accumulated understanding is called the **context window**.  
4. **Hits limits.** The context window has a size limit. When you've been working for a while, older information may get pushed out, or Claude Code may start to slow down.

This is fundamentally different from a traditional IDE. Your IDE indexes everything upfront. Claude Code reads selectively and builds understanding through conversation.

## **Context in Action**

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

## **Check Your Context**

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

## **When Context Works Against You**

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

1. When you start Claude Code in a new project, does it immediately read all files? Why or why not?

2. What's the difference between /compact and /clear?

3. In your Experiment 1, what files did Claude Code read to answer the question about calculateTotal?

4. Describe the multi-step task you completed. How did you decide whether to /compact, /clear, or continue with accumulated context between steps?

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

[image1]: /content/lesson-1/images/module-3-student-image1.png