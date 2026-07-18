'use client';

import { MapPin, Award, Mail } from 'lucide-react';

interface HeroProps {
  setRef: (el: HTMLDivElement | null) => void;
  onNavigate: () => void;
}

// -------------------------------------------------------------
// DATA DECLARATION DECLARATIONS (Edit text parameters securely here)
// -------------------------------------------------------------
const HERO_DATA = {
  badgeText: "SYSTEM ONLINE // PILOT ACTIVE",
  titleText: "Commander Ready",
  subTitleText: "Full-stack developer & space enthusiast. Building stable digital platforms across the technological cosmos, one stellar node at a time.",
  primaryBtn: "Launch Blueprints",
  metaLocations: [
    { info: "Earth Orbit // Remote Location", icon: <MapPin className="w-4 h-4" /> },
    { info: "Class-A Certified Engineer", icon: <Award className="w-4 h-4" /> },
    { info: "comms@nexus.io", icon: <Mail className="w-4 h-4" /> }
  ]
};

export default function HeroSection({ setRef, onNavigate }: HeroProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full text-center relative"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-block px-4 py-1.5 border border-emerald-500/20 rounded-full bg-emerald-500/5 text-emerald-400 text-[10px] tracking-widest uppercase font-bold mb-8">
          {HERO_DATA.badgeText}
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 tracking-tight uppercase">
          {HERO_DATA.titleText}
        </h1>
        
        <p className="text-white/60 text-sm sm:text-lg max-w-2xl leading-relaxed mb-10 font-sans">
          {HERO_DATA.subTitleText}
        </p>
        
        <button 
          onClick={onNavigate} 
          className="px-8 py-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase active:scale-95 shadow-lg shadow-emerald-500/5"
        >
          {HERO_DATA.primaryBtn}
        </button>

        <div className="flex flex-wrap justify-center gap-6 mt-16 border-t border-white/5 pt-8 w-full max-w-xl">
          {HERO_DATA.metaLocations.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-white/40 text-xs hover:text-white/70 transition-colors duration-300">
              {item.icon}
              <span>{item.info}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}