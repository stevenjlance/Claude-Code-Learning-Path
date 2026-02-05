# **Module 2: Setup and Shipping a Feature**

| Element | Details |
| ----- | ----- |
| **Duration** | 45–55 minutes |
| **Learning Goal** | Configure Claude Code in their environment, demonstrate basic commands to verify successful installation, and create a small, scoped addition to a codebase (e.g., a utility function) to experience the core workflow. |
| **Core Principle** | Learners DOING, not watching. Your job is to get them into Claude Code fast and then get out of the way. |

| Instructor Note This module is about building confidence through action. Resist the urge to lecture. The more time learners spend with their hands on the keyboard working with Claude Code, the more they'll retain. The goal is for every learner to leave having shipped something real to their own codebase. |
| :---- |

---

## **Install Claude Code**

| Instructor Note ⏱ Timing: 5–8 minutes Setup: Have the installation commands ready to display. Some learners will finish quickly; others will hit snags. Pair fast finishers with those having trouble. Watch for: Windows users on CMD vs PowerShell (different commands) Corporate proxy/firewall issues Learners who need to restart terminal Your role: Circulate. Don't lecture. Answer questions as they arise. |
| :---- |

You've seen what Claude Code can do, now let’s download it on your machine and start using it on a project of your own\!

## **Install Claude Code**

### **Prerequisites**

Before installing, confirm you have an Anthropic account. If you don’t have one, [create one](https://console.anthropic.com/). **You will need at least a Claude Pro account to begin using Claude code.**

### **Installation**

**macOS, Linux, or WSL:**

```shell
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell:**

```shell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD:**

```shell
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**Installation not working?** Check [the Claude Code installation page](https://code.claude.com/docs/en/setup#installation).

Verify the installation:

```shell
claude --version
```

You should see a version number. If you get "command not found," restart your terminal and try again.

### **Authentication**

Start Claude Code:

```shell
claude
```

On first launch, Claude Code will prompt you to authenticate. Follow the browser-based flow to connect your Anthropic account.

Once authenticated, you'll see the Claude Code prompt:

![][image1]

| Instructor Note Checkpoint: Before moving on, do a quick hand-raise: "Who has Claude Code running and authenticated?" Don't proceed until at least 80% have it working. Pair remaining stragglers with neighbors. |
| :---- |

## **First Commands**

| Instructor Note  ⏱ Timing: 3–5 minutes Purpose: Quick verification that Claude Code sees the project. This should be fast. Don't dwell here. Say: "Run through these three commands. If they all work, you're ready. If something fails, start by checking against the commands listed. Then work with a neighbor. If there are still issues, I’m here to help." |
| :---- |

Before building anything, get oriented with these commands.

### **Check Claude Code can see your project**

Navigate to the `L1-M1-Build-Tests` directory from the last section:

```shell
cd claude-code-starter
claude
```

Then ask Claude Code about the project:

```shell
> what files are in this project?
```

Claude Code will read your directory structure and describe what it finds.

![][image2]

### **Verify Claude Code can read file contents**

```shell
> summarize src/cart.js
```

Claude Code should describe the Cart class, its methods, and the dependencies it imports.

### **Verify Claude Code can run commands**

```shell
> run npm test
```

Claude Code will execute the test suite and show you the results.

## **Essential Commands Reference**

| Instructor Note Don't teach this table. Just point to it: "Here's a reference. We should never memorize these commands. The only command you need to remember is `/help` as it will give you all the commands to use if you forget\!" |
| :---- |

| Command | What it does |
| :---- | :---- |
| `/help` | List available slash commands |
| `/clear` | Clear conversation history and free up context |
| `/cost` | Show token usage for the current session |
| `/compact` | Summarize conversation to reduce context size |
| `/model` | Switch between available models |
| `Ctrl+C` | Cancel current operation |
| `Esc` | Exit Claude Code |

## **Complete What You Started**

| Instructor Note ⏱ Timing: 8–10 minutes Purpose: Close the loop from M1. Learners experienced the pain; now they experience the solution. Setup: Everyone should still have the starter repo from M1. Say: "Remember that frustrating exercise where you tried to add tests with copy-paste? Now do it the right way. One command. Go." Watch for: Permission prompts: Make sure learners understand `a` to allow all Learners who deleted/moved the starter repo (help them re-clone) Don't explain what Claude Code is doing. Let them observe it themselves. The aha moment comes from watching, not from being told. |
| :---- |

In M1, you tried to add unit tests to `src/cart.js` using your usual tools. Now do it with Claude Code. 

Make sure you're in the `L1-M1-Build-Tests` directory with Claude Code running:

```shell
cd L1-M1-Build-Tests 
claude
```

Now add the tests by running:

```shell
> add comprehensive unit tests for src/cart.js
```

You should see something similar to what we saw in the demo from the last section with tests being added to the project. Claude Code:

1. Reads cart.js  
2. Reads the dependencies  
3. Creates tests  
4. Runs them  
5. Encounters a failure  
6. Fixes it  
7. Runs again  
8. Tests pass

As Claude Code works, notice:

1. **It reads dependencies automatically.** You didn't tell it about `taxRates.js` or `discounts.js`. It found them by reading the imports.  
2. **It runs the tests itself.** No copy-paste of results back and forth.  
3. **It iterates on failures.** If a test fails, it reads the error and fixes the issue.  
4. **It asks permission for actions.** Claude Code will ask before writing files or running commands. You can approve individually or allow for the session.

### **Approve or guide**

Claude Code will ask permission for certain actions:

![][image3]

For this exercise, type `a` to allow all. In real work, you'll develop judgment about when to review each action versus allowing Claude Code to proceed.

## **Verify Your Quick Win**

After Claude Code finishes, confirm the tests work by running

```shell
> run npm test
```

You should see passing tests. If something failed, tell Claude Code:

```shell
> the test for [describe the failure] is failing. fix it.
```

Claude Code will read the error, diagnose the issue, and make corrections.

| Instructor Note Checkpoint: "Who has passing tests?" Quick hand-raise. Troubleshoot stragglers. Transition: "You just did in a few minutes what took 10+ minutes with copy-paste. Now the real work: let’s use this on your own code." |
| :---- |

## **Apply It To Your Own Code**

| Instructor Note ⏱ Timing: 20–25 minutes This is where the learning happens. Everything before this was setup. This is the work. Your role: Circulate constantly Answer questions briefly, then move on If someone is stuck on task selection, help them pick something specific and small Encourage learners who finish early to try a second task Common problems: Task too vague → Help them make it specific Task too big → Help them scope down Wrong directory → Help them navigate to their project No project available → Have them use a public repo they're familiar with Don't: Demo for the whole room (they should be doing, not watching) Let anyone sit idle Let learners get stuck for more than 2 minutes without intervening |
| :---- |

Now use Claude Code on a real project you're working on. Navigate to a project that you are working on that you think Claude Code would be useful for. 

Choose something small and concrete:

* Add a utility function you've been meaning to write  
* Generate tests for an untested module  
* Add input validation to a form  
* Write documentation for a confusing function  
* Fix a small bug you've been putting off

Tell Claude Code what you want. Be specific about the outcome.

**Too vague:**

```shell
> improve this code
```

**Better:**

```shell
> add input validation to src/forms/signup.js that checks email format and password length (min 8 characters)
```

As Claude Code works on your code, pay attention to:

* What files does it read that you didn't mention?  
* Does it run any commands to verify its work?  
* How does it handle errors or unexpected situations?

### **If something goes wrong**

Claude Code will make mistakes. When it does:

* **Guide it:** Describe what's wrong and what you want instead  
* **Undo:** Use git to revert changes (`git checkout -- .` or `git stash`)  
* **Start fresh:** Use `/clear` and try a different approach

The goal isn't perfection on the first try. The goal is to experience the iterate-and-correct workflow that makes Claude Code effective.

## **Shareout: What Did You Build?**

| Instructor Note Timing: 5–8 minutes Purpose: Celebrate wins. Create social proof. Surface interesting use cases. Format: Quick popcorn-style shares. Not presentations—just 30-second "I did X, Claude Code did Y, and it was interesting because Z." Prompt: "Who wants to share what they just shipped? What did you ask Claude Code to do, and what surprised you?" Guide the conversation toward: Interesting files Claude Code read without being told Unexpected iterations or fixes Moments where guidance helped Tasks that were harder than expected Capture: If you hear a particularly good example, note it for reference in later modules. If no one volunteers: Call on 2-3 people directly. "Alex, what did you work on?" |
| :---- |

Take 30 seconds to share with the group:

* What task did you complete?  
* What surprised you about how Claude Code approached it?  
* What would you do differently next time?

**Troubleshooting**

If you hit issues during setup or your first commands, ask Claude Code for help:

```shell
> I'm getting [describe the error]. How do I fix it?
```

Claude Code can diagnose most common setup issues. If you're stuck and Claude Code can't help, flag the instructor.

For API outages or service issues, check [status.anthropic.com](https://status.anthropic.com/).

---

## **Knowledge Check**

| Instructor Note ⏱ Timing: 2–3 minutes The main evidence of their success in this module is that they can build something using Claude Code on their own codebase. These are summary questions, so are not the main form of assessment. These can be done aloud to stamp the key points of the lesson. |
| :---- |

1. What command starts Claude Code in your terminal?

2. What does the `/clear` command do, and when would you use it?

3. During your Quick Win, did Claude Code read any files you didn't explicitly mention? Which ones and why?

4. What task did you complete on your own codebase? What did you observe about how Claude Code approached it?

### **Answers**

1. `claude` — Run this from any project directory.

2. `/clear` clears conversation history and frees up context. Use it when starting a new task unrelated to your previous conversation, or when Claude Code seems confused by old context.

3. Yes. Claude Code read `taxRates.js` and `discounts.js` because `cart.js` imports them. Understanding the dependencies was necessary to write accurate tests with correct mock values.

4. Answers will vary. Key observations might include: Claude Code read related files to understand context, ran commands to verify its work, or iterated when something didn't work the first time.

## **Summary**

You installed Claude Code, verified it can read your project and run commands, and completed two tasks: the unit tests from M1 and a task on your own codebase. The key difference from your previous workflow: Claude Code sees your codebase directly, so it can understand dependencies, run commands, and iterate on failures without you relaying information.

In the next module, you'll learn how Claude Code builds context and how to scope your requests for best results.

---

## **Resources**

* [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code) — Official docs  
* [Claude Code CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference) — Full command reference  
* [Anthropic Status](https://status.anthropic.com/) — Check for API issues

# **Appendices**

---

## **Appendix A: Anticipated Failure Points**

### **Installation Phase**

| Issue | Symptoms | Resolution |
| ----- | ----- | ----- |
| Command not found after install | `claude: command not found` | Restart terminal; check PATH |
| Proxy/firewall blocks download | Curl hangs or times out | Use corporate-approved VPN or hotspot |
| Wrong shell command | PowerShell command in CMD or vice versa | Confirm shell type, use correct command |
| Authentication fails | Browser redirects but CLI doesn't respond | Restart `claude` command; check browser popup blockers |

### **Quick Win Phase**

| Issue | Symptoms | Resolution |
| ----- | ----- | ----- |
| Starter repo missing | Directory not found | Re-clone from original source |
| npm not installed | `npm: command not found` | Install Node.js (prerequisite from M1) |
| Tests still fail after iteration | Claude Code stops iterating | Guide with specific failure description |
| Permission denied on file write | Error on write operation | Check file permissions; may need `chmod` |

### **Own Code Phase**

| Issue | Symptoms | Resolution |
| ----- | ----- | ----- |
| Task too vague | Claude Code asks clarifying questions endlessly | Help learner write specific prompt |
| Task too large | Claude Code starts making sweeping changes | Scope down to single file/function |
| Wrong directory | Claude Code can't find expected files | Navigate to correct project root |
| No git initialized | Learner can't undo changes | Help them `git init` or work more carefully |

---

## **Appendix B: Success Criteria**

### **Installation Complete**

* \[ \] `claude --version` returns version number  
* \[ \] `claude` launches and shows prompt  
* \[ \] Authentication completed (no login prompts)

### **First Commands Working**

* \[ \] Claude Code lists project files correctly  
* \[ \] Claude Code summarizes cart.js with accurate details  
* \[ \] Claude Code runs npm test and shows results

### **Quick Win Achieved**

* \[ \] Tests created for cart.js  
* \[ \] Tests pass (`npm test` shows green)  
* \[ \] Learner can articulate what Claude Code did automatically (read dependencies, ran tests, iterated)

### **Own Code Task Completed**

* \[ \] Learner completed at least one task on their own codebase  
* \[ \] Learner can describe what surprised them  
* \[ \] Learner experienced at least one iteration (error → fix cycle)

---

## **Appendix C: Time Blocks**

| Phase | Duration | % of Module |
| ----- | ----- | ----- |
| Install \+ Auth | 5–8 min | \~15% |
| First Commands | 3–5 min | \~10% |
| Quick Win | 8–10 min | \~15% |
| **Own Code** | **20–25 min** | **\~50%** |
| Shareout | 5–8 min | \~10% |
| Knowledge Check | 2–3 min | \~5% |
| **Total** | **45–55 min** | **100%** |

**Key principle:** If you're running short on time, cut from lecture, not from Own Code or Shareout. The doing and sharing are where learning happens.

---

## **Appendix D: Facilitation Tips**

### **Before the Module**

* Test installation on a fresh machine (or VM) to catch platform-specific issues  
* Have backup installation instructions ready (official docs link)  
* Prepare 2-3 backup project repos in case learners don't have their own code

### **During Installation**

* Don't wait for everyone—start verification with fast finishers while helping stragglers  
* Pair up learners who finish early with those having trouble

### **During Own Code**

* **Circulate constantly.** Don't sit down.  
* Ask "What are you working on?" to keep learners focused  
* If someone finishes early: "What else have you been wanting to add to this codebase?"  
* Keep energy high—this should feel productive, not stressful

### **During Shareout**

* Celebrate small wins enthusiastically  
* Draw out specific observations ("What files did it read?" "How many iterations?")  
* If a task failed, that's still valuable—ask what they learned

### **Transitions**

* Use explicit verbal transitions: "Setup is done. Now the real work."  
* Give time warnings: "5 more minutes on your own code, then we'll share."

---

[image1]: /content/lesson-1/images/module-2-instructor-image1.png

[image2]: /content/lesson-1/images/module-2-instructor-image2.png

[image3]: /content/lesson-1/images/module-2-instructor-image3.png