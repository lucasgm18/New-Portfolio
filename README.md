<div align="center">

# Lucas Gomes — Software Developer Portfolio

<p align="center">
  <strong>Portfólio de engenharia de software com foco em aplicações web de alta performance, ferramentas de desenvolvimento e arquitetura limpa.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/ESLint-9.13-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

[Visão Geral](#-visão-geral) •
[Projetos em Destaque](#-projetos-em-destaque) •
[Stack Tecnológica](#-stack-tecnológica) •
[Arquitetura & Design](#-arquitetura--design-system) •
[Como Rodar](#-como-rodar-o-projeto) •
[Contato](#-contato)

---

</div>

## 🌐 Visão Geral

Este projeto é o portfólio pessoal de **Lucas Gomes**, desenvolvido com uma estética **editorial, minimalista e técnica**. O design combina tipografia precisa (*Plus Jakarta Sans* e *JetBrains Mono*), grid milimetrado sutil, suporte nativo a **Light Mode** (com tom de papel marfim confortável) e **Dark Mode** de alto contraste, além de internacionalização completa (**PT-BR** e **EN-US**).

### ✨ Destaques de Implementação:
- **Design Editorial & Acessibilidade:** Cores calibradas em conformidade com o padrão **WCAG AA** para conforto prolongado de leitura.
- **Internacionalização (i18n):** Alternância fluida e reativa entre Português e Inglês com persistência local.
- **Painel Técnico no Hero:** Visualização interativa da arquitetura em camadas (`UI_COMPONENT`, `DOMAIN_LOGIC`, `REPOSITORY`, `STATE_ENGINE`, `DATA_STORE`).
- **Ações Diretas em 1-Clique:** Cópia instantânea de email com feedback tátil e links diretos para plataformas de engenharia.

---

## 🚀 Projetos em Destaque

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>01 // Lucas Caixa Tech Trainer</h3>
      <p>Plataforma web de treinamento contínuo com simulados temporizados e banco de questões estruturado por disciplinas para exames e certificações técnicas.</p>
      <ul>
        <li><strong>Arquitetura:</strong> Modular em React + TypeScript com separação por domínio.</li>
        <li><strong>Diferencial:</strong> Persistência local e motor de avaliação instantâneo.</li>
        <li><strong>Stack:</strong> React • TypeScript • Vite • Tailwind CSS</li>
      </ul>
      <p>
        <a href="https://github.com/lucasgm18/lucas-caixa-tech-trainer"><b>🔗 Repositório GitHub</b></a> •
        <a href="https://lucas-caixa-tech-trainer.vercel.app/"><b>🚀 Ver Projeto (Live)</b></a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>02 // Tower of Lucas</h3>
      <p>Jogo tático roguelike baseado em turnos com progressão por andares (gauntlet), regras de combate isoladas e gerenciamento autoritativo de estado.</p>
      <ul>
        <li><strong>Arquitetura:</strong> Camadas desacopladas guiadas por <em>Object Calisthenics</em>.</li>
        <li><strong>Diferencial:</strong> Motor de combate isolado em seletores puros e testes automatizados.</li>
        <li><strong>Stack:</strong> TypeScript • React • Phaser.js • SQLite • Node.js</li>
      </ul>
      <p>
        <a href="https://github.com/lucasgm18/Tower-Of-Lucas"><b>🔗 Repositório GitHub</b></a>
      </p>
    </td>
  </tr>
</table>

---

## 🛠️ Stack Tecnológica

```text
├── Linguagens:            Java, C#, TypeScript, JavaScript, SQL
├── Frameworks & Runtimes: Spring Boot, .NET, React, Node.js, Vite
├── Banco de Dados:        PostgreSQL, SQLite, JPA / Hibernate, Entity Framework
└── Práticas & DevOps:     Docker, REST APIs, Git & GitHub, Clean Architecture
```

---

## 📐 Arquitetura & Design System

A aplicação foi estruturada com foco em modularidade, separação estrita de responsabilidades e manutenibilidade:

```text
src/
├── assets/         # Recursos estáticos e vetores
├── components/     # Componentes modulares de UI
│   ├── About.tsx                 # Seção Sobre e Princípios
│   ├── Contact.tsx               # Contato com cópia rápida e links diretos
│   ├── Footer.tsx                # Rodapé com relógio em tempo real (BRT)
│   ├── Header.tsx                # Barra de navegação, monograma e controles
│   ├── Hero.tsx                  # Hero editorial com métricas técnicas
│   ├── Icons.tsx                 # Ícones vetoriais customizados
│   ├── ProjectDetailModal.tsx    # Modal aprofundado com Case Study e snippets
│   ├── ProjectShowcaseCard.tsx   # Mockups adaptativos aos temas Light/Dark
│   ├── SelectedWork.tsx          # Apresentação escaneável dos projetos
│   ├── TechCanvas.tsx            # Visualizador interativo de arquitetura
│   └── TechStack.tsx             # Inventário visual da stack tecnológica
├── context/        # Estado global (Tema Dark/Light e Idioma PT/EN)
├── data/           # Fonte única de dados dos projetos e traduções
│   ├── portfolioData.ts
│   └── translations.ts
├── types/          # Tipagem estrita TypeScript (interfaces e modelos)
├── index.css       # Design tokens, paleta de cores e dot grid
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
  <sub>Desenvolvido com precisão por <strong>Lucas Gomes</strong>. Distribuído sob a licença MIT.</sub>
</div>
