import { motion } from 'framer-motion'

export function SkillCard({ skill, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-xl border border-border bg-surface p-5 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--color-primary), transparent 40%)`,
        }}
      />

      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-sm font-mono text-primary">{skill.level}%</span>
        </div>

        <h4 className="font-medium text-text">{skill.name}</h4>

        <div className="relative h-1.5 rounded-full bg-surface-hover overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>
      </div>
    </motion.div>
  )
}
