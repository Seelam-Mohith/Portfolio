import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home, User, Code2, FolderGit2, Briefcase, Trophy, FileText, Mail, Settings,
} from 'lucide-react'
import { NAV_ITEMS } from '../../constants'
import { cn } from '../../utils'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Home, User, Code2, FolderGit2, Briefcase, Trophy, FileText, Mail, Settings,
}

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <motion.nav
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="fixed left-0 top-0 bottom-0 w-[72px] bg-surface border-r border-border flex flex-col items-center py-3 gap-1 z-40"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 cursor-pointer"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <span className="text-white font-bold text-sm">U</span>
      </motion.div>

      <div className="flex-1 flex flex-col items-center gap-1">
        {NAV_ITEMS.map((item, i) => {
          const Icon = iconMap[item.icon]
          const isActive = location.pathname === item.path

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.03 }}
              className="relative group"
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <motion.button
                onClick={() => navigate(item.path)}
                className={cn(
                  'relative w-12 h-12 rounded-xl flex items-center justify-center transition-all',
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-text-secondary hover:text-text hover:bg-surface-hover'
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
              >
                {Icon && <Icon size={20} />}
                {isActive && (
                  <motion.div
                    layoutId="activeBg"
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>

              <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-text whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-xl z-50">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-border" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.nav>
  )
}
