"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Project, Language } from "@/data/portfolioData";
import { translations } from "@/data/translations";
import { ScreenshotSlider } from "@/components/ScreenshotSlider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  lang,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const t = translations[lang].projects;
  const star = project.starMethod;

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090D16] border border-sky-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-sky-500/10 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0D1322]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
              {project.badge[lang]}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title={t.closeModal}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          {/* Tagline & Links */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
              {project.description[lang]}
            </p>

            {/* Action Links Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-xl shadow-lg shadow-sky-600/30 transition-all"
                >
                  <span>{project.liveLabel ? project.liveLabel[lang] : t.liveDemo}</span>
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>{t.github}</span>
                </a>
              )}

              {project.githubBe && (
                <a
                  href={project.githubBe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>{t.githubBe}</span>
                </a>
              )}

              {project.apiDocs && (
                <a
                  href={project.apiDocs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 rounded-xl transition-all"
                >
                  <span>{t.apiDocs}</span>
                </a>
              )}

              <div className="ml-auto text-xs font-mono text-gray-400">
                <span className="text-gray-500">{t.roleLabel}:</span>{" "}
                <span className="text-sky-300 font-semibold">{project.role[lang]}</span>
              </div>
            </div>
          </div>

          {/* Screenshot Gallery Viewer (if available) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3 bg-[#06080E] p-4 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span className="font-semibold text-gray-300">
                  {t.screenshotGallery} ({activeImageIndex + 1}/{project.screenshots.length})
                </span>
                <span>
                  {project.screenshots[activeImageIndex]?.caption?.[lang] || ""}
                </span>
              </div>

              <ScreenshotSlider
                shots={project.screenshots}
                lang={lang}
                fit="contain"
                sizes="(max-width: 1024px) 100vw, 850px"
                index={activeImageIndex}
                onIndexChange={setActiveImageIndex}
                className="rounded-xl border border-white/10"
              />

              {/* Thumbnail Strip */}
              {project.screenshots.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {project.screenshots.map((s, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 aspect-video rounded-lg overflow-hidden shrink-0 border transition-all ${
                        activeImageIndex === idx
                          ? "border-sky-400 ring-2 ring-sky-400/40"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={s.src} alt={s.alt} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STAR Engineering Methodology Breakdown */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-bold">
              {t.starLabel}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Situation */}
              <div className="p-4 rounded-2xl bg-[#0E1424] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>{t.situation}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {star.situation[lang]}
                </p>
              </div>

              {/* Task */}
              <div className="p-4 rounded-2xl bg-[#0E1424] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>{t.task}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {star.task[lang]}
                </p>
              </div>

              {/* Action */}
              <div className="p-4 rounded-2xl bg-[#0E1424] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>{t.action}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {star.action[lang]}
                </p>
              </div>

              {/* Result */}
              <div className="p-4 rounded-2xl bg-[#0E1424] border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{t.result}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                  {star.result[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* System Architecture Highlights */}
          {project.architectureHighlights[lang] && (
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-sky-400 font-bold">
                {t.architectureHighlights}
              </h3>
              <ul className="space-y-2">
                {project.architectureHighlights[lang].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-sky-400 font-mono font-bold mt-0.5">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              {t.stackLabel}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono text-sky-300 bg-sky-950/50 border border-sky-500/30 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0D1322] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
