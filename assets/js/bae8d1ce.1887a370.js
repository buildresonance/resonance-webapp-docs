"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[23381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,u=d["".concat(l,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(u,c(c({ref:t},s),{},{components:r})):n.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56324:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(87462),a=r(67294),o=r(3905);const c={id:"json",title:"JSON",hide_table_of_contents:!1},p=void 0,l={unversionedId:"demand/api/graphql-storefront/reference/scalars/json",id:"demand/api/graphql-storefront/reference/scalars/json",title:"JSON",description:"The JSON scalar type represents JSON values as specified by ECMA-404.",source:"@site/docs/demand/api/graphql-storefront/reference/scalars/json.mdx",sourceDirName:"demand/api/graphql-storefront/reference/scalars",slug:"/demand/api/graphql-storefront/reference/scalars/json",permalink:"/demand/api/graphql-storefront/reference/scalars/json",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/scalars/json.mdx",tags:[],version:"current",frontMatter:{id:"json",title:"JSON",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"Int",permalink:"/demand/api/graphql-storefront/reference/scalars/int"},next:{title:"String",permalink:"/demand/api/graphql-storefront/reference/scalars/string"}},i={},s=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:d,SpecifiedBy:m,Badge:f};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON")," scalar type represents JSON values as specified by ",(0,o.kt)("a",{parentName:"p",href:"http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"},"ECMA-404"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar JSON\n")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/cart-item"},(0,o.kt)("inlineCode",{parentName:"a"},"CartItem")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/cart-item-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CartItemInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/checkout-error"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckoutError")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/checkout-order-item"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckoutOrderItem")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/checkout-order-item-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckoutOrderItemInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicCollectionConnectionWithSearch")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-item"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderItem")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-page-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicPageConnectionWithSearch")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicProductConnectionWithSearch")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);