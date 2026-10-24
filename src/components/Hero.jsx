import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Lock, 
  Layers 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden cyber-grid">
      
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] cyber-radial-green blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-96 h-96 cyber-radial-purple blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 cyber-radial-green blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        {/* Main Centered Hero Content */}
        <div className="text-center space-y-7 py-8 reveal-item">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md hover:border-[#00FF9D]/40 transition-colors shadow-sm">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF9D]"></span>
            </span>
            <span className="text-white font-mono font-medium">{personalData.role}</span>
            <span className="text-slate-600">•</span>
            <span className="text-[#00FF9D] font-mono">{personalData.specialization}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] via-[#00F0FF] to-[#00FF9D] text-glow-green">
              Intelligent Solutions.
            </span>
            <br />
            Securing the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#00FF9D] text-glow-purple">
              Digital World.
            </span>
          </h1>

          {/* Introduction paragraph */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Hi, I am <span className="font-semibold text-white">{personalData.name}</span>, a Computer Engineering student and aspiring AI & Cybersecurity Engineer. I engineer machine learning models, research defensive threat patterns, and build secure, resilient software systems for real-world impact.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 shadow-lg shadow-[#00FF9D]/25 hover:shadow-[#00FF9D]/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D]"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#A855F7]/50 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
            >
              <Mail className="w-4 h-4 text-[#A855F7]" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Direct Profiles & Verified Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              
              {/* GitHub */}
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00FF9D] hover:border-[#00FF9D]/50 hover:bg-white/10 transition-all font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-[#00FF9D]" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={personalData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#A855F7] hover:border-[#A855F7]/50 hover:bg-white/10 transition-all font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#A855F7]" />
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Send direct email"
                title={personalData.email}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{personalData.email}</span>
              </a>
            </div>

            <div className="hidden sm:block h-4 w-px bg-white/10" />

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#00FF9D]" />
              <span>Zero Vulnerability Mindset</span>
            </div>
          </div>

        </div>

        {/* Quick Highlights Stats Ribbon */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 reveal-item">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:border-[#00FF9D]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center text-[#00FF9D] shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Primary Stack</p>
              <p className="text-sm font-bold text-white">Python • C++ • JS</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:border-[#A855F7]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">AI / ML Focus</p>
              <p className="text-sm font-bold text-white">NLP & Classification</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:border-[#00FF9D]/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center text-[#00FF9D] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Cybersecurity</p>
              <p className="text-sm font-bold text-white">Threat & Phishing</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 hover:border-cyan-400/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono text-slate-400">Target Role</p>
              <p className="text-sm font-bold text-white">Internships & SDE</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
