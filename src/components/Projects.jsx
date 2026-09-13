import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import { Lock, ArrowUpRight, Globe, Cpu, Brain, Layers } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Engineering' },
    { id: 'embedded', label: 'Embedded Systems' },
    { id: 'ml', label: 'ML & Assistive Tech' },
    { id: 'web3', label: 'Web3 & Blockchain' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Section Box */}
        <div className="section-box p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/15 rounded-full blur-3xl ambient-glow pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-500/10 dark:bg-sky-600/15 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
          <div className="absolute inset-0 canvas-bg-mesh opacity-25 pointer-events-none"></div>
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 relative z-10">
            <div>
              <div className="text-xs font-mono font-bold text-brand-blue dark:text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400"></span>
                <span>// 04. MULTI-DISCIPLINARY PROJECTS</span>
              </div>
              <h2 className="section-title">
                Featured Engineering Work
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-space font-medium transition-all ${
                    activeFilter === opt.id
                      ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative z-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50/90 dark:bg-slate-900/70 rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-brand-blue/50 dark:hover:border-sky-400/60 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                
                {/* Visual Preview Header */}
                <div className="relative h-52 bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur border border-slate-700 px-3 py-1 rounded-lg text-xs font-mono font-semibold text-sky-400 shadow-sm">
                    {project.badge}
                  </div>

                  {project.isPrivate && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>PRIVATE</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                      <span>{project.role}</span>
                      <span>{project.period}</span>
                    </div>

                    <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors mb-2.5">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="text-xs font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 mb-5">
                      {project.metrics}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-space font-semibold text-brand-blue dark:text-sky-400 hover:underline"
                      >
                        <span>Code &amp; Docs</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-xs text-slate-400 font-mono">Academic Lab</span>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
