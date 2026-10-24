import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  Bot,
  Sprout,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  ArrowUpRight,
  Snowflake,
  HeartPulse,
  Pill
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Map icons to project IDs
const projectIconMap = {
  'debate-gpt': Bot,
  'crop-recommendation': Sprout,
  'scamshield-ai': ShieldAlert,
  'pharma-guard': Pill,
  'milk-chiller-can': Snowflake,
  'mental-health-predictor': HeartPulse
};

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return project.status.toLowerCase().includes('completed');
    if (filter === 'prototype') return project.status.toLowerCase().includes('prototype') || project.status.toLowerCase().includes('development');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080B12]">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 cyber-radial-green blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 cyber-radial-purple blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 reveal-item">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9D]">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Applied AI Systems, Health & Security Concepts
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Natural language reasoning, agricultural predictive analytics, pharmaceutical integrity, cyber fraud detection, and rural hardware innovation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00FF9D] to-[#A855F7] mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 reveal-item">
          <div className="inline-flex p-1 rounded-2xl bg-[#0D121F] border border-white/10 text-xs font-mono shadow-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#00FF9D] text-black font-semibold shadow-md shadow-[#00FF9D]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                filter === 'completed'
                  ? 'bg-[#00FF9D] text-black font-semibold shadow-md shadow-[#00FF9D]/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('prototype')}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                filter === 'prototype'
                  ? 'bg-[#A855F7] text-white font-semibold shadow-md shadow-[#A855F7]/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Prototypes & In-Dev
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const ProjectIcon = projectIconMap[project.id] || FolderGit2;
            const isCompleted = project.status.toLowerCase().includes('completed');
            const isPrototype = project.status.toLowerCase().includes('prototype');
            
            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-white/30 transition-all duration-300 group hover:shadow-[0_15px_40px_-15px_rgba(0,255,157,0.18)] relative overflow-hidden reveal-item"
              >
                {/* Subtle top neon border gradient on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                  isCompleted 
                    ? 'bg-gradient-to-r from-[#00FF9D] via-[#00F0FF] to-transparent' 
                    : 'bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-transparent'
                }`} />

                <div>
                  {/* Top Bar: Icon, Category Badge & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-11 h-11 rounded-xl bg-[#13192B] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                        isCompleted ? 'text-[#00FF9D] group-hover:border-[#00FF9D]/40' : 'text-[#A855F7] group-hover:border-[#A855F7]/40'
                      }`}>
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <div>
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                          <CheckCircle2 className="w-3 h-3" />
                          Completed
                        </span>
                      ) : isPrototype ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30">
                          <Sparkles className="w-3 h-3" />
                          Prototype
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                          <Layers className="w-3 h-3" />
                          In Dev
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00FF9D] transition-colors flex items-center gap-1.5">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-[#00FF9D] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                    {project.description}
                  </p>

                  {/* Highlights / Features list */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-5 space-y-1 p-3 rounded-xl bg-black/35 border border-white/5 text-[11px] text-slate-300">
                      <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]"></span>
                        Highlights:
                      </p>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-[#00FF9D] font-bold">›</span>
                          <span className="text-slate-300 font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags with Micro-hover */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 hover:border-[#00FF9D]/40 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions: GitHub & Live Demo */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* GitHub Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00FF9D]/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D]"
                      title="View Source on GitHub"
                    >
                      <Github className="w-3.5 h-3.5 text-[#00FF9D]" />
                      <span>Code</span>
                    </a>

                    {/* Live Demo or Prototype Link */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 transition-all font-semibold shadow-md shadow-[#00FF9D]/20"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.demoLabel || 'Demo'}</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">
                    {project.id}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
