"use client";

import { useState, useEffect, type MouseEvent } from 'react'
import { navLinks, personal } from '@/utils/data'
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleResumeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.open(personal.resumeUrl, '_blank', 'noopener,noreferrer')
    setMobileOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        scrolled
          ? 'bg-background/80 border-border backdrop-blur-lg'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#hero" className="text-text-primary text-lg font-semibold tracking-tight">
          {personal.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            onClick={handleResumeClick}
            className="bg-text-primary text-background hover:bg-accent-hover inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium transition-colors duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-secondary hover:text-text-primary -mr-2 p-2 transition-colors md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="bg-background border-border border-t md:hidden">
          <nav className="section-container flex flex-col gap-1 py-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-text-primary py-3 text-base transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.resumeUrl}
              onClick={handleResumeClick}
              className="bg-text-primary text-background hover:bg-accent-hover mt-2 inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}