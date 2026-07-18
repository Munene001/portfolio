'use client';

import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  navItems: NavItem[];
  activeSection: number;
  scrollToSection: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// -------------------------------------------------------------
// NAVIGATION STYLING CONFIGURATION (Change cosmetic tokens here)
// -------------------------------------------------------------
const NAV_CONFIG = {
  logoText: "NEXUS-X",
  hullBackground: "bg-black/40 backdrop-blur-md md:bg-[#0a0a12]/60",
  mobileHullBackground: "bg-[#0a0a12]/95 backdrop-blur-lg"
};

export default function Navbar({ 
  navItems, 
  activeSection, 
  scrollToSection, 
  isOpen, 
  setIsOpen 
}: NavbarProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${NAV_CONFIG.hullBackground} border-b border-white/5 transition-all duration-300`}>
      {/* Container with responsive padding offsets */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Core System Identity */}
        <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => scrollToSection(0)}>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-emerald-400 font-mono">
            {NAV_CONFIG.logoText}
          </span>
        </div>

        {/* Desktop Navigation Control Array */}
        <div className="hidden md:flex items-center gap-1 lg:gap-4">
          {navItems.map((item, index) => {
            const isActive = activeSection === index;
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(index)}
                className={`text-[10px] lg:text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2 px-3 py-2 rounded-lg font-bold border ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/20 shadow-sm' 
                    : 'text-white/40 border-transparent hover:text-white/80 hover:bg-white/5'
                }`}
              >
                <span className={isActive ? 'text-emerald-400' : 'text-white/30'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Deck Commander Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 text-white/50 hover:text-white active:scale-95 transition-all"
          aria-label="Toggle Navigation Control Terminal"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Modular Grid Dropdown Panel */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${NAV_CONFIG.mobileHullBackground} border-b border-white/5 py-4 px-4 space-y-1.5 shadow-2xl`}>
          {navItems.map((item, index) => {
            const isActive = activeSection === index;
            return (
              <button
                key={item.label}
                onClick={() => scrollToSection(index)}
                className={`w-full text-left text-xs tracking-widest uppercase transition-all duration-200 flex items-center gap-4 p-3 rounded-xl font-bold border ${
                  isActive 
                    ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/20' 
                    : 'text-white/50 border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={isActive ? 'text-emerald-400' : 'text-white/40'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}