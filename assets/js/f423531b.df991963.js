"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Authentication",sidebar_position:2},p="Authentication",s={unversionedId:"developers/authentication",id:"developers/authentication",title:"Authentication",description:"Apps authenticate using an app client ID and a secret. These can be handed to the /token route in the Admin Identity API. A JSON Web Token (JWT) will be returned with a validity of 6 hours. This token can be used to call APIs that the app has access to.",source:"@site/docs/developers/authentication.md",sourceDirName:"developers",slug:"/developers/authentication",permalink:"/developers/authentication",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authentication",sidebar_position:2},sidebar:"apisSidebar",previous:{title:"Overall API Concepts",permalink:"/developers/overall-concepts"},next:{title:"Demand API Concepts",permalink:"/developers/demandhq-apis/demand-api/concepts"}},u=[],l={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Apps authenticate using an app client ID and a secret. These can be handed to the ",(0,a.kt)("a",{parentName:"p",href:"shared-apis/adminidentity-api/rest/token"},"/token route")," in the ",(0,a.kt)("a",{parentName:"p",href:"shared-apis/adminidentity-api/concepts"},"Admin Identity API"),". A JSON Web Token (JWT) will be returned with a validity of 6 hours. This token can be used to call APIs that the app has access to."))}d.isMDXComponent=!0}}]);