'use client';

import { Code, ExternalLink, } from 'lucide-react';
import Image from 'next/image';

interface ProjectsProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// -------------------------------------------------------------
// DATA DECLARATION DECLARATIONS (Edit showcase array objects cleanly here)
const DATA_PROJECTS = [
  {
    title: "PaziaTech",
    description: "Multi-tenant SaaS e-commerce platform enabling businesses to manage online stores, inventory, orders, and digital payments.",
    tags: ["React", "Next.js", "TypeScript", "MYSQL", "Supabase", "Tailwind CSS"],
    image: "/projects/pazia.jpg",
    liveLink: "https://paziatech.co.ke",
    repoLink: "https://github.com/Munene001/New-Ecommerce",
    isPrivate: false
  },
  
  {
    title: "Tunga Africa",
    description: "Platform integrating African films into education as meaningful learning resources. Supporting critical thinking, cultural understanding, and dialogue across schools and tertiary institutions.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: "/projects/tunga.jpg",
    liveLink: "https://app.dev.tunga.africa",
    repoLink: "Private Repository",
    isPrivate: true
  },

  {
    title: "EasyWays Credit",
    description: "CBK-licensed digital lending platform offering personal loans with M-Pesa integration, flexible repayment terms, and CRB credit-score-based pricing.",
    tags: ["Laravel", "Svelte", "MySQL"],
    image: "/projects/easyway.jpg",
    liveLink: "https://easywayscredit.co.ke",
    repoLink: "https://github.com/Munene001/Easyway",
    isPrivate: false
  },

  {
    title: "FBI Kenya",
    description: "Civic engagement platform documenting human rights violations, supporting whistleblower officers, and mobilizing citizens for police reform and accountability.",
    tags: ["Laravel", "Nuxt.js", "MySQL"],
    image: "/projects/fbi.jpg",
    liveLink: "https://fbikenya.org",
    repoLink: "https://github.com/Munene001/FBI",
    isPrivate: false
  },

  {
    title: "Soulspring Mental Health",
    description: "Cross-platform mobile app connecting clients with therapists. Features secure authentication, therapist discovery, appointment booking, and email-based communication.",
    tags: ["Flutter", "Node.js", "Firebase", "Cloud Firestore", "Provider"],
    image: "/projects/soulspring.jpeg",
    liveLink: "https://github.com/Munene001/Soulspring1",
    repoLink: "https://github.com/Munene001/Soulspring1",
    isPrivate: false
  },

  {
    title: "Yobra Store (PaziaTech Demo)",
    description: "Demo online storefront built on the PaziaTech e-commerce platform showcasing the customer-facing experience.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/projects/yobra.jpg",
    liveLink: "https://yobra.paziatech.co.ke",
    repoLink: "https://github.com/Munene001/New-Ecommerce",
    isPrivate: false
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
                
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-6 flex-1 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-sans font-bold text-white/80 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
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
                    href={project.isPrivate ? "#" : project.repoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ml-auto ${
                      project.isPrivate 
                        ? 'text-white/20 cursor-not-allowed' 
                        : 'text-white/70 hover:text-white/80'
                    }`}
                    onClick={(e) => {
                      if (project.isPrivate) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span>{project.isPrivate ? 'Private Repo' : 'Source'}</span>
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