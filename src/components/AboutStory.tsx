"use client";

import React from "react";
import { Language } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface AboutStoryProps {
  lang: Language;
}

export const AboutStory: React.FC<AboutStoryProps> = ({ lang }) => {
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-400">
              <span>{t.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.heading}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </div>

          {/* Key Engineering Pillars Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0C1221] border border-white/10 space-y-6 shadow-2xl">
              <h3 className="text-base font-bold text-white tracking-tight">
                {t.pillarsTitle}
              </h3>

              <div className="space-y-4">
                {t.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1"
                  >
                    <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                      {h.label}
                    </div>
                    <div className="text-sm font-semibold text-gray-200">
                      {h.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Education & Bootcamp Badges */}
              <div className="pt-4 border-t border-white/10 space-y-3 text-xs font-mono text-gray-400">
                <div className="flex items-center justify-between gap-3">
                  <span>{t.educationLabel}</span>
                  <span className="text-emerald-400 font-bold shrink-0">3.66</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>{t.bootcampLabel}</span>
                  <span className="text-sky-400 font-bold shrink-0">{t.bootcampValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
