import { lazy, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { useStore } from './store/useStore'
import { applyTheme } from './utils'
import { THEMES } from './constants'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Experience = lazy(() => import('./pages/Experience'))
const Achievements = lazy(() => import('./pages/Achievements'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))
const Settings = lazy(() => import('./pages/Settings'))

export default function App() {
  const location = useLocation()
  const { setActiveSection, themeId } = useStore()

  useEffect(() => {
    const theme = THEMES.find((t) => t.id === themeId) || THEMES[0]
    applyTheme(theme)
  }, [themeId])

  useEffect(() => {
    const section = location.pathname.replace('/', '') || 'home'
    setActiveSection(section)
  }, [location.pathname, setActiveSection])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
