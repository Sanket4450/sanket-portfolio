import { featuredSystems } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Check, ArrowRight } from "lucide-react";

export default function Systems() {
  return (
    <section id="systems" className="section-padding border-t border-[#262626]">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[#71717A] mb-3">
            Featured Systems
          </p>
          <h2 className="text-[32px] sm:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-[#FAFAFA] mb-16">
            Products I've Built & Owned
          </h2>
        </Reveal>

        <div className="flex flex-col gap-24">
          {featuredSystems.map((system, i) => (
            <Reveal key={system.id} delay={i * 100}>
              <article className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
                {/* Main content */}
                <div>
                  <div className="mb-6">
                    <p className="text-xs font-medium tracking-widest uppercase text-[#71717A] mb-3">
                      {system.positioning}
                    </p>
                    <h3 className="text-[28px] sm:text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-[#FAFAFA]">
                      {system.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p className="text-[#A1A1AA] text-lg leading-[1.7] mb-8">
                    {system.summary}
                  </p>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">Problem</h4>
                    <p className="text-[#A1A1AA] leading-[1.7]">{system.problem}</p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">Role</h4>
                    <p className="text-[#A1A1AA] leading-[1.7]">{system.responsibilities}</p>
                  </div>

                  {/* Architecture */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">Architecture</h4>
                    <p className="text-[#A1A1AA] leading-[1.7]">{system.architecture}</p>
                  </div>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">Key Challenge</h4>
                    <p className="text-[#A1A1AA] leading-[1.7]">{system.challenges}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-2">Outcome</h4>
                    <p className="text-[#A1A1AA] leading-[1.7]">{system.outcomes}</p>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:border-l lg:border-[#262626] lg:pl-12">
                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {system.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                          <Check className="w-4 h-4 text-[#22C55E] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#FAFAFA] mb-4">
                      Business Impact
                    </h4>
                    <ul className="space-y-3">
                      {system.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-[#FAFAFA]">
                          <ArrowRight className="w-4 h-4 text-[#71717A] mt-0.5 shrink-0" />
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
  );
}