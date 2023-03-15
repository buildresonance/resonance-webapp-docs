"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[33937],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var p=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,p)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,p,r=function(e,t){if(null==e)return{};var a,p,r={},n=Object.keys(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(p=0;p<n.length;p++)a=n[p],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=p.createContext({}),d=function(e){var t=p.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return p.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},o=p.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),o=r,y=c["".concat(s,".").concat(o)]||c[o]||m[o]||n;return a?p.createElement(y,i(i({ref:t},u),{},{components:a})):p.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=o;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<n;d++)i[d]=a[d];return p.createElement.apply(null,i)}return p.createElement.apply(null,a)}o.displayName="MDXCreateElement"},57849:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>o,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var p=a(87462),r=a(67294),n=a(3905);const i={id:"id",title:"ID",hide_table_of_contents:!1},l=void 0,s={unversionedId:"supply/api/graphql-admin/reference/scalars/id",id:"supply/api/graphql-admin/reference/scalars/id",title:"ID",description:'The ID scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.',source:"@site/docs/supply/api/graphql-admin/reference/scalars/id.mdx",sourceDirName:"supply/api/graphql-admin/reference/scalars",slug:"/supply/api/graphql-admin/reference/scalars/id",permalink:"/supply/api/graphql-admin/reference/scalars/id",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/scalars/id.mdx",tags:[],version:"current",frontMatter:{id:"id",title:"ID",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"Float",permalink:"/supply/api/graphql-admin/reference/scalars/float"},next:{title:"Int",permalink:"/supply/api/graphql-admin/reference/scalars/int"}},d={},u=[{value:"Member of",id:"member-of",level:3}],c=()=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,n.kt)(r.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),o=e=>(0,n.kt)(r.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:c,SpecifiedBy:m,Badge:o};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,p.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as ",(0,n.kt)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",(0,n.kt)("inlineCode",{parentName:"p"},"4"),") input value will be accepted as an ID."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar ID\n")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-identity"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplierIdentity")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-product"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplierProduct")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-product-custom-data"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplierProductCustomData")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-quick-link"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplierQuickLink")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-variant"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplierVariant")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supplier-variant-custom-data"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplierVariantCustomData")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/delete-supply-event-subscription"},(0,n.kt)("inlineCode",{parentName:"a"},"deleteSupplyEventSubscription")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/events"},(0,n.kt)("inlineCode",{parentName:"a"},"events")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/install-app"},(0,n.kt)("inlineCode",{parentName:"a"},"installApp")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/public-app"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicApp")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/public-demand-hq"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicDemandHq")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/public-identity"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicIdentity")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/public-supplier"},(0,n.kt)("inlineCode",{parentName:"a"},"PublicSupplier")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/public-suppliers"},(0,n.kt)("inlineCode",{parentName:"a"},"publicSuppliers")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier"},(0,n.kt)("inlineCode",{parentName:"a"},"Supplier")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier"},(0,n.kt)("inlineCode",{parentName:"a"},"supplier")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-demand-hq"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierDemandHq")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-demand-hq"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierDemandHq")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-demand-hq-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierDemandHqCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-demand-hq-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierDemandHqUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-identities"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierIdentities")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-identity"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierIdentity")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-identity"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierIdentity")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-identity-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierIdentityCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-identity-deleted-id"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierIdentityDeletedId")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-identity-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierIdentityUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProduct")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-product"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierProduct")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-content-item"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItem")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-content-item-association-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemAssociationCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-content-item-association-in-composite-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemAssociationInCompositeCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-content-item-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductContentItemUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-custom-data"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductCustomData")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-custom-data-upsert-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductCustomDataUpsertInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-delete-response"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductDeleteResponse")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-image-from-file-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductImageFromFileInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-image-from-file-input-response"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductImageFromFileInputResponse")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-image-from-url-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductImageFromUrlInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-locale"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductLocale")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductLocaleCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-locale-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductLocaleUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-product-tags"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductTags")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-product-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierProductUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-quick-link"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierQuickLink")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-quick-link-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-quick-link-deleted-id"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkDeletedId")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-quick-links"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierQuickLinks")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-variant"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariant")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-variant"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierVariant")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-variant-custom-data"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantCustomData")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-custom-data-upsert-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantCustomDataUpsertInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-variant-delete-response"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantDeleteResponse")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-external-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantExternalUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supplier-variants"},(0,n.kt)("inlineCode",{parentName:"a"},"supplierVariants")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supplier-variant-supplement"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplement")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-update-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplierVariantUpdateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-event-metadata"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplyEventMetadata")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-event-subscription"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscription")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supply-event-subscription"},(0,n.kt)("inlineCode",{parentName:"a"},"supplyEventSubscription")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supply-event-subscription-create-input"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionCreateInput")),"  ",(0,n.kt)(o,{class:"secondary",text:"input",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-event-subscription-delete-response"},(0,n.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionDeleteResponse")),"  ",(0,n.kt)(o,{class:"secondary",text:"object",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supply-event-subscriptions"},(0,n.kt)("inlineCode",{parentName:"a"},"supplyEventSubscriptions")),"  ",(0,n.kt)(o,{class:"secondary",text:"query",mdxType:"Badge"}),(0,n.kt)(c,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-app-permissions"},(0,n.kt)("inlineCode",{parentName:"a"},"updateAppPermissions")),"  ",(0,n.kt)(o,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);