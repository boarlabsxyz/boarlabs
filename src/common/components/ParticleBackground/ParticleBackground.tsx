'use client';
import { useCallback } from 'react';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      options={particlesOptions as ISourceOptions}
      init={particlesInit}
    />
  );
};
