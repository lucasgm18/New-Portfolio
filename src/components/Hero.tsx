import React from 'react';
import { ArrowDownRight, Terminal } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';
import { developerProfile } from '../data/portfolioData';
import { HeroPhotoFrame } from './HeroPhotoFrame';

export const Hero: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border-light overflow-hidden bg-grid-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Technical microheader bar */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-primary-subtle mb-6">
          <span className="flex items-center space-x-1.5 bg-canvas-card border border-border-light px-2.5 py-1 rounded shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-primary font-medium">{developerProfile.status.label[language]}</span>
          </span>
          <span className="hidden sm:inline-block text-border-hover">|</span>
          <span className="hidden sm:inline-block">{developerProfile.location[language]}</span>
          <span className="hidden md:inline-block text-border-hover">|</span>
          <span className="hidden md:inline-block text-accent font-semibold">{developerProfile.positioning[language]}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="h-[1px] w-6 bg-accent" />
                <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                  {developerProfile.role[language]}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-[1.08]">
                {developerProfile.heroHeadline[language]}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-primary-muted max-w-2xl leading-relaxed font-normal">
              {developerProfile.heroSubtext[language]}
            </p>

            {/* Quick Tech Badge Indicators */}
            <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-primary-muted">
              {["C#", ".NET", "POSTGRESQL", "AZURE", "AWS", "CIVIL 3D", "REVIT"].map((tech) => (
                <span key={tech} className="bg-canvas-subtle border border-border-light px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 bg-primary text-canvas px-6 py-3 rounded-md font-medium text-sm hover:bg-accent hover:text-white transition-colors duration-200 shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 border border-border-light bg-canvas-card text-primary px-6 py-3 rounded-md font-medium text-sm hover:bg-canvas-subtle transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent shadow-subtle"
              >
                <Terminal size={16} className="text-primary-subtle" />
                <span>{t.hero.getInTouch}</span>
              </a>
            </div>

            {/* Sub-metric bar with verifiable technical focus */}
            <div className="pt-6 border-t border-border-light grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="bg-canvas-card/60 sm:bg-transparent border sm:border-0 border-border-light p-3 sm:p-0 rounded">
                <span className="block text-primary-subtle">{t.hero.metricFocus}</span>
                <span className="block font-bold text-primary text-sm mt-0.5">{t.hero.metricFocusVal}</span>
              </div>
              <div className="bg-canvas-card/60 sm:bg-transparent border sm:border-0 border-border-light p-3 sm:p-0 rounded">
                <span className="block text-primary-subtle">{t.hero.metricEng}</span>
                <span className="block font-bold text-primary text-sm mt-0.5">{t.hero.metricEngVal}</span>
              </div>
              <div className="bg-canvas-card/60 sm:bg-transparent border sm:border-0 border-border-light p-3 sm:p-0 rounded">
                <span className="block text-primary-subtle">{t.hero.metricStack}</span>
                <span className="block font-bold text-primary text-sm mt-0.5">{t.hero.metricStackVal}</span>
              </div>
            </div>

          </div>

          {/* Hero Right Column: Personal Photo Editorial Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPhotoFrame />
          </div>
        </div>

      </div>
    </section>
  );
};
