import { personal } from '@/utils/data'
import { ArrowDown, FileText, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { GitHubIcon } from '../icons/GitHubIcon'

export default function Hero() {
  return (
    <section id="hero" className="section-padding relative flex min-h-[90vh] items-center">
      <div className="section-container w-full">
        <div className="max-w-[700px]">
          <Reveal delay={0}>
            <h1 className="text-text-primary mb-6 text-[64px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[72px] lg:text-[80px]">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-text-secondary mb-6 text-[28px] leading-[1.3] font-medium tracking-[-0.02em] sm:text-[32px] lg:text-[36px]">
              {personal.headline}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-text-muted mb-10 max-w-[600px] text-lg leading-[1.7]">
              {personal.supporting}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-text-primary text-background hover:bg-accent-hover inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm font-medium transition-colors duration-200"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="border-border text-text-secondary hover:text-text-primary hover:border-border-hover inline-flex h-11 items-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-text-secondary hover:text-text-primary hover:border-border-hover inline-flex h-11 items-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors duration-200"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-text-secondary hover:text-text-primary hover:border-border-hover inline-flex h-11 items-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors duration-200"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:block">
        <Reveal delay={600}>
          <a
            href="#impact"
            className="text-text-muted hover:text-text-secondary flex flex-col items-center gap-2 transition-colors duration-200"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-pulse" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
