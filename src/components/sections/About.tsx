'use client'

import Reveal from '@/components/Reveal'
import { aboutSection, engineeringPrinciples } from '@/utils/data'

export default function About() {
  return (
    <section id="about" className="section-padding border-border border-t">
      <div className="section-container">
        {/* Section Header */}
        <Reveal delay={0}>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
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
          <div className="max-w-[680px] space-y-[22px]">
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-text-secondary text-[15px] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Engineering Principles Grid */}
        <div className="mt-[56px] grid gap-x-[48px] gap-y-[40px] sm:grid-cols-2">
          {engineeringPrinciples.map((principle, index) => {
            const rowIndex = Math.floor(index / 2)
            const delay = 220 + rowIndex * 80

            return (
              <Reveal key={principle.title} delay={delay}>
                <div>
                  <h3 className="text-foreground mb-2 text-base font-semibold">
                    {principle.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-relaxed">
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
