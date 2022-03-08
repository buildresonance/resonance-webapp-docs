"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[721],{3905:function(e,r,p){p.d(r,{Zo:function(){return u},kt:function(){return m}});var t=p(7294);function n(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function i(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,t)}return p}function a(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?i(Object(p),!0).forEach((function(r){n(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):i(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function l(e,r){if(null==e)return{};var p,t,n=function(e,r){if(null==e)return{};var p,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||(n[p]=e[p]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)p=i[t],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var o=t.createContext({}),s=function(e){var r=t.useContext(o),p=r;return e&&(p="function"==typeof e?e(r):a(a({},r),e)),p},u=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var p=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(p),m=n,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return p?t.createElement(f,a(a({ref:r},u),{},{components:p})):t.createElement(f,a({ref:r},u))}));function m(e,r){var p=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=p.length,a=new Array(i);a[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=p[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},1669:function(e,r,p){p.r(r),p.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var t=p(7462),n=p(3366),i=(p(7294),p(3905)),a=["components"],l={id:"supplier-variant-composite",title:"SupplierVariantComposite"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite",title:"SupplierVariantComposite",description:"A flattended supplierVariant with an optional supplement to match the inputs and avoid clashes with subresolvers.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-composite",title:"SupplierVariantComposite"},sidebar:"apisSidebar",previous:{title:"SupplierVariantCompositeCreateResponse",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-composite-create-response"},next:{title:"SupplierVariantConnection",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-connection"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>supplierVariant</code> (<code>SupplierVariant</code>)",id:"suppliervariant-suppliervariant",level:4},{value:"<code>supplierVariantSupplement</code> (<code>SupplierVariantSupplement</code>)",id:"suppliervariantsupplement-suppliervariantsupplement",level:4}],d={toc:c};function m(e){var r=e.components,p=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,p,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A flattended supplierVariant with an optional supplement to match the inputs and avoid clashes with subresolvers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantComposite {\n  supplierVariant: SupplierVariant!\n  supplierVariantSupplement: SupplierVariantSupplement\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"suppliervariant-suppliervariant"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierVariant")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariant")),")"),(0,i.kt)("h4",{id:"suppliervariantsupplement-suppliervariantsupplement"},(0,i.kt)("inlineCode",{parentName:"h4"},"supplierVariantSupplement")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-supplement"},(0,i.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplement")),")"))}m.isMDXComponent=!0}}]);