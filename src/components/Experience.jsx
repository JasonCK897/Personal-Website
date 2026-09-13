import React from 'react';
import { experienceData } from '../data/portfolio';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Section Box */}
        <div className="section-box p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-500/10 dark:bg-sky-500/15 rounded-full blur-3xl ambient-glow pointer-events-none"></div>
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-cyan-400/10 dark:bg-cyan-500/15 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
          <div className="absolute inset-0 canvas-bg-mesh opacity-25 pointer-events-none"></div>
          
          {/* Header */}
          <div className="mb-10 relative z-10">
            <div className="text-xs font-mono font-bold text-brand-blue dark:text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400"></span>
              <span>// 03. TRACK RECORD</span>
            </div>
            <h2 className="section-title">
              Experience &amp; Leadership
            </h2>
          </div>

          {/* Vertical Timeline inside the box */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-8 relative z-10">
            {experienceData.map((exp, expIdx) => (
              <div key={exp.id} className="relative group">
                
                {/* Glowing Node Point with pulse animation on first node */}
                <div className="absolute -left-[31px] md:-left-[47px] top-2 w-4 h-4 rounded-full bg-brand-blue dark:bg-sky-400 border-4 border-white dark:border-slate-900 shadow-md group-hover:scale-125 transition-transform duration-200">
                  {expIdx === 0 && (
                    <span className="absolute -inset-1 rounded-full bg-sky-400 opacity-60 animate-ping"></span>
                  )}
                </div>

                {/* Card Container */}
                <div className="bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-sky-400/50 hover:bg-white dark:hover:bg-slate-900 transition-all duration-200 shadow-sm">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-blue/10 dark:bg-sky-500/10 text-brand-blue dark:text-sky-400 border border-brand-blue/20">
                          {exp.tag}
                        </span>
                      </div>
                      <h3 className="font-space font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="font-space font-medium text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-brand-blue dark:text-sky-400" />
                      <span>{exp.period}</span>
                      <span>&bull;</span>
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.points && (
                    <div className="space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                      {exp.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400 mt-1.5 flex-shrink-0"></span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
