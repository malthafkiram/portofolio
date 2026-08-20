"use client";

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RecruiterBar } from "@/components/RecruiterBar";
import { ProjectFilter, ProjectCategoryFilter } from "@/components/ProjectFilter";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Certificates } from "@/components/Certificates";
import { AboutStory } from "@/components/AboutStory";
import { Footer } from "@/components/Footer";
import { projectsData, Project } from "@/data/portfolioData";
import { translations } from "@/data/translations";
import { useLanguage } from "@/components/LanguageProvider";

export default function HomePage() {
  const { lang, setLang } = useLanguage();
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategoryFilter>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const t = translations[lang];

  const filteredProjects = useMemo(() => {
    const listed = projectsData.filter((p) => !p.hidden);
    if (categoryFilter === "all") {
      return listed;
    }
    return listed.filter((p) => p.category === categoryFilter);
  }, [categoryFilter]);

  const featuredProjects = useMemo(
    () => filteredProjects.filter((p) => p.featured),
    [filteredProjects]
  );
  const moreProjects = useMemo(
    () => filteredProjects.filter((p) => !p.featured),
    [filteredProjects]
  );

  return (
    <div className="min-h-screen bg-[#06080D] text-[#F3F4F6] selection:bg-sky-500/30 selection:text-white cyber-grid">
      <Navbar lang={lang} onToggleLang={setLang} />

      <Hero lang={lang} />

      {/* Main Shipped Projects Section */}
      <section id="projects" className="py-24 relative z-10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t.projects.heading}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {t.projects.subheading}
            </p>
          </div>

          {/* Interactive Category Filter */}
          <ProjectFilter
            currentFilter={categoryFilter}
            onSelectFilter={setCategoryFilter}
            lang={lang}
          />

          {featuredProjects.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-gray-300 tracking-tight">
                {t.projects.featuredHeading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={setActiveProject}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          )}

          {moreProjects.length > 0 && (
            <div className="space-y-6 mt-16">
              <h3 className="text-sm font-semibold text-gray-300 tracking-tight">
                {t.projects.moreHeading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {moreProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={setActiveProject}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* System Architecture & DevOps Section */}
      <SystemArchitecture lang={lang} />

      {/* Skills Matrix Section */}
      <SkillsMatrix lang={lang} />

      {/* Verified Certificates Section */}
      <Certificates lang={lang} />

      {/* About & Leadership Section */}
      <AboutStory lang={lang} />

      {/* Footer & Contact */}
      <Footer lang={lang} />

      {/* Recruiter Floating Dock */}
      <RecruiterBar lang={lang} />

      {/* Deep-Dive STAR Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        lang={lang}
      />
    </div>
  );
}
