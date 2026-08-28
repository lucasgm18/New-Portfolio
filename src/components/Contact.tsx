import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { developerBio } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

export const Contact: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-b border-border-light bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Theme-Aware Contact Card */}
        <div className="bg-canvas-card border border-border-light rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-subtle transition-colors">
          
          {/* Ambient subtle lighting gradient */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header indicator */}
          <div className="flex items-center justify-between border-b border-border-light pb-4 mb-8 relative z-10 font-mono text-xs text-primary-subtle">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-bold">{t.contact.sectionNumber}</span>
            </div>
            <span>{t.contact.available}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Callout Headline & Subtext */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-primary">
                {t.contact.headlineStart}<span className="text-accent">{t.contact.headlineAccent}</span>
              </h2>

              <p className="text-sm sm:text-base text-primary-muted max-w-xl font-normal leading-relaxed">
                {t.contact.subtext}
              </p>
            </div>

            {/* Right Column: Direct Quick Contact Actions */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Direct Email Box with 1-Click Copy */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-primary-subtle uppercase tracking-wider block font-bold">
                  {t.contact.directEmailTitle}
                </span>

                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-canvas-subtle border border-border-light px-3.5 py-2.5 rounded-lg font-mono text-xs text-primary truncate select-all">
                    {developerBio.email}
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="bg-accent text-white px-3.5 py-2.5 rounded-lg font-mono text-xs font-medium hover:bg-accent-hover transition-colors flex items-center space-x-1.5 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Copiar endereço de email"
                  >
                    {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
                    <span>{copied ? t.contact.copied : t.contact.copy}</span>
                  </button>
                </div>
              </div>

              {/* Direct Action Buttons: Send Mail + GitHub + LinkedIn */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-primary-subtle uppercase tracking-wider block font-bold">
                  {t.contact.connectTitle}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                  <a
                    href={`mailto:${developerBio.email}`}
                    className="inline-flex items-center justify-center space-x-2 bg-canvas-subtle border border-border-light text-primary px-3.5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Enviar email via cliente padrão"
                  >
                    <Mail size={14} />
                    <span>Email</span>
                    <ArrowUpRight size={12} className="text-primary-subtle" />
                  </a>

                  <a
                    href={developerBio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-canvas-subtle border border-border-light text-primary px-3.5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Acessar perfil de Lucas Gomes no GitHub"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={12} className="text-primary-subtle" />
                  </a>

                  <a
                    href={developerBio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-canvas-subtle border border-border-light text-primary px-3.5 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Acessar perfil de Lucas Gomes no LinkedIn"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} className="text-primary-subtle" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
