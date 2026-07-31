import { featuredSystems } from '@/utils/data'
import Reveal from '@/components/Reveal'
import { Check, ArrowRight } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="section-padding border-border border-t">
      <div className="section-container">
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            Featured Systems
          </p>
          <h2 className="text-foreground mb-16 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            Products I've Built & Owned
          </h2>
        </Reveal>

        <div className="flex flex-col gap-24">
          {featuredSystems.map((system, i) => (
            <Reveal key={system.id} delay={i * 100}>
              <article className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
                {/* Main content */}
                <div>
                  <div className="mb-6">
                    <p className="text-text-muted mb-3 text-xs font-medium tracking-widest uppercase">
                      {system.positioning}
                    </p>
                    <h3 className="text-foreground text-[28px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[32px]">
                      {system.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-text-secondary mb-8 text-lg leading-[1.7]">{system.summary}</p>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4 className="text-foreground mb-2 text-sm font-semibold">Problem</h4>
                    <p className="text-text-secondary leading-[1.7]">{system.problem}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-foreground mb-2 text-sm font-semibold">Role</h4>
                    <p className="text-text-secondary leading-[1.7]">{system.responsibilities}</p>
                  </div>

                  {/* Architecture */}
                  <div className="mb-6">
                    <h4 className="text-foreground mb-2 text-sm font-semibold">Architecture</h4>
                    <p className="text-text-secondary leading-[1.7]">{system.architecture}</p>
                  </div>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h4 className="text-foreground mb-2 text-sm font-semibold">Key Challenge</h4>
                    <p className="text-text-secondary leading-[1.7]">{system.challenges}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-foreground mb-2 text-sm font-semibold">Outcome</h4>
                    <p className="text-text-secondary leading-[1.7]">{system.outcomes}</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:border-border lg:border-l lg:pl-12">
                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-foreground mb-4 text-sm font-semibold">Key Capabilities</h4>
                    <ul className="space-y-2">
                      {system.highlights.map(h => (
                        <li key={h} className="text-text-secondary flex items-start gap-2 text-sm">
                          <Check className="text-success mt-0.5 h-4 w-4 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-foreground mb-4 text-sm font-semibold">Business Impact</h4>
                    <ul className="space-y-3">
                      {system.achievements.map(a => (
                        <li key={a} className="text-foreground flex items-start gap-2 text-sm">
                          <ArrowRight className="text-text-muted mt-0.5 h-4 w-4 shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
