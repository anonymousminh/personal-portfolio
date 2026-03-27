import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import { GameProvider } from './context/GameContext';
import GameHUD from './components/GameHUD';
import TerminalModal from './components/TerminalModal';

function App() {
  return (
    <GameProvider>
      <main className="bg-tiwis-black min-h-screen text-tiwis-offwhite selection:bg-tiwis-red selection:text-white relative font-body cursor-crosshair pb-20">
        <GameHUD />
        <TerminalModal />
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Footer />
      </main>
    </GameProvider>
  );
}

export default App;
