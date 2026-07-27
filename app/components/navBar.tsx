'use client';

import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  navItems: NavItem[];
  scrollToSection: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const NAV_CONFIG = {
  logoText: "NEXUS-X",
  hullBackground: "bg-black/40 backdrop-blur-md md:bg-[#0a0a12]/60",
  mobileHullBackground: "bg-[#0a0a12]/95 backdrop-blur-lg"
};

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Navbar({ 
  navItems, 
  scrollToSection, 
  isOpen, 
  setIsOpen 
}: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${NAV_CONFIG.hullBackground} border-b border-white/5 transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => scrollToSection(0)}>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-emerald-400 font-mono">
            {NAV_CONFIG.logoText}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1 lg:gap-4">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(index)}
              className="text-[10px] lg:text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg font-bold border border-transparent text-white/70 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5"
            >
              <span className="text-white/60 group-hover:text-emerald-400">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
          
          <a 
            href="https://github.com/Munene001" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] lg:text-xs tracking-widest uppercase font-bold text-white/70 hover:text-emerald-400 transition-colors px-3 py-2 hover:bg-emerald-500/5 rounded-lg border border-transparent hover:border-emerald-500/20"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-white/50 hover:text-emerald-400 active:scale-95 transition-all"
          aria-label="Toggle Navigation Control Terminal"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${NAV_CONFIG.mobileHullBackground} border-b border-white/5 py-4 px-4 space-y-1.5 shadow-2xl`}>
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(index)}
              className="w-full text-left text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-4 p-3 rounded-xl font-bold border border-transparent text-white/70 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5"
            >
              <span className="text-white/60 group-hover:text-emerald-400">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
          
          <a 
            href="https://github.com/Munene001" 
            target="_blank" 
            rel="noreferrer"
            className="w-full flex items-center gap-4 p-3 rounded-xl text-white/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200 border border-transparent hover:border-emerald-500/20"
          >
            <GithubIcon className="w-4 h-4 text-white/40" />
            <span className="text-xs tracking-widest uppercase font-bold">GitHub</span>
          </a>
        </div>
      )}
    </nav>
  );
}