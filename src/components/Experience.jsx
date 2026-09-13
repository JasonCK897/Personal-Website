import React from 'react';
import { experienceData } from '../data/portfolio';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest mb-1">
            // 03. TRACK RECORD
          </div>
          <h2 className="section-title">
            Experience &amp; Leadership
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-cyber-border ml-4 md:ml-8 pl-6 md:pl-10 space-y-8">
          
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-cyber-bg shadow-sm group-hover:scale-125 transition-transform duration-200"></div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-5 sm:p-6 shadow-sm hover:border-cyan-400/50 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="font-space font-medium text-xs sm:text-sm text-cyan-600 dark:text-cyan-400">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-cyber-textMuted bg-slate-50 dark:bg-cyber-surface px-2.5 py-1 rounded-md border border-slate-200 dark:border-cyber-border/80 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{exp.period}</span>
                    <span>&bull;</span>
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-cyber-textMuted leading-relaxed">
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
