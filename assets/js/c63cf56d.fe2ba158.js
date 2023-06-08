"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[15914],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,u=s["".concat(d,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(u,c(c({ref:t},p),{},{components:r})):n.createElement(u,c({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56029:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=r(87462),a=r(67294),o=r(3905);const c={id:"deprecated",title:"deprecated",hide_table_of_contents:!1},i=void 0,d={unversionedId:"demand/api/graphql-storefront/reference/directives/deprecated",id:"demand/api/graphql-storefront/reference/directives/deprecated",title:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",source:"@site/docs/demand/api/graphql-storefront/reference/directives/deprecated.mdx",sourceDirName:"demand/api/graphql-storefront/reference/directives",slug:"/demand/api/graphql-storefront/reference/directives/deprecated",permalink:"/demand/api/graphql-storefront/reference/directives/deprecated",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/directives/deprecated.mdx",tags:[],version:"current",frontMatter:{id:"deprecated",title:"deprecated",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"Demand GraphQL Storefront API Schema Documentation",permalink:"/demand/api/graphql-storefront/reference"},next:{title:"include",permalink:"/demand/api/graphql-storefront/reference/directives/include"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deprecated.<b>reason</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deprecatedbreasonbcodestring-",level:4}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:s,SpecifiedBy:f,Badge:m};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Marks an element of a GraphQL schema as no longer supported."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'directive @deprecated(\n  reason: String = "No longer supported"\n) on \n  | FIELD_DEFINITION\n  | ARGUMENT_DEFINITION\n  | INPUT_FIELD_DEFINITION\n  | ENUM_VALUE\n')),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deprecatedbreasonbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"deprecated.",(0,o.kt)("b",null,"reason"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by ",(0,o.kt)("a",{parentName:"p",href:"https://commonmark.org/"},"CommonMark"),".")))}g.isMDXComponent=!0}}]);