import { useEffect, useId, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const defaultOptions = {
  background: { color: { value: 'transparent' } },
  fullScreen: { enable: false },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: false },
      onClick: { enable: false },
      resize: true,
    },
  },
  particles: {
    number: {
      value: 120,
      density: { enable: true, width: 400, height: 400 },
    },
    color: { value: '#ffffff' },
    size: {
      value: { min: 0.5, max: 1.4 },
    },
    move: {
      enable: true,
      direction: 'none',
      speed: 0.6,
      outModes: { default: 'out' },
    },
    opacity: {
      value: { min: 0.2, max: 0.8 },
      animation: { enable: true, speed: 1.5, sync: false },
    },
    links: { enable: false },
    collisions: { enable: false },
    shape: { type: 'circle' },
  },
};

export const Sparkles = ({ className, options }) => {
  const [ready, setReady] = useState(false);
  const id = useId();

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id={`sparkles-${id}`}
      className={className}
      options={{ ...defaultOptions, ...(options || {}) }}
    />
  );
};
