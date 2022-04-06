"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8359],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return k}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=u(r),k=i,m=c["".concat(s,".").concat(k)]||c[k]||d[k]||p;return r?n.createElement(m,a(a({ref:t},o),{},{components:r})):n.createElement(m,a({ref:t},o))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33856:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return o},toc:function(){return d},default:function(){return k}});var n=r(87462),i=r(63366),p=(r(67294),r(3905)),a=["components"],l={id:"supplier",title:"Supplier"},s=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier",title:"Supplier",description:"The parent-most entity of the Supplier Domain",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier.mdx",tags:[],version:"current",frontMatter:{id:"supplier",title:"Supplier"},sidebar:"apisSidebar",previous:{title:"SupplierVariant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant"},next:{title:"SupplyEventConnection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection"}},o={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>category</code> (<code>SupplierCategory</code>)",id:"category-suppliercategory",level:4},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>defaultCurrency</code> (<code>ResonanceCurrency</code>)",id:"defaultcurrency-resonancecurrency",level:4},{value:"<code>defaultLocaleType</code> (<code>ResonanceLocaleType</code>)",id:"defaultlocaletype-resonancelocaletype",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>inStockProducts</code> (<code>Int</code>)",id:"instockproducts-int",level:4},{value:"<code>mySupplyEventSubscriptions</code> (<code>SupplyEventSubscriptionConnection</code>)",id:"mysupplyeventsubscriptions-supplyeventsubscriptionconnection",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>SupplierNotificationUserNames</code>)",id:"notificationusernames-suppliernotificationusernames",level:4},{value:"<code>ownerUserName</code> (<code>String</code>)",id:"ownerusername-string",level:4},{value:"<code>quickLink</code> (<code>SupplierQuickLink</code>)",id:"quicklink-supplierquicklink",level:4},{value:"<code>quickLinks</code> (<code>SupplierQuickLinkConnection</code>)",id:"quicklinks-supplierquicklinkconnection",level:4},{value:"<code>status</code> (<code>SupplierStatus</code>)",id:"status-supplierstatus",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>supplierIdentities</code> (<code>SupplierIdentityConnection</code>)",id:"supplieridentities-supplieridentityconnection",level:4},{value:"<code>supplierIdentity</code> (<code>SupplierIdentity</code>)",id:"supplieridentity-supplieridentity",level:4},{value:"<code>supplierProduct</code> (<code>SupplierProduct</code>)",id:"supplierproduct-supplierproduct",level:4},{value:"<code>supplierProductTermAggregations</code> (<code>SupplierProductTermAggregations</code>)",id:"supplierproducttermaggregations-supplierproducttermaggregations",level:4},{value:"<code>supplierProducts</code> (<code>SupplierProductConnectionWithSearch</code>)",id:"supplierproducts-supplierproductconnectionwithsearch",level:4},{value:"<code>topVendors</code> (<code>String</code>)",id:"topvendors-string",level:4},{value:"<code>updatedAt</code> (<code>String</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4}],c={toc:d};function k(e){var t=e.components,r=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The parent-most entity of the Supplier Domain"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type Supplier {\n  category: SupplierCategory\n  createdAt: String!\n  defaultCurrency: ResonanceCurrency!\n  defaultLocaleType: ResonanceLocaleType!\n  description: String\n  inStockProducts: Int\n  mySupplyEventSubscriptions(\n  after: String\n  before: String\n  first: Int\n  itemType: String\n  last: Int\n  mutationType: SupplyEventMutationType\n): SupplyEventSubscriptionConnection!\n  name: String!\n  notificationUserNames: SupplierNotificationUserNames\n  ownerUserName: String!\n  quickLink(\n  appId: ID!\n  quickLinkType: SupplierQuickLinkType!\n): SupplierQuickLink\n  quickLinks(\n  after: String\n  before: String\n  first: Int\n  last: Int\n  quickLinkType: SupplierQuickLinkType!\n): SupplierQuickLinkConnection!\n  status: SupplierStatus!\n  supplierId: ID!\n  supplierIdentities(\n  after: String\n  before: String\n  first: Int\n  identityParentEntityId: ID\n  identityType: SupplierIdentityType\n  last: Int\n): SupplierIdentityConnection!\n  supplierIdentity(\n  identityId: ID!\n  supplierId: ID!\n): SupplierIdentity\n  supplierProduct(\n  supplierProductId: ID!\n): SupplierProduct\n  supplierProductTermAggregations(\n  numberOfResults: Int!\n): SupplierProductTermAggregations\n  supplierProducts(\n  after: String\n  before: String\n  cost: [FloatRangeFilterInput]\n  first: Int\n  inventoryPolicy: [SupplierProductInventoryPolicyFilterInput]\n  inventoryStatus: SupplierVariantInventoryStatus\n  last: Int\n  manufacturer: [StringFilterInput]\n  msrp: [FloatRangeFilterInput]\n  query: String\n  recommendedPrice: [FloatRangeFilterInput]\n  sortOrder: [SupplierProductSortInput]\n  standardizedColor: [SupplierProductStandardizedColorFilterInput]\n  status: SupplierProductStatusFilterInput\n  tags: [StringFilterInput]\n  vendor: StringFilterInput\n): SupplierProductConnectionWithSearch!\n  topVendors: [String!]\n  updatedAt: String!\n  updatedBy: ID!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"category-suppliercategory"},(0,p.kt)("inlineCode",{parentName:"h4"},"category")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-category"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierCategory")),")"),(0,p.kt)("p",null,"Indicates the vertical the majority of a Supplier's goods are in."),(0,p.kt)("h4",{id:"createdat-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"defaultcurrency-resonancecurrency"},(0,p.kt)("inlineCode",{parentName:"h4"},"defaultCurrency")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-currency"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency")),")"),(0,p.kt)("h4",{id:"defaultlocaletype-resonancelocaletype"},(0,p.kt)("inlineCode",{parentName:"h4"},"defaultLocaleType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,p.kt)("h4",{id:"description-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"instockproducts-int"},(0,p.kt)("inlineCode",{parentName:"h4"},"inStockProducts")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,p.kt)("p",null,"The approximate number of in stock products this Supplier has on a typical basis."),(0,p.kt)("h4",{id:"mysupplyeventsubscriptions-supplyeventsubscriptionconnection"},(0,p.kt)("inlineCode",{parentName:"h4"},"mySupplyEventSubscriptions")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-subscription-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionConnection")),")"),(0,p.kt)("p",null,"List supplyEventSubscriptions by filtering for your identity for this supplier."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"itemtype-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"itemType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"In order to use this filter, you must also provide subscriptionEntityId"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"mutationtype-supplyeventmutationtype"},(0,p.kt)("inlineCode",{parentName:"h5"},"mutationType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supply-event-mutation-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplyEventMutationType")),")"))),(0,p.kt)("p",null,"In order to use this filter, you must also include itemType and subscriptionEntityId"),(0,p.kt)("h4",{id:"name-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"notificationusernames-suppliernotificationusernames"},(0,p.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-notification-user-names"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierNotificationUserNames")),")"),(0,p.kt)("p",null,"These users will get notified if something requires attention for this Supplier.\nIf none are provided, ownerUserName will be notified."),(0,p.kt)("h4",{id:"ownerusername-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"ownerUserName")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"quicklink-supplierquicklink"},(0,p.kt)("inlineCode",{parentName:"h4"},"quickLink")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierQuickLink")),")"),(0,p.kt)("p",null,"Get a single SupplierQuickLink by its ids"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"appid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"appId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"quicklinktype-supplierquicklinktype"},(0,p.kt)("inlineCode",{parentName:"h5"},"quickLinkType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-quick-link-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType")),")"))),(0,p.kt)("h4",{id:"quicklinks-supplierquicklinkconnection"},(0,p.kt)("inlineCode",{parentName:"h4"},"quickLinks")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkConnection")),")"),(0,p.kt)("p",null,"List multiple SupplierQuickLinks for a single SupplierQuickLinkType"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"quicklinktype-supplierquicklinktype-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"quickLinkType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-quick-link-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType")),")"))),(0,p.kt)("h4",{id:"status-supplierstatus"},(0,p.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-status"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierStatus")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"supplieridentities-supplieridentityconnection"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierIdentities")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityConnection")),")"),(0,p.kt)("p",null,"Returns SupplierIdentities for the given Supplier"),(0,p.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"identityparententityid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"identityParentEntityId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("p",null,"Filter the results to a specific identityParentEntityId (optional)"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"identitytype-supplieridentitytype"},(0,p.kt)("inlineCode",{parentName:"h5"},"identityType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-identity-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityType")),")"))),(0,p.kt)("p",null,"Filter the results to a specific identity type (optional)"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("h4",{id:"supplieridentity-supplieridentity"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierIdentity")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentity")),")"),(0,p.kt)("p",null,"Returns a SupplierIdentity for the given Supplier"),(0,p.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity, or you can request your own identity."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"identityId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"supplierid-id-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"supplierId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("h4",{id:"supplierproduct-supplierproduct"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierProduct")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProduct")),")"),(0,p.kt)("p",null,"Get a single SupplierProduct by its ID."),(0,p.kt)("p",null,"Requires supplierproduct/read permission on the requesting identity"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"supplierproductid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"supplierProductId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("h4",{id:"supplierproducttermaggregations-supplierproducttermaggregations"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierProductTermAggregations")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-term-aggregations"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductTermAggregations")),")"),(0,p.kt)("p",null,"Term aggregations for SupplierProducts, typically used to suggest terms to use in Search Filters."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"numberofresults-int"},(0,p.kt)("inlineCode",{parentName:"h5"},"numberOfResults")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"The number of aggregations to return for each type."),(0,p.kt)("h4",{id:"supplierproducts-supplierproductconnectionwithsearch"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierProducts")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-connection-with-search"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductConnectionWithSearch")),")"),(0,p.kt)("p",null,"List SupplierProducts for a Supplier."),(0,p.kt)("p",null,"Requires supplierproduct/read permission on the requesting identity"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string-3"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string-3"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"cost-floatrangefilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"cost")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/float-range-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using cost ranges."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int-3"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"inventorypolicy-supplierproductinventorypolicyfilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"inventoryPolicy")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-inventory-policy-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductInventoryPolicyFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using InventoryPolicy (Variant)."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"inventorystatus-suppliervariantinventorystatus"},(0,p.kt)("inlineCode",{parentName:"h5"},"inventoryStatus")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-inventory-status"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantInventoryStatus")),")"))),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int-3"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"manufacturer-stringfilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"manufacturer")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using Manufacturer (VariantSupplement)."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"msrp-floatrangefilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"msrp")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/float-range-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using MSRP ranges."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"query-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"query")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Query supplierProducts for certain terms. Searches several fields, including\nsupplierProduct.tags, supplierProduct.title, supplierProduct.vendor,\nsupplierProductLocales.description, supplierProductLocales.featureBullets,\nsupplierVariantSupplements.barcode, supplierVariantSupplement.mpn,\nsupplierVariantSupplement.sku"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"recommendedprice-floatrangefilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"recommendedPrice")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/float-range-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"FloatRangeFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using recommendedPrice ranges."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"sortorder-supplierproductsortinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"sortOrder")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-sort-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductSortInput")),")"))),(0,p.kt)("p",null,"Sort SupplierProducts by a series of fields and directions, defaults to CREATED_AT/ASC."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"standardizedcolor-supplierproductstandardizedcolorfilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"standardizedColor")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-standardized-color-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductStandardizedColorFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using StandardizedColor (Variant)."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"status-supplierproductstatusfilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"status")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-status-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductStatusFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using Status."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"tags-stringfilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"tags")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using Tags."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"vendor-stringfilterinput"},(0,p.kt)("inlineCode",{parentName:"h5"},"vendor")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/string-filter-input"},(0,p.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,p.kt)("p",null,"Filter SupplierProducts using Vendors."),(0,p.kt)("h4",{id:"topvendors-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"topVendors")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"The top Brands or Vendors this Supplier carries, limit 5 and 256 characters each."),(0,p.kt)("h4",{id:"updatedat-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"updatedby-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))}k.isMDXComponent=!0}}]);