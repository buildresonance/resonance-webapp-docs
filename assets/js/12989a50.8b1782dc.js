"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[57953],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=l.createContext({}),a=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=a(e.components);return l.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},b=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=a(t),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return t?l.createElement(f,i(i({ref:n},u),{},{components:t})):l.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var a=2;a<o;a++)i[a]=t[a];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}b.displayName="MDXCreateElement"},63101:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>b,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>a,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var l=t(87462),r=t(67294),o=t(3905);const i={id:"public-supplier-connection",title:"PublicSupplierConnection",hide_table_of_contents:!1},p=void 0,c={unversionedId:"supply/api/graphql-admin/reference/objects/public-supplier-connection",id:"supply/api/graphql-admin/reference/objects/public-supplier-connection",title:"PublicSupplierConnection",description:"Paginate through PublicSupplier",source:"@site/docs/supply/api/graphql-admin/reference/objects/public-supplier-connection.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/public-supplier-connection",permalink:"/supply/api/graphql-admin/reference/objects/public-supplier-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/public-supplier-connection.mdx",tags:[],version:"current",frontMatter:{id:"public-supplier-connection",title:"PublicSupplierConnection",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"PublicIdentity",permalink:"/supply/api/graphql-admin/reference/objects/public-identity"},next:{title:"PublicSupplierEdge",permalink:"/supply/api/graphql-admin/reference/objects/public-supplier-edge"}},a={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierConnection.<b>edges</b></code><Bullet /><code>[PublicSupplierEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsupplierconnectionbedgesbcodepublicsupplieredge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierConnection.<b>nodes</b></code><Bullet /><code>[PublicSupplier]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsupplierconnectionbnodesbcodepublicsupplier--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsupplierconnectionbpageinfobcodepageinfo--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:s,SpecifiedBy:d,Badge:b};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,l.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through PublicSupplier"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicSupplierConnection {\n  edges: [PublicSupplierEdge]!\n  nodes: [PublicSupplier]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierconnectionbedgesbcodepublicsupplieredge--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierConnection.",(0,o.kt)("b",null,"edges"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/public-supplier-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[PublicSupplierEdge]!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierconnectionbnodesbcodepublicsupplier--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierConnection.",(0,o.kt)("b",null,"nodes"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/public-supplier"},(0,o.kt)("inlineCode",{parentName:"a"},"[PublicSupplier]!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierconnectionbpageinfobcodepageinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierConnection.",(0,o.kt)("b",null,"pageInfo"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/public-suppliers"},(0,o.kt)("inlineCode",{parentName:"a"},"publicSuppliers")),"  ",(0,o.kt)(b,{class:"secondary",text:"query",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);