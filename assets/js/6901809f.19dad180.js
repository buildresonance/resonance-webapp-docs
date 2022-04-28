"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[37168],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),y=i,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||a;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,d=new Array(a);d[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,d[1]=o;for(var l=2;l<a;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},65570:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),d=["components"],o={id:"delete-partner-identity",title:"deletePartnerIdentity"},p=void 0,l={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/mutations/delete-partner-identity",id:"developers/shared-apis/adminidentity-api/graphql/reference/mutations/delete-partner-identity",title:"deletePartnerIdentity",description:"Delete a PartnerIdentity (remove Identity's permissions to a Partner)",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/mutations/delete-partner-identity.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/mutations",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/delete-partner-identity",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/delete-partner-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/mutations/delete-partner-identity.mdx",tags:[],version:"current",frontMatter:{id:"delete-partner-identity",title:"deletePartnerIdentity"},sidebar:"apisSidebar",previous:{title:"createPartner",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-partner"},next:{title:"inviteUser",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/invite-user"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>PartnerIdentityDeleteResponse</code>",id:"partneridentitydeleteresponse",level:4}],u={toc:c};function y(e){var t=e.components,r=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Delete a PartnerIdentity (remove Identity's permissions to a Partner)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"deletePartnerIdentity(\n  identityId: ID!\n  partnerId: ID!\n): PartnerIdentityDeleteResponse!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"identityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"partnerid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"partneridentitydeleteresponse"},(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/partner-identity-delete-response"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerIdentityDeleteResponse"))),(0,a.kt)("p",null,"The output when a PartnerIdentity is deleted"))}y.isMDXComponent=!0}}]);