"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[89163],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(p,".").concat(h)]||u[h]||s[h]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98335:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"public-collection",title:"PublicCollection"},p=void 0,c={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection",title:"PublicCollection",description:'A Collection is a group of products, what may often be referred to as a "Category Page" of some variety.',source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection.mdx",tags:[],version:"current",frontMatter:{id:"public-collection",title:"PublicCollection"},sidebar:"apisSidebar",previous:{title:"PublicCollectionTypeContent",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-collection-type-content"},next:{title:"PublicNavConnection",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-nav-connection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>collectionId</code> (<code>ID</code>)",id:"collectionid-id",level:4},{value:"<code>collectionType</code> (<code>String</code>)",id:"collectiontype-string",level:4},{value:"<code>content</code> (<code>CollectionContent</code>)",id:"content-collectioncontent",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>featuredProductIds</code> (<code>ID</code>)",id:"featuredproductids-id",level:4},{value:"<code>primaryImageUrl</code> (<code>String</code>)",id:"primaryimageurl-string",level:4},{value:"<code>products</code> (<code>PublicProductConnectionWithSearch</code>)",id:"products-publicproductconnectionwithsearch",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>seoDescription</code> (<code>String</code>)",id:"seodescription-string",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>tags</code> (<code>CollectionTags</code>)",id:"tags-collectiontags",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'A Collection is a group of products, what may often be referred to as a "Category Page" of some variety.\nIn reality, a collection is far more flexible and can be used to represent any\nproduct grouping, and the collectionType can help differentiate between them.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicCollection {\n  collectionId: ID!\n  collectionType: String!\n  content: CollectionContent\n  demandHqId: ID!\n  description: String\n  featuredProductIds: [ID]\n  primaryImageUrl: String\n  products(\n  after: String\n  before: String\n  first: Int\n  last: Int\n  manufacturer: [StringFilterInput]\n  msrp: FloatRangeFilterInput\n  price: FloatRangeFilterInput\n  query: String\n  slugs: [String]\n  sortOrder: [ProductSortInput]\n  standardizedColor: [ProductStandardizedColorFilterInput]\n  tags: [StringFilterInput]\n  vendor: StringFilterInput\n): PublicProductConnectionWithSearch!\n  publishedAt: Date\n  seoDescription: String\n  seoTitle: String\n  slug: String!\n  subtitle: String\n  tags: CollectionTags\n  title: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"collectionid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"collectionId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"collectiontype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"collectionType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Any string to declare a category of this collection, can be used to filter collections, limit 128 characters."),(0,i.kt)("h4",{id:"content-collectioncontent"},(0,i.kt)("inlineCode",{parentName:"h4"},"content")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/collection-content"},(0,i.kt)("inlineCode",{parentName:"a"},"CollectionContent")),")"),(0,i.kt)("p",null,"Get the content of the collection."),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A short description of the collection, limit 1000 characters."),(0,i.kt)("h4",{id:"featuredproductids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"featuredProductIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"This can be used to pin certain products to the top of a collection when using certain sorts.\nMax number of products is 20."),(0,i.kt)("h4",{id:"primaryimageurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"primaryImageUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A primary image url for this collection, can be generated from a Collection ContentItem."),(0,i.kt)("h4",{id:"products-publicproductconnectionwithsearch"},(0,i.kt)("inlineCode",{parentName:"h4"},"products")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/public-product-connection-with-search"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicProductConnectionWithSearch")),")"),(0,i.kt)("p",null,"Paginate through products in a collection."),(0,i.kt)("p",null,"Requires the publicproduct/read scope."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"manufacturer-stringfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"manufacturer")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,i.kt)("p",null,"Optionally filter by manufacturer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"msrp-floatrangefilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"msrp")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/float-range-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput")),")"))),(0,i.kt)("p",null,"Optionally filter by msrp."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"price-floatrangefilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"price")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/float-range-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput")),")"))),(0,i.kt)("p",null,"Optionally filter by price."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"query-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"query")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Query products for certain terms. Searches several fields, including\nproduct.tags, product.title, product.vendor, productLocales.description,\nproductLocales.featureBullets, variant.barcode, variant.mpn, variant.sku"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"slugs-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"slugs")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Filter Products using slugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sortorder-productsortinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"sortOrder")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/product-sort-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ProductSortInput")),")"))),(0,i.kt)("p",null,"Sort Products by a series of fields and directions, defaults to CREATED_AT/ASC."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"standardizedcolor-productstandardizedcolorfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"standardizedColor")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/product-standardized-color-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ProductStandardizedColorFilterInput")),")"))),(0,i.kt)("p",null,"Optionally filter by standardized color."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"tags-stringfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"tags")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,i.kt)("p",null,"Optionally filter by tags."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"vendor-stringfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"vendor")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,i.kt)("p",null,"Optionally filter by vendor."),(0,i.kt)("h4",{id:"publishedat-date"},(0,i.kt)("inlineCode",{parentName:"h4"},"publishedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("p",null,"ISO format date when the collection was published. Note that ensuing updates\nwith status set to PUBLISHED will republish and re-set this date."),(0,i.kt)("h4",{id:"seodescription-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoDescription")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Description specific for SEO purposes, limit 170 characters."),(0,i.kt)("h4",{id:"seotitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoTitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Slug for the URL for this collection. Limit 128 characters."),(0,i.kt)("h4",{id:"subtitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The subtitle of the collection, limit 256 characters."),(0,i.kt)("h4",{id:"tags-collectiontags"},(0,i.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/collection-tags"},(0,i.kt)("inlineCode",{parentName:"a"},"CollectionTags")),")"),(0,i.kt)("p",null,"Get the tags of the collection."),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the collection, limit 256 characters."))}h.isMDXComponent=!0}}]);