'use client';

import { Mail, ShieldCheck } from 'lucide-react';

interface SectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// -------------------------------------------------------------
// DATA DECLARATION DECLARATIONS (Edit communication details here)
// -------------------------------------------------------------
const CONTACT_DATA = {
  title: "Establish Comms",
  subtitle: "Secure Dynamic Transmission Array",
  description: "Ready to launch custom developments or optimize complex server frameworks? Initialize a sub-space route channel below. Transmissions remain logged securely.",
  actionText: "Transmit Signal",
  emailText: "Direct Sub-Mail",
  targetEmail: "mailto:commander@nexus-x.io"
};

export default function ContactSection({ setRef }: SectionProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full relative"
    >
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest uppercase">{CONTACT_DATA.title}</h2>
        <p className="text-xs text-emerald-400 tracking-widest uppercase font-bold">{CONTACT_DATA.subtitle}</p>
        <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4 mb-10" />
        
        <p className="text-white/50 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed font-sans">
          {CONTACT_DATA.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition-all duration-300 text-xs font-bold tracking-widest uppercase active:scale-95 shadow-md">
            {CONTACT_DATA.actionText}
          </button>
          
          <a 
            href={CONTACT_DATA.targetEmail} 
            className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 text-xs font-bold tracking-widest uppercase flex items-center gap-2 active:scale-95"
          >
            <Mail className="w-4 h-4" /> 
            <span>{CONTACT_DATA.emailText}</span>
          </a>
        </div>

        <div className="mt-16 text-[9px] text-white/20 flex items-center justify-center gap-1.5 uppercase tracking-widest">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500/30" />
          <span>End-to-End Encryption Layer Active</span>
        </div>
      </div>
    </div>
  );
}