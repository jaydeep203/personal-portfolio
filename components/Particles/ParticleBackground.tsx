"use client";
import { useCallback } from "react";
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadPolygonMaskPlugin } from 'tsparticles-plugin-polygon-mask';
import {particlesOptions} from '@/components/Particles/particles/nasa.particles';
import { useWindowSize } from 'usehooks-ts';


const ParticlesContainer = () => {
    const { width, height } = useWindowSize();
    const numParticles = width && height ? Math.round(Math.sqrt(width * height) / 6) : 100;

    if (particlesOptions?.particles?.number?.value) {
        particlesOptions.particles.number.value = numParticles;
    }

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);
  
    
  
    return( <Particles options={particlesOptions} init={particlesInit} />
);
  }

export default ParticlesContainer;