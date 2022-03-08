"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[291],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var p=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=p.createContext({}),l=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=l(e.components);return p.createElement(o.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,m=d["".concat(o,".").concat(f)]||d[f]||s[f]||i;return t?p.createElement(m,u(u({ref:r},c),{},{components:t})):p.createElement(m,u({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,u=new Array(i);u[0]=d;var a={};for(var o in r)hasOwnProperty.call(r,o)&&(a[o]=r[o]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var l=2;l<i;l++)u[l]=t[l];return p.createElement.apply(null,u)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5847:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return l},assets:function(){return c},toc:function(){return s},default:function(){return f}});var p=t(7462),n=t(3366),i=(t(7294),t(3905)),u=["components"],a={id:"create-supplier-product",title:"createSupplierProduct"},o=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product",title:"createSupplierProduct",description:"Create a new SupplierProduct",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier-product",title:"createSupplierProduct"},sidebar:"apisSidebar",previous:{title:"createSupplierProductLocale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-product-locale"},next:{title:"createSupplierQuickLink",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-quick-link"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierProductCreateInput</code>)",id:"input-supplierproductcreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierProduct</code>",id:"supplierproduct",level:4}],d={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,u);return(0,i.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a new SupplierProduct"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplierProduct(\n  input: SupplierProductCreateInput!\n): SupplierProduct!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-supplierproductcreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProductCreateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierproduct"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierProduct"))),(0,i.kt)("p",null,"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs.\nSKUs are represented by SupplierVariants, a child of this entity.\nThis entity is less frequently updated, it is more likely that SupplyVariant will be updated frequently."))}f.isMDXComponent=!0}}]);