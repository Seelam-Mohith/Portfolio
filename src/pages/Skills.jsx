import { useState } from 'react'
import { motion } from 'framer-motion'
import { ThumbsUp, Users, Search } from 'lucide-react'
import { SKILLS } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'
import { SkillCard } from '../components/SkillCard'

const categories = [
  { id: 'all', label: 'All', count: SKILLS.length },
  { id: 'programming', label: 'Programming', count: SKILLS.filter((s) => s.category === 'programming').length },
  { id: 'ai-ml', label: 'AI/ML', count: SKILLS.filter((s) => s.category === 'ai-ml').length },
  { id: 'libraries', label: 'Libraries', count: SKILLS.filter((s) => s.category === 'libraries').length },
  { id: 'data', label: 'Data Analytics', count: SKILLS.filter((s) => s.category === 'data').length },
  { id: 'tools', label: 'Tools', count: SKILLS.filter((s) => s.category === 'tools').length },
  { id: 'languages', label: 'Languages', count: SKILLS.filter((s) => s.category === 'languages').length },
]

const endorsements = [
  { name: 'Python', endorsers: ['Aarav R.', 'Meera S.', 'Karthik V.', 'Sneha P.', 'Rahul M.'] },
  { name: 'TensorFlow', endorsers: ['Meera S.', 'Karthik V.', 'Ananya G.', 'Vikram T.'] },
  { name: 'OpenCV', endorsers: ['Aarav R.', 'Sneha P.', 'Rahul M.', 'Ananya G.'] },
  { name: 'NLP', endorsers: ['Karthik V.', 'Vikram T.', 'Sneha P.'] },
  { name: 'SQL', endorsers: ['Meera S.', 'Ananya G.', 'Rahul M.'] },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all' ? SKILLS : SKILLS.filter((s) => s.category === activeCategory)

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ThumbsUp size={16} className="text-primary" />
              <h2 className="font-semibold text-text">Skills & Endorsements</h2>
            </div>
            <span className="text-xs text-text-secondary bg-surface-hover px-3 py-1 rounded-full">{SKILLS.length} skills</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface-hover text-text-secondary hover:text-text hover:border-primary/30 border border-border'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {cat.label}
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-white/20' : 'bg-background'
                }`}>{cat.count}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Users size={16} className="text-primary" />
            <h3 className="font-semibold text-text">Top Endorsements</h3>
          </div>
          <div className="space-y-3">
            {endorsements.map((e) => (
              <div key={e.name} className="flex items-center justify-between py-2 px-3 rounded-xl bg-surface-hover/50 hover:bg-surface-hover transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-text w-24">{e.name}</span>
                  <div className="flex -space-x-2">
                    {e.endorsers.slice(0, 3).map((person, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-surface flex items-center justify-center text-[9px] text-white font-medium"
                      >
                        {person.charAt(0)}
                      </div>
                    ))}
                    {e.endorsers.length > 3 && (
                      <div className="w-6 h-6 rounded-full bg-surface-hover border-2 border-surface flex items-center justify-center text-[9px] text-text-secondary">
                        +{e.endorsers.length - 3}
                      </div>
                    )}
                  </div>
                </div>
                <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-primary transition-colors">
                  <ThumbsUp size={12} />
                  <span>{e.endorsers.length}</span>
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
