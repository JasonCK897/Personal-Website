import React from 'react';
import { experienceData } from '../data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    /* Alternating Band: Deep Sapphire (#0B1426) contrasting with surrounding sections */
    <section id="experience" className="py-24 bg-slate-100/70 dark:bg-[#0B1426]/90 border-y border-slate-200 dark:border-cyan-500/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>// 03. TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Experience &amp; Leadership
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Point with subtle glow */}
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-[#0B1426] shadow-sm shadow-cyan-500/50 group-hover:scale-125 transition-transform duration-200"></div>

              {/* Experience Card: High-contrast distinct surface */}
              <div className="bg-white dark:bg-[#070D1A] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-cyan-400/50 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="font-space font-medium text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-[#0E172A] px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{exp.period}</span>
                    <span>&bull;</span>
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
