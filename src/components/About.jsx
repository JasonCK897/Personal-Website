import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, MapPin, Cpu, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    /* Alternating Band: Deep Slate-Navy (#0B1220) contrasting against the main canvas */
    <section id="about" className="py-24 bg-slate-100/80 dark:bg-[#0B1220]/90 border-y border-slate-200 dark:border-cyan-500/10 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>// 01. BACKGROUND</span>
          </div>
          <h2 className="section-title">
            About &amp; Education
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Education Card - High-contrast surface */}
          <div className="lg:col-span-7 bg-white dark:bg-[#080D1A] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-cyan-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white">
                      {educationData.institution}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
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

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="font-space font-semibold text-base text-cyan-700 dark:text-cyan-300 mb-1">
                  {educationData.degree}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{educationData.period}</span>
                </div>

                <div className="space-y-2 mt-4">
                  {educationData.highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Technical Focus Card - High-contrast surface */}
          <div className="lg:col-span-5 bg-white dark:bg-[#080D1A] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white">
                  Technical Focus
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Exploring the boundary between bare-metal firmware software and physical hardware circuit architectures.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E172A] border border-slate-200 dark:border-slate-800">
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-0.5 font-mono">STM32 &bull; ESP32 MCU</strong>
                  <span className="text-slate-600 dark:text-slate-300">Bare-metal C/C++, FreeRTOS multitasking, wireless telemetry, and sensor calibration.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E172A] border border-slate-200 dark:border-slate-800">
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-0.5 font-mono">Signal &bull; Noise Immunity</strong>
                  <span className="text-slate-600 dark:text-slate-300">Digital signal filtering (EMA &amp; Median Filter) to eliminate capacitive electromagnetic interference.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0E172A] border border-slate-200 dark:border-slate-800">
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-0.5 font-mono">Sui Move Smart Contracts</strong>
                  <span className="text-slate-600 dark:text-slate-300">Leveraging Sui's object-centric paradigm for high-throughput, secure decentralized logic.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
