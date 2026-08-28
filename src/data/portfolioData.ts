import { DeveloperBio, Project, SkillCategory } from '../types/portfolio';

export const developerBio: DeveloperBio = {
  name: "Lucas Gomes",
  role: {
    pt: "Desenvolvedor de Software",
    en: "Software Developer"
  },
  tagline: {
    pt: "Desenvolvedor de software focado em aplicações web, ferramentas e sistemas.",
    en: "Software developer focused on web applications, tools, and systems."
  },
  heroHeadline: {
    pt: "Desenvolvo aplicações web, ferramentas e sistemas de software.",
    en: "Building web applications, tools, and software systems."
  },
  heroSubtext: {
    pt: "Foco em código limpo, arquitetura desacoplada e entregas de alta performance.",
    en: "Focused on clean code, decoupled architecture, and high-performance execution."
  },
  status: {
    available: true,
    label: {
      pt: "SYS.STATUS // DISPONÍVEL PARA PROJETOS",
      en: "SYS.STATUS // AVAILABLE FOR NEW PROJECTS"
    }
  },
  location: {
    pt: "Brasil (UTC-3)",
    en: "Brazil (UTC-3)"
  },
  email: "lucasgomesm1808@gmail.com",
  github: "https://github.com/lucasgm18",
  linkedin: "https://www.linkedin.com/in/lucasgmelo/",
  aboutText: {
    pt: [
      "Desenvolvedor de software com experiência na construção de aplicações web, APIs e ferramentas de engenharia.",
      "Atuo da modelagem de dados e arquitetura de backend à entrega de interfaces web rápidas, responsivas e manuteníveis."
    ],
    en: [
      "Software developer with experience building web applications, APIs, and engineering tools.",
      "Working from data modeling and backend architecture to responsive, fast, and maintainable user interfaces."
    ]
  },
  principles: [
    {
      number: "01",
      title: {
        pt: "Arquitetura Pragmática",
        en: "Pragmatic Architecture"
      },
      description: {
        pt: "Soluções diretas, modulares e sem abstrações desnecessárias.",
        en: "Straightforward, modular solutions without unnecessary abstractions."
      }
    },
    {
      number: "02",
      title: {
        pt: "Determinismo & Estado",
        en: "Determinism & State"
      },
      description: {
        pt: "Gerenciamento de estado previsível e persistência confiável.",
        en: "Predictable state management and reliable persistence."
      }
    },
    {
      number: "03",
      title: {
        pt: "Clareza de Domínio",
        en: "Domain Clarity"
      },
      description: {
        pt: "Compreensão direta das regras de negócio para entregar software funcional.",
        en: "Direct understanding of business rules to deliver functional software."
      }
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    id: "lucas-caixa-tech-trainer",
    number: "PROJECT // 01",
    title: "Lucas Caixa Tech Trainer",
    subtitle: {
      pt: "Plataforma de treinamento baseada em simulados e questões",
      en: "Exam simulation and question bank platform"
    },
    category: {
      pt: "Plataforma Web / EdTech",
      en: "Web Platform / EdTech"
    },
    shortDescription: {
      pt: "Plataforma de treinamento baseada em simulados e banco de questões para exames bancários e certificações de TI.",
      en: "Training platform based on exam simulations and question banks for financial and IT certification exams."
    },
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/lucasgm18/lucas-caixa-tech-trainer",
    liveUrl: "https://lucas-caixa-tech-trainer.vercel.app/",
    isLiveAvailable: true,
    featuredImage: "caixa-tech-trainer",
    mockupType: "dashboard",
    metricsHighlight: {
      pt: "Arquitetura Modular | Resposta Instantânea",
      en: "Modular Architecture | Instant Response"
    },
    caseStudy: {
      context: {
        pt: "Aplicação desenvolvida para simulação de exames e treinamento técnico contínuo.",
        en: "Application developed for exam simulation and continuous technical training."
      },
      problem: {
        pt: "Bancos de questões monolíticos causam lentidão e perda de progresso durante trocas de matérias.",
        en: "Monolithic question banks suffer from latency and progress loss during subject transitions."
      },
      solution: {
        pt: "Arquitetura modular em React e TypeScript com separação de dados por domínio e persistência local.",
        en: "Modular architecture in React and TypeScript with domain data separation and local persistence."
      },
      architectureDecisions: {
        pt: [
          "Estrutura modular de dados tipados por disciplina.",
          "Camada de repositório para armazenamento de histórico.",
          "Motor de avaliação de redação com critérios de bancas.",
          "Componentes reutilizáveis focados em usabilidade."
        ],
        en: [
          "Modular typed data structure per discipline.",
          "Repository layer for simulation history storage.",
          "Essay evaluator engine based on official criteria.",
          "Reusable components focused on clean usability."
        ]
      },
      keyFeatures: {
        pt: [
          "Simulados com temporizador oficial",
          "Banco de questões categorizado por disciplina",
          "Painel de acompanhamento de desempenho",
          "Avaliador automático de redações"
        ],
        en: [
          "Timed exam simulations",
          "Question bank categorized by subject",
          "Performance analytics dashboard",
          "Automated essay evaluator"
        ]
      },
      resultsAndMetrics: {
        pt: "Aplicação funcional em produção na Vercel com respostas instantâneas.",
        en: "Functional application deployed on Vercel with instant feedback."
      },
      codeSnippet: {
        language: "typescript",
        filename: "src/services/storage/progressRepository.ts",
        code: `export class ProgressRepository {
  private readonly STORAGE_KEY = 'caixa_trainer_progress_v1';

  public async saveAttempt(attempt: SimulationAttempt): Promise<void> {
    const history = await this.getHistory();
    history.push(attempt);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
  }

  public async getHistory(): Promise<SimulationAttempt[]> {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }
}`
      }
    }
  },
  {
    id: "tower-of-lucas",
    number: "PROJECT // 02",
    title: "Tower of Lucas",
    subtitle: {
      pt: "Jogo roguelike tático baseado em turnos com sistema de andares",
      en: "Turn-based tactical roguelike game with floor progression"
    },
    category: {
      pt: "Jogo / Aplicação Interativa",
      en: "Game / Interactive Software"
    },
    shortDescription: {
      pt: "Jogo roguelike tático baseado em turnos com sistema de gauntlet de andares e gerenciamento autoritativo de estado.",
      en: "Turn-based tactical roguelike game featuring floor gauntlet progression and authoritative state management."
    },
    technologies: ["TypeScript", "React", "Phaser.js", "SQLite", "Node.js"],
    githubUrl: "https://github.com/lucasgm18/Tower-Of-Lucas",
    // liveUrl is strictly omitted - Tower of Lucas has NO deploy URL
    isLiveAvailable: false,
    featuredImage: "tower-of-lucas",
    mockupType: "browser",
    metricsHighlight: {
      pt: "Clean Code | Object Calisthenics",
      en: "Clean Code | Object Calisthenics"
    },
    caseStudy: {
      context: {
        pt: "Projeto de jogo focado em mecânicas de combate por turnos e refatoração de código.",
        en: "Game engineering project focused on turn-based combat mechanics and clean code patterns."
      },
      problem: {
        pt: "Necessidade de isolar a lógica do motor de jogo da camada de interface para evitar estados inconsistentes.",
        en: "Need to decouple game engine logic from UI components to prevent inconsistent state."
      },
      solution: {
        pt: "Arquitetura em camadas com separação entre avaliação de combate e renderização gráfica.",
        en: "Layered architecture separating combat evaluation from graphic rendering."
      },
      architectureDecisions: {
        pt: [
          "Aplicação de regras de Object Calisthenics.",
          "Persistência desacoplada de dados de personagem.",
          "Lógica de combate isolada em seletores puros.",
          "Validação de progressão de andares com testes."
        ],
        en: [
          "Application of Object Calisthenics rules.",
          "Decoupled character data persistence.",
          "Combat logic isolated into pure evaluators.",
          "Floor progression validated with automated tests."
        ]
      },
      keyFeatures: {
        pt: [
          "Combate tático por turnos",
          "Gauntlet de 10 andares",
          "Encontros sequenciais e Chefes",
          "Gerenciamento autoritativo de estado"
        ],
        en: [
          "Turn-based tactical combat",
          "10-floor gauntlet progression",
          "Sequential encounters and Boss fights",
          "Authoritative state management"
        ]
      },
      resultsAndMetrics: {
        pt: "Código testado e documentado no GitHub com arquitetura limpa.",
        en: "Tested and documented codebase on GitHub with clean architecture."
      },
      codeSnippet: {
        language: "typescript",
        filename: "src/engine/combat/FloorGauntletEvaluator.ts",
        code: `export class FloorGauntletEvaluator {
  private readonly MAX_FLOOR = 10;
  private readonly MONSTERS_PER_FLOOR = 3;

  public evaluateProgression(currentFloor: FloorState): ProgressionOutcome {
    if (currentFloor.isBossFloor() && !currentFloor.isBossDefeated()) {
      return ProgressionOutcome.locked("Derrote o Guardião para avançar.");
    }
    
    return currentFloor.encountersCleared >= this.MONSTERS_PER_FLOOR
      ? ProgressionOutcome.advanceToNextFloor()
      : ProgressionOutcome.nextEncounter();
  }
}`
      }
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: {
      pt: "Linguagens",
      en: "Languages"
    },
    description: {
      pt: "Linguagens de programação principais.",
      en: "Core programming languages."
    },
    skills: [
      { name: "Java" },
      { name: "C#" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "SQL" }
    ]
  },
  {
    title: {
      pt: "Frameworks & Runtimes",
      en: "Frameworks & Runtimes"
    },
    description: {
      pt: "Ecossistemas para web e APIs.",
      en: "Web and API ecosystems."
    },
    skills: [
      { name: "Spring Boot" },
      { name: ".NET" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Vite" }
    ]
  },
  {
    title: {
      pt: "Banco de Dados",
      en: "Databases"
    },
    description: {
      pt: "Sistemas de banco de dados.",
      en: "Database systems."
    },
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "JPA / Hibernate" },
      { name: "Entity Framework" }
    ]
  },
  {
    title: {
      pt: "Ferramentas",
      en: "Tools"
    },
    description: {
      pt: "Ferramentas e práticas de engenharia.",
      en: "Engineering tools & practices."
    },
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "REST APIs" },
      { name: "Arquitetura Limpa" }
    ]
  }
];
