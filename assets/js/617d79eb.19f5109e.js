"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[90825],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),o=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=o(e.components);return a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=o(t),m=n,v=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(v,p(p({ref:r},s),{},{components:t})):a.createElement(v,p({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=c;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},72650:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u}});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),p=["components"],l={id:"delete-variant-supplier-variant",title:"deleteVariantSupplierVariant",hide_table_of_contents:!1},d=void 0,o={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant-supplier-variant",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant-supplier-variant",title:"deleteVariantSupplierVariant",description:"Delete a VariantSupplierVariant",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant-supplier-variant.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant-supplier-variant",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant-supplier-variant",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant-supplier-variant.mdx",tags:[],version:"current",frontMatter:{id:"delete-variant-supplier-variant",title:"deleteVariantSupplierVariant",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"deleteProduct",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-product"},next:{title:"deleteVariant",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-variant"}},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>supplierVariantId</code> (<code>ID!</code>)",id:"suppliervariantid-id",level:4},{value:"<code>variantId</code> (<code>ID!</code>)",id:"variantid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>VariantSupplierVariantDeleteResponse</code>",id:"variantsuppliervariantdeleteresponse",level:4}],c={toc:u};function m(e){var r=e.components,t=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Delete a VariantSupplierVariant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteVariantSupplierVariant(\n  supplierVariantId: ID!\n  variantId: ID!\n): VariantSupplierVariantDeleteResponse!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"suppliervariantid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"supplierVariantId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"variantid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variantId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"variantsuppliervariantdeleteresponse"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant-supplier-variant-delete-response"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantDeleteResponse"))),(0,i.kt)("p",null,"Response from deleting a VariantSupplierVariant"))}m.isMDXComponent=!0}}]);