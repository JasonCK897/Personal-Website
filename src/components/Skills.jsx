import React from 'react';
import { skillsData } from '../data/portfolio';
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript 
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { Code2, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  SiPython: SiPython,
  SiCplusplus: SiCplusplus,
  FaJava: FaJava,
  TbBrandCSharp: TbBrandCSharp,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiJavascript: SiJavascript,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/30 dark:bg-cyber-surface/30 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest mb-1">
            // TOOLSET
          </div>
          <h2 className="section-title">
            Skills &amp; Keahlian
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Programming Languages Column */}
          <div className="lg:col-span-8 bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white">
                Bahasa Pemrograman &amp; Lingkungan
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {skillsData.programming.map((skill) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                return (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border hover:border-cyan-400 dark:hover:border-cyan-400/80 transition-all duration-200 flex flex-col items-center text-center"
                  >
                    <div className="text-3xl text-slate-700 dark:text-cyan-400 group-hover:scale-110 transition-transform mb-2">
                      <IconComponent />
                    </div>
                    <span className="font-space font-semibold text-sm text-slate-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-slate-400 mt-1">
                      {skill.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills Column */}
          <div className="lg:col-span-4 bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white">
                  Soft Skills
                </h3>
              </div>

              <div className="space-y-2.5">
                {skillsData.softSkills.map((softSkill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                      {softSkill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-cyber-border text-[11px] font-mono text-slate-500">
              Analisis komputasi teliti &amp; kolaborasi adaptif.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
