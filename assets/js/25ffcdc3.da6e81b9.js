"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[77732],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||p;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,s=new Array(p);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<p;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75614:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=a(87462),r=a(67294),p=a(3905);const s={id:"update-app-permissions",title:"updateAppPermissions",hide_table_of_contents:!1},i=void 0,o={unversionedId:"supply/api/graphql-admin/reference/mutations/update-app-permissions",id:"supply/api/graphql-admin/reference/mutations/update-app-permissions",title:"updateAppPermissions",description:"Update an app's permissions on a Supplier. This is a no-op if the app's",source:"@site/docs/supply/api/graphql-admin/reference/mutations/update-app-permissions.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/update-app-permissions",permalink:"/supply/api/graphql-admin/reference/mutations/update-app-permissions",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/update-app-permissions.mdx",tags:[],version:"current",frontMatter:{id:"update-app-permissions",title:"updateAppPermissions",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"startImport",permalink:"/supply/api/graphql-admin/reference/mutations/start-import"},next:{title:"updatePurchaseOrderItem",permalink:"/supply/api/graphql-admin/reference/mutations/update-purchase-order-item"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateAppPermissions.<b>appId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateapppermissionsbappidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>updateAppPermissions.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateapppermissionsbsupplieridbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AppInstallationResponse</code> <Badge class="secondary" text="object"/>',id:"appinstallationresponse-",level:4}],c=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:c,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Update an app's permissions on a Supplier. This is a no-op if the app's\nrequested permissions are the same as the current permissions."),(0,p.kt)("p",null,"Requires the supplieridentity/write permission on the given Supplier"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAppPermissions(\n  appId: ID!\n  supplierId: ID!\n): AppInstallationResponse!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-updateapppermissionsbappidbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"updateAppPermissions.",(0,p.kt)("b",null,"appId"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,p.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h4",{id:"code-style-fontweight-normal-updateapppermissionsbsupplieridbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"updateAppPermissions.",(0,p.kt)("b",null,"supplierId"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,p.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"appinstallationresponse-"},(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/app-installation-response"},(0,p.kt)("inlineCode",{parentName:"a"},"AppInstallationResponse"))," ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"The response recieved when an app is installed or the permissions are updated")))}y.isMDXComponent=!0}}]);