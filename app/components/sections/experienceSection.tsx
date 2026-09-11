'use client';

interface ExperienceProps {
  setRef: (el: HTMLDivElement | null) => void;
}
const MISSION_LOGS = [
  {
    role: "Fullstack Engineer",
    company: "PaziaTech",
    period: "Feb 2026 – Present",
    description:
      "Founded and built a multi-tenant SaaS e-commerce platform from the ground up. Designed scalable backend services, developed modern web applications, implemented authentication and RBAC, and continuously improved performance and user experience.",

    tags: [
      "Next js",
      "TypeScript",
      "SQL",
      "Supabase",
      "Git",
      "Docker",
      "Linux"
    ],
  },

  {
    role: "Frontend Engineer",
    company: "Tunga Africa",
    period: "Aug 2025 – Feb 2026",
     description:
    "Developed responsive and accessible frontend features for an educational platform that helps integrate African films into schools and tertiary institutions. Collaborated with designers and backend engineers to build engaging user experiences, integrate REST APIs, and improve performance across the platform.",

    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
  },

  {
    role: "Consultant Software Engineer",
    company: "Hpaysa",
    period: "Jul 2024 – Jul 2025",
    description:
      "Collaborated directly with clients to understand requirements and deliver software solutions across fintech, civic engagement, and real estate. Developed backend services, built REST APIs, optimized databases, and supported deployment and maintenance throughout the SDLC.",
    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "Svelte",
      "Vue.js",
      "Git",
    ],
  },

  {
    role: "Software Engineering Intern",
    company: "Sapama Technologies",
    period: "May 2023 – Sep 2023",
    description:
      "Contributed to application development by building features, integrating APIs, optimizing database queries, resolving defects, and collaborating with senior engineers in an Agile environment.",

    tags: [
      "Laravel",
      "PHP",
      "MySQL",
      "Git",
      "REST APIs",
    ],
  },
];

export default function ExperienceSection({ setRef }: ExperienceProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest uppercase">Mission Log</h2>
          <p className="text-xs text-emerald-400 tracking-widest uppercase font-bold">Career Timeline & Milestones</p>
          <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4" />
        </div>

        <div className="relative border-l border-white/10 ml-2 sm:ml-6 md:ml-32 space-y-10">
          {MISSION_LOGS.map((exp, i) => (
            <div key={i} className="relative pl-6 sm:pl-8 group">
              
              {/* Orb node indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a12] border border-white/20 group-hover:border-emerald-400 group-hover:bg-emerald-400/20 transition-all duration-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-emerald-400 transition-colors" />
              </div>

              {/* Responsive date labels */}
              <div className="md:absolute md:-left-36 md:top-1.5 text-xs text-white/70 font-bold tracking-widest uppercase group-hover:text-emerald-400/60 transition-colors mb-2 md:mb-0 block">
                {exp.period}
              </div>

              {/* Experience layout modules */}
              <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 shadow-xl">
                <h3 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors duration-300">{exp.role}</h3>
                <span className="text-emerald-400 text-xs tracking-wider font-semibold block mb-3">{exp.company}</span>
                <p className="text-white/90 text-sm leading-relaxed mb-5 font-sans">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 border border-white/5 rounded bg-white/5 text-[9px] tracking-widest text-white/70 uppercase font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}