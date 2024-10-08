import { createContext, useState } from 'react';

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'tr' : 'en'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext, LangProvider };