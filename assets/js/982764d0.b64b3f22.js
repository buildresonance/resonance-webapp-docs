"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[3834],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var d=2;d<a;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return c},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),p=["components"],o={id:"partner-update-input",title:"PartnerUpdateInput"},s=void 0,d={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input",title:"PartnerUpdateInput",description:"The possible fields in order to update an existing partner",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-update-input.mdx",tags:[],version:"current",frontMatter:{id:"partner-update-input",title:"PartnerUpdateInput"},sidebar:"apisSidebar",previous:{title:"PartnerNotificationUserNamesInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-notification-user-names-input"},next:{title:"UserNotificationUpdateStatusInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>PartnerNotificationUserNamesInput</code>)",id:"notificationusernames-partnernotificationusernamesinput",level:4},{value:"<code>ownerUserName</code> (<code>String</code>)",id:"ownerusername-string",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4}],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The possible fields in order to update an existing partner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PartnerUpdateInput {\n  description: String\n  name: String\n  notificationUserNames: PartnerNotificationUserNamesInput\n  ownerUserName: String\n  partnerId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Description of the partner\nLimited to 8000 characters"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The name of the partner\nLimited to 128 characters"),(0,a.kt)("h4",{id:"notificationusernames-partnernotificationusernamesinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-notification-user-names-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerNotificationUserNamesInput")),")"),(0,a.kt)("p",null,"Represents the users to be notified for certain events"),(0,a.kt)("h4",{id:"ownerusername-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ownerUserName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"partnerid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);