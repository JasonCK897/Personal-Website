import React from 'react';
import { contactData } from '../data/portfolio';
import { Mail, Linkedin, Github, Instagram, ArrowUp } from 'lucide-react';

const iconMap = {
  Mail: Mail,
  Linkedin: Linkedin,
  Github: Github,
  Instagram: Instagram,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-16 pb-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Navy Anchor Box */}
        <div className="section-box-navy p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Identity */}
          <div className="text-center md:text-left">
            <div className="font-space font-bold text-white text-lg mb-1">
              Jason Christov Kesuma
            </div>
            <p className="text-xs text-slate-400 font-mono">
              &copy; {currentYear} &bull; Full-Stack Web, Embedded Systems &amp; Intelligent Computing.
            </p>
          </div>

          {/* Social Channels (Direct Clickable Icons without raw URLs) */}
          <div className="flex items-center gap-2.5">
            {contactData.channels.map((ch) => {
              const Icon = iconMap[ch.icon] || Mail;
              return (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ch.label}
                  className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-all duration-200"
                  title={ch.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 hover:text-white transition-colors group px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 hover:bg-slate-700"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
