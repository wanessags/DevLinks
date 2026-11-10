# AGENTS.md — Instruções para IA

## Objetivo

Desenvolver o projeto DevLinks utilizando React e Vite 8, respeitando integralmente o arquivo SPEC.md e a referência visual do Figma.

## Regras obrigatórias

1. Utilizar React com JavaScript e JSX.
2. Manter o Vite na versão principal 8.
3. Seguir os requisitos documentados em SPEC.md.
4. Criar componentes pequenos e reutilizáveis.
5. Utilizar Props para passar dados aos componentes.
6. Utilizar map() para renderizar listas de links.
7. Utilizar useState para controlar a alternância de tema.
8. Persistir o tema utilizando localStorage.
9. Desenvolver uma interface responsiva.
10. Garantir acessibilidade.
11. Não remover funcionalidades existentes.
12. Evitar bibliotecas desnecessárias.
13. Manter organização e legibilidade do código.

## Estrutura sugerida

src/
assets/
components/
Profile.jsx
ThemeToggle.jsx
LinkButton.jsx
SocialLinks.jsx
Footer.jsx
data/
links.js
App.jsx
App.css
index.css
main.jsx

## Processo de desenvolvimento

1. Consultar SPEC.md antes de implementar funcionalidades.
2. Consultar a documentação atualizada quando necessário.
3. Criar inicialmente a interface estática.
4. Implementar as funcionalidades gradualmente.
5. Validar as alterações.
6. Executar os testes.
7. Corrigir os erros encontrados.
8. Registrar as alterações em commits organizados.

## Qualidade

- Não introduzir erros de compilação.
- Evitar código duplicado.
- Utilizar nomes claros para funções e variáveis.
- Garantir funcionamento em telas pequenas.
- Respeitar os estados de foco e interação.
- Não adicionar credenciais ou informações sensíveis ao repositório.

## Validação

Antes de considerar uma etapa concluída, executar:

npm run build
npm run lint

Quando os testes Playwright estiverem configurados, executá-los também.

## Documentação

Manter o README.md atualizado com instruções de instalação, execução, testes e funcionalidades.
