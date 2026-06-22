import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section className="section-padding border-t border-[#262626]">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[#71717A] mb-3">
            Capabilities
          </p>
          <h2 className="text-[32px] sm:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-[#FAFAFA] mb-16">
            Technical Skills
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 75}>
              <div className="p-5 rounded-xl bg-[#111111] border border-[#262626]">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[#71717A] mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-[#A1A1AA]">
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
  );
}