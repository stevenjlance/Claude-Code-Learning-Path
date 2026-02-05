import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { lessons, volatilityInfo } from '../data/lessons'
import './ModulePage.css'

function ModulePage() {
  const { lessonId, moduleId } = useParams()
  const [viewMode, setViewMode] = useState('student')

  const lesson = lessons.find(l => l.id === parseInt(lessonId))
  const module = lesson?.modules.find(m => m.id === parseInt(moduleId))

  if (!lesson || !module) {
    return (
      <div className="module-not-found">
        <h1>Module not found</h1>
        <Link to="/">Return to Home</Link>
      </div>
    )
  }

  const currentModuleIndex = lesson.modules.findIndex(m => m.id === parseInt(moduleId))
  const prevModule = currentModuleIndex > 0 ? lesson.modules[currentModuleIndex - 1] : null
  const nextModule = currentModuleIndex < lesson.modules.length - 1 ? lesson.modules[currentModuleIndex + 1] : null

  // Check if next lesson exists
  const nextLesson = lessons.find(l => l.id === lesson.id + 1)
  const prevLesson = lessons.find(l => l.id === lesson.id - 1)

  return (
    <div className="module-page">
      {/* Sidebar */}
      <aside className="module-sidebar">
        <div className="sidebar-header">
          <Link to="/" className="back-link">
            <svg viewBox="0 0 24 24" fill="none" className="back-icon">
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All Lessons
          </Link>
        </div>

        <div className="sidebar-lesson">
          <span className="sidebar-lesson-label">Lesson {lesson.id}</span>
          <h2 className="sidebar-lesson-title">{lesson.title}</h2>
        </div>

        <nav className="sidebar-modules">
          {lesson.modules.map((mod) => (
            <Link
              key={mod.id}
              to={`/lesson/${lesson.id}/module/${mod.id}`}
              className={`sidebar-module-link ${mod.id === parseInt(moduleId) ? 'active' : ''}`}
            >
              <span className="sidebar-module-number">M{mod.id}</span>
              <span className="sidebar-module-title">{mod.title}</span>
              <span
                className="sidebar-volatility"
                style={{ backgroundColor: volatilityInfo[mod.volatility].color }}
              />
            </Link>
          ))}
        </nav>

        {nextLesson && (
          <div className="sidebar-next-lesson">
            <span className="next-lesson-label">Next Lesson</span>
            <Link to={`/lesson/${nextLesson.id}/module/1`} className="next-lesson-link">
              {nextLesson.title}
              <svg viewBox="0 0 24 24" fill="none" className="next-icon">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="module-main">
        {/* Module Header */}
        <header className="module-header">
          <div className="module-meta">
            <span className="module-breadcrumb">
              Lesson {lesson.id} · Module {module.id}
            </span>
            <div className="module-badges">
              <span
                className="volatility-tag"
                style={{
                  backgroundColor: `${volatilityInfo[module.volatility].color}20`,
                  color: volatilityInfo[module.volatility].color
                }}
              >
                {module.volatility}
              </span>
              {module.duration && (
                <span className="duration-tag">
                  <svg viewBox="0 0 24 24" fill="none" className="clock-icon">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {module.duration}
                </span>
              )}
            </div>
          </div>
          <h1 className="module-title">{module.title}</h1>
          <p className="module-description">{module.description}</p>
        </header>

        {/* View Toggle */}
        <div className="view-toggle-container">
          <div className="view-toggle">
            <button
              className={`toggle-btn ${viewMode === 'student' ? 'active' : ''}`}
              onClick={() => setViewMode('student')}
            >
              <svg viewBox="0 0 24 24" fill="none" className="toggle-icon">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Student View
            </button>
            <button
              className={`toggle-btn ${viewMode === 'instructor' ? 'active' : ''}`}
              onClick={() => setViewMode('instructor')}
            >
              <svg viewBox="0 0 24 24" fill="none" className="toggle-icon">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Instructor View
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="module-content">
          <ModuleContent
            lessonId={lessonId}
            moduleId={moduleId}
            viewMode={viewMode}
          />
        </div>

        {/* Navigation */}
        <nav className="module-nav">
          {prevModule ? (
            <Link
              to={`/lesson/${lesson.id}/module/${prevModule.id}`}
              className="nav-btn prev"
            >
              <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="nav-text">
                <span className="nav-label">Previous</span>
                <span className="nav-title">{prevModule.title}</span>
              </div>
            </Link>
          ) : prevLesson ? (
            <Link
              to={`/lesson/${prevLesson.id}/module/${prevLesson.modules.length}`}
              className="nav-btn prev"
            >
              <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="nav-text">
                <span className="nav-label">Previous Lesson</span>
                <span className="nav-title">{prevLesson.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextModule ? (
            <Link
              to={`/lesson/${lesson.id}/module/${nextModule.id}`}
              className="nav-btn next"
            >
              <div className="nav-text">
                <span className="nav-label">Next</span>
                <span className="nav-title">{nextModule.title}</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : nextLesson ? (
            <Link
              to={`/lesson/${nextLesson.id}/module/1`}
              className="nav-btn next"
            >
              <div className="nav-text">
                <span className="nav-label">Next Lesson</span>
                <span className="nav-title">{nextLesson.title}</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ) : (
            <Link to="/" className="nav-btn next complete">
              <div className="nav-text">
                <span className="nav-label">Complete!</span>
                <span className="nav-title">Return to Overview</span>
              </div>
              <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </nav>
      </main>
    </div>
  )
}

// Separate component for module content with markdown loading
function ModuleContent({ lessonId, moduleId, viewMode }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true)
      setError(null)

      try {
        // Construct the path to the markdown file
        const contentPath = `/content/lesson-${lessonId}/module-${moduleId}-${viewMode}.md`
        const response = await fetch(contentPath)

        if (!response.ok) {
          throw new Error(`Content not available for this module (${viewMode} view)`)
        }

        const text = await response.text()

        // Check if we got HTML instead of markdown (happens when file doesn't exist)
        if (text.includes('<!DOCTYPE html>') || text.includes('<script type="module"')) {
          throw new Error('Content not available')
        }

        setContent(text)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [lessonId, moduleId, viewMode])

  if (loading) {
    return (
      <div className="content-wrapper">
        <div className="content-loading">
          <div className="loading-spinner"></div>
          <p>Loading content...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="content-wrapper">
        <div className="content-placeholder">
          <div className="placeholder-icon">🚧</div>
          <h3>Under Construction</h3>
          <p>This module is currently being developed. Check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="content-wrapper">
      <article className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Custom link renderer to handle external links
            a: ({ node, href, children, ...props }) => {
              const isExternal = href?.startsWith('http')
              return (
                <a
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  {...props}
                >
                  {children}
                </a>
              )
            },
            // Custom div renderer to preserve class names from raw HTML
            div: ({ node, className, children, ...props }) => {
              return (
                <div className={className} {...props}>
                  {children}
                </div>
              )
            },
            // Custom span renderer to preserve class names from raw HTML
            span: ({ node, className, children, ...props }) => {
              return (
                <span className={className} {...props}>
                  {children}
                </span>
              )
            },
            // Custom code block renderer
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              const language = match ? match[1] : ''

              if (inline) {
                return (
                  <code className="inline-code" {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <div className="code-block-wrapper">
                  {language && <span className="code-language">{language}</span>}
                  <pre className={className}>
                    <code {...props}>{children}</code>
                  </pre>
                </div>
              )
            },
            // Custom image renderer for better sizing
            img: ({ node, src, alt, ...props }) => {
              return (
                <span className="image-wrapper">
                  <img src={src} alt={alt || ''} loading="lazy" {...props} />
                  {alt && <span className="image-caption">{alt}</span>}
                </span>
              )
            },
            // Custom table wrapper for horizontal scrolling
            table: ({ node, children, ...props }) => {
              return (
                <div className="table-wrapper">
                  <table {...props}>{children}</table>
                </div>
              )
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default ModulePage
