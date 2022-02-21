"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6645],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||p;return t?n.createElement(y,o(o({ref:r},s),{},{components:t})):n.createElement(y,o({ref:r},s))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,o=new Array(p);o[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var l=2;l<p;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7662:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=t(7462),i=t(3366),p=(t(7294),t(3905)),o=["components"],a={id:"purchase-order-notification",title:"PurchaseOrderNotification"},c=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification",id:"developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification",title:"PurchaseOrderNotification",description:"The full notification object. Endpoint may vary based on type, but is always a string (url, email,etc).",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification.mdx",tags:[],version:"current",frontMatter:{id:"purchase-order-notification",title:"PurchaseOrderNotification"},sidebar:"apisSidebar",previous:{title:"PublicIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-identity"},next:{title:"SupplierConnection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-connection"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>endpoint</code> (String)",id:"endpoint-string",children:[],level:4},{value:"<code>type</code> (PurchaseOrderNotificationType)",id:"type-purchaseordernotificationtype",children:[],level:4}],level:3}],u={toc:s};function d(e){var r=e.components,t=(0,i.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The full notification object. Endpoint may vary based on type, but is always a string (url, email,etc)."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type PurchaseOrderNotification {\n  endpoint: String!\n  type: PurchaseOrderNotificationType!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"endpoint-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"endpoint")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"type-purchaseordernotificationtype"},(0,p.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/purchase-order-notification-type"},(0,p.kt)("inlineCode",{parentName:"a"},"PurchaseOrderNotificationType")),")"))}d.isMDXComponent=!0}}]);