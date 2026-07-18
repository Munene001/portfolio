'use client';

import { Code, ExternalLink, } from 'lucide-react';
import Image from 'next/image';

interface ProjectsProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// -------------------------------------------------------------
// DATA DECLARATION DECLARATIONS (Edit showcase array objects cleanly here)
// -------------------------------------------------------------
const DATA_PROJECTS = [
  {
    title: "Project Alpha Horizon",
    description: "A secure, visual control dashboard interface built to display incoming system array statuses and flight configurations cleanly.",
    tags: ["React Framework", "TailwindCSS", "Framer Motion"],
    image: "", // Leave blank to trigger fallback icon securely
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Quantum Core Pipeline",
    description: "Secure multi-threaded backend communication nodes optimized for cryptographic encryption arrays across network channels.",
    tags: ["Next.js", "TypeScript Core", "Prisma Client"],
    image: "", 
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  }
];

export default function ProjectsSection({ setRef }: ProjectsProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest uppercase">Blueprints</h2>
          <p className="text-xs text-emerald-400 tracking-widest uppercase font-bold">Systems & Deployments</p>
          <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {DATA_PROJECTS.map((project, i) => (
            <div key={i} className="group bg-white/[0.01] backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col h-full shadow-2xl">
              
              <div className="h-44 relative w-full bg-gradient-to-br from-emerald-500/5 via-neutral-900 to-purple-500/10 flex items-center justify-center overflow-hidden border-b border-white/5">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Code className="w-10 h-10 text-white/10 group-hover:text-emerald-400/30 group-hover:scale-110 transition-all duration-500" />
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6 flex-1 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-sans font-bold text-white/50 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 text-[10px] hover:text-emerald-300 transition-colors font-bold tracking-widest uppercase"
                  >
                    <span>Launch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-white/30 text-[10px] hover:text-white/70 transition-colors font-bold tracking-widest uppercase ml-auto"
                  >
                    
                    <span>Source</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}