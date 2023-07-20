"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[24268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4281:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=n(67294),p=n(3905);const i={id:"app-installation-response",title:"AppInstallationResponse",hide_table_of_contents:!1},l=void 0,s={unversionedId:"supply/api/graphql-admin/reference/objects/app-installation-response",id:"supply/api/graphql-admin/reference/objects/app-installation-response",title:"AppInstallationResponse",description:"The response recieved when an app is installed or the permissions are updated",source:"@site/docs/supply/api/graphql-admin/reference/objects/app-installation-response.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/app-installation-response",permalink:"/supply/api/graphql-admin/reference/objects/app-installation-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/app-installation-response.mdx",tags:[],version:"current",frontMatter:{id:"app-installation-response",title:"AppInstallationResponse",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"Address",permalink:"/supply/api/graphql-admin/reference/objects/address"},next:{title:"PageInfo",permalink:"/supply/api/graphql-admin/reference/objects/page-info"}},o={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AppInstallationResponse.<b>supplierIdentities</b></code><Bullet /><code>[SupplierIdentity]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-appinstallationresponsebsupplieridentitiesbcodesupplieridentity--",level:4},{value:"Returned by",id:"returned-by",level:3}],d=()=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,p.kt)(a.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:d,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The response recieved when an app is installed or the permissions are updated"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type AppInstallationResponse {\n  supplierIdentities: [SupplierIdentity]!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appinstallationresponsebsupplieridentitiesbcodesupplieridentity--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppInstallationResponse.",(0,p.kt)("b",null,"supplierIdentities"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-identity"},(0,p.kt)("inlineCode",{parentName:"a"},"[SupplierIdentity]!"))," ",(0,p.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"returned-by"},"Returned by"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/install-app"},(0,p.kt)("inlineCode",{parentName:"a"},"installApp")),"  ",(0,p.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-app-permissions"},(0,p.kt)("inlineCode",{parentName:"a"},"updateAppPermissions")),"  ",(0,p.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);