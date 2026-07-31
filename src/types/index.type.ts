export type FeaturedSystem = {
  id: string
  title: string
  positioning: string
  summary: string
  problem: string
  responsibilities: string
  architecture: string
  highlights: string[]
  challenges: string
  outcomes: string
  achievements: string[]
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