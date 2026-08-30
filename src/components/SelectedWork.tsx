import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { ProjectShowcaseCard } from './ProjectShowcaseCard';
import { GithubIcon } from './Icons';
import { useApp } from '../context/AppContext';
import { uiTranslations } from '../data/translations';

export const SelectedWork: React.FC = () => {
  const { language } = useApp();
  const t = uiTranslations[language];

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-border-light bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-border-light">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>{t.work.sectionNumber}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              {t.work.sectionTitle}
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-primary-subtle mt-3 md:mt-0 max-w-md">
            {t.work.sectionSubtitle}
          </p>
        </div>

        {/* Project List - Editorial Layout */}
        <div className="space-y-20 md:space-y-28">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Category & Number Header */}
                  <div className="flex items-center space-x-2.5 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-canvas-card border border-border-light font-bold text-accent">
                      {project.number}
                    </span>
                    <span className="text-primary-subtle">//</span>
                    <span className="text-primary-muted font-medium uppercase tracking-wider text-[11px]">
                      {project.category[language]}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary-muted font-sans leading-relaxed">
                      {project.shortDescription[language]}
                    </p>
                  </div>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-primary-subtle block uppercase tracking-wider font-bold">
                      {t.work.keyFeatures}
                    </span>
                    <ul className="space-y-1.5 font-sans text-xs text-primary-muted">
                      {project.keyFeatures[language].map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2">
                          <CheckCircle2 size={13} className="text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-primary-subtle block uppercase tracking-wider font-bold">
                      {t.work.keyTechnologies}
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-canvas-subtle border border-border-light text-primary px-2.5 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links & Actions with strict hierarchy */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {/* Primary Action: GitHub */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-primary text-canvas px-4 py-2.5 rounded-md text-xs font-mono font-medium hover:bg-accent hover:text-white transition-colors shadow-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label={`Ver repositório ${project.title} no GitHub`}
                    >
                      <GithubIcon size={15} />
                      <span>{t.work.github}</span>
                    </a>

                    {/* Secondary Action: ONLY render Live button if project.isLiveAvailable and project.liveUrl exist! */}
                    {project.isLiveAvailable && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 border border-border-light text-primary hover:text-accent bg-canvas-card px-4 py-2.5 rounded-md text-xs font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-accent shadow-subtle hover:border-accent/40"
                        aria-label={`Acessar projeto ${project.title} publicado`}
                      >
                        <ExternalLink size={14} />
                        <span>{t.work.live}</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Visual Showcase Card Column */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectShowcaseCard
                    project={project}
                  />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
