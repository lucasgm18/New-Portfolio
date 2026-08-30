import { DeveloperProfile, ExperienceItem, EducationItem, SkillCategory, Project } from '../types/portfolio';

export const developerProfile: DeveloperProfile = {
  name: "Lucas Gomes",
  role: {
    pt: "Software Developer",
    en: "Software Developer"
  },
  positioning: {
    pt: "Software • Automação • Engenharia",
    en: "Software • Automation • Engineering"
  },
  heroHeadline: {
    pt: "Construo software e automações para transformar problemas complexos em ferramentas simples.",
    en: "Building software and automations to turn complex problems into simple, reliable tools."
  },
  heroSubtext: {
    pt: "Desenvolvedor de software atuando no desenvolvimento de ferramentas técnicas, automações em C# e .NET e soluções voltadas para fluxos de engenharia.",
    en: "Software developer building technical tools, C# and .NET automations, and software systems for engineering workflows."
  },
  status: {
    available: true,
    label: {
      pt: "SYS.STATUS // DISPONÍVEL",
      en: "SYS.STATUS // AVAILABLE"
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
      "Sou desenvolvedor de software com atuação voltada para o desenvolvimento de software, automações e ferramentas técnicas para uma consultoria de engenharia civil.",
      "No dia a dia, trabalho na resolução de problemas de engenharia através de código, construindo ferramentas e integrações para Civil 3D e Revit com C# e .NET, além de sistemas desacoplados, determinísticos e focados em usabilidade real.",
      "Possuo curso técnico em Análise e Desenvolvimento de Sistemas e atualmente curso graduação tecnológica na mesma área, estando no 3º período."
    ],
    en: [
      "I am a software developer working on software development, automations, and technical tools for a civil engineering consultancy.",
      "Day to day, I solve practical engineering challenges through code, building tools and plugins for Civil 3D and Revit using C# and .NET, alongside decoupled, deterministic systems built for real-world usability.",
      "I hold a technical diploma in Systems Analysis and Development and am currently pursuing an associate degree in the same field, currently in the 3rd semester."
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
        pt: "Soluções diretas, modulares e sem complexidade acidental.",
        en: "Direct, modular solutions without accidental complexity."
      }
    },
    {
      number: "02",
      title: {
        pt: "Automação & Ferramentas",
        en: "Automation & Tooling"
      },
      description: {
        pt: "Transformação de processos manuais e complexos em ferramentas confiáveis.",
        en: "Turning repetitive and complex processes into reliable tools."
      }
    },
    {
      number: "03",
      title: {
        pt: "Engenharia de Software",
        en: "Software Engineering"
      },
      description: {
        pt: "Compreensão aprofundada das regras de domínio para entregar código manutenível.",
        en: "Deep understanding of domain rules to deliver maintainable code."
      }
    }
  ]
};

export const workExperience: ExperienceItem[] = [
  {
    id: "civil-engineering-consultancy",
    role: {
      pt: "Software Developer",
      en: "Software Developer"
    },
    companyType: {
      pt: "Consultoria de Engenharia Civil",
      en: "Civil Engineering Consultancy"
    },
    description: {
      pt: "Atuação em desenvolvimento de software e automações para uma consultoria de engenharia civil, com foco na otimização e automação de fluxos técnicos.",
      en: "Software and automation development for a civil engineering consultancy, focusing on optimization and automation of technical workflows."
    },
    scope: {
      pt: [
        "Desenvolvimento de automações em C# e ecossistema .NET",
        "Desenvolvimento de ferramentas e utilitários para Civil 3D",
        "Desenvolvimento de ferramentas e integrações para Revit",
        "Desenvolvimento de software voltado para fluxos de engenharia"
      ],
      en: [
        "Development of automations in C# and .NET ecosystem",
        "Development of tools and utilities for Civil 3D",
        "Development of tools and integrations for Revit",
        "Development of software tailored for engineering workflows"
      ]
    },
    technologies: ["C#", ".NET", "Civil 3D", "Revit", "PostgreSQL", "Azure", "AWS"]
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "undergraduate-ads",
    degreeType: {
      pt: "Graduação Tecnológica",
      en: "Associate Degree"
    },
    field: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development"
    },
    status: {
      pt: "Em andamento — 3º período",
      en: "In progress — 3rd semester"
    },
    isCurrent: true
  },
  {
    id: "technical-ads",
    degreeType: {
      pt: "Curso Técnico",
      en: "Technical Diploma"
    },
    field: {
      pt: "Análise e Desenvolvimento de Sistemas",
      en: "Systems Analysis and Development"
    },
    status: {
      pt: "Concluído",
      en: "Completed"
    },
    isCurrent: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "core-stack",
    title: {
      pt: "CORE STACK",
      en: "CORE STACK"
    },
    skills: ["C#", ".NET", "PostgreSQL", "Azure", "AWS"]
  },
  {
    id: "engineering-tools",
    title: {
      pt: "ENGINEERING TOOLS",
      en: "ENGINEERING TOOLS"
    },
    skills: ["Civil 3D", "Revit"]
  },
  {
    id: "additional-technologies",
    title: {
      pt: "ADDITIONAL TECHNOLOGIES",
      en: "ADDITIONAL TECHNOLOGIES"
    },
    skills: ["Docker", "Git", "TypeScript", "React"]
  }
];

export const featuredProjects: Project[] = [
  {
    id: "lucas-caixa-tech-trainer",
    number: "PROJECT // 01",
    title: "Lucas Caixa Tech Trainer",
    subtitle: {
      pt: "Plataforma de simulados e banco de questões para exames de TI",
      en: "Exam simulation and question bank platform for IT exams"
    },
    category: {
      pt: "Aplicação Web / Treinamento Técnico",
      en: "Web Application / Technical Training"
    },
    shortDescription: {
      pt: "Plataforma web de simulados interativos e banco de questões categorizadas por disciplina com gerenciamento de estado e temporizador de prova.",
      en: "Interactive web training platform featuring subject-categorized question banks, official exam timer, and responsive state management."
    },
    keyFeatures: {
      pt: [
        "Simulados com temporizador de exame",
        "Banco de questões categorizado por disciplina",
        "Persistência local de histórico de tentativas e desempenho"
      ],
      en: [
        "Exam simulations with official countdown timer",
        "Question bank categorized by domain subject",
        "Local persistence for simulation history and progress"
      ]
    },
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/lucasgm18/lucas-caixa-tech-trainer",
    liveUrl: "https://lucas-caixa-tech-trainer.vercel.app/",
    isLiveAvailable: true
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
      pt: "Software Interativo / Game Engine",
      en: "Interactive Software / Game Engine"
    },
    shortDescription: {
      pt: "Jogo roguelike tático baseado em turnos desenvolvido com foco em código limpo, arquitetura desacoplada e gerenciamento autoritativo de estado de combate.",
      en: "Turn-based tactical roguelike game built with clean code principles, decoupled architecture, and authoritative combat state management."
    },
    keyFeatures: {
      pt: [
        "Combate tático por turnos e encontros sequenciais",
        "Progressão em gauntlet de 10 andares e batalha de chefes",
        "Lógica de avaliação de combate desacoplada da camada de renderização"
      ],
      en: [
        "Turn-based tactical combat and sequential encounters",
        "10-floor gauntlet progression and boss battles",
        "Combat evaluation logic decoupled from UI rendering"
      ]
    },
    technologies: ["TypeScript", "React", "Phaser.js", "Node.js"],
    githubUrl: "https://github.com/lucasgm18/Tower-Of-Lucas",
    // Tower of Lucas strictly has NO live URL
    isLiveAvailable: false
  }
];

