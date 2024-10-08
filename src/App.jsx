import './App.css'
import Header from './components/Header.jsx'
import { LangProvider } from './context/LangContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {

  return (
    <LangProvider>
            <ThemeProvider>
                <div className="App">
                  <Header/>
                </div>
            </ThemeProvider>
        </LangProvider>
  )
}

export default App