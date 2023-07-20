"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[18709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:a,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37300:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=n(67294),o=n(3905);const l={id:"delete-page-content-item-response",title:"DeletePageContentItemResponse",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-admin/reference/objects/delete-page-content-item-response",id:"demand/api/graphql-admin/reference/objects/delete-page-content-item-response",title:"DeletePageContentItemResponse",description:"Returned object from deletePageContentItem",source:"@site/docs/demand/api/graphql-admin/reference/objects/delete-page-content-item-response.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/delete-page-content-item-response",permalink:"/demand/api/graphql-admin/reference/objects/delete-page-content-item-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/delete-page-content-item-response.mdx",tags:[],version:"current",frontMatter:{id:"delete-page-content-item-response",title:"DeletePageContentItemResponse",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DeleteNavResponse",permalink:"/demand/api/graphql-admin/reference/objects/delete-nav-response"},next:{title:"DeleteTaxonomyBranchResponse",permalink:"/demand/api/graphql-admin/reference/objects/delete-taxonomy-branch-response"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DeletePageContentItemResponse.<b>deletedId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletepagecontentitemresponsebdeletedidbcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:m,Badge:u};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returned object from deletePageContentItem"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DeletePageContentItemResponse {\n  deletedId: ID!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-deletepagecontentitemresponsebdeletedidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DeletePageContentItemResponse.",(0,o.kt)("b",null,"deletedId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The contentItemId of the contentItem that was deleted.")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/delete-page-content-item"},(0,o.kt)("inlineCode",{parentName:"a"},"deletePageContentItem")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);