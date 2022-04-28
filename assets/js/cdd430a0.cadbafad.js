"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4314],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,f=u["".concat(d,".").concat(h)]||u[h]||s[h]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71725:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"public-product",title:"PublicProduct"},d=void 0,p={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product",title:"PublicProduct",description:"A Product is a part of the Demand Domain and represents a the basic information of a product.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product.mdx",tags:[],version:"current",frontMatter:{id:"public-product",title:"PublicProduct"},sidebar:"apisSidebar",previous:{title:"PublicProductLocale",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-locale"},next:{title:"PublicStorefront",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-storefront"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>locale</code> (<code>PublicProductLocale</code>)",id:"locale-publicproductlocale",level:4},{value:"<code>optionLabels</code> (<code>String</code>)",id:"optionlabels-string",level:4},{value:"<code>productId</code> (<code>ID</code>)",id:"productid-id",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>tags</code> (<code>ProductTags</code>)",id:"tags-producttags",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>variant</code> (<code>PublicVariant</code>)",id:"variant-publicvariant",level:4},{value:"<code>variants</code> (<code>PublicVariantConnection</code>)",id:"variants-publicvariantconnection",level:4},{value:"<code>vendor</code> (<code>String</code>)",id:"vendor-string",level:4}],u={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Product is a part of the Demand Domain and represents a the basic information of a product.\nProducts have many support entities, including variants, which represent SKUs of the product."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicProduct {\n  demandHqId: ID!\n  locale: PublicProductLocale\n  optionLabels: [String!]!\n  productId: ID!\n  publishedAt: Date\n  seoTitle: String\n  slug: String!\n  tags: ProductTags\n  title: String!\n  variant(\n  variantId: ID\n): PublicVariant\n  variants(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): PublicVariantConnection!\n  vendor: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"locale-publicproductlocale"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-locale"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicProductLocale")),")"),(0,i.kt)("p",null,"Get a single productLocale by ResonanceLocaleType."),(0,i.kt)("p",null,'Requires the "publicproductlocale/read" permission.'),(0,i.kt)("h4",{id:"optionlabels-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"optionLabels")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,'The labels for the possible option groups for this product, i.e. "Color", "Size", "Material", etc.\nThese will match with labelOptions in Variants.'),(0,i.kt)("h4",{id:"productid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"productId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"A short description of the product, limit 1000 characters."),(0,i.kt)("h4",{id:"publishedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"publishedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("p",null,"ISO format date when the product was published."),(0,i.kt)("h4",{id:"seotitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Slug for the URL for this product. Limit 128 characters."),(0,i.kt)("h4",{id:"tags-producttags"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags"},(0,i.kt)("inlineCode",{parentName:"a"},"ProductTags")),")"),(0,i.kt)("p",null,"Get the tags of the product."),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the product, limit 256 characters."),(0,i.kt)("h4",{id:"variant-publicvariant"},(0,i.kt)("inlineCode",{parentName:"h4"},"variant")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicVariant")),")"),(0,i.kt)("p",null,"Get a single variant by VariantId"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the requesting identity\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"variantid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"variantId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("h4",{id:"variants-publicvariantconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"variants")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-variant-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicVariantConnection")),")"),(0,i.kt)("p",null,"Get a list of variants"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the demandHq for the requesting identity\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"vendor-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"vendor")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The brand of the product, limit 256 characters."))}h.isMDXComponent=!0}}]);