"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[83931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),y=p,f=s["".concat(a,".").concat(y)]||s[y]||d[y]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[s]="string"==typeof e?e:p,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},56939:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(87462),p=r(67294),i=r(3905);const l={id:"supplier-product-inventory-policy-filter-input",title:"SupplierProductInventoryPolicyFilterInput",hide_table_of_contents:!1},o=void 0,a={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-product-inventory-policy-filter-input",id:"supply/api/graphql-admin/reference/inputs/supplier-product-inventory-policy-filter-input",title:"SupplierProductInventoryPolicyFilterInput",description:"Filter SupplierProducts using InventoryPolicy (Variant).",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-product-inventory-policy-filter-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-product-inventory-policy-filter-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-inventory-policy-filter-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-product-inventory-policy-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-inventory-policy-filter-input",title:"SupplierProductInventoryPolicyFilterInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierProductImageFromUrlInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-image-from-url-input"},next:{title:"SupplierProductLocaleCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-create-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductInventoryPolicyFilterInput.<b>operator</b></code><Bullet /><code>FilterOperator</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductinventorypolicyfilterinputboperatorbcodefilteroperator-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierProductInventoryPolicyFilterInput.<b>values</b></code><Bullet /><code>[SupplierVariantInventoryPolicy!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierproductinventorypolicyfilterinputbvaluesbcodesuppliervariantinventorypolicy--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(p.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(p.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(p.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:s,SpecifiedBy:d,Badge:y};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter SupplierProducts using InventoryPolicy (Variant)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductInventoryPolicyFilterInput {\n  operator: FilterOperator\n  values: [SupplierVariantInventoryPolicy!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplierproductinventorypolicyfilterinputboperatorbcodefilteroperator-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductInventoryPolicyFilterInput.",(0,i.kt)("b",null,"operator"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/filter-operator"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterOperator"))," ",(0,i.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplierproductinventorypolicyfilterinputbvaluesbcodesuppliervariantinventorypolicy--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductInventoryPolicyFilterInput.",(0,i.kt)("b",null,"values"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supplier-variant-inventory-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"[SupplierVariantInventoryPolicy!]!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/export-supplier-products-parameters-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ExportSupplierProductsParametersInput")),"  ",(0,i.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);