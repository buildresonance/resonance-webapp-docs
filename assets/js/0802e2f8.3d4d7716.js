"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[55387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return r?o.createElement(f,c(c({ref:t},i),{},{components:r})):o.createElement(f,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:n,c[1]=d;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23763:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var o=r(87462),n=r(67294),a=r(3905);const c={id:"recommend-more-like-this-products",title:"recommendMoreLikeThisProducts",hide_table_of_contents:!1},d=void 0,s={unversionedId:"demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products",id:"demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products",title:"recommendMoreLikeThisProducts",description:"Recommend products that are similar to a given product(s).",source:"@site/docs/demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products.mdx",sourceDirName:"demand/api/graphql-storefront/reference/queries",slug:"/demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products",permalink:"/demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/queries/recommend-more-like-this-products.mdx",tags:[],version:"current",frontMatter:{id:"recommend-more-like-this-products",title:"recommendMoreLikeThisProducts",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"recommendMoreLikeThisPages",permalink:"/demand/api/graphql-storefront/reference/queries/recommend-more-like-this-pages"},next:{title:"recommendRecentlyViewedPages",permalink:"/demand/api/graphql-storefront/reference/queries/recommend-recently-viewed-pages"}},l={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>recommendMoreLikeThisProducts.<b>numberOfResults</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendmorelikethisproductsbnumberofresultsbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>recommendMoreLikeThisProducts.<b>productIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendmorelikethisproductsbproductidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>recommendMoreLikeThisProducts.<b>productSlugs</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendmorelikethisproductsbproductslugsbcodestring--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ProductRecommendation</code> <Badge class="secondary" text="object"/>',id:"productrecommendation-",level:4}],m=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:m,SpecifiedBy:p,Badge:u};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recommend products that are similar to a given product(s)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"recommendMoreLikeThisProducts(\n  numberOfResults: Int!\n  productIds: [ID!]\n  productSlugs: [String!]\n): [ProductRecommendation!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendmorelikethisproductsbnumberofresultsbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"recommendMoreLikeThisProducts.",(0,a.kt)("b",null,"numberOfResults"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The number of results to return. Max 100.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendmorelikethisproductsbproductidsbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"recommendMoreLikeThisProducts.",(0,a.kt)("b",null,"productIds"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,a.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The product(s) to find similar products for. If this is provided, productSlugs will be ignored.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-recommendmorelikethisproductsbproductslugsbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"recommendMoreLikeThisProducts.",(0,a.kt)("b",null,"productSlugs"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,a.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The product slug(s) to find similar products for. If productIds is not provided, this is required.")),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"productrecommendation-"},(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/product-recommendation"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductRecommendation"))," ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A product that is being recommended for a requested reason.")))}g.isMDXComponent=!0}}]);