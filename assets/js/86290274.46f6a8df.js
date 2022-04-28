"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[98934],{3905:function(e,r,p){p.d(r,{Zo:function(){return u},kt:function(){return k}});var t=p(67294);function n(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function i(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,t)}return p}function a(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?i(Object(p),!0).forEach((function(r){n(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function l(e,r){if(null==e)return{};var p,t,n=function(e,r){if(null==e)return{};var p,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||(n[p]=e[p]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var s=t.createContext({}),o=function(e){var r=t.useContext(s),p=r;return e&&(p="function"==typeof e?e(r):a(a({},r),e)),p},u=function(e){var r=o(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var p=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=o(p),k=n,f=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return p?t.createElement(f,a(a({ref:r},u),{},{components:p})):t.createElement(f,a({ref:r},u))}));function k(e,r){var p=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=p.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var o=2;o<i;o++)a[o]=p[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},46386:function(e,r,p){p.r(r),p.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var t=p(87462),n=p(63366),i=(p(67294),p(3905)),a=["components"],l={id:"supplier-quick-link",title:"SupplierQuickLink"},s=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link",title:"SupplierQuickLink",description:"Represents a link to your app from inside the Resonance Supply Portal",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link.mdx",tags:[],version:"current",frontMatter:{id:"supplier-quick-link",title:"SupplierQuickLink"},sidebar:"apisSidebar",previous:{title:"SupplierQuickLinkEdge",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-quick-link-edge"},next:{title:"SupplierVariantCompositeCreateResponse",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite-create-response"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"<code>createdAt</code> (<code>String</code>)",id:"createdat-string",level:4},{value:"<code>dynamicUrl</code> (<code>String</code>)",id:"dynamicurl-string",level:4},{value:"<code>label</code> (<code>String</code>)",id:"label-string",level:4},{value:"<code>quickLinkType</code> (<code>SupplierQuickLinkType</code>)",id:"quicklinktype-supplierquicklinktype",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4},{value:"<code>updatedAt</code> (<code>String</code>)",id:"updatedat-string",level:4},{value:"<code>updatedBy</code> (<code>String</code>)",id:"updatedby-string",level:4}],d={toc:c};function k(e){var r=e.components,p=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a link to your app from inside the Resonance Supply Portal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierQuickLink {\n  appId: ID!\n  createdAt: String!\n  dynamicUrl: String!\n  label: String!\n  quickLinkType: SupplierQuickLinkType!\n  supplierId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"appid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The Id of the App this quicklink pertains to."),(0,i.kt)("h4",{id:"createdat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"dynamicurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"dynamicUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"This can have dynamic parts, using ","[supplierProductId]"," format. It represents where the link goes."),(0,i.kt)("h4",{id:"label-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"What the text for the link should be to the user."),(0,i.kt)("h4",{id:"quicklinktype-supplierquicklinktype"},(0,i.kt)("inlineCode",{parentName:"h4"},"quickLinkType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-quick-link-type"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType")),")"),(0,i.kt)("p",null,"Indicates which page the SupplierQuickLink would live on"),(0,i.kt)("h4",{id:"supplierid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("p",null,"The Id of the Supplier this quicklink pertains to (the one that has installed your app)."),(0,i.kt)("h4",{id:"updatedat-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"updatedby-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}k.isMDXComponent=!0}}]);