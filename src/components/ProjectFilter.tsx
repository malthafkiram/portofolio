"use client";

import React from "react";
import { Language } from "@/data/portfolioData";
import { translations } from "@/data/translations";

export type ProjectCategoryFilter = "all" | "ai" | "fullstack" | "realtime" | "mobile";

interface ProjectFilterProps {
  currentFilter: ProjectCategoryFilter;
  onSelectFilter: (filter: ProjectCategoryFilter) => void;
  lang: Language;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  currentFilter,
  onSelectFilter,
  lang,
}) => {
  const t = translations[lang].filters;

  const filters: { id: ProjectCategoryFilter; label: string }[] = [
    { id: "all", label: t.all },
    { id: "ai", label: t.ai },
    { id: "fullstack", label: t.fullstack },
    { id: "realtime", label: t.realtime },
    { id: "mobile", label: t.mobile },
  ];

  const pick = (id: ProjectCategoryFilter) => (e: React.SyntheticEvent) => {
    e.stopPropagation();
    onSelectFilter(id);
  };

  return (
    <div className="relative z-20 pointer-events-auto flex flex-wrap items-center justify-center gap-2 pb-8">
      {filters.map((filter) => {
        const active = currentFilter === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            data-testid={`filter-${filter.id}`}
            onPointerDown={pick(filter.id)}
            onClick={pick(filter.id)}
            className={`inline-flex items-center gap-2 min-h-11 px-4 py-2 rounded-full text-xs font-mono transition-all ${
              active
                ? "bg-sky-500 text-white font-bold shadow-lg shadow-sky-500/25 border border-sky-400"
                : "bg-[#0E131F]/90 text-gray-400 border border-white/10 hover:text-white hover:border-white/20"
            }`}
          >
            <span>{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
};
