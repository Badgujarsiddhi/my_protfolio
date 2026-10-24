import React from 'react';
import { 
  Trophy, 
  Award, 
  Calendar, 
  Building, 
  Terminal, 
  Sparkles, 
  Edit3,
  Users,
  ShieldCheck
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#080B12]/95">
      
      {/* Decorative ambient light */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 cyber-radial-purple blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-item">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9D]">
            <Terminal className="w-3.5 h-3.5" />
            <span>04 // RECOGNITIONS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic & Technical Milestones
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Honors, paper presentations, and competitive technical hackathon participations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00FF9D] to-[#A855F7] mx-auto rounded-full" />
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className={`p-7 sm:p-8 rounded-2xl glass-card border transition-all duration-300 relative group reveal-item ${
                item.highlight
                  ? 'border-[#00FF9D]/40 hover:border-[#00FF9D] hover:shadow-[0_12px_40px_-10px_rgba(0,255,157,0.25)] bg-gradient-to-b from-[#121829] to-[#0D121F]'
                  : 'border-white/10 hover:border-[#A855F7]/40 hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.2)]'
              }`}
            >
              {/* Highlight ribbon badge */}
              {item.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#00FF9D]/15 text-[#00FF9D] border border-[#00FF9D]/40 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Milestone</span>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center text-[#00FF9D] shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Trophy className="w-6 h-6" />
                </div>
                <div className="pr-12 sm:pr-0">
                  <span className="text-xs font-mono text-[#A855F7] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00FF9D] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-5 font-light">
                {item.description}
              </p>

              {/* Team & Verification IDs if available */}
              {(item.team || item.certificateId) && (
                <div className="mb-5 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  {item.team && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                      <Users className="w-3.5 h-3.5 text-[#A855F7]" />
                      <span>Team: <strong className="text-white">{item.team}</strong></span>
                    </span>
                  )}
                  {item.certificateId && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/20 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#00FF9D]" />
                      <span>Verified ID: <span className="text-slate-400 font-mono text-[11px]">{item.certificateId.substring(0, 16)}...</span></span>
                    </span>
                  )}
                </div>
              )}

              {/* Event & Date metadata */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
                <div className="flex items-center gap-2">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  <span className="text-slate-300">{item.event}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                  <Calendar className="w-3.5 h-3.5 text-[#00FF9D]" />
                  <span>{item.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Note on editing */}
        <div className="mt-12 text-center reveal-item">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <Edit3 className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>Customize symposium names, dates, or add new milestones in <strong className="text-slate-200">src/data/portfolioData.js</strong></span>
          </p>
        </div>

      </div>
    </section>
  );
}
