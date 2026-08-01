export type Project = {
  id: string
  title: string
  category: string
  company?: string
  type: 'professional' | 'personal'
  overview: string
  engineeringHighlights: string[]
  outcomes: string[]
  technologies: TechnologyGroup[]
}

export type TechnologyGroup = {
  category: string
  items: string[]
}

export type ExperienceProject = {
  name: string
  description: string
}

export type Experience = {
  company: string
  role: string
  duration: string
  summary: string
  projects: ExperienceProject[]
  highlights: string[]
  technologies: TechnologyGroup[]
}

export type SkillGroup = {
  category: string
  skills: string[]
}
