import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

export const TechStack: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];

  return (
    <section id="stack" className="py-20 md:py-24 border-b border-border-light bg-canvas-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-light">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{t.stack.sectionNumber}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              {t.stack.sectionTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-primary-subtle mt-2 md:mt-0 max-w-md">
            {t.stack.sectionSubtitle}
          </p>
        </div>

        {/* Categorized Technical Inventory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.id}
              className="bg-canvas-card border border-border-light rounded-xl p-6 space-y-5 shadow-subtle hover:border-accent/30 transition-colors flex flex-col justify-between"
            >
              <div className="border-b border-border-light pb-3">
                <span className="font-mono text-xs font-bold text-accent block tracking-wider">
                  0{idx + 1} // {category.title[language]}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 font-mono">
                {category.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="bg-canvas-subtle border border-border-light px-3 py-1.5 rounded-md text-xs sm:text-sm text-primary font-medium hover:border-accent/50 hover:text-accent transition-colors shadow-subtle"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
