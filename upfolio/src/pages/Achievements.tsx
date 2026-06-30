import { motion } from 'framer-motion'
import { Trophy, Award, ScrollText } from 'lucide-react'
import { ACHIEVEMENTS } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'
import type { LucideIcon } from 'lucide-react'

const typeIcons: Record<string, LucideIcon> = {
  hackathon: Trophy,
  certification: ScrollText,
  award: Award,
}

const typeColors: Record<string, string> = {
  hackathon: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  certification: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  award: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
}

const typeLabels: Record<string, string> = {
  hackathon: 'Hackathon',
  certification: 'Certification',
  award: 'Award',
}

export default function Achievements() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((achievement, i) => {
          const Icon = typeIcons[achievement.type]
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-border bg-surface p-5 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className={`p-2 rounded-lg border ${typeColors[achievement.type]}`}>
                  <Icon size={18} />
                </div>
                <span className="text-xs text-text-secondary">{achievement.date}</span>
              </div>

              <div>
                <h3 className="font-semibold text-text">{achievement.title}</h3>
                <p className="text-sm text-text-secondary mt-1">{achievement.description}</p>
              </div>

              <span className={`inline-block px-2 py-0.5 text-xs rounded-full border ${typeColors[achievement.type]}`}>
                {typeLabels[achievement.type]}
              </span>
            </motion.div>
          )
        })}
      </div>
    </PageTransition>
  )
}
