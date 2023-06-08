"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),d=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||l[m]||p;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<p;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36746:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>l,assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=r(87462),n=r(67294),p=r(3905);const i={id:"update-purchase-order-item",title:"updatePurchaseOrderItem",hide_table_of_contents:!1},o=void 0,u={unversionedId:"supply/api/graphql-admin/reference/mutations/update-purchase-order-item",id:"supply/api/graphql-admin/reference/mutations/update-purchase-order-item",title:"updatePurchaseOrderItem",description:"Updates an existing PurchaseOrderItem",source:"@site/docs/supply/api/graphql-admin/reference/mutations/update-purchase-order-item.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/update-purchase-order-item",permalink:"/supply/api/graphql-admin/reference/mutations/update-purchase-order-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/update-purchase-order-item.mdx",tags:[],version:"current",frontMatter:{id:"update-purchase-order-item",title:"updatePurchaseOrderItem",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"updateAppPermissions",permalink:"/supply/api/graphql-admin/reference/mutations/update-app-permissions"},next:{title:"updateSupplierDemandHq",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-demand-hq"}},d={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updatePurchaseOrderItem.<b>input</b></code><Bullet /><code>PurchaseOrderItemUpdateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatepurchaseorderitembinputbcodepurchaseorderitemupdateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>PurchaseOrderItem</code> <Badge class="secondary" text="object"/>',id:"purchaseorderitem-",level:4}],c=()=>(0,p.kt)(n.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,p.kt)(n.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(n.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:c,SpecifiedBy:l,Badge:m};function h(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Updates an existing PurchaseOrderItem"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updatePurchaseOrderItem(\n  input: PurchaseOrderItemUpdateInput!\n): PurchaseOrderItem!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-updatepurchaseorderitembinputbcodepurchaseorderitemupdateinput--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"updatePurchaseOrderItem.",(0,p.kt)("b",null,"input"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input"},(0,p.kt)("inlineCode",{parentName:"a"},"PurchaseOrderItemUpdateInput!"))," ",(0,p.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"purchaseorderitem-"},(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/purchase-order-item"},(0,p.kt)("inlineCode",{parentName:"a"},"PurchaseOrderItem"))," ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"A single item to be shipped to an address")))}h.isMDXComponent=!0}}]);