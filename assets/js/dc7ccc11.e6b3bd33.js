"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[18306],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||d;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,i=new Array(d);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<d;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23634:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),d=(a(67294),a(3905)),i=["components"],o={id:"product",title:"Product"},l=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/product",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/product",title:"Product",description:"A Product is a part of the Demand Domain and represents a the basic information of a product.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/product.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/product.mdx",tags:[],version:"current",frontMatter:{id:"product",title:"Product"},sidebar:"apisSidebar",previous:{title:"ProductTermAggregations",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-term-aggregations"},next:{title:"PublicIdentity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/public-identity"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>createdAt</code> (<code>Date</code>)",id:"createdat-date",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>locale</code> (<code>ProductLocale</code>)",id:"locale-productlocale",level:4},{value:"<code>optionLabels</code> (<code>String</code>)",id:"optionlabels-string",level:4},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>status</code> (<code>ProductStatus</code>)",id:"status-productstatus",level:4},{value:"<code>storefrontIds</code> (<code>ID</code>)",id:"storefrontids-id",level:4},{value:"<code>tags</code> (<code>ProductTags</code>)",id:"tags-producttags",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>updatedAt</code> (<code>Date</code>)",id:"updatedat-date",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4},{value:"<code>variant</code> (<code>Variant</code>)",id:"variant-variant",level:4},{value:"<code>variants</code> (<code>VariantConnection</code>)",id:"variants-variantconnection",level:4},{value:"<code>vendor</code> (<code>String</code>)",id:"vendor-string",level:4}],u={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,d.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"A Product is a part of the Demand Domain and represents a the basic information of a product.\nProducts have many support entities, including variants, which represent SKUs of the product."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n  createdAt: Date!\n  demandHqId: ID!\n  locale(\n  localeType: ResonanceLocaleType!\n): ProductLocale\n  optionLabels: [String!]!\n  productId: ID!\n  publishedAt: Date\n  seoTitle: String\n  slug: String!\n  status: ProductStatus!\n  storefrontIds: [ID]\n  tags: ProductTags\n  title: String!\n  updatedAt: Date!\n  updatedBy: ID!\n  variant(\n  variantId: ID\n): Variant\n  variants(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): VariantConnection!\n  vendor: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"createdat-date"},(0,d.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,d.kt)("h4",{id:"demandhqid-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("h4",{id:"locale-productlocale"},(0,d.kt)("inlineCode",{parentName:"h4"},"locale")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-locale"},(0,d.kt)("inlineCode",{parentName:"a"},"ProductLocale")),")"),(0,d.kt)("p",null,"Get a single productLocale by ResonanceLocaleType"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"Requires productlocale/read permission on the requesting identity\n")),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"localetype-resonancelocaletype"},(0,d.kt)("inlineCode",{parentName:"h5"},"localeType")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/resonance-locale-type"},(0,d.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"))),(0,d.kt)("h4",{id:"optionlabels-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"optionLabels")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("p",null,'The labels for the possible option groups for this product, i.e. "Color", "Size", "Material", etc.\nThese will match with labelOptions in Variants.'),(0,d.kt)("h4",{id:"productid-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"productId")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("h4",{id:"publishedat-date"},(0,d.kt)("inlineCode",{parentName:"h4"},"publishedAt")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,d.kt)("p",null,"ISO format date when the product was published. Note that ensuing updates with\nstatus set to PUBLISHED will republish and re-set this date."),(0,d.kt)("h4",{id:"seotitle-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,d.kt)("h4",{id:"slug-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("p",null,"Slug for the URL for this product. Limit 128 characters."),(0,d.kt)("h4",{id:"status-productstatus"},(0,d.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/product-status"},(0,d.kt)("inlineCode",{parentName:"a"},"ProductStatus")),")"),(0,d.kt)("p",null,"The status of the product, can be DRAFT or PUBLISHED."),(0,d.kt)("h4",{id:"storefrontids-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"storefrontIds")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("p",null,"Which storefronts should have access to this product?"),(0,d.kt)("h4",{id:"tags-producttags"},(0,d.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-tags"},(0,d.kt)("inlineCode",{parentName:"a"},"ProductTags")),")"),(0,d.kt)("p",null,"Get the tags for this product"),(0,d.kt)("h4",{id:"title-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("p",null,"The title of the product, limit 256 characters."),(0,d.kt)("h4",{id:"updatedat-date"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,d.kt)("h4",{id:"updatedby-id"},(0,d.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,d.kt)("h4",{id:"variant-variant"},(0,d.kt)("inlineCode",{parentName:"h4"},"variant")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant"},(0,d.kt)("inlineCode",{parentName:"a"},"Variant")),")"),(0,d.kt)("p",null,"Get a single variant by VariantId"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the requesting identity\n")),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"variantid-id"},(0,d.kt)("inlineCode",{parentName:"h5"},"variantId")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,d.kt)("h4",{id:"variants-variantconnection"},(0,d.kt)("inlineCode",{parentName:"h4"},"variants")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant-connection"},(0,d.kt)("inlineCode",{parentName:"a"},"VariantConnection")),")"),(0,d.kt)("p",null,"Get a list of variants"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the demandHq for the requesting identity\n")),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"after-string"},(0,d.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,d.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"before-string"},(0,d.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,d.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"first-int"},(0,d.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,d.kt)("p",null,"Returns the first n elements from the list."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("h5",{parentName:"li",id:"last-int"},(0,d.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,d.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,d.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,d.kt)("p",null,"Returns the last n elements from the list."),(0,d.kt)("h4",{id:"vendor-string"},(0,d.kt)("inlineCode",{parentName:"h4"},"vendor")," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("p",null,"AKA Brand. Limit 256 characters."))}h.isMDXComponent=!0}}]);