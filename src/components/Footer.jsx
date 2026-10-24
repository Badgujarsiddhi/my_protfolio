import React from 'react';
import { 
  ArrowUp, 
  Shield, 
  Github, 
  Linkedin, 
  Mail, 
  Heart 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#05070C] border-t border-white/10 text-slate-400 py-12 overflow-hidden">
      
      {/* Decorative cyber line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FF9D]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0D121F] border border-white/10 flex items-center justify-center text-[#00FF9D]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                {personalData.name}
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9D]" />
              </p>
              <p className="text-xs font-mono text-slate-500">
                AI, Machine Learning & Cybersecurity
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#00FF9D] hover:border-[#00FF9D]/40 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email Siddhi Badgujar"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-6">
            <p className="text-xs font-mono text-slate-500 text-center md:text-right">
              © {currentYear} {personalData.name}. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-[#00FF9D] hover:border-[#00FF9D]/50 hover:bg-white/10 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D]"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
