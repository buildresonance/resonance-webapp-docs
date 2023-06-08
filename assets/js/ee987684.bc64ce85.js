"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[24041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=n,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49705:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=r(87462),n=r(67294),o=r(3905);const c={id:"create-product-locale",title:"createProductLocale",hide_table_of_contents:!1},l=void 0,d={unversionedId:"demand/api/graphql-admin/reference/mutations/create-product-locale",id:"demand/api/graphql-admin/reference/mutations/create-product-locale",title:"createProductLocale",description:"Create a new productLocale.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/create-product-locale.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/create-product-locale",permalink:"/demand/api/graphql-admin/reference/mutations/create-product-locale",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/create-product-locale.mdx",tags:[],version:"current",frontMatter:{id:"create-product-locale",title:"createProductLocale",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"createProductImagesFromFiles",permalink:"/demand/api/graphql-admin/reference/mutations/create-product-images-from-files"},next:{title:"createProduct",permalink:"/demand/api/graphql-admin/reference/mutations/create-product"}},i={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createProductLocale.<b>input</b></code><Bullet /><code>ProductLocaleCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createproductlocalebinputbcodeproductlocalecreateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ProductLocale</code> <Badge class="secondary" text="object"/>',id:"productlocale-",level:4}],u=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:s,Badge:m};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a new productLocale."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createProductLocale(\n  input: ProductLocaleCreateInput!\n): ProductLocale!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createproductlocalebinputbcodeproductlocalecreateinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createProductLocale.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/product-locale-create-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductLocaleCreateInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"productlocale-"},(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/product-locale"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductLocale"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This has a many to one relationship with Product, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier.")))}g.isMDXComponent=!0}}]);