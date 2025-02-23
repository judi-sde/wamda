import React, { ReactNode } from 'react';
import { LanguageProvider } from '@/app/lib/context/LanguageContext';
import { ThemeProvider } from '@/app/lib/context/ThemeContext';

interface ProviderWrapperProps {
  children: ReactNode;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default ProviderWrapper;
