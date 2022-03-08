"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[1671],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(n),m=o,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7989:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},p="DemandHQ Concepts",s={unversionedId:"concepts/demand-hq/demand-hq-concepts",id:"concepts/demand-hq/demand-hq-concepts",title:"DemandHQ Concepts",description:"DemandHQs are where goods are sold. DemandHQs are composed of one to many storefronts. These can be things like websites, mobile apps, or other, 3rd party marketplaces. Typical DemandHQ actions include requesting and implementing supplierVariants into their products, adjusting prices, and creating product content. Sample important metrics are quantity sold and price. A DemandHQ must be populated by Suppliers. Every order placed on a storefront will be routed to a Supplier for delivery. The payment will be split between the Supplier and the DemandHQ according to the Cost dictated by the Supplier.",source:"@site/docs/concepts/demand-hq/demand-hq-concepts.md",sourceDirName:"concepts/demand-hq",slug:"/concepts/demand-hq/demand-hq-concepts",permalink:"/concepts/demand-hq/demand-hq-concepts",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/demand-hq/demand-hq-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"conceptsSidebar",previous:{title:"Supplier Permissions (SupplierIdentity)",permalink:"/concepts/suppliers/permissions"}},d={},u=[{value:"Subscriptions",id:"subscriptions",level:2}],l={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"demandhq-concepts"},"DemandHQ Concepts"),(0,a.kt)("p",null,"DemandHQs are where goods are sold. DemandHQs are composed of one to many storefronts. These can be things like websites, mobile apps, or other, 3rd party marketplaces. Typical DemandHQ actions include requesting and implementing supplierVariants into their products, adjusting prices, and creating product content. Sample important metrics are quantity sold and price. ",(0,a.kt)("strong",{parentName:"p"},"A DemandHQ must be populated by Suppliers"),". Every order placed on a storefront will be routed to a Supplier for delivery. The payment will be split between the Supplier and the DemandHQ according to the Cost dictated by the Supplier."),(0,a.kt)("p",null,"DK: How is shipping handled?"),(0,a.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,a.kt)("p",null,"DemandHQs require having a subscription in order to activate. This subscription can be purchased once you create your DemandHQ."))}m.isMDXComponent=!0}}]);