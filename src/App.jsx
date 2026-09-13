import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative transition-colors duration-300 overflow-x-hidden">
        {/* Background Animation & Tech Circuits */}
        <BackgroundEffects />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections with Box Architecture (Optimized Compact Spacing) */}
        <main className="flex-1 space-y-2 sm:space-y-3 relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Publications />
          <Contact />
        </main>

        {/* Anchored Full-Width Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
