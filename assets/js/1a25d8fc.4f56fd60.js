"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[60873],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),c=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,h=d["".concat(o,".").concat(m)]||d[m]||u[m]||p;return t?a.createElement(h,i(i({ref:r},s),{},{components:t})):a.createElement(h,i({ref:r},s))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34932:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),n=t(67294),p=t(3905);const i={id:"purchase-order-item",title:"purchaseOrderItem",hide_table_of_contents:!1},l=void 0,o={unversionedId:"supply/api/graphql-admin/reference/queries/purchase-order-item",id:"supply/api/graphql-admin/reference/queries/purchase-order-item",title:"purchaseOrderItem",description:"Get a PurchaseOrderItem by ID",source:"@site/docs/supply/api/graphql-admin/reference/queries/purchase-order-item.mdx",sourceDirName:"supply/api/graphql-admin/reference/queries",slug:"/supply/api/graphql-admin/reference/queries/purchase-order-item",permalink:"/supply/api/graphql-admin/reference/queries/purchase-order-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/queries/purchase-order-item.mdx",tags:[],version:"current",frontMatter:{id:"purchase-order-item",title:"purchaseOrderItem",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"publicSuppliers",permalink:"/supply/api/graphql-admin/reference/queries/public-suppliers"},next:{title:"purchaseOrderItems",permalink:"/supply/api/graphql-admin/reference/queries/purchase-order-items"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>purchaseOrderItem.<b>purchaseOrderItemId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-purchaseorderitembpurchaseorderitemidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>PurchaseOrderItem</code> <Badge class="secondary" text="object"/>',id:"purchaseorderitem-",level:4}],d=()=>(0,p.kt)(n.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,p.kt)(n.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(n.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:s,Bullet:d,SpecifiedBy:u,Badge:m};function f(e){let{components:r,...t}=e;return(0,p.kt)("wrapper",(0,a.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Get a PurchaseOrderItem by ID"),(0,p.kt)("p",null,"Requires purchaseorderitem/read permissions on the Supplier"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"purchaseOrderItem(\n  purchaseOrderItemId: ID!\n): PurchaseOrderItem!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-purchaseorderitembpurchaseorderitemidbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"purchaseOrderItem.",(0,p.kt)("b",null,"purchaseOrderItemId"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,p.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"purchaseorderitem-"},(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/purchase-order-item"},(0,p.kt)("inlineCode",{parentName:"a"},"PurchaseOrderItem"))," ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"A single item to be shipped to an address")))}f.isMDXComponent=!0}}]);