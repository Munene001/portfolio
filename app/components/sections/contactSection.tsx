'use client';

import { Mail, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

interface SectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// Instagram SVG Icon
const InstagramIcon = ({ className }: { className?: string }) => (
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
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// GitHub SVG Icon
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

const CONTACT_DATA = {
  title: "Establish Comms",
  subtitle: "Open Channel",
  description: "Got a project in mind? Let's talk. Whether it's a full-scale build, a quick fix, or just exploring ideas — I'm ready when you are.",
  email: "lawrencemunenex@gmail.com",
  phone: "+254715067768",
  whatsapp: "https://wa.me/254715067768",
  instagram: "https://instagram.com/paziatech",
  github: "https://github.com/Munene001",
};

export default function ContactSection({ setRef }: SectionProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full relative"
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest uppercase">Establish Comms</h2>
        <p className="text-xs text-emerald-400 tracking-widest uppercase font-bold">Open Channel</p>
        <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4 mb-10" />
        
        <p className="text-white/80 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed font-sans">
          {CONTACT_DATA.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {/* Email */}
          <a 
            href={`mailto:${CONTACT_DATA.email}`}
            className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 active:scale-95"
          >
            <Mail className="w-4 h-4" /> 
            <span>{CONTACT_DATA.email}</span>
          </a>

          {/* Phone */}
          <a 
            href={`tel:${CONTACT_DATA.phone}`}
            className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4" /> 
            <span>{CONTACT_DATA.phone}</span>
          </a>

          {/* WhatsApp */}
          <a 
            href={CONTACT_DATA.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" /> 
            <span>WhatsApp</span>
          </a>

          {/* Instagram */}
          <a 
            href={CONTACT_DATA.instagram}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-pink-500/10 border border-pink-500/30 rounded-xl text-pink-400 hover:bg-pink-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 active:scale-95"
          >
            <InstagramIcon className="w-4 h-4" /> 
            <span>Instagram</span>
          </a>

          {/* GitHub */}
          <a 
            href={CONTACT_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 active:scale-95"
          >
            <GithubIcon className="w-4 h-4" /> 
            <span>GitHub</span>
          </a>
        </div>

        <div className="mt-16 text-[9px] text-white/40 flex items-center justify-center gap-1.5 uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/30" />
          <span>End-to-End Encryption Layer Active</span>
        </div>
      </div>
    </div>
  );
}