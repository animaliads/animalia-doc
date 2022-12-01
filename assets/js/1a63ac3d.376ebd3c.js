"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[1651],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,v=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(v,i(i({ref:t},u),{},{components:a})):n.createElement(v,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(944),o=a(6010),i="tabItem_vU9c",s="tabItemActive_cw6a";var l=37,c=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,m=e.values,d=e.groupId,p=e.className,v=(0,r.Z)(),f=v.tabGroupChoices,b=v.setTabGroupChoices,h=(0,n.useState)(u),g=h[0],k=h[1],w=n.Children.toArray(e.children),N=[];if(null!=d){var y=f[d];null!=y&&y!==g&&m.some((function(e){return e.value===y}))&&k(y)}var z=function(e){var t=e.currentTarget,a=N.indexOf(t),n=m[a].value;k(n),null!=d&&(b(d,n),setTimeout((function(){var e,a,n,r,o,i,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,a>=0&&o<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case l:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},p)},m.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:z,onClick:z},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2982:function(e,t,a){a.r(t),a.d(t,{default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(1395),s=a(8215),l=["components"],c={id:"tabs",sidebar_label:"Tabs"},u={unversionedId:"components/tabs",id:"components/tabs",isDocsHomePage:!1,title:"Tabs",description:"<Tabs",source:"@site/docs/components/tabs.mdx",sourceDirName:"components",slug:"/components/tabs",permalink:"/docs/components/tabs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/tabs.mdx",version:"current",sidebar_label:"Tabs",frontMatter:{id:"tabs",sidebar_label:"Tabs"},sidebar:"componenents",previous:{title:"Switch",permalink:"/docs/components/switch"},next:{title:"Tag",permalink:"/docs/components/tag"}},m=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Comportamento",id:"comportamento",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Fazer",id:"fazer",children:[]},{value:"N\xe3o Fazer",id:"n\xe3o-fazer",children:[]}]},{value:"Acessibilidade tratada no componente",id:"acessibilidade-tratada-no-componente",children:[]}],d={toc:m};function p(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"design",mdxType:"TabItem"},(0,o.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tabs")," s\xe3o um conjunto de se\xe7\xf5es de conte\xfado em camadas, que exibem um painel de conte\xfado por vez. "),(0,o.kt)("p",null,"Evitam que a p\xe1gina fique muito longa, permitindo que os usu\xe1rios naveguem entre as visualiza\xe7\xf5es dentro do mesmo contexto, podendo prever facilmente o que encontrar\xe3o ao selecionar uma determinada aba."),(0,o.kt)("h3",{id:"comportamento"},"Comportamento"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Quando uma interface com tabs \xe9 inicializada, o conte\xfado relacionado \xe0 guia ativa \xe9 exibido e a aba fica com a apar\xeancia de ativa;"),(0,o.kt)("li",{parentName:"ul"},"Sempre h\xe1 uma aba ativa e apenas uma por vez;"),(0,o.kt)("li",{parentName:"ul"},"O padr\xe3o de alinhamento das abas \xe9 \xe0 esquerda. ")),(0,o.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,o.kt)("h3",{id:"fazer"},"Fazer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A descri\xe7\xe3o da guia deve ser curta e auto explicativa;"),(0,o.kt)("li",{parentName:"ul"},"Mantenha apenas um item da tab pode ser selecionado por vez;"),(0,o.kt)("li",{parentName:"ul"},"Utilize letra mai\xfascula somente no in\xedcio do t\xedtulo.")),(0,o.kt)("h3",{id:"n\xe3o-fazer"},"N\xe3o Fazer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Evite usar \xedcone na tabs;"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o utilize tabs para tarefas sequenciais. Para esses casos utilize stepper;"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o \xe9 recomendado que se use mais de duas palavras como label;"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use mais de seis abas;"),(0,o.kt)("li",{parentName:"ul"},"N\xe3o use esse componente quando os usu\xe1rios precisarem ver o conte\xfado de v\xe1rias tabs simultaneamente, como quando \xe9 necess\xe1rio comparar informa\xe7\xf5es.")),(0,o.kt)("h2",{id:"acessibilidade-tratada-no-componente"},"Acessibilidade tratada no componente"),(0,o.kt)("p",null,"Todas as tabs devem ter a mesma apar\xeancia e funcionar da mesma forma apresentando consist\xeancia, reconhecibilidade, previsibilidade, fortalecimento e efici\xeancia no conjunto de a\xe7\xf5es para atingir um objetivo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum"},"Diretriz WCAG 1.4.3:")," textos devem ter uma rela\xe7\xe3o de contraste entre primeiro e segundo plano de ao menos 4.5:1 (se peso for regular ou tamanho for menor que 18px) ou 3:1 (se peso for bold ou tamanho for maior ou igual que 18px)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"},"Diretriz WCAG 1.4.1:")," altera\xe7\xe3o entre os estados precisa ser indicada por mais de um elemento al\xe9m da cor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/resize-text"},"Diretriz WCAG 1.4.4"),":Utilizar unidades de medida para o texto que suportem zoom (ex.: utilizar REM ou EM ao inv\xe9s de PX)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/target-size"},"Diretriz WCAG 2.5.5"),": possuir \xe1rea clic\xe1vel de pelo menos 44px x 44px (mobile e desktop)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-visible"},"Diretriz WCAG 2.4.7"),": Possuir foco vis\xedvel ao navegar pelo teclado"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard"},"Diretriz WCAG 2.1.1"),": Permitir navega\xe7\xe3o pelo teclado"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"Diretriz WCAG 4.1.2"),": Utilizar c\xf3digos sem\xe2nticos para tecnologias assistivas"))),(0,o.kt)(s.Z,{value:"dev",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,o.kt)(s.Z,{value:"custom-properties",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}p.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);