"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[9680],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),u=o,v=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return a?n.createElement(v,i(i({ref:t},d),{},{components:a})):n.createElement(v,i({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),o=a(944),r=a(6010),i="tabItem_vU9c",l="tabItemActive_cw6a";var s=37,m=39;var d=function(e){var t=e.lazy,a=e.block,d=e.defaultValue,c=e.values,p=e.groupId,u=e.className,v=(0,o.Z)(),f=v.tabGroupChoices,k=v.setTabGroupChoices,b=(0,n.useState)(d),g=b[0],h=b[1],N=n.Children.toArray(e.children),w=[];if(null!=p){var x=f[p];null!=x&&x!==g&&c.some((function(e){return e.value===x}))&&h(x)}var y=function(e){var t=e.currentTarget,a=w.indexOf(t),n=c[a].value;h(n),null!=p&&(k(p,n),setTimeout((function(){var e,a,n,o,r,i,s,m;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,r=e.right,i=window,s=i.innerHeight,m=i.innerWidth,a>=0&&r<=m&&o<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case m:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case s:var o=w.indexOf(e.target)-1;a=w[o]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},u)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:y,onClick:y},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),o=a(9443);t.Z=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6301:function(e,t,a){a.r(t),a.d(t,{default:function(){return v},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=a(1395),l=a(8215),s=a.p+"assets/images/listbox-anatomy-0d111b1415679501d44827814b9c38fd.png",m=["components"],d={id:"listbox",sidebar_label:"Listbox"},c={unversionedId:"components/listbox",id:"components/listbox",isDocsHomePage:!1,title:"Listbox",description:"<Tabs",source:"@site/docs/components/listbox.mdx",sourceDirName:"components",slug:"/components/listbox",permalink:"/animalia-doc/docs/components/listbox",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/listbox.mdx",version:"current",sidebar_label:"Listbox",frontMatter:{id:"listbox",sidebar_label:"Listbox"},sidebar:"componenents",previous:{title:"Link",permalink:"/animalia-doc/docs/components/link"},next:{title:"Modal",permalink:"/animalia-doc/docs/components/modal"}},p=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Anatomia",id:"anatomia",children:[]}]},{value:"Comportamento",id:"comportamento",children:[{value:"Largura m\xednima",id:"largura-m\xednima",children:[]},{value:"Quantidade de itens",id:"quantidade-de-itens",children:[]},{value:"Altura m\xe1xima e scroll vertical",id:"altura-m\xe1xima-e-scroll-vertical",children:[]},{value:"Sa\xeddas do listbox",id:"sa\xeddas-do-listbox",children:[]},{value:"Posicionamento",id:"posicionamento",children:[]}]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}],u={toc:p};function v(e){var t=e.components,a=(0,o.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O componente ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox")," \xe9 uma caixa suspensa que aparece sobre a interface ap\xf3s ser acionado por um gatilho vis\xedvel em tela, como o ",(0,r.kt)("em",{parentName:"p"},"dropdown"),". Ele apoia trazendo agrupamentos de op\xe7\xf5es.\nO componente ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox")," \xe9 composto pelo componente ",(0,r.kt)("inlineCode",{parentName:"p"},"item-list"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Componentes relacionados")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/item-list"},"Item-list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/components/dropdown"},"Dropdown"))))),(0,r.kt)("h3",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox")," \xe9 composto por ",(0,r.kt)("em",{parentName:"p"},"border"),", ",(0,r.kt)("em",{parentName:"p"},"base"),"."),(0,r.kt)("img",{src:s,alt:"Listbox com as 3 partes sinalizadas"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Border"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Base"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Item-list"),(0,r.kt)("p",null,"O componente \xe9 estruturado e estilizado por meio dos design tokens. Os tokens que podem ser alterados pelas marcas est\xe3o listados na se\xe7\xe3o de propriedades customiz\xe1veis."),(0,r.kt)("h2",{id:"comportamento"},"Comportamento"),(0,r.kt)("h3",{id:"largura-m\xednima"},"Largura m\xednima"),(0,r.kt)("p",null,"A largura do ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox")," deve acompanhar a largura da label do item."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Largura m\xednima:")," a mesma largura do componente de acionamento.")),(0,r.kt)("h3",{id:"quantidade-de-itens"},"Quantidade de itens"),(0,r.kt)("p",null,"A quantidade m\xednima para a composi\xe7\xe3o do ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox")," \xe9 1 item.\nQuantidade ideal \xe9 de at\xe9 8 itens."),(0,r.kt)("h3",{id:"altura-m\xe1xima-e-scroll-vertical"},"Altura m\xe1xima e scroll vertical"),(0,r.kt)("p",null,"A partir de 7 itens apresenta rolagem, sempre ocultando parte do item 6.\nA barra de rolagem a ser utilizada ser\xe1 a nativa do navegador."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Altura m\xe1xima sem rolagem:"),"  6 itens")),(0,r.kt)("h3",{id:"sa\xeddas-do-listbox"},"Sa\xeddas do listbox"),(0,r.kt)("p",null,"\xc9 poss\xedvel fechar o ",(0,r.kt)("em",{parentName:"p"},"listbox")," com:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tecla ",(0,r.kt)("inlineCode",{parentName:"li"},"ESC"),";"),(0,r.kt)("li",{parentName:"ul"},"Clicando fora do ",(0,r.kt)("em",{parentName:"li"},"listbox"),";"),(0,r.kt)("li",{parentName:"ul"},"Com a tecla ",(0,r.kt)("inlineCode",{parentName:"li"},"Tab")," no \xfaltimo item da lista;"),(0,r.kt)("li",{parentName:"ul"},"Selecionando um item;"),(0,r.kt)("li",{parentName:"ul"},"Clicando no componente de acionamento.")),(0,r.kt)("h3",{id:"posicionamento"},"Posicionamento"),(0,r.kt)("p",null,"O posicionamento padr\xe3o \xe9 na esquerda inferior ao componente de acionamento.\nPosicionamentos como: direita inferior, esquerda superior e direita superior s\xe3o utilizados quando o ",(0,r.kt)("inlineCode",{parentName:"p"},"listbox")," est\xe1 localizado em uma \xe1rea da tela que impede a apresenta\xe7\xe3o da lista alinhado a esquerda inferior."),(0,r.kt)("h2",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,r.kt)("p",null,"Algumas diretrizes de acessibilidade j\xe1 s\xe3o tratadas no componente, internamente, e n\xe3o podem ser alteradas pelo propriet\xe1rio do conte\xfado. S\xe3o elas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Usar medidas relativas para possibilitar um zoom de at\xe9 200%, sem perda do conte\xfado ou funcionalidade.(",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},"WCAG 1.4.4: Resize Text"),")"),(0,r.kt)("li",{parentName:"ul"},"Permitir a intera\xe7\xe3o via teclado, atrav\xe9s das teclas: Tab, Esc e setas. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"WCAG 2.1.1: Keyboard"),")"),(0,r.kt)("li",{parentName:"ul"},"A ordem de foco deve acontecer em sequ\xeancia l\xf3gica. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order"},"WCAG 2.4.3: Focus Order"),")"),(0,r.kt)("li",{parentName:"ul"},"\xc1reas de clique ou toque para elementos interativos devem ter pelo menos 44x44 pixels. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum"},"WGAG 2.5.8: Target Size (Minimum)"),")"),(0,r.kt)("li",{parentName:"ul"},"Utilizar nome, fun\xe7\xe3o e valor adequadamente, pois estes par\xe2metros s\xe3o utilizados por tecnologias assistivas para identificar os elementos da interface. (",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"WCAG 4.1.2: Name, Role, Value"),")"))),(0,r.kt)(l.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,r.kt)(l.Z,{value:"custom-properties",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}v.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);