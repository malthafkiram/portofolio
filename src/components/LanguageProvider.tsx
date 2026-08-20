"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Language } from "@/data/portfolioData";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
export const LANG_STORAGE_KEY = "portfolio-lang";

function persistLang(next: Language) {
  document.documentElement.lang = next;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, next);
  } catch {
    // private mode
  }
  document.cookie = `${LANG_STORAGE_KEY}=${next}; path=/; max-age=31536000; SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);
  const userTouched = useRef(false);

  useEffect(() => {
    document.documentElement.dataset.hydrated = "true";
    if (userTouched.current) return;
    try {
      const cookieMatch = document.cookie.match(
        /(?:^|; )portfolio-lang=(id|en)/
      );
      const cookieLang = cookieMatch?.[1] as Language | undefined;
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);

      if (cookieLang === "id" || cookieLang === "en") {
        if (cookieLang !== lang) setLangState(cookieLang);
        persistLang(cookieLang);
        return;
      }

      if (saved === "id" || saved === "en") {
        if (saved !== lang) setLangState(saved);
        persistLang(saved);
        return;
      }
    } catch {
      // private mode
    }
    persistLang(lang);
    // Run once after mount. Click handler uses userTouched to win races.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((next: Language) => {
    userTouched.current = true;
    setLangState(next);
    persistLang(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
