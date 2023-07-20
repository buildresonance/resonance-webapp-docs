"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[44057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=o,f=u["".concat(i,".").concat(s)]||u[s]||m[s]||a;return n?r.createElement(f,c(c({ref:t},d),{},{components:n})):r.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41847:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(87462),o=n(67294),a=n(3905);const c={id:"product-content-item-source-type",title:"ProductContentItemSourceType",hide_table_of_contents:!1},l=void 0,i={unversionedId:"demand/api/graphql-admin/reference/enums/product-content-item-source-type",id:"demand/api/graphql-admin/reference/enums/product-content-item-source-type",title:"ProductContentItemSourceType",description:"Describes where the content originally was sourced from",source:"@site/docs/demand/api/graphql-admin/reference/enums/product-content-item-source-type.mdx",sourceDirName:"demand/api/graphql-admin/reference/enums",slug:"/demand/api/graphql-admin/reference/enums/product-content-item-source-type",permalink:"/demand/api/graphql-admin/reference/enums/product-content-item-source-type",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/enums/product-content-item-source-type.mdx",tags:[],version:"current",frontMatter:{id:"product-content-item-source-type",title:"ProductContentItemSourceType",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"PageSortField",permalink:"/demand/api/graphql-admin/reference/enums/page-sort-field"},next:{title:"ProductContentType",permalink:"/demand/api/graphql-admin/reference/enums/product-content-type"}},p={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ProductContentItemSourceType.<b>UPLOADMULTIPART</b></code>",id:"code-style-fontweight-normal-productcontentitemsourcetypebuploadmultipartbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductContentItemSourceType.<b>UPLOADSINGLEPART</b></code>",id:"code-style-fontweight-normal-productcontentitemsourcetypebuploadsinglepartbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProductContentItemSourceType.<b>URL</b></code>",id:"code-style-fontweight-normal-productcontentitemsourcetypeburlbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:u,SpecifiedBy:m,Badge:s};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Describes where the content originally was sourced from"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ProductContentItemSourceType {\n  UPLOADMULTIPART\n  UPLOADSINGLEPART\n  URL\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productcontentitemsourcetypebuploadmultipartbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductContentItemSourceType.",(0,a.kt)("b",null,"UPLOADMULTIPART")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productcontentitemsourcetypebuploadsinglepartbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductContentItemSourceType.",(0,a.kt)("b",null,"UPLOADSINGLEPART")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-productcontentitemsourcetypeburlbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProductContentItemSourceType.",(0,a.kt)("b",null,"URL")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product-content-item"},(0,a.kt)("inlineCode",{parentName:"a"},"ProductContentItem")),"  ",(0,a.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);