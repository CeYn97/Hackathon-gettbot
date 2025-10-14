'use client';

import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/lib/i18n/client';

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    const updateLangAttribute = (lng: string) => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lng;
      }
    };

    updateLangAttribute(i18n.language);
    i18n.on('languageChanged', updateLangAttribute);

    return () => {
      i18n.off('languageChanged', updateLangAttribute);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
