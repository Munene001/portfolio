'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, CheckCircle, Loader2 } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

interface LogEntry {
  text: string;
  type: 'ok' | 'loading' | 'info' | 'empty';
}

const bootLogs: LogEntry[] = [
  { text: 'Starting System Logging Service...', type: 'loading' },
  { text: 'Started System Logging Service', type: 'ok' },
  { text: 'Starting Network Manager...', type: 'loading' },
  { text: 'Started Network Manager', type: 'ok' },
  { text: 'Loading AI Core v2.0...', type: 'loading' },
  { text: 'AI Core loaded successfully', type: 'ok' },
  { text: 'Calibrating Navigation Systems...', type: 'loading' },
  { text: 'Navigation Systems calibrated', type: 'ok' },
  { text: 'Initializing Thrusters...', type: 'loading' },
  { text: 'Thrusters online', type: 'ok' },
  { text: 'Connecting to GitHub Repository...', type: 'loading' },
  { text: 'Repository connected', type: 'ok' },
  { text: 'Loading User Profile: COMMANDER', type: 'info' },
  { text: '', type: 'empty' },
  { text: 'SYSTEM READY - Welcome Aboard, Commander', type: 'ok' },
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLogs, setVisibleLogs] = useState<LogEntry[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showCursor, setShowCursor] = useState<boolean>(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    const showNextLog = () => {
      if (currentIndex < bootLogs.length) {
        const log = bootLogs[currentIndex];
        setVisibleLogs((prev) => [...prev, log]);
        setCurrentIndex((prev) => prev + 1);
        
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        setShowCursor(true);
      }
    };

    const initialTimer = setTimeout(showNextLog, 100);

    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        showNextLog();
      } else {
        clearInterval(interval);
      }
    }, 180);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [currentIndex, onComplete]);

  const getLogStyle = (type: LogEntry['type']): string => {
    switch (type) {
      case 'ok': return 'text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.85)] font-bold';
      case 'loading': return 'text-amber-300 drop-shadow-[0_0_5px_rgba(251,191,36,0.7)]';
      case 'info': return 'text-fuchsia-300 drop-shadow-[0_0_5px_rgba(232,121,249,0.7)]';
      default: return 'text-zinc-500';
    }
  };

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'ok': return <CheckCircle className="w-4 h-4 text-emerald-400 drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]" />;
      case 'loading': return <Loader2 className="w-4 h-4 text-amber-300 animate-spin" />;
      case 'info': return <User className="w-4 h-4 text-fuchsia-300" />;
      default: return null;
    }
  };

  const getLogPrefix = (type: LogEntry['type']): string => {
    switch (type) {
      case 'ok': return '[  OK  ]';
      case 'loading': return '[  ..  ]';
      case 'info': return '[ INFO ]';
      default: return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
      // Responsive constraints: perfectly padded framework on PC, minimal containment margins on mobile screens
      className="fixed inset-0 z-50 bg-[#040406] w-screen h-screen flex flex-col items-center justify-center overflow-hidden select-none p-3 sm:p-6 lg:p-12 xl:p-16"
    >
      {/* Heavy Steel Monitor Bezel - collapses beautifully down to structural bounds on small viewports */}
      <div className="w-full h-full max-w-6xl max-h-[820px] flex flex-col lg:flex-row bg-gradient-to-b from-[#242428] via-[#18181c] to-[#111114] rounded-xl sm:rounded-[2rem] p-3 sm:p-5 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9),inset_0_0_30px_rgba(0,0,0,0.8)] border border-neutral-800 relative">
        
        {/* Left Side: The Cathode Tube Screen Glass */}
        <div className="flex-1 flex flex-col relative bg-[#010102] rounded-lg sm:rounded-[1.4rem] p-2 sm:p-3 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-2 sm:border-4 border-neutral-900 overflow-hidden">
          
          {/* CRT Spherical Curve Wrapper */}
          <div 
            className="w-full h-full flex flex-col bg-[#020503] relative rounded-md sm:rounded-lg overflow-hidden px-4 sm:px-8 py-5 sm:py-6"
            style={{ transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.012)' }}
          >
            {/* Amplified Ambient Screen On-Glow (Brightened Phosphor Matrix base) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.15)_0%,rgba(16,185,129,0.04)_60%,transparent_100%)] pointer-events-none z-10" />

            {/* High-Definition Scanlines Overlay - Low opacity black lines allow light elements to feel bright */}
            <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_60%,rgba(0,0,0,0.18)_40%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_3px,3px_100%]" />

            {/* Soft Screen Vignette & Glass Shadow Edge */}
            <div className="absolute inset-0 pointer-events-none z-40 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(0,0,0,0.6)_100%)]" />

            {/* Crisp Diagonal Monitor Glare Flare */}
            <div className="absolute inset-0 pointer-events-none z-40 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.05]" />

            {/* Terminal Interface Content */}
            <div className="w-full flex items-center justify-between border-b border-emerald-500/10 pb-3 mb-4 font-mono text-[10px] sm:text-xs relative z-20">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400/60 drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]" />
                <span className="text-emerald-400/80 font-bold tracking-widest uppercase drop-shadow-[0_0_3px_rgba(52,211,153,0.4)]">
                  MAIN_MAINFRAME // TERMINAL_A
                </span>
              </div>
              <span className="text-emerald-500/40 tracking-widest font-bold hidden sm:inline">SYS_BOOT_v2.1</span>
            </div>

            {/* Scrolling Logs Window */}
            <div 
              ref={terminalRef}
              className="flex-1 font-mono text-xs sm:text-sm overflow-y-auto scrollbar-none pr-1 space-y-2 flex flex-col justify-start relative z-20"
            >
              {visibleLogs.map((log, index) => (
                <div 
                  key={index} 
                  className={`${getLogStyle(log.type)} leading-relaxed flex items-start gap-2.5 sm:gap-3`}
                >
                  {log.type !== 'empty' && (
                    <>
                      <span className="text-emerald-400/30 font-black tracking-wider select-none text-[9px] sm:text-xs pt-0.5">
                        {getLogPrefix(log.type)}
                      </span>
                      <span className="mt-0.5 shrink-0">{getLogIcon(log.type)}</span>
                      <span className="tracking-wide break-all">{log.text}</span>
                    </>
                  )}
                  {log.type === 'empty' && <div className="h-2" />}
                </div>
              ))}
              
              {showCursor && (
                <div className="flex items-center mt-3 gap-3">
                  <span className="inline-block w-2.5 h-4.5 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1),0_0_4px_rgba(52,211,153,0.8)] animate-[pulse_0.6s_infinite]" />
                  <span className="text-emerald-400/60 text-xs tracking-widest font-bold uppercase drop-shadow-[0_0_4px_rgba(52,211,153,0.3)] animate-pulse">
                    Awaiting authorization key...
                  </span>
                </div>
              )}
            </div>

            {/* Linear Progress Feed */}
            <div className="mt-4 pt-3 border-t border-emerald-500/10 flex flex-col gap-2 relative z-20">
              <div className="h-1.5 bg-neutral-950 rounded-full overflow-hidden p-[1px] border border-neutral-900">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: `${Math.min((visibleLogs.length / bootLogs.length) * 100, 100)}%`,
                  }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-emerald-300 to-teal-300 shadow-[0_0_15px_rgba(52,211,153,0.9)]"
                />
              </div>
              <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-mono text-emerald-400/40 font-bold tracking-wider uppercase">
                <span>Core Array Matrix Status</span>
                <span className="text-emerald-400/60 drop-shadow-[0_0_3px_rgba(52,211,153,0.4)]">
                  {Math.round(Math.min((visibleLogs.length / bootLogs.length) * 100, 100))}%
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Console Control Panel Deck - Drops gracefully downward on small viewports, aligns perfectly on widescreen */}
        <div className="flex lg:flex-col justify-between items-center lg:items-stretch gap-4 px-2 lg:px-0 lg:pl-5 pt-3 lg:pt-0 lg:w-44 shrink-0">
          
          {/* Top Panel Dials: Exclusively showing on wide desktop monitors */}
          <div className="hidden lg:flex flex-col gap-4 p-3.5 bg-[#121216] border border-neutral-800/60 rounded-xl shadow-inner">
            <div className="flex justify-around items-center">
              {['BRIGHT', 'CONTRAST'].map((label) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <span className="text-[8px] font-bold text-neutral-500 tracking-wider font-mono uppercase">{label}</span>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-b from-neutral-600 to-neutral-800 border border-neutral-950 shadow relative transform rotate-45 flex items-center justify-center">
                    <div className="absolute top-0.5 w-1 h-1.5 bg-neutral-400 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1 px-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-[2px] bg-neutral-950 rounded border-b border-neutral-800/40" />
              ))}
            </div>
          </div>

          {/* Status Badge Housing */}
          <div className="flex-1 lg:flex-initial flex flex-col justify-center bg-[#0b0b0e] p-3 border border-neutral-800/60 rounded-xl shadow-inner min-w-[110px] h-14 lg:h-auto">
            <span className="text-[9px] text-neutral-500 font-bold font-mono tracking-widest uppercase mb-0.5 block">System Mode</span>
            <div className="font-mono text-xs font-bold tracking-wider">
              {visibleLogs.length < bootLogs.length ? (
                <span className="text-amber-400 flex items-center gap-2 drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]">
                  <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" /> BOOTING
                </span>
              ) : (
                <span className="text-emerald-400 flex items-center gap-2 drop-shadow-[0_0_5px_rgba(52,211,153,0.6)]">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0 animate-bounce" /> READY
                </span>
              )}
            </div>
          </div>

          {/* Power Switch Indicator */}
          <div className="flex items-center lg:flex-col justify-center gap-3 lg:gap-0 lg:p-2.5 bg-[#121216] border border-neutral-800/60 rounded-xl shadow-inner px-4 h-14 lg:h-auto shrink-0">
            <span className="text-[8px] font-mono font-bold text-neutral-500 tracking-widest lg:mb-1.5">PWR</span>
            <div className="w-6 h-9 lg:w-7 lg:h-11 bg-neutral-950 rounded p-1 flex flex-col justify-between items-center border border-neutral-800 shadow-md">
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded border border-emerald-300 flex items-center justify-center shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
              </div>
              <span className="text-[7px] font-black text-emerald-400 font-mono scale-90 hidden lg:inline">ON</span>
            </div>
          </div>

        </div>

        {/* Vintage Frame Branding Decal */}
        <div className="absolute bottom-1.5 left-6 text-neutral-600/30 text-[8px] font-bold tracking-widest font-mono pointer-events-none uppercase hidden sm:inline">
          Heavy Industrial Grid // Model Space-X20
        </div>
      </div>
    </motion.div>
  );
}