import { experiences } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-[#262626]">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[#71717A] mb-3">
            Experience
          </p>
          <h2 className="text-[32px] sm:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-[#FAFAFA] mb-16">
            Career Progression
          </h2>
        </Reveal>

        <div className="max-w-[600px]">
          <div className="relative pl-8 border-l border-[#262626] space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 100}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[2.35rem] top-1 w-2.5 h-2.5 rounded-full bg-[#262626] border-2 border-[#0A0A0A]">
                    {i === 0 && (
                      <div className="absolute inset-0 rounded-full bg-[#FAFAFA]" />
                    )}
                  </div>

                  <p className="text-xs font-medium tracking-widest uppercase text-[#71717A] mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
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
  );
}