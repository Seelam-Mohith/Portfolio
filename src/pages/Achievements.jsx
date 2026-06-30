import { motion } from 'framer-motion'
import { Trophy, Award, ScrollText, Sparkles } from 'lucide-react'
import { ACHIEVEMENTS } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'

const typeIcons = {
  hackathon: Trophy,
  certification: ScrollText,
  award: Award,
}

const typeColors = {
  hackathon: 'from-amber-400 to-yellow-300',
  certification: 'from-blue-400 to-indigo-300',
  award: 'from-purple-400 to-pink-300',
}

const typeLabels = {
  hackathon: 'Hackathon',
  certification: 'Certification',
  award: 'Award',
}

export default function Achievements() {
  const grouped = {
    hackathons: ACHIEVEMENTS.filter((a) => a.type === 'hackathon'),
    certifications: ACHIEVEMENTS.filter((a) => a.type === 'certification'),
    awards: ACHIEVEMENTS.filter((a) => a.type === 'award'),
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-primary" />
            <h2 className="font-semibold text-text">Achievements</h2>
          </div>
          <span className="text-xs text-text-secondary bg-surface px-3 py-1 rounded-full">{ACHIEVEMENTS.length} total</span>
        </motion.div>

        {Object.entries(grouped).map(([key, items], sectionIdx) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIdx * 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">{key}</h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8 rounded-2xl border border-dashed border-border bg-surface/50">
                <p className="text-sm text-text-secondary">No {key} yet</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((achievement, i) => {
                  const Icon = typeIcons[achievement.type]
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: sectionIdx * 0.1 + i * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="rounded-2xl border border-border bg-surface p-4 space-y-3 hover:border-primary/30 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${typeColors[achievement.type]} p-0.5`}>
                          <div className="w-full h-full rounded-[10px] bg-surface flex items-center justify-center">
                            <Icon size={16} className="text-text" />
                          </div>
                        </div>
                        <span className="text-[10px] text-text-secondary bg-surface-hover px-2 py-0.5 rounded-full">{achievement.date}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-text text-sm">{achievement.title}</h4>
                        <p className="text-xs text-text-secondary mt-1 leading-relaxed">{achievement.description}</p>
                      </div>
                      <span className={`inline-block text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${typeColors[achievement.type]} text-white/90`}>
                        {typeLabels[achievement.type]}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </PageTransition>
  )
}
