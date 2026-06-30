import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Paperclip, Smile, Image } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { PageTransition } from '../components/layout/PageTransition'
import { useStore } from '../store/useStore'

const quickReplies = [
  'Hey! I love your portfolio 🚀',
  'Would you be open to collaborating?',
  'I have a project idea to discuss!',
  'Great work on your projects!',
]

export default function Contact() {
  const { addNotification } = useStore()
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSend = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    addNotification({ message: 'Message sent! I\'ll get back to you soon.', type: 'success', read: false })
    setMessage('')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-surface overflow-hidden"
        >
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
              S
            </div>
            <div>
              <p className="font-medium text-text text-sm">Sahil</p>
              <p className="text-[11px] text-accent flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Usually replies within a day
              </p>
            </div>
          </div>

          <div className="p-4 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
            <div className="flex justify-start">
              <div className="bg-surface-hover rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%]">
                <p className="text-sm text-text">Hi! Thanks for stopping by. Send me a message and I'll get back to you as soon as possible.</p>
              </div>
            </div>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="flex justify-end"
              >
                <div className="bg-primary/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm text-text">{message}</p>
                </div>
              </motion.div>
            )}

            <div className="pt-2">
              <p className="text-xs text-text-secondary mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((qr, i) => (
                  <button
                    key={i}
                    onClick={() => setMessage(qr)}
                    className="text-xs px-3 py-1.5 rounded-full bg-surface-hover border border-border text-text-secondary hover:text-text hover:border-primary/30 transition-all"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-border">
            <div className="flex items-end gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  rows={2}
                  className="w-full px-4 py-3 bg-surface-hover border border-border rounded-xl text-sm text-text placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                  <button type="button" className="p-1.5 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors">
                    <Paperclip size={16} />
                  </button>
                  <button type="button" className="p-1.5 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors">
                    <Image size={16} />
                  </button>
                  <button type="button" className="p-1.5 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-colors">
                    <Smile size={16} />
                  </button>
                </div>
              </div>
              <Button
                type="submit"
                disabled={!message.trim()}
                icon={<Send size={16} />}
                className="h-[52px]"
              />
            </div>
          </form>
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-text-secondary">
          <span>sahil@example.com</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>github.com/sahil</span>
        </div>
      </div>
    </PageTransition>
  )
}
