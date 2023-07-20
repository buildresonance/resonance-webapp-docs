"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[17586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},376:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);const i={id:"inventory-status",title:"InventoryStatus",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-admin/reference/enums/inventory-status",id:"demand/api/graphql-admin/reference/enums/inventory-status",title:"InventoryStatus",description:"Indicates whether a variant is in or out of stock",source:"@site/docs/demand/api/graphql-admin/reference/enums/inventory-status.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/inventory-status",permalink:"/demand/api/graphql-admin/reference/enums/inventory-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/inventory-status.mdx",tags:[],version:"current",frontMatter:{id:"inventory-status",title:"InventoryStatus",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"InventoryPolicy",permalink:"/demand/api/graphql-admin/reference/enums/inventory-policy"},next:{title:"NotificationSentiment",permalink:"/demand/api/graphql-admin/reference/enums/notification-sentiment"}},s={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>InventoryStatus.<b>INSTOCK</b></code>",id:"code-style-fontweight-normal-inventorystatusbinstockbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>InventoryStatus.<b>OUTOFSTOCK</b></code>",id:"code-style-fontweight-normal-inventorystatusboutofstockbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:p,Badge:m};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Indicates whether a variant is in or out of stock"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum InventoryStatus {\n  INSTOCK\n  OUTOFSTOCK\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-inventorystatusbinstockbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InventoryStatus.",(0,o.kt)("b",null,"INSTOCK")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-inventorystatusboutofstockbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InventoryStatus.",(0,o.kt)("b",null,"OUTOFSTOCK")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product-metrics"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductMetrics")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant-metrics"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantMetrics")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);