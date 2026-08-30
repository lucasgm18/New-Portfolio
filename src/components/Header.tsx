import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';
import { developerProfile } from '../data/portfolioData';

export const Header: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const t = uiTranslations[language];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'header-glass border-b border-border-light shadow-subtle py-3'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Name & Title */}
        <a href="#" className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1">
          <div className="w-8 h-8 rounded-lg bg-canvas-card border border-border-light flex items-center justify-center shadow-subtle group-hover:border-accent/40 group-hover:bg-canvas-subtle transition-all duration-200 flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-4.5 h-4.5 text-primary group-hover:text-accent transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Monogram: L + G structured engineering form */}
              <path d="M5.5 4.5v14a1 1 0 0 0 1 1h12" />
              <path d="M18.5 9.5V6a1.5 1.5 0 0 0-1.5-1.5H11" />
              <path d="M12 13.5h6.5v4a1 1 0 0 1-1 1H14" />
              <circle cx="12" cy="13.5" r="1.2" className="fill-accent stroke-accent" />
            </svg>
          </div>
          <div>
            <span className="block font-bold tracking-tight text-primary text-base sm:text-lg leading-tight group-hover:text-accent transition-colors">
              {developerProfile.name}
            </span>
            <span className="block text-xs font-mono text-primary-subtle uppercase tracking-wider">
              {developerProfile.role[language]}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a
            href="#about"
            className="text-sm font-medium text-primary-muted hover:text-primary transition-colors hover:translate-y-[-1px] duration-150 focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
          >
            {t.nav.about}
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-primary-muted hover:text-primary transition-colors hover:translate-y-[-1px] duration-150 focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
          >
            {t.nav.experience}
          </a>
          <a
            href="#education"
            className="text-sm font-medium text-primary-muted hover:text-primary transition-colors hover:translate-y-[-1px] duration-150 focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
          >
            {t.nav.education}
          </a>
          <a
            href="#stack"
            className="text-sm font-medium text-primary-muted hover:text-primary transition-colors hover:translate-y-[-1px] duration-150 focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
          >
            {t.nav.stack}
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-primary-muted hover:text-primary transition-colors hover:translate-y-[-1px] duration-150 focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
          >
            {t.nav.work}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-primary-muted hover:text-primary transition-colors hover:translate-y-[-1px] duration-150 focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
          >
            {t.nav.contact}
          </a>

          {/* Status Indicator */}
          <div className="h-4 w-[1px] bg-border-light" />
          <div className="flex items-center space-x-2 bg-canvas-subtle border border-border-light px-2.5 py-1 rounded-full text-xs font-mono text-primary-muted">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>{t.nav.status}</span>
          </div>

          {/* Language Switcher (PT-BR / EN-US) */}
          <div className="flex items-center space-x-1 bg-canvas-subtle border border-border-light rounded-md p-0.5 text-xs font-mono">
            <button
              onClick={() => setLanguage('pt')}
              aria-label={t.accessibility.toggleLangPt}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'pt'
                  ? 'bg-canvas-card text-accent font-bold shadow-subtle'
                  : 'text-primary-subtle hover:text-primary'
              }`}
            >
              PT-BR
            </button>
            <span className="text-primary-subtle/40">/</span>
            <button
              onClick={() => setLanguage('en')}
              aria-label={t.accessibility.toggleLangEn}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'bg-canvas-card text-accent font-bold shadow-subtle'
                  : 'text-primary-subtle hover:text-primary'
              }`}
            >
              EN-US
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.accessibility.toggleThemeLight : t.accessibility.toggleThemeDark}
            title={theme === 'dark' ? t.accessibility.toggleThemeLight : t.accessibility.toggleThemeDark}
            className="p-2 rounded-md border border-border-light text-primary hover:bg-canvas-subtle hover:border-accent/40 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-primary-muted" />}
          </button>
        </nav>

        {/* Mobile / Tablet Controls & Hamburger */}
        <div className="lg:hidden flex items-center space-x-2">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-canvas-subtle border border-border-light rounded-md p-0.5 text-[11px] font-mono">
            <button
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
              className="px-1.5 py-0.5 font-bold text-accent"
              aria-label="Toggle language"
            >
              {language === 'pt' ? 'PT-BR' : 'EN-US'}
            </button>
          </div>

          {/* Mobile Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.accessibility.toggleThemeLight : t.accessibility.toggleThemeDark}
            className="p-1.5 rounded-md border border-border-light text-primary hover:bg-canvas-subtle transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-border-light text-primary hover:bg-canvas-subtle transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-canvas border-b border-border-light px-6 py-6 space-y-3 font-mono text-sm shadow-card animate-fadeIn">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-border-light text-primary hover:text-accent font-medium"
          >
            01 // {t.nav.about.toUpperCase()}
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-border-light text-primary hover:text-accent font-medium"
          >
            02 // {t.nav.experience.toUpperCase()}
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-border-light text-primary hover:text-accent font-medium"
          >
            03 // {t.nav.education.toUpperCase()}
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-border-light text-primary hover:text-accent font-medium"
          >
            04 // {t.nav.stack.toUpperCase()}
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-border-light text-primary hover:text-accent font-medium"
          >
            05 // {t.nav.work.toUpperCase()}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-border-light text-primary hover:text-accent font-medium"
          >
            06 // {t.nav.contact.toUpperCase()}
          </a>

          <div className="pt-3 flex items-center justify-between text-xs text-primary-subtle">
            <span>SYS.STATUS: ONLINE</span>
            <span className="text-accent font-bold">{developerProfile.location[language]}</span>
          </div>
        </div>
      )}
    </header>
  );
};
