import { motion } from 'framer-motion'
import { GraduationCap, Heart, Quote } from 'lucide-react'
import { ABOUT_DATA } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'

export default function About() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-surface p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Quote size={20} className="text-primary" />
              <h2 className="text-lg font-semibold text-text">About Me</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">{ABOUT_DATA.bio}</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={18} className="text-primary" />
              <h3 className="font-semibold text-text">Education</h3>
            </div>
            <div className="space-y-4">
              {ABOUT_DATA.education.map((edu, i) => (
                <div key={i} className="relative pl-4 border-l border-border">
                  <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                  <p className="text-sm font-medium text-text">{edu.degree}</p>
                  <p className="text-xs text-text-secondary mt-0.5">{edu.school}</p>
                  <p className="text-xs text-text-secondary/60">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart size={18} className="text-primary" />
              <h3 className="font-semibold text-text">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {ABOUT_DATA.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-sm rounded-lg bg-surface-hover text-text-secondary border border-border hover:border-primary/30 hover:text-text transition-all"
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
