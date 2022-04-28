"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[89925],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(o,".").concat(m)]||u[m]||l[m]||i;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,p[1]=d;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27143:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],d={id:"public-app",title:"PublicApp"},o=void 0,s={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app",title:"PublicApp",description:"Represents an App, but the fields that can be publicly consumed without scopes",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app.mdx",tags:[],version:"current",frontMatter:{id:"public-app",title:"PublicApp"},sidebar:"apisSidebar",previous:{title:"PublicAppEdge",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app-edge"},next:{title:"PublicIdentityConnection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-connection"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>appClientIds</code> (<code>String</code>)",id:"appclientids-string",level:4},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"<code>appType</code> (<code>AppType</code>)",id:"apptype-apptype",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4},{value:"<code>requestedScopes</code> (<code>String</code>)",id:"requestedscopes-string",level:4},{value:"<code>status</code> (<code>AppStatus</code>)",id:"status-appstatus",level:4}],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents an App, but the fields that can be publicly consumed without scopes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicApp {\n  appClientIds: [String!]!\n  appId: ID!\n  appType: AppType!\n  description: String\n  name: String!\n  partnerId: ID!\n  requestedScopes: [String]\n  status: AppStatus!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"appclientids-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"appClientIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"appid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"apptype-apptype"},(0,i.kt)("inlineCode",{parentName:"h4"},"appType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-type"},(0,i.kt)("inlineCode",{parentName:"a"},"AppType")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"partnerid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"requestedscopes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"requestedScopes")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"status-appstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStatus")),")"))}m.isMDXComponent=!0}}]);