"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[68359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,p(p({ref:t},s),{},{components:n})):a.createElement(f,p({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var o=2;o<i;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50682:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var a=n(87462),r=n(67294),i=n(3905);const p={id:"supplier-variant-weight-input",title:"SupplierVariantWeightInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-variant-weight-input",id:"supply/api/graphql-admin/reference/inputs/supplier-variant-weight-input",title:"SupplierVariantWeightInput",description:"Input object to indicate both amount and unit of weight.",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-variant-weight-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-variant-weight-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-variant-weight-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-variant-weight-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-weight-input",title:"SupplierVariantWeightInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierVariantUpdateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-variant-update-input"},next:{title:"SupplyEntityStatusFilterInput",permalink:"/supply/api/graphql-admin/reference/inputs/supply-entity-status-filter-input"}},o={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierVariantWeightInput.<b>amount</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-suppliervariantweightinputbamountbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierVariantWeightInput.<b>unit</b></code><Bullet /><code>SupplierVariantWeightUnit!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-suppliervariantweightinputbunitbcodesuppliervariantweightunit--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:c,SpecifiedBy:d,Badge:m};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object to indicate both amount and unit of weight."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierVariantWeightInput {\n  amount: Float!\n  unit: SupplierVariantWeightUnit!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suppliervariantweightinputbamountbcodefloat--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierVariantWeightInput.",(0,i.kt)("b",null,"amount"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suppliervariantweightinputbunitbcodesuppliervariantweightunit--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierVariantWeightInput.",(0,i.kt)("b",null,"unit"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supplier-variant-weight-unit"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantWeightUnit!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementCreateInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-in-composite-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementInCompositeCreateInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementUpdateInput")),"  ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);