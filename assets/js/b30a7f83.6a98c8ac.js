"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2036],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),g=a,h=s["".concat(d,".").concat(g)]||s[g]||m[g]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},29617:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=r(87462),a=r(67294),i=r(3905);const o={id:"order-item-shipping-charge",title:"OrderItemShippingCharge",hide_table_of_contents:!1},l=void 0,d={unversionedId:"demand/api/graphql-admin/reference/objects/order-item-shipping-charge",id:"demand/api/graphql-admin/reference/objects/order-item-shipping-charge",title:"OrderItemShippingCharge",description:"A shippingCharge applied to an OrderItem.",source:"@site/docs/demand/api/graphql-admin/reference/objects/order-item-shipping-charge.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/order-item-shipping-charge",permalink:"/demand/api/graphql-admin/reference/objects/order-item-shipping-charge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/order-item-shipping-charge.mdx",tags:[],version:"current",frontMatter:{id:"order-item-shipping-charge",title:"OrderItemShippingCharge",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderItemPurchaseOrderItem",permalink:"/demand/api/graphql-admin/reference/objects/order-item-purchase-order-item"},next:{title:"OrderItemTax",permalink:"/demand/api/graphql-admin/reference/objects/order-item-tax"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemShippingCharge.<b>amount</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemshippingchargebamountbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemShippingCharge.<b>title</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemshippingchargebtitlebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:p,Bullet:s,SpecifiedBy:m,Badge:g};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A shippingCharge applied to an OrderItem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type OrderItemShippingCharge {\n  amount: Float!\n  title: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-orderitemshippingchargebamountbcodefloat--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrderItemShippingCharge.",(0,i.kt)("b",null,"amount"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,i.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-orderitemshippingchargebtitlebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"OrderItemShippingCharge.",(0,i.kt)("b",null,"title"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/order-item"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderItem")),"  ",(0,i.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);