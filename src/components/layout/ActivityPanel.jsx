import { motion } from 'framer-motion'
import {
  Activity, BookOpen, Brain, FolderGit2, Code2, TrendingUp, Quote,
} from 'lucide-react'
import { ActivityCard } from '../ActivityCard'
import { ACTIVITY_DATA, QUOTES } from '../../constants'
import { useEffect, useState } from 'react'

function GitHubWidget() {
  return (
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 35 }).map((_, i) => {
        const level = Math.floor(Math.random() * 5)
        const colors = ['bg-surface-hover', 'bg-green-900/30', 'bg-green-700/40', 'bg-green-500/50', 'bg-green-400/60']
        return <div key={i} className={`w-full aspect-square rounded-sm ${colors[level]}`} />
      })}
    </div>
  )
}

const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]

export function ActivityPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-72 shrink-0 space-y-3 overflow-y-auto py-4 pr-4 hidden xl:block"
    >
      <ActivityCard
        title="Current Status"
        icon={<Activity size={14} />}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-text">{ACTIVITY_DATA.status}</span>
        </div>
      </ActivityCard>

      <ActivityCard
        title="Currently Building"
        icon={<BookOpen size={14} />}
      >
        <p className="text-sm font-medium text-primary">{ACTIVITY_DATA.building}</p>
      </ActivityCard>

      <ActivityCard
        title="Learning"
        icon={<Brain size={14} />}
      >
        <div className="flex flex-wrap gap-1.5">
          {ACTIVITY_DATA.learning.map((item) => (
            <span
              key={item}
              className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {item}
            </span>
          ))}
        </div>
      </ActivityCard>

      <ActivityCard
title="GitHub Activity"
                icon={<FolderGit2 size={14} />}
      >
        <GitHubWidget />
      </ActivityCard>

      <ActivityCard
        title="Academic Performance"
        icon={<Code2 size={14} />}
      >
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-text-secondary">
            <span>CGPA</span>
            <span className="text-text font-medium">8.62/10</span>
          </div>
          <div className="relative h-2 rounded-full bg-surface-hover overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '86.2%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
            />
          </div>
        </div>
      </ActivityCard>

      <ActivityCard
        title="Tech Stack"
        icon={<TrendingUp size={14} />}
      >
        <div className="flex flex-wrap gap-1.5">
          {['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Computer Vision', 'Power BI'].map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs rounded-md bg-surface-hover text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </ActivityCard>

      <ActivityCard
        title="Recent Updates"
        icon={<TrendingUp size={14} />}
      >
        <div className="space-y-2">
          {ACTIVITY_DATA.recentUpdates.map((update, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-text-secondary">
              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              <span>{update}</span>
            </div>
          ))}
        </div>
      </ActivityCard>

      <ActivityCard
        title="Quote of the Day"
        icon={<Quote size={14} />}
      >
        <p className="text-sm text-text-secondary leading-relaxed italic">"{quote}"</p>
      </ActivityCard>
    </motion.aside>
  )
}
