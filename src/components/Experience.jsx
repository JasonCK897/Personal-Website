import React from 'react';
import { experienceData } from '../data/portfolio';
import { Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cream dark:bg-navy-dark/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Heading: Space Grotesk 500 */}
        <div className="mb-12">
          <h2 className="section-title">
            Pengalaman
          </h2>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-navy-primary/30 dark:border-navy-light/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-navy-primary dark:bg-navy-light border-4 border-cream dark:border-navy-dark flex items-center justify-center text-white dark:text-navy-dark shadow-sm group-hover:scale-125 transition-transform duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-cream dark:bg-navy-dark"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-navy-dark border border-navy-primary/15 dark:border-navy-light/20 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-navy-primary/40 dark:hover:border-navy-light/40 transition-all duration-200">
                
                {/* Header: Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-space font-semibold text-xl text-navy-dark dark:text-cream group-hover:text-navy-primary dark:group-hover:text-navy-light transition-colors">
                      {exp.role}
                    </h3>
                    <div className="font-space font-medium text-sm text-navy-primary dark:text-navy-light mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slateText-secondary dark:text-navy-textMuted bg-cream-alt/60 dark:bg-navy-deep/60 px-3 py-1.5 rounded-lg w-fit border border-navy-primary/10 dark:border-navy-light/10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-navy-primary dark:text-navy-light" />
                      {exp.period}
                    </span>
                    <span className="text-gray-300 dark:text-gray-600">|</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-navy-primary dark:text-navy-light" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slateText-secondary dark:text-navy-textMuted leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && (
                  <div className="space-y-2 pt-3 border-t border-gray-100 dark:border-navy-primary/20">
                    {exp.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slateText-secondary dark:text-navy-textMuted">
                        <ChevronRight className="w-4 h-4 text-navy-primary dark:text-navy-light flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
