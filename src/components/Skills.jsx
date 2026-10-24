import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  ShieldAlert, 
  Terminal, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Dynamic icon mapper
const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  ShieldAlert: ShieldAlert,
  Terminal: Terminal
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080B12]/95">
      
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 cyber-radial-green blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 cyber-radial-purple blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-item">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9D]">
            <Terminal className="w-3.5 h-3.5" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools, Technologies & Security Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Categorized skill domains refined through engineering coursework, algorithmic problem solving, and hands-on projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00FF9D] to-[#A855F7] mx-auto rounded-full" />
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            const isCyber = category.category.toLowerCase().includes('cyber');
            const isAI = category.category.toLowerCase().includes('ai');
            const isTools = category.category.toLowerCase().includes('tools');

            // Unique accent style per card
            const accentColor = isCyber
              ? 'text-[#00FF9D] border-[#00FF9D]/30 bg-[#00FF9D]/10'
              : isAI
              ? 'text-[#A855F7] border-[#A855F7]/30 bg-[#A855F7]/10'
              : isTools
              ? 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10'
              : 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10';

            const hoverGlow = isCyber
              ? 'hover:border-[#00FF9D]/40 hover:shadow-glow-green'
              : isAI
              ? 'hover:border-[#A855F7]/40 hover:shadow-glow-purple'
              : 'hover:border-cyan-400/40 hover:shadow-lg';

            return (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10 transition-all duration-300 group ${hoverGlow} reveal-item`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${accentColor} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded bg-black/40 border border-white/5">
                      DOMAIN-0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                    {category.category}
                  </h3>

                  <p className="text-xs text-slate-400 mb-6 font-light leading-relaxed min-h-[38px]">
                    {category.description}
                  </p>

                  {/* Skills Tag Pills with Enhanced Hover Effects */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      const isHovered = hoveredSkill === skill;
                      return (
                        <div
                          key={sIdx}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default select-none ${
                            isHovered
                              ? isCyber
                                ? 'bg-[#00FF9D]/20 text-[#00FF9D] border border-[#00FF9D] shadow-[0_0_12px_rgba(0,255,157,0.3)] transform -translate-y-0.5'
                                : isAI
                                ? 'bg-[#A855F7]/20 text-[#A855F7] border border-[#A855F7] shadow-[0_0_12px_rgba(168,85,247,0.3)] transform -translate-y-0.5'
                                : 'bg-cyan-400/20 text-cyan-300 border border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)] transform -translate-y-0.5'
                              : 'bg-white/5 border border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/10'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            isHovered
                              ? isCyber
                                ? 'bg-[#00FF9D] scale-125 shadow-[0_0_6px_#00FF9D]'
                                : isAI
                                ? 'bg-[#A855F7] scale-125 shadow-[0_0_6px_#A855F7]'
                                : 'bg-cyan-400 scale-125'
                              : 'bg-slate-500'
                          }`} />
                          <span>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Footer Indicator */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF9D]" />
                    <span>Verified Skillset</span>
                  </span>
                  <span className="text-slate-400 group-hover:text-[#00FF9D] transition-colors">
                    {category.skills.length} modules
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Edit Note Reminder Banner for User */}
        <div className="mt-12 text-center reveal-item">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
            <span className="text-[#00FF9D] font-bold">💡 Tip:</span> All skills and tags can be modified directly in <code className="text-white bg-black/40 px-2 py-0.5 rounded border border-white/10">src/data/portfolioData.js</code>.
          </p>
        </div>

      </div>
    </section>
  );
}
