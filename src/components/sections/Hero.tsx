'use client'

import { personal } from '@/utils/data'
import { ArrowDown, FileText, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'
import { LinkedInIcon } from '../icons/LinkedInIcon'
import { GitHubIcon } from '../icons/GitHubIcon'

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-padding relative flex min-h-[90vh] items-center"
      style={{
        background: `#0F0F10 radial-gradient(circle at 50% -10%, rgba(255,255,255,.035), transparent 58%), linear-gradient(180deg, transparent, rgba(255,255,255,.015))`,
      }}
    >
      <div className="section-container w-full">
        <div className="max-w-[700px]">
          <Reveal delay={0}>
            <h1 className="text-text-primary mb-6 text-[64px] leading-[1.05] font-bold tracking-[-0.03em] sm:text-[72px] lg:text-[80px]">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={50}>
            <p className="text-text-secondary mb-6 text-[28px] leading-[1.3] font-medium tracking-[-0.02em] sm:text-[32px] lg:text-[36px]">
              {personal.headline}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-text-body mb-10 max-w-[640px] text-[15px] leading-[1.75]">
              {personal.supporting}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-text-primary text-background hover:bg-accent-hover inline-flex h-12 items-center gap-2 rounded-[10px] px-6 text-[14px] font-medium"
                style={{ boxShadow: '0 1px 2px rgba(0,0,0,.35)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,.35)'
                }}
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="border-border text-text-secondary inline-flex h-12 items-center gap-2 rounded-[10px] border px-6 text-[14px] font-medium"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)';
                  e.currentTarget.style.color = '#FAFAFA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-text-secondary inline-flex h-12 items-center gap-2 rounded-[10px] border px-6 text-[14px] font-medium"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)';
                  e.currentTarget.style.color = '#FAFAFA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-text-secondary inline-flex h-12 items-center gap-2 rounded-[10px] border px-6 text-[14px] font-medium"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)';
                  e.currentTarget.style.color = '#FAFAFA';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
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
          <Reveal delay={200}>
          <a
            href="#about"
            className="text-text-muted hover:text-text-secondary flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
