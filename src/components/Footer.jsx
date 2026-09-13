import React from 'react';
import { contactData } from '../data/portfolio';
import { Mail, Linkedin, Github, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#1B2A4A] text-[#B9C4D9] py-12 border-t border-[#1B3B6F] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Identity */}
          <div className="text-center md:text-left">
            <div className="font-space font-semibold text-[#F7F4EE] text-base mb-1">
              Jason Christov Kesuma
            </div>
            <p className="text-xs text-[#8FA0BE]">
              &copy; {currentYear} Jason Christov Kesuma. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons (Ikon Saja) */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${contactData.email}`}
              aria-label="Kirim Email ke Jason"
              className="p-2.5 rounded-lg bg-[#15223C] text-[#8FB8E0] hover:text-white hover:bg-[#1B3B6F] transition-colors border border-[#1B3B6F]/40"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Profil LinkedIn Jason"
              className="p-2.5 rounded-lg bg-[#15223C] text-[#8FB8E0] hover:text-white hover:bg-[#1B3B6F] transition-colors border border-[#1B3B6F]/40"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Profil GitHub Jason"
              className="p-2.5 rounded-lg bg-[#15223C] text-[#8FB8E0] hover:text-white hover:bg-[#1B3B6F] transition-colors border border-[#1B3B6F]/40"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={contactData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kunjungi Profil Instagram Jason"
              className="p-2.5 rounded-lg bg-[#15223C] text-[#8FB8E0] hover:text-white hover:bg-[#1B3B6F] transition-colors border border-[#1B3B6F]/40"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top Link */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-space font-medium text-[#8FB8E0] hover:text-[#F7F4EE] transition-colors group px-3 py-1.5 rounded-lg hover:bg-[#1B3B6F]/40"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
