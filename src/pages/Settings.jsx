import { motion } from 'framer-motion'
import { Palette, Monitor, Eye } from 'lucide-react'
import { THEMES } from '../constants'
import { useStore } from '../store/useStore'
import { PageTransition } from '../components/layout/PageTransition'

export default function Settings() {
  const { themeId, setThemeId } = useStore()

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-text">Settings</h2>
          <p className="text-sm text-text-secondary mt-1">Customize your experience</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-surface p-6 space-y-6"
        >
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <Palette size={18} className="text-primary" />
            <h3 className="font-semibold text-text">Theme</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {THEMES.map((theme) => (
              <motion.button
                key={theme.id}
                onClick={() => setThemeId(theme.id)}
                className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                  themeId === theme.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/30 bg-surface-hover/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {themeId === theme.id && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Eye size={12} className="text-white" />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: theme.primary }} />
                  <span className="font-medium text-text">{theme.name}</span>
                </div>

                <div className="flex gap-1">
                  {[theme.primary, theme.secondary, theme.accent, theme.background].map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-border"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-surface p-6 space-y-4"
        >
          <div className="flex items-center gap-2 pb-4 border-b border-border">
            <Monitor size={18} className="text-primary" />
            <h3 className="font-semibold text-text">Appearance</h3>
          </div>

          <div className="space-y-4">
            <ToggleRow label="Blur effects" description="Enable glassmorphism effects throughout the UI" />
            <ToggleRow label="Animations" description="Enable motion animations and transitions" />
            <ToggleRow label="Reduced motion" description="Minimize animations for accessibility" />
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}

function ToggleRow({ label, description }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-text">{label}</p>
        <p className="text-xs text-text-secondary">{description}</p>
      </div>
      <div className="w-10 h-6 rounded-full bg-primary/30 relative cursor-pointer">
        <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform" />
      </div>
    </div>
  )
}
