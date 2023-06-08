"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[93038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),f=a,m=c["".concat(o,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27853:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=r(67294),i=r(3905);const l={id:"string-filter-input",title:"StringFilterInput",hide_table_of_contents:!1},p=void 0,o={unversionedId:"supply/api/graphql-admin/reference/inputs/string-filter-input",id:"supply/api/graphql-admin/reference/inputs/string-filter-input",title:"StringFilterInput",description:"Filter using a combination of operator and an array of string values",source:"@site/docs/supply/api/graphql-admin/reference/inputs/string-filter-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/string-filter-input",permalink:"/supply/api/graphql-admin/reference/inputs/string-filter-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/string-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"string-filter-input",title:"StringFilterInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"PurchaseOrderItemUpdateInput",permalink:"/supply/api/graphql-admin/reference/inputs/purchase-order-item-update-input"},next:{title:"SupplierCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-create-input"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StringFilterInput.<b>operator</b></code><Bullet /><code>FilterOperator</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-stringfilterinputboperatorbcodefilteroperator-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StringFilterInput.<b>values</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-stringfilterinputbvaluesbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:c,SpecifiedBy:d,Badge:f};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter using a combination of operator and an array of string values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input StringFilterInput {\n  operator: FilterOperator\n  values: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-stringfilterinputboperatorbcodefilteroperator-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StringFilterInput.",(0,i.kt)("b",null,"operator"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/filter-operator"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterOperator"))," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-stringfilterinputbvaluesbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"StringFilterInput.",(0,i.kt)("b",null,"values"))),(0,i.kt)(c,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/export-supplier-products-parameters-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ExportSupplierProductsParametersInput")),"  ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);