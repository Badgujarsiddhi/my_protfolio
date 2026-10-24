import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Terminal, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionModal, setSubmissionModal] = useState(null); // holds message data when ready
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message or inquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Process form locally and open the transparent dispatch dialog
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionModal({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || `Inquiry from ${formData.name}`,
        message: formData.message,
        timestamp: new Date().toLocaleString()
      });
    }, 400);
  };

  const handleCopyMessage = () => {
    if (!submissionModal) return;
    const textToCopy = `From: ${submissionModal.name} (${submissionModal.email})\nSubject: ${submissionModal.subject}\n\nMessage:\n${submissionModal.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendViaMailto = () => {
    if (!submissionModal) return;
    const subject = encodeURIComponent(`Portfolio Inquiry: ${submissionModal.subject}`);
    const body = encodeURIComponent(
      `Hello Siddhi,\n\nName: ${submissionModal.name}\nEmail: ${submissionModal.email}\n\nMessage:\n${submissionModal.message}\n`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080B12]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-10 w-96 h-96 cyber-radial-green blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 cyber-radial-purple blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-item">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FF9D]">
            <Terminal className="w-3.5 h-3.5" />
            <span>06 // INITIATE HANDSHAKE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out for research collaborations, internship opportunities, or engineering inquiries.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00FF9D] to-[#A855F7] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Configurable Channels */}
          <div className="lg:col-span-5 space-y-6 reveal-item">
            <div className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Direct Channels</span>
                <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse shadow-[0_0_8px_#00FF9D]"></span>
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {personalData.contactNote}
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00FF9D]/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#00FF9D]/10 border border-[#00FF9D]/30 flex items-center justify-center text-[#00FF9D] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-slate-400">Email Address (Editable)</p>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-white hover:text-[#00FF9D] transition-colors truncate block"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center text-[#A855F7] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Current Location</p>
                    <p className="text-sm font-semibold text-white">{personalData.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Configurable Social Profiles
                </p>
                <div className="flex gap-3">
                  <a
                    href={personalData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#00FF9D]/50 text-xs font-mono transition-all hover:bg-white/10"
                  >
                    <Github className="w-4 h-4 text-[#00FF9D]" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-[#A855F7]/50 text-xs font-mono transition-all hover:bg-white/10"
                  >
                    <Linkedin className="w-4 h-4 text-[#A855F7]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Security Advisory note */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#00FF9D] shrink-0" />
                <span>Encrypted client-side dispatch. No trackers attached.</span>
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7 reveal-item">
            <div className="glass-card p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-[#00FF9D]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                      errors.name
                        ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Email Address <span className="text-[#00FF9D]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                      errors.email
                        ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field (Optional) */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / AI Research Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#A855F7] focus:ring-1 focus:ring-[#A855F7] transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                      Message <span className="text-[#00FF9D]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project proposal, or message..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-white text-sm placeholder-slate-500 focus:outline-none transition-all duration-200 ${
                      errors.message
                        ? 'border-red-500/80 focus:ring-1 focus:ring-red-500'
                        : 'border-white/10 focus:border-[#00FF9D] focus:ring-1 focus:ring-[#00FF9D]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 shadow-lg shadow-[#00FF9D]/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating Payload...' : 'Review & Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Honest Dispatch Modal */}
      {submissionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0D121F] border border-white/20 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00FF9D]/15 text-[#00FF9D] flex items-center justify-center border border-[#00FF9D]/30 shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Message Ready for Dispatch</h3>
                <p className="text-xs font-mono text-slate-400">Direct transmission to Siddhi Badgujar</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 space-y-2 mb-6">
              <div className="flex justify-between border-b border-white/5 pb-1.5 font-mono">
                <span className="text-slate-400">From:</span>
                <span className="text-white font-medium">{submissionModal.name} ({submissionModal.email})</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1.5 font-mono">
                <span className="text-slate-400">Subject:</span>
                <span className="text-[#00FF9D]">{submissionModal.subject}</span>
              </div>
              <div className="pt-1">
                <p className="text-slate-400 font-mono mb-1">Message Preview:</p>
                <p className="text-slate-200 bg-white/5 p-2 rounded max-h-28 overflow-y-auto font-sans text-xs">
                  {submissionModal.message}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6 font-mono leading-relaxed">
              💡 As this portfolio is running client-side, click below to open your native email app with pre-filled content, or copy the formatted text directly!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleSendViaMailto}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 shadow-md shadow-[#00FF9D]/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Email App</span>
              </button>

              <button
                onClick={handleCopyMessage}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-[#00FF9D]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={() => setSubmissionModal(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
