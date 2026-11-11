# 🔗 DevLinks

Uma aplicação web para reunir links importantes, redes sociais e informações pessoais em um único lugar.

Desenvolvida com **React, TypeScript e Vite 8**, seguindo a proposta do Projeto 03 — DevLinks com IA, OpenCode e MCP.

## 🎯 Objetivo

Desenvolver uma página de links personalizada, responsiva e acessível, seguindo a interface de referência do Figma.

O projeto aplica conceitos de componentização React, Props, useState, eventos, renderização de listas e persistência com localStorage.

## 🚀 Tecnologias

- React 19
- TypeScript 5.9
- Vite 8
- CSS3
- React Icons
- ESLint
- Playwright
- Git e GitHub

## ✨ Funcionalidades

### Perfil

- Foto de perfil personalizada
- Nome de usuário
- Avatar circular

### Links

- Quatro botões principais
- Componentes reutilizáveis
- Lista renderizada com map()
- Links externos em novas abas

### Redes sociais

- GitHub
- Instagram
- YouTube
- LinkedIn
- Ícones com React Icons

### Personalização

- Modo claro e escuro
- Alternância utilizando useState
- Persistência do tema com localStorage
- Tema preservado após atualizar a página

### Responsividade

- Layout para desktop
- Layout para tablets
- Layout para dispositivos móveis

### Acessibilidade

- HTML semântico
- Rótulos acessíveis
- Foco visível
- Navegação por teclado
- Suporte a preferência por movimento reduzido

## 📁 Estrutura do projeto

```text
DevLinks/
├── public/
│   └── images/
│       └── perfil.jpg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Profile.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── LinkButton.tsx
│   │   ├── SocialLinks.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── links.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── tests/
│   └── devlinks.spec.ts
├── AGENTS.md
├── SPEC.md
├── playwright.config.ts
├── tsconfig.json
├── eslint.config.js
├── index.html
└── package.json
```

## ⚙️ Como executar

### Pré-requisitos

- Node.js compatível com Vite 8
- npm
- Git

### Clonar o repositório

```bash
git clone https://github.com/wanessags/DevLinks.git
cd DevLinks
```

### Instalar dependências

```bash
npm install
```

### Iniciar o projeto

```bash
npm run dev
```

Abra o endereço informado no terminal, normalmente:

http://localhost:5173/

## 🧪 Validação

### TypeScript

```bash
npm run typecheck
```

### ESLint

```bash
npm run lint
```

### Build de produção

```bash
npm run build
```

### Playwright

```bash
npx playwright test
```

A configuração prevê testes em Chromium desktop e emulação mobile.

A aprovação completa dos testes automatizados ainda deverá ser registrada após a execução.

## 🎨 Design

A aplicação utiliza uma interface com fundo em degradê, avatar circular, botões centralizados e versões clara e escura.

Referência visual: Figma disponibilizado na atividade do professor.

A comparação visual final ainda deve ser validada.

## 📋 Documentação

- `SPEC.md`: especificação, requisitos e critérios de aceitação.
- `AGENTS.md`: instruções para ferramentas de IA e desenvolvimento.
- `README.md`: apresentação, instalação e utilização.

## 👩‍💻 Desenvolvimento

Projeto acadêmico desenvolvido para praticar React, TypeScript, boas práticas de front-end e desenvolvimento com apoio de ferramentas de IA.

## 📄 Licença

Projeto de finalidade educacional. Nenhuma licença de distribuição adicional foi definida.
