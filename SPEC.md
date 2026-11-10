# SPEC.md — Projeto DevLinks

## 1. Visão geral

O DevLinks é uma aplicação de página única para reunir
links importantes, redes sociais e informações pessoais.

O projeto deve seguir o Figma disponibilizado pelo
professor e utilizar React, TypeScript e Vite 8.

## 2. Tecnologias

- React
- TypeScript 5.9.3
- Vite 8
- CSS3
- React Icons 5.7.0
- Node.js 24
- npm
- ESLint
- Git e GitHub
- Playwright (planejado)

## 3. Requisitos funcionais

### RF01 — Perfil

Exibir foto real e nome do usuário.

- Foto: public/images/perfil.jpg
- Avatar circular
- Nome de usuário configurável

Status: componente implementado.
Confirmação da foto real pendente.

### RF02 — Lista de links

Exibir quatro links externos configuráveis.

- Utilizar componente LinkButton.
- Utilizar Props tipadas.
- Renderizar com map().
- Abrir links em novas abas.
- Utilizar rel="noopener noreferrer".
- Manter os estilos do Figma.

Status: implementação proposta.
Testes funcionais pendentes.

### RF03 — Redes sociais

Exibir GitHub, Instagram, YouTube e LinkedIn.

- Utilizar React Icons.
- Permitir navegação por links externos.
- Utilizar nomes acessíveis.
- Abrir em novas abas.

O GitHub aponta para github.com/wanessags.
Os outros ícones utilizam as páginas iniciais
das plataformas até serem configurados os perfis reais.

Status: implementação proposta.
Personalização pendente.

### RF04 — Tema claro e escuro

- Utilizar useState.
- Alternar pelo componente ThemeToggle.
- Utilizar data-theme.
- Garantir uso por teclado.

Status: implementado e validado pelo usuário.

### RF05 — Persistência do tema

Salvar a preferência no localStorage.

Chave: devlinks-theme
Valores: light e dark
Padrão: dark

Status: implementado e validado pelo usuário.

### RF06 — Responsividade

Suportar mobile, tablet e desktop.

Status: CSS responsivo inicial.
Comparação com Figma pendente.

### RF07 — Acessibilidade

- HTML semântico.
- Texto alternativo para imagens.
- Rótulos acessíveis.
- Navegação por teclado.
- Foco visível.
- Contraste adequado.
- Respeito a prefers-reduced-motion.

Status: implementação parcial.
Auditoria pendente.

## 4. Componentes

- Profile.tsx
- ThemeToggle.tsx
- LinkButton.tsx
- SocialLinks.tsx
- Footer.tsx

## 5. Estrutura

DevLinks/
public/
images/
perfil.jpg
src/
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

## 6. Regras técnicas

- Manter React com TypeScript e Vite 8.
- Tipar todas as Props.
- Utilizar map() para listas.
- Utilizar useState para interações.
- Persistir o tema no localStorage.
- Não remover funcionalidades existentes.
- Preservar o design e a acessibilidade.
- Atualizar SPEC.md em cada etapa.
- Fazer commit após validação.

## 7. Histórico de desenvolvimento

### Etapa 02 — Configuração

- React e Vite 8.
- Configuração inicial do repositório.

### Etapa 03 — Documentação

- AGENTS.md.
- SPEC.md.

### Etapa 04 — Interface estática

- Componentes reutilizáveis.
- Layout inicial.
- Lista de links.

### Etapa 05 — Perfil e ícones

- Foto de perfil personalizada em código.
- React Icons.
- Ícones sociais.

### Etapa 06 — TypeScript

- Migração de JSX para TSX.
- Migração de JS para TS.
- Tipagem de Props.
- Configuração do ESLint.
- Build aprovado.
- Commit ac78379.

### Etapa 07 — Temas

- Modo claro e escuro.
- useState.
- localStorage.
- Estilização de temas.

Status: validado pelo usuário.

### Etapa 08 — Links funcionais

Alterações propostas:

- URLs tipadas em links.ts.
- Links externos no LinkButton.
- Links externos em SocialLinks.
- Estados de hover e foco.
- Atualização da documentação.

Status: testes e commit pendentes.

## 8. Critérios de aceitação da etapa 08

- Quatro botões aparecem.
- Cada botão abre o endereço configurado.
- Os ícones sociais são clicáveis.
- Links externos abrem em novas abas.
- A navegação por teclado funciona.
- Os dois temas continuam funcionando.
- O tema permanece após recarregamento.
- O layout permanece responsivo.
- Typecheck, lint e build passam.

## 9. Testes

Comandos:

npm run typecheck
npm run lint
npm run build

Testes Playwright planejados:

- Perfil
- Links externos
- Redes sociais
- Temas
- Persistência do tema
- Responsividade
- Navegação por teclado

## 10. Próximas etapas

1. Validar os links externos.
2. Personalizar URLs e informações do perfil.
3. Comparar a interface com o Figma.
4. Implementar Playwright.
5. Revisar acessibilidade.
6. Atualizar README.
7. Finalizar a entrega.

## 11. Critérios de conclusão

O DevLinks estará concluído quando:

- Todos os requisitos estiverem implementados.
- A interface corresponder ao Figma.
- Os links funcionarem.
- Os temas funcionarem e persistirem.
- A responsividade estiver validada.
- Os testes estiverem aprovados.
- A documentação estiver atualizada.
- O código estiver publicado no GitHub.
