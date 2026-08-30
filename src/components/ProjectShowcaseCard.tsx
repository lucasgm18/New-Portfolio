import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { useApp } from '../context/AppContext';

interface ProjectShowcaseCardProps {
  project: Project;
}

export const ProjectShowcaseCard: React.FC<ProjectShowcaseCardProps> = ({ project }) => {
  const { language } = useApp();
  const isCaixa = project.id === 'lucas-caixa-tech-trainer';

  return (
    <div className="group relative bg-canvas-card border border-border-light rounded-xl overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300">
      
      {/* Mockup Window Header */}
      <div className="bg-canvas-subtle border-b border-border-light px-4 py-2.5 flex items-center justify-between font-mono text-xs text-primary-subtle">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <span className="hidden sm:inline-block text-border-hover">|</span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-primary-muted truncate max-w-[240px]">
            {project.liveUrl || 'github.com/lucasgm18/Tower-Of-Lucas'}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] uppercase font-bold text-accent">
            {isCaixa ? 'REACT + TYPESCRIPT' : 'TYPESCRIPT + STATE ENGINE'}
          </span>
        </div>
      </div>

      {/* Main Screen Showcase */}
      <div className="p-4 sm:p-6 bg-canvas-card text-primary font-sans min-h-[280px] sm:min-h-[320px] flex flex-col justify-between relative overflow-hidden transition-colors">
        
        {/* Ambient subtle lighting gradient */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        {isCaixa ? (
          /* LUCAS CAIXA TECH TRAINER UI PREVIEW */
          <div className="space-y-3.5 text-xs font-mono relative z-10">
            {/* Top Bar of App */}
            <div className="flex items-center justify-between border-b border-border-light pb-2.5">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-bold text-[11px]">
                  SIMULADO CAIXA TECH
                </span>
                <span className="text-primary-subtle text-[11px] hidden sm:inline">DISCIPLINA: TI & ENGENHARIA</span>
              </div>
              <div className="text-accent font-bold bg-canvas-subtle border border-border-light px-2 py-0.5 rounded text-[11px]">
                ⏱️ 03:42:15
              </div>
            </div>

            {/* Question Box */}
            <div className="bg-canvas-subtle/60 border border-border-light rounded-lg p-3.5 sm:p-4 space-y-2.5">
              <div className="flex justify-between items-center text-[11px] text-primary-subtle">
                <span className="font-semibold">QUESTÃO 14 / 50</span>
                <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-sans">
                  <CheckCircle2 size={12} /> Persistência Ativa
                </span>
              </div>
              <p className="text-primary font-sans text-xs sm:text-sm font-medium leading-relaxed">
                Considerando uma arquitetura com dados desacoplados por disciplina, qual a vantagem do padrão Repository isolado?
              </p>

              {/* Options */}
              <div className="space-y-1.5 font-sans pt-1">
                <div className="p-2 rounded bg-accent/10 border border-accent/30 text-primary flex items-center space-x-2">
                  <span className="w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">A</span>
                  <span className="text-xs">Isolamento da lógica de persistência e previsibilidade nas tentativas de simulação.</span>
                </div>
                <div className="p-2 rounded bg-canvas-card border border-border-light text-primary-muted flex items-center space-x-2">
                  <span className="w-4 h-4 rounded-full bg-canvas-subtle text-primary-muted flex items-center justify-center text-[10px] font-bold flex-shrink-0">B</span>
                  <span className="text-xs">Dependência direta de banco de dados relacional síncrono na renderização.</span>
                </div>
              </div>
            </div>

            {/* Performance Stats snippet */}
            <div className="grid grid-cols-3 gap-2 text-[10px] text-primary-muted font-mono">
              <div className="bg-canvas-subtle/80 border border-border-light p-2 rounded text-center">
                <span className="block text-primary-subtle text-[9px]">ACERTOS</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">88.5%</span>
              </div>
              <div className="bg-canvas-subtle/80 border border-border-light p-2 rounded text-center">
                <span className="block text-primary-subtle text-[9px]">RESPOSTA</span>
                <span className="font-bold text-accent text-xs sm:text-sm">&lt;12ms</span>
              </div>
              <div className="bg-canvas-subtle/80 border border-border-light p-2 rounded text-center">
                <span className="block text-primary-subtle text-[9px]">ESTADO</span>
                <span className="font-bold text-primary text-xs sm:text-sm">PERSISTIDO</span>
              </div>
            </div>
          </div>
        ) : (
          /* TOWER OF LUCAS UI PREVIEW */
          <div className="space-y-3.5 text-xs font-mono relative z-10">
            {/* Top Bar of Game Engine */}
            <div className="flex items-center justify-between border-b border-border-light pb-2.5">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-bold text-[11px]">
                  TOWER OF LUCAS
                </span>
                <span className="text-primary-subtle text-[11px] hidden sm:inline">ANDAR 07 // GAUNTLET</span>
              </div>
              <div className="text-amber-600 dark:text-amber-400 font-bold bg-canvas-subtle border border-border-light px-2 py-0.5 rounded text-[11px]">
                🪙 450 G
              </div>
            </div>

            {/* Battle Screen Mockup */}
            <div className="bg-canvas-subtle/60 border border-border-light rounded-lg p-3.5 sm:p-4 space-y-3">
              {/* HP Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-primary-muted font-sans">
                  <span>HERO HP: 140 / 180</span>
                  <span className="font-semibold text-primary">SKELETON WARLORD [LVL 8]</span>
                </div>
                <div className="w-full h-2 bg-canvas-card border border-border-light rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[78%]" />
                </div>
              </div>

              {/* Tactical Action Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-sans pt-1">
                <div className="p-2 bg-accent/10 border border-accent/30 text-accent rounded text-center font-medium text-xs">
                  ⚔️ Ataque
                </div>
                <div className="p-2 bg-canvas-card border border-border-light text-primary rounded text-center font-medium text-xs">
                  🔥 Magia
                </div>
                <div className="p-2 bg-canvas-card border border-border-light text-primary rounded text-center font-medium text-xs">
                  🛡️ Defesa
                </div>
                <div className="p-2 bg-canvas-card border border-border-light text-primary rounded text-center font-medium text-xs">
                  🧪 Poção
                </div>
              </div>
            </div>

            {/* Engine Console Log */}
            <div className="bg-canvas-subtle p-2 rounded border border-border-light font-mono text-[10px] text-primary-muted flex items-center space-x-2">
              <span className="text-accent font-bold">&gt;&gt;</span>
              <span className="truncate">
                [ENGINE] FloorGauntletEvaluator: Floor 07 state validated.
              </span>
            </div>
          </div>
        )}

        {/* Footer Callout */}
        <div className="pt-3 mt-2 border-t border-border-light flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-mono text-primary-subtle">
            <Layers size={13} className="text-accent" />
            <span>{project.category[language]}</span>
          </div>

          <span className="text-xs font-mono text-primary-subtle">
            {project.isLiveAvailable ? '⚡ Live Deploy' : '📦 GitHub Repository'}
          </span>
        </div>

      </div>

    </div>
  );
};
