"use client";

import { useState, useEffect } from "react";
import { navLinks, personal } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-[#262626]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a
          href="#hero"
          className="text-[#FAFAFA] font-semibold text-lg tracking-tight"
        >
          {personal.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            download
            className="inline-flex items-center h-9 px-4 text-sm font-medium rounded-lg bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#E4E4E7] transition-colors duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#262626]">
          <nav className="section-container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.resumeUrl}
              download
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center h-10 mt-2 px-4 text-sm font-medium rounded-lg bg-[#FAFAFA] text-[#0A0A0A] hover:bg-[#E4E4E7] transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}