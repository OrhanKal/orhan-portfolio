import { useContext } from 'react';
import { LangContext } from '../context/LangContext.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';

const Header = () => {
  const { lang, setLang } = useContext(LangContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="logo">
        <h1 className="text-2xl font-bold">Orhan Kalsın</h1>
      </div>

      <div className="flex items-center gap-4">
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#hireme" className="bg-blue-500 border-2 text-white px-4 py-2 rounded hover:bg-blue-600">Hire me</a>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="bg-gray-300 p-2 rounded-full focus:outline-none">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        <button onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">
          {lang === 'tr' ? 'Switch to English' : 'Türkçe’ye Geç'}
        </button>
      </div>
    </header>
  );
};

export default Header;