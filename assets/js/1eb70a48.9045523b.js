"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[98209],{3905:function(e,n,p){p.d(n,{Zo:function(){return s},kt:function(){return f}});var t=p(67294);function r(e,n,p){return n in e?Object.defineProperty(e,n,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[n]=p,e}function i(e,n){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),p.push.apply(p,t)}return p}function a(e){for(var n=1;n<arguments.length;n++){var p=null!=arguments[n]?arguments[n]:{};n%2?i(Object(p),!0).forEach((function(n){r(e,n,p[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(p,n))}))}return e}function o(e,n){if(null==e)return{};var p,t,r=function(e,n){if(null==e)return{};var p,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)p=i[t],n.indexOf(p)>=0||(r[p]=e[p]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)p=i[t],n.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(r[p]=e[p])}return r}var u=t.createContext({}),l=function(e){var n=t.useContext(u),p=n;return e&&(p="function"==typeof e?e(n):a(a({},n),e)),p},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var p=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(p),f=r,v=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return p?t.createElement(v,a(a({ref:n},s),{},{components:p})):t.createElement(v,a({ref:n},s))}));function f(e,n){var p=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=p.length,a=new Array(i);a[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=p[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},1337:function(e,n,p){p.r(n),p.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var t=p(87462),r=p(63366),i=(p(67294),p(3905)),a=["components"],o={id:"supplier-variant-options-input",title:"SupplierVariantOptionsInput"},u=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input",title:"SupplierVariantOptionsInput",description:"Input for SupplierVariantOptions, with 2 and 3 being optional.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-options-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-options-input",title:"SupplierVariantOptionsInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantOptionInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input"},next:{title:"SupplierVariantShippingDimensionsInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-shipping-dimensions-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>option1</code> (<code>SupplierVariantOptionInput</code>)",id:"option1-suppliervariantoptioninput",level:4},{value:"<code>option2</code> (<code>SupplierVariantOptionInput</code>)",id:"option2-suppliervariantoptioninput",level:4},{value:"<code>option3</code> (<code>SupplierVariantOptionInput</code>)",id:"option3-suppliervariantoptioninput",level:4}],d={toc:c};function f(e){var n=e.components,p=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Input for SupplierVariantOptions, with 2 and 3 being optional.\nVariantTitle is created by joining these values with " - " separating, i.e. "Blue - Small - Youth"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantOptionsInput {\n  option1: SupplierVariantOptionInput!\n  option2: SupplierVariantOptionInput\n  option3: SupplierVariantOptionInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"option1-suppliervariantoptioninput"},(0,i.kt)("inlineCode",{parentName:"h4"},"option1")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantOptionInput")),")"),(0,i.kt)("h4",{id:"option2-suppliervariantoptioninput"},(0,i.kt)("inlineCode",{parentName:"h4"},"option2")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantOptionInput")),")"),(0,i.kt)("h4",{id:"option3-suppliervariantoptioninput"},(0,i.kt)("inlineCode",{parentName:"h4"},"option3")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantOptionInput")),")"))}f.isMDXComponent=!0}}]);