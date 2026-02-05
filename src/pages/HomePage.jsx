import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import LessonCard from '../components/LessonCard'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Learning Path</div>
          <h1 className="hero-title">
            From Pair Programmer<br />
            <span className="highlight">to Agent Builder</span>
          </h1>
          <p className="hero-description">
            Master Claude Code through hands-on projects. Build real features,
            ship working code, and create autonomous agents—all while learning
            the patterns that make AI-assisted development powerful.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">6</span>
              <span className="stat-label">Lessons</span>
            </div>
            <div className="stat">
              <span className="stat-value">21</span>
              <span className="stat-label">Modules</span>
            </div>
            <div className="stat">
              <span className="stat-value">~12</span>
              <span className="stat-label">Hours</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#lessons" className="btn btn-primary">Start Learning</a>
            <Link to="/philosophy" className="btn btn-secondary">Our Approach</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-title">Terminal</span>
            </div>
            <div className="code-body">
              <div className="code-line">
                <span className="prompt">$</span> claude
              </div>
              <div className="code-line output">
                <span className="claude-prompt">›</span> add unit tests for calculateTotal
              </div>
              <div className="code-line dimmed">
                Reading src/cart.js...
              </div>
              <div className="code-line dimmed">
                Analyzing dependencies...
              </div>
              <div className="code-line success">
                ✓ Created tests/cart.test.js
              </div>
              <div className="code-line success">
                ✓ All 8 tests passing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Build Section */}
      <section className="outcomes">
        <div className="outcomes-content">
          <h2 className="section-title">What You'll Build</h2>
          <p className="section-subtitle">
            Every lesson ends with a real artifact you can use immediately
          </p>
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>Ship Features</h3>
              <p>Build and deploy real features in your own codebase from day one</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <h3>Test Suites</h3>
              <p>Create comprehensive test coverage using TDD workflows</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                  <line x1="12" y1="2" x2="12" y2="22" opacity="0"/>
                </svg>
              </div>
              <h3>Custom Workflows</h3>
              <p>Design slash commands and configurations tailored to your needs</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2"/>
                  <circle cx="12" cy="5" r="3"/>
                  <path d="M8 16h.01M12 16h.01M16 16h.01"/>
                </svg>
              </div>
              <h3>Autonomous Agents</h3>
              <p>Build agents that work independently on defined tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="lessons" id="lessons">
        <div className="lessons-content">
          <h2 className="section-title">The Learning Path</h2>
          <p className="section-subtitle">
            Progress from guided collaboration to autonomous agent development
          </p>
          <div className="lessons-grid">
            {lessons.map((lesson, index) => (
              <LessonCard key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to transform how you code?</h2>
          <p>Start with Lesson 1 and ship something real today.</p>
          <Link to="/lesson/1/module/1" className="btn btn-primary btn-large">
            Begin Lesson 1
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
