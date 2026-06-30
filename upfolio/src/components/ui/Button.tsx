import { motion } from 'framer-motion'
import { cn } from '../../utils'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  type?: 'button' | 'submit'
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  icon,
  type = 'button',
}: ButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all overflow-hidden select-none'

  const variants = {
    primary: 'bg-primary text-white hover:brightness-110 shadow-lg shadow-primary/20',
    secondary: 'bg-surface border border-border text-text hover:bg-surface-hover',
    ghost: 'text-text-secondary hover:text-text hover:bg-surface-hover',
    danger: 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className)}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </motion.button>
  )
}
