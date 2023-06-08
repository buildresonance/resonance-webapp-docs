"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[50801],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,f=p["".concat(c,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},67916:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),o=r(67294),a=r(3905);const l={id:"products",title:"products",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/queries/products",id:"demand/api/graphql-storefront/reference/queries/products",title:"products",description:"Paginate through products.",source:"@site/docs/demand/api/graphql-storefront/reference/queries/products.mdx",sourceDirName:"demand/api/graphql-storefront/reference/queries",slug:"/demand/api/graphql-storefront/reference/queries/products",permalink:"/demand/api/graphql-storefront/reference/queries/products",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/queries/products.mdx",tags:[],version:"current",frontMatter:{id:"products",title:"products",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"product",permalink:"/demand/api/graphql-storefront/reference/queries/product"},next:{title:"storefront",permalink:"/demand/api/graphql-storefront/reference/queries/storefront"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productsbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productsbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productsblastbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>manufacturer</b></code><Bullet /><code>[StringFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbmanufacturerbcodestringfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>msrp</b></code><Bullet /><code>FloatRangeFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbmsrpbcodefloatrangefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>numberOfTermAggregations</b></code><Bullet /><code>ProductNumberOfTermAggregationsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbnumberoftermaggregationsbcodeproductnumberoftermaggregationsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>price</b></code><Bullet /><code>FloatRangeFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbpricebcodefloatrangefilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>query</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productsbquerybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>slugs</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productsbslugsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>sortOrder</b></code><Bullet /><code>[ProductSortInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbsortorderbcodeproductsortinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>standardizedColor</b></code><Bullet /><code>[ProductStandardizedColorFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbstandardizedcolorbcodeproductstandardizedcolorfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>tagPrefixes</b></code><Bullet /><code>[StringFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbtagprefixesbcodestringfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>tags</b></code><Bullet /><code>[StringFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbtagsbcodestringfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>products.<b>vendor</b></code><Bullet /><code>StringFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-productsbvendorbcodestringfilterinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>PublicProductConnectionWithSearch</code> <Badge class="secondary" text="object"/>',id:"publicproductconnectionwithsearch-",level:4}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:p,SpecifiedBy:u,Badge:g};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Paginate through products."),(0,a.kt)("p",null,"Requires the publicproduct/read scope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"products(\n  after: String\n  before: String\n  first: Int\n  last: Int\n  manufacturer: [StringFilterInput]\n  msrp: FloatRangeFilterInput\n  numberOfTermAggregations: ProductNumberOfTermAggregationsInput\n  price: FloatRangeFilterInput\n  query: String\n  slugs: [String]\n  sortOrder: [ProductSortInput]\n  standardizedColor: [ProductStandardizedColorFilterInput]\n  tagPrefixes: [StringFilterInput]\n  tags: [StringFilterInput]\n  vendor: StringFilterInput\n): PublicProductConnectionWithSearch!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbafterbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"after"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbbeforebcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"before"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbfirstbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"first"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsblastbcodeint-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"last"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbmanufacturerbcodestringfilterinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"manufacturer"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]"))," ",(0,a.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optionally filter by manufacturer.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbmsrpbcodefloatrangefilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"msrp"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/float-range-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput"))," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optionally filter by msrp.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbnumberoftermaggregationsbcodeproductnumberoftermaggregationsinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"numberOfTermAggregations"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/product-number-of-term-aggregations-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductNumberOfTermAggregationsInput"))," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The number of results to return for each term aggregation. Defaults to 0 for each.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbpricebcodefloatrangefilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"price"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/float-range-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput"))," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optionally filter by price.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbquerybcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"query"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Query products for certain terms. Searches several fields, including\nproduct.tags, product.title, product.vendor, productLocales.description,\nproductLocales.featureBullets, variant.barcode, variant.mpn, variant.sku")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbslugsbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"slugs"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,a.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter Products using slugs")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbsortorderbcodeproductsortinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"sortOrder"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/product-sort-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[ProductSortInput]"))," ",(0,a.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sort Products by a series of fields and directions, defaults to CREATED_AT/ASC.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbstandardizedcolorbcodeproductstandardizedcolorfilterinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"standardizedColor"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/product-standardized-color-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[ProductStandardizedColorFilterInput]"))," ",(0,a.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optionally filter by standardized color.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbtagprefixesbcodestringfilterinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"tagPrefixes"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]"))," ",(0,a.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter Products using Tag Prefixes (starts with).")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbtagsbcodestringfilterinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"tags"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]"))," ",(0,a.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Filter Products using Tags.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productsbvendorbcodestringfilterinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"products.",(0,a.kt)("b",null,"vendor"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,a.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,a.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Optionally filter by vendor.")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"publicproductconnectionwithsearch-"},(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicProductConnectionWithSearch"))," ",(0,a.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Paginate through PublicProducts")))}m.isMDXComponent=!0}}]);