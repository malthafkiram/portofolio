"use client";

import React from "react";
import Image from "next/image";
import { Language, siteConfig } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section
      id="top"
      className="relative z-0 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden pointer-events-none"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* No pointer-events-auto on this wrapper: padding + empty grid must not eat navbar/filter clicks. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 pointer-events-auto">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1424] border border-sky-500/30 text-sky-300 text-xs font-mono shadow-lg shadow-sky-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t.hero.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              <span>{t.hero.headlinePrefix} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">
                {t.hero.headlineGradient}
              </span>
              <br />
              <span>{t.hero.headlineSuffix}</span>
            </h1>

            {/* Tagline / Pitch */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {t.hero.tagline}
            </p>

            {/* Quick Tech Highlight Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {t.hero.quickTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:border-sky-500/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 rounded-xl shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>{t.hero.ctaPrimary}</span>
              </a>

              <a
                href={siteConfig.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-gray-200 bg-[#0E131F] hover:bg-[#151D2E] border border-white/15 hover:border-sky-400/50 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
              >
                <svg
                  className="w-4 h-4 text-sky-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>
          </div>

          {/* Portrait & Stats Terminal Card */}
          <div className="lg:col-span-5 relative pointer-events-auto">
            <div className="relative mx-auto max-w-sm rounded-3xl p-1 bg-gradient-to-b from-sky-500/30 via-white/10 to-indigo-500/20 shadow-2xl shadow-sky-500/10">
              <div className="rounded-[22px] bg-[#0A0E17] p-4 sm:p-6 overflow-hidden border border-white/10">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-gray-400">
                    kabanux@fullstack-station:~$
                  </div>
                </div>

                {/* Profile Image */}
                <div className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden mb-5 border border-white/10">
                  <Image
                    src="/Althaf.jpg"
                    alt="M. Althaf Kiram - Fullstack Software Engineer Portrait"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                    <div className="text-xs font-bold text-white tracking-wide">
                      M. Althaf Kiram, S.Kom
                    </div>
                    <div className="text-[11px] text-sky-400 font-mono">
                      {t.hero.portraitRole}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {siteConfig.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center"
                    >
                      <div className="text-lg sm:text-xl font-bold font-mono text-sky-400">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5">
                        {stat.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
