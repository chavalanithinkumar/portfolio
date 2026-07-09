import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    if (typeof IntersectionObserver === 'undefined') {
      if (sections.length > 0) {
        setActiveSection(sections[0].id);
      }
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleNavigate(sectionName) {
    const target = document.getElementById(sectionName);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="app-shell">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="page-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
