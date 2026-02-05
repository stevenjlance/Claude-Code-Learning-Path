import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PhilosophyPage from './pages/PhilosophyPage'
import ModulePage from './pages/ModulePage'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/lesson/:lessonId/module/:moduleId" element={<ModulePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
