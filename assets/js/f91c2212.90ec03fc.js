"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[75429],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,g=f["".concat(l,".").concat(d)]||f[d]||c[d]||p;return t?n.createElement(g,a(a({ref:r},u),{},{components:t})):n.createElement(g,a({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<p;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},99840:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=t(87462),i=t(63366),p=(t(67294),t(3905)),a=["components"],o={id:"string-filter-input",title:"StringFilterInput"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input",title:"StringFilterInput",description:"Filter using a combination of operator and an array of string values",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"string-filter-input",title:"StringFilterInput"},sidebar:"apisSidebar",previous:{title:"PurchaseOrderNotificationInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/purchase-order-notification-input"},next:{title:"SupplierCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>operator</code> (<code>FilterOperator</code>)",id:"operator-filteroperator",level:4},{value:"<code>values</code> (<code>String</code>)",id:"values-string",level:4}],f={toc:c};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Filter using a combination of operator and an array of string values"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input StringFilterInput {\n  operator: FilterOperator\n  values: [String!]!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"operator-filteroperator"},(0,p.kt)("inlineCode",{parentName:"h4"},"operator")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/filter-operator"},(0,p.kt)("inlineCode",{parentName:"a"},"FilterOperator")),")"),(0,p.kt)("h4",{id:"values-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"values")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);