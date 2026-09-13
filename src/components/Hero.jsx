import React from 'react';
import { personalData } from '../data/portfolio';
import { FileText, Send, Cpu, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse"></div>
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Distinct Box / Container Framing the Hero (Separated from Background) */}
        <div className="bg-white/90 dark:bg-cyber-surface/80 backdrop-blur-2xl border border-slate-200 dark:border-cyber-border rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-cyan-950/20 relative overflow-hidden">
          
          {/* Subtle Corner Circuit Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl"></div>
          
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10">
            
            {/* Left Column: Information */}
            <div className="flex-1 text-center lg:text-left">
              
              {/* Telemetry Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-xs font-mono text-cyan-600 dark:text-cyber-sky mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-semibold tracking-wider uppercase">FIRMWARE &bull; EMBEDDED &bull; SUI MOVE</span>
                <span className="text-gray-400 dark:text-gray-600">|</span>
                <span className="flex items-center gap-1 text-slate-500 dark:text-gray-400 font-sans">
                  <MapPin className="w-3 h-3 text-cyan-500" />
                  {personalData.location}
                </span>
              </div>

              {/* Full Name */}
              <h1 className="font-space font-bold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4">
                {personalData.name}
              </h1>

              {/* Tagline */}
              <p className="font-space text-base sm:text-lg font-medium text-cyan-600 dark:text-cyber-cyan mb-5 flex items-center justify-center lg:justify-start gap-2">
                <Cpu className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span>{personalData.tagline}</span>
              </p>

              {/* Short Bio */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-cyber-textMuted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {personalData.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <a
                  href={personalData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  View CV
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space text-xs sm:text-sm font-semibold border border-slate-300 dark:border-cyber-border text-slate-800 dark:text-cyber-textBright hover:bg-slate-100 dark:hover:bg-cyber-card hover:border-cyan-400 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Contact Me
                </a>
              </div>

            </div>

            {/* Right Column: Avatar with Double Trail-Orbit Animation */}
            <div className="flex-shrink-0 flex items-center justify-center py-2">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                
                {/* Outer Orbit Ring (Glowing Electric Blue Trail) */}
                <div 
                  className="orbit-ring-outer" 
                  aria-hidden="true"
                ></div>

                {/* Inner Orbit Ring (Sky Blue Trail) */}
                <div 
                  className="orbit-ring-inner" 
                  aria-hidden="true"
                ></div>

                {/* Profile Image Frame */}
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-cyber-card border-2 border-cyan-400/50 shadow-2xl relative z-10 flex items-center justify-center">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    loading="lazy"
                    className="w-full h-full object-cover select-none"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/avatar.svg';
                    }}
                  />
                </div>

                {/* Hardware Status Tag */}
                <div className="absolute -bottom-2 bg-slate-950/90 backdrop-blur border border-cyan-500/40 text-cyan-400 px-3 py-1 rounded-full text-[10px] font-mono font-semibold shadow-lg flex items-center gap-1.5 z-20">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>STM32 &bull; ESP32</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
