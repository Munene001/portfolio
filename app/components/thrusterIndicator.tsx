'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ThrusterIndicator() {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const speedVelocity = useTransform(smoothProgress, [0, 1], [11200, 40300]);
  const [displaySpeed, setDisplaySpeed] = useState(11200);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScrollActivity = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 400);
    };

    window.addEventListener('scroll', handleScrollActivity);
    return () => {
      window.removeEventListener('scroll', handleScrollActivity);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    return speedVelocity.onChange((v) => setDisplaySpeed(Math.round(v)));
  }, [speedVelocity]);

  const flameHeight = isScrolling ? 100 : 35;
  const flameGlow = isScrolling 
    ? '0px 0px 25px rgba(249, 115, 22, 0.8)' 
    : '0px 0px 10px rgba(52, 211, 153, 0.4)';

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-4 font-mono select-none pointer-events-none">
      <div className="bg-black/70 backdrop-blur-md border border-white/5 rounded-xl p-3 text-right min-w-[120px] shadow-2xl">
        <div className="text-[8px] text-white/30 font-bold tracking-widest uppercase mb-0.5">Velocity</div>
        <div className={`text-sm font-sans font-bold transition-colors duration-300 ${isScrolling ? 'text-orange-400' : 'text-emerald-400'}`}>
          {displaySpeed.toLocaleString()} <span className="text-[9px] font-mono">KM/H</span>
        </div>
        <div className="text-[8px] text-white/40 mt-1 uppercase tracking-wider font-bold">
          {isScrolling ? '🚀 WARP_ENGAGED' : '🛸 ORBIT_STEADY'}
        </div>
      </div>

      <div className="w-8 h-24 bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-800 rounded-t-xl relative flex flex-col justify-between items-center py-2 shadow-xl">
        <div className="w-1 h-1 rounded-full bg-red-500 animate-ping absolute -top-0.5" />
        <div className="w-3 h-0.5 bg-white/10 rounded" />
        <div className="text-[7px] font-black text-neutral-600 scale-90">NX</div>
        <div className="w-5 h-2.5 bg-neutral-800 rounded-b border-t border-neutral-700" />
      </div>

      <motion.div
        animate={{ 
          height: flameHeight,
          background: isScrolling 
            ? 'linear-gradient(to bottom, #ffffff, #f97316, transparent)' 
            : 'linear-gradient(to bottom, #ffffff, #34d399, transparent)'
        }}
        style={{ boxShadow: flameGlow }}
        transition={{ type: 'spring', stiffness: 90, damping: 15 }}
        className="w-1.5 rounded-b-full transform origin-top"
      />
    </div>
  );
}