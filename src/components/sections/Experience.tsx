'use client'

import { experiences, experienceSection } from '@/utils/data'
import Reveal from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import BulletList from '@/components/BulletList'
import type { Experience as ExperienceType } from '@/types/index.type'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDateRange(startDate: { month: number; year: number }, endDate: { month: number; year: number } | null): string {
  const start = `${MONTHS[startDate.month - 1]} ${startDate.year}`
  const end = endDate ? `${MONTHS[endDate.month - 1]} ${endDate.year}` : 'Present'
  return `${start} — ${end}`
}

function computeDuration(startDate: { month: number; year: number }, endDate: { month: number; year: number } | null): string {
  const end = endDate ?? { month: new Date().getMonth() + 1, year: new Date().getFullYear() }
  const months = (end.year - startDate.year) * 12 + (end.month - startDate.month) + 1

  const years = Math.floor(months / 12)
  const remainder = months % 12

  if (years === 0) {
    return `${remainder} ${remainder === 1 ? 'mo' : 'mos'}`
  }

  if (remainder === 0) {
    return `${years} ${years === 1 ? 'yr' : 'yrs'}`
  }

  return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remainder} ${remainder === 1 ? 'mo' : 'mos'}`
}

function CompanyCard({ company, index }: { company: ExperienceType; index: number }) {
  const dateRange = formatDateRange(company.startDate, company.endDate)
  const totalDuration = computeDuration(company.startDate, company.endDate)

  return (
    <article className="group">
      <Reveal delay={index * 100}>
        {/* Company Header */}
        <div className="mb-[40px]">
          <h3 className="text-foreground mb-1 text-2xl font-bold tracking-[-0.02em]">
            {company.company}
          </h3>
          <p className="text-text-secondary mb-0.5 text-base font-medium">{company.role}</p>
          <p className="text-text-muted text-sm">
            {dateRange} · {totalDuration}
          </p>
        </div>

        {/* Company Summary */}
        <p className="text-text-secondary mb-[40px] max-w-[620px] text-[15px] leading-relaxed">
          {company.summary}
        </p>
      </Reveal>

      {/* Projects */}
      {company.projects.length > 0 && (
        <div className="mb-[40px]">
          <Reveal delay={index * 100 + 100}>
            <SectionLabel>Projects</SectionLabel>
            <div className="space-y-4">
              {company.projects.map(project => (
                <div key={project.name} className="border-border rounded-xl border px-5 py-4">
                  <h4 className="text-foreground mb-1.5 text-base font-semibold">{project.name}</h4>
                  <p className="text-text-secondary max-w-[600px] text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      {/* Highlights */}
      <div className="mb-[40px]">
        <Reveal delay={index * 100 + 150}>
          <SectionLabel>Highlights</SectionLabel>
        </Reveal>
        <Reveal delay={index * 100 + 200}>
          <BulletList items={company.highlights} />
        </Reveal>
      </div>

      {/* Technology Groups */}
      <Reveal delay={index * 100 + 300}>
        <SectionLabel>Technologies</SectionLabel>
        <div className="flex flex-wrap gap-x-8 gap-y-5">
          {company.technologies.map(group => (
            <div key={group.category}>
              <p className="text-text-muted mb-2 text-[11px] font-medium tracking-widest uppercase">
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
      </Reveal>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-border border-t">
      <div className="section-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            {experienceSection.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={50}>
          <h2 className="text-foreground mb-4 max-w-[650px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            {experienceSection.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-text-secondary mb-16 max-w-[700px] text-[15px] leading-relaxed">
            {experienceSection.description}
          </p>
        </Reveal>

        {/* Company Cards */}
        <div>
          {experiences.map((company, index) => (
            <div key={company.company}>
              {index > 0 && <hr className="border-border my-12" />}
              <CompanyCard company={company} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}