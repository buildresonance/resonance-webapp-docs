"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[27168],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19734:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=t(87462),i=t(67294),a=t(3905);const o={id:"variant-shipping-dimension-unit",title:"VariantShippingDimensionUnit",hide_table_of_contents:!1},l=void 0,p={unversionedId:"demand/api/graphql-storefront/reference/enums/variant-shipping-dimension-unit",id:"demand/api/graphql-storefront/reference/enums/variant-shipping-dimension-unit",title:"VariantShippingDimensionUnit",description:"Metric or Standard Dimension?",source:"@site/docs/demand/api/graphql-storefront/reference/enums/variant-shipping-dimension-unit.mdx",sourceDirName:"demand/api/graphql-storefront/reference/enums",slug:"/demand/api/graphql-storefront/reference/enums/variant-shipping-dimension-unit",permalink:"/demand/api/graphql-storefront/reference/enums/variant-shipping-dimension-unit",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/enums/variant-shipping-dimension-unit.mdx",tags:[],version:"current",frontMatter:{id:"variant-shipping-dimension-unit",title:"VariantShippingDimensionUnit",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"VariantDeliveryMethod",permalink:"/demand/api/graphql-storefront/reference/enums/variant-delivery-method"},next:{title:"VariantStandardizedColor",permalink:"/demand/api/graphql-storefront/reference/enums/variant-standardized-color"}},s={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>VariantShippingDimensionUnit.<b>CM</b></code>",id:"code-style-fontweight-normal-variantshippingdimensionunitbcmbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>VariantShippingDimensionUnit.<b>IN</b></code>",id:"code-style-fontweight-normal-variantshippingdimensionunitbinbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:d,SpecifiedBy:m,Badge:u};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Metric or Standard Dimension?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum VariantShippingDimensionUnit {\n  CM\n  IN\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-variantshippingdimensionunitbcmbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"VariantShippingDimensionUnit.",(0,a.kt)("b",null,"CM")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-variantshippingdimensionunitbinbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"VariantShippingDimensionUnit.",(0,a.kt)("b",null,"IN")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/variant-shipping-dimensions"},(0,a.kt)("inlineCode",{parentName:"a"},"VariantShippingDimensions")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);