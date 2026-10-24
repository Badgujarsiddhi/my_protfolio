import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  CheckCircle, 
  Clock, 
  Terminal,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#080B12]">
      
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 cyber-radial-green blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-item">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9D]">
            <Terminal className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Formal technical education combining fundamental computing theory, systems architecture, and engineering excellence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00FF9D] to-[#A855F7] mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical connecting line */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#00FF9D] via-[#A855F7] to-white/10 shadow-[0_0_8px_rgba(0,255,157,0.2)]" />

          <div className="space-y-8">
            {educationData.map((edu, idx) => {
              const isCurrent = edu.period.toLowerCase().includes('pursuing') || edu.status.toLowerCase().includes('pursuing');

              return (
                <div
                  key={idx}
                  className="relative sm:pl-20 group reveal-item"
                >
                  {/* Timeline Node Badge on Desktop */}
                  <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-[#0D121F] border-2 border-[#00FF9D] items-center justify-center text-[#00FF9D] shadow-lg shadow-[#00FF9D]/30 z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_#00FF9D] transition-all duration-300">
                    {isCurrent ? (
                      <Clock className="w-4 h-4 text-[#00FF9D]" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-[#A855F7]" />
                    )}
                  </div>

                  {/* Main Card */}
                  <div className="glass-card p-7 sm:p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 group-hover:shadow-[0_10px_35px_-10px_rgba(0,255,157,0.15)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <span className="text-xs font-mono text-[#00FF9D] uppercase tracking-wider block mb-1">
                          Academic Stage 0{idx + 1}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00FF9D] transition-colors">
                          {edu.degree}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
                          {edu.period}
                        </span>
                        <span
                          className={`px-3 py-0.5 rounded-full text-xs font-mono border ${
                            isCurrent
                              ? 'bg-[#00FF9D]/15 text-[#00FF9D] border-[#00FF9D]/30 shadow-sm'
                              : 'bg-white/5 text-slate-300 border-white/10'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-3 font-mono">
                      <Building2 className="w-4 h-4 text-[#A855F7] shrink-0" />
                      <span className="text-slate-100 font-semibold">{edu.institution}</span>
                    </div>

                    {/* Grade / Score Highlight Pill */}
                    {edu.grade && (
                      <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/30 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-[#00FF9D]" />
                        <span>Score: <strong>{edu.grade}</strong></span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed font-light mb-4">
                      {edu.description}
                    </p>

                    {/* Key Academic Achievements / Highlights */}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="pt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                        {edu.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <span className="text-[#00FF9D] font-bold">›</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

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
