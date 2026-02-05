# **Module 2: Setup, First Commands & Quick Win**

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

## **First Commands**

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

| Command | What it does |
| :---- | :---- |
| `/help` | List available slash commands |
| `/clear` | Clear conversation history and free up context |
| `/cost` | Show token usage for the current session |
| `/compact` | Summarize conversation to reduce context size |
| `/model` | Switch between available models |
| `Ctrl+C` | Cancel current operation |
| `Esc` | Exit Claude Code |

You don't need to memorize these. Use `/help` when you need a refresher.

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

| Command | What it does |
| :---- | :---- |
| `/help` | List available slash commands |
| `/clear` | Clear conversation history and free up context |
| `/cost` | Show token usage for the current session |
| `/compact` | Summarize conversation to reduce context size |
| `/model` | Switch between available models |
| `Ctrl+C` | Cancel current operation |
| `Esc` | Exit Claude Code |

You don't need to memorize these. Use `/help` when you need a refresher.

## **Complete What You Started**

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

## **Apply It To Your Own Code**

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

Take 30 seconds to share with the group:

* What task did you complete?  
* What surprised you about how Claude Code approached it?  
* What would you do differently next time?

## **Troubleshooting**

If you hit issues during setup or your first commands, ask Claude Code for help:

```shell
> I'm getting [describe the error]. How do I fix it?
```

Claude Code can diagnose most common setup issues. If you're stuck and Claude Code can't help, flag the instructor.

For API outages or service issues, check [status.anthropic.com](https://status.anthropic.com/).

---

## **Knowledge Check**

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

[image1]: /content/lesson-1/images/module-2-student-image1.png

[image2]: /content/lesson-1/images/module-2-student-image2.png

[image3]: /content/lesson-1/images/module-2-student-image3.png