'use client';

interface SectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// -------------------------------------------------------------
// HIGH-IMPACT TECH STACK DATA (Fluff Removed)
// -------------------------------------------------------------
const TECH_GROUPS = [
  {
    category: "Languages",
    badge: "Runtime & Syntax",
    skills: ["PHP 8+", "TypeScript", "JavaScript (ES6+)", "SQL"]
  },
  {
    category: "Backend & Systems",
    badge: "Server & API",
    skills: ["Laravel", "Node.js", "RESTful APIs", "M-Pesa Integration"]
  },
  {
    category: "Frontend Stack",
    badge: "UI & Frameworks",
    skills: ["Next.js", "React.js", "Tailwind CSS", "Vue.js"]
  },
  {
    category: "Databases & Storage",
    badge: "Persistence Layer",
    skills: ["MySQL", "PostgreSQL", "Supabase", "Firebase"]
  },
  {
    category: "DevOps & Tooling",
    badge: "Infra & CI/CD",
    skills: ["Docker", "GitHub Actions", "Linux", "AWS (Basic)"]
  },
  {
    category: "Testing & Quality",
    badge: "Reliability",
    skills: ["PHPUnit", "Query Optimization", 'Jest']
  }
];

export default function SkillsSection({ setRef }: SectionProps) {
  return (
    <section 
      ref={setRef} 
      className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 border-b border-white/10 pb-6 sm:pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1 sm:mb-2">
               Capability Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Tech Stack & Expertise
            </h2>
          </div>
          <p className="text-xs text-white/70 max-w-sm font-mono leading-relaxed">
            Production-ready backend systems, responsive web apps, payment integrations, and data architecture.
          </p>
        </div>

        {/* Responsive Grid: 1 Col (Mobile) -> 2 Col (Tablet) -> 3 Col (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-10 lg:gap-y-12 gap-x-8 lg:gap-x-12">
          {TECH_GROUPS.map((group, idx) => (
            <div key={idx} className="group flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-white/10 group-hover:border-emerald-500/40 transition-colors duration-300">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-mono text-white/70 uppercase tracking-wider">
                    {group.badge}
                  </span>
                </div>

                {/* Skill List */}
                <ul className="space-y-2 sm:space-y-2.5">
                  {group.skills.map((skill) => (
                    <li 
                      key={skill}
                      className="text-xs sm:text-sm text-zinc-300 font-sans flex items-center gap-2.5 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover/item:bg-emerald-400 group-hover/item:scale-125 transition-all" />
                      <span className="group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}