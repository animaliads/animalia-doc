(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[611],{4478:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294);t.Z=function(e){var t=e.width,n=void 0===t?30:t,o=e.height,c=void 0===o?30:o,i=e.className,s=(0,a.Z)(e,["width","height","className"]);return l.createElement("svg",(0,r.Z)({"aria-label":"Menu",className:i,width:n,height:c,viewBox:"0 0 30 30",role:"img",focusable:"false"},s),l.createElement("title",null,"Menu"),l.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},2611:function(e,t,n){"use strict";n.d(t,{Z:function(){return ye}});var r=n(7294),a=n(6010),l=n(4973),o=n(5977),c="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.TH)();return(0,r.useEffect)((function(){!t.hash&&e.current&&i(e.current)}),[t.pathname]),r.createElement("div",{ref:e},r.createElement("a",{href:"#main",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},r.createElement(l.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},u=n(6700),m=n(944),d="announcementBar_3WsW",f="announcementBarClose_38nx",v="announcementBarContent_3EUC",h="announcementBarCloseable_3myR";var g=function(){var e,t=(0,m.Z)(),n=t.isAnnouncementBarClosed,o=t.closeAnnouncementBar,c=(0,u.LU)().announcementBar;if(!c)return null;var i=c.content,s=c.backgroundColor,g=c.textColor,b=c.isCloseable;return!i||b&&n?null:r.createElement("div",{className:d,style:{backgroundColor:s,color:g},role:"banner"},r.createElement("div",{className:(0,a.Z)(v,(e={},e[h]=b,e)),dangerouslySetInnerHTML:{__html:i}}),b?r.createElement("button",{type:"button",className:f,onClick:o,"aria-label":(0,l.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(2122),E=function(){return null},p=n(2263),k={toggle:"toggle_71bT"},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(k.toggle,k.dark),style:n},t)},_=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(k.toggle,k.light),style:n},t)},N=(0,r.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,r.useState)(l),s=i[0],u=i[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(e){var t=v.current;if(t)return e.target!==t?(e.preventDefault(),t.focus(),void t.click()):void u(null==t?void 0:t.checked)}},r.createElement("div",{className:"react-toggle-track"},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked)),r.createElement("div",{className:"react-toggle-thumb"}),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function y(e){var t=(0,u.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,p.default)().isClient;return r.createElement(N,(0,b.Z)({disabled:!c,icons:{checked:r.createElement(Z,{icon:n,style:a}),unchecked:r.createElement(_,{icon:l,style:o})}},e))}var w=n(5350),C=n(7898),L=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],l=n[1],c=(0,r.useRef)(!1),i=(0,r.useState)(0),s=i[0],u=i[1],m=(0,r.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=n.scrollY;if(e)if(r<s)l(!0);else{if(c.current)return c.current=!1,void l(!1);a&&0===r&&l(!0);var o=document.documentElement.scrollHeight-s,i=window.innerHeight;a&&r>=a?l(!1):r+i<o&&l(!0)}}),[s,c]),(0,r.useEffect)((function(){e&&l(!0)}),[t.pathname]),(0,r.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:a}},I=n(1839),A=n(3783),D=n(9756),T=n(5525),B=function(e){var t=e.width,n=void 0===t?20:t,a=e.height,l=void 0===a?20:a,o=(0,D.Z)(e,["width","height"]);return r.createElement("svg",(0,b.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:n,height:l},o),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function S(e){var t=e.mobile,n=e.dropdownItemsBefore,a=e.dropdownItemsAfter,l=(0,D.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),o=(0,p.default)().i18n,c=o.currentLocale,i=o.locales,s=o.localeConfigs,m=(0,u.l5)();function d(e){return s[e].label}var f=i.map((function(e){var t="pathname://"+m.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===c?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),v=[].concat(n,f,a),h=t?"Languages":d(c);return r.createElement(T.Z,(0,b.Z)({},l,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(B,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,h)),items:v}))}var x="searchWrapper_3rmH";function M(e){return e.mobile?null:r.createElement("div",{className:x},r.createElement(E,null))}var U={default:function(){return T.Z},localeDropdown:function(){return S},search:function(){return M},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function H(e){var t=e.type,n=(0,D.Z)(e,["type"]),a=function(e){void 0===e&&(e="default");var t=U[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()}(t);return r.createElement(a,n)}var V=n(5537),R=n(4478),P="displayOnlyInLargeViewport_GrZ2",W="navbarHideable_2qcr",O="navbarHidden_3yey",z="right";var G=function(){var e,t=(0,u.LU)(),n=t.navbar,l=n.items,o=n.hideOnScroll,c=n.style,i=t.colorMode.disableSwitch,s=(0,r.useState)(!1),m=s[0],d=s[1],f=(0,w.Z)(),v=f.isDarkTheme,h=f.setLightTheme,g=f.setDarkTheme,p=L(o),k=p.navbarRef,Z=p.isNavbarVisible;(0,I.Z)(m);var _=(0,r.useCallback)((function(){d(!0)}),[d]),N=(0,r.useCallback)((function(){d(!1)}),[d]),C=(0,r.useCallback)((function(e){return e.target.checked?g():h()}),[h,g]),D=(0,A.Z)();(0,r.useEffect)((function(){D===A.D.desktop&&d(!1)}),[D]);var T=l.some((function(e){return"search"===e.type})),B=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:z)}))}}(l),S=B.leftItems,x=B.rightItems;return r.createElement("nav",{ref:k,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===c,"navbar--primary":"primary"===c,"navbar-sidebar--show":m},e[W]=o,e[O]=o&&!Z,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},null!=l&&0!==l.length&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:_,onKeyDown:_},r.createElement(R.Z,null)),r.createElement(V.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:(0,a.Z)("navbar__title")}),S.map((function(e,t){return r.createElement(H,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},x.map((function(e,t){return r.createElement(H,(0,b.Z)({},e,{key:t}))})),!i&&r.createElement(y,{className:P,checked:v,onChange:C}),!T&&r.createElement(E,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(V.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:N}),!i&&m&&r.createElement(y,{checked:v,onChange:C})),r.createElement("div",{className:"navbar-sidebar__items"},r.createElement("div",{className:"menu"},r.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.createElement(H,(0,b.Z)({mobile:!0},e,{onClick:N,key:t}))})))))))},j=n(6742),F=n(4996),q="footerLogoLink_MyFc",Q=n(8465);function Y(e){var t=e.to,n=e.href,a=e.label,l=e.prependBaseUrlToHref,o=(0,D.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,F.Z)(t),i=(0,F.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(j.Z,(0,b.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),a)}var J=function(e){var t=e.sources,n=e.alt;return r.createElement(Q.Z,{className:"footer__logo",alt:n,sources:t})};var K=function(){var e=(0,u.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,i=void 0===c?{}:c,s={light:(0,F.Z)(i.src),dark:(0,F.Z)(i.srcDark||i.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},o&&o.length>0&&r.createElement("div",{className:"row footer__links"},o.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(Y,e))}))):null)}))),(i||n)&&r.createElement("div",{className:"footer__bottom text--center"},i&&(i.src||i.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},i.href?r.createElement(j.Z,{href:i.href,className:q},r.createElement(J,{alt:i.alt,sources:s})):r.createElement(J,{alt:i.alt,sources:s})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},X=n(412),$=(0,u.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,u.WA)("theme").set(ne(e))},ae=function(){var e=(0,u.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,l=(0,r.useState)(function(e){return X.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),o=l[0],c=l[1],i=(0,r.useCallback)((function(){c(ee),re(ee)}),[]),s=(0,r.useCallback)((function(){c(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(o))}),[o]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&c(ne(e))}catch(t){console.error(t)}}),[c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?te:ee)}))}),[]),{isDarkTheme:o===te,setLightTheme:i,setDarkTheme:s}},le=n(2924);var oe=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,l=t.setDarkTheme;return r.createElement(le.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:l}},e.children)};function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ie(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var se="docusaurus.tab.",ue=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,u.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{for(var e,t={},r=ie((0,u._f)());!(e=r()).done;){var a=e.value;if(a.startsWith(se))t[a.substring(se.length)]=(0,u.WA)(a).get()}n(t)}catch(l){console.error(l)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},me=(0,u.WA)("docusaurus.announcement.dismiss"),de=(0,u.WA)("docusaurus.announcement.id"),fe=function(){var e=(0,u.LU)().announcementBar,t=(0,r.useState)(!0),n=t[0],a=t[1],l=(0,r.useCallback)((function(){me.set("true"),a(!0)}),[]);return(0,r.useEffect)((function(){if(e){var t=e.id,n=de.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;de.set(t),r&&me.set("false"),(r||"false"===me.get())&&a(!1)}}),[]),{isAnnouncementBarClosed:n,closeAnnouncementBar:l}},ve=n(9443);var he=function(e){var t=ue(),n=t.tabGroupChoices,a=t.setTabGroupChoices,l=fe(),o=l.isAnnouncementBarClosed,c=l.closeAnnouncementBar;return r.createElement(ve.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a,isAnnouncementBarClosed:o,closeAnnouncementBar:c}},e.children)};function ge(e){var t=e.children;return r.createElement(oe,null,r.createElement(he,null,r.createElement(u.L5,null,t)))}var be=n(9105);function Ee(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(be.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:""+t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var pe=n(1217);function ke(){var e=(0,p.default)().i18n,t=e.defaultLocale,n=e.locales,a=(0,u.l5)();return r.createElement(be.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ze(e){var t=e.permalink,n=(0,p.default)().siteConfig.url,a=function(){var e=(0,p.default)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,F.Z)(t)}(),l=t?""+n+t:a;return r.createElement(be.Z,null,r.createElement("meta",{property:"og:url",content:l}),r.createElement("link",{rel:"canonical",href:l}))}function _e(e){var t=(0,p.default)(),n=t.siteConfig,a=n.favicon,l=n.themeConfig.metadatas,o=t.i18n,c=o.currentLocale,i=o.localeConfigs,s=e.title,m=e.description,d=e.image,f=e.keywords,v=e.searchMetadatas,h=(0,F.Z)(a),g=(0,u.pe)(s),E=c,k=i[c].direction;return r.createElement(r.Fragment,null,r.createElement(be.Z,null,r.createElement("html",{lang:E,dir:k}),a&&r.createElement("link",{rel:"shortcut icon",href:h}),r.createElement("title",null,g),r.createElement("meta",{property:"og:title",content:g})),r.createElement(pe.Z,{description:m,keywords:f,image:d}),r.createElement(Ze,null),r.createElement(ke,null),r.createElement(Ee,(0,b.Z)({tag:u.HX,locale:c},v)),r.createElement(be.Z,null,l.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var Ne=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var ye=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return Ne(),r.createElement(ge,null,r.createElement(_e,e),r.createElement(s,null),r.createElement(g,null),r.createElement(G,null),r.createElement("div",{className:(0,a.Z)(u.kM.wrapper.main,l,o)},t),!n&&r.createElement(K,null))}},5537:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6742),c=n(8465),i=n(4996),s=n(2263),u=n(6700);t.Z=function(e){var t=(0,s.default)().isClient,n=(0,u.LU)().navbar,m=n.title,d=n.logo,f=void 0===d?{src:""}:d,v=e.imageClassName,h=e.titleClassName,g=(0,a.Z)(e,["imageClassName","titleClassName"]),b=(0,i.Z)(f.href||"/"),E={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return l.createElement(o.Z,(0,r.Z)({to:b},g,f.target&&{target:f.target}),f.src&&l.createElement(c.Z,{key:t,className:v,sources:E,alt:f.alt||m||"Logo"}),null!=m&&l.createElement("strong",{className:h},m))}},5525:function(e,t,n){"use strict";var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(5977),u=n(6700);function m(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,u=e.label,m=e.activeClassName,d=void 0===m?"navbar__link--active":m,f=e.prependBaseUrlToHref,v=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),h=(0,i.Z)(o),g=(0,i.Z)(t),b=(0,i.Z)(s,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,r.Z)({},s?{href:f?b:s}:Object.assign({isNavLink:!0,activeClassName:d,to:h},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}}:null),v),u)}function d(e){var t,n=e.items,c=e.position,i=e.className,s=(0,a.Z)(e,["items","position","className"]),u=(0,l.useRef)(null),d=(0,l.useRef)(null),f=(0,l.useState)(!1),v=f[0],h=f[1];(0,l.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&h(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]);var g=function(e,t){return void 0===t&&(t=!1),(0,o.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?l.createElement("div",{ref:u,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===c,"dropdown--right":"right"===c,"dropdown--show":v})},l.createElement(m,(0,r.Z)({className:g(i)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),h(!v))}}),null!=(t=s.children)?t:s.label),l.createElement("ul",{ref:d,className:"dropdown__menu"},n.map((function(e,t){var o=e.className,c=(0,a.Z)(e,["className"]);return l.createElement("li",{key:t},l.createElement(m,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),h(!1);var r=u.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active",className:g(o,!0)},c)))})))):l.createElement(m,(0,r.Z)({className:g(i)},s))}function f(e){var t,n,c,i=e.items,d=e.className,f=(e.position,(0,a.Z)(e,["items","className","position"])),v=(0,l.useRef)(null),h=(0,s.TH)().pathname,g=(0,l.useState)((function(){var e;return null==(e=!(null!=i&&i.some((function(e){return(0,u.Mg)(e.to,h)}))))||e})),b=g[0],E=g[1],p=function(e,t){return void 0===t&&(t=!1),(0,o.Z)("menu__link",{"menu__link--sublist":t},e)};if(!i)return l.createElement("li",{className:"menu__list-item"},l.createElement(m,(0,r.Z)({className:p(d)},f)));var k=null!=(t=v.current)&&t.scrollHeight?(null==(n=v.current)?void 0:n.scrollHeight)+"px":void 0;return l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(m,(0,r.Z)({role:"button",className:p(d,!0)},f,{onClick:function(e){e.preventDefault(),E((function(e){return!e}))}}),null!=(c=f.children)?c:f.label),l.createElement("ul",{className:"menu__list",ref:v,style:{height:b?void 0:k}},i.map((function(e,t){var n=e.className,o=(0,a.Z)(e,["className"]);return l.createElement("li",{className:"menu__list-item",key:t},l.createElement(m,(0,r.Z)({activeClassName:"menu__link--active",className:p(n)},o,{onClick:f.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),o=n?f:d;return l.createElement(o,r)}},6400:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(6700);function u(e){var t,n,u=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,v=(0,a.Z)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=(0,c.useActiveDocContext)(f),g=h.activeVersion,b=h.activeDoc,E=(0,s.J)(f).preferredVersion,p=(0,c.useLatestVersion)(f),k=null!=(t=null!=g?g:E)?t:p,Z=k.docs.find((function(e){return e.id===u}));if(!Z){var _=k.docs.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id="+u+" in version "+k.name+".\nAvailable docIds=\n- "+_)}return l.createElement(o.Z,(0,r.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(n={},n[m]=b&&b.sidebar===Z.sidebar,n)),label:null!=d?d:Z.id,to:Z.path}))}},9308:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6700),s=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function u(e){var t,n,u=e.mobile,m=e.docsPluginId,d=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,v=e.dropdownItemsAfter,h=(0,a.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),g=(0,c.useActiveDocContext)(m),b=(0,c.useVersions)(m),E=(0,c.useLatestVersion)(m),p=(0,i.J)(m),k=p.preferredVersion,Z=p.savePreferredVersionName;var _=null!=(t=null!=(n=g.activeVersion)?n:k)?t:E,N=u?"Versions":_.label,y=u?void 0:s(_).path;return l.createElement(o.Z,(0,r.Z)({},h,{mobile:u,label:N,to:y,items:function(){var e=b.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||s(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){Z(e.name)}}})),t=[].concat(f,e,v);if(!(t.length<=1))return t}(),isActive:d?function(){return!1}:void 0}))}},7250:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(2122),a=n(9756),l=n(7294),o=n(5525),c=n(907),i=n(6700);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,a.Z)(e,["label","to","docsPluginId"]),d=(0,c.useActiveVersion)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.useLatestVersion)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,r.Z)({},m,{label:g,to:b}))}},2924:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},8465:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),l=n(7294),o=n(6010),c=n(2263),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=function(e){var t=(0,c.default)().isClient,n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,a.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,h.map((function(e){return l.createElement("img",(0,r.Z)({key:e,src:u[e],alt:f,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},1839:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},7898:function(e,t,n){"use strict";var r=n(7294),a=n(412),l=function(){return{scrollX:a.Z.canUseDOM?window.pageXOffset:0,scrollY:a.Z.canUseDOM?window.pageYOffset:0}};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(l()),a=function(){var t=l();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},5350:function(e,t,n){"use strict";var r=n(7294),a=n(2924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},3783:function(e,t,n){"use strict";n.d(t,{D:function(){return l}});var r=n(7294),a=n(412),l={desktop:"desktop",mobile:"mobile"};t.Z=function(){var e=a.Z.canUseDOM;function t(){if(e)return window.innerWidth>996?l.desktop:l.mobile}var n=(0,r.useState)(t),o=n[0],c=n[1];return(0,r.useEffect)((function(){if(e)return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)};function n(){c(t())}}),[]),o}}}]);