"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[13988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=p,f=c["".concat(o,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(f,l(l({ref:t},i),{},{components:r})):a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=r.length,l=new Array(n);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:p,l[1]=u;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33892:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=r(87462),p=r(67294),n=r(3905);const l={id:"supplier-product-custom-data-upsert-input",title:"SupplierProductCustomDataUpsertInput",hide_table_of_contents:!1},u=void 0,o={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input",id:"supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input",title:"SupplierProductCustomDataUpsertInput",description:"The input type to upsert SupplierProductCustomData.",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-custom-data-upsert-input",title:"SupplierProductCustomDataUpsertInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-create-input"},next:{title:"SupplierProductImageFromFileInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-image-from-file-input"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductCustomDataUpsertInput.<b>data</b></code><Bullet /><code>JSON!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductcustomdataupsertinputbdatabcodejson--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductCustomDataUpsertInput.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductcustomdataupsertinputbsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductCustomDataUpsertInput.<b>supplierProductId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductcustomdataupsertinputbsupplierproductidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,n.kt)(p.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,n.kt)(p.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(p.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:c,SpecifiedBy:d,Badge:m};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The input type to upsert SupplierProductCustomData.\nThe data object is required, but is a partial update, and keys not mentioned will be left alone."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductCustomDataUpsertInput {\n  data: JSON!\n  supplierId: ID!\n  supplierProductId: ID!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductcustomdataupsertinputbdatabcodejson--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductCustomDataUpsertInput.",(0,n.kt)("b",null,"data"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/json"},(0,n.kt)("inlineCode",{parentName:"a"},"JSON!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductcustomdataupsertinputbsupplieridbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductCustomDataUpsertInput.",(0,n.kt)("b",null,"supplierId"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-supplierproductcustomdataupsertinputbsupplierproductidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductCustomDataUpsertInput.",(0,n.kt)("b",null,"supplierProductId"))),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/upsert-supplier-product-custom-data"},(0,n.kt)("inlineCode",{parentName:"a"},"upsertSupplierProductCustomData")),"  ",(0,n.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);