import { motion, AnimatePresence } from 'framer-motion'
import { Palette } from 'lucide-react'
import { THEMES } from '../../constants'
import { useStore } from '../../store/useStore'
import { useState } from 'react'

export function ThemeSwitcher() {
  const { themeId, setThemeId } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface-hover transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette size={18} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 p-2 rounded-xl border border-border bg-surface backdrop-blur-xl shadow-2xl z-50"
          >
            {THEMES.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => {
                  setThemeId(t.id)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  themeId === t.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-secondary hover:text-text hover:bg-surface-hover'
                }`}
                whileHover={{ x: 2 }}
              >
                <div className="w-4 h-4 rounded-full border border-border" style={{ backgroundColor: t.primary }} />
                <span>{t.name}</span>
                {themeId === t.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
