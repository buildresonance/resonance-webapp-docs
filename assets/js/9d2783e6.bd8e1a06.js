"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[53889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),s=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),i=s(r),m=n,f=i["".concat(d,".").concat(m)]||i[m]||p[m]||a;return r?o.createElement(f,c(c({ref:t},l),{},{components:r})):o.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[i]="string"==typeof e?e:n,c[1]=u;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42787:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var o=r(87462),n=r(67294),a=r(3905);const c={id:"update-customer-checkout-order",title:"updateCustomerCheckoutOrder",hide_table_of_contents:!1},u=void 0,d={unversionedId:"demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order",id:"demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order",title:"updateCustomerCheckoutOrder",description:"Updates an existing checkout's order fields for a logged in customer.",source:"@site/docs/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order.mdx",sourceDirName:"demand/api/graphql-storefront/reference/mutations",slug:"/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order",permalink:"/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order.mdx",tags:[],version:"current",frontMatter:{id:"update-customer-checkout-order",title:"updateCustomerCheckoutOrder",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"updateCustomerCheckoutOrderItems",permalink:"/demand/api/graphql-storefront/reference/mutations/update-customer-checkout-order-items"},next:{title:"updateCustomer",permalink:"/demand/api/graphql-storefront/reference/mutations/update-customer"}},s={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateCustomerCheckoutOrder.<b>customerToken</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecustomercheckoutorderbcustomertokenbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>updateCustomerCheckoutOrder.<b>orderInput</b></code><Bullet /><code>CheckoutOrderInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecustomercheckoutorderborderinputbcodecheckoutorderinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>Checkout</code> <Badge class="secondary" text="object"/>',id:"checkout-",level:4}],i=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:i,SpecifiedBy:p,Badge:m};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Updates an existing checkout's order fields for a logged in customer.\nUpdates are partial, and will only affect fields provided."),(0,a.kt)("p",null,"Requires the publiccheckout/write scope and a valid customerToken."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateCustomerCheckoutOrder(\n  customerToken: String!\n  orderInput: CheckoutOrderInput!\n): Checkout!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatecustomercheckoutorderbcustomertokenbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateCustomerCheckoutOrder.",(0,a.kt)("b",null,"customerToken"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatecustomercheckoutorderborderinputbcodecheckoutorderinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"updateCustomerCheckoutOrder.",(0,a.kt)("b",null,"orderInput"))),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/checkout-order-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CheckoutOrderInput!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"checkout-"},(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/checkout"},(0,a.kt)("inlineCode",{parentName:"a"},"Checkout"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A checkout is a temporary container for an order and its orderItems that a customer or anonymous user wants to buy")))}k.isMDXComponent=!0}}]);