"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,d=function(e,t){if(null==e)return{};var n,a,d={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(d[n]=e[n]);return d}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(d[n]=e[n])}return d}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,d=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=d,y=m["".concat(o,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(y,r(r({ref:t},c),{},{components:n})):a.createElement(y,r({ref:t},c))}));function y(e,t){var n=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:d,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24537:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),d=n(67294),i=n(3905);const r={id:"demand-hq-identities",title:"demandHqIdentities",hide_table_of_contents:!1},l=void 0,o={unversionedId:"demand/api/graphql-admin/reference/queries/demand-hq-identities",id:"demand/api/graphql-admin/reference/queries/demand-hq-identities",title:"demandHqIdentities",description:"Get a filtered list of DemandHqIdentities",source:"@site/docs/demand/api/graphql-admin/reference/queries/demand-hq-identities.mdx",sourceDirName:"demand/api/graphql-admin/reference/queries",slug:"/demand/api/graphql-admin/reference/queries/demand-hq-identities",permalink:"/demand/api/graphql-admin/reference/queries/demand-hq-identities",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/queries/demand-hq-identities.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-identities",title:"demandHqIdentities",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"customer",permalink:"/demand/api/graphql-admin/reference/queries/customer"},next:{title:"demandHqIdentity",permalink:"/demand/api/graphql-admin/reference/queries/demand-hq-identity"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>demandHqId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesbdemandhqidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>identityId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesbidentityidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>identityParentEntityId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesbidentityparententityidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>identityType</b></code><Bullet /><code>DemandHqIdentityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-demandhqidentitiesbidentitytypebcodedemandhqidentitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>demandHqIdentities.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqidentitiesblastbcodeint-",level:4},{value:"Type",id:"type",level:3},{value:'<code>DemandHqIdentityConnection</code> <Badge class="secondary" text="object"/>',id:"demandhqidentityconnection-",level:4}],m=()=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(d.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(d.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:m,SpecifiedBy:p,Badge:u};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get a filtered list of DemandHqIdentities"),(0,i.kt)("p",null,"All of the filters are optional, but you must include at least one.\nYou may receive less demandHqIdentities than you indicate if you do not have\npermission to read part of the result set."),(0,i.kt)("p",null,"Not all filter combinations are valid, for example you cannot filter by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"identityId + identityParentEntityId (requires demandHqId)"),(0,i.kt)("li",{parentName:"ul"},"identityType only (requires demandHqId)")),(0,i.kt)("p",null,"Requires demandHqidentity/read permission on the requesting identity for each demandHq requested,\nor you can request your own identities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"demandHqIdentities(\n  after: String\n  before: String\n  demandHqId: ID\n  first: Int\n  identityId: ID\n  identityParentEntityId: ID\n  identityType: DemandHqIdentityType\n  last: Int\n): DemandHqIdentityConnection!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbafterbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"after"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbbeforebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"before"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbdemandhqidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"demandHqId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter the results to a specific demandHqId. (optional)")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbfirstbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"first"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbidentityidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"identityId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Filter the results to a specific identityId.\nUse this with your own userName or appClientId in order to see "My DemandHqIdentities".\nYou automatically have access to your own DemandHqIdentities.')),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbidentityparententityidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"identityParentEntityId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter the results to a specific identityParentEntityId (optional)")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesbidentitytypebcodedemandhqidentitytype-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"identityType"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/demand-hq-identity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityType"))," ",(0,i.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Filter the results to a specific identity type (optional)")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-demandhqidentitiesblastbcodeint-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"demandHqIdentities.",(0,i.kt)("b",null,"last"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"demandhqidentityconnection-"},(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-hq-identity-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityConnection"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Paginate through DemandHqIdentities")))}h.isMDXComponent=!0}}]);