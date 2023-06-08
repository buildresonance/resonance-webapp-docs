"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[33171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},47789:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(87462),r=a(67294),o=a(3905);const l={id:"variant",title:"Variant",hide_table_of_contents:!1},i=void 0,d={unversionedId:"demand/api/graphql-admin/reference/objects/variant",id:"demand/api/graphql-admin/reference/objects/variant",title:"Variant",description:"Represents a single SKU of a product",source:"@site/docs/demand/api/graphql-admin/reference/objects/variant.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/variant",permalink:"/demand/api/graphql-admin/reference/objects/variant",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/variant.mdx",tags:[],version:"current",frontMatter:{id:"variant",title:"Variant",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"VariantWeight",permalink:"/demand/api/graphql-admin/reference/objects/variant-weight"},next:{title:"authorizedPaymentGateways",permalink:"/demand/api/graphql-admin/reference/queries/authorized-payment-gateways"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>barcode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbbarcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>casePack</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbcasepackbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>contentItemIds</b></code><Bullet /><code>[ID]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbcontentitemidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>contentItems</b></code><Bullet /><code>[ProductContentItem]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbcontentitemsbcodeproductcontentitem--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>createdAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbcreatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>deliveryMethod</b></code><Bullet /><code>VariantDeliveryMethod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-variantbdeliverymethodbcodevariantdeliverymethod-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>manufacturer</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbmanufacturerbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>mapPrice</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbmappricebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>mpn</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbmpnbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>msrp</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbmsrpbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>optionValues</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantboptionvaluesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>position</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbpositionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>price</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbpricebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>product</b></code><Bullet /><code>Product</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbproductbcodeproduct-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>shippingDimensions</b></code><Bullet /><code>VariantShippingDimensions</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbshippingdimensionsbcodevariantshippingdimensions-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>sku</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbskubcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>standardizedColor</b></code><Bullet /><code>VariantStandardizedColor</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-variantbstandardizedcolorbcodevariantstandardizedcolor-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>taxCode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbtaxcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>updatedAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbupdatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>updatedBy</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbupdatedbybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>variantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantbvariantidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>variantMetrics</b></code><Bullet /><code>VariantMetrics</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbvariantmetricsbcodevariantmetrics-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>variantSupplierVariant</b></code><Bullet /><code>VariantSupplierVariant</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbvariantsuppliervariantbcodevariantsuppliervariant-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>variantSupplierVariants</b></code><Bullet /><code>VariantSupplierVariantConnection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbvariantsuppliervariantsbcodevariantsuppliervariantconnection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.variantSupplierVariants.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantvariantsuppliervariantsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.variantSupplierVariants.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantvariantsuppliervariantsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.variantSupplierVariants.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantvariantsuppliervariantsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Variant.<b>weight</b></code><Bullet /><code>VariantWeight</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-variantbweightbcodevariantweight-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:s,Bullet:p,SpecifiedBy:m,Badge:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Represents a single SKU of a product\nOnly the variant level exists, there is no parent product."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Variant {\n  barcode: String\n  casePack: Int\n  contentItemIds: [ID]\n  contentItems: [ProductContentItem]\n  createdAt: String!\n  deliveryMethod: VariantDeliveryMethod\n  demandHqId: ID!\n  manufacturer: String\n  mapPrice: Float\n  mpn: String\n  msrp: Float\n  optionValues: [String!]!\n  position: Int\n  price: Float\n  product: Product\n  productId: ID!\n  shippingDimensions: VariantShippingDimensions\n  sku: String\n  standardizedColor: VariantStandardizedColor\n  taxCode: String\n  title: String!\n  updatedAt: String!\n  updatedBy: String!\n  variantId: ID!\n  variantMetrics: VariantMetrics\n  variantSupplierVariant(\n  supplierVariantId: ID!\n): VariantSupplierVariant\n  variantSupplierVariants(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): VariantSupplierVariantConnection!\n  weight: VariantWeight\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbbarcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"barcode"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"UPC, ISBN, GTIN, etc.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbcasepackbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"casePack"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Quantity in one variant (i.e. 12-pack). Must be a positive integer.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbcontentitemidsbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"contentItemIds"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Associates contentItems with this variant")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbcontentitemsbcodeproductcontentitem--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"contentItems"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-content-item"},(0,o.kt)("inlineCode",{parentName:"a"},"[ProductContentItem]"))," ",(0,o.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get a list of productContentItems for a variant.")),(0,o.kt)("p",null,"Requires productcontentitem/read permission on the DemandHq for the requesting identity."),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbcreatedatbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbdeliverymethodbcodevariantdeliverymethod-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"deliveryMethod"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/variant-delivery-method"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantDeliveryMethod"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbdemandhqidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"demandHqId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbmanufacturerbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"manufacturer"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Often same as vendor, but not always.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbmappricebcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"mapPrice"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Minimum Advertised Price. Must be a positive number.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbmpnbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"mpn"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Manufacturer Part Number")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbmsrpbcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"msrp"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Manufacturer's Suggested Retail Price. Must be a positive number.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantboptionvaluesbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"optionValues"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An array of the option values that make up this variant.\nFor example, a product with a color and size option would have two option values,\none for each of the color and size options, i.e. ",'["Red", "Small"]','\nMust have 1-3, and it should match the number of options in the product, but there is no validation to do so.\nSet this to "No Option" if you don\'t want to use options for this product and this is the only variant.\nSee ',(0,o.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbpositionbcodeint-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"position"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbpricebcodefloat-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"price"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Price for the defaultCurrency, can be any positive float number value.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbproductbcodeproduct-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"product"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product"},(0,o.kt)("inlineCode",{parentName:"a"},"Product"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the product this variant belongs to.")),(0,o.kt)("p",null,"Requires the product/read scope on the associated DemandHq."),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbproductidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"productId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbshippingdimensionsbcodevariantshippingdimensions-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"shippingDimensions"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-shipping-dimensions"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantShippingDimensions"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbskubcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"sku"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Stock Keeping Unit")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbstandardizedcolorbcodevariantstandardizedcolor-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"standardizedColor"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/variant-standardized-color"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantStandardizedColor"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbtaxcodebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"taxCode"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Sales Tax Related Code, can match your chosen sales tax provider")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbtitlebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"title"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get the title of this variant (combo of optionValues)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbupdatedatbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbupdatedbybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"updatedBy"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbvariantidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"variantId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbvariantmetricsbcodevariantmetrics-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"variantMetrics"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-metrics"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantMetrics"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get variantMetrics for a Variant")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Requires variant/read permission\n")),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbvariantsuppliervariantbcodevariantsuppliervariant-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"variantSupplierVariant"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariant"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get a single variantSupplierVariant for a Variant by the SupplierVariantId"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-variantvariantsuppliervariantbsuppliervariantidbcodeid--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.variantSupplierVariant.",(0,o.kt)("b",null,"supplierVariantId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"}))),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbvariantsuppliervariantsbcodevariantsuppliervariantconnection--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"variantSupplierVariants"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-supplier-variant-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantConnection!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"List all variantSupplierVariants for a Variant"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-variantvariantsuppliervariantsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.variantSupplierVariants.",(0,o.kt)("b",null,"after"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-variantvariantsuppliervariantsbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.variantSupplierVariants.",(0,o.kt)("b",null,"before"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-variantvariantsuppliervariantsbfirstbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.variantSupplierVariants.",(0,o.kt)("b",null,"first"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-variantvariantsuppliervariantsblastbcodeint-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.variantSupplierVariants.",(0,o.kt)("b",null,"last"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-variantbweightbcodevariantweight-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Variant.",(0,o.kt)("b",null,"weight"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/variant-weight"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantWeight"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-variant"},(0,o.kt)("inlineCode",{parentName:"a"},"createVariant")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-variant-from-supplier-variant"},(0,o.kt)("inlineCode",{parentName:"a"},"createVariantFromSupplierVariant")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-variant"},(0,o.kt)("inlineCode",{parentName:"a"},"updateVariant")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-variants"},(0,o.kt)("inlineCode",{parentName:"a"},"updateVariants")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/variant"},(0,o.kt)("inlineCode",{parentName:"a"},"variant")),"  ",(0,o.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product"},(0,o.kt)("inlineCode",{parentName:"a"},"Product")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantConnection")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/variant-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"VariantEdge")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);