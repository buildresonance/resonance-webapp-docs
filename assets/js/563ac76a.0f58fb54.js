"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[45799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),o=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=o(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(n),k=r,m=s["".concat(c,".").concat(k)]||s[k]||d[k]||i;return n?l.createElement(m,a(a({ref:t},u),{},{components:n})):l.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:r,a[1]=p;for(var o=2;o<i;o++)a[o]=n[o];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var l=n(87462),r=n(67294),i=n(3905);const a={id:"delete-supplier-quick-link",title:"deleteSupplierQuickLink",hide_table_of_contents:!1},p=void 0,c={unversionedId:"supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link",id:"supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link",title:"deleteSupplierQuickLink",description:"Delete a SupplierQuickLink",source:"@site/docs/supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-quick-link",title:"deleteSupplierQuickLink",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"deleteSupplierProducts",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-products"},next:{title:"deleteSupplierVariantCustomData",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-variant-custom-data"}},o={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>deleteSupplierQuickLink.<b>appId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletesupplierquicklinkbappidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteSupplierQuickLink.<b>quickLinkType</b></code><Bullet /><code>SupplierQuickLinkType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-deletesupplierquicklinkbquicklinktypebcodesupplierquicklinktype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>deleteSupplierQuickLink.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-deletesupplierquicklinkbsupplieridbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierQuickLinkDeletedResponse</code> <Badge class="secondary" text="object"/>',id:"supplierquicklinkdeletedresponse-",level:4}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:s,SpecifiedBy:d,Badge:k};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Delete a SupplierQuickLink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierQuickLink(\n  appId: ID!\n  quickLinkType: SupplierQuickLinkType!\n  supplierId: ID!\n): SupplierQuickLinkDeletedResponse!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-deletesupplierquicklinkbappidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"deleteSupplierQuickLink.",(0,i.kt)("b",null,"appId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-deletesupplierquicklinkbquicklinktypebcodesupplierquicklinktype--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"deleteSupplierQuickLink.",(0,i.kt)("b",null,"quickLinkType"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supplier-quick-link-type"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-deletesupplierquicklinkbsupplieridbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"deleteSupplierQuickLink.",(0,i.kt)("b",null,"supplierId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"supplierquicklinkdeletedresponse-"},(0,i.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-response"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkDeletedResponse"))," ",(0,i.kt)(k,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The response shape when a SupplierQuickLink is deleted")))}y.isMDXComponent=!0}}]);