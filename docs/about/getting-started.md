---
id: getting-started
sidebar_position: 3
---

# Desenvolvimento

Este guia tem finalidade de orientar sobre a instalação e utilização dos componentes.

Os componentes do Animalia DS são construídos utilizando a tecnologia Web Components,
que consiste em criar elementos customizáveis utilizando apenas Javascript e HTML, podendo
desta forma ser utilizado por aplicações contendo diversas tecnologias web, sendo assim uma
biblioteca de componentes agnóstica.

## Pré-requisitos

Para usar a biblioteca Animalia DS, você precisa ter familiaridade com:

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
- [HTML](https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML)
- [CSS](https://developer.mozilla.org/docs/Learn/CSS/First_steps)

E para a instalação local no seu computador, precisará ter instalado:

- [Node.js](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)

### Utilização básica sem framework

Os pacotes do Animalia utilizam internamente [módulos do tipo Node](https://nodejs.org/api/modules.html#modules_all_together).
Portanto, para utilizar os componentes sem a utilização de algum framework, apenas Javascript, antes de incluir o
componente diretamente do seu HTML, você irá precisar resolver os módulos Node.
Existem diversas estratégias para isso, mas uma delas é utilizar o [Browserify](https://browserify.org/)
ou o [Rollup](https://rollupjs.org/guide/en/) para gerar o bundle e resolver os módulos. Nesse passo-a-passo iremos
utilizar o Rollup.

```
npm i -D rollup @rollup/plugin-node-resolve
```

Crie um arquivo javascript chamado `index.js` e importe o componente:

```javascript
import '@animaliads/ani-button';
```

Agora crie outro arquivo javascript e adione a configuração do rollup para podermos gerar um arquivo final
com o nosso componente.

```javascript
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const input = 'index.js';

export default [
  {
    input,
    output: {
      file: 'bundle.js',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [nodeResolve()],
  },
];
```

Agora execute o seguinte comando para gerar o bundle:

```
npx rollup -c
```

Esse comando irá gerar um arquivo chamando `bundle.js` no mesmo diretório, agora basta adicioná-lo em
uma tag `script` dentro de um arquivo `.html`, junto com a tag do componente.

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <!-- Componente ani-button -->
    <ani-button>Hello World</ani-button>
  </body>

  <!-- Pacote gerado com o rollup -->
  <script src="bundle.js"></script>
</html>
```

## Instalação

### Instalar o pacote via npm

```
npm install @animaliads/web-components
```

Se preferir, você também pode instalar o componente de forma individual:

```
npm install @animaliads/ani-button
```

## Configuração

A configuração irá depender do tipo de aplicação que você está criando, se utilizando algum framework,
por exemplo Angular ou React, ou se é utilizando javascript básico.
A seguir temos algumas formas de configuração para cada ambiente específico:

<a id="angular"></a>

### Angular

Para utilizar o web component, você precisará adicionar o `CUSTOM_ELEMENTS_SCHEMA` no módulo da sua aplicação.

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [PageComponent],
  exports: [PageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageModule {}
```

Você também precisará importar o pacote dentro do seu componente:

```
import '@animaliads/web-components';
```

### Link úteis

- [Angular elements](https://angular.io/guide/elements)
- [Usando Web Components no React](https://pt-br.reactjs.org/docs/web-components.html)
