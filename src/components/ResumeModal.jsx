import React from 'react';
import { 
  X, 
  FileDown, 
  FileText, 
  CheckCircle, 
  ExternalLink, 
  Briefcase,
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { personalData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDirectDownload = () => {
    const link = document.createElement('a');
    link.href = personalData.resumeUrl;
    link.download = 'Siddhi_Badgujar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#0D121F] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close resume dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center text-[#00FF9D]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-white flex items-center gap-2">
              <span>{personalData.name} — Curriculum Vitae</span>
              <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse"></span>
            </h3>
            <p className="text-xs font-mono text-slate-400">
              AIML Intern & Computer Engineering Student • Nashik, India
            </p>
          </div>
        </div>

        {/* Contact Snippet Bar */}
        <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-300 gap-2 mb-5">
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#00FF9D]" />
            <span>+91 9022753939</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#A855F7]" />
            <span>{personalData.email}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Nashik (422003)</span>
          </div>
        </div>

        {/* Resume Preview Highlights */}
        <div className="space-y-4 mb-6 text-xs text-slate-300">
          
          {/* Work Experience */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between font-mono">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#00FF9D]" />
                Supratech AI Innovations — AIML Intern
              </span>
              <span className="text-[#A855F7]">05/2025 – 08/2025</span>
            </div>
            <p className="text-slate-300 font-light leading-relaxed">
              Developed innovative AI/ML models, prepared architectural documentation and presentations, and integrated automated productivity workflows.
            </p>
          </div>

          {/* Education Track */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="font-bold text-white font-mono flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#A855F7]" />
              Education Milestones
            </span>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-slate-100">B.Tech in Computer Engineering (DSE)</p>
                  <p className="text-[11px] text-slate-400">NDMVP KBTCOE, Nashik • Full marks in DSA & Microprocessors</p>
                </div>
                <span className="font-mono text-[#00FF9D]">Pursuing</span>
              </div>
              <div className="flex items-start justify-between pt-1 border-t border-white/5">
                <div>
                  <p className="font-semibold text-slate-100">Diploma in Computer Technology</p>
                  <p className="text-[11px] text-slate-400">K.K. Wagh Polytechnic, Nashik</p>
                </div>
                <span className="font-mono text-[#00FF9D]">92.59% Distinction</span>
              </div>
            </div>
          </div>

          {/* Key Certifications */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
            <span className="font-bold text-white font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              Verified Certifications & Competitions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-slate-300 pt-1">
              <p>• RIFT '26 Hackathon (PW IOI)</p>
              <p>• AI Agents for Beginners (Simplilearn)</p>
              <p>• Climate Action (UNICEF Maharashtra)</p>
              <p>• Paper Presentation Runner-Up</p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10">
          <button
            onClick={handleDirectDownload}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 shadow-lg shadow-[#00FF9D]/25 transition-all duration-200"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Official PDF Resume</span>
          </button>

          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Open in Tab</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-3 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
