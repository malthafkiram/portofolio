"use client";

import React from "react";
import { Language, skillCategories } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface SkillsMatrixProps {
  lang: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {t.subheading}
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#0B101B]/90 border border-white/10 hover:border-sky-500/40 transition-all space-y-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 text-xs font-mono font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {category.title[lang]}
                </h3>
              </div>

              <div className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center p-2 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono"
                  >
                    <span className="text-gray-200 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
