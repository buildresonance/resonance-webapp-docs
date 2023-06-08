"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[92829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=p,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:p,o[1]=a;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(87462),p=(r(67294),r(3905));const i={id:"delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",hide_table_of_contents:!1},o=void 0,a={unversionedId:"supply/api/graphql-admin/reference/mutations/delete-supplier-product-content-item",id:"supply/api/graphql-admin/reference/mutations/delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",description:"Delete an existing SupplierProductContentItem",source:"@site/docs/supply/api/graphql-admin/reference/mutations/delete-supplier-product-content-item.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/delete-supplier-product-content-item",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-product-content-item",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/delete-supplier-product-content-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-supplier-product-content-item",title:"deleteSupplierProductContentItem",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"deleteSupplierIdentity",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-identity"},next:{title:"deleteSupplierProductCustomData",permalink:"/supply/api/graphql-admin/reference/mutations/delete-supplier-product-custom-data"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>contentItemId</code> (<code>ID!</code>)",id:"contentitemid-id",level:4},{value:"<code>supplierProductId</code> (<code>ID!</code>)",id:"supplierproductid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierProductContentItemDeleteResponse</code>",id:"supplierproductcontentitemdeleteresponse",level:4}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Delete an existing SupplierProductContentItem"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"deleteSupplierProductContentItem(\n  contentItemId: ID!\n  supplierProductId: ID!\n): SupplierProductContentItemDeleteResponse!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"contentitemid-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"contentItemId"))," (",(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"supplierproductid-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"supplierProductId"))," (",(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"supplierproductcontentitemdeleteresponse"},(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-product-content-item-delete-response"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemDeleteResponse"))),(0,p.kt)("p",null,"The response type for deleteSupplierProductContentItem"))}d.isMDXComponent=!0}}]);