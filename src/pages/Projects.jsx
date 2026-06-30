import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Bookmark, Grid3X3, LayoutList, ExternalLink, FolderGit2 } from 'lucide-react'
import { PROJECTS } from '../constants'
import { PageTransition } from '../components/layout/PageTransition'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai-projects', label: 'AI' },
  { id: 'web-projects', label: 'Web' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'open-source', label: 'Open Source' },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [view, setView] = useState('grid')
  const [selected, setSelected] = useState(null)

  const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto space-y-4">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeFilter === f.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-surface border border-border text-text-secondary hover:text-text hover:border-primary/30'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-surface rounded-lg border border-border p-0.5">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-md transition-colors ${view === 'grid' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:text-text'}`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md transition-colors ${view === 'list' ? 'bg-primary/10 text-primary' : 'text-text-secondary hover:text-text'}`}
            >
              <LayoutList size={16} />
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 rounded-2xl overflow-hidden"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="relative aspect-square group cursor-pointer overflow-hidden"
                  onClick={() => setSelected(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-6">
                      <span className="flex items-center gap-1.5 text-white text-sm font-medium">
                        <Heart size={18} fill="white" /> {Math.floor(Math.random() * 50 + 10)}
                      </span>
                      <span className="flex items-center gap-1.5 text-white text-sm font-medium">
                        <MessageCircle size={18} /> {Math.floor(Math.random() * 10 + 2)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium truncate">{project.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-surface hover:border-primary/30 transition-all cursor-pointer"
                  whileHover={{ x: 4 }}
                  onClick={() => setSelected(project)}
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-text truncate">{project.title}</h3>
                    <p className="text-sm text-text-secondary truncate">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary text-sm shrink-0">
                    <span className="flex items-center gap-1"><Heart size={14} /> {Math.floor(Math.random() * 50 + 10)}</span>
                    <ExternalLink size={16} className="hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <FolderGit2 size={48} className="mx-auto text-text-secondary/30 mb-3" />
            <p className="text-text-secondary">No projects yet in this category</p>
          </div>
        )}

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-2xl w-full rounded-2xl bg-surface border border-border overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <img src={selected.thumbnail} alt={selected.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-text">{selected.title}</h2>
                      <p className="text-text-secondary text-sm mt-1">{selected.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t border-border">
                    <button className="flex items-center gap-1.5 text-text-secondary hover:text-rose-400 transition-colors">
                      <Heart size={18} /> {Math.floor(Math.random() * 50 + 10)}
                    </button>
                    <button className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors">
                      <MessageCircle size={18} /> {Math.floor(Math.random() * 10 + 2)}
                    </button>
                    <button className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors">
                      <Bookmark size={18} />
                    </button>
                    <div className="ml-auto flex gap-3">
                      {selected.github && (
                        <a href={selected.github} target="_blank" className="text-sm text-text-secondary hover:text-primary transition-colors flex items-center gap-1">
                          <FolderGit2 size={16} /> Code
                        </a>
                      )}
                      {selected.live && (
                        <a href={selected.live} target="_blank" className="text-sm text-primary hover:brightness-110 transition-all flex items-center gap-1">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  )
}
