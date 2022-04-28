"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[37377],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,d(d({ref:t},l),{},{components:n})):r.createElement(f,d({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var c=2;c<a;c++)d[c]=n[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},29397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),d=["components"],o={id:"public-identity",title:"PublicIdentity"},p=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity",title:"PublicIdentity",description:"This type is returned on routes with no permissions attached to protect",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity.mdx",tags:[],version:"current",frontMatter:{id:"public-identity",title:"PublicIdentity"},sidebar:"apisSidebar",previous:{title:"Product",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product"},next:{title:"StorefrontApiKey",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-api-key"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>displayName</code> (<code>String</code>)",id:"displayname-string",level:4},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"<code>identityParentEntityId</code> (<code>ID</code>)",id:"identityparententityid-id",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This type is returned on routes with no permissions attached to protect\nPersonally Identifiable Information, but still provide minimal data.\nCan be a User or AppClient."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicIdentity {\n  displayName: String!\n  identityId: ID!\n  identityParentEntityId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"displayname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"displayName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"identityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"A userName or appClientId"),(0,a.kt)("h4",{id:"identityparententityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityParentEntityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}m.isMDXComponent=!0}}]);