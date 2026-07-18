'use client';

interface SectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

// -------------------------------------------------------------
// DATA DECLARATION DECLARATIONS (Edit core overview parameters here)
// -------------------------------------------------------------
const ABOUT_DATA = {
  title: "Overview",
  tagline: "Core Telemetry Readout",
  directiveTitle: "Core Directive",
  directiveBody: "To construct scalable web infrastructure that merges perfect backend compliance with clean, fluid interface layout execution. Driven by automation, edge scalability, and robust diagnostic design methodologies.",
  metricsTitle: "Status Dashboard",
  metricsList: [
    { name: "System Integration Ops", span: "5+ Years", level: "w-[85%]", color: "from-emerald-400 to-blue-400" },
    { name: "Completed Deployments", span: "25+ Nodes", level: "w-[75%]", color: "from-blue-400 to-purple-500" }
  ]
};

export default function AboutSection({ setRef }: SectionProps) {
  return (
    <div 
      ref={setRef} 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full relative"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest uppercase">{ABOUT_DATA.title}</h2>
          <p className="text-xs text-emerald-400 tracking-widest uppercase font-bold">{ABOUT_DATA.tagline}</p>
          <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-emerald-400 text-[10px] tracking-widest mb-4 uppercase font-black">{ABOUT_DATA.directiveTitle}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                {ABOUT_DATA.directiveBody}
              </p>
            </div>
            <div className="mt-6 text-[9px] text-white/20 uppercase tracking-tighter">Diagnostic Matrix Ok // Verified</div>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-center">
            <h3 className="text-emerald-400 text-[10px] tracking-widest mb-6 uppercase font-black">{ABOUT_DATA.metricsTitle}</h3>
            
            <div className="space-y-6">
              {ABOUT_DATA.metricsList.map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs text-white/50 mb-2">
                    <span className="font-sans">{metric.name}</span>
                    <span className="font-bold font-mono text-emerald-400">{metric.span}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                    <div className={`h-full bg-gradient-to-r ${metric.color} rounded-full ${metric.level}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}