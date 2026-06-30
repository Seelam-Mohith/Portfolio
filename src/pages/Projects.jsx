import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'
import { ProjectCard } from '../components/ProjectCard'
import { PageTransition } from '../components/layout/PageTransition'
import { useState } from 'react'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai-projects', label: 'AI' },
  { id: 'web-projects', label: 'Web' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'open-source', label: 'Open Source' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <motion.button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === f.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-surface border border-border text-text-secondary hover:text-text hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">No projects found in this category.</p>
          </div>
        )}
      </div>
    </PageTransition>
  )
}
