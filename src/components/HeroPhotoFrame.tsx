import React from 'react';
import { useApp } from '../context/AppContext';
import { developerProfile } from '../data/portfolioData';

export const HeroPhotoFrame: React.FC = () => {
  const { language } = useApp();

  return (
    <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
      
      {/* Subtle ambient lighting behind frame */}
      <div className="absolute -inset-1 bg-accent/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Retro-Tech Editorial Frame */}
      <div className="relative bg-canvas-card border border-border-light rounded-2xl p-3 sm:p-4 shadow-subtle hover:shadow-card hover:border-accent/30 transition-all duration-300">
        
        {/* Top Retro-Tech Header Bar */}
        <div className="bg-canvas-subtle/80 border border-border-light/70 rounded-lg px-3 py-2 mb-3 flex items-center justify-between font-mono text-[11px] text-primary-subtle select-none">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-bold text-primary tracking-wider text-[11px]">
              PROFILE // LUCAS GOMES
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[10px] text-primary-subtle">
            <span className="hidden sm:inline">ID: LG-2026</span>
            <span className="text-border-hover">|</span>
            <span className="text-accent font-semibold">DEV.ENV</span>
          </div>
        </div>

        {/* Photography Container */}
        <div className="relative overflow-hidden rounded-xl bg-canvas-subtle border border-border-light aspect-[3/4] sm:aspect-[4/5] max-h-[380px] sm:max-h-[440px] w-full flex items-center justify-center">
          
          <img
            src="/lucas-gomes.png"
            alt="Lucas Gomes — Software Developer"
            className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98] group-hover:scale-[1.015] transition-transform duration-500"
            loading="eager"
          />

          {/* Subtle Technical Corner Reticles */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent/60 pointer-events-none" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent/60 pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent/60 pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent/60 pointer-events-none" />

          {/* Subtle bottom vignette gradient for depth */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />

          {/* Floating Pixel Art Mascot / Tech Companion badge */}
          <div className="absolute bottom-2.5 right-2.5 bg-canvas-card/90 backdrop-blur-md border border-border-light px-2.5 py-1.5 rounded-lg shadow-subtle flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
            {/* Crisp Minimalist Pixel Robot / Terminal Companion */}
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4 text-accent flex-shrink-0"
              style={{ shapeRendering: 'crispEdges' }}
              fill="currentColor"
              aria-hidden="true"
            >
              {/* Pixel Art Robot Head & Antenna */}
              <rect x="7" y="1" width="2" height="2" />
              <rect x="4" y="3" width="8" height="1" />
              <rect x="3" y="4" width="10" height="7" />
              {/* Eyes */}
              <rect x="5" y="6" width="2" height="2" fill="var(--bg-canvas-card)" />
              <rect x="9" y="6" width="2" height="2" fill="var(--bg-canvas-card)" />
              {/* Smile */}
              <rect x="6" y="9" width="4" height="1" fill="var(--bg-canvas-card)" />
              {/* Ears / Antennas */}
              <rect x="2" y="6" width="1" height="3" />
              <rect x="13" y="6" width="1" height="3" />
              {/* Neck */}
              <rect x="6" y="11" width="4" height="1" />
              <rect x="4" y="12" width="8" height="2" />
            </svg>

            <span className="font-mono text-[10px] font-bold text-primary tracking-tight">
              SYS.OK
            </span>
          </div>

        </div>

        {/* Bottom Metadata & System Bar */}
        <div className="mt-3 pt-2.5 border-t border-border-light/70 flex items-center justify-between text-[10px] font-mono text-primary-subtle">
          <div className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{developerProfile.role[language].toUpperCase()}</span>
          </div>

          <div className="flex items-center space-x-2">
            <span>{developerProfile.location[language]}</span>
            <span className="text-accent font-semibold">● ONLINE</span>
          </div>
        </div>

      </div>

    </div>
  );
};
