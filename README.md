# Claude Code Learning Path

A React-based educational website for teaching Claude Code to technical employees. This curriculum takes learners from basic pair programming concepts to building autonomous agents.

## Overview

This learning path consists of 6 lessons with 21 total modules, designed to progressively build skills in using Claude Code:

1. **Ship Something Today** - Get started with Claude Code and build something real
2. **Claude as Pair Programmer** - Master debugging and testing workflows
3. **Make It Yours** - Customize with commands and configurations
4. **Understand and Run Agents** - Build autonomous agents
5. **Extend Your Agent with Hooks** - Add event-driven behaviors
6. **Give Your Agent Reach** - Connect to external tools via MCP

Currently, **Lesson 1** is fully developed with 4 modules covering:
- What Claude Code Is
- Setup & Shipping a Feature
- Context & Codebase Awareness
- Build Sprint

## Features

- **Student/Instructor Toggle** - Each module has both student-facing content and instructor guides with timing notes, facilitation tips, and troubleshooting
- **Volatility Ratings** - Content is tagged as Stable, Moderate, or Volatile to indicate update frequency needed
- **Embedded Media** - YouTube videos and GIF demonstrations integrated into lessons
- **Responsive Design** - Works across desktop and tablet devices

## Tech Stack

- React 19
- Vite
- React Router
- React Markdown (with remark-gfm and rehype-raw)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Learning_Path.git
cd Learning_Path

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Project Structure

```
Learning_Path/
├── public/
│   └── content/
│       └── lesson-1/
│           ├── images/           # Module images and GIFs
│           ├── module-1-student.md
│           ├── module-1-instructor.md
│           ├── module-2-student.md
│           ├── module-2-instructor.md
│           ├── module-3-student.md
│           ├── module-3-instructor.md
│           ├── module-4-student.md
│           └── module-4-instructor.md
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── LessonCard.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── PhilosophyPage.jsx
│   │   └── ModulePage.jsx
│   ├── data/
│   │   └── lessons.js           # Lesson/module metadata
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Adding New Content

### Adding a New Module

1. Create markdown files in `public/content/lesson-X/`:
   - `module-Y-student.md` - Student-facing content
   - `module-Y-instructor.md` - Instructor guide with notes

2. Add module metadata to `src/data/lessons.js`

3. Place any images in `public/content/lesson-X/images/`

### Instructor Notes Format

Instructor notes use a custom HTML callout format:

```html
<div class="instructor-note">
<div class="instructor-note-header">
<span class="instructor-note-icon">👨‍🏫</span>
<span class="instructor-note-title">Instructor Note</span>
<span class="instructor-note-timing">⏱ 5 minutes</span>
</div>
<div class="instructor-note-content">

**Your content here** with markdown formatting supported.

</div>
</div>
```

## Deployment

This is a static site that can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

## License

This project was created as part of an Anthropic job application task.
