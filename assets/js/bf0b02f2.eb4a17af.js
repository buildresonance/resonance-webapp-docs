"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[12644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(g,c(c({ref:t},d),{},{components:r})):n.createElement(g,c({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92185:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),a=r(67294),o=r(3905);const c={id:"recommend-like-recent-activity-pages",title:"recommendLikeRecentActivityPages",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-pages",id:"demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-pages",title:"recommendLikeRecentActivityPages",description:"Recommend pages that are similar to a a customer's recent page activity.",source:"@site/docs/demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-pages.mdx",sourceDirName:"demand/api/graphql-storefront/reference/queries",slug:"/demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-pages",permalink:"/demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-pages",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-pages.mdx",tags:[],version:"current",frontMatter:{id:"recommend-like-recent-activity-pages",title:"recommendLikeRecentActivityPages",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"products",permalink:"/demand/api/graphql-storefront/reference/queries/products"},next:{title:"recommendLikeRecentActivityProducts",permalink:"/demand/api/graphql-storefront/reference/queries/recommend-like-recent-activity-products"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>recommendLikeRecentActivityPages.<b>customerOrDeviceId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendlikerecentactivitypagesbcustomerordeviceidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>recommendLikeRecentActivityPages.<b>numberOfResults</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-recommendlikerecentactivitypagesbnumberofresultsbcodeint--",level:4},{value:"Type",id:"type",level:3},{value:'<code>PageRecommendation</code> <Badge class="secondary" text="object"/>',id:"pagerecommendation-",level:4}],m=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:m,SpecifiedBy:p,Badge:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recommend pages that are similar to a a customer's recent page activity."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"recommendLikeRecentActivityPages(\n  customerOrDeviceId: String!\n  numberOfResults: Int!\n): [PageRecommendation!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-recommendlikerecentactivitypagesbcustomerordeviceidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"recommendLikeRecentActivityPages.",(0,o.kt)("b",null,"customerOrDeviceId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-recommendlikerecentactivitypagesbnumberofresultsbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"recommendLikeRecentActivityPages.",(0,o.kt)("b",null,"numberOfResults"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The number of results to return. Max 100.")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"pagerecommendation-"},(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/page-recommendation"},(0,o.kt)("inlineCode",{parentName:"a"},"PageRecommendation"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A page that is being recommended for a requested reason.")))}f.isMDXComponent=!0}}]);