import { impact } from '@/utils/data'
import Reveal from '@/components/Reveal'

export default function Impact() {
  return (
    <section id="impact" className="section-padding border-border border-t">
      <div className="section-container">
        <Reveal>
          <p className="text-text-muted mb-12 text-sm font-medium tracking-widest uppercase">
            Impact
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, i) => (
            <Reveal key={item.label} delay={i * 75}>
              <div className="bg-surface border-border hover:border-border-hover rounded-xl border p-6 transition-colors duration-300">
                {item.before ? (
                  <div className="mb-3">
                    <p className="text-text-muted text-xs line-through">{item.before}</p>
                    <p className="text-success text-3xl font-bold tracking-tight">{item.after}</p>
                  </div>
                ) : (
                  <p className="text-text-primary mb-3 text-3xl font-bold tracking-tight">
                    {item.value}
                  </p>
                )}
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
