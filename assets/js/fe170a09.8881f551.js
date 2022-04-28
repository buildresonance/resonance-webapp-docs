"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[40950],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=p.createContext({}),o=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=o(e.components);return p.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},f=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=o(t),d=n,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||i;return t?p.createElement(m,a(a({ref:r},s),{},{components:t})):p.createElement(m,a({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var o=2;o<i;o++)a[o]=t[o];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9480:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return c}});var p=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],u={id:"create-supplier",title:"createSupplier"},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier",title:"createSupplier",description:"Create a new supplier",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier.mdx",tags:[],version:"current",frontMatter:{id:"create-supplier",title:"createSupplier"},sidebar:"apisSidebar",previous:{title:"createSupplierVariant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supplier-variant"},next:{title:"createSupplyEventSubscription",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/create-supply-event-subscription"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierCreateInput</code>)",id:"input-suppliercreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Supplier</code>",id:"supplier",level:4}],f={toc:c};function d(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,p.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a new supplier"),(0,i.kt)("p",null,"Requires supplier/write permission on the requesting identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createSupplier(\n  input: SupplierCreateInput!\n): Supplier!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-suppliercreateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierCreateInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplier"},(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier"},(0,i.kt)("inlineCode",{parentName:"a"},"Supplier"))),(0,i.kt)("p",null,"The parent-most entity of the Supplier Domain"))}d.isMDXComponent=!0}}]);