import { Link } from 'react-router-dom'
import './PhilosophyPage.css'

function PhilosophyPage() {
  return (
    <div className="philosophy-page">
      {/* Hero */}
      <section className="philosophy-hero">
        <div className="philosophy-hero-content">
          <h1>Design Philosophy</h1>
          <p>How we built a learning path that sticks</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="philosophy-content">
        <div className="philosophy-container">

          {/* Learner Persona */}
          <div className="philosophy-section">
            <h2>Designed for the Struggling AI Enthusiast</h2>
            <div className="persona-card">
              <div className="quote-mark">"</div>
              <p>
                I like AI, but have limited knowledge of the tooling since everything is moving so fast.
                I want to build something that I can use <strong>IMMEDIATELY</strong> so that I can be more
                successful at my job. I like to learn, but I need it to be in chunks that have me apply
                the idea and see it in action quickly.
              </p>
            </div>
            <p className="philosophy-text">
              This learning path is built for developers who are excited about AI but overwhelmed by the pace of change.
              Every module is designed to deliver immediate, practical value.
            </p>
          </div>

          {/* Core Principles */}
          <div className="philosophy-section">
            <h2>Core Principles</h2>
            <div className="principles-grid">
              <div className="principle-card">
                <span className="principle-number">01</span>
                <h3>Guide on the Side, Not Sage on the Stage</h3>
                <p>
                  The most impactful learning comes from doing. Learners hit the problem before they get a solution.
                  Experiencing the struggle leads to lasting understanding.
                </p>
              </div>

              <div className="principle-card">
                <span className="principle-number">02</span>
                <h3>Build Something You Can Use</h3>
                <p>
                  Every lesson terminates in a product learners can take away and apply immediately.
                  Work on your own codebase, not contrived examples.
                </p>
              </div>

              <div className="principle-card">
                <span className="principle-number">03</span>
                <h3>Artifacts Over Syntax</h3>
                <p>
                  Every module states what you'll walk away with: a working feature, a multi-step change, a demo.
                  Hands on the keyboard, learning syntax as you need it.
                </p>
              </div>
            </div>
          </div>

          {/* What You Build */}
          <div className="philosophy-section">
            <h2>What You'll Build</h2>
            <p className="philosophy-text">
              Each lesson ends with a tangible artifact—something you keep and use, not just an exercise you forget.
            </p>
            <div className="artifacts-table">
              <div className="artifact-row header">
                <span className="artifact-lesson">Lesson</span>
                <span className="artifact-title">Title</span>
                <span className="artifact-output">Artifact</span>
              </div>
              <div className="artifact-row">
                <span className="artifact-lesson">1</span>
                <span className="artifact-title">Ship Something Today</span>
                <span className="artifact-output">Feature, fix, or new project in your codebase</span>
              </div>
              <div className="artifact-row">
                <span className="artifact-lesson">2</span>
                <span className="artifact-title">Claude as Pair Programmer</span>
                <span className="artifact-output">Test suite for a real codebase module</span>
              </div>
              <div className="artifact-row">
                <span className="artifact-lesson">3</span>
                <span className="artifact-title">Make It Yours</span>
                <span className="artifact-output">Custom slash commands and CLAUDE.md config</span>
              </div>
              <div className="artifact-row">
                <span className="artifact-lesson">4</span>
                <span className="artifact-title">Understand and Run Agents</span>
                <span className="artifact-output">Autonomous agent in headless mode</span>
              </div>
              <div className="artifact-row">
                <span className="artifact-lesson">5</span>
                <span className="artifact-title">Extend Your Agent with Hooks</span>
                <span className="artifact-output">Agent with event-driven behaviors</span>
              </div>
              <div className="artifact-row">
                <span className="artifact-lesson">6</span>
                <span className="artifact-title">Give Your Agent Reach</span>
                <span className="artifact-output">Agent integrated with external tools via MCP</span>
              </div>
            </div>
          </div>

          {/* Maintainability */}
          <div className="philosophy-section">
            <h2>Built to Scale</h2>
            <p className="philosophy-text">
              AI tooling evolves fast. This curriculum is designed as discrete, modular components that can
              be updated independently without breaking the whole system.
            </p>

            <div className="volatility-section">
              <h3>Content Volatility Ratings</h3>
              <p className="volatility-intro">
                Each module is tagged with a volatility rating to prioritize maintenance efforts.
              </p>
              <div className="volatility-grid">
                <div className="volatility-card stable">
                  <div className="volatility-header">
                    <span className="volatility-badge">Stable</span>
                  </div>
                  <p className="volatility-definition">Core concepts, workflow patterns, design principles</p>
                  <p className="volatility-trigger">
                    <strong>Update:</strong> Annual review or major paradigm shifts
                  </p>
                </div>
                <div className="volatility-card moderate">
                  <div className="volatility-header">
                    <span className="volatility-badge">Moderate</span>
                  </div>
                  <p className="volatility-definition">Features that exist but whose syntax may change</p>
                  <p className="volatility-trigger">
                    <strong>Update:</strong> Within 30 days of Claude Code releases
                  </p>
                </div>
                <div className="volatility-card volatile">
                  <div className="volatility-header">
                    <span className="volatility-badge">Volatile</span>
                  </div>
                  <p className="volatility-definition">Cutting-edge features, specific command syntax</p>
                  <p className="volatility-trigger">
                    <strong>Update:</strong> Within 2 weeks of any release
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Alignment to Anthropic Values */}
          <div className="philosophy-section">
            <h2>Aligned to Anthropic's Values</h2>
            <p className="philosophy-text">
              This training system reflects{' '}
              <a href="https://www.anthropic.com/company" target="_blank" rel="noopener noreferrer">
                Anthropic's core values
              </a>{' '}
              in its design.
            </p>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-number">01</span>
                <h3>Building Safer Systems</h3>
                <p>
                  Effective training is safety infrastructure. Developers who understand how to evaluate
                  Claude Code's output, recognize when it's wrong, and know when not to use AI assistance
                  are safer practitioners. This curriculum teaches output evaluation and error recovery as
                  core skills. We measure success not just by what learners build, but by the judgment they
                  demonstrate.
                </p>
              </div>
              <div className="value-card">
                <span className="value-number">02</span>
                <h3>Safety as a Science</h3>
                <p>
                  We treat training quality as a measurable, improvable system. Content is tagged by
                  volatility to prioritize maintenance. Trainers document failure points so institutional
                  knowledge accumulates. Feedback flows from delivery back to content. This is a system
                  that is designed to learn and change as the ecosystem changes.
                </p>
              </div>
              <div className="value-card">
                <span className="value-number">03</span>
                <h3>Contributing to a Broader Ecosystem</h3>
                <p>
                  The train-the-trainer model acknowledges that Anthropic cannot, and should not, be the
                  only voice teaching developers to use AI tools well. By enabling others to teach
                  effectively, we contribute to industry-wide AI literacy rather than gatekeeping expertise.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="philosophy-cta">
            <h2>Ready to start?</h2>
            <Link to="/lesson/1/module/1" className="btn btn-primary btn-large">
              Begin Lesson 1
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PhilosophyPage
