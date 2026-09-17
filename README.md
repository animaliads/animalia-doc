# Animalia DS Docs

Documentacao do Animalia Design System, criada com [Docusaurus 3](https://docusaurus.io/). Este repositorio concentra as paginas publicas do portal, guias de uso, fundamentos, tokens, componentes, padroes e materiais de apoio para designers e desenvolvedores.

## Necessidades especificas

- Node.js 20 ou superior, conforme definido em `package.json`.
- npm, usando `package-lock.json` como fonte de verdade para instalacao.
- Conhecimento basico de Markdown, MDX, React e Docusaurus.
- Acesso aos assets oficiais do Animalia, como imagens, icones, fontes, tokens e referencias de Figma.
- Acesso aos pacotes `@animaliads/*` usados em exemplos e integracoes.
- Validacao de acessibilidade, estados, anatomia, boas praticas e comportamento antes de publicar paginas novas.
- Padrao de escrita em portugues, com termos tecnicos consistentes com o proprio design system.

## Instalacao

```console
npm ci
```

## Desenvolvimento local

```console
npm start
```

O comando inicia o servidor local do Docusaurus. A maior parte das mudancas em paginas, componentes e estilos aparece automaticamente sem reiniciar o servidor.

## Build

```console
npm run build
```

O build gera o conteudo estatico em `build/`. Como o projeto usa `onBrokenLinks`, `onBrokenAnchors` e `onBrokenMarkdownLinks` como `throw`, links quebrados devem ser corrigidos antes da publicacao.

## Changelog

O historico consolidado de mudancas fica em [`CHANGELOG.md`](./CHANGELOG.md). O portal tambem possui changelogs especificos em `docs/about/changelog.md` e `docs/about/changelog-portal.md`.

## Scripts disponiveis

- `npm start`: inicia o ambiente local.
- `npm run build`: gera o site estatico.
- `npm run serve`: serve localmente o conteudo gerado em `build/`.
- `npm run clear`: limpa cache e artefatos do Docusaurus.
- `npm run write-translations`: gera arquivos de traducao.
- `npm run write-heading-ids`: adiciona ids estaveis em headings.
- `npm run deploy`: publica o site conforme configuracao do Docusaurus.

## Processo de documentacao

1. Defina o tipo de conteudo: fundamento, token, componente, comportamento, guia ou pagina institucional.
2. Confira se ja existe uma pagina relacionada em `docs/` para evitar duplicidade.
3. Crie ou edite a pagina em Markdown ou MDX, mantendo frontmatter com `id`, `title` e/ou `sidebar_label` quando necessario.
4. Use a estrutura esperada para o tipo de pagina. Componentes geralmente precisam de visao geral, anatomia, comportamento, boas praticas, acessibilidade, desenvolvimento e propriedades customizaveis.
5. Coloque imagens perto do assunto documentado, por exemplo em `docs/components/img/<componente>/` ou `docs/foundation/img/<tema>/`.
6. Atualize `sidebars.js` quando a pagina precisar aparecer em uma sidebar manual. A pasta `docs/components` usa sidebar autogerada.
7. Revise links internos, nomes de arquivos, imagens e exemplos de codigo.
8. Rode `npm run build` antes de publicar.

## O que uma pagina precisa ter

- Titulo claro e consistente com o nome usado na sidebar.
- Objetivo da pagina: para que aquilo serve e quando deve ser usado.
- Anatomia ou composicao, quando o assunto for visual ou interativo.
- Variacoes, estados e comportamentos esperados.
- Boas praticas e exemplos de uso correto e incorreto quando aplicavel.
- Regras de acessibilidade, foco, teclado, contraste, leitura por tecnologias assistivas e textos alternativos.
- Referencias de tokens, variaveis, propriedades, pacotes ou implementacoes.
- Imagens, diagramas ou exemplos que ajudem a entender o uso real.
- Links para conteudos relacionados dentro do portal.

## Estrutura do repositorio

- `docs/`: conteudo principal da documentacao.
- `docs/about/`: paginas institucionais do Animalia, primeiros passos, contribuicao, time e changelogs.
- `docs/components/`: documentacao dos componentes do design system.
- `docs/foundation/`: fundamentos visuais, como cor, tipografia, espacamento, icones, imagem e logo.
- `docs/designtokens/`: documentacao dos design tokens.
- `docs/patterns/`: padroes de comportamento e fluxos recorrentes.
- `docs/guideline/`: guia de tom e voz.
- `src/`: customizacoes de interface do site, tema, componentes React e pagina inicial.
- `static/`: arquivos servidos diretamente pelo Docusaurus, como imagens, fontes, scripts e dados de icones.
- `blog/`: posts de blog mantidos pelo Docusaurus.
- `i18n/`: arquivos de internacionalizacao.
- `build/`: saida gerada pelo build. Nao deve ser editada manualmente.
- `sidebars.js`: define a organizacao das sidebars.
- `docusaurus.config.js`: configuracao principal do portal.

## Paginas e secoes da documentacao

### Pagina inicial

- `src/pages/index.js`: landing page do portal Animalia DS.
- `src/components/Homepage*.js`: secoes da home, destaques, chamadas e rodape.
- `src/css/custom.css`: estilos globais e ajustes de tema.

### Sobre

Arquivos em `docs/about/` explicam o que e o Animalia DS, como contribuir e quem mantem o sistema.

- `intro.md`: apresentacao do Animalia Design System.
- `principles.md`: principios do Animalia.
- `getting-started.md`: primeiros passos para desenvolvimento.
- `getting-started-design.mdx`: primeiros passos para designers e uso no Figma.
- `contribution-guide.md`: fluxo de contribuicao, setup e estrutura do repositorio.
- `team.mdx`: time e colaboradores.
- `changelog.md`: historico de componentes.
- `changelog-portal.md`: historico do portal de documentacao.

### Fundamentos

Arquivos em `docs/foundation/` descrevem as bases visuais do design system.

- `intro.md`: entrada da secao de fundamentos.
- `color.mdx`: construcao e familias de cores.
- `color-good-practices.mdx`: boas praticas de uso de cor e acessibilidade.
- `typography.mdx`: familia tipografica, tamanhos, pesos, line-height e letter-spacing.
- `typography-styles.mdx`: estilos tipograficos aplicados.
- `spacing.mdx`: regras de espacamento.
- `icon.mdx`: biblioteca de icones Animalia.
- `image.mdx`: uso, boas praticas e acessibilidade para imagens.
- `logo.mdx`: regras de uso do logo.
- `grid.md`: sistema de grid.

### Tokens

Arquivos em `docs/designtokens/` documentam os tokens que conectam design e codigo.

- `design-tokens.mdx`: introducao, global tokens e brand tokens.
- `design-tokens-color.mdx`: tokens de cores de marca, neutras e feedback.
- `design-tokens-typo.mdx`: tokens de tipografia.
- `design-tokens-border.mdx`: tokens de borda.
- `design-tokens-spacing.mdx`: tokens de espacamento.
- `design-tokens-motion.mdx`: tokens de duracao e timing.
- `design-tokens-shadow.mdx`: tokens de sombra.

### Componentes

Arquivos em `docs/components/` documentam cada componente do Animalia DS. A sidebar desta secao e autogerada a partir dos arquivos da pasta.

Componentes documentados atualmente incluem: `Accordion`, `Badge`, `Breadcrumb`, `Button`, `Calendar`, `Card`, `Chart`, `Checkbox`, `Combobox`, `Datepicker`, `Divider`, `Dropdown`, `File Uploader`, `Grid System`, `Icon`, `Item-list`, `Label`, `Link`, `Listbox`, `Loading`, `Lookup`, `Menu`, `Modal`, `Multiselect`, `Navbar`, `Overlay`, `Page Slide`, `Pagination`, `Progress Bar`, `Radio`, `Radio Group`, `Search`, `Select`, `Stepper`, `Switch`, `Table`, `Tabs`, `Tag`, `Textarea`, `Textfield`, `Timepicker`, `Toaster`, `Toolbar`, `Tooltip` e `Widget`.

Cada pagina de componente deve explicar o que o componente faz, quando usar, anatomia, estados, comportamento, boas praticas, acessibilidade e detalhes de desenvolvimento quando existirem.

### Padroes

Arquivos em `docs/patterns/` explicam comportamentos e composicoes que envolvem mais de um componente.

- `intro.mdx`: visao geral de comportamentos.
- `input.mdx`: padrao de campos de entrada.
- `notification.mdx`: padrao de notificacoes.

### Guia de tom e voz

Arquivos em `docs/guideline/` orientam a escrita do produto.

- `intro.md`: o que e voz.
- `tom.md`: o que e tom e como ajustar a comunicacao ao contexto.

## Organizacao das sidebars

As sidebars sao configuradas em `sidebars.js`.

- `foundation`: sidebar manual para fundamentos.
- `about`: sidebar manual para paginas institucionais.
- `designtokens`: sidebar manual para tokens.
- `patterns`: sidebar manual para padroes.
- `componenents`: sidebar autogerada para `docs/components`.
- `guideline`: sidebar autogerada para `docs/guideline`.

Ao criar uma pagina fora de `docs/components` e `docs/guideline`, confira se ela precisa ser adicionada manualmente em `sidebars.js`.

## Assets e exemplos

- Imagens de componentes ficam em `docs/components/img/<nome-do-componente>/`.
- Imagens de fundamentos ficam em `docs/foundation/img/<tema>/`.
- Imagens institucionais ficam em `docs/about/img/`.
- Componentes auxiliares usados em MDX ficam em `docs/**/helpers/components/`.
- Arquivos publicos globais ficam em `static/`.
- Dados de icones ficam em `static/data/Animalia.json` e `static/data/Animalia-Fill.json`.

## Checklist antes de publicar

- A pagina esta no lugar correto dentro de `docs/`.
- O frontmatter esta correto e nao cria conflito de `id`.
- A pagina aparece na sidebar esperada.
- Todas as imagens carregam e possuem contexto suficiente.
- Links internos e externos funcionam.
- Conteudo cobre uso, comportamento, boas praticas e acessibilidade.
- Exemplos de codigo estao atualizados.
- `npm run build` passa sem erros.

## Publicacao

```console
GIT_USER=<seu-usuario-github> USE_SSH=true npm run deploy
```

Para GitHub Pages, este comando faz o build e envia o conteudo para a branch `gh-pages`, conforme o fluxo padrao do Docusaurus.
