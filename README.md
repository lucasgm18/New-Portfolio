<div align="center">

# Lucas Gomes — Software Developer Portfolio

<p align="center">
  <strong>Portfólio pessoal focado em desenvolvimento de software, automações em C# / .NET e ferramentas técnicas para fluxos de engenharia.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/C%23-.NET-512BD4?style=flat-square&logo=dotnet&logoColor=white" alt=".NET" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-6344D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

[Visão Geral](#-visão-geral) •
[Identidade Visual](#-identidade-visual--cyber-purple) •
[Stack Tecnológica](#-stack-tecnológica) •
[Projetos em Destaque](#-projetos-em-destaque) •
[Estrutura do Projeto](#-estrutura-do-projeto) •
[Como Rodar](#-como-rodar-o-projeto) •
[Contato](#-contato)

---

</div>

## 🌐 Visão Geral

Este repositório contém o portfólio pessoal de **Lucas Gomes**, desenvolvido com foco em **engenharia de software, automação de processos e design editorial**.

O portfólio reflete a atuação prática em desenvolvimento de software e ferramentas técnicas para uma consultoria de engenharia civil, com ênfase em soluções diretas, código limpo e arquiteturas desacopladas.

### ✨ Destaques de Implementação:
- **Design System Dual:** Light Mode com estética técnica e natural (oliva suave `#E8E8D8`, creme `#F3F0E3` e bronze `#8A7651`) e Dark Mode de alto contraste com Cyber Purple luminoso (`#9D72FF`).
- **Arquitetura Orientada a Dados:** Separação estrita entre dados tipados (`portfolioData.ts`), traduções (`translations.ts`) e componentes de apresentação.
- **Seções Dedicadas:** Apresentação clara de *Sobre*, *Experiência Profissional*, *Formação Acadêmica*, *Inventário Técnico*, *Projetos* e *Contato*.
- **SEO Profissional & Acessibilidade:** JSON-LD Schema.org (`Person` & `WebSite`), meta tags Open Graph, Twitter metadata, `robots.txt` e `sitemap.xml`.
- **Internacionalização (i18n):** Alternância completa entre **PT-BR** e **EN-US** com persistência no LocalStorage.
- **Ações Rápidas em 1-Clique:** Cópia instantânea de email com feedback visual e links diretos para GitHub e LinkedIn.

---

## 🎨 Identidade Visual

| Elemento | Light Mode (Editorial / Natural) | Dark Mode (Cyber Graphite) |
|---|---|---|
| **Background Principal** | `#E8E8D8` (Oliva suave / Papel técnico) | `#090A0C` (Dark Canvas) |
| **Superfície Secundária** | `#DCDDCC` (Warm Olive / Sand) | `#131417` (Deep Zinc) |
| **Cards** | `#F3F0E3` (Creme quente) | `#111215` (Card Surface) |
| **Texto Primário** | `#3F4034` (Grafite com influência oliva) | `#F5F5F3` (Crisp Light) |
| **Texto Secundário** | `#666754` (Olive Slate) | `#A3A39C` (Muted Zinc) |
| **Accent Principal** | `#8A7651` (Bronze / Areia / Terracota) | `#9D72FF` (Cyber Purple Luminoso) |

---

## 🛠️ Stack Tecnológica

O inventário técnico é organizado por contexto de aplicação:

```text
├── CORE STACK:              C#, .NET, PostgreSQL, Azure, AWS
├── ENGINEERING TOOLS:       Civil 3D, Revit
└── ADDITIONAL TECHNOLOGIES: Docker, Git, TypeScript, React
```

---

## 🚀 Projetos em Destaque

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>01 // Lucas Caixa Tech Trainer</h3>
      <p>Plataforma web interativa de simulados temporizados e banco de questões estruturado por disciplinas para exames e certificações de TI.</p>
      <ul>
        <li><strong>Destaques:</strong> Temporizador de exame, persistência local de tentativas e navegação por disciplinas.</li>
        <li><strong>Stack:</strong> React • TypeScript • Vite • Tailwind CSS</li>
      </ul>
      <p>
        <a href="https://github.com/lucasgm18/lucas-caixa-tech-trainer"><b>🔗 Repositório GitHub</b></a> •
        <a href="https://lucas-caixa-tech-trainer.vercel.app/"><b>⚡ Ver Projeto (Live)</b></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>02 // Tower of Lucas</h3>
      <p>Jogo roguelike tático baseado em turnos com progressão em gauntlet de 10 andares e gerenciamento determinístico de combate.</p>
      <ul>
        <li><strong>Destaques:</strong> Combate tático por turnos, encontros de chefes e lógica de motor isolada da camada gráfica.</li>
        <li><strong>Stack:</strong> TypeScript • React • Phaser.js • Node.js</li>
      </ul>
      <p>
        <a href="https://github.com/lucasgm18/Tower-Of-Lucas"><b>🔗 Repositório GitHub</b></a>
      </p>
    </td>
  </tr>
</table>

---

## 📐 Estrutura do Projeto

```text
src/
├── components/     # Componentes modulares de UI
│   ├── About.tsx                 # Seção Sobre e diretrizes de engenharia
│   ├── Contact.tsx               # Contato com cópia rápida e links diretos
│   ├── Education.tsx             # Formação acadêmica e status atual
│   ├── Experience.tsx            # Experiência em consultoria de engenharia
│   ├── Footer.tsx                # Rodapé com relógio em tempo real (BRT)
│   ├── Header.tsx                # Navegação, controles de tema e idioma
│   ├── Hero.tsx                  # Hero com posicionamento e stack principal
│   ├── Icons.tsx                 # Ícones vetoriais customizados
│   ├── ProjectShowcaseCard.tsx   # Mockups de demonstração dos projetos
│   ├── SelectedWork.tsx          # Apresentação objetiva dos projetos
│   ├── TechCanvas.tsx            # Visualizador interativo de arquitetura
│   └── TechStack.tsx             # Inventário categorizado de tecnologias
├── context/        # Estado global (Tema Dark/Light e Idioma PT/EN)
├── data/           # Fonte única de dados e dicionário de traduções
│   ├── portfolioData.ts
│   └── translations.ts
├── types/          # Tipagem estrita TypeScript (interfaces e modelos)
├── index.css       # Design tokens, paleta Cyber Purple e dot grid
└── main.tsx        # Ponto de entrada da aplicação React
```

---

## 💻 Como Rodar o Projeto

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou gerenciador de pacotes equivalente

### 1. Instalar as dependências
```bash
npm install
```

### 2. Executar o servidor de desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

### Outros comandos disponíveis:
- **Build de produção:** `npm run build`
- **Visualizar build:** `npm run preview`
- **Linting de código:** `npm run lint`

---

## 📬 Contato

- **GitHub:** [@lucasgm18](https://github.com/lucasgm18)
- **LinkedIn:** [Lucas Gomes](https://www.linkedin.com/in/lucasgmelo/)
- **Email:** [lucasgomesm1808@gmail.com](mailto:lucasgomesm1808@gmail.com)

---

<div align="center">
  <sub>Desenvolvido por <strong>Lucas Gomes</strong>. Distribuído sob a licença MIT.</sub>
</div>
