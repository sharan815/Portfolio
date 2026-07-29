import ...
import { ParticleCanvas } from './components/background/ParticleCanvas';
import { MouseSpotlight } from './components/background/MouseSpotlight';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Performance } from './components/sections/Performance';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { CloudDevOps } from './components/sections/CloudDevOps';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Sharan_B_Resume.pdf');
    alert('Sharan B Resume requested. PDF document prepared.');
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#E50914] selection:text-white overflow-x-hidden">
      {/* Background Cyber Particle System & Mouse Glow Spotlight */}
      <ParticleCanvas />
      <MouseSpotlight />

      {/* Fixed Navbar */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Section Trajectory */}
      <main className="relative z-10">
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onDownloadResume={handleDownloadResume}
        />
        <About />
        <Expertise />
        <Performance />
        <TechStack />
        <Projects />
        <CloudDevOps />
        <Certifications />
        <Contact />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}

export default App;
