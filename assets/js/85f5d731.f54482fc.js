"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[77200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57843:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(67294),l=r(3905);const s={id:"request-supplier-access",title:"requestSupplierAccess",hide_table_of_contents:!1},i=void 0,c={unversionedId:"demand/api/graphql-admin/reference/mutations/request-supplier-access",id:"demand/api/graphql-admin/reference/mutations/request-supplier-access",title:"requestSupplierAccess",description:"Request access to sell items from a Supplier.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/request-supplier-access.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/request-supplier-access",permalink:"/demand/api/graphql-admin/reference/mutations/request-supplier-access",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/request-supplier-access.mdx",tags:[],version:"current",frontMatter:{id:"request-supplier-access",title:"requestSupplierAccess",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"placeOrder",permalink:"/demand/api/graphql-admin/reference/mutations/place-order"},next:{title:"runAllForAutomationJob",permalink:"/demand/api/graphql-admin/reference/mutations/run-all-for-automation-job"}},o={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>requestSupplierAccess.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestsupplieraccessbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>requestSupplierAccess.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestsupplieraccessbsupplieridbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DemandHqSupplier</code> <Badge class="secondary" text="object"/>',id:"demandhqsupplier-",level:4}],d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Request access to sell items from a Supplier."),(0,l.kt)("p",null,'Requires the requesting identity to have the "demandhqsupplier/write" permission on the associated DemandHq.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"requestSupplierAccess(\n  demandHqId: ID!\n  supplierId: ID!\n): DemandHqSupplier!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-requestsupplieraccessbdemandhqidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"requestSupplierAccess.",(0,l.kt)("b",null,"demandHqId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-requestsupplieraccessbsupplieridbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"requestSupplierAccess.",(0,l.kt)("b",null,"supplierId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"demandhqsupplier-"},(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-hq-supplier"},(0,l.kt)("inlineCode",{parentName:"a"},"DemandHqSupplier"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A relationship between a Supplier and a DemandHQ.")))}y.isMDXComponent=!0}}]);