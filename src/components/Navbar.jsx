import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/80 dark:bg-cyber-bg/90 backdrop-blur-md shadow-lg border-b border-slate-800 dark:border-cyber-border' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-space text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
              Jason Christov Kesuma
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-xs font-space font-medium text-slate-600 dark:text-cyber-textMuted hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-cyber-card transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className="ml-2 p-2 rounded-lg text-slate-600 dark:text-cyber-sky hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-cyber-card transition-colors"
              title={isDark ? "Mode Terang" : "Mode Gelap"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className="p-2 rounded-lg text-slate-600 dark:text-cyber-sky"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="p-2 rounded-lg text-slate-900 dark:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-cyber-surface/95 backdrop-blur-lg border-b border-slate-200 dark:border-cyber-border px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-space font-medium text-slate-700 dark:text-cyber-textMuted hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-cyber-card transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
