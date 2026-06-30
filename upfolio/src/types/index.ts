export interface NavItem {
  id: string
  label: string
  icon: string
  path: string
}

export interface SubNavItem {
  id: string
  label: string
}

export interface SubNavSection {
  id: string
  items: SubNavItem[]
}

export interface Skill {
  name: string
  icon: string
  category: string
  level: number
}

export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  technologies: string[]
  github?: string
  live?: string
  features: string[]
  category: string
}

export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  type: 'hackathon' | 'certification' | 'award'
  icon: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Theme {
  id: string
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  surfaceHover: string
  text: string
  textSecondary: string
  border: string
  glass: string
}

export interface Notification {
  id: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  timestamp: number
}

export type Section =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'achievements'
  | 'resume'
  | 'contact'
  | 'settings'
