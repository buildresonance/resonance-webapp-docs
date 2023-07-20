"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[32420],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=s.createContext({}),p=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,b=u["".concat(a,".").concat(y)]||u[y]||d[y]||i;return n?s.createElement(b,o(o({ref:t},c),{},{components:n})):s.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}y.displayName="MDXCreateElement"},49360:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(87462),r=n(67294),i=n(3905);const o={id:"supply-event-subscriptions",title:"supplyEventSubscriptions",hide_table_of_contents:!1},l=void 0,a={unversionedId:"supply/api/graphql-admin/reference/queries/supply-event-subscriptions",id:"supply/api/graphql-admin/reference/queries/supply-event-subscriptions",title:"supplyEventSubscriptions",description:"List supplyEventSubscriptions by filtering. Requires you to own the subscriptions.",source:"@site/docs/supply/api/graphql-admin/reference/queries/supply-event-subscriptions.mdx",sourceDirName:"supply/api/graphql-admin/reference/queries",slug:"/supply/api/graphql-admin/reference/queries/supply-event-subscriptions",permalink:"/supply/api/graphql-admin/reference/queries/supply-event-subscriptions",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/queries/supply-event-subscriptions.mdx",tags:[],version:"current",frontMatter:{id:"supply-event-subscriptions",title:"supplyEventSubscriptions",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"supplyEventSubscription",permalink:"/supply/api/graphql-admin/reference/queries/supply-event-subscription"},next:{title:"Boolean",permalink:"/supply/api/graphql-admin/reference/scalars/boolean"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>eventSubscriptionIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbeventsubscriptionidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>itemType</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbitemtypebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsblastbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>mutationType</b></code><Bullet /><code>SupplyEventMutationType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbmutationtypebcodesupplyeventmutationtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>subscriptionEntityId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbsubscriptionentityidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplyEventSubscriptions.<b>subscriptionOwnerId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventsubscriptionsbsubscriptionowneridbcodeid-",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplyEventSubscriptionConnection</code> <Badge class="secondary" text="object"/>',id:"supplyeventsubscriptionconnection-",level:4}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:c,Bullet:u,SpecifiedBy:d,Badge:y};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List supplyEventSubscriptions by filtering. Requires you to own the subscriptions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"supplyEventSubscriptions(\n  after: String\n  before: String\n  eventSubscriptionIds: [ID!]\n  first: Int\n  itemType: String\n  last: Int\n  mutationType: SupplyEventMutationType\n  subscriptionEntityId: ID\n  subscriptionOwnerId: ID\n): SupplyEventSubscriptionConnection!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbafterbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"after"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbbeforebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"before"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbeventsubscriptionidsbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"eventSubscriptionIds"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,i.kt)(y,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This filter should be used alone, including without any relay parameters.\nIt will supercede all other parameters.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbfirstbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"first"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbitemtypebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"itemType"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to use this filter, you must also provide subscriptionEntityId")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsblastbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"last"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbmutationtypebcodesupplyeventmutationtype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"mutationType"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supply-event-mutation-type"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplyEventMutationType"))," ",(0,i.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to use this filter, you must also include itemType and subscriptionEntityId")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbsubscriptionentityidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"subscriptionEntityId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This filter can be used with or without subscriptionOwnerId")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-supplyeventsubscriptionsbsubscriptionowneridbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"supplyEventSubscriptions.",(0,i.kt)("b",null,"subscriptionOwnerId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are not using eventSubscriptionIds, and are not querying for an identityId event subscription,\nthis filter is highly recommended to use to ensure you have permissions on the returned eventSubscriptions.\nOtherwise, you may not have permissions on the returned eventSubscriptions, and see blank results.")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplyeventsubscriptionconnection-"},(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supply-event-subscription-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionConnection"))," ",(0,i.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Paginate through SupplyEventSubscriptions")))}m.isMDXComponent=!0}}]);