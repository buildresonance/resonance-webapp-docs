"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[43619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),g=l,f=p["".concat(i,".").concat(g)]||p[g]||u[g]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:l,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},15921:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),l=n(67294),r=n(3905);const a={id:"collections",title:"collections",hide_table_of_contents:!1},c=void 0,i={unversionedId:"demand/api/graphql-storefront/reference/queries/collections",id:"demand/api/graphql-storefront/reference/queries/collections",title:"collections",description:"List collections for a Storefront with optional filters.",source:"@site/docs/demand/api/graphql-storefront/reference/queries/collections.mdx",sourceDirName:"demand/api/graphql-storefront/reference/queries",slug:"/demand/api/graphql-storefront/reference/queries/collections",permalink:"/demand/api/graphql-storefront/reference/queries/collections",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/queries/collections.mdx",tags:[],version:"current",frontMatter:{id:"collections",title:"collections",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"collection",permalink:"/demand/api/graphql-storefront/reference/queries/collection"},next:{title:"customerCart",permalink:"/demand/api/graphql-storefront/reference/queries/customer-cart"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectionsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectionsbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>collectionType</b></code><Bullet /><code>StringFilterInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-collectionsbcollectiontypebcodestringfilterinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectionsbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectionsblastbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>numberOfTermAggregations</b></code><Bullet /><code>CollectionNumberOfTermAggregations</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-collectionsbnumberoftermaggregationsbcodecollectionnumberoftermaggregations-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>query</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectionsbquerybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>slugs</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectionsbslugsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>sortOrder</b></code><Bullet /><code>[CollectionSortInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-collectionsbsortorderbcodecollectionsortinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>tagPrefixes</b></code><Bullet /><code>[StringFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-collectionsbtagprefixesbcodestringfilterinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>collections.<b>tags</b></code><Bullet /><code>[StringFilterInput]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-collectionsbtagsbcodestringfilterinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>PublicCollectionConnectionWithSearch</code> <Badge class="secondary" text="object"/>',id:"publiccollectionconnectionwithsearch-",level:4}],p=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:u,Badge:g};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"List collections for a Storefront with optional filters."),(0,r.kt)("p",null,"Requires the publiccollection/read scope."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"collections(\n  after: String\n  before: String\n  collectionType: StringFilterInput\n  first: Int\n  last: Int\n  numberOfTermAggregations: CollectionNumberOfTermAggregations\n  query: String\n  slugs: [String]\n  sortOrder: [CollectionSortInput]\n  tagPrefixes: [StringFilterInput]\n  tags: [StringFilterInput]\n): PublicCollectionConnectionWithSearch!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbafterbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"after"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbbeforebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"before"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbcollectiontypebcodestringfilterinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"collectionType"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"StringFilterInput"))," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter Collections using collectionType")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbfirstbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"first"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsblastbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"last"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbnumberoftermaggregationsbcodecollectionnumberoftermaggregations-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"numberOfTermAggregations"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/collection-number-of-term-aggregations"},(0,r.kt)("inlineCode",{parentName:"a"},"CollectionNumberOfTermAggregations"))," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The number of results to return for each term aggregation. Defaults to 0 for each.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbquerybcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"query"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Query collections for certain terms. Searches several fields, including\ncollection.description, collection.subtitle, collection.title, and\ncollectionTags.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbslugsbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"slugs"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter Collections using slugs")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbsortorderbcodecollectionsortinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"sortOrder"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/collection-sort-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[CollectionSortInput]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sort Collections by a series of fields and directions.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbtagprefixesbcodestringfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"tagPrefixes"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter Collections using Tag Prefixes (starts with).")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-collectionsbtagsbcodestringfilterinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"collections.",(0,r.kt)("b",null,"tags"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/inputs/string-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[StringFilterInput]"))," ",(0,r.kt)(g,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Filter Collections using Tags.")),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"publiccollectionconnectionwithsearch-"},(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicCollectionConnectionWithSearch"))," ",(0,r.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Paginate through PublicCollections")))}m.isMDXComponent=!0}}]);