import React from 'react';
import { personalData } from '../data/portfolio';
import { MapPin, FileText, Send, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden transition-colors duration-200"
    >
      {/* Background Subtle Embedded System Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 [background-image:radial-gradient(#1B3B6F_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-alt dark:bg-navy-dark border border-navy-primary/20 dark:border-navy-light/20 text-xs font-medium text-slateText-primary dark:text-navy-textMuted mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-navy-primary dark:text-navy-light" />
                {personalData.location}
              </span>
              <span className="text-gray-400 dark:text-gray-600">|</span>
              <span className="flex items-center gap-1 text-navy-primary dark:text-navy-light font-mono font-medium">
                <Terminal className="w-3 h-3" />
                S1 Teknik Informatika
              </span>
            </div>

            {/* Name */}
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-navy-dark dark:text-cream tracking-tight leading-[1.15] mb-4">
              {personalData.name}
            </h1>

            {/* Tagline */}
            <p className="font-space text-lg sm:text-xl font-medium text-navy-primary dark:text-navy-light mb-5">
              {personalData.tagline}
            </p>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slateText-secondary dark:text-navy-textMuted max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Button 1: "Lihat CV" (Bukan Download CV) */}
              <a
                href={personalData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-space text-sm font-semibold bg-navy-light text-navy-dark hover:bg-navy-light/90 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-navy-light focus:ring-offset-2"
              >
                <FileText className="w-4 h-4" />
                Lihat CV
              </a>

              {/* Button 2: "Hubungi saya" */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-space text-sm font-semibold border-2 border-navy-primary text-navy-primary dark:border-navy-light dark:text-navy-light hover:bg-navy-primary hover:text-white dark:hover:bg-navy-light dark:hover:text-navy-dark transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-navy-primary focus:ring-offset-2"
              >
                <Send className="w-4 h-4" />
                Hubungi saya
              </a>
            </div>

          </div>

          {/* Right Column: Avatar with Double Trail-Orbit Animation */}
          <div className="flex-shrink-0 flex items-center justify-center pt-4 pb-4">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              
              {/* Outer Orbit Ring (Clockwise, #1B3B6F navy trail) */}
              <div 
                className="orbit-ring-outer" 
                aria-hidden="true"
              ></div>

              {/* Inner Orbit Ring (Counter-Clockwise, #8FB8E0 light blue trail) */}
              <div 
                className="orbit-ring-inner" 
                aria-hidden="true"
              ></div>

              {/* Profile Image Frame */}
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden bg-navy-dark border-4 border-white dark:border-navy-primary shadow-xl relative z-10 flex items-center justify-center">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  loading="lazy"
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    // Fallback to avatar.svg if png is not found yet
                    e.target.onerror = null;
                    e.target.src = '/avatar.svg';
                  }}
                />
              </div>

              {/* Decorative Embedded Microchip Badge */}
              <div className="absolute -bottom-2 bg-navy-dark border border-navy-light/40 text-cream px-3 py-1 rounded-full text-xs font-mono font-medium shadow-md flex items-center gap-1.5 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-light"></span>
                <span>EMBEDDED DEV</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
