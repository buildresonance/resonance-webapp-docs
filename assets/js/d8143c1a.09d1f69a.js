"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[38303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||p;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,s=new Array(p);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<p;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3894:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),r=n(67294),p=n(3905);const s={id:"update-app-permissions",title:"updateAppPermissions",hide_table_of_contents:!1},o=void 0,i={unversionedId:"demand/api/graphql-admin/reference/mutations/update-app-permissions",id:"demand/api/graphql-admin/reference/mutations/update-app-permissions",title:"updateAppPermissions",description:"Update an app's permissions on a DemandHq. This is a no-op if the app's",source:"@site/docs/demand/api/graphql-admin/reference/mutations/update-app-permissions.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/update-app-permissions",permalink:"/demand/api/graphql-admin/reference/mutations/update-app-permissions",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/update-app-permissions.mdx",tags:[],version:"current",frontMatter:{id:"update-app-permissions",title:"updateAppPermissions",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"startImport",permalink:"/demand/api/graphql-admin/reference/mutations/start-import"},next:{title:"updateCollectionTypeContent",permalink:"/demand/api/graphql-admin/reference/mutations/update-collection-type-content"}},d={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateAppPermissions.<b>appId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateapppermissionsbappidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>updateAppPermissions.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateapppermissionsbdemandhqidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AppInstallationResponse</code> <Badge class="secondary" text="object"/>',id:"appinstallationresponse-",level:4}],c=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:c,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Update an app's permissions on a DemandHq. This is a no-op if the app's\nrequested permissions are the same as the current permissions."),(0,p.kt)("p",null,"Requires the demandHqidentity/write permission on the given DemandHq"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAppPermissions(\n  appId: ID!\n  demandHqId: ID!\n): AppInstallationResponse!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-updateapppermissionsbappidbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"updateAppPermissions.",(0,p.kt)("b",null,"appId"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,p.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h4",{id:"code-style-fontweight-normal-updateapppermissionsbdemandhqidbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"updateAppPermissions.",(0,p.kt)("b",null,"demandHqId"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,p.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"appinstallationresponse-"},(0,p.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/app-installation-response"},(0,p.kt)("inlineCode",{parentName:"a"},"AppInstallationResponse"))," ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"The response recieved when an app is installed or the permissions are updated")))}y.isMDXComponent=!0}}]);