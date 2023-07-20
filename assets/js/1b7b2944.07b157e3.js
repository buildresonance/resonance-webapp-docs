"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[58643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),i=s(r),p=a,k=i["".concat(l,".").concat(p)]||i[p]||m[p]||n;return r?o.createElement(k,c(c({ref:t},u),{},{components:r})):o.createElement(k,c({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[i]="string"==typeof e?e:a,c[1]=d;for(var s=2;s<n;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},63930:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>i,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=r(87462),a=r(67294),n=r(3905);const c={id:"checkout",title:"Checkout",hide_table_of_contents:!1},d=void 0,l={unversionedId:"demand/api/graphql-storefront/reference/objects/checkout",id:"demand/api/graphql-storefront/reference/objects/checkout",title:"Checkout",description:"A checkout is a temporary container for an order and its orderItems that a customer or anonymous user wants to buy",source:"@site/docs/demand/api/graphql-storefront/reference/objects/checkout.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/checkout",permalink:"/demand/api/graphql-storefront/reference/objects/checkout",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/checkout.mdx",tags:[],version:"current",frontMatter:{id:"checkout",title:"Checkout",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"CheckoutOrder",permalink:"/demand/api/graphql-storefront/reference/objects/checkout-order"},next:{title:"CollectionContent",permalink:"/demand/api/graphql-storefront/reference/objects/collection-content"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>checkoutType</b></code><Bullet /><code>CheckoutType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-checkoutbcheckouttypebcodecheckouttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>createdAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutbcreatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>currency</b></code><Bullet /><code>ResonanceCurrency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-checkoutbcurrencybcoderesonancecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>externalCustomerOrDeviceId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutbexternalcustomerordeviceidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>order</b></code><Bullet /><code>CheckoutOrder</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checkoutborderbcodecheckoutorder-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>orderItems</b></code><Bullet /><code>[CheckoutOrderItem]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-checkoutborderitemsbcodecheckoutorderitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>storefrontId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutbstorefrontidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Checkout.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutbupdatedatbcodedate--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],i=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:u,Bullet:i,SpecifiedBy:m,Badge:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A checkout is a temporary container for an order and its orderItems that a customer or anonymous user wants to buy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type Checkout {\n  checkoutType: CheckoutType!\n  createdAt: Date!\n  currency: ResonanceCurrency!\n  demandHqId: ID!\n  externalCustomerOrDeviceId: String!\n  order: CheckoutOrder\n  orderItems: [CheckoutOrderItem]\n  storefrontId: ID!\n  updatedAt: Date!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbcheckouttypebcodecheckouttype--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"checkoutType"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/checkout-type"},(0,n.kt)("inlineCode",{parentName:"a"},"CheckoutType!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbcreatedatbcodedate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbcurrencybcoderesonancecurrency--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"currency"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/resonance-currency"},(0,n.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbdemandhqidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"demandHqId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbexternalcustomerordeviceidbcodestring--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"externalCustomerOrDeviceId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutborderbcodecheckoutorder-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"order"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/checkout-order"},(0,n.kt)("inlineCode",{parentName:"a"},"CheckoutOrder"))," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutborderitemsbcodecheckoutorderitem--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"orderItems"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/checkout-order-item"},(0,n.kt)("inlineCode",{parentName:"a"},"[CheckoutOrderItem]"))," ",(0,n.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbstorefrontidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"storefrontId"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-checkoutbupdatedatbcodedate--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"Checkout.",(0,n.kt)("b",null,"updatedAt"))),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,n.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/create-customer-checkout"},(0,n.kt)("inlineCode",{parentName:"a"},"createCustomerCheckout")),"  ",(0,n.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/queries/customer-checkout"},(0,n.kt)("inlineCode",{parentName:"a"},"customerCheckout")),"  ",(0,n.kt)(p,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order"},(0,n.kt)("inlineCode",{parentName:"a"},"updateCustomerCheckoutOrder")),"  ",(0,n.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(i,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order-items"},(0,n.kt)("inlineCode",{parentName:"a"},"updateCustomerCheckoutOrderItems")),"  ",(0,n.kt)(p,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/validate-checkout-response"},(0,n.kt)("inlineCode",{parentName:"a"},"ValidateCheckoutResponse")),"  ",(0,n.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);