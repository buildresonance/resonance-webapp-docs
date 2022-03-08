"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1823],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=p(t),u=r,g=f["".concat(s,".").concat(u)]||f[u]||l[u]||o;return t?i.createElement(g,a(a({ref:n},d),{},{components:t})):i.createElement(g,a({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1936:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return l},default:function(){return u}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],c={id:"user-notification-connection",title:"UserNotificationConnection"},s=void 0,p={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",title:"UserNotificationConnection",description:"Paginate through UserNotifications",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection.mdx",tags:[],version:"current",frontMatter:{id:"user-notification-connection",title:"UserNotificationConnection"},sidebar:"apisSidebar",previous:{title:"PublicIdentity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-identity"},next:{title:"UserNotificationEdge",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-edge"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>UserNotificationEdge</code>)",id:"edges-usernotificationedge",level:4},{value:"<code>nodes</code> (<code>UserNotification</code>)",id:"nodes-usernotification",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],f={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through UserNotifications"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserNotificationConnection {\n  edges: [UserNotificationEdge]!\n  nodes: [UserNotification]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-usernotificationedge"},(0,o.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"UserNotificationEdge")),")"),(0,o.kt)("h4",{id:"nodes-usernotification"},(0,o.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"UserNotification")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"))}u.isMDXComponent=!0}}]);