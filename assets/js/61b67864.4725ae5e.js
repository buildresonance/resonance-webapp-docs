(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[800],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return d}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(o,".").concat(d)]||f[d]||l[d]||p;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var p=n.length,a=new Array(p);a[0]=f;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<p;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8503:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return l}});var t=n(2122),i=n(9756),p=(n(7294),n(3905)),a=["components"],s={id:"supplier-create-input",title:"SupplierCreateInput"},o={unversionedId:"apis/supplier-apis/supply-api/reference/inputs/supplier-create-input",id:"apis/supplier-apis/supply-api/reference/inputs/supplier-create-input",isDocsHomePage:!1,title:"SupplierCreateInput",description:"No description",source:"@site/docs/apis/supplier-apis/supply-api/reference/inputs/supplier-create-input.mdx",sourceDirName:"apis/supplier-apis/supply-api/reference/inputs",slug:"/apis/supplier-apis/supply-api/reference/inputs/supplier-create-input",permalink:"/apis/supplier-apis/supply-api/reference/inputs/supplier-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/apis/supplier-apis/supply-api/reference/inputs/supplier-create-input.mdx",version:"current",frontMatter:{id:"supplier-create-input",title:"SupplierCreateInput"},sidebar:"apisSidebar",previous:{title:"PurchaseOrderNotificationInput",permalink:"/apis/supplier-apis/supply-api/reference/inputs/purchase-order-notification-input"},next:{title:"Boolean",permalink:"/apis/supplier-apis/supply-api/reference/scalars/boolean"}},u=[{value:"Fields",id:"fields",children:[]}],c={toc:u};function l(e){var r=e.components,n=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierCreateInput {\n  name: String!\n  description: String\n  defaultLocale: ResonanceLocale!\n  defaultCurrency: String!\n  purchaseOrderNotification: PurchaseOrderNotificationInput!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"name-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,p.kt)("a",{parentName:"h4",href:"/apis/supplier-apis/supply-api/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h4",{id:"description-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,p.kt)("a",{parentName:"h4",href:"/apis/supplier-apis/supply-api/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"defaultlocale-resonancelocale"},(0,p.kt)("inlineCode",{parentName:"h4"},"defaultLocale")," (",(0,p.kt)("a",{parentName:"h4",href:"/apis/supplier-apis/supply-api/reference/enums/resonance-locale"},(0,p.kt)("inlineCode",{parentName:"a"},"ResonanceLocale!")),")"),(0,p.kt)("h4",{id:"defaultcurrency-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"defaultCurrency")," (",(0,p.kt)("a",{parentName:"h4",href:"/apis/supplier-apis/supply-api/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h4",{id:"purchaseordernotification-purchaseordernotificationinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"purchaseOrderNotification")," (",(0,p.kt)("a",{parentName:"h4",href:"/apis/supplier-apis/supply-api/reference/inputs/purchase-order-notification-input"},(0,p.kt)("inlineCode",{parentName:"a"},"PurchaseOrderNotificationInput!")),")"))}l.isMDXComponent=!0}}]);