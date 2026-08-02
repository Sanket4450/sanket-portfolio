'use client'

import { contactSection, personal } from '@/utils/data'
import Reveal from '@/components/Reveal'
import { Mail, FileText } from 'lucide-react'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { GitHubIcon } from '../icons/GitHubIcon'

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-secondary-surface section-padding border-border border-t"
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,.04)',
      }}
    >
      <div className="section-container text-center">
        <Reveal>
          <p className="text-text-muted mb-4 text-sm font-medium tracking-widest uppercase">
            {contactSection.eyebrow}
          </p>

          <h2 className="text-foreground mb-6 text-[36px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[44px]">
            {contactSection.title}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-text-secondary mx-auto mb-6 max-w-[620px] text-[15px] leading-[1.75]">
            {contactSection.description}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-text-muted mb-12 flex flex-wrap items-center justify-center gap-y-1 text-[14px]">
            {contactSection.availability.map((item, index) => (
              <span key={item} className="flex items-center">
                {index > 0 && <span className="mx-2">•</span>}
                {item}
              </span>
            ))}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="bg-foreground text-background hover:bg-accent-hover inline-flex h-12 items-center gap-2 rounded-lg px-6 text-sm font-medium transition-colors duration-200"
              style={{ boxShadow: '0 1px 2px rgba(0,0,0,.35)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,.45)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,.35)'
              }}
            >
              <Mail className="h-4 w-4" />
              {personal.email}
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-text-secondary hover:text-foreground hover:border-border-hover inline-flex h-12 items-center gap-2 rounded-lg border px-6 text-sm font-medium transition-colors duration-200"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-text-secondary hover:text-foreground hover:border-border-hover inline-flex h-12 items-center gap-2 rounded-lg border px-6 text-sm font-medium transition-colors duration-200"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border text-text-secondary hover:text-foreground hover:border-border-hover inline-flex h-12 items-center gap-2 rounded-lg border px-6 text-sm font-medium transition-colors duration-200"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
