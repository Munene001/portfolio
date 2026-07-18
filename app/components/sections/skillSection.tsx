'use client';

interface SectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// -------------------------------------------------------------
// DATA DECLARATION DECLARATIONS (Edit tech stack metrics arrays here)
// -------------------------------------------------------------
const TECH_MODULES = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'Python', 'Docker Ops', 'AWS Core', 'TailwindCSS'
];

export default function SkillsSection({ setRef }: SectionProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest uppercase">Tech Matrix</h2>
          <p className="text-xs text-emerald-400 tracking-widest uppercase font-bold">Loaded Modules & Architecture</p>
          <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {TECH_MODULES.map((skill) => (
            <div 
              key={skill} 
              className="bg-white/[0.01] backdrop-blur-md rounded-xl p-5 text-center border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.03] transition-all duration-300 group shadow-lg"
            >
              <div className="text-emerald-500 text-[9px] tracking-widest mb-1 font-black group-hover:scale-95 transition-transform">MODULE</div>
              <div className="text-white/80 text-sm font-bold tracking-wide font-sans">{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}