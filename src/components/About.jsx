import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Award, Calendar, MapPin, Cpu, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream dark:bg-navy-dark/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Consistent Section Heading: Space Grotesk 500, no uppercase eyebrow */}
        <div className="mb-12">
          <h2 className="section-title">
            About &amp; Pendidikan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Education Card */}
          <div className="lg:col-span-7 bg-white dark:bg-navy-dark border border-navy-primary/15 dark:border-navy-light/20 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-navy-primary/40 transition-all">
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cream-alt dark:bg-navy-primary/30 text-navy-primary dark:text-navy-light">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-space font-semibold text-xl text-navy-dark dark:text-cream">
                    {educationData.institution}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slateText-secondary dark:text-navy-textMuted mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{educationData.location}</span>
                  </div>
                </div>
              </div>

              {/* GPA Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-navy-light/20 border border-navy-light/40 text-navy-dark dark:text-navy-light text-sm font-semibold">
                <Award className="w-4 h-4 text-navy-primary dark:text-navy-light" />
                <span>IPK: {educationData.gpa}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-navy-primary/20">
              <p className="font-space font-medium text-base text-navy-primary dark:text-navy-light mb-2">
                {educationData.degree}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-mono text-slateText-secondary dark:text-navy-textMuted mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationData.period}</span>
              </div>

              <div className="space-y-2 mt-4">
                {educationData.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm text-slateText-secondary dark:text-navy-textMuted">
                    <CheckCircle2 className="w-4 h-4 text-navy-primary dark:text-navy-light flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Focus & Approach Card */}
          <div className="lg:col-span-5 bg-white dark:bg-navy-dark border border-navy-primary/15 dark:border-navy-light/20 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-navy-primary/10 dark:bg-navy-primary/30 text-navy-primary dark:text-navy-light">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-space font-semibold text-lg text-navy-dark dark:text-cream">
                Minat &amp; Ketertarikan Teknis
              </h3>
            </div>

            <p className="text-sm text-slateText-secondary dark:text-navy-textMuted leading-relaxed mb-4">
              Ketertarikan mendalam pada interaksi langsung antara perangkat lunak tingkat rendah (*firmware*) dan arsitektur sirkuit perangkat keras.
            </p>

            <ul className="space-y-2.5 text-xs text-slateText-secondary dark:text-navy-textMuted">
              <li className="p-2.5 rounded-lg bg-cream-alt/60 dark:bg-navy-deep/60 border border-navy-primary/10 dark:border-navy-light/10">
                <strong className="text-navy-dark dark:text-cream block mb-0.5">Pemrograman Mikrokontroler:</strong>
                Berpengalaman memprogram ESP32, integrasi multi-sensor analog/digital, dan telemetri IoT.
              </li>
              <li className="p-2.5 rounded-lg bg-cream-alt/60 dark:bg-navy-deep/60 border border-navy-primary/10 dark:border-navy-light/10">
                <strong className="text-navy-dark dark:text-cream block mb-0.5">Debugging &amp; Analisis Sistem:</strong>
                Fokus pada ketelitian logika komputasi, keandalan firmware, dan optimasi efisiensi memori.
              </li>
              <li className="p-2.5 rounded-lg bg-cream-alt/60 dark:bg-navy-deep/60 border border-navy-primary/10 dark:border-navy-light/10">
                <strong className="text-navy-dark dark:text-cream block mb-0.5">Teknologi Inklusif (HMI):</strong>
                Riset antarmuka manusia-mesin untuk perangkat aksesibilitas bagi penyandang disabilitas.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
