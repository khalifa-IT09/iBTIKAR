import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAdmin } from './AdminContext';

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
  const { content, isAdminMode } = useAdmin();

  // Load translations from admin content or fallback to locale files
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        let translationData: Record<string, any> = {};

        if (isAdminMode && content) {
          // Use admin content if available
          translationData = convertAdminContentToTranslations(content, language);
        } else {
          // Fallback to locale files
          if (typeof window === 'undefined' || process.env.NODE_ENV === 'test') {
            const enTranslations = require('../locales/en.json');
            translationData = enTranslations;
            return;
          }
          
          const translationModule = await import(`../locales/${language}.json`);
          translationData = translationModule.default;
        }

        setTranslations(translationData);
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
  }, [language, content, isAdminMode]);

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

// Helper function to convert admin content to translation format
const convertAdminContentToTranslations = (content: any, language: 'en' | 'fr'): Record<string, any> => {
  const convertObject = (obj: any): any => {
    if (obj && typeof obj === 'object' && 'en' in obj && 'fr' in obj) {
      return obj[language];
    } else if (Array.isArray(obj)) {
      return obj.map(convertObject);
    } else if (obj && typeof obj === 'object') {
      const result: any = {};
      for (const [key, value] of Object.entries(obj)) {
        result[key] = convertObject(value);
      }
      return result;
    }
    return obj;
  };

  return convertObject(content);
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
