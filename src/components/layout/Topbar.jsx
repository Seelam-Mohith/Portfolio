import { motion } from 'framer-motion'
import { Bell, Search, Menu, Command } from 'lucide-react'
import { SearchBar } from '../ui/SearchBar'
import { ThemeSwitcher } from '../ui/ThemeSwitcher'
import { useStore } from '../../store/useStore'
import { useTheme } from '../../hooks/useTheme'

export function Topbar() {
  const { activeSection, setCommandPaletteOpen, setMobileSidebarOpen, notifications } = useStore()

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="fixed top-0 left-[72px] right-0 h-14 bg-background border-b border-border flex items-center justify-between px-4 z-30"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileSidebarOpen(true)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface-hover transition-colors"
        >
          <Menu size={18} />
        </button>
        <h2 className="text-sm font-semibold text-text capitalize">{activeSection}</h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block w-64">
          <SearchBar />
        </div>

        <motion.button
          onClick={() => setCommandPaletteOpen(true)}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-text-secondary hover:text-text hover:border-primary/30 transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <Command size={12} />
          <span>Ctrl+K</span>
        </motion.button>

        <ThemeSwitcher />

        <button className="relative p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface-hover transition-colors">
          <Bell size={18} />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </motion.header>
  )
}
