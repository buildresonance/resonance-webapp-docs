"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[70646],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<i;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},28926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),p=["components"],o={id:"update-variant",title:"updateVariant"},d=void 0,u={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variant",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variant",title:"updateVariant",description:"Update an existing variant",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variant.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variant",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variant",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variant.mdx",tags:[],version:"current",frontMatter:{id:"update-variant",title:"updateVariant"},sidebar:"apisSidebar",previous:{title:"updateStorefront",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-storefront"},next:{title:"updateVariants",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-variants"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>VariantUpdateInput</code>)",id:"input-variantupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Variant</code>",id:"variant",level:4}],s={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Update an existing variant"),(0,i.kt)("p",null,"Requires variant/write permission on the associated demandHq for the requesting identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"updateVariant(\n  input: VariantUpdateInput!\n): Variant!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-variantupdateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/variant-update-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantUpdateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"variant"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant"},(0,i.kt)("inlineCode",{parentName:"a"},"Variant"))),(0,i.kt)("p",null,"The main item of the Supplier Domain, represents a single SKU of a product\nOnly the variant level exists, there is no parent product."))}m.isMDXComponent=!0}}]);