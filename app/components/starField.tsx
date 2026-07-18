'use client';

import Particles from '@tsparticles/react';

export default function Starfield() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0"
      options={{
        background: {
          color: {
            // STEP 1: Deep Space Gradient (Radial)
            value: "#0a0a12" // Deep base color
          },
          // Modern addition: Apply radial gradient via background image
          // This simulates the brighter galactic center fading to void.
          image: "radial-gradient(circle at center, #1a1a30 0%, #0a0a12 70%, #050509 100%)",
          position: "center",
          repeat: "no-repeat",
          size: "cover"
        },
        particles: {
          number: {
            // STEP 3: Increase density for a rich field
            value: 200, 
            density: {
              enable: true,
              width:650,
              height:650
               // default area, gives rich density at 200 particles
            }
          },
          // STEP 2: Space Realistic Palette (with rare accents)
          color: {
            // 85% variations of white/pale blue, 15% vibrant rare colors
            value: [
              "#ffffff", // pure white (majority)
              "#fffaf0", // floral white (slight warmth)
              "#e0f7fa", // cyan/pale blue (nebula tint)
              "#ffd700", // gold (rare yellow dwarf)
              "#ff4500", // orange/red (rare red giant)
              "#6c2bd9"  // fuchsia/violet (very rare)
            ]
          },
          shape: {
            type: "circle"
          },
          size: {
        
            value: { min: 0.5, max: 1.2 },
            
            random: { enable: true, minimumValue: 0.2 }
          },
          move: {
            enable: true,
            speed: { min: 0.03, max: 0.1 }, 
            direction: "none",
            random: true, 
            straight: false,
            outModes: {
              default: "out"
            }
          },
          opacity: {
            value: { min: 0.05, max: 0.9 },
            animation: {
              enable: true,
              speed: { min: 0.1, max: 0.6 }, 
              sync: false, // Twinkle independently
              startValue: "random",
              destroy: "none"
            }
          },
          // STEP 7: Add Atmospheric 'Glow' (Box Shadow)
          shadow: {
            enable: true,
            color: "rgba(255, 255, 255, 0.5)", // soft white glow
            blur: 4, 
            type: "box"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab" 
            },
            onClick: {
              enable: true,
              mode: "push" 
            }
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.1,
                color: "#6c2bd9" 
              }
            },
            bubble: {
              distance: 100,
              size: 2,
              duration: 0.5
            },
            push: {
              quantity: 2 
            }
          }
        },
        detectRetina: true 
      }}
    />
  );
}