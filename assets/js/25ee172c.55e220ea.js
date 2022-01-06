"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[8359],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},o=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=u(r),h=i,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||p;return r?n.createElement(m,a(a({ref:t},o),{},{components:r})):n.createElement(m,a({ref:t},o))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=r.length,a=new Array(p);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<p;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3856:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return o},default:function(){return c}});var n=r(3117),i=r(102),p=(r(7294),r(3905)),a=["components"],l={id:"supplier",title:"Supplier"},s=void 0,u={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier",title:"Supplier",description:"The parent-most entity of the Supplier Domain",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier.mdx",tags:[],version:"current",frontMatter:{id:"supplier",title:"Supplier"},sidebar:"apisSidebar",previous:{title:"SupplierVariant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant"},next:{title:"SupplyEventConnection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-connection"}},o=[{value:"Fields",id:"fields",children:[{value:"<code>createdAt</code> (String)",id:"createdat-string",children:[],level:4},{value:"<code>defaultCurrency</code> (ResonanceCurrency)",id:"defaultcurrency-resonancecurrency",children:[],level:4},{value:"<code>defaultLocaleType</code> (ResonanceLocaleType)",id:"defaultlocaletype-resonancelocaletype",children:[],level:4},{value:"<code>description</code> (String)",id:"description-string",children:[],level:4},{value:"<code>mySupplyEventSubscriptions</code> (SupplyEventSubscriptionConnection)",id:"mysupplyeventsubscriptions-supplyeventsubscriptionconnection",children:[],level:4},{value:"<code>name</code> (String)",id:"name-string",children:[],level:4},{value:"<code>ownerUserName</code> (String)",id:"ownerusername-string",children:[],level:4},{value:"<code>purchaseOrderNotifications</code> (PurchaseOrderNotification)",id:"purchaseordernotifications-purchaseordernotification",children:[],level:4},{value:"<code>status</code> (SupplierStatus)",id:"status-supplierstatus",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierIdentities</code> (SupplierIdentityConnection)",id:"supplieridentities-supplieridentityconnection",children:[],level:4},{value:"<code>supplierIdentity</code> (SupplierIdentity)",id:"supplieridentity-supplieridentity",children:[],level:4},{value:"<code>supplierProduct</code> (SupplierProduct)",id:"supplierproduct-supplierproduct",children:[],level:4},{value:"<code>supplierProducts</code> (SupplierProductConnection)",id:"supplierproducts-supplierproductconnection",children:[],level:4},{value:"<code>updatedAt</code> (String)",id:"updatedat-string",children:[],level:4},{value:"<code>updatedBy</code> (ID)",id:"updatedby-id",children:[],level:4}],level:3}],d={toc:o};function c(e){var t=e.components,r=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The parent-most entity of the Supplier Domain"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type Supplier {\n  createdAt: String!\n  defaultCurrency: ResonanceCurrency!\n  defaultLocaleType: ResonanceLocaleType!\n  description: String\n  mySupplyEventSubscriptions(\n    after: String\n    before: String\n    first: Int\n    itemType: String\n    last: Int\n    mutationType: SupplyEventMutationType\n  ): SupplyEventSubscriptionConnection!\n  name: String!\n  ownerUserName: String!\n  purchaseOrderNotifications: [PurchaseOrderNotification!]\n  status: SupplierStatus!\n  supplierId: ID!\n  supplierIdentities(\n    after: String\n    before: String\n    first: Int\n    identityParentEntityId: ID\n    identityType: SupplierIdentityType\n    last: Int\n  ): SupplierIdentityConnection!\n  supplierIdentity(identityId: ID!): SupplierIdentity\n  supplierProduct(supplierProductId: ID!): SupplierProduct\n  supplierProducts(\n    after: String\n    before: String\n    first: Int\n    last: Int\n  ): SupplierProductConnection!\n  updatedAt: String!\n  updatedBy: ID!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"createdat-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"defaultcurrency-resonancecurrency"},(0,p.kt)("inlineCode",{parentName:"h4"},"defaultCurrency")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-currency"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency")),")"),(0,p.kt)("h4",{id:"defaultlocaletype-resonancelocaletype"},(0,p.kt)("inlineCode",{parentName:"h4"},"defaultLocaleType")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,p.kt)("h4",{id:"description-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"mysupplyeventsubscriptions-supplyeventsubscriptionconnection"},(0,p.kt)("inlineCode",{parentName:"h4"},"mySupplyEventSubscriptions")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supply-event-subscription-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionConnection")),")"),(0,p.kt)("p",null,"List supplyEventSubscriptions by filtering for your identity."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"itemtype-string"},(0,p.kt)("inlineCode",{parentName:"h5"},"itemType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"In order to use this filter, you must also provide subscriptionEntityId"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"mutationtype-supplyeventmutationtype"},(0,p.kt)("inlineCode",{parentName:"h5"},"mutationType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supply-event-mutation-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplyEventMutationType")),")"))),(0,p.kt)("p",null,"In order to use this filter, you must also include itemType"),(0,p.kt)("h4",{id:"name-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"ownerusername-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"ownerUserName")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"purchaseordernotifications-purchaseordernotification"},(0,p.kt)("inlineCode",{parentName:"h4"},"purchaseOrderNotifications")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/purchase-order-notification"},(0,p.kt)("inlineCode",{parentName:"a"},"PurchaseOrderNotification")),")"),(0,p.kt)("p",null,"One purchaseOrderNotification must be present to publish (private or public)"),(0,p.kt)("h4",{id:"status-supplierstatus"},(0,p.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-status"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierStatus")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,p.kt)("h4",{id:"supplieridentities-supplieridentityconnection"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierIdentities")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityConnection")),")"),(0,p.kt)("p",null,"Provided through SupplierIdentity Chained Resolver\nReturns SupplierIdentities for the given Supplier"),(0,p.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"identityparententityid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"identityParentEntityId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("p",null,"Filter the results to a specific identityParentEntityId (optional)"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"identitytype-supplieridentitytype"},(0,p.kt)("inlineCode",{parentName:"h5"},"identityType")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-identity-type"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentityType")),")"))),(0,p.kt)("p",null,"Filter the results to a specific identity type (optional)"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int-1"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("h4",{id:"supplieridentity-supplieridentity"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierIdentity")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-identity"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierIdentity")),")"),(0,p.kt)("p",null,"Provided through SupplierIdentity Chained Resolver\nReturns a single SupplierIdentity for the given Supplier"),(0,p.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity, or you can request your own identity."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"identityid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"identityId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("h4",{id:"supplierproduct-supplierproduct"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierProduct")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProduct")),")"),(0,p.kt)("p",null,"Get a single SupplierProduct by its ID."),(0,p.kt)("p",null,"Requires supplierproduct/read permission on the requesting identity"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"supplierproductid-id"},(0,p.kt)("inlineCode",{parentName:"h5"},"supplierProductId")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,p.kt)("h4",{id:"supplierproducts-supplierproductconnection"},(0,p.kt)("inlineCode",{parentName:"h4"},"supplierProducts")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-product-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductConnection")),")"),(0,p.kt)("p",null,"List SupplierProducts for a Supplier."),(0,p.kt)("p",null,"Requires supplierproduct/read permission on the requesting identity"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"after-string-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"before-string-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,p.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"first-int-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the first n elements from the list."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("h5",{parentName:"li",id:"last-int-2"},(0,p.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,p.kt)("a",{parentName:"h5",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/int"},(0,p.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,p.kt)("p",null,"Returns the last n elements from the list."),(0,p.kt)("h4",{id:"updatedat-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"updatedby-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID")),")"))}c.isMDXComponent=!0}}]);