"use client";

import React, { useState, useEffect } from "react";
import { Language, siteConfig } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pickLang = (next: Language) => (e: React.SyntheticEvent) => {
    e.stopPropagation();
    onToggleLang(next);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 isolate pointer-events-auto transition-all duration-300 ${
        scrolled
          ? "bg-[#06080D]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-[#06080D]/70 backdrop-blur-md py-5"
      }`}
    >
      <div className="relative z-50 isolate max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
        {/* Logo / Monogram — truncated so the name cannot overlap EN/ID */}
        <a
          href="#top"
          className="flex items-center gap-3 group min-w-0 overflow-hidden"
        >
          <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform"></div>
          <div className="min-w-0 overflow-hidden">
            <div className="font-bold text-sm text-gray-100 tracking-tight flex items-center gap-2">
              <span className="truncate">{siteConfig.name}</span>
              <span className="inline-block w-2 h-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-xs text-sky-400 font-mono truncate">
              {siteConfig.role[lang]}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 bg-[#0E131F]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          <a
            href="#projects"
            className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            {t.nav.work}
          </a>
          <a
            href="#architecture"
            className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            {t.nav.architecture}
          </a>
          <a
            href="#skills"
            className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            {t.nav.skills}
          </a>
          <a
            href="#certificates"
            className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            {t.nav.certificates}
          </a>
          <a
            href="#about"
            className="px-4 py-2 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
          >
            {t.nav.about}
          </a>
        </nav>

        {/* Actions: Language Switcher & Quick Contact */}
        <div className="justify-self-end flex items-center gap-2 sm:gap-3 isolate pointer-events-auto relative z-50">
          <div
            className="flex items-center bg-[#0E131F] border border-white/10 rounded-full p-1 text-xs font-mono shrink-0 pointer-events-auto"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              data-testid="lang-en"
              onPointerDown={pickLang("en")}
              onClick={pickLang("en")}
              className={`min-h-11 min-w-11 px-3 rounded-full transition-all ${
                lang === "en"
                  ? "bg-sky-500 text-white font-bold shadow-md shadow-sky-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-pressed={lang === "en"}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              data-testid="lang-id"
              onPointerDown={pickLang("id")}
              onClick={pickLang("id")}
              className={`min-h-11 min-w-11 px-3 rounded-full transition-all ${
                lang === "id"
                  ? "bg-sky-500 text-white font-bold shadow-md shadow-sky-500/30"
                  : "text-gray-400 hover:text-white"
              }`}
              aria-pressed={lang === "id"}
              title="Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-full shadow-lg shadow-emerald-900/30 transition-all active:scale-95"
          >
            <span>{t.nav.hireMe}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E17]/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-2xl pointer-events-auto">
          <div
            className="flex items-center bg-[#0E131F] border border-white/10 rounded-full p-1 text-xs font-mono w-fit"
            role="group"
            aria-label="Bahasa"
          >
            <button
              type="button"
              onPointerDown={pickLang("en")}
              onClick={pickLang("en")}
              className={`min-h-9 px-3 rounded-full transition-all ${
                lang === "en"
                  ? "bg-sky-500 text-white font-bold"
                  : "text-gray-400"
              }`}
            >
              English
            </button>
            <button
              type="button"
              onPointerDown={pickLang("id")}
              onClick={pickLang("id")}
              className={`min-h-9 px-3 rounded-full transition-all ${
                lang === "id"
                  ? "bg-sky-500 text-white font-bold"
                  : "text-gray-400"
              }`}
            >
              Indonesia
            </button>
          </div>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-200 hover:text-sky-400 py-1"
          >
            {t.nav.work}
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-200 hover:text-sky-400 py-1"
          >
            {t.nav.architecture}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-200 hover:text-sky-400 py-1"
          >
            {t.nav.skills}
          </a>
          <a
            href="#certificates"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-200 hover:text-sky-400 py-1"
          >
            {t.nav.certificates}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-200 hover:text-sky-400 py-1"
          >
            {t.nav.about}
          </a>
          <div className="pt-2">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-full shadow-lg"
            >
              {t.nav.hireMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
