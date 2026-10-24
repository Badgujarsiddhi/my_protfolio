import React from 'react';
import { ShieldAlert, ArrowLeft, Home, Terminal } from 'lucide-react';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen bg-[#080B12] text-slate-100 flex flex-col items-center justify-center p-6 cyber-grid relative overflow-hidden">
      
      {/* Background cyber glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 cyber-radial-purple blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 cyber-radial-green blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-white/10 text-center space-y-6 relative z-10 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto shadow-lg shadow-red-500/10">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-red-400">
            HTTP 404 // ROUTE NOT FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Perimeter Breach
          </h1>
          <p className="text-sm text-slate-400 font-light leading-relaxed">
            The requested sub-protocol or endpoint does not exist on this node.
          </p>
        </div>

        <div className="p-3 bg-black/40 rounded-xl border border-white/5 text-xs font-mono text-slate-400 text-left">
          <p className="text-[#00FF9D]">$ ping requested_route</p>
          <p className="text-red-400">Error: Host unresolved (Destination Unreachable)</p>
        </div>

        <button
          onClick={onGoHome}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-black bg-[#00FF9D] hover:bg-[#00FF9D]/90 shadow-lg shadow-[#00FF9D]/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF9D]"
        >
          <Home className="w-4 h-4" />
          <span>Return to Security Perimeter</span>
        </button>
      </div>
    </div>
  );
}
