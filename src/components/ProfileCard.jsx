import { motion } from 'framer-motion'
import { FolderGit2, Globe, ExternalLink } from 'lucide-react'
import { SOCIAL_LINKS } from '../constants'

const iconMap = {
  Github: <FolderGit2 size={18} />,
  Linkedin: <ExternalLink size={18} />,
  Twitter: <Globe size={18} />,
  Globe: <Globe size={18} />,
}

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        className="relative mb-6"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
          <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
            <span className="text-5xl font-bold text-primary">K</span>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent border-2 border-surface flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-text"
      >
        J Sree Karnika
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-text-secondary mt-1"
      >
        AI & ML Undergraduate
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center gap-3 mt-4"
      >
        {SOCIAL_LINKS.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title={link.name}
          >
            {iconMap[link.icon]}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}
