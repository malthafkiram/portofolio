"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Language, certificatesData, Certificate } from "@/data/portfolioData";
import { translations } from "@/data/translations";

interface CertificatesProps {
  lang: Language;
}

export const Certificates: React.FC<CertificatesProps> = ({ lang }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const t = translations[lang].certificates;

  return (
    <section id="certificates" className="py-24 relative bg-[#070A11]/60">
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-3xl bg-[#0B101B] border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg group"
            >
              <div className="space-y-3">
                {/* Certificate Preview Image */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/50 border border-white/10 cursor-pointer group-hover:border-emerald-500/40 transition-colors"
                >
                  <Image
                    src={cert.preview}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-mono text-white bg-black/80 px-2.5 py-1 rounded-md border border-white/20">
                      {t.preview}
                    </span>
                  </div>
                </div>

                {/* Issuer Badge & Title */}
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
                  <span>{cert.issuer}</span>
                  <span className="text-gray-500">{cert.issueDate}</span>
                </div>

                <h3
                  onClick={() => setSelectedCert(cert)}
                  className="text-base font-bold text-white tracking-tight cursor-pointer hover:text-emerald-300 transition-colors"
                >
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-2">
                  {cert.description[lang]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    <span>{t.verifyOnline}</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-[11px] font-mono text-gray-400 hover:text-white"
                  >
                    {t.viewPdf}
                  </button>
                )}

                <span className="text-[10px] font-mono text-gray-500 uppercase px-2 py-0.5 rounded bg-white/5">
                  {t.categories[cert.category]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div className="fixed inset-0 z-[90] overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#0A0E17] border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400">{selectedCert.issuer}</span>
                <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-black border border-white/10">
              <Image
                src={selectedCert.preview}
                alt={selectedCert.title}
                fill
                className="object-contain"
                sizes="800px"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <p className="text-xs sm:text-sm text-gray-300 max-w-lg">
                {selectedCert.description[lang]}
              </p>

              <div className="flex items-center gap-3">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all"
                  >
                    {t.verifyOnline} ↗
                  </a>
                )}
                <a
                  href={selectedCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium text-gray-300 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                >
                  {t.viewPdf}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
