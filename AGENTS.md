# AGENTS.md — DevLinks

## Objetivo

Desenvolver o DevLinks utilizando React,
TypeScript e Vite 8, seguindo o Figma
e os requisitos documentados em SPEC.md.

## Regras obrigatórias

1. Utilizar React com TypeScript.
2. Criar componentes React em arquivos .tsx.
3. Criar arquivos de dados TypeScript em .ts.
4. Manter Vite na versão principal 8.
5. Consultar SPEC.md antes de cada alteração.
6. Atualizar SPEC.md após cada etapa.
7. Utilizar Props tipadas.
8. Utilizar map() para renderizar listas.
9. Utilizar useState no controle do tema.
10. Utilizar localStorage para persistência do tema.
11. Implementar responsividade.
12. Garantir acessibilidade.
13. Preservar funcionalidades existentes.
14. Não adicionar dependências desnecessárias.
15. Não utilizar any sem justificativa técnica.
16. Não inserir credenciais no código.

## Design

- Seguir o Figma disponibilizado pelo professor.
- Manter a foto real do perfil.
- Utilizar React Icons para redes sociais.
- Implementar modos claro e escuro.
- Garantir uma experiência adequada no mobile.
- Evitar mudanças visuais fora do escopo.

## Estrutura

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

## Fluxo de desenvolvimento

1. Analisar SPEC.md.
2. Identificar os arquivos envolvidos.
3. Preservar o comportamento existente.
4. Implementar a alteração.
5. Atualizar SPEC.md.
6. Executar typecheck.
7. Executar lint.
8. Executar build.
9. Corrigir erros.
10. Fazer commit por etapa validada.

## Comandos de validação

npm run typecheck
npm run lint
npm run build

## Git

Utilizar commits descritivos.

Não realizar commit de código com falhas
de compilação ou validação.

Não adicionar node_modules, dist ou
arquivos com credenciais ao repositório.

## Testes

Utilizar Playwright para os testes de interface
quando a configuração estiver disponível.

Validar:

- Perfil.
- Links.
- Redes sociais.
- Modo claro e escuro.
- Persistência do tema.
- Responsividade.
- Acessibilidade.

## Documentação

Atualizar SPEC.md obrigatoriamente em cada etapa.

Manter README.md atualizado conforme o progresso.

Documentar funcionalidades pendentes sem
declará-las concluídas antecipadamente.
