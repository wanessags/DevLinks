# SPEC.md — Projeto DevLinks

## 1. Visão geral

O DevLinks é uma aplicação web desenvolvida com React,
TypeScript e Vite 8.

Seu objetivo é reunir informações de perfil, links
importantes e redes sociais em uma única página,
com interface responsiva, acessível e personalizável.

O projeto faz parte da atividade acadêmica
"Projeto 03 — DevLinks com React, IA, OpenCode e MCP".

### Referência da atividade

https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93

### Repositório GitHub

https://github.com/wanessags/DevLinks

### Objetivo principal

Desenvolver uma aplicação baseada no Figma do professor,
aplicando conceitos de React, TypeScript, componentização,
Props, useState, eventos, renderização de listas com map()
e persistência de dados.

---

## 2. Tecnologias utilizadas

### Front-end

- React
- TypeScript 5.9.3
- Vite 8.3.7
- HTML5
- CSS3
- React Icons 5.7.0

### Ambiente de desenvolvimento

- Node.js 24
- npm
- Visual Studio Code
- Git
- GitHub

### Qualidade e testes

- ESLint
- TypeScript Compiler
- Playwright Test
- Chromium Desktop
- Chromium Mobile (Pixel 7 emulado)

### Ferramentas de apoio

- Figma
- OpenCode
- Context7 MCP

---

## 3. Requisitos funcionais

### RF01 — Perfil personalizado

A aplicação deve exibir:

- Foto real do usuário.
- Nome de usuário.
- Avatar circular.
- Borda destacada.
- Alinhamento centralizado.

Local da imagem:

`public/images/perfil.jpg`

Componente responsável:

`src/components/Profile.tsx`

**Status:** Implementado em código.

**Observação:** A confirmação da foto real e do nome
definitivo depende da revisão visual final.

### RF02 — Lista de links

A aplicação deve apresentar quatro links externos.

Requisitos:

- Utilizar componente reutilizável.
- Receber informações por Props.
- Utilizar tipagem TypeScript.
- Renderizar listas com map().
- Armazenar os dados em arquivo separado.
- Abrir URLs externas em novas abas.
- Utilizar target="\_blank".
- Utilizar rel="noopener noreferrer".
- Manter estilos consistentes com o Figma.

Arquivos:

- `src/components/LinkButton.tsx`
- `src/data/links.ts`
- `src/App.tsx`

**Status:** Implementado e validado por testes.

**Observação:** Os destinos de demonstração ainda
podem ser substituídos pelos links definitivos.

### RF03 — Redes sociais

A aplicação deve exibir:

- GitHub
- Instagram
- YouTube
- LinkedIn

Requisitos:

- Utilizar React Icons.
- Exibir ícones centralizados.
- Utilizar links externos.
- Abrir URLs em novas abas.
- Identificar links com aria-label.
- Permitir navegação por teclado.
- Preservar contraste nos dois temas.

Componente:

`src/components/SocialLinks.tsx`

**Status:** Implementado e validado por testes.

**Observação:** As URLs pessoais de algumas redes
sociais ainda precisam ser personalizadas.

### RF04 — Modo claro e escuro

A aplicação deve permitir alternar entre os temas.

Requisitos:

- Utilizar useState.
- Utilizar eventos React.
- Criar componente ThemeToggle.
- Utilizar Props tipadas.
- Alterar estilos com data-theme.
- Exibir ícones de sol e lua.
- Atualizar textos, botões, ícones e fundo.
- Garantir funcionamento por teclado.

Arquivos:

- `src/App.tsx`
- `src/components/ThemeToggle.tsx`
- `src/App.css`

**Status:** Implementado e validado.

### RF05 — Persistência do tema

O tema selecionado deve permanecer após atualizar
ou reabrir a aplicação no mesmo navegador.

Implementação:

- localStorage
- useState
- useEffect

Chave:

`devlinks-theme`

Valores permitidos:

- `light`
- `dark`

Comportamento esperado:

1. Consultar o localStorage na inicialização.
2. Recuperar o tema salvo, quando válido.
3. Utilizar dark como tema padrão.
4. Atualizar a preferência ao alternar o tema.
5. Preservar a aplicação caso o armazenamento
   esteja indisponível.

**Status:** Implementado e validado.

### RF06 — Responsividade

A aplicação deve funcionar em:

- Desktop.
- Notebooks.
- Tablets.
- Smartphones.

Requisitos:

- Layout centralizado.
- Largura adaptável.
- Espaçamentos responsivos.
- Links acessíveis em telas pequenas.
- Ícones alinhados.
- Ausência de rolagem horizontal indevida.

**Status:** Implementado.

**Validação:** Testes Playwright aprovados
no desktop e mobile emulado.

**Observação:** Comparação exata com o Figma
ainda depende de revisão visual.

### RF07 — Acessibilidade

Requisitos:

- HTML semântico.
- Textos alternativos.
- Rótulos acessíveis.
- Navegação por teclado.
- Indicadores de foco visíveis.
- Contraste adequado.
- Suporte a prefers-reduced-motion.
- Links identificáveis por tecnologias assistivas.

**Status:** Parcialmente implementado.

**Validação:** Os testes automatizados confirmam
alguns aspectos de acessibilidade, mas não
substituem uma auditoria completa.

---

## 4. Requisitos não funcionais

### RNF01 — Organização

- Utilizar componentes reutilizáveis.
- Separar dados e apresentação.
- Evitar duplicação de código.
- Manter nomes claros para arquivos e funções.

### RNF02 — Manutenibilidade

- Utilizar TypeScript.
- Tipar Props.
- Evitar any sem justificativa.
- Não remover funcionalidades existentes.

### RNF03 — Compatibilidade

- Manter Vite na versão principal 8.
- Utilizar Node.js compatível.
- Garantir execução em navegadores modernos.

### RNF04 — Design

- Seguir a referência visual do Figma.
- Manter consistência de cores.
- Preservar o avatar circular.
- Manter o layout centralizado.
- Garantir coerência nos dois temas.

### RNF05 — Segurança

- Não incluir credenciais no repositório.
- Utilizar rel="noopener noreferrer".
- Evitar dependências desnecessárias.
- Avaliar alertas do npm audit.

---

## 5. Componentes React

### Profile.tsx

Responsável por:

- Foto de perfil.
- Nome de usuário.
- Estrutura visual do cabeçalho.

### ThemeToggle.tsx

Responsável por:

- Alternar o tema.
- Exibir ícones de sol e lua.
- Receber tema atual e função de alternância.

### LinkButton.tsx

Responsável por:

- Renderizar links individuais.
- Receber título e URL via Props.
- Abrir destinos externos.

### SocialLinks.tsx

Responsável por:

- Renderizar ícones sociais.
- Organizar links em uma navegação.
- Garantir nomes acessíveis.

### Footer.tsx

Responsável por:

- Exibir a mensagem do rodapé.

---

## 6. Estrutura do projeto

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
├── README.md
├── playwright.config.ts
├── tsconfig.json
├── eslint.config.js
├── index.html
├── package.json
└── package-lock.json
```

---

## 7. Gerenciamento de tema

Tipo utilizado:

`"light" | "dark"`

Estado:

`useState`

Persistência:

`localStorage`

Chave:

`devlinks-theme`

Tema padrão:

`dark`

O componente App é responsável por controlar
e persistir a preferência.

O componente ThemeToggle recebe o tema
atual e a função responsável pela alternância.

---

## 8. Testes automatizados — Playwright

### Ferramenta

Playwright Test.

### Ambientes utilizados

- Desktop Chromium.
- Mobile Chromium (Pixel 7 emulado).

### Casos de teste

| ID  | Cenário                        | Desktop  | Mobile   |
| --- | ------------------------------ | -------- | -------- |
| T01 | Carregamento da aplicação      | Aprovado | Aprovado |
| T02 | Exibição dos quatro links      | Aprovado | Aprovado |
| T03 | Exibição das redes sociais     | Aprovado | Aprovado |
| T04 | Alternância de tema            | Aprovado | Aprovado |
| T05 | Persistência do tema           | Aprovado | Aprovado |
| T06 | Ausência de rolagem horizontal | Aprovado | Aprovado |

### Resultado final informado

- Total de testes: 12.
- Testes aprovados: 12.
- Testes reprovados: 0.
- Taxa de aprovação: 100%.

**Status: CONCLUÍDO.**

Os resultados foram confirmados pelo usuário
após a correção do teste T03.

### Correção realizada no teste T03

Problema identificado:

A busca por GitHub encontrava dois elementos:

1. Botão principal "Conheça meu GitHub".
2. Ícone de rede social GitHub.

O Playwright apresentava:

`strict mode violation`

Solução:

- Limitar a busca à navegação "Redes sociais".
- Utilizar getByRole("navigation").
- Buscar os links dentro dessa navegação.
- Preservar os componentes da aplicação.
- Validar a renderização em desktop e mobile.

Resultado:

- Teste T03 Desktop: aprovado.
- Teste T03 Mobile: aprovado.
- Suíte completa: 12 testes aprovados,
  conforme confirmação do usuário.

### Limitações dos testes

Os testes atuais não garantem:

- Correspondência visual exata ao Figma.
- Ausência de todos os problemas de acessibilidade.
- Disponibilidade real dos sites externos.
- Qualidade visual da fotografia.
- Ausência de alertas de segurança nas dependências.

Esses pontos fazem parte da revisão final.

---

## 9. Comandos de validação

### Verificar tipos

```bash
npm run typecheck
```

### Executar ESLint

```bash
npm run lint
```

### Criar build de produção

```bash
npm run build
```

### Executar Playwright

```bash
npm run test:e2e
```

### Abrir relatório

```bash
npm run test:e2e:report
```

### Executar no navegador visível

```bash
npx playwright test --headed
```

---

## 10. Histórico de desenvolvimento

### Etapa 01 — Análise da atividade

- Identificação dos requisitos.
- Análise inicial da referência Figma.
- Planejamento dos componentes.

**Status:** Concluída.

### Etapa 02 — Configuração inicial

- Criação com React e Vite 8.
- Instalação das dependências.
- Configuração do Git e GitHub.

**Status:** Concluída.

### Etapa 03 — Documentação inicial

- Criação do AGENTS.md.
- Criação do SPEC.md.
- Definição de regras para a IA.

**Status:** Concluída.

### Etapa 04 — Interface estática

- Criação dos componentes React.
- Quatro botões renderizados com map().
- Layout inicial.
- Estilos CSS.

**Status:** Concluída.

### Etapa 05 — Perfil e redes sociais

- Instalação de React Icons.
- Implementação da imagem personalizada.
- Ícones sociais.
- Ajustes de espaçamento e aparência.

**Status:** Implementação concluída.
Revisão visual final pendente.

### Etapa 06 — Migração para TypeScript

- Instalação do TypeScript 5.9.3.
- Instalação do typescript-eslint.
- Migração de JSX para TSX.
- Migração de JS para TS.
- Tipagem de Props.
- Configuração do tsconfig.json.
- Configuração do ESLint.
- Atualização da documentação.

Commit registrado:

`ac78379`

**Status:** Concluída.

### Etapa 07 — Modo claro e escuro

- Implementação com useState.
- Persistência com localStorage.
- Ícones de sol e lua.
- Estilização dos dois temas.
- Acessibilidade básica do seletor.

**Status:** Concluída.

### Etapa 08 — Links externos

- URLs configuráveis.
- Componente LinkButton tipado.
- Redes sociais clicáveis.
- Abertura em nova aba.
- Estados de hover e foco.

**Status:** Implementação concluída.
Personalização dos links pendente.

### Etapa 09 — Testes Playwright

- Instalação do Playwright.
- Instalação do Chromium.
- Configuração desktop e mobile.
- Criação de seis cenários de teste.
- Execução inicial: 10 aprovados, 2 reprovados.
- Identificação do erro no teste T03.
- Correção dos seletores.
- Reexecução dos testes específicos: 2 aprovados.
- Confirmação da suíte completa: 12 aprovados.

**Status:** CONCLUÍDA.

### Etapa 10 — Documentação final

- Atualização do README.md.
- Consolidação dos requisitos.
- Atualização completa do SPEC.md.
- Registro dos testes aprovados.
- Identificação das pendências finais.

**Status:** Documentação preparada.
Commit final pendente.

---

## 11. Critérios de aceitação

### CA01 — Perfil

Exibir avatar circular e nome de usuário.

### CA02 — Links

Exibir quatro links externos configuráveis.

### CA03 — Redes sociais

Exibir quatro ícones com navegação funcional.

### CA04 — Tema

Permitir alternar entre claro e escuro.

### CA05 — Persistência

Manter a escolha após atualizar a página.

### CA06 — Responsividade

Garantir funcionamento em desktop e mobile.

### CA07 — TypeScript

Utilizar componentes TSX e tipagem de Props.

### CA08 — Qualidade

Aprovar TypeScript, ESLint e build.

### CA09 — Testes

Aprovar os 12 testes Playwright.

**Resultado informado: 12/12 aprovados.**

### CA10 — Documentação

Manter README.md, AGENTS.md e SPEC.md.

### CA11 — Figma

Realizar comparação visual final da interface
com a referência disponibilizada pelo professor.

---

## 12. Pendências finais

Apesar da aprovação dos testes automatizados,
ainda devem ser conferidos:

1. Foto real e nome definitivo do perfil.
2. URLs pessoais de todas as redes sociais.
3. Links definitivos dos quatro botões.
4. Fidelidade visual ao Figma no desktop e mobile.
5. Contraste e acessibilidade em ambos os temas.
6. Alertas de segurança identificados pelo npm audit.
7. Commit e push da documentação final.

---

## 13. Regras de manutenção

- Não remover funcionalidades existentes.
- Preservar React, TypeScript e Vite 8.
- Atualizar SPEC.md a cada alteração.
- Manter AGENTS.md alinhado aos requisitos.
- Fornecer arquivos completos nas alterações.
- Executar testes antes de cada commit.
- Utilizar mensagens de commit descritivas.
- Não publicar credenciais.
- Manter o GitHub atualizado.

---

## 14. Situação atual do projeto

### Funcionalidades

- Perfil: implementado.
- Quatro links: implementados.
- Redes sociais: implementadas.
- Modo claro e escuro: implementado.
- Persistência do tema: implementada.
- Responsividade: implementada.
- TypeScript: configurado.
- Playwright: 12 testes aprovados.

### Qualidade

- TypeScript: última validação aprovada.
- ESLint: última validação aprovada.
- Build Vite 8: última validação aprovada.
- Playwright: 12/12 testes aprovados,
  conforme resultado informado pelo usuário.

### Entrega

O projeto está funcional e com os testes
automatizados aprovados.

A entrega acadêmica estará completamente
finalizada após a revisão visual do Figma,
a confirmação dos dados personalizados
e a publicação da documentação final.
