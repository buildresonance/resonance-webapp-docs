"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6046],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return g}});var p=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,p,a=function(e,r){if(null==e)return{};var t,p,a={},n=Object.keys(e);for(p=0;p<n.length;p++)t=n[p],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)t=n[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=p.createContext({}),s=function(e){var r=p.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return p.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},c=p.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=a,f=c["".concat(o,".").concat(g)]||c[g]||u[g]||n;return t?p.createElement(f,i(i({ref:r},d),{},{components:t})):p.createElement(f,i({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=c;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=t[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}c.displayName="MDXCreateElement"},11435:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var p=t(87462),a=t(63366),n=(t(67294),t(3905)),i=["components"],l={id:"supplier-product-tags",title:"SupplierProductTags"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-tags",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-tags",title:"SupplierProductTags",description:"Categories and other groupings that apply to this product.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-tags.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-tags",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-tags",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-tags.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-tags",title:"SupplierProductTags"},sidebar:"apisSidebar",previous:{title:"SupplierProductLocale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-locale"},next:{title:"SupplierProductTermAggregations",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-term-aggregations"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>parsed</code> (<code>ParsedTag</code>)",id:"parsed-parsedtag",level:4},{value:"<code>raw</code> (<code>String</code>)",id:"raw-string",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID</code>)",id:"supplierproductid-id",level:4},{value:"<code>updatedAt</code> (<code>Date</code>)",id:"updatedat-date",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4}],c={toc:u};function g(e){var r=e.components,t=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,p.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Categories and other groupings that apply to this product."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierProductTags {\n  parsed(\n  category: String\n  key: String\n): ParsedTag\n  raw: [String!]\n  supplierId: ID!\n  supplierProductId: ID!\n  updatedAt: Date!\n  updatedBy: ID!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"parsed-parsedtag"},(0,n.kt)("inlineCode",{parentName:"h4"},"parsed")," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/parsed-tag"},(0,n.kt)("inlineCode",{parentName:"a"},"ParsedTag")),")"),(0,n.kt)("p",null,"Get parsed, and optionally filtered, tags for a SupplierProduct."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"category-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"category")," (",(0,n.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,n.kt)("p",null,"Optionally filter tags by category."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"key-string"},(0,n.kt)("inlineCode",{parentName:"h5"},"key")," (",(0,n.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,n.kt)("p",null,"Optionally filter tags by key. If category is not provided, but key is, category must be null to be returned."),(0,n.kt)("h4",{id:"raw-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"raw")," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"supplierid-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,n.kt)("h4",{id:"supplierproductid-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"supplierProductId")," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,n.kt)("h4",{id:"updatedat-date"},(0,n.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/date"},(0,n.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,n.kt)("h4",{id:"updatedby-id"},(0,n.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,n.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID")),")"))}g.isMDXComponent=!0}}]);