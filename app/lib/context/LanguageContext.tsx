"use client"

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface LanguageContextState {
  language: 'en' | 'ar';
  setLanguage: (language: 'en' | 'ar') => void;
}

const LanguageContext = createContext<LanguageContextState | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  // useEffect(() => {
  //   document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  // }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextState => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
