'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ThrusterIndicator() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 20,
    mass: 0.5 
  });
  
  const speedVelocity = useTransform(smoothProgress, [0, 1], [11200, 40300]);
  const [displaySpeed, setDisplaySpeed] = useState(11200);

  // Handle scroll activity detection with instant response
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScrollActivity = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 400);
    };

    window.addEventListener('scroll', handleScrollActivity, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollActivity);
      clearTimeout(timeout);
    };
  }, []);

  // Listen to speed changes
  useMotionValueEvent(speedVelocity, "change", (latest) => {
    setDisplaySpeed(Math.round(latest));
  });

  const flameHeight = isScrolling ? 100 : 35;
  const flameGlow = isScrolling 
    ? '0px 0px 25px rgba(249, 115, 22, 0.8)' 
    : '0px 0px 10px rgba(52, 211, 153, 0.4)';

  const flameColor = isScrolling
    ? 'linear-gradient(to bottom, #ffffff, #f97316, #ea580c, transparent)'
    : 'linear-gradient(to bottom, #ffffff, #34d399, #059669, transparent)';

  return (
    <div 
      className={`fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 sm:gap-4 font-mono select-none pointer-events-none origin-right scale-75 xl:scale-100 ${
        /* On Mobile (< xl): Hide instantly when stationary, display immediately when scrolling.
           On Desktop (>= xl): Always visible via xl:flex */
        isScrolling ? 'flex' : 'hidden xl:flex'
      }`}
    >
      {/* Velocity Display */}
      <div className="bg-black/80 backdrop-blur-md border border-white/5 rounded-xl p-2.5 sm:p-3 text-right min-w-[105px] sm:min-w-[120px] shadow-2xl">
        <div className="text-[7px] sm:text-[8px] text-white/30 font-bold tracking-widest uppercase mb-0.5">
          Velocity
        </div>
        <div className={`text-xs sm:text-sm font-sans font-bold transition-colors duration-300 ${
          isScrolling ? 'text-orange-400' : 'text-emerald-400'
        }`}>
          {displaySpeed.toLocaleString()} <span className="text-[8px] sm:text-[9px] font-mono">KM/H</span>
        </div>
        <div className="text-[7px] sm:text-[8px] text-white/40 mt-1 uppercase tracking-wider font-bold">
          {isScrolling ? '🚀 WARP_ENGAGED' : '🛸 ORBIT_STEADY'}
        </div>
      </div>

      {/* Engine Housing */}
      <div className="w-7 h-20 sm:w-8 sm:h-24 bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-800 rounded-t-xl relative flex flex-col justify-between items-center py-2 shadow-xl">
        <div className={`w-1 h-1 rounded-full animate-ping absolute -top-0.5 ${
          isScrolling ? 'bg-orange-500' : 'bg-red-500'
        }`} />
        <div className="w-2.5 sm:w-3 h-0.5 bg-white/10 rounded" />
        <div className="text-[6px] sm:text-[7px] font-black text-neutral-600 scale-90">NX</div>
        <div className="w-4 sm:w-5 h-2 sm:h-2.5 bg-neutral-800 rounded-b border-t border-neutral-700" />
      </div>

      {/* Thruster Flame */}
      <motion.div
        animate={{ 
          height: flameHeight,
          background: flameColor
        }}
        style={{ 
          boxShadow: flameGlow,
          transformOrigin: 'top center'
        }}
        transition={{ 
          type: 'spring', 
          stiffness: 90, 
          damping: 15,
          mass: 0.3
        }}
        className="w-1.5 rounded-b-full"
      />
    </div>
  );
}