"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[71292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,h=m["".concat(i,".").concat(p)]||m[p]||u[p]||a;return n?o.createElement(h,c(c({ref:t},d),{},{components:n})):o.createElement(h,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75324:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=n(87462),r=n(67294),a=n(3905);const c={id:"customer-connection-with-search",title:"CustomerConnectionWithSearch",hide_table_of_contents:!1},s=void 0,i={unversionedId:"demand/api/graphql-admin/reference/objects/customer-connection-with-search",id:"demand/api/graphql-admin/reference/objects/customer-connection-with-search",title:"CustomerConnectionWithSearch",description:"Paginate through Customers",source:"@site/docs/demand/api/graphql-admin/reference/objects/customer-connection-with-search.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/customer-connection-with-search",permalink:"/demand/api/graphql-admin/reference/objects/customer-connection-with-search",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/customer-connection-with-search.mdx",tags:[],version:"current",frontMatter:{id:"customer-connection-with-search",title:"CustomerConnectionWithSearch",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"CustomerAddress",permalink:"/demand/api/graphql-admin/reference/objects/customer-address"},next:{title:"CustomerEdge",permalink:"/demand/api/graphql-admin/reference/objects/customer-edge"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerConnectionWithSearch.<b>edges</b></code><Bullet /><code>[CustomerEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-customerconnectionwithsearchbedgesbcodecustomeredge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerConnectionWithSearch.<b>nodes</b></code><Bullet /><code>[Customer]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-customerconnectionwithsearchbnodesbcodecustomer--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerConnectionWithSearch.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-customerconnectionwithsearchbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerConnectionWithSearch.<b>querySuggestions</b></code><Bullet /><code>JSON</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-customerconnectionwithsearchbquerysuggestionsbcodejson-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:d,Bullet:m,SpecifiedBy:u,Badge:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Paginate through Customers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomerConnectionWithSearch {\n  edges: [CustomerEdge]!\n  nodes: [Customer]!\n  pageInfo: PageInfo!\n  querySuggestions: JSON\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-customerconnectionwithsearchbedgesbcodecustomeredge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CustomerConnectionWithSearch.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/customer-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[CustomerEdge]!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-customerconnectionwithsearchbnodesbcodecustomer--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CustomerConnectionWithSearch.",(0,a.kt)("b",null,"nodes"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/customer"},(0,a.kt)("inlineCode",{parentName:"a"},"[Customer]!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-customerconnectionwithsearchbpageinfobcodepageinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CustomerConnectionWithSearch.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-customerconnectionwithsearchbquerysuggestionsbcodejson-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"CustomerConnectionWithSearch.",(0,a.kt)("b",null,"querySuggestions"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/json"},(0,a.kt)("inlineCode",{parentName:"a"},"JSON"))," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This is an object with terms in the query as keys, and a suggestion for that\nterm as the value. This is often referred to as 'Did you mean?'")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/storefront"},(0,a.kt)("inlineCode",{parentName:"a"},"Storefront")),"  ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);