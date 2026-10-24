import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, FileDown, Terminal, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section with offset compensation
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for ESC key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B12]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/50 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D] rounded-xl p-1"
              aria-label="Siddhi Badgujar - Portfolio Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#0D121F] border border-white/10 group-hover:border-[#00FF9D]/60 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                <Shield className="w-5 h-5 text-[#00FF9D] transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-xl bg-[#00FF9D]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold tracking-tight text-white group-hover:text-[#00FF9D] transition-colors flex items-center gap-2 text-base sm:text-lg">
                  {personalData.name}
                  <span className="inline-block w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse shadow-[0_0_8px_#00FF9D]"></span>
                </span>
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                  AI & Cybersecurity
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#0D121F]/80 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-black font-semibold bg-[#00FF9D] shadow-[0_0_15px_rgba(0,255,157,0.35)]'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Action Button: Resume */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-100 bg-white/5 hover:bg-[#00FF9D] hover:text-black border border-white/15 hover:border-[#00FF9D] shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D] active:scale-95 group"
              >
                <FileDown className="w-4 h-4 text-[#00FF9D] group-hover:text-black transition-colors" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenResume}
                aria-label="Download Resume"
                className="p-2 text-xs font-medium rounded-xl text-[#00FF9D] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <FileDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#00FF9D]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 px-5 pt-4 pb-6 mt-3 mx-4 rounded-2xl shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-[#00FF9D]/15 text-[#00FF9D] font-semibold border border-[#00FF9D]/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]" />
                    ) : (
                      <span className="text-slate-600 font-mono text-xs">›</span>
                    )}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 shadow-lg shadow-[#00FF9D]/25 transition-all"
                >
                  <FileDown className="w-4 h-4 text-black" />
                  <span>Download / Preview Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          aria-hidden="true"
        />
      )}
    </>
  );
}
