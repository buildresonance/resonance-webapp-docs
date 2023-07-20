"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[75568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74444:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=r(67294),a=r(3905);const i={id:"sort-direction",title:"SortDirection",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/enums/sort-direction",id:"demand/api/graphql-storefront/reference/enums/sort-direction",title:"SortDirection",description:"Indicates which direction to sort, defaults to ASC",source:"@site/docs/demand/api/graphql-storefront/reference/enums/sort-direction.mdx",sourceDirName:"demand/api/graphql-storefront/reference/enums",slug:"/demand/api/graphql-storefront/reference/enums/sort-direction",permalink:"/demand/api/graphql-storefront/reference/enums/sort-direction",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/enums/sort-direction.mdx",tags:[],version:"current",frontMatter:{id:"sort-direction",title:"SortDirection",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"ShippingMethod",permalink:"/demand/api/graphql-storefront/reference/enums/shipping-method"},next:{title:"TaxonomyLevel",permalink:"/demand/api/graphql-storefront/reference/enums/taxonomy-level"}},s={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SortDirection.<b>ASC</b></code>",id:"code-style-fontweight-normal-sortdirectionbascbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SortDirection.<b>DESC</b></code>",id:"code-style-fontweight-normal-sortdirectionbdescbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Indicates which direction to sort, defaults to ASC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SortDirection {\n  ASC\n  DESC\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-sortdirectionbascbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SortDirection.",(0,a.kt)("b",null,"ASC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-sortdirectionbdescbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SortDirection.",(0,a.kt)("b",null,"DESC")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/collection-sort-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectionSortInput")),"  ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/page-sort-input"},(0,a.kt)("inlineCode",{parentName:"a"},"PageSortInput")),"  ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/product-sort-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductSortInput")),"  ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);