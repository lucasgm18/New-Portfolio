import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { TechStack } from './components/TechStack';
import { SelectedWork } from './components/SelectedWork';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-canvas text-primary flex flex-col font-sans selection:bg-accent selection:text-white">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Education />
          <TechStack />
          <SelectedWork />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
