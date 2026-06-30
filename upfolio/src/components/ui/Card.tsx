import { motion } from 'framer-motion'
import { cn } from '../../utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, glow = false, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        'rounded-xl border border-border bg-surface backdrop-blur-xl p-6',
        hover && 'hover:border-primary/30 cursor-pointer',
        glow && 'shadow-lg shadow-primary/5',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
    >
      {children}
    </motion.div>
  )
}
