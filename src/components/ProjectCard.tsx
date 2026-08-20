"use client";

import React from "react";
import { Project, Language } from "@/data/portfolioData";
import { translations } from "@/data/translations";
import { ScreenshotSlider } from "@/components/ScreenshotSlider";

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  lang: Language;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  lang,
}) => {
  const t = translations[lang].projects;
  const shots = project.screenshots || [];

  return (
    <article
      className={`group relative rounded-3xl p-5 sm:p-7 transition-all duration-500 flex flex-col justify-between ${
        project.isMasterpiece
          ? "bg-gradient-to-b from-[#0F172A]/90 to-[#0A0E17]/90 border-2 border-sky-500/50 shadow-2xl shadow-sky-500/15 hover:border-sky-400"
          : "bg-[#0B101B]/80 border border-white/10 hover:border-sky-500/40 shadow-xl hover:shadow-2xl hover:shadow-sky-500/10"
      }`}
    >
      <div className="space-y-5">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`px-3 py-1 text-[11px] font-mono font-bold uppercase rounded-full border ${
              project.isMasterpiece
                ? "bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-md shadow-sky-500/20"
                : "bg-white/5 text-gray-300 border-white/10"
            }`}
          >
            {project.badge[lang]}
          </span>

          <div className="text-xs font-mono text-gray-400">
            <span className="text-gray-500">{t.roleLabel}:</span>{" "}
            <span className="text-gray-300 font-semibold">{project.role[lang]}</span>
          </div>
        </div>

        {shots.length > 0 ? (
          <ScreenshotSlider
            shots={shots}
            lang={lang}
            onTap={() => onSelectProject(project)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="rounded-2xl border border-white/10 group-hover:border-sky-500/40 transition-colors"
          />
        ) : null}

        {/* Title & Tagline */}
        <div>
          <h3
            onClick={() => onSelectProject(project)}
            className="text-xl sm:text-2xl font-bold text-white tracking-tight cursor-pointer group-hover:text-sky-300 transition-colors"
          >
            {project.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed">
            {project.tagline[lang]}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono text-gray-300 bg-white/5 border border-white/10 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        {/* Primary Case Study Button */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 font-mono tracking-wide py-1"
        >
          <span>{t.viewDeepDive}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Live / GitHub Links */}
        <div className="flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-all"
              title="Open Live Preview"
            >
              <span>{project.liveLabel ? project.liveLabel[lang] : t.liveDemo}</span>
              <span className="text-[10px]">↗</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              title={t.github}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}

          {project.githubBe && (
            <a
              href={project.githubBe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-1.5 text-[10px] font-mono font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              title={t.githubBe}
            >
              BE
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
