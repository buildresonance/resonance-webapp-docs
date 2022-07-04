"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[22431],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),m=a,f=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},42336:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"merge-device-cart-into-customer-cart",title:"mergeDeviceCartIntoCustomerCart",hide_table_of_contents:!1},s=void 0,d={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart",id:"developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart",title:"mergeDeviceCartIntoCustomerCart",description:"Merge a device cart into a customer cart. This is primarily done when an anonymous user logs in.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/mutations/merge-device-cart-into-customer-cart.mdx",tags:[],version:"current",frontMatter:{id:"merge-device-cart-into-customer-cart",title:"mergeDeviceCartIntoCustomerCart",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"deleteCustomerAddress",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/delete-customer-address"},next:{title:"updateCustomerAddress",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/mutations/update-customer-address"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>customerToken</code> (<code>String!</code>)",id:"customertoken-string",level:4},{value:"<code>deviceId</code> (<code>String!</code>)",id:"deviceid-string",level:4},{value:"Type",id:"type",level:3},{value:"<code>Cart</code>",id:"cart",level:4}],l={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Merge a device cart into a customer cart. This is primarily done when an anonymous user logs in.\nThe device cart will have its items added to the customer cart and then have\nits cartItems cleared. The new customer cart will be returned."),(0,o.kt)("p",null,"Requires the publiccart/write scope and a valid customer authentication token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"mergeDeviceCartIntoCustomerCart(\n  customerToken: String!\n  deviceId: String!\n): Cart!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"customertoken-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"customerToken"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"deviceid-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"deviceId"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"cart"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/cart"},(0,o.kt)("inlineCode",{parentName:"a"},"Cart"))),(0,o.kt)("p",null,"A cart is a temporary container for products that a customer or anonymous user wants to buy"))}m.isMDXComponent=!0}}]);