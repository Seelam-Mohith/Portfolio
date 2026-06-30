import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string | number
  label: string
  color?: string
}

export function StatCard({ icon: Icon, value, label, color = '--color-primary' }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-border bg-surface p-5 flex items-center gap-4"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: `color-mix(in srgb, var(${color}) 15%, transparent)` }}
      >
        <Icon size={22} style={{ color: `var(${color})` }} />
      </div>
      <div>
        <p className="text-2xl font-bold text-text">{value}</p>
        <p className="text-sm text-text-secondary">{label}</p>
      </div>
    </motion.div>
  )
}
