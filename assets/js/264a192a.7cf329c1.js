"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[13297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,l=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),g=c,h=u["".concat(i,".").concat(g)]||u[g]||p[g]||l;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=n.length,r=new Array(l);r[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[u]="string"==typeof e?e:c,r[1]=a;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95896:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(87462),c=n(67294),l=n(3905);const r={id:"public-collection-connection-with-search",title:"PublicCollectionConnectionWithSearch",hide_table_of_contents:!1},a=void 0,i={unversionedId:"demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search",id:"demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search",title:"PublicCollectionConnectionWithSearch",description:"Paginate through PublicCollections",source:"@site/docs/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search",permalink:"/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/public-collection-connection-with-search.mdx",tags:[],version:"current",frontMatter:{id:"public-collection-connection-with-search",title:"PublicCollectionConnectionWithSearch",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"ProductTermAggregations",permalink:"/demand/api/graphql-storefront/reference/objects/product-term-aggregations"},next:{title:"PublicCollectionEdge",permalink:"/demand/api/graphql-storefront/reference/objects/public-collection-edge"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicCollectionConnectionWithSearch.<b>edges</b></code><Bullet /><code>[PublicCollectionEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbedgesbcodepubliccollectionedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicCollectionConnectionWithSearch.<b>nodes</b></code><Bullet /><code>[PublicCollection]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbnodesbcodepubliccollection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicCollectionConnectionWithSearch.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicCollectionConnectionWithSearch.<b>querySuggestions</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbquerysuggestionsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicCollectionConnectionWithSearch.<b>termAggregations</b></code><Bullet /><code>CollectionTermAggregations</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbtermaggregationsbcodecollectiontermaggregations-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(c.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:d,Bullet:u,SpecifiedBy:p,Badge:g};function b(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Paginate through PublicCollections"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicCollectionConnectionWithSearch {\n  edges: [PublicCollectionEdge]!\n  nodes: [PublicCollection]!\n  pageInfo: PageInfo!\n  querySuggestions: JSON\n  termAggregations: CollectionTermAggregations\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbedgesbcodepubliccollectionedge--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PublicCollectionConnectionWithSearch.",(0,l.kt)("b",null,"edges"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-collection-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"[PublicCollectionEdge]!"))," ",(0,l.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbnodesbcodepubliccollection--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PublicCollectionConnectionWithSearch.",(0,l.kt)("b",null,"nodes"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"[PublicCollection]!"))," ",(0,l.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbpageinfobcodepageinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PublicCollectionConnectionWithSearch.",(0,l.kt)("b",null,"pageInfo"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/page-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,l.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbquerysuggestionsbcodejson-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PublicCollectionConnectionWithSearch.",(0,l.kt)("b",null,"querySuggestions"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/json"},(0,l.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,l.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is an object with terms in the query as keys, and a suggestion for that\nterm as the value. This is often referred to as 'Did you mean?'")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-publiccollectionconnectionwithsearchbtermaggregationsbcodecollectiontermaggregations-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"PublicCollectionConnectionWithSearch.",(0,l.kt)("b",null,"termAggregations"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/collection-term-aggregations"},(0,l.kt)("inlineCode",{parentName:"a"},"CollectionTermAggregations"))," ",(0,l.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Values and the number of times they occur for the results of the query. These\nwill be the same for every page of a query, and should only be fetched on the first page.")),(0,l.kt)("h3",{id:"returned-by"},"Returned by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/queries/collections"},(0,l.kt)("inlineCode",{parentName:"a"},"collections")),"  ",(0,l.kt)(g,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);