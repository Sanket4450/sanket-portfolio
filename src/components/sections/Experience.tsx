import { experiences } from '@/utils/data'
import Reveal from '@/components/Reveal'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-border border-t">
      <div className="section-container">
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-foreground mb-16 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            Career Progression
          </h2>
        </Reveal>

        <div className="max-w-[600px]">
          <div className="border-border relative space-y-10 border-l pl-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 100}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="bg-border border-background absolute top-1 -left-[2.35rem] h-2.5 w-2.5 rounded-full border-2">
                    {i === 0 && <div className="bg-foreground absolute inset-0 rounded-full" />}
                  </div>

                  <p className="text-text-muted mb-1 text-xs font-medium tracking-widest uppercase">
                    {exp.period}
                  </p>
                  <h3 className="text-foreground mb-1 text-lg font-semibold">{exp.role}</h3>
                  <div className="text-text-secondary flex items-center gap-2 text-sm">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{exp.company}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
