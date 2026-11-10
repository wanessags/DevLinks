# SPEC.md — Projeto DevLinks

## 1. Visão geral

O DevLinks é uma aplicação web desenvolvida com React e Vite 8 que reúne links importantes, redes sociais e informações de um perfil em uma única página.

A interface deverá seguir o layout fornecido no Figma da atividade Projeto 03.

## 2. Tecnologias

- React
- Vite 8
- JavaScript (JSX)
- CSS
- Node.js
- npm
- Git e GitHub

## 3. Funcionalidades

### RF01 — Perfil

Exibir foto de perfil e nome do usuário.

### RF02 — Lista de links

Exibir quatro botões de links configuráveis.

Os links deverão ser renderizados utilizando o método `map()` e componentes reutilizáveis com Props.

### RF03 — Redes sociais

Exibir ícones de redes sociais com links funcionais.

### RF04 — Alternância de tema

Permitir alternar entre modo claro e modo escuro utilizando `useState`.

### RF05 — Persistência do tema

Salvar a preferência de tema utilizando `localStorage`.

### RF06 — Responsividade

Adaptar a interface para dispositivos móveis, tablets e computadores.

### RF07 — Acessibilidade

Garantir navegação por teclado, contraste adequado, textos alternativos e identificação dos botões.

## 4. Componentes

- Profile
- ThemeToggle
- LinkButton
- SocialLinks
- Footer

## 5. Requisitos não funcionais

- Seguir o Figma.
- Utilizar componentes reutilizáveis.
- Manter o código organizado.
- Evitar dependências desnecessárias.
- Garantir compatibilidade com Vite 8.
- Preservar acessibilidade.
- Não remover funcionalidades implementadas.

## 6. Testes

Utilizar Playwright para verificar:

1. Renderização do perfil.
2. Exibição dos quatro links.
3. Funcionamento da alternância de tema.
4. Persistência do tema após recarregar.
5. Funcionamento dos links.
6. Responsividade.
7. Navegação por teclado.

## 7. Critérios de aceitação

O projeto estará concluído quando:

- A interface estiver fiel ao Figma.
- Os componentes estiverem funcionando.
- O modo claro e escuro funcionar corretamente.
- Os links estiverem acessíveis.
- Os testes estiverem aprovados.
- A aplicação funcionar em dispositivos móveis.
- O repositório estiver atualizado no GitHub.
