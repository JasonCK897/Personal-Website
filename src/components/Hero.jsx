import React, { useEffect, useRef, useState } from 'react';
import { personalData } from '../data/portfolio';
import { FileText, Send, MapPin, Globe, Cpu, Brain, Layers, ArrowUpRight } from 'lucide-react';

const domainIcons = {
  Globe: Globe,
  Cpu: Cpu,
  Brain: Brain,
  Layers: Layers,
};

export default function Hero() {
  const canvasRef = useRef(null);
  const [activeDomain, setActiveDomain] = useState(0);

  // Interactive Particle Grid Canvas (Responds to mouse movement)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const numParticles = Math.min(Math.floor(width / 25), 45);
    let mouse = { x: null, y: null, radius: 120 };

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
      });
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(30, 59, 111, ${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw & Move Particles
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance/attraction interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="pt-24 pb-2 sm:pt-28 sm:pb-3 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contrasting Hero Container Box */}
        <div className="section-box p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          {/* Interactive Particle Canvas in Background */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 pointer-events-none z-0 opacity-70 dark:opacity-40"
          ></canvas>

          {/* Decorative Corner Tech Accents */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-sky-400/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10">
            
            {/* Left Column: Info & Multi-Disciplinary Badges */}
            <div className="flex-1 text-center lg:text-left">
              
              {/* Telemetry Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-700 dark:text-sky-300 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="font-semibold tracking-wider">AVAILABLE FOR PROJECTS &bull; MALANG, ID</span>
              </div>

              {/* Full Name */}
              <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
                {personalData.name}
              </h1>

              {/* Tagline */}
              <p className="font-space text-lg sm:text-xl font-medium text-brand-blue dark:text-sky-400 mb-5">
                {personalData.tagline}
              </p>

              {/* Bio */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                {personalData.bio}
              </p>

              {/* Interactive Domain Pills (Clickable Highlights) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 text-left">
                {personalData.domains.map((dom, idx) => {
                  const Icon = domainIcons[dom.icon] || Globe;
                  return (
                    <div
                      key={dom.name}
                      onClick={() => setActiveDomain(idx)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                        activeDomain === idx 
                          ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950 border-slate-900 dark:border-sky-400 shadow-md' 
                          : 'bg-white/80 dark:bg-slate-800/60 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-400'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-sky-400" />
                        <span className="text-xs font-space font-bold truncate">{dom.name}</span>
                      </div>
                      <div className="text-[10px] font-mono opacity-80 truncate">{dom.count}</div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href={personalData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-space text-sm font-semibold bg-brand-blue text-white hover:bg-slate-900 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300 shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <FileText className="w-4 h-4" />
                  View CV
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-space text-sm font-semibold border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Contact Me
                </a>
              </div>

            </div>

            {/* Right Column: High-End Monogram Avatar with Double Orbit Trails */}
            <div className="flex-shrink-0 flex items-center justify-center py-4">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
                
                {/* Outer Orbit Ring (Navy / Sky Blue Trail) */}
                <div className="orbit-ring-outer" aria-hidden="true"></div>

                {/* Inner Orbit Ring (Sky Blue / Cyan Trail) */}
                <div className="orbit-ring-inner" aria-hidden="true"></div>

                {/* Avatar Frame */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-slate-950 border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 flex items-center justify-center">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-full object-cover select-none"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/avatar.svg';
                    }}
                  />
                </div>

                {/* Floating Interactive Badge (Subtle Motion) */}
                <div className="absolute -bottom-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-brand-blue dark:text-sky-400 shadow-lg flex items-center gap-2 z-20 animate-float-slow">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>INFORMATICS &bull; 3.49 GPA</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
