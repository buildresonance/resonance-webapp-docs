"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[47119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),g=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=g(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=g(r),p=n,u=s["".concat(i,".").concat(p)]||s[p]||m[p]||o;return r?a.createElement(u,c(c({ref:t},l),{},{components:r})):a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:n,c[1]=d;for(var g=2;g<o;g++)c[g]=r[g];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2264:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>g,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=r(87462),n=r(67294),o=r(3905);const c={id:"product-term-aggregations",title:"ProductTermAggregations",hide_table_of_contents:!1},d=void 0,i={unversionedId:"demand/api/graphql-admin/reference/objects/product-term-aggregations",id:"demand/api/graphql-admin/reference/objects/product-term-aggregations",title:"ProductTermAggregations",description:"A Map of several fields of Product and term aggregations for each",source:"@site/docs/demand/api/graphql-admin/reference/objects/product-term-aggregations.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/product-term-aggregations",permalink:"/demand/api/graphql-admin/reference/objects/product-term-aggregations",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/product-term-aggregations.mdx",tags:[],version:"current",frontMatter:{id:"product-term-aggregations",title:"ProductTermAggregations",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductTags",permalink:"/demand/api/graphql-admin/reference/objects/product-tags"},next:{title:"Product",permalink:"/demand/api/graphql-admin/reference/objects/product"}},g={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductTermAggregations.<b>manufacturers</b></code><Bullet /><code>[TermAggregation!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-producttermaggregationsbmanufacturersbcodetermaggregation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductTermAggregations.<b>tags</b></code><Bullet /><code>[TermAggregation!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-producttermaggregationsbtagsbcodetermaggregation--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductTermAggregations.<b>vendors</b></code><Bullet /><code>[TermAggregation!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-producttermaggregationsbvendorsbcodetermaggregation--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:l,Bullet:s,SpecifiedBy:m,Badge:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Map of several fields of Product and term aggregations for each"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductTermAggregations {\n  manufacturers: [TermAggregation!]\n  tags: [TermAggregation!]\n  vendors: [TermAggregation!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-producttermaggregationsbmanufacturersbcodetermaggregation--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductTermAggregations.",(0,o.kt)("b",null,"manufacturers"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-producttermaggregationsbtagsbcodetermaggregation--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductTermAggregations.",(0,o.kt)("b",null,"tags"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-producttermaggregationsbvendorsbcodetermaggregation--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductTermAggregations.",(0,o.kt)("b",null,"vendors"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"[TermAggregation!]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/demand-hq"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandHq")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductConnectionWithSearch")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);