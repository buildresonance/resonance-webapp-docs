"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7792],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=o(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,p[1]=d;for(var o=2;o<i;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return o},assets:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),p=["components"],d={id:"app-update-input",title:"AppUpdateInput"},s=void 0,o={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input",title:"AppUpdateInput",description:"The possible fields in order to update an existing app",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input.mdx",tags:[],version:"current",frontMatter:{id:"app-update-input",title:"AppUpdateInput"},sidebar:"apisSidebar",previous:{title:"AppCreateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-create-input"},next:{title:"PartnerCreateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>requestedScopes</code> (<code>String</code>)",id:"requestedscopes-string",level:4},{value:"<code>status</code> (<code>AppStatus</code>)",id:"status-appstatus",level:4}],u={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The possible fields in order to update an existing app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AppUpdateInput {\n  appId: ID!\n  description: String\n  name: String\n  requestedScopes: [String]\n  status: AppStatus\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"appid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Short description of the app\nLimited to 8000 characters"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The name of the app\nLimited to 128 characters"),(0,i.kt)("h4",{id:"requestedscopes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"requestedScopes")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"status-appstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/app-status"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStatus")),")"))}f.isMDXComponent=!0}}]);