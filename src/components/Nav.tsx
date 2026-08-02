"use client";

import { useState, useEffect, useRef, type MouseEvent, useCallback } from 'react'
import { navLinks, personal } from '@/utils/data'
import { Menu, X } from "lucide-react";

function updateUrlHash(sectionId: string) {
  if (sectionId) {
    const url = new URL(window.location.href)
    url.hash = sectionId
    history.replaceState(history.state, '', url)
  } else {
    // Clear hash completely when no section is active (hero at top)
    history.replaceState(history.state, '', window.location.pathname)
  }
}

function getInitialSection(): string {
  if (typeof window === 'undefined') return ''
  const hash = window.location.hash.replace('#', '');
  const validIds = navLinks.map(link => link.href.replace('#', ''));
  return hash && validIds.includes(hash) ? hash : ''
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(getInitialSection);
  const isManualScrolling = useRef(false);

  // Sync URL hash to initial section on mount
  useEffect(() => {
    const initialSection = getInitialSection();
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash !== initialSection) {
      updateUrlHash(initialSection)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep URL hash in sync with activeSection (for non-manual scrolls)
  useEffect(() => {
    if (!isManualScrolling.current) {
      updateUrlHash(activeSection);
    }
  }, [activeSection]);

  const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.open(personal.resumeUrl, '_blank', 'noopener,noreferrer')
    setMobileOpen(false)
  }

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    isManualScrolling.current = true;
    setActiveSection(sectionId);
    // Update URL hash before scroll (no history pollution via replaceState)
    updateUrlHash(sectionId);
    setMobileOpen(false);
    // Manually scroll to the section for full control
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScrollEnd = () => {
      isManualScrolling.current = false;
      // Sync URL to whatever section is actually visible after scroll completes
      const heroEl = document.getElementById('hero')
      if (heroEl) {
        const heroRect = heroEl.getBoundingClientRect()
        // If hero is at the focus area (near the top), clear active state
        if (heroRect.top <= 96 && heroRect.bottom >= 96) {
          setActiveSection('')
          updateUrlHash('')
          return
        }
      }

      const sectionIds = navLinks.map(link => link.href.replace('#', ''));
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 96 && rect.bottom >= 96) {
            setActiveSection(id);
            updateUrlHash(id);
            break;
          }
        }
      }
    };

    const handleScrollDuringManual = () => {
      if (scrollEndTimer !== null) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(handleScrollEnd, 150);
    };

    const onScroll = () => {
      if (isManualScrolling.current) {
        handleScrollDuringManual();
      }
    };

    if ('onscrollend' in window) {
      window.addEventListener("scrollend", handleScrollEnd, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("scroll", onScroll);
      if (scrollEndTimer !== null) clearTimeout(scrollEndTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const navSectionIds = navLinks.map(link => link.href.replace('#', ''))
    const allSectionIds = ['hero', ...navSectionIds]
    let rafId: number | null = null

    // Deterministically compute which section is under the header — no gaps, no flicker.
    // A section is "active" when its top <= header bottom (96px) ***and*** its bottom > header bottom.
    const computeActiveFromPosition = () => {
      if (isManualScrolling.current) return

      for (const id of allSectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 96 && rect.bottom > 96) {
          if (id === 'hero') {
            setActiveSection('')
            updateUrlHash('')
          } else {
            setActiveSection(id)
            updateUrlHash(id)
          }
          return
        }
      }
    }

    const onScroll = () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(computeActiveFromPosition)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    computeActiveFromPosition()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b duration-200 ease-out ${
        scrolled
          ? 'border-border backdrop-blur-[14px]'
          : 'border-transparent bg-transparent'
      }`}
      style={
        scrolled
          ? {
              backgroundColor: 'rgba(18,18,18,.92)',
              boxShadow: '0 2px 12px rgba(0,0,0,.45)',
              transition: 'background-color 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out',
            }
          : {
              transition: 'background-color 200ms ease-out, border-color 200ms ease-out, box-shadow 200ms ease-out',
            }
      }
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#hero" className="text-text-primary text-lg font-semibold tracking-tight">
          {personal.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href.replace('#', ''))}
                className={`relative text-sm ${
                  isActive
                    ? 'text-text-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                } select-none`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-current"
                    style={{ transition: 'width 200ms ease-out, opacity 200ms ease-out' }}
                  />
                )}
              </a>
            )
          })}
          <a
            href={personal.resumeUrl}
            onClick={handleResumeClick}
            className="bg-text-primary text-background hover:bg-accent-hover inline-flex h-9 items-center rounded-[10px] px-4 text-[14px] font-medium select-none"
            style={{ boxShadow: '0 1px 2px rgba(0,0,0,.35)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,.35)';
            }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-secondary hover:text-text-primary -mr-2 p-2 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''} absolute top-full left-0 right-0 bg-background border-border border-t md:hidden`}>
          <nav className="section-container flex flex-col gap-1 py-4">
            {navLinks.map(link => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href.replace('#', ''))}
                  className={`py-3 text-base ${
                    isActive
                      ? 'text-text-primary font-semibold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={personal.resumeUrl}
              onClick={handleResumeClick}
              className="bg-text-primary text-background hover:bg-accent-hover mt-2 inline-flex h-12 items-center justify-center rounded-[10px] px-6 text-[14px] font-medium"
            >
              Resume
            </a>
          </nav>
        </div>
    </header>
  )
}