import React from 'react';
import { skillsData } from '../data/portfolio';
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript 
} from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa6';
import { TbBrandCSharp } from 'react-icons/tb';
import { Code2, Sparkles, CheckCircle } from 'lucide-react';

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
    <section id="skills" className="py-20 bg-cream dark:bg-navy-deep transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Heading: Space Grotesk 500 */}
        <div className="mb-12">
          <h2 className="section-title">
            Skills &amp; Keahlian
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Programming Languages Column (Cards Grid) */}
          <div className="lg:col-span-8 bg-white dark:bg-navy-dark border border-navy-primary/15 dark:border-navy-light/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-lg bg-navy-primary/10 dark:bg-navy-primary/40 text-navy-primary dark:text-navy-light">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-space font-medium text-xl text-navy-dark dark:text-cream">
                Bahasa Pemrograman
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.programming.map((skill) => {
                const IconComponent = iconMap[skill.icon] || Code2;
                return (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-xl bg-cream/60 dark:bg-navy-deep/70 border border-navy-primary/10 dark:border-navy-light/10 hover:border-navy-primary dark:hover:border-navy-light hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
                  >
                    <div className="text-3xl text-navy-primary dark:text-navy-light group-hover:scale-110 transition-transform mb-2">
                      <IconComponent />
                    </div>
                    <span className="font-space font-semibold text-sm text-navy-dark dark:text-cream">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-slateText-secondary dark:text-navy-textMuted mt-1">
                      {skill.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills Column */}
          <div className="lg:col-span-4 bg-white dark:bg-navy-dark border border-navy-primary/15 dark:border-navy-light/20 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-lg bg-navy-light/20 text-navy-primary dark:text-navy-light">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-space font-medium text-xl text-navy-dark dark:text-cream">
                  Soft Skills
                </h3>
              </div>

              <div className="space-y-3">
                {skillsData.softSkills.map((softSkill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cream-alt/50 dark:bg-navy-deep/60 border border-navy-primary/10 dark:border-navy-light/10 hover:border-navy-light/40 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-navy-primary dark:text-navy-light flex-shrink-0" />
                    <span className="text-sm font-medium text-slateText-primary dark:text-navy-textMuted">
                      {softSkill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-primary/20 text-xs text-slateText-secondary dark:text-navy-textSubtle">
              Mengedepankan ketelitian analisis logika komputasi dan kolaborasi tim yang adaptif.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
