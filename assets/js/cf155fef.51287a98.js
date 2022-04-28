"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[46213],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||i[m]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=s;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,p[1]=d;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},10161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return i}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],d={id:"update-product-locale",title:"updateProductLocale"},c=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product-locale",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product-locale",title:"updateProductLocale",description:"Update an existing productLocale",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product-locale.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product-locale",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product-locale",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product-locale.mdx",tags:[],version:"current",frontMatter:{id:"update-product-locale",title:"updateProductLocale"},sidebar:"apisSidebar",previous:{title:"updatePage",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-page"},next:{title:"updateProduct",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-product"}},u={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>ProductLocaleUpdateInput</code>)",id:"input-productlocaleupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>ProductLocale</code>",id:"productlocale",level:4}],s={toc:i};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update an existing productLocale"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateProductLocale(\n  input: ProductLocaleUpdateInput!\n): ProductLocale!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-productlocaleupdateinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-locale-update-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductLocaleUpdateInput")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"productlocale"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/product-locale"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductLocale"))),(0,o.kt)("p",null,"This has a many to one relationship with Product, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."))}m.isMDXComponent=!0}}]);