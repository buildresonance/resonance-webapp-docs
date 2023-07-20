"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[52813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(r),f=l,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||p;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=r.length,i=new Array(p);i[0]=f;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14672:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),l=r(67294),p=r(3905);const i={id:"supplier-product-locale-relationship-fields-input",title:"SupplierProductLocaleRelationshipFieldsInput",hide_table_of_contents:!1},a=void 0,o={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-product-locale-relationship-fields-input",id:"supply/api/graphql-admin/reference/inputs/supplier-product-locale-relationship-fields-input",title:"SupplierProductLocaleRelationshipFieldsInput",description:"These fields are the additionally required fields to create a SupplierProductLocale instead of update.",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-product-locale-relationship-fields-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-relationship-fields-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-relationship-fields-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-product-locale-relationship-fields-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-locale-relationship-fields-input",title:"SupplierProductLocaleRelationshipFieldsInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductLocaleInCompositeCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-in-composite-create-input"},next:{title:"SupplierProductLocaleUpdateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-update-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductLocaleRelationshipFieldsInput.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierproductlocalerelationshipfieldsinputbsupplieridbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,p.kt)(l.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,p.kt)(l.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,p.kt)(l.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:d,Badge:f};function y(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"These fields are the additionally required fields to create a SupplierProductLocale instead of update."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductLocaleRelationshipFieldsInput {\n  supplierId: ID!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplierproductlocalerelationshipfieldsinputbsupplieridbcodeid--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductLocaleRelationshipFieldsInput.",(0,p.kt)("b",null,"supplierId"))),(0,p.kt)(u,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,p.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-supplier-product-locale"},(0,p.kt)("inlineCode",{parentName:"a"},"updateSupplierProductLocale")),"  ",(0,p.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);