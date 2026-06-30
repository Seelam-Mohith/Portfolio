import { motion } from 'framer-motion'
import { ProfileCard } from '../components/ProfileCard'
import { TypingText } from '../components/ui/TypingText'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { PageTransition } from '../components/layout/PageTransition'

const stats = [
  { value: 30, suffix: '+', label: 'Projects' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Technologies' },
  { value: 15, suffix: '+', label: 'Clients' },
]

export default function Home() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col items-center text-center pt-8">
          <ProfileCard />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <TypingText
              strings={[
                'Full Stack Developer',
                'AI/ML Enthusiast',
                'Open Source Contributor',
                'UI/UX Craftsman',
              ]}
              className="text-lg text-primary"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-text-secondary max-w-md text-sm leading-relaxed"
          >
            I build elegant, performant applications with modern technologies.
            Passionate about AI, open source, and crafting exceptional user experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-5 text-center hover:border-primary/30 transition-all"
            >
              <p className="text-3xl font-bold text-text">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="rounded-xl border border-border bg-surface p-6"
        >
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">Featured Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'Docker', 'AWS', 'PostgreSQL'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
