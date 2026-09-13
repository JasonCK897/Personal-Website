import React from 'react';
import { publicationsData } from '../data/portfolio';
import { BookOpen, FileCheck, Clock, ExternalLink } from 'lucide-react';

export default function Publications() {
  return (
    <section id="research" className="py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Section Box with subtle Indigo accent */}
        <div className="section-box p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-purple-500/10 dark:bg-sky-500/15 rounded-full blur-3xl ambient-glow pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl animate-float-reverse pointer-events-none"></div>
          <div className="absolute inset-0 canvas-bg-mesh opacity-25 pointer-events-none"></div>
          
          {/* Header */}
          <div className="mb-10 relative z-10">
            <div className="text-xs font-mono font-bold text-brand-blue dark:text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400"></span>
              <span>// 05. ACADEMIC INQUIRY</span>
            </div>
            <h2 className="section-title">
              Research &amp; Publications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-2xl font-mono">
              Empirical studies and research manuscripts conducted at the Ma Chung Human-Machine Interaction (HMI) Study Center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {publicationsData.map((pub) => (
              <div
                key={pub.id}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-brand-blue/40 dark:hover:border-sky-400/40 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      <Clock className="w-3.5 h-3.5" />
                      {pub.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{pub.year}</span>
                  </div>

                  <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                    {pub.title}
                  </h3>

                  <div className="text-xs font-mono text-brand-blue dark:text-sky-400 mb-3">
                    {pub.venue}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Universitas Ma Chung</span>
                  <span className="text-slate-400">Documentation Ongoing</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
