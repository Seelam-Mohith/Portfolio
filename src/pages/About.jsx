import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Heart, Quote, Pencil } from 'lucide-react'
import { ABOUT_DATA, EXPERIENCES } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto space-y-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Quote size={16} className="text-primary" />
              </div>
              <h2 className="font-semibold text-text">About</h2>
            </div>
            <button className="text-xs text-text-secondary hover:text-primary transition-colors flex items-center gap-1">
              <Pencil size={12} /> Edit
            </button>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{ABOUT_DATA.bio}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase size={16} className="text-primary" />
            </div>
            <h3 className="font-semibold text-text">Experience</h3>
          </div>
          <div className="space-y-4">
            {EXPERIENCES.slice(0, 3).map((exp) => (
              <div key={exp.id} className="relative pl-4 border-l-2 border-border hover:border-primary/50 transition-colors">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary -translate-x-[5.5px]" />
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-text">{exp.role}</p>
                    <p className="text-xs text-primary">{exp.company}</p>
                  </div>
                  <span className="text-[10px] text-text-secondary bg-surface-hover px-2 py-0.5 rounded-full whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs text-text-secondary mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={16} className="text-primary" />
              </div>
              <h3 className="font-semibold text-text">Education</h3>
            </div>
            <div className="space-y-3">
              {ABOUT_DATA.education.map((edu, i) => (
                <div key={i} className="pb-3 border-b border-border last:border-0 last:pb-0">
                  <p className="text-sm font-medium text-text">{edu.degree}</p>
                  <p className="text-xs text-text-secondary">{edu.school}</p>
                  <p className="text-[10px] text-text-secondary/60">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart size={16} className="text-primary" />
              </div>
              <h3 className="font-semibold text-text">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-xs rounded-full bg-surface-hover text-text-secondary border border-border hover:border-primary/30 hover:text-text transition-all cursor-pointer"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
