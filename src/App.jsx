import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Profile from './components/Profile.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import { LangProvider } from './context/LangContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {

  return (
    <LangProvider>
            <ThemeProvider>
                <div className="App font-inter text-inherit	">
                  <Header/>
                  <Hero/>
                  <Skills/>
                  <Profile/>
                  <Projects/>
                  <Footer/>
                </div>
            </ThemeProvider>
        </LangProvider>
  )
}

export default App