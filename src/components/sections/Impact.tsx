import { impact } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Impact() {
  return (
    <section id="impact" className="section-padding border-t border-[#262626]">
      <div className="section-container">
        <Reveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[#71717A] mb-12">
            Impact
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impact.map((item, i) => (
            <Reveal key={item.label} delay={i * 75}>
              <div className="p-6 rounded-xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors duration-300">
                {item.before ? (
                  <div className="mb-3">
                    <p className="text-xs text-[#71717A] line-through">{item.before}</p>
                    <p className="text-3xl font-bold tracking-tight text-[#22C55E]">
                      {item.after}
                    </p>
                  </div>
                ) : (
                  <p className="text-3xl font-bold tracking-tight text-[#FAFAFA] mb-3">
                    {item.value}
                  </p>
                )}
                <p className="text-sm text-[#A1A1AA]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}