import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SUB_NAV_SECTIONS } from '../../constants'
import { cn } from '../../utils'
import { useState, useEffect } from 'react'

export function SecondarySidebar() {
  const location = useLocation()
  const [activeSub, setActiveSub] = useState<string | null>(null)

  const section = location.pathname.replace('/', '') || 'home'
  const subSection = SUB_NAV_SECTIONS.find((s) => s.id === section)

  useEffect(() => {
    if (subSection && subSection.items.length > 0 && !activeSub) {
      setActiveSub(subSection.items[0].id)
    }
  }, [subSection, activeSub])

  if (!subSection) return null

  return (
    <AnimatePresence mode="wait">
      <motion.aside
        key={section}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2 }}
        className="fixed left-[72px] top-0 bottom-0 w-52 bg-surface/50 border-r border-border backdrop-blur-xl p-4 z-30 hidden md:block"
      >
        <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
          {section}
        </h3>

        <nav className="space-y-1">
          {subSection.items.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => setActiveSub(item.id)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-all',
                activeSub === item.id
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-text-secondary hover:text-text hover:bg-surface-hover'
              )}
              whileHover={{ x: 2 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>
      </motion.aside>
    </AnimatePresence>
  )
}
