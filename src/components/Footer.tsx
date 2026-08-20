"use client";

import React from "react";
import { Language, siteConfig } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <footer
      id="contact"
      className="pt-20 pb-32 border-t border-white/10 bg-[#04060A] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Left: Terminal Statement */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{t.statusText}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.heading}
            </h3>

            <p className="text-sm text-gray-400 max-w-xl">{t.body}</p>
          </div>

          {/* Right: Direct Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#0B101B] border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400">
                {t.channels}
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-xs font-mono text-gray-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>{siteConfig.email}</span>
                  </span>
                  <span className="text-sky-400">→</span>
                </a>

                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-xs font-mono text-gray-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>{siteConfig.phone} (WhatsApp / Seluler)</span>
                  </span>
                  <span>→</span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-xs font-mono text-gray-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>linkedin.com/in/malthafkiram</span>
                  </span>
                  <span className="text-sky-400">↗</span>
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-xs font-mono text-gray-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>github.com/malthafkiram</span>
                  </span>
                  <span className="text-sky-400">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 text-center sm:text-left">
          <div>{t.rights}</div>
          <div>{siteConfig.location[lang]}</div>
        </div>
      </div>
    </footer>
  );
};
