"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[38818],{3905:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return h}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},s=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?t.createElement(u,d(d({ref:a},s),{},{components:n})):t.createElement(u,d({ref:a},s))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48321:function(e,a,n){n.r(a),n.d(a,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var t=n(87462),r=n(63366),i=(n(67294),n(3905)),d=["components"],o={id:"variant",title:"Variant"},p=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/variant",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/variant",title:"Variant",description:"The main item of the Supplier Domain, represents a single SKU of a product",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/variant.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/variant.mdx",tags:[],version:"current",frontMatter:{id:"variant",title:"Variant"},sidebar:"apisSidebar",previous:{title:"VariantWeight",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant-weight"},next:{title:"demandHqIdentities",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/demand-hq-identities"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>barcode</code> (<code>String</code>)",id:"barcode-string",level:4},{value:"<code>casePack</code> (<code>Int</code>)",id:"casepack-int",level:4},{value:"<code>contentItemIds</code> (<code>ID</code>)",id:"contentitemids-id",level:4},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>isTaxable</code> (<code>Boolean</code>)",id:"istaxable-boolean",level:4},{value:"<code>manufacturer</code> (<code>String</code>)",id:"manufacturer-string",level:4},{value:"<code>mapPrice</code> (<code>Float</code>)",id:"mapprice-float",level:4},{value:"<code>mpn</code> (<code>String</code>)",id:"mpn-string",level:4},{value:"<code>msrp</code> (<code>Float</code>)",id:"msrp-float",level:4},{value:"<code>optionValues</code> (<code>String</code>)",id:"optionvalues-string",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>price</code> (<code>Float</code>)",id:"price-float",level:4},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"<code>shippingDimensions</code> (<code>VariantShippingDimensions</code>)",id:"shippingdimensions-variantshippingdimensions",level:4},{value:"<code>sku</code> (<code>String</code>)",id:"sku-string",level:4},{value:"<code>standardizedColor</code> (<code>VariantStandardizedColor</code>)",id:"standardizedcolor-variantstandardizedcolor",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>updatedAt</code> (<code>String</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>String</code>)",id:"updatedby-string",level:4},{value:"<code>variantId</code> (<code>ID</code>)",id:"variantid-id",level:4},{value:"<code>weight</code> (<code>VariantWeight</code>)",id:"weight-variantweight",level:4}],m={toc:c};function h(e){var a=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The main item of the Supplier Domain, represents a single SKU of a product\nOnly the variant level exists, there is no parent product."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Variant {\n  barcode: String!\n  casePack: Int\n  contentItemIds: [ID]\n  createdAt: String!\n  demandHqId: ID!\n  isTaxable: Boolean\n  manufacturer: String\n  mapPrice: Float\n  mpn: String\n  msrp: Float\n  optionValues: [String!]!\n  position: Int\n  price: Float!\n  productId: ID!\n  shippingDimensions: VariantShippingDimensions\n  sku: String\n  standardizedColor: VariantStandardizedColor\n  title: String!\n  updatedAt: String!\n  updatedBy: String!\n  variantId: ID!\n  weight: VariantWeight\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"barcode-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"barcode")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"UPC, ISBN, GTIN, etc."),(0,i.kt)("h4",{id:"casepack-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"casePack")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Quantity in one variant (i.e. 12-pack). Must be a positive integer."),(0,i.kt)("h4",{id:"contentitemids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItemIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"Associates contentItems with this variant"),(0,i.kt)("h4",{id:"createdat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"istaxable-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isTaxable")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"manufacturer-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"manufacturer")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Often same as vendor, but not always."),(0,i.kt)("h4",{id:"mapprice-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"mapPrice")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Minimum Advertised Price. Must be a positive number."),(0,i.kt)("h4",{id:"mpn-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"mpn")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Manufacturer Part Number"),(0,i.kt)("h4",{id:"msrp-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"msrp")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Manufacturer's Suggested Retail Price. Must be a positive number."),(0,i.kt)("h4",{id:"optionvalues-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"optionValues")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"An array of the option values that make up this variant.\nFor example, a product with a color and size option would have two option values,\none for each of the color and size options, i.e. ",'["Red", "Small"]'),(0,i.kt)("p",null,"Must have 1-3, and it should match the number of options in the product, but there is no validation to do so."),(0,i.kt)("p",null,'Set this to "No Option" if you don\'t want to use options for this product and this is the only variant.\nSee ',(0,i.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info."),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential."),(0,i.kt)("h4",{id:"price-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"price")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("p",null,"Price for the defaultCurrency, can be any positive float number value."),(0,i.kt)("h4",{id:"productid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"productId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"shippingdimensions-variantshippingdimensions"},(0,i.kt)("inlineCode",{parentName:"h4"},"shippingDimensions")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant-shipping-dimensions"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantShippingDimensions")),")"),(0,i.kt)("h4",{id:"sku-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sku")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Stock Keeping Unit"),(0,i.kt)("h4",{id:"standardizedcolor-variantstandardizedcolor"},(0,i.kt)("inlineCode",{parentName:"h4"},"standardizedColor")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/variant-standardized-color"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantStandardizedColor")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Get the title of this variant (combo of optionValues)"),(0,i.kt)("h4",{id:"updatedat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"updatedby-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"variantid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"variantId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"weight-variantweight"},(0,i.kt)("inlineCode",{parentName:"h4"},"weight")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant-weight"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantWeight")),")"))}h.isMDXComponent=!0}}]);