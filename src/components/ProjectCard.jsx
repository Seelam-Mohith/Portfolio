import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2, Check } from 'lucide-react'
import { cn } from '../utils'

export function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary mt-1 line-clamp-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-1.5">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
              <Check size={12} className="text-accent shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-surface border border-border text-text-secondary hover:text-text hover:border-primary/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FolderGit2 size={14} />
              GitHub
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-primary text-white hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
