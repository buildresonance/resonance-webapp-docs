"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[28016],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return y}});var d=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);n&&(d=d.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,d)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,d,i=function(e,n){if(null==e)return{};var t,d,i={},a=Object.keys(e);for(d=0;d<a.length;d++)t=a[d],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(d=0;d<a.length;d++)t=a[d],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=d.createContext({}),s=function(e){var n=d.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return d.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return d.createElement(d.Fragment,{},n)}},m=d.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),y=i,h=m["".concat(p,".").concat(y)]||m[y]||l[y]||a;return t?d.createElement(h,r(r({ref:n},c),{},{components:t})):d.createElement(h,r({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<a;s++)r[s]=t[s];return d.createElement.apply(null,r)}return d.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37537:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var d=t(87462),i=t(63366),a=(t(67294),t(3905)),r=["components"],o={id:"demand-hq-identity",title:"DemandHqIdentity"},p=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity",title:"DemandHqIdentity",description:"Indicates a User or App has permissions on a DemandHq",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-identity",title:"DemandHqIdentity"},sidebar:"apisSidebar",previous:{title:"DemandHqIdentityPermissions",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity-permissions"},next:{title:"DemandHqNotificationUserNames",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-notification-user-names"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>demandHq</code> (<code>DemandHq</code>)",id:"demandhq-demandhq",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>identityId</code> (<code>ID</code>)",id:"identityid-id",level:4},{value:"<code>identityParentEntityId</code> (<code>ID</code>)",id:"identityparententityid-id",level:4},{value:"<code>identityType</code> (<code>DemandHqIdentityType</code>)",id:"identitytype-demandhqidentitytype",level:4},{value:"<code>permissions</code> (<code>DemandHqIdentityPermissions</code>)",id:"permissions-demandhqidentitypermissions",level:4},{value:"<code>publicIdentity</code> (<code>PublicIdentity</code>)",id:"publicidentity-publicidentity",level:4},{value:"<code>updatedBy</code> (<code>String</code>)",id:"updatedby-string",level:4}],m={toc:l};function y(e){var n=e.components,t=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,d.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Indicates a User or App has permissions on a DemandHq"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandHqIdentity {\n  demandHq: DemandHq\n  demandHqId: ID!\n  identityId: ID!\n  identityParentEntityId: ID\n  identityType: DemandHqIdentityType!\n  permissions: DemandHqIdentityPermissions!\n  publicIdentity: PublicIdentity\n  updatedBy: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"demandhq-demandhq"},(0,a.kt)("inlineCode",{parentName:"h4"},"demandHq")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq"},(0,a.kt)("inlineCode",{parentName:"a"},"DemandHq")),")"),(0,a.kt)("p",null,"Get the demandHq associated with this DemandHqIdentity."),(0,a.kt)("h4",{id:"demandhqid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"identityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("p",null,"Could be a userName or an appClientId"),(0,a.kt)("h4",{id:"identityparententityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityParentEntityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"identitytype-demandhqidentitytype"},(0,a.kt)("inlineCode",{parentName:"h4"},"identityType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-identity-type"},(0,a.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityType")),")"),(0,a.kt)("h4",{id:"permissions-demandhqidentitypermissions"},(0,a.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity-permissions"},(0,a.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityPermissions")),")"),(0,a.kt)("h4",{id:"publicidentity-publicidentity"},(0,a.kt)("inlineCode",{parentName:"h4"},"publicIdentity")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicIdentity")),")"),(0,a.kt)("p",null,"Get a public identity for this DemandHqIdentity"),(0,a.kt)("h4",{id:"updatedby-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}y.isMDXComponent=!0}}]);