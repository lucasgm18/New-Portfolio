import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-canvas text-primary flex flex-col font-sans selection:bg-accent selection:text-white">
        <Header />
        <main className="flex-grow">
          <Hero />
          <SelectedWork />
          <TechStack />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
