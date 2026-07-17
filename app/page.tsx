'use client';

import { useState } from 'react';
import BootSequence from './components/bootSequence';
import Starfield from './components/starField';

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);

  if (!bootComplete) {
    return (
      <>
        <Starfield />
        <BootSequence onComplete={() => setBootComplete(true)} />
      </>
    );
  }

  // Simple test content after boot
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a12]">
      <div className="text-center">
        <h1 className="text-4xl font-mono text-[#00ff41]">
          Boot Complete!
        </h1>
        <p className="text-xl mt-4 text-[#6c2bd9] font-mono">
          Welcome to your space portfolio
        </p>
        <button 
          onClick={() => setBootComplete(false)}
          className="mt-8 px-6 py-2 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10 transition font-mono"
        >
          Reboot
        </button>
      </div>
    </main>
  );
}