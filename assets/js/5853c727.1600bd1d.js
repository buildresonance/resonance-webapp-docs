"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2476],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=o(t),c=r,u=h["".concat(p,".").concat(c)]||h[c]||m[c]||i;return t?a.createElement(u,d(d({ref:n},s),{},{components:t})):a.createElement(u,d({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,d=new Array(i);d[0]=h;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var o=2;o<i;o++)d[o]=t[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80053:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),d=["components"],l={id:"demand-hq",title:"DemandHq"},p=void 0,o={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq",title:"DemandHq",description:"The parent-most entity of the DemandHq Domain",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq",title:"DemandHq"},sidebar:"apisSidebar",previous:{title:"DemandHqNotificationUserNames",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-notification-user-names"},next:{title:"PageConnectionWithSearch",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection-with-search"}},s={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>defaultCurrency</code> (<code>ResonanceCurrency</code>)",id:"defaultcurrency-resonancecurrency",level:4},{value:"<code>defaultLocaleType</code> (<code>ResonanceLocaleType</code>)",id:"defaultlocaletype-resonancelocaletype",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>demandHqIdentities</code> (<code>DemandHqIdentityConnection</code>)",id:"demandhqidentities-demandhqidentityconnection",level:4},{value:"<code>demandHqIdentity</code> (<code>DemandHqIdentity</code>)",id:"demandhqidentity-demandhqidentity",level:4},{value:"<code>demandSubscriptionCodes</code> (<code>DemandSubscriptionCode</code>)",id:"demandsubscriptioncodes-demandsubscriptioncode",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>notificationUserNames</code> (<code>DemandHqNotificationUserNames</code>)",id:"notificationusernames-demandhqnotificationusernames",level:4},{value:"<code>ownerUserName</code> (<code>String</code>)",id:"ownerusername-string",level:4},{value:"<code>page</code> (<code>Page</code>)",id:"page-page",level:4},{value:"<code>pageTermAggregations</code> (<code>PageTermAggregations</code>)",id:"pagetermaggregations-pagetermaggregations",level:4},{value:"<code>pages</code> (<code>PageConnectionWithSearch</code>)",id:"pages-pageconnectionwithsearch",level:4},{value:"<code>storefront</code> (<code>Storefront</code>)",id:"storefront-storefront",level:4},{value:"<code>storefronts</code> (<code>StorefrontConnection</code>)",id:"storefronts-storefrontconnection",level:4},{value:"<code>updatedAt</code> (<code>String</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>ID</code>)",id:"updatedby-id",level:4}],h={toc:m};function c(e){var n=e.components,t=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The parent-most entity of the DemandHq Domain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandHq {\n  createdAt: String!\n  defaultCurrency: ResonanceCurrency!\n  defaultLocaleType: ResonanceLocaleType!\n  demandHqId: ID!\n  demandHqIdentities(\n  after: String\n  before: String\n  first: Int\n  identityParentEntityId: ID\n  identityType: DemandHqIdentityType\n  last: Int\n): DemandHqIdentityConnection!\n  demandHqIdentity(\n  demandHqId: ID!\n  identityId: ID!\n): DemandHqIdentity\n  demandSubscriptionCodes: [DemandSubscriptionCode!]\n  description: String\n  name: String!\n  notificationUserNames: DemandHqNotificationUserNames\n  ownerUserName: String!\n  page(\n  pageId: ID\n  slug: String\n): Page!\n  pageTermAggregations(\n  numberOfResults: Int!\n): PageTermAggregations\n  pages(\n  after: String\n  author: StringFilterInput\n  before: String\n  first: Int\n  last: Int\n  pageIds: [ID]\n  pageType: StringFilterInput\n  query: String\n  sortOrder: [PageSortInput]\n  status: PageStatusFilterInput\n  tags: [StringFilterInput]\n): PageConnectionWithSearch!\n  storefront(\n  storefrontId: ID!\n): Storefront\n  storefronts(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): StorefrontConnection\n  updatedAt: String!\n  updatedBy: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"createdat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"defaultcurrency-resonancecurrency"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultCurrency")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/resonance-currency"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceCurrency")),")"),(0,i.kt)("h4",{id:"defaultlocaletype-resonancelocaletype"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultLocaleType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/resonance-locale-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"demandhqidentities-demandhqidentityconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqIdentities")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityConnection")),")"),(0,i.kt)("p",null,"Returns DemandHqIdentities for the given DemandHq"),(0,i.kt)("p",null,"Requires demandHqidentity/read permission on the requesting identity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"identityparententityid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"identityParentEntityId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("p",null,"Filter the results to a specific identityParentEntityId (optional)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"identitytype-demandhqidentitytype"},(0,i.kt)("inlineCode",{parentName:"h5"},"identityType")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-identity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityType")),")"))),(0,i.kt)("p",null,"Filter the results to a specific identity type (optional)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"demandhqidentity-demandhqidentity"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqIdentity")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity")),")"),(0,i.kt)("p",null,"Returns a DemandHqIdentity for the given DemandHq"),(0,i.kt)("p",null,"Requires demandHqidentity/read permission on the requesting identity, or you can request your own identity."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"demandhqid-id-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"identityid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"identityId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("h4",{id:"demandsubscriptioncodes-demandsubscriptioncode"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandSubscriptionCodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-subscription-code"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandSubscriptionCode")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"notificationusernames-demandhqnotificationusernames"},(0,i.kt)("inlineCode",{parentName:"h4"},"notificationUserNames")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-notification-user-names"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqNotificationUserNames")),")"),(0,i.kt)("p",null,"These users will get notified if something requires attention for this DemandHq.\nIf none are provided, ownerUserName will be notified."),(0,i.kt)("h4",{id:"ownerusername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"ownerUserName")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"page-page"},(0,i.kt)("inlineCode",{parentName:"h4"},"page")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page"},(0,i.kt)("inlineCode",{parentName:"a"},"Page")),")"),(0,i.kt)("p",null,"Get a page by pageId or slug (one must be provided)."),(0,i.kt)("p",null,"Required page/read permission on the given DemandHq."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"pageid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"pageId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"slug")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"pagetermaggregations-pagetermaggregations"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageTermAggregations")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations"},(0,i.kt)("inlineCode",{parentName:"a"},"PageTermAggregations")),")"),(0,i.kt)("p",null,"Term aggregations for Pages, typically used to suggest terms to use in Search Filters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"numberofresults-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"numberOfResults")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"The number of aggregations to return for each type."),(0,i.kt)("h4",{id:"pages-pageconnectionwithsearch"},(0,i.kt)("inlineCode",{parentName:"h4"},"pages")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection-with-search"},(0,i.kt)("inlineCode",{parentName:"a"},"PageConnectionWithSearch")),")"),(0,i.kt)("p",null,"List pages for a DemandHq with optional filters."),(0,i.kt)("p",null,"Required page/read permission on the given DemandHq."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"author-stringfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"author")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,i.kt)("p",null,"Filter Pages using author"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"pageids-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"pageIds")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("p",null,"Filter Pages to a set of pageIds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"pagetype-stringfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"pageType")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,i.kt)("p",null,"Filter Pages using pageType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"query-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"query")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Query pages for certain terms. Searches several fields, including\npage.author, page.description, page.subtitle, page.title, pageTags, and the\nactual content of the page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sortorder-pagesortinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"sortOrder")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-sort-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PageSortInput")),")"))),(0,i.kt)("p",null,"Sort Pages by a series of fields and directions, defaults to CREATED_AT/ASC."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"status-pagestatusfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"status")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-status-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PageStatusFilterInput")),")"))),(0,i.kt)("p",null,"Filter Pages using status"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"tags-stringfilterinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"tags")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/string-filter-input"},(0,i.kt)("inlineCode",{parentName:"a"},"StringFilterInput")),")"))),(0,i.kt)("p",null,"Filter Pages using Tags."),(0,i.kt)("h4",{id:"storefront-storefront"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefront")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront"},(0,i.kt)("inlineCode",{parentName:"a"},"Storefront")),")"),(0,i.kt)("p",null,"Get a storefront by its storefrontId."),(0,i.kt)("p",null,"Requires the storefront/read permission on the associated DemandHq."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"storefrontid-id"},(0,i.kt)("inlineCode",{parentName:"h5"},"storefrontId")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))),(0,i.kt)("h4",{id:"storefronts-storefrontconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefronts")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/storefront-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"StorefrontConnection")),")"),(0,i.kt)("p",null,"List storefronts for a DemandHq."),(0,i.kt)("p",null,"Requires the storefront/read permission on the associated DemandHq."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come after the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"before-string-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"before")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"Returns the elements in the list that come before the specified cursor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the first n elements from the list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"last-int-2"},(0,i.kt)("inlineCode",{parentName:"h5"},"last")," (",(0,i.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"Returns the last n elements from the list."),(0,i.kt)("h4",{id:"updatedat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"updatedby-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"))}c.isMDXComponent=!0}}]);