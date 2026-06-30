import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export function Timeline({ experiences }) {
  return (
    <div className="relative space-y-8">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

      {experiences.map((exp, i) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="relative pl-14"
        >
          <div className="absolute left-3.5 top-1 w-4 h-4 rounded-full bg-primary border-2 border-surface z-10">
            <div className="absolute inset-0.5 rounded-full bg-primary animate-pulse" />
          </div>

          <div className="rounded-xl border border-border bg-surface p-5 hover:border-primary/30 transition-all">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-lg font-semibold text-text">{exp.role}</h3>
                <p className="text-sm text-primary">{exp.company}</p>
              </div>
              <span className="text-xs text-text-secondary bg-surface-hover px-3 py-1 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            <p className="mt-3 text-sm text-text-secondary">{exp.description}</p>

            <ul className="mt-3 space-y-1.5">
              {exp.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
