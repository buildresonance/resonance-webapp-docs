"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[418],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=p,d=f["".concat(o,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function m(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},488:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=t(7462),p=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"supplier-variant-image-from-file-response",title:"SupplierVariantImageFromFileResponse"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response",title:"SupplierVariantImageFromFileResponse",description:"The response object from createSupplierVariantImageFromFile",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-image-from-file-response.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-image-from-file-response",title:"SupplierVariantImageFromFileResponse"},sidebar:"apisSidebar",previous:{title:"SupplierVariantHandlingCost",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-handling-cost"},next:{title:"SupplierVariantLocale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-locale"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>contentItem</code> (SupplierVariantContentItem)",id:"contentitem-suppliervariantcontentitem",children:[],level:4},{value:"<code>fields</code> (JSONObject)",id:"fields-jsonobject",children:[],level:4},{value:"<code>url</code> (String)",id:"url-string",children:[],level:4}],level:3}],u={toc:c};function f(e){var r=e.components,t=(0,p.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The response object from createSupplierVariantImageFromFile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantImageFromFileResponse {\n  contentItem: SupplierVariantContentItem!\n  fields: JSONObject!\n  url: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"contentitem-suppliervariantcontentitem"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentItem")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-content-item"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantContentItem")),")"),(0,i.kt)("h4",{id:"fields-jsonobject"},(0,i.kt)("inlineCode",{parentName:"h4"},"fields")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/jsonobject"},(0,i.kt)("inlineCode",{parentName:"a"},"JSONObject")),")"),(0,i.kt)("h4",{id:"url-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);