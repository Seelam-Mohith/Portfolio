import { create } from 'zustand'
import { THEMES } from '../constants'
import { applyTheme } from '../utils'

function loadTheme() {
  try {
    return localStorage.getItem('upfolio-theme') || 'dark'
  } catch {
    return 'dark'
  }
}

function saveTheme(id) {
  try {
    localStorage.setItem('upfolio-theme', id)
  } catch {}
}

export const useStore = create((set) => ({
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),

  theme: THEMES.find((t) => t.id === loadTheme()) || THEMES[0],
  themeId: loadTheme(),
  setTheme: (theme) => {
    applyTheme(theme)
    set({ theme })
  },
  setThemeId: (id) => {
    saveTheme(id)
    const theme = THEMES.find((t) => t.id === id) || THEMES[0]
    applyTheme(theme)
    set({ themeId: id, theme })
  },

  isCommandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open }),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),

  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [
        {
          ...notification,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
        },
        ...state.notifications,
      ],
    })),
  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
    })),
  clearNotifications: () => set({ notifications: [] }),

  isMobileSidebarOpen: false,
  setMobileSidebarOpen: (open) => set({ isMobileSidebarOpen: open }),
}))
