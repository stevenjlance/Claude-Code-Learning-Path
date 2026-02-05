# **Module 4: Build Sprint**

### **Module Overview**

| Element | Details |
| ----- | ----- |
| **Duration** | 75–90 minutes |
| **Learning Goal** | Create a functional feature, fix, or utility within own codebase, evaluating outputs and iterating toward production-ready code |
| **Core Principle** | Get out of the way. Protect build time. Facilitate demos. |

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

This is the capstone of Lesson 1. **Your role is minimal:** set the challenge, unblock when needed, keep time, run demos.

There is no lecture. They have the skills from M1-M3. Now they ship.

</div>
</div>

## **Build Something with Claude Code**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 5–7 minutes MAX</span>
</div>
<div class="instructor-note-content">

**Goal:** Get them building as fast as possible.

**Say:** "You've learned how Claude Code works. You've practiced on small tasks, but now comes the really fun part: build something that matters to you. You have 60 minutes to build and then we will demo what you created to the rest of the group. The only guidance is that you try to build something that you thought would be impossible to do in 1 hour prior to learning about Claude Code."

**Then:** "Take 2 minutes to pick your project. Look at the options and starter ideas in your materials. Then we start."

Circulate during these 2 minutes. Help anyone who's stuck.

</div>
</div>

You've learned how Claude Code works. You've practiced on small tasks, but now comes the really fun part: build something that matters to you.

You have 60 minutes to build and then we will demo what you created to the rest of the group. The only guidance is that you **try to build something that you thought would be impossible to do in 1 hour prior to learning about Claude Code**.

![Anthropic Launches Claude Code on the Web][image1]  
**Source**: [Anthropic](https://www.c-sharpcorner.com/news/anthropic-launches-claude-code-on-the-web)

## **Pick Your Project**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

Don't read through all the options. Let them read. Help individuals who are stuck.

**If someone can't decide, ask:**
- "What's been annoying you lately in your code?"
- "What tool do you wish existed?"
- "What have you been putting off because it felt like too much work?"

</div>
</div>

### **Option A: Feature in an existing codebase**

Add something real to a project you're already working on:

* A feature you've been putting off  
* An integration you've wanted to try  
* A refactor that's been nagging at you  
* A developer tool that would make your workflow better

### **Option B: Build something from scratch**

Start a new project that solves a problem you care about:

* A CLI tool for something you do manually  
* An automation script for a repetitive task  
* A small utility library you wish existed  
* A prototype for an idea you've been sitting on

### **Option C: Fix something that's been broken**

Attack technical debt or long-standing issues:

* A bug that's been lingering  
* Test coverage for untested code  
* Documentation that doesn't exist  
* Error handling that's been "good enough"

## **Scope It Right**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

**Watch for scope problems during the first 10 minutes of build time:**

**Too big:** "I'm going to build a full authentication system with OAuth, password reset, and 2FA" → Help them pick one piece. "What's the core? Build that first."

**Too vague:** "I'm going to improve my code" → Push for specifics. "What specifically will be different when you're done?"

**Too small:** "I'll just add one function" → Push for ambition. "That's M2/M3 level. What would you build if you had more time? Try that."

</div>
</div>

You have 60 minutes of build time. Pick something that:

* **Works:** Can demo functional output at the end, even if it's v0.1  
* **Stretches:** More ambitious than the tasks we have done in previous sections.  
* **Fits:** Achievable in the time, even if not polished

If you're unsure, start with something concrete and expand if time allows. A working small thing beats an incomplete big thing.

You have 60 minutes of build time. Pick something that:

* **Works:** Can demo functional output at the end, even if it's v0.1  
* **Stretches:** More ambitious than the tasks we have done in previous sections.  
* **Fits:** Achievable in the time, even if not polished

If you're unsure, start with something concrete and expand if time allows. A working small thing beats an incomplete big thing.

## **Starter Ideas**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
</div>
<div class="instructor-note-content">

Reference material only. Don't walk through these. They're here for learners who need inspiration.

</div>
</div>

Need inspiration? Here are concrete examples by category:

1. ### **Web/Frontend**

* Add dark mode to an existing app  
* Build a reusable component library starter  
* Create a form with validation end-to-end  
* Add keyboard shortcuts to an interface

2. ### **Backend/API**

* Build a REST API for something you track manually  
* Add authentication to an existing service  
* Create a webhook handler for a service you use  
* Build a data migration script

3. ### **CLI/Automation**

* A tool that organizes files based on rules you define  
* A script that sets up your dev environment  
* A CLI for interacting with an API you use frequently  
* A tool that generates boilerplate you write often

4. ### **Testing/Quality**

* Add comprehensive tests to an untested module  
* Build a test data generator for your project  
* Create integration tests for a critical flow  
* Add error boundaries and fallbacks throughout an app

5. ### **Something Else**

* A browser extension for something you do daily  
* A Slack bot that solves a team problem  
* A documentation site for a project that needs it  
* A monitoring dashboard for something you care about

## **Build**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 60 minutes</span>
</div>
<div class="instructor-note-content">

**Start the clock:** "Alright, build time starts now. I'll give time checks."

**Your role during build:**
- Circulate constantly. Don't sit down.
- Unblock quickly. If someone is stuck for more than 3–5 minutes, intervene.
- Keep interventions short. Ask what's blocking them, suggest `/clear` or a different approach, move on.
- Don't demo for the room. Don't give tips to everyone. Let them work.

**Time checks (announce to room):**
- **15 min:** "You're about a quarter through. If you haven't started coding, start now."
- **30 min:** "Halfway point. You should have something working, even if rough."
- **45 min:** "Fifteen minutes left. Start wrapping toward something demo-able."
- **55 min:** "Five minutes. Finish what you're on. Don't start new features."

**Common interventions:**

| Situation | What to say |
| ----- | ----- |
| Can't decide what to build | "What's the last thing that annoyed you? Build the fix." |
| Scope creeping | "What do you need for your demo? Build that first." |
| Claude Code stuck/looping | "Try `/clear` and a more specific request." |
| Finished early | "What would make it production-ready? Tests? Error handling?" |
| Frustrated | "What's blocking you? Let's fix one thing." |

</div>
</div>

![Coding - where to start for people without a technical background][image2]

**Source**: [LinkedIn](http://linkedin.com/pulse/coding-where-start-people-without-technical-background-avi-lewis)

You have the tools. You know how to manage context. **Remember:**

* Break big tasks into scoped requests  
* Use `/clear` when switching focus  
* Guide Claude Code when it goes off track  
* Verify as you go, not just at the end

Let’s start building\!

## **Demo**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 15–20 minutes</span>
</div>
<div class="instructor-note-content">

**Transition:** "Build time is up. Save your work. Time for demos."

**Format:** 2–3 minutes per person. Use a visible timer. Be firm on time.

**Order:** Ask for volunteers first. If needed, go around the room.

**Facilitation:**
- Quick acknowledgment between demos, then move on.
- If demo doesn't work: "Show us what you got. Where did it break?"
- If nervous: "Just show us. Everyone wants to see."

**For large groups (15+):**
- Aim for 8–10 demos
- Or break into small groups of 5–6 and demo within groups

**After all demos:** "You built something real today. That's the point of this lesson."

</div>
</div>

At the end of the build time, you'll have 2 \- 3 minutes to show what you built.

**Show:**

* What it does (working demo if possible)  
* One interesting moment from the build (something Claude Code did well, or something you had to guide)

**Don't worry about:**

* Polish  
* Completeness  
* Whether it's "impressive enough"

The point is shipping something real with Claude Code. That's the accomplishment.

## **Submission**

<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 2–3 minutes</span>
</div>
<div class="instructor-note-content">

Provide submission link/instructions based on your setup.

**Say:** "Your submission is your knowledge check for this lesson. Link to your code, brief description, and one thing you learned."

</div>
</div>

Your submission is your knowledge check for this lesson.

**Submit:**

1. **Link to your code** (GitHub repo, gist, or zip file)  
2. **Brief description** (2-3 sentences: what you built, what problem it solves)  
3. **One thing you learned** about working with Claude Code on a larger task

Submissions will be reviewed for:

* Functional output (does it work?)  
* Appropriate use of Claude Code (scoped requests, context management)  
* Iteration (evidence of refining/improving based on output)

## **Resources**

* [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code) — Reference if you get stuck  
* [Claude Code CLI Reference](https://docs.anthropic.com/en/docs/claude-code/cli-reference) — Command reference

---

# **Appendices (Instructor Reference Only)**

---

## **Appendix A: Time Blocks**

| Phase | Duration | % of Module |
| ----- | ----- | ----- |
| Setup \+ Project Selection | 5–7 min | \~8% |
| **Build Time** | **60 min** | **\~70%** |
| **Demos** | **15–20 min** | **\~18%** |
| Submission \+ Close | 2–4 min | \~4% |
| **Total** | **\~85 min** | **100%** |

**If running short:** Cut setup shorter. Build time or demos are foundationally important to the lesson outcomes

## **Appendix B: Scoping Help**

**If someone can't decide, ask:**

1. "What's something you've been putting off because it felt tedious?"  
2. "What tool doesn't exist that you wish did?"  
3. "What part of your codebase makes you cringe?"  
4. "If you had a junior dev for an hour, what would you have them build?"

**If they still can't decide, assign:**

* "Add comprehensive tests to one module in your project"  
* "Build a CLI tool that does \[something from their domain\]"  
* "Add error handling and logging to your most critical function"

---

## **Appendix C: Demo Logistics**

| Group Size | Time per Demo | Strategy |
| ----- | ----- | ----- |
| 6–10 | 2–3 min | Everyone demos |
| 11–15 | 2 min | Everyone demos, strict timing |
| 16–20 | 2 min | Aim for 10–12 demos |
| 20+ | 2 min | Breakout groups or gallery walk |

**Gallery walk (for 20+):**

1. Everyone at their laptop with demo ready  
2. Half walks, half presents (then swap)  
3. 1 min per demo, rotate on signal  
4. 10 min per round

---

## **Appendix D: Unblocking Quick Reference**

| Symptom | Likely cause | Quick fix |
| ----- | ----- | ----- |
| "Claude Code isn't doing what I want" | Vague request | "What specifically should it do? Tell it exactly that." |
| "It keeps making the same mistake" | Stale context | "`/clear` and start fresh with a precise request." |
| "I don't know where to start" | Overwhelmed | "What's the smallest useful piece? Start there." |
| "It's taking forever" | Too much context | "Run `/cost`. If high, `/compact` or `/clear`." |
| "I finished but it feels small" | Under-scoped | "Add tests. Add error handling. Make it shippable." |
| "Nothing works" | Frustration | "Show me the last thing that worked. Let's go from there." |

---

[image1]: /content/lesson-1/images/module-4-instructor-image1.png

[image2]: /content/lesson-1/images/module-4-instructor-image2.png