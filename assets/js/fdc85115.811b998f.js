"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[37100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||p[b]||c;return n?o.createElement(h,a(a({ref:t},s),{},{components:n})):o.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<c;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},24197:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(87462),r=n(67294),c=n(3905);const a={id:"public-product-connection-with-search",title:"PublicProductConnectionWithSearch",hide_table_of_contents:!1},l=void 0,i={unversionedId:"demand/api/graphql-storefront/reference/objects/public-product-connection-with-search",id:"demand/api/graphql-storefront/reference/objects/public-product-connection-with-search",title:"PublicProductConnectionWithSearch",description:"Paginate through PublicProducts",source:"@site/docs/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search",permalink:"/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/public-product-connection-with-search.mdx",tags:[],version:"current",frontMatter:{id:"public-product-connection-with-search",title:"PublicProductConnectionWithSearch",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"PublicPage",permalink:"/demand/api/graphql-storefront/reference/objects/public-page"},next:{title:"PublicProductContentItemEdge",permalink:"/demand/api/graphql-storefront/reference/objects/public-product-content-item-edge"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicProductConnectionWithSearch.<b>edges</b></code><Bullet /><code>[PublicProductEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicproductconnectionwithsearchbedgesbcodepublicproductedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicProductConnectionWithSearch.<b>nodes</b></code><Bullet /><code>[PublicProduct]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicproductconnectionwithsearchbnodesbcodepublicproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicProductConnectionWithSearch.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicproductconnectionwithsearchbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicProductConnectionWithSearch.<b>querySuggestions</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicproductconnectionwithsearchbquerysuggestionsbcodejson-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicProductConnectionWithSearch.<b>termAggregations</b></code><Bullet /><code>ProductTermAggregations</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicproductconnectionwithsearchbtermaggregationsbcodeproducttermaggregations-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],u=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:s,Bullet:u,SpecifiedBy:p,Badge:b};function g(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Paginate through PublicProducts"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicProductConnectionWithSearch {\n  edges: [PublicProductEdge]!\n  nodes: [PublicProduct]!\n  pageInfo: PageInfo!\n  querySuggestions: JSON\n  termAggregations: ProductTermAggregations\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-publicproductconnectionwithsearchbedgesbcodepublicproductedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PublicProductConnectionWithSearch.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-product-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[PublicProductEdge]!"))," ",(0,c.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-publicproductconnectionwithsearchbnodesbcodepublicproduct--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PublicProductConnectionWithSearch.",(0,c.kt)("b",null,"nodes"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-product"},(0,c.kt)("inlineCode",{parentName:"a"},"[PublicProduct]!"))," ",(0,c.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-publicproductconnectionwithsearchbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PublicProductConnectionWithSearch.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-publicproductconnectionwithsearchbquerysuggestionsbcodejson-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PublicProductConnectionWithSearch.",(0,c.kt)("b",null,"querySuggestions"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/json"},(0,c.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,c.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"This is an object with terms in the query as keys, and a suggestion for that\nterm as the value. This is often referred to as 'Did you mean?'")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-publicproductconnectionwithsearchbtermaggregationsbcodeproducttermaggregations-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"PublicProductConnectionWithSearch.",(0,c.kt)("b",null,"termAggregations"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/product-term-aggregations"},(0,c.kt)("inlineCode",{parentName:"a"},"ProductTermAggregations"))," ",(0,c.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Values and the number of times they occur for the results of the query. These\nwill be the same for every page of a query, and should only be fetched on the first page.")),(0,c.kt)("h3",{id:"returned-by"},"Returned by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/queries/products"},(0,c.kt)("inlineCode",{parentName:"a"},"products")),"  ",(0,c.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-collection"},(0,c.kt)("inlineCode",{parentName:"a"},"PublicCollection")),"  ",(0,c.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);