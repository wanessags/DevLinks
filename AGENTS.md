# AGENTS.md — DevLinks

## Objetivo

Desenvolver o DevLinks utilizando React,
TypeScript e Vite 8.

A aplicação deve seguir o Figma fornecido
pelo professor e os requisitos do SPEC.md.

## Regras obrigatórias

1. Utilizar React com TypeScript.
2. Criar componentes em arquivos .tsx.
3. Criar arquivos de dados em .ts.
4. Manter Vite na versão principal 8.
5. Consultar SPEC.md antes de implementar mudanças.
6. Atualizar SPEC.md em cada etapa.
7. Utilizar Props tipadas.
8. Utilizar map() para renderizar listas.
9. Utilizar useState para estados interativos.
10. Utilizar localStorage para persistir o tema.
11. Manter responsividade.
12. Garantir acessibilidade.
13. Não remover funcionalidades existentes.
14. Não adicionar dependências desnecessárias.
15. Evitar any sem justificativa.
16. Não adicionar credenciais ao repositório.

## Design

- Seguir o layout original do Figma.
- Utilizar a foto real do usuário.
- Manter os quatro botões principais.
- Utilizar React Icons para redes sociais.
- Implementar os temas claro e escuro.
- Preservar espaçamentos e proporções.
- Garantir boa experiência no mobile.
- Não modificar elementos fora do escopo.

## Componentes

- Profile
- ThemeToggle
- LinkButton
- SocialLinks
- Footer

## Gerenciamento de tema

O tema deve utilizar:

- useState
- Props tipadas
- Eventos React
- localStorage
- Atributo data-theme

Chave de armazenamento:
devlinks-theme

Valores permitidos:

- light
- dark

Tema padrão:
dark

Não utilizar manipulação direta do DOM
para trocar a aparência dos componentes.

## Acessibilidade

- Utilizar elementos semânticos.
- Garantir navegação por teclado.
- Utilizar rótulos acessíveis.
- Garantir foco visível.
- Respeitar prefers-reduced-motion.
- Verificar contraste nos dois temas.

## Processo de desenvolvimento

1. Consultar SPEC.md.
2. Identificar arquivos envolvidos.
3. Preservar funcionalidades existentes.
4. Implementar a alteração.
5. Atualizar SPEC.md.
6. Executar verificação TypeScript.
7. Executar ESLint.
8. Executar build.
9. Validar o funcionamento no navegador.
10. Fazer commit após validação.

## Comandos de validação

npm run typecheck
npm run lint
npm run build

## Testes automatizados

Planejar testes com Playwright para:

- Perfil
- Links
- Redes sociais
- Modo claro e escuro
- Persistência do tema
- Responsividade
- Navegação por teclado

Não declarar testes como aprovados
sem executar os comandos correspondentes.

## Git

- Fazer commits por etapa.
- Utilizar mensagens descritivas.
- Não fazer commit com falhas conhecidas.
- Não adicionar node_modules ou dist.
- Não adicionar credenciais ou tokens.

## Documentação

Atualizar SPEC.md em todas as etapas.

Manter README.md atualizado.

Registrar funcionalidades pendentes
sem declará-las concluídas antecipadamente.

## Entregas

Fornecer os arquivos completos quando solicitados.

Não enviar apenas trechos ou diffs.

Preservar o código existente e evitar
alterações sem relação com a tarefa.
