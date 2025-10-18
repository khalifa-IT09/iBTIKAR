import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // For test environment, use require instead of dynamic import
        if (typeof window === 'undefined' || process.env.NODE_ENV === 'test') {
          const enTranslations = require('../locales/en.json');
          setTranslations(enTranslations);
          return;
        }
        
        const translationModule = await import(`../locales/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        // Fallback to English
        try {
          const fallbackModule = await import('../locales/en.json');
          setTranslations(fallbackModule.default);
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError);
        }
      }
    };

    loadTranslations();
  }, [language]);

  // Load saved language from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedLanguage = localStorage.getItem('ibtikar-language') as Language;
      if (savedLanguage && ['en', 'fr'].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('ibtikar-language', lang);
    }
    
    // Update document direction
    if (typeof document !== 'undefined') {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
    }
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const isRTL = false;

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
