# SPEC.md — Projeto DevLinks

## 1. Visão geral

O DevLinks é uma aplicação web desenvolvida com React,
TypeScript e Vite 8.

A aplicação reúne um perfil pessoal, links importantes
e redes sociais em uma página responsiva.

O objetivo é reproduzir a interface disponibilizada
no Figma pelo professor.

## 2. Tecnologias

- React
- TypeScript 5.9.3
- Vite 8
- HTML5
- CSS3
- Node.js 24
- npm
- React Icons 5.7.0
- Git e GitHub
- ESLint
- Playwright (planejado)

## 3. Requisitos funcionais

### RF01 — Perfil

Exibir:

- Foto real do usuário.
- Nome de usuário.
- Avatar circular.

Imagem esperada:
public/images/perfil.jpg

Status: implementado em código; validação da imagem pendente.

### RF02 — Lista de links

Exibir quatro botões configuráveis.

Requisitos técnicos:

- Utilizar componentes reutilizáveis.
- Utilizar Props tipadas com TypeScript.
- Renderizar utilizando map().

Status: estrutura implementada; navegação pendente.

### RF03 — Redes sociais

Exibir ícones de:

- GitHub
- Instagram
- YouTube
- LinkedIn

Biblioteca: React Icons.

Status: ícones implementados; links externos pendentes.

### RF04 — Alternância de tema

Permitir alternar entre tema claro e escuro.

Implementação prevista:

- useState
- Eventos React
- Classes CSS ou atributos de tema

Status: pendente.

### RF05 — Persistência do tema

Salvar a escolha do usuário utilizando localStorage.

O tema deve permanecer após atualizar a página.

Status: pendente.

### RF06 — Responsividade

Adaptar a interface para:

- Mobile
- Tablet
- Desktop

Status: CSS responsivo inicial; validação pendente.

### RF07 — Acessibilidade

Requisitos:

- HTML semântico.
- Descrições acessíveis.
- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- Identificação de controles interativos.

Status: parcialmente implementado.

## 4. Componentes

- Profile.tsx
- ThemeToggle.tsx
- LinkButton.tsx
- SocialLinks.tsx
- Footer.tsx

## 5. Estrutura do projeto

DevLinks/
public/
images/
perfil.jpg
src/
assets/
components/
Profile.tsx
ThemeToggle.tsx
LinkButton.tsx
SocialLinks.tsx
Footer.tsx
data/
links.ts
App.tsx
App.css
index.css
main.tsx
AGENTS.md
SPEC.md
tsconfig.json
eslint.config.js
index.html
package.json

## 6. Requisitos técnicos

- Manter Vite 8.
- Utilizar React com TypeScript.
- Utilizar tipagem explícita em Props.
- Não adicionar novas funcionalidades em JavaScript/JSX.
- Utilizar map() para renderização de listas.
- Utilizar useState na alternância de temas.
- Persistir o tema no localStorage.
- Preservar funcionalidades existentes.
- Garantir acessibilidade.
- Seguir a referência visual do Figma.

## 7. Validações

Comandos obrigatórios:

npm run typecheck
npm run lint
npm run build

Testes planejados com Playwright:

- Renderização do perfil.
- Exibição dos quatro botões.
- Funcionamento dos links externos.
- Alternância de tema.
- Persistência do tema.
- Responsividade.
- Navegação por teclado.

## 8. Histórico de desenvolvimento

### Etapa 02 — Configuração

- Criação do React com Vite 8.
- Instalação de dependências.

### Etapa 03 — Documentação

- Criação do AGENTS.md.
- Criação do SPEC.md.

### Etapa 04 — Interface estática

- Componentes iniciais.
- Layout escuro.
- Quatro botões com map().

### Etapa 05 — Perfil e redes sociais

- React Icons.
- Avatar com imagem personalizada.
- Ícones de redes sociais.
- Ajustes visuais.

### Etapa 06 — Migração TypeScript

- Instalação do TypeScript 5.9.3.
- Instalação do typescript-eslint.
- Conversão de JSX para TSX.
- Conversão dos dados JS para TS.
- Tipagem das propriedades.
- Configuração do tsconfig.json.
- Configuração do ESLint.
- Atualização da documentação.

Status: implementação proposta; validação pendente.

## 9. Próximas implementações

1. Validar migração para TypeScript.
2. Configurar links externos reais.
3. Implementar o tema claro e escuro.
4. Persistir a escolha no localStorage.
5. Ajustar o layout conforme Figma.
6. Implementar testes Playwright.
7. Atualizar README.
8. Finalizar a entrega.

## 10. Critérios de aceitação

O projeto estará concluído quando:

- Todos os requisitos funcionais estiverem implementados.
- A interface estiver fiel ao Figma.
- O projeto utilizar React e TypeScript.
- O Vite permanecer na versão 8.
- O build e lint passarem.
- Os testes automatizados passarem.
- O GitHub estiver atualizado.
