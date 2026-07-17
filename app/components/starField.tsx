'use client';

import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback } from 'react';
import type { Container, Engine } from '@tsparticles/engine';

export default function Starfield() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      
      className="fixed inset-0 z-0"
      options={{
        background: {
          color: {
            value: "#0a0a12"
          }
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              
            }
          },
          color: {
            value: ["#ffffff", "#ffd700", "#6c2bd9", "#00ff41"]
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 0.3, max: 1.5 }
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out"
            }
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            }
          },
          modes: {
            bubble: {
              distance: 100,
              size: 2,
              duration: 0.5
            }
          }
        }
      }}
    />
  );
}