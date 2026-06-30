import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, Command } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { NAV_ITEMS } from '../../constants'
import { useNavigate } from 'react-router-dom'

export function CommandPalette() {
  const { isCommandPaletteOpen, setCommandPaletteOpen } = useStore()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const filtered = NAV_ITEMS.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setCommandPaletteOpen(!isCommandPaletteOpen)
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCommandPaletteOpen, setCommandPaletteOpen])

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isCommandPaletteOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filtered.length)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    }
    if (e.key === 'Enter' && filtered[selectedIndex]) {
      navigate(filtered[selectedIndex].path)
      setCommandPaletteOpen(false)
    }
  }

  return (
    <AnimatePresence>
      {isCommandPaletteOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm"
          onClick={() => setCommandPaletteOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg rounded-xl border border-border bg-surface shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search size={16} className="text-text-secondary" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Navigate to..."
                className="flex-1 bg-transparent text-sm text-text outline-none placeholder:text-text-secondary/50"
              />
              <kbd className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border text-[10px] text-text-secondary">
                <Command size={10} />K
              </kbd>
            </div>
            <div className="p-2 max-h-64 overflow-y-auto">
              {filtered.length === 0 ? (
                <p className="px-3 py-4 text-sm text-text-secondary text-center">No results found</p>
              ) : (
                filtered.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      navigate(item.path)
                      setCommandPaletteOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                      i === selectedIndex ? 'bg-primary/10 text-primary' : 'text-text hover:bg-surface-hover'
                    }`}
                    onMouseEnter={() => setSelectedIndex(i)}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <ArrowRight size={14} className={i === selectedIndex ? 'opacity-100' : 'opacity-0'} />
                    <span>{item.label}</span>
                  </motion.button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
