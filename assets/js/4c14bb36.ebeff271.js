"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[93516],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),u=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,d=m["".concat(o,".").concat(f)]||m[f]||c[f]||p;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80692:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=t(87462),a=t(63366),p=(t(67294),t(3905)),i=["components"],l={id:"create-supplier-variant-image-from-url",title:"createSupplierVariantImageFromUrl"},o=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url",title:"createSupplierVariantImageFromUrl",description:"Create an Image SupplierVariantContentItem from a URL",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-url.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-variant-image-from-url",title:"createSupplierVariantImageFromUrl"},sidebar:"apisSidebar",previous:{title:"createSupplierVariantImageFromFile",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-image-from-file"},next:{title:"createSupplierVariantLocale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant-locale"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierVariantImageFromUrlInput</code>)",id:"input-suppliervariantimagefromurlinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierVariantContentItem</code>",id:"suppliervariantcontentitem",level:4}],m={toc:c};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create an Image SupplierVariantContentItem from a URL"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierVariantImageFromUrl(\n  input: SupplierVariantImageFromUrlInput\n): SupplierVariantContentItem\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-suppliervariantimagefromurlinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-url-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantImageFromUrlInput")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"suppliervariantcontentitem"},(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentItem"))),(0,p.kt)("p",null,"This has a many to one relationship with SupplierVariant, and provides a connection to the CDN items."))}f.isMDXComponent=!0}}]);