"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[13299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=p,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:p,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2834:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),p=r(67294),o=r(3905);const i={id:"supplier-product-sort-input",title:"SupplierProductSortInput",hide_table_of_contents:!1},l=void 0,a={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-product-sort-input",id:"supply/api/graphql-admin/reference/inputs/supplier-product-sort-input",title:"SupplierProductSortInput",description:"Sort SupplierProducts by a field and direction.",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-product-sort-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-product-sort-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-sort-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-product-sort-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-sort-input",title:"SupplierProductSortInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductNumberOfTermAggregationsInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-number-of-term-aggregations-input"},next:{title:"SupplierProductStandardizedColorFilterInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-standardized-color-filter-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductSortInput.<b>direction</b></code><Bullet /><code>SortDirection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductsortinputbdirectionbcodesortdirection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductSortInput.<b>field</b></code><Bullet /><code>SupplierProductSortField!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductsortinputbfieldbcodesupplierproductsortfield--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(p.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(p.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(p.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:d,SpecifiedBy:s,Badge:f};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sort SupplierProducts by a field and direction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductSortInput {\n  direction: SortDirection!\n  field: SupplierProductSortField!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductsortinputbdirectionbcodesortdirection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductSortInput.",(0,o.kt)("b",null,"direction"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/sort-direction"},(0,o.kt)("inlineCode",{parentName:"a"},"SortDirection!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-supplierproductsortinputbfieldbcodesupplierproductsortfield--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductSortInput.",(0,o.kt)("b",null,"field"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supplier-product-sort-field"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProductSortField!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/export-supplier-products-parameters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ExportSupplierProductsParametersInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);