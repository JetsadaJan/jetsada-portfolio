
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations/strings'; // Ensure this path is correct

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, replacements?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang === 'th' ? 'th' : 'en') as Language;
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, replacements?: Record<string, string>): string => {
    let text = translations[language][key] || translations.en[key] || key;
    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        text = text.replace(new RegExp(`{{${placeholder}}}`, 'g'), replacements[placeholder]);
      });
    }
    return text;
  };
  

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
