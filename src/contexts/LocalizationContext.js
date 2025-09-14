// src/contexts/LocalizationContext.js
import React, { createContext, useContext, useState } from 'react';

// Add your language messages (usually imported from JSON or JS files)
const messages = {
  en: { welcome: "Welcome", modules: "Modules" },
  hi: { welcome: "स्वागत है", modules: "मॉड्यूल" },
  // Add other locales as needed
};

const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const defaultLang = navigator.language.startsWith('hi') ? 'hi' : 'en';
  const [lang, setLang] = useState(defaultLang);

  const t = (key) => (messages[lang] && messages[lang][key]) || key;

  return (
    <LocalizationContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Custom hook for usage in components
export const useLocalization = () => useContext(LocalizationContext);
