'use client'

import { projects, projectsSection } from '@/utils/data'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import BulletList from '@/components/BulletList'
import type { Project, TechnologyGroup } from '@/types/index.type'

function ProjectAttribution({ project }: { project: Project }) {
  const label = project.type === 'professional' ? 'Professional Project' : 'Personal Project'

  return (
    <p className="text-text-metadata text-[14px] leading-[1.6]">
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
              className="text-text-secondary hover:text-text-primary inline-flex items-center gap-1 text-xs"
            >
              Live ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary inline-flex items-center gap-1 text-xs"
            >
              Repo ↗
            </a>
          )}
        </span>
      )}
    </p>
  )
}

function TechnologyStack({ groups }: { groups: TechnologyGroup[] }) {
  return (
    <div className="flex flex-col gap-y-5">
      {groups.map(group => (
        <div key={group.category}>
          <p className="text-text-metadata mb-2 text-[11px] font-medium tracking-widest uppercase">
            {group.category}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map(tech => (
              <span
                key={tech}
                className="border-border text-text-muted interactive inline-block cursor-default rounded-[8px] border px-[10px] py-[4px] text-[12px] font-medium"
                style={{
                  backgroundColor: 'rgba(255,255,255,.025)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,.045)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,.025)';
                  e.currentTarget.style.borderColor = '';
                }}
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

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <article>
      <Reveal delay={Math.min(delay, 300)}>
        {/* ── Header ────────────────────────────────────────── */}
        <div className="mb-10">
          <p className="text-text-metadata mb-3 text-[11px] font-medium tracking-widest uppercase">
            {project.category}
          </p>
          <h3 className="text-foreground mb-1 text-2xl font-bold tracking-[-0.02em]">
            {project.title}
          </h3>
          <ProjectAttribution project={project} />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-[1fr_400px]">
        {/* ── Left: Narrative + Engineering Depth ───────────── */}
        <div>
          {/* Overview */}
          <Reveal delay={Math.min(delay + 25, 300)}>
            <p className="text-text-body mb-10 max-w-[560px] text-[15px] leading-[1.75]">
              {project.overview}
            </p>
          </Reveal>

          {/* Engineering Highlights */}
          <Reveal delay={Math.min(delay + 50, 300)}>
            <SectionLabel>Engineering Highlights</SectionLabel>
            <BulletList items={project.engineeringHighlights} />
          </Reveal>
        </div>

        {/* ── Right: Technology + Outcomes ──────────────────── */}
        <div>
          {/* Technology Stack */}
          <Reveal delay={Math.min(delay + 50, 300)} className="mt-0.5">
            <SectionLabel>Technology Stack</SectionLabel>
            <TechnologyStack groups={project.technologies} />
          </Reveal>

          {/* Outcomes */}
          <Reveal delay={Math.min(delay + 50, 300)}>
            <hr />
            <SectionLabel>Outcomes</SectionLabel>
            <BulletList items={project.outcomes} />
          </Reveal>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-secondary-surface section-padding border-border border-t"
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-text-muted mb-3 text-[14px] font-medium tracking-[0.16em] uppercase">
            {projectsSection.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={50}>
          <h2 className="text-foreground mb-4 max-w-[650px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            {projectsSection.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-text-body mb-16 max-w-[700px] text-[15px] leading-[1.75]">
            {projectsSection.description}
          </p>
        </Reveal>

        {/* Project Cards */}
        <div>
          {projects.map((project, index) => (
            <div key={project.id}>
              {index > 0 && <hr />}
              <ProjectCard project={project} delay={150 + 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}