"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[16382],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(67294);function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){p(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,p=function(e,r){if(null==e)return{};var n,t,p={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(p[n]=e[n]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=p,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function f(e,r){var n=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1492:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var t=n(87462),p=n(63366),i=(n(67294),n(3905)),a=["components"],o={id:"supplier-create-input",title:"SupplierCreateInput"},s=void 0,l={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input",title:"SupplierCreateInput",description:"The necessary fields in order to create a new supplier",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-create-input",title:"SupplierCreateInput"},sidebar:"apisSidebar",previous:{title:"StringFilterInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input"},next:{title:"SupplierIdentityCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-identity-create-input"}},c={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>category</code> (<code>SupplierCategory</code>)",id:"category-suppliercategory",level:4},{value:"<code>defaultCurrency</code> (<code>ResonanceCurrency</code>)",id:"defaultcurrency-resonancecurrency",level:4},{value:"<code>defaultLocaleType</code> (<code>ResonanceLocaleType</code>)",id:"defaultlocaletype-resonancelocaletype",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>inStockProducts</code> (<code>Int</code>)",id:"instockproducts-int",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>SupplierNotificationUserNamesInput</code>)",id:"notificationusernames-suppliernotificationusernamesinput",level:4},{value:"<code>shipFromAddress</code> (<code>AddressInput</code>)",id:"shipfromaddress-addressinput",level:4},{value:"<code>topVendors</code> (<code>String</code>)",id:"topvendors-string",level:4}],d={toc:u};function f(e){var r=e.components,n=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new supplier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierCreateInput {\n  category: SupplierCategory\n  defaultCurrency: ResonanceCurrency!\n  defaultLocaleType: ResonanceLocaleType!\n  description: String\n  inStockProducts: Int\n  name: String!\n  notificationUserNames: SupplierNotificationUserNamesInput\n  shipFromAddress: AddressInput\n  topVendors: [String!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"category-suppliercategory"},(0,i.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-category"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierCategory")),")"),(0,i.kt)("p",null,"Indicates the vertical the majority of a Supplier's goods are in."),(0,i.kt)("h4",{id:"defaultcurrency-resonancecurrency"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultCurrency")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-currency"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency")),")"),(0,i.kt)("h4",{id:"defaultlocaletype-resonancelocaletype"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultLocaleType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"instockproducts-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"inStockProducts")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The approximate number of in stock products this Supplier has on a typical basis."),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"notificationusernames-suppliernotificationusernamesinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-notification-user-names-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierNotificationUserNamesInput")),")"),(0,i.kt)("p",null,"These users will get notified if something requires attention for this Supplier.\nIf none are provided, ownerUserName will be notified."),(0,i.kt)("h4",{id:"shipfromaddress-addressinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"shipFromAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/address-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AddressInput")),")"),(0,i.kt)("p",null,"The address where this Supplier's goods ship from."),(0,i.kt)("h4",{id:"topvendors-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"topVendors")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The top Brands or Vendors this Supplier carries, limit 5 and 256 characters each."))}f.isMDXComponent=!0}}]);