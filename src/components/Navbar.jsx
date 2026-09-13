import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import MoleculeLogo from './MoleculeLogo';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /* Selalu memiliki background solid-glassmorphic, border, dan bayangan bahkan saat mentok di paling atas (scrolled = 0) */
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-stone-200/90 dark:border-slate-800 ${
      scrolled ? 'shadow-md py-1' : 'shadow-sm py-2'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Molecular JCK Engineering Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            <MoleculeLogo className="w-9 h-9 sm:w-10 sm:h-10" />
            <div className="flex flex-col text-left">
              <span className="font-space text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors leading-tight">
                Jason Christov Kesuma
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-sky-600 dark:text-sky-400 uppercase">
                JCK ENGINEERING
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-xl text-xs font-space font-medium text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-2 p-2 rounded-xl text-slate-600 dark:text-sky-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-xl text-slate-600 dark:text-sky-400"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-xl text-slate-900 dark:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-stone-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-sm font-space font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-sky-400 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
