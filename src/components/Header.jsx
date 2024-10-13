import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LangContext } from '../context/LangContext';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLang, lang } = useContext(LangContext);

  return (
    <header className=" items-center w-full">
      <div className=''>
      <div className="flex items-center space-x-6 float-right">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" onClick={toggleTheme} checked={theme === 'dark'} />
            <div className="w-10 h-4 bg-gray-200 rounded-full shadow-inner dark:bg-purple-600">
              <div className="w-4 h-4 bg-yellow-400 rounded-full transform transition-all duration-300 ease-in-out translate-x-0 dark:translate-x-6"></div>
            </div>
          </label>
          <span className="ml-2 text-gray-500">{theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}</span>
        </div>

        <button onClick={toggleLang} className="text-blue-600 hover:underline">
          {lang === 'tr' ? 'ENGLISH' : 'TÜRKÇE\'YE GEÇ'}
        </button>
        </div>

      <div className='flex justify-between w-full'>
      <div className="flex items-center">
        <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center">
          <span className="text-2xl text-purple-600">O</span>
        </div>
      </div>

      <nav className="flex space-x-8 items-center">
        <a href="#skills" className="text-gray-500 hover:text-gray-800">Skills</a>
        <a href="#projects" className="text-gray-500 hover:text-gray-800">Projects</a>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition">
          Hire me
        </button>
      </nav>
      </div>
      </div>
    </header>
  );
}

export default Header;