"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[60468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<p;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27167:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=n(67294),p=n(3905);const a={id:"supplier-product-content-type",title:"SupplierProductContentType",hide_table_of_contents:!1},l=void 0,i={unversionedId:"demand/api/graphql-admin/reference/enums/supplier-product-content-type",id:"demand/api/graphql-admin/reference/enums/supplier-product-content-type",title:"SupplierProductContentType",description:"Describes what type of content the entity is",source:"@site/docs/demand/api/graphql-admin/reference/enums/supplier-product-content-type.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/supplier-product-content-type",permalink:"/demand/api/graphql-admin/reference/enums/supplier-product-content-type",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/supplier-product-content-type.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-content-type",title:"SupplierProductContentType",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"SupplierCategory",permalink:"/demand/api/graphql-admin/reference/enums/supplier-category"},next:{title:"SupplierStatus",permalink:"/demand/api/graphql-admin/reference/enums/supplier-status"}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupplierProductContentType.<b>IMAGE</b></code>",id:"code-style-fontweight-normal-supplierproductcontenttypebimagebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplierProductContentType.<b>VIDEO</b></code>",id:"code-style-fontweight-normal-supplierproductcontenttypebvideobcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,p.kt)(o.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,p.kt)(o.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,p.kt)(o.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:s,Badge:m};function y(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Describes what type of content the entity is"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupplierProductContentType {\n  IMAGE\n  VIDEO\n}\n")),(0,p.kt)("h3",{id:"values"},"Values"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplierproductcontenttypebimagebcode"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductContentType.",(0,p.kt)("b",null,"IMAGE")))),(0,p.kt)("blockquote",null),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplierproductcontenttypebvideobcode"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplierProductContentType.",(0,p.kt)("b",null,"VIDEO")))),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product-content-item"},(0,p.kt)("inlineCode",{parentName:"a"},"PublicSupplierProductContentItem")),"  ",(0,p.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);