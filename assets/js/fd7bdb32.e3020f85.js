"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[27673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=d(n),u=o,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34770:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=n(67294),l=n(3905);const i={id:"collection-sort-field",title:"CollectionSortField",hide_table_of_contents:!1},a=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/enums/collection-sort-field",id:"demand/api/graphql-storefront/reference/enums/collection-sort-field",title:"CollectionSortField",description:"Indicates which field to sort by",source:"@site/docs/demand/api/graphql-storefront/reference/enums/collection-sort-field.mdx",sourceDirName:"demand/api/graphql-storefront/reference/enums",slug:"/demand/api/graphql-storefront/reference/enums/collection-sort-field",permalink:"/demand/api/graphql-storefront/reference/enums/collection-sort-field",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/enums/collection-sort-field.mdx",tags:[],version:"current",frontMatter:{id:"collection-sort-field",title:"CollectionSortField",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"CheckoutType",permalink:"/demand/api/graphql-storefront/reference/enums/checkout-type"},next:{title:"CustomerMarketingConsentLevel",permalink:"/demand/api/graphql-storefront/reference/enums/customer-marketing-consent-level"}},d={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CollectionSortField.<b>PUBLISHED_AT</b></code>",id:"code-style-fontweight-normal-collectionsortfieldbpublished_atbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CollectionSortField.<b>RELEVANCE</b></code>",id:"code-style-fontweight-normal-collectionsortfieldbrelevancebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CollectionSortField.<b>TITLE</b></code>",id:"code-style-fontweight-normal-collectionsortfieldbtitlebcode",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:f,SpecifiedBy:p,Badge:u};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Indicates which field to sort by"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CollectionSortField {\n  PUBLISHED_AT\n  RELEVANCE\n  TITLE\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectionsortfieldbpublished_atbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CollectionSortField.",(0,l.kt)("b",null,"PUBLISHED_AT")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectionsortfieldbrelevancebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CollectionSortField.",(0,l.kt)("b",null,"RELEVANCE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectionsortfieldbtitlebcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CollectionSortField.",(0,l.kt)("b",null,"TITLE")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/collection-sort-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CollectionSortInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);