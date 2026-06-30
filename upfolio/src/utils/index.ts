import type { Skill, Project, Theme } from '../types'

export function filterSkills(skills: Skill[], category?: string): Skill[] {
  if (!category || category === 'all') return skills
  return skills.filter((s) => s.category === category)
}

export function filterProjects(projects: Project[], category?: string): Project[] {
  if (!category || category === 'all') return projects
  return projects.filter((p) => p.category === category)
}

export function searchItems<T extends { title?: string; name?: string; description: string }>(
  items: T[],
  query: string
): T[] {
  const q = query.toLowerCase()
  return items.filter((item) => {
    const title = item.title || item.name || ''
    return title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
  })
}

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  root.style.setProperty('--color-primary', theme.primary)
  root.style.setProperty('--color-secondary', theme.secondary)
  root.style.setProperty('--color-accent', theme.accent)
  root.style.setProperty('--color-background', theme.background)
  root.style.setProperty('--color-surface', theme.surface)
  root.style.setProperty('--color-surface-hover', theme.surfaceHover)
  root.style.setProperty('--color-text', theme.text)
  root.style.setProperty('--color-text-secondary', theme.textSecondary)
  root.style.setProperty('--color-border', theme.border)
  root.style.setProperty('--color-glass', theme.glass)
}

export function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return date.toLocaleDateString()
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
