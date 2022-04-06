"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[188],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Rate Limiting",sidebar_position:3},l="Rate Limiting",u={unversionedId:"developers/rate-limiting",id:"developers/rate-limiting",title:"Rate Limiting",description:"All APIs are rate limited. Any information on this page will be true for every request unless the individual route specifies otherwise.",source:"@site/docs/developers/rate-limiting.md",sourceDirName:"developers",slug:"/developers/rate-limiting",permalink:"/developers/rate-limiting",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/rate-limiting.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Rate Limiting",sidebar_position:3}},c={},p=[{value:"Fixed-Window",id:"fixed-window",level:2},{value:"Admin APIs (Demand, Supply)",id:"admin-apis-demand-supply",level:2},{value:"Storefront API",id:"storefront-api",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,o.kt)("p",null,"All APIs are rate limited. Any information on this page will be true for every request unless the individual route specifies otherwise."),(0,o.kt)("h2",{id:"fixed-window"},"Fixed-Window"),(0,o.kt)("p",null,"We utilize fixed-window rate limiting. In layman's terms, this means that it is based on a clock, not when the user or app takes action. As in, a minute starts at :00 seconds and ends at :59 seconds. This is a simple method of rate limiting that decreases overhead, but does allow for large bursts of API calls if they occur at the end and beginning of a minute. To counteract this, we keep the time period the window lasts short (1 minute). To make it easy on our developers, the limits are quite generous."),(0,o.kt)("h2",{id:"admin-apis-demand-supply"},"Admin APIs (Demand, Supply)"),(0,o.kt)("p",null,"The rate limit is applied per identity (app client ID), and is set at 1000 calls/min."),(0,o.kt)("p",null,"Because we have high limits, we reserve the right to contact and potentially throttle apps that are consistently using the entire limit, but 99.99% of use cases should never get close. If you feel your app is particularly chatty, please contact us for ideas and reassurances that this will not occur."),(0,o.kt)("h2",{id:"storefront-api"},"Storefront API"),(0,o.kt)("p",null,"The Storefront API has extremely high limits, but is subject to fair use. Please ensure you are using it responsibly (caching and bot control where possible), as we reserve the right to the right to impose smaller limits on extreme use."))}m.isMDXComponent=!0}}]);