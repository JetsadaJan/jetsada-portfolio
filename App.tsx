

import React, { useEffect, useRef, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import NotableWork from './components/NotableWork';
import Education from './components/Education';
import Projects from './components/Projects';
import Goals from './components/Goals';
import Footer from './components/Footer';
import Section from './components/Section';

const App: React.FC = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [dynamicStyles, setDynamicStyles] = useState<Record<string, React.CSSProperties>>({});

  useEffect(() => {
    const initialAnimationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.querySelectorAll('.animate-card').forEach(card => {
              card.classList.add('is-visible');
            });
            initialAnimationObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) initialAnimationObserver.observe(ref);
    });

    const handleDynamicScroll = () => {
      const vh = window.innerHeight;
      if (vh === 0) return; 

      const focusBandTop = vh * 0.1; // Top edge of the focus band
      const focusBandBottom = vh * 0.9; // Bottom edge of the focus band
      const maxInfluenceDistance = vh * 0.15; // Distance over which the effect applies outside the focus band

      if (maxInfluenceDistance === 0) return; // Avoid division by zero

      const minOpacity = 0.1;
      const minScale = 0.75;

      const opacityMultiplier = 1 - minOpacity;
      const scaleMultiplier = 1 - minScale;

      const newDynamicStyles: Record<string, React.CSSProperties> = {};

      sectionRefs.current.forEach(sectionEl => {
        if (!sectionEl) return;

        const rect = sectionEl.getBoundingClientRect();
        let currentOpacity = 1;
        let currentScale = 1;
        
        const overlapsFocusBand = rect.top < focusBandBottom && rect.bottom > focusBandTop;

        if (overlapsFocusBand) {
          currentOpacity = 1;
          currentScale = 1;
        } else {
          let distanceToFocusBand = 0;
          if (rect.bottom <= focusBandTop) {
            distanceToFocusBand = focusBandTop - rect.bottom;
          } else if (rect.top >= focusBandBottom) {
            distanceToFocusBand = rect.top - focusBandBottom;
          }

          const normalizedDistance = Math.min(1, distanceToFocusBand / maxInfluenceDistance); 
          
          currentOpacity = 1 - normalizedDistance * opacityMultiplier;
          currentScale = 1 - normalizedDistance * scaleMultiplier;
        }

        newDynamicStyles[sectionEl.id] = {
          opacity: currentOpacity,
          transform: `scale(${currentScale})`,
        };
      });
      setDynamicStyles(newDynamicStyles);
    };
    
    window.addEventListener('scroll', handleDynamicScroll, { passive: true });
    handleDynamicScroll(); // Initial call

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) initialAnimationObserver.unobserve(ref);
      });
      window.removeEventListener('scroll', handleDynamicScroll);
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Section id="about" titleKey="nav_about" ref={addToRefs} className="animate-on-scroll" backgroundIconType="user-scan" style={dynamicStyles['about']}>
            <About />
          </Section>
          <Section id="education" titleKey="nav_education" ref={addToRefs} className="animate-on-scroll" style={dynamicStyles['education']}>
            <Education />
          </Section>
          <Section id="skills" titleKey="nav_skills" ref={addToRefs} className="animate-on-scroll" backgroundIconType="brain-lightbulb" style={dynamicStyles['skills']}>
            <Skills />
          </Section>
          <Section id="experience" titleKey="nav_experience" ref={addToRefs} className="animate-on-scroll" style={dynamicStyles['experience']}>
            <Experience />
          </Section>
          <Section id="notable-work" titleKey="nav_notable_work" ref={addToRefs} className="animate-on-scroll pb-4 md:pb-6" style={dynamicStyles['notable-work']}>
            <NotableWork />
          </Section>
          <Section id="projects" titleKey="nav_projects" ref={addToRefs} className="animate-on-scroll pt-4 md:pt-6" style={dynamicStyles['projects']}>
            <Projects />
          </Section>
          <Section id="goals" titleKey="nav_goals" ref={addToRefs} className="animate-on-scroll" style={dynamicStyles['goals']}>
            <Goals />
          </Section>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
