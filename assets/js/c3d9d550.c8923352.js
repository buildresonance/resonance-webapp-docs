"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[81585],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||l[m]||p;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<p;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68821:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l}});var a=n(87462),r=n(63366),p=(n(67294),n(3905)),i=["components"],d={id:"public-app",title:"PublicApp",hide_table_of_contents:!1},o=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/public-app",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/public-app",title:"PublicApp",description:"This type is returned on routes with no permissions attached to protect",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/public-app.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-app",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-app",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/public-app.mdx",tags:[],version:"current",frontMatter:{id:"public-app",title:"PublicApp",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"Product",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product"},next:{title:"PublicDemandHqConnection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-demand-hq-connection"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>appClientIds</code> (<code>[ID!]!</code>)",id:"appclientids-id",level:4},{value:"<code>appId</code> (<code>ID!</code>)",id:"appid-id",level:4},{value:"<code>appType</code> (<code>AppType!</code>)",id:"apptype-apptype",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4},{value:"<code>partnerId</code> (<code>ID!</code>)",id:"partnerid-id",level:4},{value:"<code>requestedScopes</code> (<code>[String]</code>)",id:"requestedscopes-string",level:4},{value:"<code>status</code> (<code>AppStatus!</code>)",id:"status-appstatus",level:4}],u={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"This type is returned on routes with no permissions attached to protect\nPersonally Identifiable Information, but still provide minimal data.\nProvides a subset of App from the Identity domain."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicApp {\n  appClientIds: [ID!]!\n  appId: ID!\n  appType: AppType!\n  description: String\n  name: String!\n  partnerId: ID!\n  requestedScopes: [String]\n  status: AppStatus!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"appclientids-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"appClientIds"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"[ID!]!")),")"),(0,p.kt)("h4",{id:"appid-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"appId"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"apptype-apptype"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"appType"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/app-type"},(0,p.kt)("inlineCode",{parentName:"a"},"AppType!")),")"),(0,p.kt)("h4",{id:"description-string"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"name-string"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h4",{id:"partnerid-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"partnerId"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"requestedscopes-string"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"requestedScopes"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,p.kt)("h4",{id:"status-appstatus"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"status"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/app-status"},(0,p.kt)("inlineCode",{parentName:"a"},"AppStatus!")),")"))}m.isMDXComponent=!0}}]);