// src/i18n/localeContext.js
import React, { createContext, useContext, useState } from 'react';
import en from './en.json';
import hi from './hi.json';

const messages = { en, hi };

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const defaultLang = navigator.language.startsWith('hi') ? 'hi' : 'en';
  const [lang, setLang] = useState(defaultLang);

  const t = key => messages[lang][key] || key;

  return (
    <LocaleContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
