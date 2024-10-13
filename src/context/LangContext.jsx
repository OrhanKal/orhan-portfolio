import { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // Varsayılan dil İngilizce

  const toggleLang = () => {
    setLang(lang === 'en' ? 'tr' : 'en');
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
