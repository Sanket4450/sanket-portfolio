import { projects, projectsSection } from '@/utils/data'
import Reveal from '@/components/Reveal'
import type { Project, TechnologyGroup } from '@/types/index.type'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-text-muted mb-4 text-[11px] font-medium tracking-widest uppercase">
      {children}
    </p>
  )
}

function ProjectAttribution({ project }: { project: Project }) {
  const label = project.type === 'professional' ? 'Professional Project' : 'Personal Project'

  return (
    <p className="text-text-muted text-sm leading-relaxed">
      {label}
      {project.company && (
        <>
          {' '}
          · Built at <span className="text-text-secondary font-medium">{project.company}</span>
        </>
      )}
      {(project.liveUrl || project.repoUrl) && (
        <span className="ml-3 inline-flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
            >
              Live ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground inline-flex items-center gap-1 text-xs transition-colors"
            >
              Repo ↗
            </a>
          )}
        </span>
      )}
    </p>
  )
}

function EngineeringHighlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item} className="text-text-secondary flex gap-3 text-[15px] leading-relaxed">
          <span className="text-text-muted mt-[0.35em] shrink-0 text-[10px] select-none">▸</span>
          <span className="max-w-[620px]">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function TechnologyStack({ groups }: { groups: TechnologyGroup[] }) {
  return (
    <div className="flex flex-col gap-y-4">
      {groups.map(group => (
        <div key={group.category}>
          <p className="text-text-muted mb-3 text-[11px] font-medium tracking-widest uppercase">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map(tech => (
              <span
                key={tech}
                className="bg-surface border-border text-text-muted inline-block rounded-md border px-2.5 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Outcomes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map(item => (
        <li key={item} className="text-text-secondary flex gap-3 text-[15px] leading-relaxed">
          <span className="text-text-muted mt-[0.35em] shrink-0 text-[10px] select-none">▸</span>
          <span className="max-w-[620px]">{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <article>
      <Reveal delay={delay}>
        {/* ── Header ────────────────────────────────────────── */}
        <div className="mb-[32px]">
          <p className="text-text-muted mb-3 text-[11px] font-medium tracking-widest uppercase">
            {project.category}
          </p>
          <h3 className="text-foreground mb-1 text-2xl font-bold tracking-[-0.02em]">
            {project.title}
          </h3>
          <ProjectAttribution project={project} />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-[1fr_400px]">
        {/* ── Left: Narrative + Engineering Depth ───────────── */}
        <div>
          {/* Overview */}
          <Reveal delay={delay + 50}>
            <p className="text-text-secondary mb-[40px] max-w-[560px] text-[15px] leading-relaxed">
              {project.overview}
            </p>
          </Reveal>

          {/* Engineering Highlights */}
          <Reveal delay={delay + 100}>
            <SectionLabel>Engineering Highlights</SectionLabel>
          </Reveal>
          <Reveal delay={delay + 150}>
            <EngineeringHighlights items={project.engineeringHighlights} />
          </Reveal>
        </div>

        {/* ── Right: Technology + Outcomes ──────────────────── */}
        <div>
          {/* Technology Stack */}
          <Reveal delay={delay + 200} className='mt-0.5'>
            <SectionLabel>Technology Stack</SectionLabel>
            <TechnologyStack groups={project.technologies} />
          </Reveal>

          {/* Outcomes */}
          <Reveal delay={delay + 250}>
            <hr className="border-border my-6" />
            <SectionLabel>Outcomes</SectionLabel>
            <Outcomes items={project.outcomes} />
          </Reveal>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-border border-t">
      <div className="section-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            {projectsSection.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={50}>
          <h2 className="text-foreground mb-4 max-w-[650px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            {projectsSection.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-text-secondary mb-16 max-w-[700px] text-[15px] leading-relaxed">
            {projectsSection.description}
          </p>
        </Reveal>

        {/* Project Cards */}
        <div>
          {projects.map((project, index) => (
            <div key={project.id}>
              {index > 0 && <hr className="border-border mt-14 mb-[40px]" />}
              <ProjectCard project={project} delay={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}