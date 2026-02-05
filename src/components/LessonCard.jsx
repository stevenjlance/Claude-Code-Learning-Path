import { Link } from 'react-router-dom'
import { volatilityInfo } from '../data/lessons'
import './LessonCard.css'

function LessonCard({ lesson, index }) {
  return (
    <div className="lesson-card">
      <div className="lesson-header">
        <span className="lesson-number">Lesson {lesson.id}</span>
        <span className="lesson-modules-count">{lesson.modules.length} modules</span>
      </div>
      <h3 className="lesson-title">{lesson.title}</h3>
      <p className="lesson-description">{lesson.description}</p>

      <div className="lesson-artifact">
        <span className="artifact-label">You'll build:</span>
        <span className="artifact-value">{lesson.artifact}</span>
      </div>

      <div className="lesson-modules">
        <h4 className="modules-title">Modules</h4>
        <ul className="modules-list">
          {lesson.modules.map((module) => (
            <li key={module.id} className="module-item">
              <Link
                to={`/lesson/${lesson.id}/module/${module.id}`}
                className="module-link"
              >
                <span className="module-name">
                  M{module.id}: {module.title}
                </span>
                <div className="module-meta">
                  <span
                    className="volatility-badge"
                    style={{
                      backgroundColor: `${volatilityInfo[module.volatility].color}20`,
                      color: volatilityInfo[module.volatility].color
                    }}
                    title={volatilityInfo[module.volatility].description}
                  >
                    {module.volatility}
                  </span>
                  {module.duration && (
                    <span className="module-duration">{module.duration}</span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={`/lesson/${lesson.id}/module/1`}
        className="lesson-start-btn"
      >
        Start Lesson {lesson.id}
        <svg viewBox="0 0 24 24" fill="none" className="arrow-icon">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}

export default LessonCard
