'use client';

import { useState, useRef } from 'react';
import BootSequence from './components/bootSequence';
import Navbar from './components/navBar';
import ThrusterIndicator from './components/thrusterIndicator';
import HeroSection from './components/sections/heroSection';
import ExperienceSection from './components/sections/experienceSection';
import ProjectsSection from './components/sections/projectSection';
import SkillsSection from './components/sections/skillSection';
import ContactSection from './components/sections/contactSection';
import { Rocket, Briefcase, Code, Zap, Mail, ChevronDown } from 'lucide-react';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  if (!bootComplete) {
    return <BootSequence onComplete={() => setBootComplete(true)} />;
  }

  const navItems = [
    { label: 'Home', icon: <Rocket className="w-4 h-4" /> },
    { label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { label: 'Skills', icon: <Zap className="w-4 h-4" /> },
    { label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="relative text-white font-mono selection:bg-emerald-500/30 selection:text-emerald-300 antialiased overflow-x-hidden">
      <Navbar 
        navItems={navItems} 
        scrollToSection={scrollToSection}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

      <ThrusterIndicator />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-bounce hidden md:block pointer-events-none">
        <ChevronDown className="w-6 h-6 text-white/20" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <HeroSection 
          setRef={(el) => (sectionsRef.current[0] = el)} 
          onNavigate={() => scrollToSection(2)}
          onContactNavigate={() => scrollToSection(4)}
        />
        <ExperienceSection setRef={(el) => (sectionsRef.current[1] = el)} />
        <ProjectsSection setRef={(el) => (sectionsRef.current[2] = el)} />
        <SkillsSection setRef={(el) => (sectionsRef.current[3] = el)} />
        <ContactSection setRef={(el) => (sectionsRef.current[4] = el)} />
      </div>
    </div>
  );
}