"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2706],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var i=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,i,t=function(e,r){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=i.createContext({}),s=function(e){var r=i.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=s(e.components);return i.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=t,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||a;return n?i.createElement(m,p(p({ref:r},u),{},{components:n})):i.createElement(m,p({ref:r},u))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2078:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var i=n(7462),t=n(3366),a=(n(7294),n(3905)),p=["components"],l={id:"supplier-variant-image-from-file-input",title:"SupplierVariantImageFromFileInput"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input",title:"SupplierVariantImageFromFileInput",description:"Input object for creating an Image SupplierVariantContentItem from a File on a device",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-file-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-image-from-file-input",title:"SupplierVariantImageFromFileInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantHandlingCostInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-handling-cost-input"},next:{title:"SupplierVariantImageFromUrlInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-image-from-url-input"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>alt</code> (String)",id:"alt-string",children:[],level:4},{value:"<code>fileExtension</code> (String)",id:"fileextension-string",children:[],level:4},{value:"<code>fileName</code> (String)",id:"filename-string",children:[],level:4},{value:"<code>supplierId</code> (ID)",id:"supplierid-id",children:[],level:4},{value:"<code>supplierVariantId</code> (ID)",id:"suppliervariantid-id",children:[],level:4},{value:"<code>variantRelation</code> (SupplierVariantContentRelation)",id:"variantrelation-suppliervariantcontentrelation",children:[],level:4}],level:3}],c={toc:u};function d(e){var r=e.components,n=(0,t.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Input object for creating an Image SupplierVariantContentItem from a File on a device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantImageFromFileInput {\n  alt: String!\n  fileExtension: String!\n  fileName: String!\n  supplierId: ID!\n  supplierVariantId: ID!\n  variantRelation: SupplierVariantContentRelation!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"alt-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"alt")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"fileextension-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"fileExtension")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"filename-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"fileName")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"suppliervariantid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"variantrelation-suppliervariantcontentrelation"},(0,a.kt)("inlineCode",{parentName:"h4"},"variantRelation")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-content-relation"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentRelation")),")"))}d.isMDXComponent=!0}}]);