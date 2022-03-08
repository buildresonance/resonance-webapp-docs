"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6760],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,u=m["".concat(o,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,p(p({ref:t},s),{},{components:n})):a.createElement(u,p({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,p[1]=d;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6324:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return s},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],d={id:"partner",title:"Partner"},o=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/partner",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/partner",title:"Partner",description:"Represents a Partner, the parent to an App, and the parent most component for Development",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner.mdx",tags:[],version:"current",frontMatter:{id:"partner",title:"Partner"},sidebar:"apisSidebar",previous:{title:"PartnerNotificationUserNames",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-notification-user-names"},next:{title:"PublicAppConnection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/public-app-connection"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>app</code> (<code>App</code>)",id:"app-app",level:4},{value:"<code>apps</code> (<code>AppConnection</code>)",id:"apps-appconnection",level:4},{value:"<code>createdAt</code> (<code>Date</code>)",id:"createdat-date",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>PartnerNotificationUserNames</code>)",id:"notificationusernames-partnernotificationusernames",level:4},{value:"<code>ownerUserName</code> (<code>String</code>)",id:"ownerusername-string",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4},{value:"<code>partnerIdentities</code> (<code>PartnerIdentityConnection</code>)",id:"partneridentities-partneridentityconnection",level:4},{value:"<code>partnerIdentity</code> (<code>PartnerIdentity</code>)",id:"partneridentity-partneridentity",level:4},{value:"<code>updatedAt</code> (<code>Date</code>)",id:"updatedat-date",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a Partner, the parent to an App, and the parent most component for Development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Partner {\n  app(\n  appId: ID!\n): App\n  apps(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): AppConnection!\n  createdAt: Date!\n  description: String\n  name: String!\n  notificationUserNames: PartnerNotificationUserNames\n  ownerUserName: String!\n  partnerId: ID!\n  partnerIdentities(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): PartnerIdentityConnection!\n  partnerIdentity(\n  identityId: ID!\n): PartnerIdentity\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"app-app"},(0,i.kt)("inlineCode",{parentName:"h4"},"app")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app"},(0,i.kt)("inlineCode",{parentName:"a"},"App")),")"),(0,i.kt)("p",null,"Get an App by ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"appid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"appId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("h4",{id:"apps-appconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"apps")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"AppConnection")),")"),(0,i.kt)("p",null,"Get a list of Apps for a Partner"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"createdat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Description of the partner\nLimited to 8000 characters"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The name of the partner\nLimited to 128 characters"),(0,i.kt)("h4",{id:"notificationusernames-partnernotificationusernames"},(0,i.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-notification-user-names"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerNotificationUserNames")),")"),(0,i.kt)("p",null,"Represents the users to be notified for certain events"),(0,i.kt)("h4",{id:"ownerusername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ownerUserName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"partnerid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"partneridentities-partneridentityconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"partnerIdentities")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-identity-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerIdentityConnection")),")"),(0,i.kt)("p",null,"Return the identities' permissions associated with this partner"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"partneridentity-partneridentity"},(0,i.kt)("inlineCode",{parentName:"h4"},"partnerIdentity")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"PartnerIdentity")),")"),(0,i.kt)("p",null,"Return a single identity's permissions associated with this partner"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"identityid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"identityId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("h4",{id:"updatedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("h4",{id:"updatedby-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}h.isMDXComponent=!0}}]);