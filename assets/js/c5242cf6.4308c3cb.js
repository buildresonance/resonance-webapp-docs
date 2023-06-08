"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[39719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||p;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<p;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29144:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=a(67294),p=a(3905);const i={id:"app-status",title:"AppStatus",hide_table_of_contents:!1},l=void 0,o={unversionedId:"adminidentity/api/graphql-admin/reference/enums/app-status",id:"adminidentity/api/graphql-admin/reference/enums/app-status",title:"AppStatus",description:"What stage and availability the app is in",source:"@site/docs/adminidentity/api/graphql-admin/reference/enums/app-status.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/enums",slug:"/adminidentity/api/graphql-admin/reference/enums/app-status",permalink:"/adminidentity/api/graphql-admin/reference/enums/app-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/enums/app-status.mdx",tags:[],version:"current",frontMatter:{id:"app-status",title:"AppStatus",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"specifiedBy",permalink:"/adminidentity/api/graphql-admin/reference/directives/specified-by"},next:{title:"AppType",permalink:"/adminidentity/api/graphql-admin/reference/enums/app-type"}},s={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AppStatus.<b>DRAFT</b></code>",id:"code-style-fontweight-normal-appstatusbdraftbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AppStatus.<b>PRIVATE</b></code>",id:"code-style-fontweight-normal-appstatusbprivatebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AppStatus.<b>PUBLIC</b></code>",id:"code-style-fontweight-normal-appstatusbpublicbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:d,SpecifiedBy:u,Badge:m};function b(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"What stage and availability the app is in"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AppStatus {\n  DRAFT\n  PRIVATE\n  PUBLIC\n}\n")),(0,p.kt)("h3",{id:"values"},"Values"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appstatusbdraftbcode"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppStatus.",(0,p.kt)("b",null,"DRAFT")))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"The app is in the process of being created")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appstatusbprivatebcode"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppStatus.",(0,p.kt)("b",null,"PRIVATE")))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"The app is available to install, but only through shared links")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appstatusbpublicbcode"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppStatus.",(0,p.kt)("b",null,"PUBLIC")))),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"The app is available to install, and is searchable/discoverable")),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/app"},(0,p.kt)("inlineCode",{parentName:"a"},"App")),"  ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/app-create-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AppCreateInput")),"  ",(0,p.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/inputs/app-update-input"},(0,p.kt)("inlineCode",{parentName:"a"},"AppUpdateInput")),"  ",(0,p.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/public-app"},(0,p.kt)("inlineCode",{parentName:"a"},"PublicApp")),"  ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);