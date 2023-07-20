"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[61898],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,y=s["".concat(i,".").concat(m)]||s[m]||p[m]||c;return t?r.createElement(y,o(o({ref:n},l),{},{components:t})):r.createElement(y,o({ref:n},l))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[s]="string"==typeof e?e:a,o[1]=d;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13897:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=t(67294),c=t(3905);const o={id:"order-transaction-currency-exchange-adjustment-input",title:"OrderTransactionCurrencyExchangeAdjustmentInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input",id:"demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input",title:"OrderTransactionCurrencyExchangeAdjustmentInput",description:"Input for OrderTransactionCurrencyExchangeAdjustment",source:"@site/docs/demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input",permalink:"/demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/order-transaction-currency-exchange-adjustment-input.mdx",tags:[],version:"current",frontMatter:{id:"order-transaction-currency-exchange-adjustment-input",title:"OrderTransactionCurrencyExchangeAdjustmentInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderTransactionCreateInput",permalink:"/demand/api/graphql-admin/reference/inputs/order-transaction-create-input"},next:{title:"OrderUpdateInput",permalink:"/demand/api/graphql-admin/reference/inputs/order-update-input"}},u={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderTransactionCurrencyExchangeAdjustmentInput.<b>targetAmount</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetamountbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderTransactionCurrencyExchangeAdjustmentInput.<b>targetCurrency</b></code><Bullet /><code>ResonanceCurrency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetcurrencybcoderesonancecurrency--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:l,Bullet:s,SpecifiedBy:p,Badge:m};function f(e){let{components:n,...t}=e;return(0,c.kt)("wrapper",(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Input for OrderTransactionCurrencyExchangeAdjustment"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrderTransactionCurrencyExchangeAdjustmentInput {\n  targetAmount: Float!\n  targetCurrency: ResonanceCurrency!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetamountbcodefloat--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"OrderTransactionCurrencyExchangeAdjustmentInput.",(0,c.kt)("b",null,"targetAmount"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,c.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The amount in the shop's default currency.")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-ordertransactioncurrencyexchangeadjustmentinputbtargetcurrencybcoderesonancecurrency--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"OrderTransactionCurrencyExchangeAdjustmentInput.",(0,c.kt)("b",null,"targetCurrency"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/resonance-currency"},(0,c.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Shop's default currency.")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/order-transaction-create-input"},(0,c.kt)("inlineCode",{parentName:"a"},"OrderTransactionCreateInput")),"  ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);