import React from 'react';

export default function MoleculeLogo({ className = "w-9 h-9 sm:w-10 sm:h-10" }) {
  return (
    <div className={`relative flex items-center justify-center ${className} group-hover:rotate-6 transition-transform duration-300`}>
      <svg viewBox="0 0 120 120" className="w-full h-full select-none drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="molGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <radialGradient id="atomGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Atomic Aura */}
        <circle cx="60" cy="60" r="46" fill="url(#atomGlow)" />

        {/* Electron Orbit 1 (Tilted -35deg) */}
        <ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="20"
          stroke="#38BDF8"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          className="opacity-70 dark:opacity-80"
          transform="rotate(-35 60 60)"
        />

        {/* Electron Orbit 2 (Tilted +35deg) */}
        <ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="20"
          stroke="#818CF8"
          strokeWidth="1.6"
          strokeDasharray="4 3"
          className="opacity-70 dark:opacity-80"
          transform="rotate(35 60 60)"
        />

        {/* Vertical Orbital Ring */}
        <ellipse
          cx="60"
          cy="60"
          rx="20"
          ry="52"
          stroke="#0EA5E9"
          strokeWidth="1.2"
          className="opacity-50 dark:opacity-60"
        />

        {/* Covalent Chemical Bonds (Connecting core to valence atoms) */}
        <line x1="60" y1="60" x2="16" y2="34" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" className="opacity-75" />
        <line x1="60" y1="60" x2="104" y2="34" stroke="#818CF8" strokeWidth="2.2" strokeLinecap="round" className="opacity-75" />
        <line x1="60" y1="60" x2="60" y2="112" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" className="opacity-75" />

        {/* Outer Valence Atoms / Functional Groups */}
        {/* Node 1: Top-Left (Sky Blue Atom) */}
        <circle cx="16" cy="34" r="6" className="fill-sky-400 stroke-white dark:stroke-slate-900" strokeWidth="2" />
        <circle cx="16" cy="34" r="2.2" fill="#FFFFFF" />

        {/* Node 2: Top-Right (Indigo Atom) */}
        <circle cx="104" cy="34" r="6" className="fill-indigo-400 stroke-white dark:stroke-slate-900" strokeWidth="2" />
        <circle cx="104" cy="34" r="2.2" fill="#FFFFFF" />

        {/* Node 3: Bottom (Cyan Atom) */}
        <circle cx="60" cy="112" r="6" className="fill-cyan-400 stroke-white dark:stroke-slate-900" strokeWidth="2" />
        <circle cx="60" cy="112" r="2.2" fill="#FFFFFF" />

        {/* Orbiting Satellite Electrons (Pulsing particles) */}
        <circle cx="95" cy="78" r="2.5" className="fill-sky-300 animate-pulse" />
        <circle cx="25" cy="78" r="2.5" className="fill-indigo-300 animate-pulse" />

        {/* Central Nucleus: Hexagonal Shield Core */}
        <polygon
          points="60,37 79,48 79,72 60,83 41,72 41,48"
          className="fill-slate-900 dark:fill-[#0F172A] stroke-sky-400"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* JCK Monogram in Center */}
        <text
          x="60"
          y="65"
          textAnchor="middle"
          className="font-space font-bold fill-white select-none"
          fontSize="13"
          letterSpacing="1"
        >
          JCK
        </text>
      </svg>
    </div>
  );
}
