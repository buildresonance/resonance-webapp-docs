"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5639],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=l(n),y=i,f=s["".concat(o,".").concat(y)]||s[y]||u[y]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,p[1]=d;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},38686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return c},toc:function(){return u},default:function(){return y}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),p=["components"],d={id:"public-identity",title:"publicIdentity"},o=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity",id:"developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity",title:"publicIdentity",description:"Get a PublicIdentity by ID",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/queries",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identity.mdx",tags:[],version:"current",frontMatter:{id:"public-identity",title:"publicIdentity"},sidebar:"apisSidebar",previous:{title:"publicIdentities",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/public-identities"},next:{title:"queryPublicIdentityByEmail",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/query-public-identity-by-email"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>PublicIdentity</code>",id:"publicidentity",level:4}],s={toc:u};function y(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Get a PublicIdentity by ID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"publicIdentity(\n  identityId: ID!\n): PublicIdentity\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"identityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"publicidentity"},(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIdentity"))),(0,a.kt)("p",null,"This type is returned on routes with no permissions attached to protect\nPersonally Identifiable Information, but still provide minimal data.\nCan be a User or Identity."))}y.isMDXComponent=!0}}]);