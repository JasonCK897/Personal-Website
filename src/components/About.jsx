import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, MapPin, Globe, Cpu, Brain, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Section Box */}
        <div className="section-box p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          {/* Ambient Background Effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-400/10 dark:bg-sky-500/15 rounded-full blur-3xl ambient-glow pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 dark:bg-blue-600/15 rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
          <div className="absolute inset-0 canvas-bg-mesh opacity-30 pointer-events-none"></div>
          
          {/* Section Header */}
          <div className="mb-10 relative z-10">
            <div className="text-xs font-mono font-bold text-brand-blue dark:text-sky-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-sky-400"></span>
              <span>// 01. ACADEMIC &amp; ENGINEERING BACKGROUND</span>
            </div>
            <h2 className="section-title">
              About &amp; Education
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
            
            {/* Main Education Card */}
            <div className="lg:col-span-7 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-400/40 transition-all duration-300">
              <div>
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-brand-blue/10 dark:bg-sky-500/10 text-brand-blue dark:text-sky-400 border border-brand-blue/20">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white">
                        {educationData.institution}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue dark:text-sky-400" />
                        <span>{educationData.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>GPA: {educationData.gpa}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <p className="font-space font-semibold text-base text-brand-blue dark:text-sky-400 mb-1">
                    {educationData.degree}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{educationData.period}</span>
                  </div>

                  <div className="space-y-2 mt-4">
                    {educationData.highlights.map((point, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Multi-Disciplinary Interests */}
            <div className="lg:col-span-5 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Technical Focus Areas
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Pursuing breadth and technical depth across software engineering, physical hardware, and intelligent computing:
                </p>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-space">Full-Stack Web Engineering</strong>
                      <span className="text-slate-500 dark:text-slate-400">Crafting responsive interfaces, relational database systems, and interactive client applications.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-space">Embedded &amp; Microcontrollers</strong>
                      <span className="text-slate-500 dark:text-slate-400">STM32 &amp; ESP32 programming, real-time wireless telemetry, and noise filtering.</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500 mt-0.5">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white block font-space">Machine Learning &amp; HMI Research</strong>
                      <span className="text-slate-500 dark:text-slate-400">Gesture recognition, signal acquisition, and inclusive assistive hardware for disabled users.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
