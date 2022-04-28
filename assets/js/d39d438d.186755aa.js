"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[97116],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),u=i,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"my-notifications",title:"myNotifications"},c=void 0,p={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications",id:"developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications",title:"myNotifications",description:"List your UserNotifications",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/queries",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/queries/my-notifications.mdx",tags:[],version:"current",frontMatter:{id:"my-notifications",title:"myNotifications"},sidebar:"apisSidebar",previous:{title:"me",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/me"},next:{title:"partner",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/queries/partner"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>before</code> (<code>String</code>)",id:"before-string",level:4},{value:"<code>category</code> (<code>UserNotificationCategory</code>)",id:"category-usernotificationcategory",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>last</code> (<code>Int</code>)",id:"last-int",level:4},{value:"<code>status</code> (<code>NotificationStatus</code>)",id:"status-notificationstatus",level:4},{value:"Type",id:"type",level:3},{value:"<code>UserNotificationConnection</code>",id:"usernotificationconnection",level:4}],f={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"List your UserNotifications"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"myNotifications(\n  after: String\n  before: String\n  category: UserNotificationCategory\n  first: Int\n  last: Int\n  status: NotificationStatus\n): UserNotificationConnection!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,a.kt)("h4",{id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,a.kt)("h4",{id:"category-usernotificationcategory"},(0,a.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/user-notification-category"},(0,a.kt)("inlineCode",{parentName:"a"},"UserNotificationCategory")),")"),(0,a.kt)("h4",{id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Returns the first n elements from the list."),(0,a.kt)("h4",{id:"last-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"last")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Returns the last n elements from the list."),(0,a.kt)("h4",{id:"status-notificationstatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/notification-status"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationStatus")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"usernotificationconnection"},(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/user-notification-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"UserNotificationConnection"))),(0,a.kt)("p",null,"Paginate through UserNotifications"))}u.isMDXComponent=!0}}]);