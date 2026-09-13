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
    <footer className="w-full mt-6 bg-[#0E1626] dark:bg-[#070C16] border-t border-stone-200 dark:border-slate-800 text-slate-400 transition-colors duration-200 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Identity & Copyright */}
          <div className="text-center md:text-left">
            <div className="font-space font-bold text-white text-base tracking-tight flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>Jason Christov Kesuma</span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              &copy; {currentYear} &bull; Full-Stack Web, Embedded Systems &amp; Intelligent Computing.
            </p>
          </div>

          {/* Social Channels (Clickable icons without raw URLs) */}
          <div className="flex items-center gap-2">
            {contactData.channels.map((ch) => {
              const Icon = iconMap[ch.icon] || Mail;
              return (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ch.label}
                  className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/80 hover:border-sky-400 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-all duration-200"
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
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 hover:text-white transition-colors group px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:bg-slate-700"
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
