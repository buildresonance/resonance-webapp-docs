"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[30504],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,b=s["".concat(i,".").concat(g)]||s[g]||u[g]||o;return n?r.createElement(b,c(c({ref:t},d),{},{components:n})):r.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},67441:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(87462),a=n(67294),o=n(3905);const c={id:"public-page-edge",title:"PublicPageEdge",hide_table_of_contents:!1},l=void 0,i={unversionedId:"demand/api/graphql-storefront/reference/objects/public-page-edge",id:"demand/api/graphql-storefront/reference/objects/public-page-edge",title:"PublicPageEdge",description:"One edge producing one PublicPage Node",source:"@site/docs/demand/api/graphql-storefront/reference/objects/public-page-edge.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/public-page-edge",permalink:"/demand/api/graphql-storefront/reference/objects/public-page-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/public-page-edge.mdx",tags:[],version:"current",frontMatter:{id:"public-page-edge",title:"PublicPageEdge",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"PublicPageConnectionWithSearch",permalink:"/demand/api/graphql-storefront/reference/objects/public-page-connection-with-search"},next:{title:"PublicPageTypeContentConnection",permalink:"/demand/api/graphql-storefront/reference/objects/public-page-type-content-connection"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicPageEdge.<b>node</b></code><Bullet /><code>PublicPage</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicpageedgebnodebcodepublicpage-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:s,SpecifiedBy:u,Badge:g};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One edge producing one PublicPage Node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicPageEdge {\n  node: PublicPage\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-publicpageedgebnodebcodepublicpage-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PublicPageEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/public-page"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicPage"))," ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/public-page-connection-with-search"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicPageConnectionWithSearch")),"  ",(0,o.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);