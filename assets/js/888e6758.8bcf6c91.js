"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[70975],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(m,d(d({ref:t},i),{},{components:r})):n.createElement(m,d({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,d=new Array(o);d[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,d[1]=l;for(var s=2;s<o;s++)d[s]=r[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},678:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var n=r(87462),a=r(67294),o=r(3905);const d={id:"checkout-order-input",title:"CheckoutOrderInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/inputs/checkout-order-input",id:"demand/api/graphql-storefront/reference/inputs/checkout-order-input",title:"CheckoutOrderInput",description:"Create or Update a CheckoutOrder",source:"@site/docs/demand/api/graphql-storefront/reference/inputs/checkout-order-input.mdx",sourceDirName:"demand/api/graphql-storefront/reference/inputs",slug:"/demand/api/graphql-storefront/reference/inputs/checkout-order-input",permalink:"/demand/api/graphql-storefront/reference/inputs/checkout-order-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/inputs/checkout-order-input.mdx",tags:[],version:"current",frontMatter:{id:"checkout-order-input",title:"CheckoutOrderInput",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"CartRemoveItemsInput",permalink:"/demand/api/graphql-storefront/reference/inputs/cart-remove-items-input"},next:{title:"CheckoutOrderItemInput",permalink:"/demand/api/graphql-storefront/reference/inputs/checkout-order-item-input"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>billingAddress</b></code><Bullet /><code>AddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-checkoutorderinputbbillingaddressbcodeaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>customerNote</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderinputbcustomernotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>emailAddress</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderinputbemailaddressbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>paymentId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderinputbpaymentidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>phoneNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderinputbphonenumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>shippingAddress</b></code><Bullet /><code>AddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-checkoutorderinputbshippingaddressbcodeaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>shippingCharges</b></code><Bullet /><code>[OrderShippingChargeInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-checkoutorderinputbshippingchargesbcodeordershippingchargeinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CheckoutOrderInput.<b>tags</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-checkoutorderinputbtagsbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:p,SpecifiedBy:u,Badge:h};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create or Update a CheckoutOrder"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input CheckoutOrderInput {\n  billingAddress: AddressInput\n  customerNote: String\n  emailAddress: String\n  paymentId: ID\n  phoneNumber: String\n  shippingAddress: AddressInput\n  shippingCharges: [OrderShippingChargeInput]\n  tags: [String]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbbillingaddressbcodeaddressinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"billingAddress"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/address-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddressInput"))," ",(0,o.kt)(h,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbcustomernotebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"customerNote"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A note provided by the customer at time of order")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbemailaddressbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"emailAddress"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbpaymentidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"paymentId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A reference to an outside payment gateway, used for tracking transactions. May be an orderID, or a paymentID.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbphonenumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"phoneNumber"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbshippingaddressbcodeaddressinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"shippingAddress"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/address-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddressInput"))," ",(0,o.kt)(h,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbshippingchargesbcodeordershippingchargeinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"shippingCharges"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/order-shipping-charge-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrderShippingChargeInput]"))," ",(0,o.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-checkoutorderinputbtagsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"CheckoutOrderInput.",(0,o.kt)("b",null,"tags"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,o.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(h,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/create-customer-checkout"},(0,o.kt)("inlineCode",{parentName:"a"},"createCustomerCheckout")),"  ",(0,o.kt)(h,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order"},(0,o.kt)("inlineCode",{parentName:"a"},"updateCustomerCheckoutOrder")),"  ",(0,o.kt)(h,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);