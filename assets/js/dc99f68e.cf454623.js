"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[64140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),y=i,f=p["".concat(l,".").concat(y)]||p[y]||m[y]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31316:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=n(67294),a=n(3905);const o={id:"partner-identity-permissions",title:"PartnerIdentityPermissions",hide_table_of_contents:!1},s=void 0,l={unversionedId:"adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions",id:"adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions",title:"PartnerIdentityPermissions",description:"Object representing exactly what permissions are given",source:"@site/docs/adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/objects",slug:"/adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions",permalink:"/adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/objects/partner-identity-permissions.mdx",tags:[],version:"current",frontMatter:{id:"partner-identity-permissions",title:"PartnerIdentityPermissions",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"PartnerIdentityEdge",permalink:"/adminidentity/api/graphql-admin/reference/objects/partner-identity-edge"},next:{title:"PartnerIdentity",permalink:"/adminidentity/api/graphql-admin/reference/objects/partner-identity"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PartnerIdentityPermissions.<b>roles</b></code><Bullet /><code>[PartnerRole]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-partneridentitypermissionsbrolesbcodepartnerrole--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PartnerIdentityPermissions.<b>scopes</b></code><Bullet /><code>[String]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-partneridentitypermissionsbscopesbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:p,SpecifiedBy:m,Badge:y};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Object representing exactly what permissions are given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PartnerIdentityPermissions {\n  roles: [PartnerRole]!\n  scopes: [String]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-partneridentitypermissionsbrolesbcodepartnerrole--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PartnerIdentityPermissions.",(0,a.kt)("b",null,"roles"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/enums/partner-role"},(0,a.kt)("inlineCode",{parentName:"a"},"[PartnerRole]!"))," ",(0,a.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Roles are groups of permission scopes, for ease of assigning")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-partneridentitypermissionsbscopesbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PartnerIdentityPermissions.",(0,a.kt)("b",null,"scopes"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String]!"))," ",(0,a.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Scopes are individual permissions representing a single item and action, in all lowercase, i.e. partneridentity/write")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/partner-identity"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerIdentity")),"  ",(0,a.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);