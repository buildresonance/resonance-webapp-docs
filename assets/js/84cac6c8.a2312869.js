"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[55978],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=p.createContext({}),s=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return p.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||i;return t?p.createElement(m,a(a({ref:r},l),{},{components:t})):p.createElement(m,a({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60054:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var p=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],u={id:"supplier-product-custom-data-upsert-input",title:"SupplierProductCustomDataUpsertInput"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input",title:"SupplierProductCustomDataUpsertInput",description:"The input type to upsert SupplierProductCustomData.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-custom-data-upsert-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-custom-data-upsert-input",title:"SupplierProductCustomDataUpsertInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input"},next:{title:"SupplierProductImageFromFileInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-image-from-file-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>JSON</code>)",id:"data-json",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID</code>)",id:"supplierproductid-id",level:4}],d={toc:c};function f(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The input type to upsert SupplierProductCustomData.\nThe data object is required, but is a partial update, and keys not mentioned will be left alone."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductCustomDataUpsertInput {\n  data: JSON!\n  supplierId: ID!\n  supplierProductId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"data-json"},(0,i.kt)("inlineCode",{parentName:"h4"},"data")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/json"},(0,i.kt)("inlineCode",{parentName:"a"},"JSON")),")"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"supplierproductid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}f.isMDXComponent=!0}}]);