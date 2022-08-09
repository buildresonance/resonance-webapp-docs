"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[11318],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return y}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),f=s(r),y=p,d=f["".concat(l,".").concat(y)]||f[y]||c[y]||i;return r?n.createElement(d,a(a({ref:t},o),{},{components:r})):n.createElement(d,a({ref:t},o))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:p,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},81338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(87462),p=r(63366),i=(r(67294),r(3905)),a=["components"],u={id:"supply-entity-status-filter-input",title:"SupplyEntityStatusFilterInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supply-entity-status-filter-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supply-entity-status-filter-input",title:"SupplyEntityStatusFilterInput",description:"Filter Supply Entities using Status.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supply-entity-status-filter-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supply-entity-status-filter-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supply-entity-status-filter-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supply-entity-status-filter-input.mdx",tags:[],version:"current",frontMatter:{id:"supply-entity-status-filter-input",title:"SupplyEntityStatusFilterInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"SupplierVariantWeightInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-weight-input"},next:{title:"SupplyEventSubscriptionCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supply-event-subscription-create-input"}},o={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>operator</code> (<code>FilterOperator</code>)",id:"operator-filteroperator",level:4},{value:"<code>values</code> (<code>[SupplyEntityStatus!]!</code>)",id:"values-supplyentitystatus",level:4}],f={toc:c};function y(e){var t=e.components,r=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filter Supply Entities using Status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplyEntityStatusFilterInput {\n  operator: FilterOperator\n  values: [SupplyEntityStatus!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"operator-filteroperator"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"operator"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/filter-operator"},(0,i.kt)("inlineCode",{parentName:"a"},"FilterOperator")),")"),(0,i.kt)("h4",{id:"values-supplyentitystatus"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"values"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supply-entity-status"},(0,i.kt)("inlineCode",{parentName:"a"},"[SupplyEntityStatus!]!")),")"))}y.isMDXComponent=!0}}]);