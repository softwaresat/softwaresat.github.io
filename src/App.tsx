import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-5%] h-72 w-72 rounded-full bg-sky-500/12 blur-3xl" />
        <div className="absolute right-[-10%] top-[15%] h-80 w-80 rounded-full bg-violet-500/12 blur-3xl" />
        <div className="absolute bottom-[-8%] left-[30%] h-96 w-96 rounded-full bg-orange-400/10 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Services />
        <Skills />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
