import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { workExperience } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

export const Experience: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];

  return (
    <section id="experience" className="py-20 md:py-24 border-b border-border-light bg-canvas-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-light">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{t.experience.sectionNumber}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              {t.experience.sectionTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-primary-subtle mt-2 md:mt-0 max-w-md">
            {t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {workExperience.map((exp) => (
            <div
              key={exp.id}
              className="bg-canvas-card border border-border-light rounded-xl p-6 sm:p-8 space-y-6 shadow-subtle hover:border-accent/30 transition-colors"
            >
              {/* Header: Role & Organization Type */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border-light pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary tracking-tight">
                      {exp.role[language]}
                    </h3>
                    <p className="text-sm font-mono text-accent font-medium">
                      {exp.companyType[language]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono text-primary-subtle uppercase tracking-wider">
                    {language === 'pt' ? 'Atuação Profissional' : 'Professional Role'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-primary-muted font-sans leading-relaxed">
                {exp.description[language]}
              </p>

              {/* Scope & Responsibilities */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-primary-subtle uppercase tracking-wider block font-bold">
                  {t.experience.scopeTitle}
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans">
                  {exp.scope[language].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-canvas-subtle/70 border border-border-light rounded-lg p-3 text-xs sm:text-sm text-primary flex items-start space-x-2.5"
                    >
                      <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="space-y-2.5 pt-2 border-t border-border-light">
                <span className="text-xs font-mono text-primary-subtle uppercase tracking-wider block font-bold">
                  {t.experience.technologiesTitle}
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-canvas-subtle border border-border-light text-primary px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
