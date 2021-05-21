(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[162],{601:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=t(2122),o=t(9756),i=(t(7294),t(3905)),r={id:"getting-started",sidebar_position:3},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Come\xe7ando",description:"Este guia tem finalidade de orientar sobre a instala\xe7\xe3o e utiliza\xe7\xe3o dos componentes.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.md",version:"current",sidebarPosition:3,frontMatter:{id:"getting-started",sidebar_position:3},sidebar:"documentation",previous:{title:"Animalia Design System",permalink:"/docs/intro"},next:{title:"Princ\xedpios do Animalia",permalink:"/docs/design-principles"}},l=[{value:"Pr\xe9 requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"Como usar",id:"como-usar",children:[{value:"Angular",id:"angular",children:[]}]}],p={toc:l};function d(e){var a=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Este guia tem finalidade de orientar sobre a instala\xe7\xe3o e utiliza\xe7\xe3o dos componentes."),(0,i.kt)("p",null,"Os componentes do Animalia DS s\xe3o constru\xeddos utilizando a tecnologia Web Components,\nque consiste em criar elementos customiz\xe1veis utilizando apenas Javascript e HTML, podendo\ndesta forma ser utilizado por aplica\xe7\xf5es contendo diversas tecnologias web, sendo assim uma\nbiblioteca de componentes agn\xf3stica."),(0,i.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9 requisitos"),(0,i.kt)("p",null,"Para usar a biblioteca Animalia DS, voc\xea precisa ter familiaridade com:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"},"Javascript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML"},"HTML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/docs/Learn/CSS/First_steps"},"CSS"))),(0,i.kt)("p",null,"E para a instala\xe7\xe3o local no seu computador, precisar\xe1 ter instalado:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/getting-started/what-is-npm"},"NPM"))),(0,i.kt)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,i.kt)("p",null,"Instale o pacote via npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @animaliads/animalia-web-components\n")),(0,i.kt)("p",null,"Se preferir, voc\xea tamb\xe9m pode instalar o componente de forma individual:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @animaliads/ani-button\n")),(0,i.kt)("h2",{id:"como-usar"},"Como usar"),(0,i.kt)("p",null,"Adicione o arquivo instalado no seu c\xf3digo ",(0,i.kt)("inlineCode",{parentName:"p"},"html"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="module" src="./node_modules/@animaliads/web-components"><\/script>\n')),(0,i.kt)("a",{id:"angular"}),(0,i.kt)("h3",{id:"angular"},"Angular"),(0,i.kt)("p",null,"Para utilizar o web component, voc\xea precisar\xe1 adicionar o ",(0,i.kt)("inlineCode",{parentName:"p"},"CUSTOM_ELEMENTS_SCHEMA")," no m\xf3dulo da sua aplica\xe7\xe3o."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n\n@NgModule({\n  imports: [CommonModule],\n  declarations: [PageComponent],\n  exports: [PageComponent],\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n})\nexport class PageModule {}\n")),(0,i.kt)("p",null,"Voc\xea tamb\xe9m precisar\xe1 importar o pacote dentro do seu componente:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import '@animaliads/web-components';\n")))}d.isMDXComponent=!0}}]);