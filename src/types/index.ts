export interface LinkItem {
  label: string
  href: string
  external?: boolean
  image?: string
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  location: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number
}

export interface Performance {
  title: string
  venue: string
  description: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}
