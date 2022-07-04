"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[34645],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(i,".").concat(m)]||u[m]||l[m]||s;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=u;var d={};for(var i in r)hasOwnProperty.call(r,i)&&(d[i]=r[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33470:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return l}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],d={id:"delete-customer-address",title:"deleteCustomerAddress",hide_table_of_contents:!1},i=void 0,c={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address",id:"developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address",title:"deleteCustomerAddress",description:"Deletes a CustomerAddress",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address.mdx",tags:[],version:"current",frontMatter:{id:"delete-customer-address",title:"deleteCustomerAddress",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"createCustomerAddress",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/create-customer-address"},next:{title:"mergeDeviceCartIntoCustomerCart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>customerAddressId</code> (<code>ID!</code>)",id:"customeraddressid-id",level:4},{value:"<code>customerToken</code> (<code>String!</code>)",id:"customertoken-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>DeleteCustomerAddressResponse</code>",id:"deletecustomeraddressresponse",level:4}],u={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Deletes a CustomerAddress"),(0,s.kt)("p",null,"Requires the customeraddress/write scope on the associated DemandHq."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteCustomerAddress(\n  customerAddressId: ID!\n  customerToken: String!\n): DeleteCustomerAddressResponse!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"customeraddressid-id"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"customerAddressId"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/id"},(0,s.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,s.kt)("h4",{id:"customertoken-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"customerToken"))," (",(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"deletecustomeraddressresponse"},(0,s.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/delete-customer-address-response"},(0,s.kt)("inlineCode",{parentName:"a"},"DeleteCustomerAddressResponse"))),(0,s.kt)("p",null,"Returned object from deleteCustomerAddress"))}m.isMDXComponent=!0}}]);