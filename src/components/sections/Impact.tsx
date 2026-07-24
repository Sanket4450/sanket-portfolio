import { impact } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function Impact() {
  return (
    <section id="impact" className="section-padding border-t border-border">
      <div className="section-container">
        <Reveal>
            <p className="text-sm font-medium tracking-widest uppercase text-text-muted mb-12">
            Impact
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impact.map((item, i) => (
            <Reveal key={item.label} delay={i * 75}>
              <div className="p-6 rounded-xl bg-surface border border-border hover:border-border-hover transition-colors duration-300">
                {item.before ? (
                  <div className="mb-3">
                    <p className="text-xs text-text-muted line-through">{item.before}</p>
                    <p className="text-3xl font-bold tracking-tight text-success">
                      {item.after}
                    </p>
                  </div>
                ) : (
                    <p className="text-3xl font-bold tracking-tight text-text-primary mb-3">
                    {item.value}
                  </p>
                )}
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}