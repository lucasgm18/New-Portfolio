import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Code2, Copy, Check } from 'lucide-react';
import { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { language } = useApp();
  const t = uiTranslations[language];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.caseStudy.codeSnippet) {
      navigator.clipboard.writeText(project.caseStudy.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-canvas border border-border-light rounded-xl shadow-modal overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-canvas-subtle border-b border-border-light px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
              {project.number} // {t.modal.caseStudyTag}
            </span>
            <span className="hidden sm:inline text-border-hover">|</span>
            <span className="hidden sm:inline font-mono text-xs text-primary-subtle">
              {project.category[language]}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-primary-muted hover:text-primary hover:bg-canvas-card border border-transparent hover:border-border-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label={t.modal.closeModal}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto font-sans">
          
          {/* Main Title & Hero info */}
          <div className="space-y-3 border-b border-border-light pb-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg text-accent font-medium font-mono">
              {project.subtitle[language]}
            </p>
            <p className="text-base text-primary-muted leading-relaxed max-w-3xl">
              {project.shortDescription[language]}
            </p>

            {/* Live Metrics Highlight Badge */}
            {project.metricsHighlight && (
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-md font-mono text-xs text-accent">
                <CheckCircle2 size={14} />
                <span>{project.metricsHighlight[language]}</span>
              </div>
            )}
          </div>

          {/* Context, Problem & Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-canvas-card border border-border-light rounded-lg p-5 space-y-2">
              <span className="text-xs font-mono font-bold text-primary-subtle uppercase tracking-wider block">
                {t.modal.context}
              </span>
              <p className="text-sm text-primary-muted leading-relaxed">
                {project.caseStudy.context[language]}
              </p>
            </div>

            <div className="bg-canvas-card border border-border-light rounded-lg p-5 space-y-2">
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-wider block">
                {t.modal.problem}
              </span>
              <p className="text-sm text-primary-muted leading-relaxed">
                {project.caseStudy.problem[language]}
              </p>
            </div>

            <div className="bg-canvas-card border border-border-light rounded-lg p-5 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                {t.modal.solution}
              </span>
              <p className="text-sm text-primary-muted leading-relaxed">
                {project.caseStudy.solution[language]}
              </p>
            </div>
          </div>

          {/* Architecture & Technical Decisions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center space-x-2 font-mono">
              <span className="text-accent">//</span>
              <span>{t.modal.architecture}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.architectureDecisions[language].map((decision, index) => (
                <div
                  key={index}
                  className="bg-canvas-card border border-border-light p-4 rounded-lg flex items-start space-x-3"
                >
                  <div className="w-5 h-5 rounded bg-accent/10 text-accent font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-primary leading-relaxed">
                    {decision}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary flex items-center space-x-2 font-mono">
              <span className="text-accent">//</span>
              <span>{t.modal.features}</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.caseStudy.keyFeatures[language].map((feature, index) => (
                <li
                  key={index}
                  className="bg-canvas-subtle/70 border border-border-light p-3.5 rounded-lg text-xs sm:text-sm text-primary flex items-center space-x-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet Showcase */}
          {project.caseStudy.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono font-bold text-primary flex items-center space-x-2">
                  <Code2 size={16} className="text-accent" />
                  <span>{project.caseStudy.codeSnippet.filename}</span>
                </h3>
                <button
                  onClick={handleCopyCode}
                  className="text-xs font-mono text-primary-muted hover:text-accent flex items-center space-x-1 border border-border-light bg-canvas-card px-2.5 py-1 rounded focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copied ? t.modal.copiedSnippet : t.modal.copySnippet}</span>
                </button>
              </div>

              <div className="bg-canvas-dark border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-200 overflow-x-auto">
                <pre>{project.caseStudy.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3 border-t border-border-light pt-6">
            <span className="text-xs font-mono text-primary-subtle block uppercase tracking-wider">
              {t.modal.technologies}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-canvas-subtle border border-border-light text-primary font-mono text-xs px-3 py-1.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Metrics */}
          <div className="bg-accent-light/50 border border-accent/30 rounded-lg p-5 space-y-1">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block">
              {t.modal.results}
            </span>
            <p className="text-sm text-primary font-medium">
              {project.caseStudy.resultsAndMetrics[language]}
            </p>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-canvas-subtle border-t border-border-light px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-primary-subtle">
            <span>{t.modal.auditedStatus}</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-canvas-card border border-border-light text-primary px-4 py-2 rounded-md font-mono text-xs hover:bg-canvas-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <GithubIcon size={14} />
              <span>{t.modal.viewGithub}</span>
            </a>

            {/* ONLY render Live button if project.isLiveAvailable and project.liveUrl exist! */}
            {project.isLiveAvailable && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-accent text-white px-4 py-2 rounded-md font-mono text-xs hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <span>{t.modal.accessProject}</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
