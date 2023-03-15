"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[98482],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(i),y=r,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||l;return i?n.createElement(m,a(a({ref:t},d),{},{components:i})):n.createElement(m,a({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,a[1]=p;for(var o=2;o<l;o++)a[o]=i[o];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},56807:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>y,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(87462),r=i(67294),l=i(3905);const a={id:"supplier-identities",title:"supplierIdentities",hide_table_of_contents:!1},p=void 0,s={unversionedId:"supply/api/graphql-admin/reference/queries/supplier-identities",id:"supply/api/graphql-admin/reference/queries/supplier-identities",title:"supplierIdentities",description:"Get a filtered list of SupplierIdentities",source:"@site/docs/supply/api/graphql-admin/reference/queries/supplier-identities.mdx",sourceDirName:"supply/api/graphql-admin/reference/queries",slug:"/supply/api/graphql-admin/reference/queries/supplier-identities",permalink:"/supply/api/graphql-admin/reference/queries/supplier-identities",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/queries/supplier-identities.mdx",tags:[],version:"current",frontMatter:{id:"supplier-identities",title:"supplierIdentities",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"supplierDemandHq",permalink:"/supply/api/graphql-admin/reference/queries/supplier-demand-hq"},next:{title:"supplierIdentity",permalink:"/supply/api/graphql-admin/reference/queries/supplier-identity"}},o={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesbfirstbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>identityId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesbidentityidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>identityParentEntityId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesbidentityparententityidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>identityType</b></code><Bullet /><code>SupplierIdentityType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplieridentitiesbidentitytypebcodesupplieridentitytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesblastbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>supplierIdentities.<b>supplierId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplieridentitiesbsupplieridbcodeid-",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierIdentityConnection</code> <Badge class="secondary" text="object"/>',id:"supplieridentityconnection-",level:4}],c=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:c,SpecifiedBy:u,Badge:y};function f(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Get a filtered list of SupplierIdentities"),(0,l.kt)("p",null,"All of the filters are optional, but you must include at least one.\nYou may receive less supplierIdentities than you indicate if you do not have\npermission to read part of the result set."),(0,l.kt)("p",null,"Not all filter combinations are valid, for example you cannot filter by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"identityId + identityParentEntityId (requires supplierId)"),(0,l.kt)("li",{parentName:"ul"},"identityType only (requires supplierId)")),(0,l.kt)("p",null,"Requires supplieridentity/read permission on the requesting identity for each supplier requested,\nor you can request your own identities."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"supplierIdentities(\n  after: String\n  before: String\n  first: Int\n  identityId: ID\n  identityParentEntityId: ID\n  identityType: SupplierIdentityType\n  last: Int\n  supplierId: ID\n): SupplierIdentityConnection!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbafterbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"after"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbbeforebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"before"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbfirstbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"first"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the first n elements from the list.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbidentityidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"identityId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'Filter the results to a specific identityId.\nUse this with your own userName or appClientId in order to see "My SupplierIdentities".\nYou automatically have access to your own SupplierIdentities.')),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbidentityparententityidbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"identityParentEntityId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter the results to a specific identityParentEntityId (optional)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbidentitytypebcodesupplieridentitytype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"identityType"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supplier-identity-type"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplierIdentityType"))," ",(0,l.kt)(y,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter the results to a specific identity type (optional)")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesblastbcodeint-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"last"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the last n elements from the list.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplieridentitiesbsupplieridbcodeid-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"supplierIdentities.",(0,l.kt)("b",null,"supplierId"))),(0,l.kt)(c,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,l.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Filter the results to a specific supplierId. (optional)")),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"supplieridentityconnection-"},(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-identity-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplierIdentityConnection"))," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Paginate through SupplierIdentities")))}f.isMDXComponent=!0}}]);