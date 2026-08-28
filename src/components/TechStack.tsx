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
          <p className="text-xs sm:text-sm font-mono text-primary-subtle mt-2 md:mt-0">
            {t.stack.sectionSubtitle}
          </p>
        </div>

        {/* Visual Inventory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title[language]}
              className="bg-canvas-card border border-border-light rounded-xl p-5 space-y-4 shadow-subtle flex flex-col justify-between"
            >
              <div className="border-b border-border-light pb-2.5">
                <span className="font-mono text-xs font-bold text-accent block">
                  0{idx + 1} // {category.title[language]}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 font-mono">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-canvas-subtle border border-border-light px-2.5 py-1 rounded text-xs text-primary font-medium hover:border-accent/40 transition-colors"
                  >
                    {skill.name}
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
