import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Dynamic Ambient Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-400/15 dark:bg-sky-500/20 rounded-full blur-3xl ambient-glow"></div>
      <div className="absolute top-2/3 -right-32 w-96 h-96 bg-indigo-500/10 dark:bg-sky-600/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/2 left-2 w-80 h-80 bg-amber-400/10 dark:bg-cyan-400/15 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute bottom-1/4 right-4 w-72 h-72 bg-blue-400/10 dark:bg-indigo-600/15 rounded-full blur-3xl ambient-glow"></div>

      {/* Left Flank Circuit Bus & Tech Glyphs (Visible on lg screens and up) */}
      <div className="hidden lg:flex flex-col items-center justify-between absolute left-2 xl:left-8 top-28 bottom-20 w-12 text-slate-400/80 dark:text-slate-500/80 font-mono text-xs pointer-events-none">
        
        {/* Node 1 */}
        <div className="animate-float-slow flex flex-col items-center gap-1.5">
          <div className="px-1.5 py-0.5 rounded border border-sky-400/40 bg-sky-400/10 text-[9px] font-bold text-sky-600 dark:text-sky-400 shadow-sm">
            &lt;DEV /&gt;
          </div>
          <div className="relative w-0.5 h-16 bg-slate-300/40 dark:bg-slate-700/50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-sky-400 data-stream-pulse"></div>
          </div>
        </div>

        {/* Node 2 */}
        <div className="animate-float-reverse flex flex-col items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-sky-400/50 relative flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-sky-400/30 animate-ping absolute"></div>
          </div>
          <span className="text-[10px] font-semibold text-brand-blue/70 dark:text-sky-300/70 tracking-wider">0x7F</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-sky-400/30 via-slate-300/40 dark:via-slate-700/40 to-transparent"></div>
        </div>

        {/* Node 3 */}
        <div className="animate-float-slow flex flex-col items-center gap-1">
          <span className="text-xs text-slate-400/70 font-space font-bold">// SYS</span>
          <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400/60 animate-pulse"></div>
          <div className="w-0.5 h-12 bg-slate-300/30 dark:bg-slate-700/30"></div>
          <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold tracking-tighter">ONLINE</span>
        </div>

        {/* Node 4 */}
        <div className="animate-float-reverse flex flex-col items-center gap-1">
          <span className="text-[9px] font-mono text-slate-400/60">48.0MHz</span>
          <div className="w-0.5 h-14 bg-gradient-to-b from-transparent via-slate-400/30 to-transparent"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400/40"></div>
        </div>
      </div>

      {/* Right Flank Circuit Bus & Tech Glyphs (Visible on lg screens and up) */}
      <div className="hidden lg:flex flex-col items-center justify-between absolute right-2 xl:right-8 top-32 bottom-20 w-12 text-slate-400/80 dark:text-slate-500/80 font-mono text-xs pointer-events-none">
        
        {/* Node 1 */}
        <div className="animate-float-reverse flex flex-col items-center gap-1.5">
          <div className="w-0.5 h-16 bg-slate-300/40 dark:bg-slate-700/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-sky-400 data-stream-pulse"></div>
          </div>
          <div className="px-1.5 py-0.5 rounded border border-brand-blue/30 dark:border-sky-400/30 bg-brand-blue/5 dark:bg-sky-400/10 text-[9px] font-bold text-brand-blue dark:text-sky-300">
            STM32
          </div>
        </div>

        {/* Node 2 */}
        <div className="animate-float-slow flex flex-col items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-indigo-400/50 relative flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-indigo-400/30 animate-ping absolute"></div>
          </div>
          <span className="text-[9px] font-semibold text-indigo-500 dark:text-indigo-300">SUI::MOVE</span>
          <div className="w-0.5 h-14 bg-gradient-to-b from-indigo-400/30 to-transparent"></div>
        </div>

        {/* Node 3 */}
        <div className="animate-float-reverse flex flex-col items-center gap-1">
          <span className="text-xs font-mono text-sky-500/60 dark:text-sky-400/60">&#123; AI &#125;</span>
          <div className="w-0.5 h-12 bg-slate-300/30 dark:bg-slate-700/30"></div>
          <span className="text-[9px] font-mono text-slate-400/60">HMI_LAB</span>
        </div>

        {/* Node 4 */}
        <div className="animate-float-slow flex flex-col items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-pulse"></div>
          <div className="relative w-0.5 h-14 bg-slate-300/40 dark:bg-slate-700/40 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-cyan-400 data-stream-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          <span className="text-[9px] font-mono text-slate-400/50">2026.1</span>
        </div>
      </div>

    </div>
  );
}

