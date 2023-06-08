"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[26979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,y=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82867:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(87462),i=n(67294),a=n(3905);const s={id:"partner-identity-permissions-input",title:"PartnerIdentityPermissionsInput",hide_table_of_contents:!1},o=void 0,p={unversionedId:"adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input",id:"adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input",title:"PartnerIdentityPermissionsInput",description:"Input object representing exactly what permissions are given",source:"@site/docs/adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/inputs",slug:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input",permalink:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/inputs/partner-identity-permissions-input.mdx",tags:[],version:"current",frontMatter:{id:"partner-identity-permissions-input",title:"PartnerIdentityPermissionsInput",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"PartnerIdentityCreateInput",permalink:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-create-input"},next:{title:"PartnerIdentityUpdateInput",permalink:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-update-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PartnerIdentityPermissionsInput.<b>roles</b></code><Bullet /><code>[PartnerRole]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-partneridentitypermissionsinputbrolesbcodepartnerrole--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PartnerIdentityPermissionsInput.<b>scopes</b></code><Bullet /><code>[String]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-partneridentitypermissionsinputbscopesbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:c,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object representing exactly what permissions are given"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input PartnerIdentityPermissionsInput {\n  roles: [PartnerRole]!\n  scopes: [String]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-partneridentitypermissionsinputbrolesbcodepartnerrole--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PartnerIdentityPermissionsInput.",(0,a.kt)("b",null,"roles"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/enums/partner-role"},(0,a.kt)("inlineCode",{parentName:"a"},"[PartnerRole]!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Roles are groups of permission scopes, for ease of assigning")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-partneridentitypermissionsinputbscopesbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PartnerIdentityPermissionsInput.",(0,a.kt)("b",null,"scopes"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String]!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Scopes are individual permissions representing a single item and action, in all lowercase, i.e. partneridentity/write")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerIdentityCreateInput")),"  ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/partner-identity-update-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PartnerIdentityUpdateInput")),"  ",(0,a.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);