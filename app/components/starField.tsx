"use client";

import Particles from "@tsparticles/react";
import { useEffect, useState, useMemo, useCallback } from "react";
import type { Container, ISourceOptions } from "@tsparticles/engine";

export default function Starfield() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Starfield canvas ready:", container?.id);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: "#0a0a12",
        image:
          "radial-gradient(circle at 60% 50%, #121226 0%, #090912 35%, #030305 70%, #000000 100%)",
        position: "center",
        repeat: "no-repeat",
        size: "cover",
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 800,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: [
            "#ffffff",
            "#e8f4f8",
            "#b8d4e3",
            "#ffd700",
            "#ff6b6b",
            "#a78bfa",
            "#f472b6",
            "#34d399",
          ],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 0.3,
            sync: false,
            startValue: "random",
          },
        },
        size: {
          value: { min: 0.3, max: 1.5 },
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
            startValue: "random",
          },
        },
        move: {
          enable: true,
          speed: { min: 0.02, max: 0.2 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 600,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 0.8,
          },
        },
        shadow: {
          enable: true,
          color: "rgba(255, 255, 255, 0.3)",
          blur: 3,
          type: "circle",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          onDiv: {
            enable: false,
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.2,
              color: "#8b5cf6",
            },
          },
          bubble: {
            distance: 100,
            size: 3,
            duration: 0.4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0a0a1a] via-[#0d0d2b] to-[#050508]" />
    );
  }

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10 pointer-events-none"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
}
