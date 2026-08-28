import React from 'react';
import { developerBio } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

export const About: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];

  return (
    <section id="about" className="py-20 md:py-24 border-b border-border-light bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Title & Short Presentation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-accent">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span>{t.about.sectionNumber}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                {t.about.sectionTitle}
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-primary-muted font-sans leading-relaxed">
              {developerBio.aboutText[language].map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-primary font-medium" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Principles */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-primary-subtle uppercase tracking-wider block font-bold">
              {t.about.principlesTitle}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 font-sans">
              {developerBio.principles.map((principle) => (
                <div
                  key={principle.number}
                  className="p-4 rounded-xl bg-canvas-card border border-border-light space-y-2 hover:border-accent/30 transition-colors shadow-subtle flex flex-col justify-between"
                >
                  <div className="font-mono text-xs font-bold text-accent">
                    {principle.number} // {principle.title[language]}
                  </div>
                  <p className="text-xs text-primary-muted leading-relaxed">
                    {principle.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
