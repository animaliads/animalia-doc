"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1199],{3905:function(e,A,a){a.d(A,{Zo:function(){return l},kt:function(){return d}});var t=a(7294);function r(e,A,a){return A in e?Object.defineProperty(e,A,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[A]=a,e}function o(e,A){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);A&&(t=t.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var A=1;A<arguments.length;A++){var a=null!=arguments[A]?arguments[A]:{};A%2?o(Object(a),!0).forEach((function(A){r(e,A,a[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(a,A))}))}return e}function i(e,A){if(null==e)return{};var a,t,r=function(e,A){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],A.indexOf(a)>=0||(r[a]=e[a]);return r}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],A.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){var A=t.useContext(s),a=A;return e&&(a="function"==typeof e?e(A):n(n({},A),e)),a},l=function(e){var A=m(e.components);return t.createElement(s.Provider,{value:A},e.children)},p={inlineCode:"code",wrapper:function(e){var A=e.children;return t.createElement(t.Fragment,{},A)}},c=t.forwardRef((function(e,A){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,u=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return a?t.createElement(u,n(n({ref:A},l),{},{components:a})):t.createElement(u,n({ref:A},l))}));function d(e,A){var a=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=c;var i={};for(var s in A)hasOwnProperty.call(A,s)&&(i[s]=A[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var m=2;m<o;m++)n[m]=a[m];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5348:function(e,A,a){a.d(A,{Z:function(){return o}});var t=a(1721),r=a(7294),o=function(e){function A(){return e.apply(this,arguments)||this}return(0,t.Z)(A,e),A.prototype.render=function(){return r.createElement("div",{style:{padding:"0 0 24px 0",display:"flex",fontFamily:"sans-serif",lineHeight:"24px"}},r.createElement("div",{style:{width:"50%",marginRight:"4%"}},r.createElement("img",{style:{width:"100%"},src:this.props.doImg,alt:this.props.doAlt}),r.createElement("b",null,"Fazer"),r.createElement("p",null,this.props.doDescription)),r.createElement("div",{style:{width:"50%"}},r.createElement("img",{style:{width:"100%"},src:this.props.dontImg,alt:this.props.dontAlt}),r.createElement("b",null,this.props.warning?"Cuidado":"N\xe3o fazer"),r.createElement("p",null,this.props.dontDescription)))},A}(r.Component)},808:function(e,A,a){a.d(A,{Z:function(){return o}});var t=a(1721),r=a(7294),o=function(e){function A(){for(var A,a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(A=e.call.apply(e,[this].concat(t))||this).state={language:"react"},A}return(0,t.Z)(A,e),A.prototype.render=function(){var e=this;return r.createElement("div",null,r.createElement("div",{style:{display:"block",marginBottom:"8px",fontFamily:"sans-serif"}},r.createElement("label",{id:"language"},"Selecione o tipo de aplica\xe7\xe3o:"),r.createElement("select",{id:"language",style:{padding:"8px",marginLeft:"8px"},onChange:function(A){return e.setState({language:A.target.value})}},r.createElement("option",{value:"react"},"React"),this.props.javascript?r.createElement("option",{value:"javascript"},"Javascript"):"")),r.createElement("iframe",{src:this.props[this.state.language],style:{width:"90%",height:"500px",border:"solid 1px black",borderRadius:"4px",overflow:"hidden"},title:"Live demo"}))},A}(r.Component)},8215:function(e,A,a){var t=a(7294);A.Z=function(e){var A=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},A)}},1395:function(e,A,a){a.d(A,{Z:function(){return l}});var t=a(7294),r=a(944),o=a(6010),n="tabItem_vU9c",i="tabItemActive_cw6a";var s=37,m=39;var l=function(e){var A=e.lazy,a=e.block,l=e.defaultValue,p=e.values,c=e.groupId,d=e.className,u=(0,r.Z)(),g=u.tabGroupChoices,k=u.setTabGroupChoices,v=(0,t.useState)(l),f=v[0],N=v[1],I=t.Children.toArray(e.children),b=[];if(null!=c){var E=g[c];null!=E&&E!==f&&p.some((function(e){return e.value===E}))&&N(E)}var h=function(e){var A=e.currentTarget,a=b.indexOf(A),t=p[a].value;N(t),null!=c&&(k(c,t),setTimeout((function(){var e,a,t,r,o,n,s,m;(e=A.getBoundingClientRect(),a=e.top,t=e.left,r=e.bottom,o=e.right,n=window,s=n.innerHeight,m=n.innerWidth,a>=0&&o<=m&&r<=s&&t>=0)||(A.scrollIntoView({block:"center",behavior:"smooth"}),A.classList.add(i),setTimeout((function(){return A.classList.remove(i)}),2e3))}),150))},C=function(e){var A,a;switch(e.keyCode){case m:var t=b.indexOf(e.target)+1;a=b[t]||b[0];break;case s:var r=b.indexOf(e.target)-1;a=b[r]||b[b.length-1]}null==(A=a)||A.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var A=e.value,a=e.label;return t.createElement("li",{role:"tab",tabIndex:f===A?0:-1,"aria-selected":f===A,className:(0,o.Z)("tabs__item",n,{"tabs__item--active":f===A}),key:A,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:h,onClick:h},a)}))),A?(0,t.cloneElement)(I.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},I.map((function(e,A){return(0,t.cloneElement)(e,{key:A,hidden:e.props.value!==f})}))))}},9443:function(e,A,a){var t=(0,a(7294).createContext)(void 0);A.Z=t},944:function(e,A,a){var t=a(7294),r=a(9443);A.Z=function(){var e=(0,t.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3591:function(e,A,a){a.r(A),a.d(A,{default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),n=a(1395),i=a(8215),s=(a(5348),a(808),a.p+"assets/images/progress-bar-status-ca19b5483bf756e05ee95fb6ac90cdd3.png"),m=["components"],l={id:"progress-bar",sidebar_label:"Progress Bar"},p={unversionedId:"components/progress-bar",id:"components/progress-bar",isDocsHomePage:!1,title:"Progress Bar",description:"<Tabs",source:"@site/docs/components/progress-bar.mdx",sourceDirName:"components",slug:"/components/progress-bar",permalink:"/en/docs/components/progress-bar",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/progress-bar.mdx",version:"current",sidebar_label:"Progress Bar",frontMatter:{id:"progress-bar",sidebar_label:"Progress Bar"},sidebar:"componenents",previous:{title:"Pagination",permalink:"/en/docs/components/pagination"},next:{title:"Radio",permalink:"/en/docs/components/radio"}},c=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Quando usar",id:"quando-usar",children:[]},{value:"Anatomia",id:"anatomia",children:[]},{value:"Varia\xe7\xf5es",id:"varia\xe7\xf5es",children:[]},{value:"Comportamento",id:"comportamento",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Fazer",id:"fazer",children:[]},{value:"N\xe3o fazer",id:"n\xe3o-fazer",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]}],d={toc:c};function u(e){var A=e.components,a=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:A,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"design",mdxType:"TabItem"},(0,o.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,o.kt)("p",null,"O componente ",(0,o.kt)("inlineCode",{parentName:"p"},"progress bar")," comunica de forma visual o status sobre o carregamento at\xe9 a conclus\xe3o de uma opera\xe7\xe3o do sistema,\nseja download, upload ou processamento. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Componentes relacionados:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"file-uploader"},(0,o.kt)("inlineCode",{parentName:"a"},"File Uploader")))))),(0,o.kt)("h3",{id:"quando-usar"},"Quando usar"),(0,o.kt)("p",null,"Utilize-o para informar o carregamento de uma opera\xe7\xe3o com dura\xe7\xe3o maior do que 10 segundos."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Considere utilizar o componente ",(0,o.kt)("a",{parentName:"p",href:"loading"},(0,o.kt)("inlineCode",{parentName:"a"},"loading"))," caso o tempo necess\xe1rio seja at\xe9 10 segundos.")),(0,o.kt)("h3",{id:"anatomia"},"Anatomia"),(0,o.kt)("p",null,"Estruturalmente, o ",(0,o.kt)("inlineCode",{parentName:"p"},"progress bar")," \xe9 composto por: uma ",(0,o.kt)("strong",{parentName:"p"},"bar indicator"),", uma ",(0,o.kt)("strong",{parentName:"p"},"tray")," e um ",(0,o.kt)("strong",{parentName:"p"},"infor bar"),", conforme imagem abaixo:"),(0,o.kt)("img",{src:"data:image/png;base64,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",alt:"Apresenta\xe7\xe3o de uma barra de progresso em parte representada pela cor azul indicando o progresso da a\xe7\xe3o, possuindo na parte inferior esquerda um texto informativo sobre o processo e na parte inferior direita, um valor percentual do progresso."}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Bar indicator:")," \xe9 a forma que preenche a barra conforme o carregamento ocorre, de maneira ",(0,o.kt)("a",{parentName:"li",href:"progressbar#comportamento"},"determinada ou indeterminada"),";"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tray:")," \xe9 a base que define a largura do componente, onde a ",(0,o.kt)("strong",{parentName:"li"},"bar indicator")," poder\xe1 percorrer;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Info bar:")," \xe9 o texto de apoio posicionado na parte inferior esquerda da barra, que auxilia os usu\xe1rios a entenderem do que se trata o carregamento,\njunto com a quantidade percentual posicionada na parte inferior direita.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"O estado de ",(0,o.kt)("strong",{parentName:"p"},"error")," modifica a ",(0,o.kt)("strong",{parentName:"p"},"infor bar"),", passando a exibir um \xedcone de exclama\xe7\xe3o seguido por uma mensagem de erro. ",(0,o.kt)("a",{parentName:"p",href:"progressbar#estados"},"Saiba mais em Estados"))),(0,o.kt)("h3",{id:"varia\xe7\xf5es"},"Varia\xe7\xf5es"),(0,o.kt)("h4",{id:"modo-single"},"Modo Single"),(0,o.kt)("p",null,"Pensando na modularidade do Design System, o ",(0,o.kt)("inlineCode",{parentName:"p"},"progress bar")," possui o modo ",(0,o.kt)("strong",{parentName:"p"},"single"),", no qual comp\xf5e apenas os elementos da barra de progresso em sua forma m\xednima,\nconforme imagem abaixo:"),(0,o.kt)("img",{src:"data:image/png;base64,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",alt:"Apresenta\xe7\xe3o de uma barra de progresso em parte representada pela cor azul indicando o progresso da a\xe7\xe3o"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Bar indicator:")," \xe9 a forma que preenche a barra conforme o carregamento ocorre, de maneira ",(0,o.kt)("a",{parentName:"li",href:"progressbar#comportamento"},"determinada ou indeterminada"),";"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tray:")," \xe9 a base que define a largura do componente, onde a ",(0,o.kt)("strong",{parentName:"li"},"bar indicator")," poder\xe1 percorrer.")),(0,o.kt)("h4",{id:"tamanhos"},"Tamanhos"),(0,o.kt)("p",null,"O componente ",(0,o.kt)("inlineCode",{parentName:"p"},"progress bar")," possui duas varia\xe7\xf5es de tamanho, sendo: "),(0,o.kt)("img",{src:"data:image/png;base64,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",alt:"Representa\xe7\xe3o do componente progress bar conforme citado anteriormente, nos dois tamanhos conforme descri\xe7\xe3o \xe0 seguir."}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Large (Grande):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"0.5rem (8px)"),";"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Medium (M\xe9dio):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"0.25rem (4px)"),".")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Por padr\xe3o \xe9 utilizado o tamanho ",(0,o.kt)("strong",{parentName:"p"},"medium"),".")),(0,o.kt)("h4",{id:"estados"},"Estados"),(0,o.kt)("p",null,"O componente possui tamb\xe9m os tr\xeas seguintes estados:"),(0,o.kt)("img",{src:s,alt:"Representa\xe7\xe3o do componente em tr\xeas estados na mesma ordem, conforme descri\xe7\xe3o \xe0 seguir."}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Normal:")," o preenchimento da barra em cor azul, indicando atividade no carregamento;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Success"),": o preenchimento completo da barra em cor verde, indicando conclus\xe3o do carregamento;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Error:")," o preenchimento da barra e conte\xfado da ",(0,o.kt)("strong",{parentName:"li"},"info bar")," em vermelho, indicando falha no carregamento.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"No modo ",(0,o.kt)("a",{parentName:"p",href:"progressbar#modo-single"},(0,o.kt)("strong",{parentName:"a"},"single")),", o componente continua respeitando a composi\xe7\xe3o b\xe1sica, ou seja, sem a ",(0,o.kt)("strong",{parentName:"p"},"info bar"),".")),(0,o.kt)("h3",{id:"comportamento"},"Comportamento"),(0,o.kt)("p",null,"O componente ",(0,o.kt)("inlineCode",{parentName:"p"},"progress bar")," possui dois tipos de comportamentos, sendo: "),(0,o.kt)("img",{src:"data:image/png;base64,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",alt:"Representa\xe7\xe3o do componente exibindo os dois estados na mesma ordem, conforme descri\xe7\xe3o \xe0 seguir."}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Determinado:")," para quando h\xe1 um carregamento mensur\xe1vel, como por exemplo, de ",(0,o.kt)("strong",{parentName:"li"},"0%")," a ",(0,o.kt)("strong",{parentName:"li"},"100%"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Indeterminado:")," para quando n\xe3o h\xe1 um carregamento mensur\xe1vel, como por exemplo, longos processamentos que gastem um tempo consider\xe1vel ou de tempo desconhecido.")),(0,o.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,o.kt)("p",null,"Foram estruturados os padr\xf5es de usabilidade para auxiliar na utiliza\xe7\xe3o do componente e garantir uma boa experi\xeancia aos usu\xe1rios.\nPor isso, \xe9 muito importante que ao utilizar este componente, as pessoas que o projetarem devem levar em considera\xe7\xe3o os seguintes crit\xe9rios:"),(0,o.kt)("h3",{id:"fazer"},"Fazer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sempre d\xea algum tipo de feedback imediato;"),(0,o.kt)("li",{parentName:"ul"},"Ao exibir o carregamento de uma sequ\xeancia de processos, indique o progresso geral em vez do progresso de cada atividade;"),(0,o.kt)("li",{parentName:"ul"},"Mantenha os r\xf3tulos entre uma a duas palavras;"),(0,o.kt)("li",{parentName:"ul"},"Use o texto auxiliar com uma barra de progresso se o processo for complexo ou tiver um longo tempo de espera. Isso permite que os usu\xe1rios saibam quais sub processos est\xe3o ocorrendo.")),(0,o.kt)("h3",{id:"n\xe3o-fazer"},"N\xe3o fazer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"N\xe3o utilizar indicadores de progresso est\xe1ticos (como texto apenas informando que o processo est\xe1 sendo realizado).")),(0,o.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,o.kt)("p",null,"O componente ",(0,o.kt)("inlineCode",{parentName:"p"},"progress bar")," foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (",(0,o.kt)("strong",{parentName:"p"},"WCAG"),") 2.1.\nAlgumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente internamente e n\xe3o devem ser alteradas por quem utilizar.  S\xe3o elas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cores n\xe3o devem ser utilizadas como \xfanica maneira de transmitir conte\xfado ou distinguir elementos visuais (",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html"},(0,o.kt)("strong",{parentName:"a"},"1.4.1: Use of color (A)")),");"),(0,o.kt)("li",{parentName:"ul"},"Textos devem ter uma rela\xe7\xe3o de contraste entre  primeiro e segundo plano de ao menos ",(0,o.kt)("strong",{parentName:"li"},"4.5-1")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html"},(0,o.kt)("strong",{parentName:"a"},"1.4.3: Contrast (Minimum) (AA)")),");"),(0,o.kt)("li",{parentName:"ul"},"Textos devem ter uma rela\xe7\xe3o de contraste entre primeiro e segundo plano de ao menos ",(0,o.kt)("strong",{parentName:"li"},"7:1")," (",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html"},(0,o.kt)("strong",{parentName:"a"},"1.4.6: Contrast (Enhanced) (AAA)")),");"),(0,o.kt)("li",{parentName:"ul"},"Sempre que uma mensagem de erro for exibida, ela deve identificar claramente qual \xe9 o elemento que gerou o erro de forma visual e aud\xedvel (",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html"},(0,o.kt)("strong",{parentName:"a"},"3.3.1: Error Identification (A)")),"):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Exemplo:")," mudan\xe7a de cor no elemento + \xedcone de alerta + uma mensagem em texto.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Nota:")," verificar junto com crit\xe9rio ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html"},"3.3.3: Error Suggestion (AA)"),";"))))),(0,o.kt)("li",{parentName:"ul"},"Qualquer tipo de mensagem que \xe9 resultado de uma a\xe7\xe3o ou que informa o andamento de um processo e que seja relevante para as pessoas, deve ser transmitida sem que ocorra uma mudan\xe7a de contexto (foco) na tela (",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html"},(0,o.kt)("strong",{parentName:"a"},"4.1.3: Status Messages (AA)")),").")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Observa\xe7\xf5es:")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Leitor de tela:")," da mesma forma que as pessoas t\xeam o feedback visual de que algo est\xe1 carregando ao ver o progress bar, as pessoas usu\xe1rias de leitores de tel devem estar ciente de que algo est\xe1 acontecendo em segundo plano. "),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Barra de informa\xe7\xe3o:")," deve ser exibida para tecnologias assistivas. As altera\xe7\xf5es s\xe3o fornecidas programaticamente como atualiza\xe7\xf5es de status."))),(0,o.kt)(i.Z,{value:"dev",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,o.kt)(i.Z,{value:"custom-properties",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}u.isMDXComponent=!0},6010:function(e,A,a){function t(e){var A,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(A=0;A<e.length;A++)e[A]&&(a=t(e[A]))&&(r&&(r+=" "),r+=a);else for(A in e)e[A]&&(r&&(r+=" "),r+=A);return r}function r(){for(var e,A,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(A=t(e))&&(r&&(r+=" "),r+=A);return r}a.d(A,{Z:function(){return r}})}}]);