import { motion } from 'framer-motion'

interface ActivityCardProps {
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export function ActivityCard({ title, children, icon, className = '' }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border border-border bg-surface/50 backdrop-blur-xl p-4 ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-primary">{icon}</span>}
        <h4 className="text-xs font-semibold text-text-secondary uppercase tracking-wider">{title}</h4>
      </div>
      {children}
    </motion.div>
  )
}
