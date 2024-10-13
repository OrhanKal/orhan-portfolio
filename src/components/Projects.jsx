import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import { LangContext } from '../context/LangContext.jsx';

function Projects() {
  const { theme } = useContext(ThemeContext);  // Theme context'i kullanarak temayı al
  const { lang } = useContext(LangContext);  // Dil context'i kullanarak dili al

  const projectTexts = {
    en: {
      title: "Projects",
      workintech: "Workintech",
      randomJokes: "Random Jokes",
      journey: "Journey",
    },
    tr: {
      title: "Projeler",
      workintech: "Workintech",
      randomJokes: "Rastgele Şakalar",
      journey: "Yolculuk",
    }
  };

  const currentText = projectTexts[lang];

  return (
    <div className="w-full py-10 mb-10">
      <div className="text-5xl leading-none font-semibold mb-10 dark:text-white">{currentText.title}</div>  {/* Dark mode için text-white */}
      <div className="flex justify-between gap-x-32">
        <div className="w-1/2">
          <img src="https://placehold.co/300x180" alt="Workintech" />
          <h1 className="text-3xl text-indigo-800 dark:text-indigo-300 mb-4">{currentText.workintech}</h1> {/* Dark mode text-indigo-300 */}
          <p className="text-sm text-gray-400 dark:text-gray-300">A project description...</p> {/* Dark mode text-gray-300 */}
        </div>
        {/* Diğer projeler de aynı şekilde */}
      </div>
    </div>
  );
}

export default Projects;
