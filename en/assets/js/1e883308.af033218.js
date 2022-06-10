"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[2576],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return u}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var A=n.createContext({}),c=function(e){var t=n.useContext(A),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(A.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,A=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(o),u=a,d=p["".concat(A,".").concat(u)]||p[u]||m[u]||r;return o?n.createElement(d,i(i({ref:t},s),{},{components:o})):n.createElement(d,i({ref:t},s))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8215:function(e,t,o){var n=o(7294);t.Z=function(e){var t=e.children,o=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:o,className:a},t)}},1395:function(e,t,o){o.d(t,{Z:function(){return s}});var n=o(7294),a=o(944),r=o(6010),i="tabItem_vU9c",l="tabItemActive_cw6a";var A=37,c=39;var s=function(e){var t=e.lazy,o=e.block,s=e.defaultValue,m=e.values,p=e.groupId,u=e.className,d=(0,a.Z)(),v=d.tabGroupChoices,f=d.setTabGroupChoices,g=(0,n.useState)(s),b=g[0],k=g[1],N=n.Children.toArray(e.children),h=[];if(null!=p){var C=v[p];null!=C&&C!==b&&m.some((function(e){return e.value===C}))&&k(C)}var P=function(e){var t=e.currentTarget,o=h.indexOf(t),n=m[o].value;k(n),null!=p&&(f(p,n),setTimeout((function(){var e,o,n,a,r,i,A,c;(e=t.getBoundingClientRect(),o=e.top,n=e.left,a=e.bottom,r=e.right,i=window,A=i.innerHeight,c=i.innerWidth,o>=0&&r<=c&&a<=A&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},y=function(e){var t,o;switch(e.keyCode){case c:var n=h.indexOf(e.target)+1;o=h[n]||h[0];break;case A:var a=h.indexOf(e.target)-1;o=h[a]||h[h.length-1]}null==(t=o)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},u)},m.map((function(e){var t=e.value,o=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:y,onFocus:P,onClick:P},o)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,o){var n=(0,o(7294).createContext)(void 0);t.Z=n},944:function(e,t,o){var n=o(7294),a=o(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6050:function(e,t,o){o.r(t),o.d(t,{default:function(){return v},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return u}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=o(1395),l=o(8215),A=o.p+"assets/images/tooltip-anatomy-30bf54031883edf70a93c33a73dc3427.png",c=o.p+"assets/images/tooltip-position-1666879e2c96340a1c275d583dcb4dc5.png",s=["components"],m={id:"tooltip",sidebar_label:"Tooltip"},p={unversionedId:"components/tooltip",id:"components/tooltip",isDocsHomePage:!1,title:"Tooltip",description:"<Tabs",source:"@site/docs/components/tooltip.mdx",sourceDirName:"components",slug:"/components/tooltip",permalink:"/en/docs/components/tooltip",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/tooltip.mdx",version:"current",sidebar_label:"Tooltip",frontMatter:{id:"tooltip",sidebar_label:"Tooltip"},sidebar:"componenents",previous:{title:"Toaster",permalink:"/en/docs/components/toaster"}},u=[{value:"Vis\xe3o geral",id:"vis\xe3o-geral",children:[{value:"Anatomia",id:"anatomia",children:[]},{value:"Varia\xe7\xf5es (Posicionamento)",id:"varia\xe7\xf5es-posicionamento",children:[]}]},{value:"Boas pr\xe1ticas",id:"boas-pr\xe1ticas",children:[{value:"Fa\xe7a",id:"fa\xe7a",children:[]},{value:"N\xe3o fa\xe7a",id:"n\xe3o-fa\xe7a",children:[]}]}],d={toc:u};function v(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{defaultValue:"design",lazy:!0,values:[{label:"Uso",value:"design"},{label:"Desenvolvimento",value:"dev"},{label:"Customiza\xe7\xe3o",value:"custom-properties"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"design",mdxType:"TabItem"},(0,r.kt)("h2",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,r.kt)("p",null,"O componente ",(0,r.kt)("inlineCode",{parentName:"p"},"tooltip"),"  tem a fun\xe7\xe3o de apresentar ajuda contextual ou informa\xe7\xe3o adicional sobre um elemento em tela."),(0,r.kt)("h3",{id:"anatomia"},"Anatomia"),(0,r.kt)("p",null,"Estruturalmente, o tooltip \xe9 composto por:"),(0,r.kt)("img",{src:A,alt:"Tooltip com as 3 partes sinalizadas: label, background e arrow"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Label"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Background"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Arrow"),(0,r.kt)("h3",{id:"varia\xe7\xf5es-posicionamento"},"Varia\xe7\xf5es (Posicionamento)"),(0,r.kt)("p",null,"O componente tooltip possui doze varia\xe7\xf5es de posicionamento, sendo que o posicionamento padr\xe3o \xe9 o ",(0,r.kt)("strong",{parentName:"p"},"bottom.")),(0,r.kt)("img",{src:c,alt:"As 12 varia\xe7\xf5es do componente Tooltip: bottom, bottom-left, bottom-right, right, right-top, top-left, top, top-right, left-top, left, left-bottom, bottom-right."}),(0,r.kt)("p",null,"A nomenclatura adotada se baseia na posi\xe7\xe3o do tooltip em rela\xe7\xe3o ao elemento ancorado."),(0,r.kt)("img",{src:"data:image/png;base64,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AFWCIgAAVYIiAABVgiIAAFWCIgAAVYIiAABVX2rGzHXXXfOF11x2BwCgf2MXFB95ZLrZufNri14rF6N+773317qbhTuc5G4xRfa7Y8dXmtnZXzcAAONuLIeeP/jgw2b//gPt46GHDjVzc3NtgNy69ao17yNB8Y47Ft8Ob+fOrzZ79nyvAQCYBGPXo1iU4ebz55u2B/DAgfmgWO5ekp7B3bu/0/6bHsfcPrC8Z3r6vu4Q9rXN1Vdf1X3fA93fvdF8/etfa2655b8XXjt16k8LPZQJkAmW27Zd25w9+7dmZuZXC/vatevm7nu/2vZM7tlzV7vNzMyvmzNnPmympu5qeynzHrcvBACGzUQsZkkYO3fus4Ugtm3bNc1zzx1qtm//Stv7mLD48svPdP+9vv19to2LF+faEDn//PO2Z3L+9xcW9rVv373tvrZu3drua9eub/775/neyxJIEz7n5v7ZzqFM7+bjjz/cPs++EiD37r23AQAYJmPZo3jjjdd3w9pP2ucl/D344KGFcJfexYTARx99tv35xIk3mpdeerob5vY1Bw8+2/ZA3nLLzU2nM/+7SA9hQl96GstrkeHp9BYePnyk/fntt99p95XwV7ZLaHz++SPtPk6e/EP398+0AfHw4aPt79NLmc87evS1BgBgWIxlj+Knn15ow1seGdJNKOzt5UsPY+8ilTh16v0vLIJZTbZP72TCX5EAmKHkBL9eZSg6v4v0PhbprQQAGDZj2aOYIeLeIJi5hK+8cridR7jaiuXeeYyX//mf97VwBgBgGE3EHMUyzzDDxpEgmeHpXllk0juPcS3On5+fy1iGt4vt26937UYAYOSNZY9ihoPLdRCjPM9K45iZ+U2zb9897arjd999v13RnG0yTF0kMGZoOSuaM1zcuxAmryV85pF9ZkHL2bN/bX/OPrPNiROvNwAAo2xMg+K17YKVYv6C28cXLmeTEJeh4QceuK99pIcxl6zpXaSS0PjYYw+3cxuzECWLVPJIoMxr2T6LT7KIJSuW81pkX/mspXMgAQBGzZZOJ2t7h8Pdd/+g2UgJi2VO4nJDzrmEzdJh5NprZV+bPeT85pu/aAAABqAzthfcXouVAmJRC36119ayLwCAUTIRi1kAAOifoAgAQJWgCABAlaAIAECVoAgAQJWgCABA1VAFRfdHvjK5IwwAwKAMVVCcnr6vvZg1/UvIzh1iAAAGZajuzAIAwNDomKMIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQJWgCABAlaAIAECVoAgAQNWXGgCA4dFpGBad/wc356ODIyR8CwAAAABJRU5ErkJggg==",alt:"Tooltip bottom posicionado abaixo de um icone; Top, acima do icone; top-right e top left, acima do icone, variando o alinhamento."}),(0,r.kt)("h2",{id:"boas-pr\xe1ticas"},"Boas pr\xe1ticas"),(0,r.kt)("h3",{id:"fa\xe7a"},"Fa\xe7a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mantenha as informa\xe7\xf5es t\xe3o concisas e claras quanto poss\xedvel;"),(0,r.kt)("li",{parentName:"ul"},"Ajude as pessoas usu\xe1rias a entender o significado ou prop\xf3sito do elementos em tela;"),(0,r.kt)("li",{parentName:"ul"},"Forne\xe7a informa\xe7\xf5es adicionais para a conclus\xe3o de uma tarefa.")),(0,r.kt)("h3",{id:"n\xe3o-fa\xe7a"},"N\xe3o fa\xe7a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Informa\xe7\xf5es importantes ou cruciais n\xe3o devem estar dentro do tooltip;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o utilize o tootltip para passar uma mensagem de erro;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o obstrua informa\xe7\xf5es importantes;"),(0,r.kt)("li",{parentName:"ul"},"N\xe3o coloque a\xe7\xf5es dentro de uma tooltip."))),(0,r.kt)(l.Z,{value:"dev",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o  ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento")))),(0,r.kt)(l.Z,{value:"custom-properties",mdxType:"TabItem"},(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Em constru\xe7\xe3o ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Conte\xfado em desenvolvimento"))))))}v.isMDXComponent=!0},6010:function(e,t,o){function n(e){var t,o,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(a&&(a+=" "),a+=o);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,o=0,a="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}o.d(t,{Z:function(){return a}})}}]);