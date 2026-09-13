import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import { Lock, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'firmware', label: 'Firmware' },
    { id: 'web3', label: 'Sui Blockchain' },
    { id: 'web', label: 'Web Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#070B12] transition-colors duration-200 relative overflow-hidden">
      {/* Subtle Background Glow for Projects Section */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>// 04. SHOWCASE</span>
            </div>
            <h2 className="section-title">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-space font-medium transition-all ${
                  activeFilter === opt.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-100 dark:bg-[#0F1829] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-400/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid - Contrasting dark sapphire surfaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-[#0C1424] rounded-2xl border border-slate-200/90 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-400/80 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              
              {/* Visual Preview Header */}
              <div className="relative h-48 bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-2">
                  <span className="bg-slate-900/90 backdrop-blur border border-slate-700 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300">
                    {project.period}
                  </span>
                </div>

                {project.isPrivate && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>PRIVATE</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1.5">
                    {project.role}
                  </div>

                  <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-[#070D18] px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 mb-4">
                    {project.metrics}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-500 dark:text-slate-400"
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
                      className="inline-flex items-center gap-1 text-xs font-space font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] text-gray-400 font-mono">Internal</span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
