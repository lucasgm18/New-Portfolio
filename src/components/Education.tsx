import React from 'react';
import { GraduationCap, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

export const Education: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];

  return (
    <section id="education" className="py-20 md:py-24 border-b border-border-light bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border-light">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{t.education.sectionNumber}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              {t.education.sectionTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-primary-subtle mt-2 md:mt-0 max-w-md">
            {t.education.sectionSubtitle}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationHistory.map((item) => {
            const isCurrent = item.isCurrent;

            return (
              <div
                key={item.id}
                className={`bg-canvas-card border rounded-xl p-6 sm:p-7 space-y-4 shadow-subtle transition-all duration-200 ${
                  isCurrent ? 'border-accent/40 hover:border-accent' : 'border-border-light hover:border-accent/30'
                }`}
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-canvas-subtle border border-border-light flex items-center justify-center text-accent">
                      {isCurrent ? <GraduationCap size={18} /> : <BookOpen size={18} />}
                    </div>
                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                      {item.degreeType[language]}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-semibold ${
                      isCurrent
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'bg-canvas-subtle text-primary-muted border border-border-light'
                    }`}
                  >
                    {isCurrent ? <Clock size={12} className="animate-pulse" /> : <CheckCircle size={12} />}
                    <span>{item.status[language]}</span>
                  </span>
                </div>

                {/* Field & Title */}
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
                    {item.field[language]}
                  </h3>
                  <p className="text-xs font-mono text-primary-subtle">
                    {item.degreeType[language]} • {language === 'pt' ? 'Ensino Superior & Técnico' : 'Higher Education & Technical'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
