import { engineeringInterests } from '@/utils/data'
import Reveal from '@/components/Reveal'
import { Layers } from 'lucide-react'

export default function EngineeringInterests() {
  return (
    <section id="about" className="section-padding border-border border-t">
      <div className="section-container max-w-[1100px]">
        <Reveal>
          <p className="text-text-muted mb-3 text-sm font-medium tracking-widest uppercase">
            Engineering
          </p>
          <h2 className="text-foreground mb-16 text-[32px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[36px]">
            Things I Enjoy Building
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringInterests.map((interest, i) => (
            <Reveal key={interest} delay={i * 50}>
              <div className="bg-surface border-border hover:border-border-hover flex items-center gap-3 rounded-xl border p-4 transition-colors duration-300">
                <Layers className="text-text-muted h-4 w-4 shrink-0" />
                <span className="text-text-secondary text-sm font-medium">{interest}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
