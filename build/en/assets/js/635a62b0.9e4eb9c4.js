"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[874],{3905:function(e,a,t){t.d(a,{Zo:function(){return m},kt:function(){return p}});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,v=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return t?n.createElement(v,i(i({ref:a},m),{},{components:t})):n.createElement(v,i({ref:a},m))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},a)}},1395:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(7294),o=t(944),r=t(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var l=37,d=39;var m=function(e){var a=e.lazy,t=e.block,m=e.defaultValue,c=e.values,u=e.groupId,p=e.className,v=(0,o.Z)(),f=v.tabGroupChoices,g=v.setTabGroupChoices,k=(0,n.useState)(m),h=k[0],b=k[1],N=n.Children.toArray(e.children),w=[];if(null!=u){var y=f[u];null!=y&&y!==h&&c.some((function(e){return e.value===y}))&&b(y)}var x=function(e){var a=e.currentTarget,t=w.indexOf(a),n=c[t].value;b(n),null!=u&&(g(u,n),setTimeout((function(){var e,t,n,o,r,i,l,d;(e=a.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,r=e.right,i=window,l=i.innerHeight,d=i.innerWidth,t>=0&&r<=d&&o<=l&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},C=function(e){var a,t;switch(e.keyCode){case d:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case l:var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},p)},c.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":h===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:x,onClick:x},t)}))),a?(0,n.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},9443:function(e,a,t){var n=(0,t(7294).createContext)(void 0);a.Z=n},944:function(e,a,t){var n=t(7294),o=t(9443);a.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9036:function(e,a,t){t.r(a),t.d(a,{default:function(){return h},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return g}});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=t(1395),s=t(8215),l=t.p+"assets/images/menu-anatomy-04a0ff55679d8fdf7857358543af44e2.png",d=t.p+"assets/images/menu-anatomy-macro-59adb0e9b2cbb280cddb638727274cb8.png",m=t.p+"assets/images/menu-variations-439ecae76fe67b8cb0fc25ea34116004.png",c=(t.p,t.p+"assets/images/menu-behavior-7094060fd1b5760f8f138ab635649f55.png"),u=t.p+"assets/images/menu-behavior-1-d8e415c095f3f12a1f81002a28fc646a.png",p=["components"],v={id:"menu",sidebar_label:"Menu"},f={unversionedId:"components/menu",id:"components/menu",isDocsHomePage:!1,title:"menu",description:"<Tabs",source:"@site/docs/components/menu.mdx",sourceDirName:"components",slug:"/components/menu",permalink:"/en/docs/components/menu",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/menu.mdx",version:"current",sidebar_label:"Menu",frontMatter:{id:"menu",sidebar_label:"Menu"},sidebar:"componenents",previous:{title:"loading",permalink:"/en/docs/components/loading"},next:{title:"modal",permalink:"/en/docs/components/modal"}},g=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[]},{value:"Anatomia",id:"anatomia",children:[{value:"Varia\xe7\xf5es",id:"varia\xe7\xf5es",children:[]}]},{value:"Comportamento",id:"comportamento",children:[{value:"Hover sobre o menu",id:"hover-sobre-o-menu",children:[]},{value:"Expandir ou Retrair",id:"expandir-ou-retrair",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Fa\xe7a:",id:"fa\xe7a",children:[]},{value:"N\xe3o fa\xe7a:",id:"n\xe3o-fa\xe7a",children:[]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}]}],k={toc:g};function h(e){var a=e.components,t=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"menu"},"Menu"),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O componente ",(0,r.kt)("inlineCode",{parentName:"p"},"menu")," t\xeam como objetivo viabilizar a navega\xe7\xe3o e orientar a pessoa usu\xe1ria dentro de uma interface."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Componentes relacionados")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"search"},(0,r.kt)("inlineCode",{parentName:"a"},"Search")))))),(0,r.kt)("h2",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"Em uma vis\xe3o macro, o ",(0,r.kt)("inlineCode",{parentName:"p"},"menu")," \xe9 composto pelas seguintes partes:"),(0,r.kt)("img",{src:d,alt:"Varia\xe7\xe3o de menu com vis\xe3o macro com as partes sinalizadas, sendo 1 brand, 2 required text, 3 action-collapse e 4 ani search"}),(0,r.kt)("img",{src:l,alt:"Varia\xe7\xe3o de menu com vis\xe3o base com as partes sinalizadas, sendo 4 ani search, 5 border, 6 base e 7 ani divider"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Brand"),": \xc1rea reservada para a logo da solu\xe7\xe3o;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Submenu"),": Apresenta elementos de que permite a navega\xe7\xe3o na interface;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Action-Collapse"),": Regi\xe3o de intera\xe7\xe3o que permite variar entre as formas collapsed ou extended."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Ani Search")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Border"),": forma que \u201cemoldura\u201d o conte\xfado do componente"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Base"),": fundo que dos itens do conte\xfado da navega\xe7\xe3o"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Ani Divider"))),(0,r.kt)("h3",{id:"varia\xe7\xf5es"},"Varia\xe7\xf5es"),(0,r.kt)("p",null,"O componente menu pode ser apresentado e/ou variar entres duas formas: Collapsed ou Extended."),(0,r.kt)("img",{src:m,alt:"Imagem apresentando 2 varia\xe7\xf5es do menu, sendo 1 collapsed e 2 extended."}),(0,r.kt)("h4",{id:"varia\xe7\xe3o-1"},(0,r.kt)("strong",{parentName:"h4"},"Varia\xe7\xe3o 1")),(0,r.kt)("p",null,"O Formato collapsed apresenta-se quando n\xe3o h\xe1 uma intera\xe7\xe3o com o menu, proporcionando \xe1rea de conte\xfado maior."),(0,r.kt)("h4",{id:"varia\xe7\xe3o-2"},(0,r.kt)("strong",{parentName:"h4"},"Varia\xe7\xe3o 2")),(0,r.kt)("p",null,"O formato extended \xe9 apresentado quando o usu\xe1rio precisa navegar dentro da solu\xe7\xe3o."),(0,r.kt)("h2",{id:"comportamento"},"Comportamento"),(0,r.kt)("h3",{id:"hover-sobre-o-menu"},"Hover sobre o menu"),(0,r.kt)("p",null,"Quando o mouse estiver sobre o componente ele deve expandir para apresentar os seus itens e sub-n\xedveis"),(0,r.kt)("img",{src:c,alt:"Imagem do menu na forma collapse mostrando em destaque a \xe1rea de intera\xe7\xe3o"}),(0,r.kt)("h3",{id:"expandir-ou-retrair"},"Expandir ou Retrair"),(0,r.kt)("p",null,"A \xe1rea action-collapse for acionada o menu deve expandir ou fechar de acordo com seus estado anterior."),(0,r.kt)("img",{src:u,alt:"Imagem do menu na forma collapse e extended"}),(0,r.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,r.kt)("p",null,"Para navega\xe7\xe3o aninhada ou hier\xe1rquica, respeitando 2 n\xedveis de navega\xe7\xe3o para navega\xe7\xe3o vertical;"),(0,r.kt)("h3",{id:"fa\xe7a"},"Fa\xe7a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crie grupos l\xf3gicos que melhore o acesso ao conte\xfado;"),(0,r.kt)("li",{parentName:"ul"},"Escreva r\xf3tulos de itens sempre com a primeira palavra mai\xfascula;"),(0,r.kt)("li",{parentName:"ul"},"Utilize o m\xednimo de palavras poss\xedveis para descrever r\xf3tulo de itens;"),(0,r.kt)("li",{parentName:"ul"},"Utilize t\xedtulos descritivos;"),(0,r.kt)("li",{parentName:"ul"},"Links de navega\xe7\xe3o devem ser curtos e objetivos;")),(0,r.kt)("h3",{id:"n\xe3o-fa\xe7a"},"N\xe3o fa\xe7a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Em r\xf3tulo de \xedtens, n\xe3o utilize artigos como: um, uma;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o coloque pontua\xe7\xe3o ao fim de r\xf3tulo de itens;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o escreva tudo em letras mai\xfasculas r\xf3tulos de itens e t\xedtulos de grupos;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o construa menus com mais de 3 n\xedveis de profundidade;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o torne a largura condensada para que n\xe3o haja confus\xe3o do usu\xe1rio com outros controles;")),(0,r.kt)("h3",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,r.kt)("p",null,"O componente\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"menu"),"\xa0foi projetado para atender os requisitos das Diretrizes de Acessibilidade para Conte\xfado Web (",(0,r.kt)("strong",{parentName:"p"},"WCAG"),")."),(0,r.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente internamente e n\xe3o devem ser alteradas por quem utilizar. S\xe3o elas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seja qual for m\xe9todo de intera\xe7\xe3o, a apresenta\xe7\xe3o das informa\xe7\xf5es na tela sempre dever\xe1 ter uma sequencia l\xf3gica.( ",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence"},"1.3.2 - Sequencia com significado"),")"),(0,r.kt)("li",{parentName:"ul"},"Textos devem ter uma rela\xe7\xe3o de contraste entre primeiro e segundo plano de ao menos 7:1( ",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced"},"1.4.6 - Contraste (Melhorado)"),")"),(0,r.kt)("li",{parentName:"ul"},"Preservar o foco vis\xedvel na navega\xe7\xe3o via teclado.(",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"WCAG 2.4.7 - Foco vis\xedvel"),");"),(0,r.kt)("li",{parentName:"ul"},"Permitir a intera\xe7\xe3o via teclado.(",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/target-size"},"WCAG 2.1.1 - Teclado"),");"),(0,r.kt)("li",{parentName:"ul"},"Utilizar nome, fun\xe7\xe3o e valor adequadamente, pois estes par\xe2metros s\xe3o utilizados por tecnologias assistivas para identificar os elementos da interface.(",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2 - Nome, Fun\xe7\xe3o, Valor"),");"),(0,r.kt)("li",{parentName:"ul"},"Os elementos interativos possuem \xe1rea clic\xe1vel de pelo menos 44px x 44px (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/target-size"},"WCAG 2.5.5: \xc1rea de clique"),");"))),(0,r.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,r.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}h.isMDXComponent=!0},6010:function(e,a,t){function n(e){var a,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(o&&(o+=" "),o+=t);else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}function o(){for(var e,a,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(o&&(o+=" "),o+=a);return o}t.d(a,{Z:function(){return o}})}}]);