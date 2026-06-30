import { motion } from 'framer-motion'
import { Briefcase, Building2, MapPin, CalendarDays, ThumbsUp, MessageCircle, Share2 } from 'lucide-react'
import { EXPERIENCES } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'

export default function Experience() {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto space-y-4">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/30 transition-all"
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <Building2 size={22} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-text">{exp.role}</h3>
                      <p className="text-sm text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-[10px] text-text-secondary bg-surface-hover px-2.5 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                      <CalendarDays size={10} /> {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">{exp.description}</p>

                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-t border-border bg-surface-hover/30 flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-primary transition-colors">
                <ThumbsUp size={14} /> {Math.floor(Math.random() * 20 + 5)}
              </button>
              <button className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-primary transition-colors">
                <MessageCircle size={14} /> {Math.floor(Math.random() * 5 + 1)}
              </button>
              <button className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-primary transition-colors ml-auto">
                <Share2 size={14} /> Share
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  )
}
