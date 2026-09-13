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
    <footer className="bg-slate-950 dark:bg-cyber-bg text-slate-400 py-10 border-t border-slate-800 dark:border-cyber-border transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Identity */}
          <div className="text-center md:text-left">
            <div className="font-space font-semibold text-white text-base mb-0.5">
              Jason Christov Kesuma
            </div>
            <p className="text-xs text-slate-500 font-mono">
              &copy; {currentYear} &bull; Embedded Systems, Firmware &amp; Web3.
            </p>
          </div>

          {/* Social Channels (Direct Clickable Icons Tanpa URL Mentah) */}
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
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-all"
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
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors group px-3 py-1.5 rounded-lg hover:bg-slate-900"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
