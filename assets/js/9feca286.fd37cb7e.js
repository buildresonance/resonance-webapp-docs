"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[76142],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),y=i,m=u["".concat(o,".").concat(y)]||u[y]||l[y]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,p[1]=d;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return l}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),p=["components"],d={id:"partner-identity-create-input",title:"PartnerIdentityCreateInput"},o=void 0,s={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input",title:"PartnerIdentityCreateInput",description:"Input object to create a PartnerIdentity, the permissions given to an Identity for a Partner",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input.mdx",tags:[],version:"current",frontMatter:{id:"partner-identity-create-input",title:"PartnerIdentityCreateInput"},sidebar:"apisSidebar",previous:{title:"PartnerCreateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input"},next:{title:"PartnerIdentityPermissionsInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"<code>identityType</code> (<code>ResonanceIdentityType</code>)",id:"identitytype-resonanceidentitytype",level:4},{value:"<code>partnerId</code> (<code>ID</code>)",id:"partnerid-id",level:4},{value:"<code>permissions</code> (<code>PartnerIdentityPermissionsInput</code>)",id:"permissions-partneridentitypermissionsinput",level:4}],u={toc:l};function y(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object to create a PartnerIdentity, the permissions given to an Identity for a Partner"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input PartnerIdentityCreateInput {\n  identityId: ID!\n  identityType: ResonanceIdentityType!\n  partnerId: ID!\n  permissions: PartnerIdentityPermissionsInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"identityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"The identityId these permissions pertain to"),(0,a.kt)("h4",{id:"identitytype-resonanceidentitytype"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/enums/resonance-identity-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ResonanceIdentityType")),")"),(0,a.kt)("p",null,"The type of identity an identityId refers to"),(0,a.kt)("h4",{id:"partnerid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"partnerId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"The ID of the Partner this permission pertains to"),(0,a.kt)("h4",{id:"permissions-partneridentitypermissionsinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-permissions-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerIdentityPermissionsInput")),")"),(0,a.kt)("p",null,"Object representing exactly what permissions are given"))}y.isMDXComponent=!0}}]);