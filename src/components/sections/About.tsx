'use client'

import Reveal from '@/components/Reveal'
import { aboutSection, engineeringPrinciples } from '@/utils/data'

export default function About() {
  return (
    <section
      id="about"
      className="bg-secondary-surface section-padding border-border border-t"
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04)',
      }}
    >
      <div className="section-container">
        {/* Section Header */}
        <Reveal delay={0}>
          <p className="text-text-muted mb-3 text-[14px] font-medium tracking-[0.16em] uppercase">
            {aboutSection.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={50}>
          <h2 className="text-foreground mb-4 max-w-[650px] text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            {aboutSection.title}
          </h2>
        </Reveal>

        {/* Narrative */}
        <Reveal delay={100}>
          <div className="max-w-[680px] space-y-10">
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-text-body text-[15px] leading-[1.75]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Engineering Principles Grid */}
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {engineeringPrinciples.map((principle, index) => {
            const rowIndex = Math.floor(index / 2)
            const delay = 220 + rowIndex * 80

            return (
              <Reveal key={principle.title} delay={delay}>
                <div>
                  <h3 className="text-foreground mb-2 text-base font-semibold">
                    {principle.title}
                  </h3>
                  <p className="text-text-body text-[15px] leading-[1.75]">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
