"use client";

import React from "react";
import { Language } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface SystemArchitectureProps {
  lang: Language;
}

export const SystemArchitecture: React.FC<SystemArchitectureProps> = ({ lang }) => {
  const t = translations[lang].architecture;

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {t.subheading}
          </p>
        </div>

        {/* Architecture Grid / Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.layers.map((layer, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-[#0A0F1D]/80 border border-white/10 hover:border-sky-500/40 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-sky-500/60 group-hover:bg-sky-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {layer.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {layer.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] font-mono text-sky-400/80">
                {t.verified}
              </div>
            </div>
          ))}

          {/* Interactive DevOps / Linux Terminal Card */}
          <div className="relative p-6 rounded-3xl bg-[#06080E] border border-sky-500/30 flex flex-col justify-between font-mono text-xs shadow-2xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-gray-400 pb-2 border-b border-white/10">
                <span className="text-emerald-400 font-bold">{t.pipelineTitle}</span>
                <span className="text-[10px]">{t.pipelineHost}</span>
              </div>
              <div className="text-gray-300 space-y-1">
                {t.pipelineLines.map((line) => (
                  <p key={line} className="text-gray-400">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-4 text-[11px] text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t.pipelineStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
