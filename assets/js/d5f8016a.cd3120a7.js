"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[22321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(r),p=n,b=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return r?a.createElement(b,l(l({ref:t},s),{},{components:r})):a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:n,l[1]=d;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},39346:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=r(87462),n=r(67294),o=r(3905);const l={id:"public-order-item",title:"PublicOrderItem",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/objects/public-order-item",id:"demand/api/graphql-storefront/reference/objects/public-order-item",title:"PublicOrderItem",description:"An item in a PublicOrder.",source:"@site/docs/demand/api/graphql-storefront/reference/objects/public-order-item.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/public-order-item",permalink:"/demand/api/graphql-storefront/reference/objects/public-order-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/public-order-item.mdx",tags:[],version:"current",frontMatter:{id:"public-order-item",title:"PublicOrderItem",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"PublicOrderItemEdge",permalink:"/demand/api/graphql-storefront/reference/objects/public-order-item-edge"},next:{title:"PublicOrderTransactionConnection",permalink:"/demand/api/graphql-storefront/reference/objects/public-order-transaction-connection"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>adjustedPrice</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembadjustedpricebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>adjustedQuantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembadjustedquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>adjustments</b></code><Bullet /><code>[OrderItemAdjustment]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicorderitembadjustmentsbcodeorderitemadjustment--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>barcode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembbarcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>currency</b></code><Bullet /><code>ResonanceCurrency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-publicorderitembcurrencybcoderesonancecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>customProperties</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembcustompropertiesbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>deliveryMethod</b></code><Bullet /><code>VariantDeliveryMethod!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-publicorderitembdeliverymethodbcodevariantdeliverymethod--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>discounts</b></code><Bullet /><code>[OrderItemDiscount]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicorderitembdiscountsbcodeorderitemdiscount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>note</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembnotebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>orderId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitemborderidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>orderItemId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitemborderitemidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>productTitle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembproducttitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>purchaseOrderItems</b></code><Bullet /><code>[OrderItemPurchaseOrderItem]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicorderitembpurchaseorderitemsbcodeorderitempurchaseorderitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>quantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>shippingCharges</b></code><Bullet /><code>[OrderShippingCharge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicorderitembshippingchargesbcodeordershippingcharge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>shippingMethod</b></code><Bullet /><code>ShippingMethod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-publicorderitembshippingmethodbcodeshippingmethod-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>sku</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembskubcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>status</b></code><Bullet /><code>OrderItemStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-publicorderitembstatusbcodeorderitemstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>taxes</b></code><Bullet /><code>[OrderItemTax]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicorderitembtaxesbcodeorderitemtax--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>unitPrice</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembunitpricebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>variantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembvariantidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>variantTitle</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembvarianttitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicOrderItem.<b>vendor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicorderitembvendorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:m,SpecifiedBy:u,Badge:p};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An item in a PublicOrder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicOrderItem {\n  adjustedPrice: Float!\n  adjustedQuantity: Int!\n  adjustments: [OrderItemAdjustment]\n  barcode: String\n  currency: ResonanceCurrency!\n  customProperties: JSON\n  deliveryMethod: VariantDeliveryMethod!\n  demandHqId: ID!\n  discounts: [OrderItemDiscount]\n  note: String\n  orderId: ID!\n  orderItemId: ID!\n  productId: ID!\n  productTitle: String!\n  purchaseOrderItems: [OrderItemPurchaseOrderItem]\n  quantity: Int!\n  shippingCharges: [OrderShippingCharge]\n  shippingMethod: ShippingMethod\n  sku: String\n  status: OrderItemStatus!\n  taxes: [OrderItemTax]\n  unitPrice: Float!\n  variantId: ID!\n  variantTitle: String!\n  vendor: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembadjustedpricebcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"adjustedPrice"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The price of the OrderItem after adjustments.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembadjustedquantitybcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"adjustedQuantity"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The quantity of the OrderItem after adjustments.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembadjustmentsbcodeorderitemadjustment--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"adjustments"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-adjustment"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrderItemAdjustment]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembbarcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"barcode"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembcurrencybcoderesonancecurrency--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"currency"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/resonance-currency"},(0,o.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembcustompropertiesbcodejson-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"customProperties"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/json"},(0,o.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembdeliverymethodbcodevariantdeliverymethod--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"deliveryMethod"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/variant-delivery-method"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantDeliveryMethod!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembdemandhqidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"demandHqId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembdiscountsbcodeorderitemdiscount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"discounts"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-discount"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrderItemDiscount]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembnotebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"note"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitemborderidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"orderId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitemborderitemidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"orderItemId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembproductidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"productId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembproducttitlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"productTitle"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembpurchaseorderitemsbcodeorderitempurchaseorderitem--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"purchaseOrderItems"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-purchase-order-item"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrderItemPurchaseOrderItem]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembquantitybcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"quantity"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembshippingchargesbcodeordershippingcharge--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"shippingCharges"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-shipping-charge"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrderShippingCharge]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembshippingmethodbcodeshippingmethod-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"shippingMethod"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/shipping-method"},(0,o.kt)("inlineCode",{parentName:"a"},"ShippingMethod"))," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembskubcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"sku"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembstatusbcodeorderitemstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"status"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/enums/order-item-status"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderItemStatus!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembtaxesbcodeorderitemtax--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"taxes"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/order-item-tax"},(0,o.kt)("inlineCode",{parentName:"a"},"[OrderItemTax]"))," ",(0,o.kt)(p,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembunitpricebcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"unitPrice"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Price per item, can be multiplied by quantity for total price")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembvariantidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"variantId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembvarianttitlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"variantTitle"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicorderitembvendorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicOrderItem.",(0,o.kt)("b",null,"vendor"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-item-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderItemConnection")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-order-item-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicOrderItemEdge")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);