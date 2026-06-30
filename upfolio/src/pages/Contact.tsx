import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone, FolderGit2, ExternalLink, Globe } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { PageTransition } from '../components/layout/PageTransition'
import { useStore } from '../store/useStore'

export default function Contact() {
  const { addNotification } = useStore()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addNotification({ message: 'Message sent successfully!', type: 'success', read: false })
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-lg font-semibold text-text">Get in Touch</h2>
            <p className="text-sm text-text-secondary mt-1">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Mail, label: 'Email', value: 'john@example.com' },
              { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">{item.label}</p>
                  <p className="text-sm text-text">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {[FolderGit2, ExternalLink, Globe].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <InputField label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          </div>
          <InputField label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1.5">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-text placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              placeholder="Your message..."
            />
          </div>
          <Button type="submit" icon={<Send size={16} />} className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
    </PageTransition>
  )
}

function InputField({
  label,
  type = 'text',
  value,
  onChange,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-text-secondary mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-sm text-text placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  )
}
