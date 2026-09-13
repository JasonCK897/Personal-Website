import React from 'react';
import { personalData } from '../data/portfolio';
import { MapPin, FileText, Send, Terminal, Sparkles, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Dynamic Ambient Glow Orbs (Eliminates flat monotony) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-glow-pulse"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle PCB Matrix Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06] [background-image:radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Telemetry Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-card/80 dark:bg-cyber-card/90 border border-cyber-border text-xs font-mono text-cyber-sky mb-6 shadow-sm backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold tracking-wide">FIRMWARE &bull; EMBEDDED &bull; SUI MOVE</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Malang, ID</span>
            </div>

            {/* Name */}
            <h1 className="font-space font-bold text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
              Jason Christov Kesuma
            </h1>

            {/* Tagline */}
            <p className="font-space text-lg sm:text-xl font-medium text-cyan-600 dark:text-cyber-cyan mb-5 flex items-center justify-center lg:justify-start gap-2">
              <Cpu className="w-5 h-5 text-cyber-sky" />
              <span>{personalData.tagline}</span>
            </p>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-cyber-textMuted max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={personalData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                Lihat CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space text-sm font-semibold border border-slate-300 dark:border-cyber-border text-slate-800 dark:text-cyber-textBright hover:bg-slate-100 dark:hover:bg-cyber-card hover:border-cyan-400 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Hubungi saya
              </a>
            </div>

          </div>

          {/* Right Column: Avatar with Double Trail-Orbit Animation */}
          <div className="flex-shrink-0 flex items-center justify-center pt-2 pb-2">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center">
              
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
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-cyber-card border-2 border-cyan-400/40 shadow-2xl relative z-10 flex items-center justify-center">
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

              {/* Hardware Status Pill */}
              <div className="absolute -bottom-3 bg-cyber-surface/90 backdrop-blur border border-cyan-500/40 text-cyber-cyan px-3 py-1 rounded-full text-[11px] font-mono font-semibold shadow-lg flex items-center gap-1.5 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>STM32 &bull; ESP32</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
