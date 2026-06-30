import { motion } from 'framer-motion'
import { MapPin, Calendar, Link as LinkIcon, MoreHorizontal, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react'
import { TypingText } from '../components/ui/TypingText'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { PageTransition } from '../components/layout/PageTransition'
import { PROJECTS } from '../constants'
import { useState } from 'react'

const stories = [
  { label: 'React', emoji: '⚛️', color: 'from-sky-400 to-cyan-300' },
  { label: 'AI/ML', emoji: '🧠', color: 'from-purple-400 to-pink-300' },
  { label: 'Design', emoji: '🎨', color: 'from-pink-400 to-rose-300' },
  { label: 'Cloud', emoji: '☁️', color: 'from-blue-400 to-indigo-300' },
  { label: 'DevOps', emoji: '🐳', color: 'from-cyan-400 to-teal-300' },
  { label: 'Security', emoji: '🛡️', color: 'from-emerald-400 to-green-300' },
]

const activities = [
  { icon: '📦', text: 'Published AuthFlow library', time: '2h' },
  { icon: '📝', text: 'Wrote article on Agentic AI', time: '1d' },
  { icon: '⭐', text: 'Starred 5 repos this week', time: '2d' },
  { icon: '🔧', text: 'Fixed 3 bugs in OSS projects', time: '3d' },
]

export default function Home() {
  const [saved, setSaved] = useState(false)

  return (
    <PageTransition>
      <div className="max-w-2xl mx-auto space-y-4 pb-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-surface overflow-hidden"
        >
          <div className="h-36 md:h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.4),transparent_70%)]" />
          </div>

          <div className="px-6 pb-6">
            <div className="flex justify-between items-start -mt-12 mb-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-surface bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  S
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-accent border-2 border-surface flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <button className="mt-16 px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:brightness-110 transition-all shadow-lg shadow-primary/20">
                Follow
              </button>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-text">Sahil</h1>
              <div className="flex items-center gap-4 text-sm text-text-secondary flex-wrap">
                <TypingText
                  strings={['Full Stack Developer', 'AI/ML Engineer', 'UI/UX Designer', 'Open Source Advocate']}
                  className="text-primary font-medium"
                />
              </div>
              <p className="text-sm text-text-secondary flex items-center gap-1 mt-1">
                Building products that matter
              </p>
              <div className="flex items-center gap-4 text-xs text-text-secondary mt-2 flex-wrap">
                <span className="flex items-center gap-1"><MapPin size={12} /> San Francisco</span>
                <span className="flex items-center gap-1"><Calendar size={12} /> Joined 2022</span>
                <span className="flex items-center gap-1"><LinkIcon size={12} /> sahil.dev</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 py-4 border-t border-border">
              {[
                { value: 30, suffix: '+', label: 'Projects' },
                { value: 50, suffix: '+', label: 'Skills' },
                { value: 4, suffix: 'yr', label: 'Exp' },
                { value: 1.5, suffix: 'k', label: 'Followers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-lg font-bold text-text">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-secondary leading-relaxed mt-3">
              Full-stack developer passionate about AI, open source, and building beautiful interfaces.
              Currently exploring agentic AI and LLMs. Previously at TechCorp, StartupXYZ.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-4 overflow-x-auto pb-2 scrollbar-none"
        >
          {stories.map((s, i) => (
            <motion.button
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex flex-col items-center gap-1.5 shrink-0"
              whileHover={{ y: -2 }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${s.color} p-0.5 shadow-lg`}>
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-xl">
                  {s.emoji}
                </div>
              </div>
              <span className="text-[10px] text-text-secondary font-medium">{s.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 text-sm text-text-secondary"
        >
          <span className="font-semibold text-text">Activity</span>
          <span className="w-1 h-1 rounded-full bg-text-secondary" />
          <span>Recent</span>
        </motion.div>

        <div className="space-y-3">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.05 }}
              className="flex items-center gap-3 text-sm"
            >
              <span className="text-lg">{a.icon}</span>
              <span className="text-text-secondary flex-1">{a.text}</span>
              <span className="text-xs text-text-secondary/60">{a.time}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-6 mb-2">
          <span className="font-semibold text-text">Featured Projects</span>
          <span className="w-1 h-1 rounded-full bg-text-secondary" />
          <span className="text-sm text-text-secondary">4 posts</span>
        </div>

        <div className="space-y-4">
          {PROJECTS.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-border bg-surface overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-xs text-text-secondary">
                    {project.category === 'ai-projects' ? 'AI' : project.category === 'web-projects' ? 'Web' : project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-text">{project.title}</h3>
                    <p className="text-sm text-text-secondary mt-0.5 line-clamp-2">{project.description}</p>
                  </div>
                  <button className="shrink-0 text-text-secondary hover:text-text transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[11px] rounded-md bg-primary/10 text-primary">{t}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] rounded-md bg-surface-hover text-text-secondary">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-text-secondary hover:text-rose-400 transition-colors text-sm">
                      <Heart size={16} />
                      <span>{Math.floor(Math.random() * 50 + 10)}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors text-sm">
                      <MessageCircle size={16} />
                      <span>{Math.floor(Math.random() * 10 + 2)}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors text-sm">
                      <Share2 size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`text-text-secondary hover:text-primary transition-colors ${saved ? 'text-primary' : ''}`}
                  >
                    <Bookmark size={16} fill={saved ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}
