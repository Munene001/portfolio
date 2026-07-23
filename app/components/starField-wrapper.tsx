'use client';

import dynamic from 'next/dynamic';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

const Starfield = dynamic(() => import('./starField'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-[#0a0a12]" />
});

const handleInit = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function StarfieldProvider({ children }: { children?: React.ReactNode }) {
  return (
    <ParticlesProvider init={handleInit}>
      
      <Starfield />
      {children}
    </ParticlesProvider>
  );
}