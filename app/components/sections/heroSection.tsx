'use client';

import { 
  Rocket, 
  Mail, 
  ChevronRight, 
  Terminal, 
  Code2, 
  PhoneCall
} from 'lucide-react';

interface HeroProps {
  setRef?: (el: HTMLDivElement | null) => void;
  onNavigate?: () => void;
  onContactNavigate?: () => void; // New prop for contact navigation
}

// Custom inline SVG icons for social platforms
const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const HERO_DATA = {
  badge: 'FULL-STACK ENGINEER & SAAS ARCHITECT',
  title: 'Lawrence Munene',
  subTitle:
    "I make computers do useful things. Sometimes they even cooperate. The other times, we negotiate through error messages and coffee.",
  techStack: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Supabase',
    'Laravel',
    'SpringBoot',
    'MySQL',
    'Git',
    'Linux',
  ],
  meta: [
    { text: 'lawrencemunenex@gmail.com', icon: Mail },
    { text: '0715067768', icon: PhoneCall },
  ],
  socials: [
    { icon: <GithubIcon />, href: 'https://github.com/Munene001', label: 'GitHub' },
    { icon: <TwitterIcon />, href: 'https://x.com', label: 'X (Twitter)' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:lawrencemunenex@gmail.com', label: 'Email' },
  ],
};

export default function HeroSection({ setRef, onNavigate, onContactNavigate }: HeroProps) {
  return (
    <section
      ref={setRef}
      className="relative min-h-[90vh] w-full flex items-center justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-16 overflow-hidden bg-transparent text-white"
    >
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-cyan-500/30 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
              {HERO_DATA.badge}
            </span>
          </div>
        </div>

        {/* Name Heading */}
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none animate-fade-in-up animate-delay-1">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-emerald-300 bg-clip-text text-transparent">
            {HERO_DATA.title}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-200 font-normal leading-relaxed text-balance animate-fade-in-up animate-delay-2">
          {HERO_DATA.subTitle}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-in-up animate-delay-3">
          <button
            onClick={onNavigate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all active:scale-[0.98]"
          >
            <Rocket className="w-4 h-4 fill-current" />
            <span>Launch Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onContactNavigate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-md text-slate-200 font-semibold text-sm hover:bg-slate-800/80 hover:border-cyan-500/40 hover:text-white transition-all"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Initiate Contact</span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-10 w-full max-w-2xl animate-fade-in-up animate-delay-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md">
            <div className="flex items-center justify-center gap-2 mb-2.5 text-xs font-mono text-cyan-400/80 uppercase tracking-widest">
              <Code2 className="w-3.5 h-3.5" />
              <span>Core Propulsion Stack</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {HERO_DATA.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-950/70 border border-slate-800 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Meta & Socials */}
        <div className="mt-12 pt-6 w-full border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-mono animate-fade-in-up animate-delay-5">
          {/* Location & Email Info */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {HERO_DATA.meta.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {HERO_DATA.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}