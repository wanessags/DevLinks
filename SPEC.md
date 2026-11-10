# SPEC.md — Projeto DevLinks

## 1. Visão geral

O DevLinks é uma aplicação web desenvolvida com React,
TypeScript e Vite 8, destinada a reunir informações
de perfil, links importantes e redes sociais em uma
única página.

O projeto deve reproduzir o design do Figma
disponibilizado pelo professor.

## 2. Tecnologias

- React
- TypeScript 5.9.3
- Vite 8
- HTML5
- CSS3
- Node.js 24
- npm
- React Icons 5.7.0
- ESLint
- Git e GitHub
- Playwright (planejado)

## 3. Requisitos funcionais

### RF01 — Perfil

Exibir a foto real do usuário e seu nome de perfil.

- Avatar circular
- Foto em public/images/perfil.jpg
- Nome de usuário personalizável

Status: componente implementado.
Validação da foto real pendente.

### RF02 — Links

Exibir quatro botões configuráveis.

- Componentes reutilizáveis
- Props tipadas
- Renderização com map()
- Abertura de URLs externas

Status: renderização implementada.
URLs externas pendentes.

### RF03 — Redes sociais

Exibir ícones de:

- GitHub
- Instagram
- YouTube
- LinkedIn

Utilizar React Icons.

Status: ícones implementados.
Links externos pendentes.

### RF04 — Alternância de tema

Permitir alternar entre modo claro e escuro.

Implementação:

- useState para controlar o tema
- Evento onClick
- Componente ThemeToggle
- Props tipadas
- Atributo data-theme
- Ícones de sol e lua
- Controle acessível via teclado

Status: implementação proposta.
Validação funcional pendente.

### RF05 — Persistência do tema

Salvar a preferência no localStorage.

Chave:
devlinks-theme

Valores:

- light
- dark

Comportamento:

- Ao iniciar, recuperar o tema salvo.
- Se não existir preferência válida, iniciar no escuro.
- Ao alternar, atualizar o localStorage.
- Após recarregar, preservar o tema escolhido.
- Se o localStorage não estiver disponível,
  permitir a alternância durante a sessão.

Status: implementação proposta.
Teste de persistência pendente.

### RF06 — Responsividade

Adaptar o layout para:

- Mobile
- Tablet
- Desktop

Status: CSS responsivo implementado.
Comparação visual com o Figma pendente.

### RF07 — Acessibilidade

Requisitos:

- HTML semântico
- Textos alternativos
- Props e controles acessíveis
- Navegação por teclado
- Foco visível
- Contraste adequado
- Respeito a prefers-reduced-motion

Status: parcialmente implementado.
Auditoria e testes pendentes.

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
- Não criar novos componentes em JSX.
- Tipar as Props.
- Utilizar map() na lista de links.
- Utilizar useState na alternância de temas.
- Persistir o tema no localStorage.
- Preservar os componentes existentes.
- Garantir acessibilidade.
- Seguir o Figma.

## 7. Critérios de aceitação do tema

CA01:
A aplicação inicia em modo escuro quando
não existe preferência salva.

CA02:
Ao clicar no seletor, o tema alterna.

CA03:
A aparência dos botões, textos, ícones e
fundo acompanha o tema selecionado.

CA04:
A escolha permanece após atualizar a página.

CA05:
O seletor funciona por teclado.

CA06:
A aplicação permanece responsiva.

CA07:
A foto e os componentes existentes são preservados.

## 8. Testes

Comandos obrigatórios:

npm run typecheck
npm run lint
npm run build

Testes planejados com Playwright:

- Renderização do perfil
- Exibição dos quatro links
- Links externos
- Alternância do tema
- Persistência no localStorage
- Responsividade
- Acessibilidade básica

## 9. Histórico de desenvolvimento

### Etapa 02 — Inicialização

- React com Vite 8
- Instalação inicial
- Configuração do Git

### Etapa 03 — Documentação

- AGENTS.md
- SPEC.md

### Etapa 04 — Interface estática

- Componentes reutilizáveis
- Lista com map()
- Layout escuro inicial

### Etapa 05 — Perfil e ícones

- React Icons
- Avatar personalizado
- Ícones das redes sociais
- Ajustes de layout

### Etapa 06 — Migração TypeScript

- TypeScript 5.9.3
- Arquivos TSX e TS
- Tipagem das Props
- Configuração do ESLint
- Configuração do tsconfig.json
- Build aprovado
- Commit ac78379 criado

### Etapa 07 — Temas

Alterações propostas:

- Alternância com useState
- Persistência com localStorage
- ThemeToggle acessível
- Estilos de modo claro e escuro
- Ajustes responsivos
- Preferência de movimento reduzido

Status: testes e commit pendentes.

## 10. Próximas etapas

1. Validar os temas claro e escuro.
2. Implementar URLs externas dos botões.
3. Configurar redes sociais reais.
4. Comparar visualmente com o Figma.
5. Implementar Playwright.
6. Revisar acessibilidade.
7. Atualizar README.
8. Finalizar a entrega.

## 11. Critérios de conclusão

O projeto estará concluído quando:

- Os requisitos funcionais estiverem implementados.
- A interface estiver fiel ao Figma.
- Os links funcionarem corretamente.
- Os temas claro e escuro funcionarem.
- A persistência do tema funcionar.
- O layout estiver responsivo.
- Os testes estiverem aprovados.
- O GitHub estiver atualizado.
