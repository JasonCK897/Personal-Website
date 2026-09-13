import React, { useState } from 'react';
import { projectsData } from '../data/portfolio';
import { ExternalLink, Github, Calendar, UserCheck, Lock, Globe, Cpu } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'firmware', label: 'Firmware & Embedded' },
    { id: 'web3', label: 'Sui Blockchain & Web3' },
    { id: 'web', label: 'Web Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-cream dark:bg-navy-deep transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Heading: Space Grotesk 500 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="section-title">
              Featured Projects
            </h2>
            <p className="text-sm text-slateText-secondary dark:text-navy-textMuted mt-2 max-w-xl">
              Tiga proyek rekayasa utama: pengujian firmware noise immunity mikrokontroler, smart contract Sui blockchain dApp, dan sistem portal riset.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-space font-medium transition-all ${
                  activeFilter === opt.id
                    ? 'bg-navy-primary text-white dark:bg-navy-light dark:text-navy-dark shadow-sm'
                    : 'bg-white dark:bg-navy-dark text-slateText-secondary dark:text-navy-textMuted border border-navy-primary/15 dark:border-navy-light/15 hover:border-navy-primary/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-navy-dark rounded-2xl border border-navy-primary/15 dark:border-navy-light/20 hover:border-navy-primary dark:hover:border-navy-light hover:shadow-lg hover:shadow-navy-light/10 transition-all duration-300 flex flex-col overflow-hidden group"
            >
              
              {/* Project Image Preview Header */}
              <div className="relative h-48 sm:h-52 bg-navy-dark overflow-hidden border-b border-navy-primary/10">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Period Tag */}
                <div className="absolute top-3 right-3 bg-navy-dark/90 backdrop-blur border border-navy-light/30 px-2.5 py-1 rounded-md text-[11px] font-mono text-cream flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3 h-3 text-navy-light" />
                  {project.period}
                </div>

                {/* Privacy Badge */}
                {project.isPrivate && (
                  <div className="absolute top-3 left-3 bg-amber-500/90 text-navy-dark font-mono text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-sm">
                    <Lock className="w-3 h-3" />
                    <span>PRIVATE REPO</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Role Badge */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-primary dark:text-navy-light bg-navy-light/15 dark:bg-navy-primary/30 px-2.5 py-1 rounded-md mb-3">
                    <UserCheck className="w-3.5 h-3.5" />
                    {project.role}
                  </div>

                  {/* Title */}
                  <h3 className="font-space font-semibold text-xl text-navy-dark dark:text-cream group-hover:text-navy-primary dark:group-hover:text-navy-light transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slateText-secondary dark:text-navy-textMuted leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 mb-6">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slateText-secondary dark:text-navy-textMuted">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy-primary dark:bg-navy-light mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Direct Repository / Demo Integration */}
                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cream-alt dark:bg-navy-deep text-slateText-primary dark:text-navy-textMuted border border-navy-primary/10 dark:border-navy-light/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Area */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-navy-primary/20 text-xs font-medium">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy-primary dark:text-navy-light hover:underline font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        <span>{project.isPrivate ? 'Akses GitHub (Private)' : 'Lihat di GitHub'}</span>
                      </a>
                    ) : (
                      <span className="text-gray-400 font-mono text-[11px]">Internal Project</span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slateText-secondary dark:text-navy-textMuted hover:text-navy-primary dark:hover:text-navy-light"
                      >
                        <span>Demo / Doc</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
                        Lab Testing
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
