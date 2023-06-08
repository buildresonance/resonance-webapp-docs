"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[14293],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||s[b]||i;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},62308:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(87462),a=t(67294),i=t(3905);const l={id:"public-supplier-variant-edge",title:"PublicSupplierVariantEdge",hide_table_of_contents:!1},p=void 0,o={unversionedId:"demand/api/graphql-admin/reference/objects/public-supplier-variant-edge",id:"demand/api/graphql-admin/reference/objects/public-supplier-variant-edge",title:"PublicSupplierVariantEdge",description:"One edge producing one SupplierProduct Node",source:"@site/docs/demand/api/graphql-admin/reference/objects/public-supplier-variant-edge.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/public-supplier-variant-edge",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-variant-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/public-supplier-variant-edge.mdx",tags:[],version:"current",frontMatter:{id:"public-supplier-variant-edge",title:"PublicSupplierVariantEdge",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"PublicSupplierVariantConnection",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-variant-connection"},next:{title:"PublicSupplierVariant",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-variant"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierVariantEdge.<b>node</b></code><Bullet /><code>PublicSupplierVariant</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsuppliervariantedgebnodebcodepublicsuppliervariant-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:s,Badge:b};function f(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One edge producing one SupplierProduct Node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicSupplierVariantEdge {\n  node: PublicSupplierVariant\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-publicsuppliervariantedgebnodebcodepublicsuppliervariant-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierVariantEdge.",(0,i.kt)("b",null,"node"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/public-supplier-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicSupplierVariant"))," ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/public-supplier-variant-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"PublicSupplierVariantConnection")),"  ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);