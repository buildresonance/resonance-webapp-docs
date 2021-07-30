(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4755],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=s(n),f=a,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||i;return n?t.createElement(m,p(p({ref:r},u),{},{components:n})):t.createElement(m,p({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=l;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5672:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var t=n(2122),a=n(9756),i=(n(7294),n(3905)),p=["components"],o={id:"partner",title:"partner"},c={unversionedId:"apis/shared-apis/adminidentity-api/reference/queries/partner",id:"apis/shared-apis/adminidentity-api/reference/queries/partner",isDocsHomePage:!1,title:"partner",description:"Get a single partner by PartnerId",source:"@site/docs/apis/shared-apis/adminidentity-api/reference/queries/partner.mdx",sourceDirName:"apis/shared-apis/adminidentity-api/reference/queries",slug:"/apis/shared-apis/adminidentity-api/reference/queries/partner",permalink:"/apis/shared-apis/adminidentity-api/reference/queries/partner",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/apis/shared-apis/adminidentity-api/reference/queries/partner.mdx",version:"current",frontMatter:{id:"partner",title:"partner"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:s};function d(e){var r=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get a single partner by PartnerId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"partner(\n  partnerId: ID!\n): Partner\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"partnerid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/apis/shared-apis/adminidentity-api/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"partner"},(0,i.kt)("a",{parentName:"h4",href:"/apis/shared-apis/adminidentity-api/reference/objects/partner"},(0,i.kt)("inlineCode",{parentName:"a"},"Partner"))),(0,i.kt)("p",null,"Represents a Partner, the parent to an App, and the parent most component for Development"))}d.isMDXComponent=!0}}]);