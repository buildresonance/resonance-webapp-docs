"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5309],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,f=u["".concat(p,".").concat(y)]||u[y]||s[y]||a;return n?i.createElement(f,o(o({ref:t},l),{},{components:n})):i.createElement(f,o({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return l},toc:function(){return s},default:function(){return y}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],d={id:"public-identity",title:"PublicIdentity"},p=void 0,c={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity",title:"PublicIdentity",description:"This type is returned on routes with no permissions attached to protect",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity.mdx",tags:[],version:"current",frontMatter:{id:"public-identity",title:"PublicIdentity"},sidebar:"apisSidebar",previous:{title:"PublicIdentityEdge",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity-edge"},next:{title:"UserNotificationConnection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>displayName</code> (<code>String</code>)",id:"displayname-string",level:4},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"<code>identityParentEntityId</code> (<code>ID</code>)",id:"identityparententityid-id",level:4}],u={toc:s};function y(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This type is returned on routes with no permissions attached to protect\nPersonally Identifiable Information, but still provide minimal data.\nCan be a User or Identity."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicIdentity {\n  displayName: String!\n  identityId: ID!\n  identityParentEntityId: ID\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"displayname-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"displayName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"identityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"A userName or appClientId"),(0,a.kt)("h4",{id:"identityparententityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityParentEntityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"The parent entityId of the identity.\nAt time of writing, this is only used for AppClients, and is populated with the AppId."))}y.isMDXComponent=!0}}]);