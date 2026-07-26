import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section className="section-padding border-t border-border">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-text-muted mb-3">
            Capabilities
          </p>
          <h2 className="text-[32px] sm:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-foreground mb-16">
            Technical Skills
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 75}>
              <div className="p-5 rounded-xl bg-surface border border-border">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-text-secondary">
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