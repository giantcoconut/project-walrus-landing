"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

type ParticleFieldProps = {
  className?: string;
};

export function ParticleField({ className }: ParticleFieldProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 78,
          density: {
            enable: true,
            width: 1280,
            height: 720
          }
        },
        color: {
          value: ["#89eaff", "#64ffd1", "#8aa7ff"]
        },
        links: {
          enable: true,
          distance: 110,
          opacity: 0.14,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: {
            default: "out"
          }
        },
        opacity: {
          value: 0.35
        },
        size: {
          value: { min: 1, max: 2.4 }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: {
            enable: true
          }
        },
        modes: {
          repulse: {
            distance: 90,
            duration: 0.4
          }
        }
      },
      background: {
        opacity: 0
      }
    }),
    []
  );

  if (!ready) {
    return null;
  }

  return <Particles className={className} options={options} />;
}
