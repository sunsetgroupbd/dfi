'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from './types';
import { bn, ContentDictionary } from '@/content/bn';
import { en } from '@/content/en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: ContentDictionary;
  formatNumber: (value: number | string, forceBanglaNumerals?: boolean) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const COOKIE_NAME = 'dfi_lang';

export const toBanglaNumeral = (str: string | number): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(str).replace(/[0-9]/g, (w) => bnDigits[parseInt(w, 10)]);
};

export function LanguageProvider({
  children,
  initialLang = 'bn',
}: {
  children: ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    // Sync document attribute on client
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    // Sync with client-side cookie if it differed at hydration
    if (typeof document !== 'undefined') {
      const match = document.cookie.match(/(^| )dfi_lang=([^;]+)/);
      if (match && (match[2] === 'bn' || match[2] === 'en')) {
        const savedLang = match[2] as Language;
        if (savedLang !== lang) {
          setLangState(savedLang);
        }
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    document.cookie = `${COOKIE_NAME}=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    setLang(lang === 'bn' ? 'en' : 'bn');
  };

  const t = lang === 'bn' ? bn : en;

  const formatNumber = (value: number | string, forceBanglaNumerals?: boolean): string => {
    if (forceBanglaNumerals || lang === 'bn') {
      return toBanglaNumeral(value);
    }
    return String(value);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, formatNumber }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
