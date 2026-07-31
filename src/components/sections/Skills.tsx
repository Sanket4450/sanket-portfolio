import { skillGroups } from '@/utils/data'
import Reveal from '@/components/Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-border border-t">
      <div className="section-container">
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            Capabilities
          </p>
          <h2 className="text-foreground mb-16 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            Technical Skills
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 75}>
              <div className="bg-surface border-border rounded-xl border p-5">
                <h3 className="text-text-muted mb-4 text-xs font-semibold tracking-widest uppercase">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map(skill => (
                    <li key={skill} className="text-text-secondary text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
