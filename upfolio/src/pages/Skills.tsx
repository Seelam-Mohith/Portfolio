import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../constants'
import { SkillCard } from '../components/SkillCard'
import { PageTransition } from '../components/layout/PageTransition'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'tools', label: 'Tools' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all' ? SKILLS : SKILLS.filter((s) => s.category === activeCategory)

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-surface border border-border text-text-secondary hover:text-text hover:border-primary/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  )
}
