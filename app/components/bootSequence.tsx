'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, CheckCircle, Loader2, Power, Volume2, Monitor, Sliders, Wifi, HardDrive, Cpu } from 'lucide-react';

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
  { text: 'Loading User Profile: LAWRENCE', type: 'info' },
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
    }, 1000);

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
      case 'ok': return 'text-emerald-400 font-medium';
      case 'loading': return 'text-amber-300';
      case 'info': return 'text-blue-300';
      default: return 'text-zinc-500';
    }
  };

  const getLogIcon = (type: LogEntry['type']) => {
    switch (type) {
      case 'ok': return <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />;
      case 'loading': return <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-spin flex-shrink-0" />;
      case 'info': return <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />;
      default: return null;
    }
  };

  const getLogPrefix = (type: LogEntry['type']): string => {
    switch (type) {
      case 'ok': return '[OK]';
      case 'loading': return '[..]';
      case 'info': return '[INFO]';
      default: return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-[#0a0a0f] flex items-center justify-center"
      style={{
        padding: 'clamp(8px, 2vw, 24px)',
      }}
    >
      {/* Main Container - using vh/vw for mobile enforcement */}
      <div 
        className="flex flex-col lg:flex-row bg-[#14141a] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/5"
        style={{
          width: 'min(100%, 94vw)',
          height: 'min(100%, 94vh)',
          maxHeight: 'min(100%, 100vh)',
        }}
      >
        
        {/* Terminal Screen */}
        <div className="flex-1 flex flex-col bg-[#0d0d12] px-3 sm:p-5 md:p-6 lg:p-7 min-h-0">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-3 sm:mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
              <span className="text-[10px] sm:text-sm text-white/60 font-mono font-medium tracking-wider uppercase">
                Spaceship • Boot Sequence
              </span>
            </div>
            <span className="text-[8px] sm:text-xs text-white/30 font-mono tracking-widest">
              v2.1
            </span>
          </div>

          {/* Logs - Bigger text */}
          <div
            ref={terminalRef}
            className="flex-1 font-mono text-[16px] sm:text-base md:text-lg overflow-y-auto scrollbar-thin scrollbar-thumb-white/5 scrollbar-track-transparent pr-1 space-y-2 sm:space-y-2.5"
          >
            {visibleLogs.map((log, index) => (
              <div
                key={index}
                className={`${getLogStyle(log.type)} leading-relaxed flex items-start gap-2 sm:gap-3`}
              >
                {log.type !== 'empty' && (
                  <>
                    <span className="text-gray-200 font-bold tracking-wider select-none text-[15px] sm:text-xs min-w-[32px] sm:min-w-[44px]">
                      {getLogPrefix(log.type)}
                    </span>
                    <span className="mt-0.5 flex-shrink-0">{getLogIcon(log.type)}</span>
                    <span className="break-all">{log.text}</span>
                  </>
                )}
                {log.type === 'empty' && <div className="h-1.5" />}
              </div>
            ))}

            {showCursor && (
              <div className="flex items-center gap-3 mt-3">
                <span className="inline-block w-2 h-4 sm:h-5 bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.5)] animate-pulse" />
                <span className="text-[8px] sm:text-xs text-white/40 font-mono tracking-widest uppercase animate-pulse">
                  Awaiting authorization...
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
            <div className="h-1 sm:h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{
                  width: `${Math.min((visibleLogs.length / bootLogs.length) * 100, 100)}%`,
                }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 shadow-lg shadow-emerald-400/30"
              />
            </div>
            <div className="flex justify-between items-center mt-1.5 sm:mt-2">
              <span className="text-[7px] sm:text-[10px] text-white/20 font-mono tracking-widest uppercase">
                System Initialization
              </span>
              <span className="text-[7px] sm:text-[10px] text-emerald-400/60 font-mono font-bold">
                {Math.round(Math.min((visibleLogs.length / bootLogs.length) * 100, 100))}%
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Control Panel Side */}
        <div className="flex lg:flex-col justify-between items-center lg:items-stretch gap-2 sm:gap-4 p-3 sm:p-5 lg:p-6 bg-[#111116] border-t lg:border-t-0 lg:border-l border-white/5 lg:w-48 shrink-0">
          
          {/* Top section - Status & Indicators */}
          <div className="w-full flex flex-col gap-2 sm:gap-3">
            {/* Status */}
            <div className="flex flex-col bg-[#0d0d12] rounded-lg p-2 sm:p-3 border border-white/5">
              <span className="text-[7px] sm:text-[8px] text-white/30 font-mono tracking-widest uppercase mb-1 sm:mb-1.5">
                System Status
              </span>
              <div className="font-mono text-xs sm:text-base font-medium tracking-wider">
                {visibleLogs.length < bootLogs.length ? (
                  <span className="text-amber-400 flex items-center gap-1.5 sm:gap-2">
                    <Loader2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 animate-spin" />
                    BOOTING
                  </span>
                ) : (
                  <span className="text-emerald-400 flex items-center gap-1.5 sm:gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    ONLINE
                  </span>
                )}
              </div>
            </div>

            {/* Hardware indicators */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              <div className="bg-[#0d0d12] rounded-lg p-2 sm:p-2.5 border border-white/5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/30" />
                  <div className="flex-1">
                    <div className="text-[5px] sm:text-[6px] text-white/20 font-mono tracking-widest uppercase">CPU</div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-400 font-mono font-bold">98%</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0d0d12] rounded-lg p-2 sm:p-2.5 border border-white/5">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <HardDrive className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/30" />
                  <div className="flex-1">
                    <div className="text-[5px] sm:text-[6px] text-white/20 font-mono tracking-widest uppercase">MEM</div>
                    <div className="text-[8px] sm:text-[10px] text-emerald-400 font-mono font-bold">64GB</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle section - Controls */}
          <div className="w-full flex flex-col gap-1.5 sm:gap-2">
            {/* Slider controls */}
            <div className="bg-[#0d0d12] rounded-lg p-2 sm:p-3 border border-white/5">
              <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                <span className="text-[6px] sm:text-[7px] text-white/30 font-mono tracking-widest uppercase">Volume</span>
                <Volume2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/30" />
              </div>
              <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-emerald-400/50 to-emerald-400 rounded-full" />
              </div>
              <div className="flex justify-between mt-0.5 sm:mt-1">
                <span className="text-[5px] sm:text-[6px] text-white/10 font-mono">0</span>
                <span className="text-[5px] sm:text-[6px] text-white/10 font-mono">100</span>
              </div>
            </div>

            {/* Dial controls */}
            <div className="bg-[#0d0d12] rounded-lg p-2 sm:p-3 border border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-[6px] sm:text-[7px] text-white/30 font-mono tracking-widest uppercase">Brightness</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 shadow-inner flex items-center justify-center">
                    <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/20 rounded-full rotate-45" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10 shadow-inner flex items-center justify-center">
                    <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white/20 rounded-full -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - Power & Network */}
          <div className="w-full flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between bg-[#0d0d12] rounded-lg p-2 sm:p-3 border border-white/5">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Wifi className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400/60" />
                <div className="flex flex-col">
                  <span className="text-[5px] sm:text-[6px] text-white/20 font-mono tracking-widest uppercase">Network</span>
                  <span className="text-[6px] sm:text-[8px] text-emerald-400/60 font-mono font-bold">Connected</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-emerald-400/60 rounded-sm" />
                  <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-emerald-400/60 rounded-sm" />
                  <div className="w-0.5 h-2.5 sm:w-1 sm:h-4 bg-emerald-400 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Power button */}
            <div className="bg-[#0d0d12] rounded-lg p-2 sm:p-3 border border-white/5 flex items-center justify-between">
              <span className="text-[6px] sm:text-[7px] text-white/30 font-mono tracking-widest uppercase">Power</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
                <Power className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400/60" />
              </div>
            </div>

            {/* Model info - desktop */}
            <div className="hidden lg:block text-[6px] sm:text-[7px] text-white/10 font-mono tracking-widest text-center leading-relaxed bg-[#0d0d12] rounded-lg p-2 border border-white/5">
              <div className="text-white/20 font-bold text-[7px] sm:text-[8px]">NEXUS-X</div>
              <div className="text-white/10">v2.1.0</div>
              <div className="text-white/5 mt-1">━━━━━━━━━━</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}