"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6852],{3905:function(e,p,r){r.d(p,{Zo:function(){return o},kt:function(){return k}});var i=r(7294);function n(e,p,r){return p in e?Object.defineProperty(e,p,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[p]=r,e}function t(e,p){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);p&&(i=i.filter((function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var p=1;p<arguments.length;p++){var r=null!=arguments[p]?arguments[p]:{};p%2?t(Object(r),!0).forEach((function(p){n(e,p,r[p])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(r,p))}))}return e}function a(e,p){if(null==e)return{};var r,i,n=function(e,p){if(null==e)return{};var r,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],p.indexOf(r)>=0||(n[r]=e[r]);return n}(e,p);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],p.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var p=i.useContext(u),r=p;return e&&(r="function"==typeof e?e(p):l(l({},p),e)),r},o=function(e){var p=s(e.components);return i.createElement(u.Provider,{value:p},e.children)},c={inlineCode:"code",wrapper:function(e){var p=e.children;return i.createElement(i.Fragment,{},p)}},d=i.forwardRef((function(e,p){var r=e.components,n=e.mdxType,t=e.originalType,u=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),d=s(r),k=n,f=d["".concat(u,".").concat(k)]||d[k]||c[k]||t;return r?i.createElement(f,l(l({ref:p},o),{},{components:r})):i.createElement(f,l({ref:p},o))}));function k(e,p){var r=arguments,n=p&&p.mdxType;if("string"==typeof e||n){var t=r.length,l=new Array(t);l[0]=d;var a={};for(var u in p)hasOwnProperty.call(p,u)&&(a[u]=p[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<t;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7267:function(e,p,r){r.r(p),r.d(p,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return o},toc:function(){return c},default:function(){return k}});var i=r(7462),n=r(3366),t=(r(7294),r(3905)),l=["components"],a={id:"supplier-quick-link-update-input",title:"SupplierQuickLinkUpdateInput"},u=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input",title:"SupplierQuickLinkUpdateInput",description:"The required input fields to partially update an existing SupplierQuickLink",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-update-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-quick-link-update-input",title:"SupplierQuickLinkUpdateInput"},sidebar:"apisSidebar",previous:{title:"SupplierQuickLinkCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-quick-link-create-input"},next:{title:"SupplierUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-update-input"}},o={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>appId</code> (<code>ID</code>)",id:"appid-id",level:4},{value:"<code>dynamicUrl</code> (<code>String</code>)",id:"dynamicurl-string",level:4},{value:"<code>label</code> (<code>String</code>)",id:"label-string",level:4},{value:"<code>quickLinkType</code> (<code>SupplierQuickLinkType</code>)",id:"quicklinktype-supplierquicklinktype",level:4},{value:"<code>supplierId</code> (<code>ID</code>)",id:"supplierid-id",level:4}],d={toc:c};function k(e){var p=e.components,r=(0,n.Z)(e,l);return(0,t.kt)("wrapper",(0,i.Z)({},d,r,{components:p,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The required input fields to partially update an existing SupplierQuickLink"),(0,t.kt)("p",null,"You must be calling from the pertaining app's AppClient"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierQuickLinkUpdateInput {\n  appId: ID!\n  dynamicUrl: String\n  label: String\n  quickLinkType: SupplierQuickLinkType!\n  supplierId: ID!\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"appid-id"},(0,t.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,t.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,t.kt)("p",null,"The Id of the App this quicklink pertains to."),(0,t.kt)("h4",{id:"dynamicurl-string"},(0,t.kt)("inlineCode",{parentName:"h4"},"dynamicUrl")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,t.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,t.kt)("p",null,"This can have dynamic parts, using ","[supplierProductId]"," format. It represents where the link goes."),(0,t.kt)("h4",{id:"label-string"},(0,t.kt)("inlineCode",{parentName:"h4"},"label")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,t.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,t.kt)("p",null,"What the text for the link should be to the user."),(0,t.kt)("h4",{id:"quicklinktype-supplierquicklinktype"},(0,t.kt)("inlineCode",{parentName:"h4"},"quickLinkType")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-quick-link-type"},(0,t.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType")),")"),(0,t.kt)("p",null,"Indicates which page the SupplierQuickLink would live on"),(0,t.kt)("h4",{id:"supplierid-id"},(0,t.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,t.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,t.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,t.kt)("p",null,"The Id of the Supplier this quicklink pertains to (the one that has installed your app)."))}k.isMDXComponent=!0}}]);