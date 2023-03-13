---
id: contribution-guide
sidebar_position: 4
---

# Guia de Contribuição

Este guia aborda maneiras pelas quais você pode se tornar parte do desenvolvimento contínuo do Animalia DS.

Depois de ler este guia, você saberá:

. Como usar o GitHub para relatar problemas.
. Como clonar nossa main e rodar o projeto em sua máquina.
. Como ajudar a resolver problemas existentes.
. Como contribuir com a documentação do Quasar.
. Como contribuir para o código Quasar.

O Animalia DS não é "a estrutura de outra pessoa". Muitas pessoas contribuíram para o Animalia, variando de um único personagem a grandes mudanças arquitetônicas ou documentação significativa - tudo com o objetivo de tornar o Animalia melhor para todos. Mesmo que você ainda não se sinta à vontade para escrever código ou documentação, há uma variedade de outras maneiras de contribuir, desde relatar problemas até mandando sujestões.

## Instalação

Este projeto usa o gerenciador de pacotes NPM e a ferramenta Lerna para instalar e gerenciar suas dependências. Para começar, siga as instruções abaixo:

1. Certifique-se de ter o Node.js e o NPM instalados em sua máquina. Você pode instalá-los a partir do site oficial: [nodejs.org](https://https://nodejs.org/en/download/)

2. Clone o nosso repositório em sua máquina por meio do link: https://github.com/animaliads/animalia-web-components

saiba mais em [como clonar um repositório do Github](https://docs.github.com/pt/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop).

3. Uma vez clonado o projeto, abra um terminal na raiz do projeto e execute o comando:

```
npm install
```

Este comando instalará todas as dependências do projeto listadas no arquivo package.json.

4. Em seguida, instale a ferramenta Lerna globalmente usando o comando:

```
npm install -g lerna
```

5. Agora, execute o seguinte comando para inicializar o ambiente de desenvolvimento e instalar as dependências em todos os pacotes do projeto:

```
lerna bootstrap
```

6. Após a instalação das dependências, execute o seguinte comando para compilar o código:

```
lerna run buid
```

Este comando compilará o código em todos os pacotes do projeto.

7. Por fim, execute o seguinte comando para iniciar o Storybook:

```
npm run storybook
```

Este comando iniciará o Storybook em seu navegador para visualizar e testar os componentes do projeto.

Com esses passos, você terá instalado todas as dependências e configurado o ambiente de desenvolvimento para trabalhar no projeto.

## Estrutura do Repositório

Aqui está uma visão geral da estrutura do repositório:

~~~javascript
├── assets/
│   └── ...
├── components/
│   ├── src/
│   │   ├── components/
│   │   │   ├── accordion/
│   │   │   │   ├── ...
│   │   │   ├── button/
│   │   │   │   ├── ...
│   │   │   └── ...
│   ├── dist/
│   │   ├── accordion/
│   │   │   ├── ...
│   │   ├── button/
│   │   │   ├── ...
│   │   └── ...
│   ├── README.md
│   └── ...
├── docs/
│   ├── README.md
│   └── ...
├── scripts/
│   ├── build.js
│   ├── publish.js
│   └── ...
├── tests/
│   ├── components/
│   │   ├── accordion/
│   │   │   ├── ...
│   │   ├── button/
│   │   │   ├── ...
│   │   └── ...
│   ├── utils/
│   │   ├── ...
│   ├── jest.config.js
│   └── ...
├── .babelrc.js
├── .eslintrc.js
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
~~~

### Descrição da Estrutura

| Pasta/Arquivo | Descrição |
|---------------|-----------|
| `assets/` | Contém arquivos de imagem e outros ativos utilizados pelos componentes. |
| `components/` | Contém todo o código fonte para cada componente do projeto, organizado por tipo de componente (ex. accordion, button, card, etc.). |
| `components/src/` | Contém o código fonte dos componentes em si. |
| `components/dist/` | Contém as versões compiladas dos componentes, prontas para uso em um projeto. |
| `components/README.md` | Contém informações sobre como utilizar os componentes. |
| `docs/` | Contém a documentação do projeto. |
| `docs/README.md` | Contém informações gerais sobre o projeto, incluindo uma introdução, instruções de instalação e uso, etc. |
| `scripts/` | Contém scripts para construir e publicar o projeto. |
| `tests/` | Contém os testes automatizados do projeto. |
| `tests/components/` | Contém os testes unitários para cada componente. |
| `tests/utils/` | Contém funções utilitárias compartilhadas pelos testes. |
| `tests/jest.config.js` | Contém as configurações para o framework de testes Jest. |
| `.babelrc.js` | Arquivo de configuração do Babel. |
| `.eslintrc.js` | Arquivo de configuração do ESLint. |
| `.gitignore` | Arquivo de configuração do Git para ignorar certos arquivos/diretórios. |
| `LICENSE` | Arquivo de licença do projeto. |
| `package.json` | Arquivo de metadados do projeto, incluindo as dependências, scripts de build, etc. |
| `README.md` | Arquivo principal com informações gerais sobre o projeto. |
| `tsconfig.json` | Arquivo de configuração do TypeScript. |
| `webpack.config.js` | Arquivo de configuração do Webpack. |

## Link úteis

- [Documentação da instalação do projeto no Github](https://github.com/animaliads/animalia-web-components#instala%C3%A7%C3%A3o)
- [Nodejs.org](https://https://nodejs.org/en/download/)
- [Como clonar um repositório do Github](https://docs.github.com/pt/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)
- [Angular elements](https://angular.io/guide/elements)
- [Usando Web Components no React](https://pt-br.reactjs.org/docs/web-components.html)
