import { useContext } from 'react';
import { LangContext } from '../context/LangContext.jsx'; // Dil geçişi için
import { ThemeContext } from '../context/ThemeContext.jsx'; // Dark mode için

const Header = () => {
    const { lang, setLang } = useContext(LangContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header className={`p-4 ${theme === 'dark' ? 'bg-gray-900 text-slate-400 border-slate-400' : 'bg-white text-black'}`}>
            <div className=" flex gap-4 float-right items-center ">
                {/* Dark Mode Toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={theme === 'dark'} 
                        onChange={toggleTheme} 
                    />
                    <div className="w-11 h-5 bg-gray-300 rounded-full peer-checked:bg-indigo-800 peer-focus:ring-4 peer-focus:ring-blue-300 transition-all duration-300"></div>
                    <div className="absolute left-1 w-4 h-4 bg-amber-200 rounded-full peer-checked:translate-x-5 peer-checked:rounded- transition-transform duration-300"></div>
                    <p className='ml-1'>Dark Mode</p> 
                </label>
                <p>|</p>
                {/* Dil Değiştirme Butonu */}
                <button 
                    onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')} 
                    className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
                >
                    {lang === 'tr' ? 'Switch to English' : 'Türkçe’ye Geç'}
                </button>
            </div>
            <div className={"flex justify-between items-center py-4 clear-both"}>
            <div className="logo border-none rounded-full bg-violet-300 p-3 py-1 ">
                <h1 className="text-2xl text-violet-600 font-bold">O</h1>
            </div>

            <div className="flex items-center gap-10">
                <a href="#skills" className="hover:text-indigo-800">Skills</a>
                <a href="#projects" className="hover:text-indigo-800">Projects</a>
                <a href="#hireme" className="border-2 text-indigo-800 px-4 py-2 rounded border-indigo-800 hover:bg-indigo-800 hover:text-white">Hire me</a>
            </div>
            </div>
        </header>
    );
};

export default Header;