import { experiences } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-t border-border">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-text-muted mb-3">
            Experience
          </p>
          <h2 className="text-[32px] sm:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-foreground mb-16">
            Career Progression
          </h2>
        </Reveal>

        <div className="max-w-[600px]">
          <div className="relative pl-8 border-l border-border space-y-10">
            {experiences.map((exp, i) => (
              <Reveal
                key={exp.company}
                delay={i * 100}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.35rem] top-1 w-2.5 h-2.5 rounded-full bg-border border-2 border-background">
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full bg-foreground" />
                    )}
                  </div>

                  <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Briefcase className="w-3.5 h-3.5" />
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