import React from 'react';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Code, 
  Lightbulb, 
  MapPin, 
  GraduationCap, 
  Terminal,
  Cpu,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning",
      description: "Building predictive models, natural language processing applications, and intelligent systems that transform raw data into actionable insights.",
      accent: "green"
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity & Defense",
      description: "Exploring defense strategies, proactive threat mitigation, phishing awareness mechanisms, and principles of secure architecture.",
      accent: "purple"
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Developing robust, maintainable code using Python, C++, and modern web tools with clean modular component structures.",
      accent: "cyan"
    },
    {
      icon: Lightbulb,
      title: "Practical Problem Solving",
      description: "Translating theoretical engineering concepts into real-world applications that solve genuine environmental and security challenges.",
      accent: "green"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#080B12]">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 cyber-radial-purple blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-96 h-96 cyber-radial-green blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-item">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9D]">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Intelligence & Safeguarding Code
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00FF9D] to-[#A855F7] mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Bio & Personal Summary Card */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-card p-8 rounded-2xl border border-white/10 reveal-item">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#00FF9D]/20 to-[#A855F7]/20 border border-white/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[#00FF9D]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {personalData.name}
                    </h3>
                    <p className="text-xs font-mono text-[#A855F7]">{personalData.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#00FF9D]" />
                  <span>{personalData.location}</span>
                </div>
              </div>

              {/* Bio paragraphs with improved typography and contrast */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.bio.map((paragraph, index) => (
                  <p key={index} className="font-light">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <p className="text-xs font-mono text-slate-400">Core Domain</p>
                <p className="text-sm font-semibold text-white mt-1">AI & Machine Learning</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                <p className="text-xs font-mono text-slate-400">Security Focus</p>
                <p className="text-sm font-semibold text-[#00FF9D] mt-1">Threat Analysis & Defense</p>
              </div>
            </div>
          </div>

          {/* Right: 4 Core Focus Areas Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isPurple = pillar.accent === 'purple';
              const isCyan = pillar.accent === 'cyan';

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl glass-card flex flex-col justify-between group transition-all duration-300 reveal-item ${
                    isPurple ? 'hover:border-[#A855F7]/40' : isCyan ? 'hover:border-cyan-400/40' : 'hover:border-[#00FF9D]/40'
                  }`}
                >
                  <div className="space-y-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${
                        isPurple
                          ? 'bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30'
                          : isCyan
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-400/30'
                          : 'bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-slate-100 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#00FF9D] transition-colors" />
                    <span>Specialized Track</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
