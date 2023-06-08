"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[16548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:a,c[1]=u;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34355:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),a=n(67294),o=n(3905);const c={id:"order-transaction-currency-exchange-adjustment-input",title:"OrderTransactionCurrencyExchangeAdjustmentInput",hide_table_of_contents:!1},u=void 0,s={unversionedId:"demand/api/graphql-storefront/reference/inputs/order-transaction-currency-exchange-adjustment-input",id:"demand/api/graphql-storefront/reference/inputs/order-transaction-currency-exchange-adjustment-input",title:"OrderTransactionCurrencyExchangeAdjustmentInput",description:"Input for OrderTransactionCurrencyExchangeAdjustment",source:"@site/docs/demand/api/graphql-storefront/reference/inputs/order-transaction-currency-exchange-adjustment-input.mdx",sourceDirName:"demand/api/graphql-storefront/reference/inputs",slug:"/demand/api/graphql-storefront/reference/inputs/order-transaction-currency-exchange-adjustment-input",permalink:"/demand/api/graphql-storefront/reference/inputs/order-transaction-currency-exchange-adjustment-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/inputs/order-transaction-currency-exchange-adjustment-input.mdx",tags:[],version:"current",frontMatter:{id:"order-transaction-currency-exchange-adjustment-input",title:"OrderTransactionCurrencyExchangeAdjustmentInput",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"OrderShippingChargeInput",permalink:"/demand/api/graphql-storefront/reference/inputs/order-shipping-charge-input"},next:{title:"PageNumberOfTermAggregationsInput",permalink:"/demand/api/graphql-storefront/reference/inputs/page-number-of-term-aggregations-input"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderTransactionCurrencyExchangeAdjustmentInput.<b>targetAmount</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetamountbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderTransactionCurrencyExchangeAdjustmentInput.<b>targetCurrency</b></code><Bullet /><code>ResonanceCurrency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetcurrencybcoderesonancecurrency--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:d,SpecifiedBy:p,Badge:m};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input for OrderTransactionCurrencyExchangeAdjustment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrderTransactionCurrencyExchangeAdjustmentInput {\n  targetAmount: Float!\n  targetCurrency: ResonanceCurrency!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetamountbcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderTransactionCurrencyExchangeAdjustmentInput.",(0,o.kt)("b",null,"targetAmount"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The amount in the shop's default currency.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetcurrencybcoderesonancecurrency--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OrderTransactionCurrencyExchangeAdjustmentInput.",(0,o.kt)("b",null,"targetCurrency"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/resonance-currency"},(0,o.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Shop's default currency.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/inputs/checkout-order-transaction-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckoutOrderTransactionInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);