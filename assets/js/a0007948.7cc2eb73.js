"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[76116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||p;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10427:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=r(67294),p=r(3905);const i={id:"create-supplier-demand-hq",title:"createSupplierDemandHq",hide_table_of_contents:!1},l=void 0,o={unversionedId:"supply/api/graphql-admin/reference/mutations/create-supplier-demand-hq",id:"supply/api/graphql-admin/reference/mutations/create-supplier-demand-hq",title:"createSupplierDemandHq",description:"Creates a new SupplierDemandHq.",source:"@site/docs/supply/api/graphql-admin/reference/mutations/create-supplier-demand-hq.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/create-supplier-demand-hq",permalink:"/supply/api/graphql-admin/reference/mutations/create-supplier-demand-hq",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/create-supplier-demand-hq.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-demand-hq",title:"createSupplierDemandHq",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"createPurchaseOrderItem",permalink:"/supply/api/graphql-admin/reference/mutations/create-purchase-order-item"},next:{title:"createSupplierIdentity",permalink:"/supply/api/graphql-admin/reference/mutations/create-supplier-identity"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createSupplierDemandHq.<b>input</b></code><Bullet /><code>SupplierDemandHqCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createsupplierdemandhqbinputbcodesupplierdemandhqcreateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierDemandHq</code> <Badge class="secondary" text="object"/>',id:"supplierdemandhq-",level:4}],d=()=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,p.kt)(a.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Creates a new SupplierDemandHq."),(0,p.kt)("p",null,'Requires the requesting identity to have the "supplierdemandhq/write" permission on the associated Supplier.'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierDemandHq(\n  input: SupplierDemandHqCreateInput!\n): SupplierDemandHq!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-createsupplierdemandhqbinputbcodesupplierdemandhqcreateinput--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"createSupplierDemandHq.",(0,p.kt)("b",null,"input"))),(0,p.kt)(d,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supplier-demand-hq-create-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierDemandHqCreateInput!"))," ",(0,p.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"supplierdemandhq-"},(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-demand-hq"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierDemandHq"))," ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"A relationship between a Supplier and a DemandHQ.")))}y.isMDXComponent=!0}}]);