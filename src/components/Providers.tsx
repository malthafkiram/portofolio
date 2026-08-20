"use client";

import { Language } from "@/data/portfolioData";
import { LanguageProvider } from "@/components/LanguageProvider";

export function Providers({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Language;
}) {
  return (
    <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>
  );
}
