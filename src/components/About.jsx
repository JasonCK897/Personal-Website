import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, MapPin, Cpu, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical section heading */}
        <div className="mb-10">
          <div className="text-xs font-mono font-semibold text-cyan-500 uppercase tracking-widest mb-1">
            // BACKGROUND
          </div>
          <h2 className="section-title">
            About &amp; Pendidikan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Education Card */}
          <div className="lg:col-span-7 bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-cyan-400/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-xl text-slate-900 dark:text-white">
                      {educationData.institution}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-cyber-textMuted mt-0.5 font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{educationData.location}</span>
                    </div>
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>IPK: {educationData.gpa}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-cyber-border">
                <p className="font-space font-semibold text-base text-cyan-600 dark:text-cyan-400 mb-1">
                  {educationData.degree}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-cyber-textMuted mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.period}</span>
                </div>

                <div className="space-y-2 mt-4">
                  {educationData.highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-cyber-textMuted">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Focus & Approach Card */}
          <div className="lg:col-span-5 bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-space font-bold text-lg text-slate-900 dark:text-white">
                  Fokus &amp; Rekayasa
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-cyber-textMuted leading-relaxed mb-4">
                Mengeksplorasi batas antara perangkat lunak tingkat rendah (*firmware*) dan arsitektur sirkuit perangkat keras.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border">
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-0.5 font-mono">STM32 &bull; ESP32 MCU</strong>
                  <span className="text-slate-600 dark:text-cyber-textMuted">Pemrograman mikrokontroler, telemetri nirkabel, dan kalibrasi sinyal multi-sensor.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border">
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-0.5 font-mono">Sinyal &bull; Noise Immunity</strong>
                  <span className="text-slate-600 dark:text-cyber-textMuted">Digital signal filtering (EMA &amp; Median Filter) untuk eliminasi interferensi elektromagnetik.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border">
                  <strong className="text-cyan-600 dark:text-cyan-400 block mb-0.5 font-mono">Sui Move Smart Contracts</strong>
                  <span className="text-slate-600 dark:text-cyber-textMuted">Penerapan model objek Move untuk arsitektur transaksi desentralisasi on-chain.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
