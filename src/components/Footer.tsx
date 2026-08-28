import React, { useState, useEffect } from 'react';
import { developerBio } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { language } = useApp();
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat('pt-BR', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-canvas border-t border-border-light py-12 text-xs font-mono text-primary-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <span className="font-bold text-primary text-sm">
            {developerBio.name}
          </span>
          <span className="hidden sm:inline text-primary-subtle">|</span>
          <span className="text-primary-subtle">
            {developerBio.role[language]}
          </span>
          <span className="hidden sm:inline text-primary-subtle">|</span>
          <span className="text-primary-subtle">
            {developerBio.location[language]}
          </span>
        </div>

        {/* Center: Real-time clock */}
        <div className="flex items-center space-x-2 bg-canvas-subtle border border-border-light px-3 py-1.5 rounded text-primary">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>BRT {timeString || '00:00:00'}</span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center space-x-4">
          <a
            href={developerBio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-muted hover:text-accent transition-colors flex items-center space-x-1 focus:outline-none focus:ring-1 focus:ring-accent rounded p-1"
            aria-label="Perfil do GitHub"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href={developerBio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-muted hover:text-accent transition-colors flex items-center space-x-1 focus:outline-none focus:ring-1 focus:ring-accent rounded p-1"
            aria-label="Perfil do LinkedIn"
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${developerBio.email}`}
            className="text-primary-muted hover:text-accent transition-colors flex items-center space-x-1 focus:outline-none focus:ring-1 focus:ring-accent rounded p-1"
            aria-label="Enviar email"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-border-light/60 text-center text-primary-subtle text-[11px]">
        © {new Date().getFullYear()} {developerBio.name}. All rights reserved. Built with React & TypeScript.
      </div>
    </footer>
  );
};
