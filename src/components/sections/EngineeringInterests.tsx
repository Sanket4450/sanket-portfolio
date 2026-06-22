import { engineeringInterests } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Layers } from "lucide-react";

export default function EngineeringInterests() {
  return (
    <section id="about" className="section-padding border-t border-[#262626]">
      <div className="section-container max-w-[1100px]">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[#71717A] mb-3">
            Engineering
          </p>
          <h2 className="text-[32px] sm:text-[36px] leading-[1.15] font-bold tracking-[-0.02em] text-[#FAFAFA] mb-16">
            Things I Enjoy Building
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {engineeringInterests.map((interest, i) => (
            <Reveal key={interest} delay={i * 50}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors duration-300">
                <Layers className="w-4 h-4 text-[#71717A] shrink-0" />
                <span className="text-sm font-medium text-[#A1A1AA]">{interest}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}