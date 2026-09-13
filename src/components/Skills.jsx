import React, { useState } from 'react';
import { skillsData } from '../data/portfolio';
import { Code2, CheckCircle2, Terminal, Cpu, Database, Award } from 'lucide-react';

const categoryIcons = [Code2, Cpu, Database, Award];

export default function Skills() {
  const [activeCat, setActiveCat] = useState(0);

  return (
    <section id="skills" className="py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Section Box */}
        <div className="section-box p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-400/10 dark:bg-sky-500/15 rounded-full blur-3xl ambient-glow pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-blue/10 dark:bg-indigo-600/15 rounded-full blur-3xl animate-float-reverse pointer-events-none"></div>
          <div className="absolute inset-0 canvas-bg-mesh opacity-25 pointer-events-none"></div>
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 relative z-10">
            <div>
              <div className="text-xs font-mono font-bold text-brand-blue dark:text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400"></span>
                <span>// 02. TECHNICAL COMPETENCIES</span>
              </div>
              <h2 className="section-title">
                Skills &amp; Technologies
              </h2>
            </div>

            {/* Category Nav Tabs */}
            <div className="flex flex-wrap gap-2">
              {skillsData.categories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCat(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-space font-medium transition-all ${
                    activeCat === idx
                      ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* All Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {skillsData.categories.map((cat, idx) => {
              const Icon = categoryIcons[idx] || Terminal;
              const isSelected = activeCat === idx;
              return (
                <div
                  key={cat.title}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-slate-900 text-white dark:bg-slate-800/90 border-slate-900 shadow-lg' 
                      : 'bg-slate-50/80 dark:bg-slate-900/60 text-slate-900 dark:text-white border-slate-200/90 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-500/20 text-sky-400' : 'bg-brand-blue/10 dark:bg-sky-500/10 text-brand-blue dark:text-sky-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-space font-bold text-base">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                          isSelected
                            ? 'bg-slate-800 text-sky-300 border-slate-700'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
