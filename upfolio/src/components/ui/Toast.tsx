import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { formatDate } from '../../utils'

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
}

const colors = {
  success: 'text-green-400 bg-green-500/10 border-green-500/20',
  error: 'text-red-400 bg-red-500/10 border-red-500/20',
  warning: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  info: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
}

export function ToastContainer() {
  const { notifications, markNotificationRead, clearNotifications } = useStore()

  const unread = notifications.slice(0, 5)

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full">
      <AnimatePresence>
        {unread.map((n) => {
          const Icon = icons[n.type]
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className={`flex items-start gap-3 p-3 rounded-lg border ${colors[n.type]} bg-surface backdrop-blur-xl shadow-xl`}
            >
              <Icon size={16} className="shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text">{n.message}</p>
                <p className="text-xs text-text-secondary mt-0.5">{formatDate(n.timestamp)}</p>
              </div>
              <button
                onClick={() => markNotificationRead(n.id)}
                className="text-text-secondary hover:text-text transition-colors"
              >
                <X size={14} />
              </button>
            </motion.div>
          )
        })}
      </AnimatePresence>
      {notifications.length > 0 && (
        <button
          onClick={clearNotifications}
          className="text-xs text-text-secondary hover:text-text self-end transition-colors"
        >
          Clear all
        </button>
      )}
    </div>
  )
}
