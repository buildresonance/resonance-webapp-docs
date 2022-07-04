"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[32549],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=p,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:p,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49088:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),p=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",hide_table_of_contents:!1},a=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",description:"Delete an existing SupplierProductContentItem",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"deleteSupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-identity"},next:{title:"deleteSupplierProductCustomData",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/delete-supplier-product-custom-data"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>contentItemId</code> (<code>ID!</code>)",id:"contentitemid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID!</code>)",id:"supplierproductid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierProductContentItemDeleteResponse</code>",id:"supplierproductcontentitemdeleteresponse",level:4}],d={toc:s};function m(e){var t=e.components,r=(0,p.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Delete an existing SupplierProductContentItem"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierProductContentItem(\n  contentItemId: ID!\n  supplierProductId: ID!\n): SupplierProductContentItemDeleteResponse!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"contentitemid-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"contentItemId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h4",{id:"supplierproductid-id"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"supplierProductId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"supplierproductcontentitemdeleteresponse"},(0,o.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-content-item-delete-response"},(0,o.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemDeleteResponse"))),(0,o.kt)("p",null,"The response type for deleteSupplierProductContentItem"))}m.isMDXComponent=!0}}]);