import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#1B2A4A] text-white transition-all duration-300 ${
      scrolled ? 'shadow-lg border-b border-[#1B3B6F]' : 'border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand / Name: Full Name Required */}
          <a 
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#8FB8E0] rounded-md py-1 px-1.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#8FB8E0] group-hover:scale-125 transition-transform"></span>
            <span className="font-space text-lg sm:text-xl font-bold tracking-tight text-[#F7F4EE] group-hover:text-[#8FB8E0] transition-colors">
              Jason Christov Kesuma
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#B9C4D9] hover:text-[#F7F4EE] hover:bg-[#1B3B6F]/40 transition-colors focus:outline-none focus:ring-1 focus:ring-[#8FB8E0]"
              >
                {link.name}
              </a>
            ))}

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className="ml-3 p-2 rounded-lg text-[#8FB8E0] hover:text-white hover:bg-[#1B3B6F] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8FB8E0]"
              title={isDark ? "Mode Terang" : "Mode Gelap"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Beralih ke mode terang" : "Beralih ke mode gelap"}
              className="p-2 rounded-lg text-[#8FB8E0] hover:text-white hover:bg-[#1B3B6F] transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="p-2 rounded-lg text-[#F7F4EE] hover:text-[#8FB8E0] hover:bg-[#1B3B6F] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#15223C] border-b border-[#1B3B6F] px-4 pt-2 pb-6 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#B9C4D9] hover:text-[#F7F4EE] hover:bg-[#1B3B6F] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
