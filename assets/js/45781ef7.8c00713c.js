"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||y[u]||l;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<l;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5982:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>y,assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(87462),r=n(67294),l=n(3905);const a={id:"collection-type-content",title:"collectionTypeContent",hide_table_of_contents:!1},c=void 0,i={unversionedId:"demand/api/graphql-admin/reference/queries/collection-type-content",id:"demand/api/graphql-admin/reference/queries/collection-type-content",title:"collectionTypeContent",description:"Get a collectionTypeContent by collectionTypeContentId.",source:"@site/docs/demand/api/graphql-admin/reference/queries/collection-type-content.mdx",sourceDirName:"demand/api/graphql-admin/reference/queries",slug:"/demand/api/graphql-admin/reference/queries/collection-type-content",permalink:"/demand/api/graphql-admin/reference/queries/collection-type-content",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/queries/collection-type-content.mdx",tags:[],version:"current",frontMatter:{id:"collection-type-content",title:"collectionTypeContent",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"authorizedPaymentGateways",permalink:"/demand/api/graphql-admin/reference/queries/authorized-payment-gateways"},next:{title:"collection",permalink:"/demand/api/graphql-admin/reference/queries/collection"}},p={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>collectionTypeContent.<b>collectionTypeContentId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-collectiontypecontentbcollectiontypecontentidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CollectionTypeContent</code> <Badge class="secondary" text="object"/>',id:"collectiontypecontent-",level:4}],s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:s,SpecifiedBy:y,Badge:u};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Get a collectionTypeContent by collectionTypeContentId."),(0,l.kt)("p",null,"Requires the collectiontypecontent/read scope on the associated DemandHq"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"collectionTypeContent(\n  collectionTypeContentId: ID!\n): CollectionTypeContent\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-collectiontypecontentbcollectiontypecontentidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"collectionTypeContent.",(0,l.kt)("b",null,"collectionTypeContentId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"collectiontypecontent-"},(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/collection-type-content"},(0,l.kt)("inlineCode",{parentName:"a"},"CollectionTypeContent"))," ",(0,l.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This holds content specific to a collectionType. This is generally used on a\npage that lists all collections for a collectionType.")))}f.isMDXComponent=!0}}]);