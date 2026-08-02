import { skillGroups, skillsSection } from '@/utils/data'
import Reveal from '@/components/Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-border border-t">
      <div className="section-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            {skillsSection.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={50}>
          <h2 className="text-foreground mb-4 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            {skillsSection.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-text-secondary mb-16 max-w-[700px] text-[15px] leading-relaxed">
            {skillsSection.description}
          </p>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={150 + i * 60}>
              <div>
                <h3 className="text-text-muted mb-4 text-[11px] font-medium tracking-widest uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="bg-surface border-border text-text-muted inline-block rounded-md border px-2.5 py-1 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}