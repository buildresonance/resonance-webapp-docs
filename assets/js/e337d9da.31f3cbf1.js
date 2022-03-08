"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6191],{3905:function(e,p,t){t.d(p,{Zo:function(){return o},kt:function(){return m}});var r=t(7294);function n(e,p,t){return p in e?Object.defineProperty(e,p,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[p]=t,e}function a(e,p){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);p&&(r=r.filter((function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var p=1;p<arguments.length;p++){var t=null!=arguments[p]?arguments[p]:{};p%2?a(Object(t),!0).forEach((function(p){n(e,p,t[p])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(t,p))}))}return e}function u(e,p){if(null==e)return{};var t,r,n=function(e,p){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],p.indexOf(t)>=0||(n[t]=e[t]);return n}(e,p);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],p.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var p=r.useContext(l),t=p;return e&&(t="function"==typeof e?e(p):i(i({},p),e)),t},o=function(e){var p=s(e.components);return r.createElement(l.Provider,{value:p},e.children)},c={inlineCode:"code",wrapper:function(e){var p=e.children;return r.createElement(r.Fragment,{},p)}},d=r.forwardRef((function(e,p){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(f,i(i({ref:p},o),{},{components:t})):r.createElement(f,i({ref:p},o))}));function m(e,p){var t=arguments,n=p&&p.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var u={};for(var l in p)hasOwnProperty.call(p,l)&&(u[l]=p[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},351:function(e,p,t){t.r(p),t.d(p,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return o},toc:function(){return c},default:function(){return m}});var r=t(7462),n=t(3366),a=(t(7294),t(3905)),i=["components"],u={id:"update-supplier-variant-supplement",title:"updateSupplierVariantSupplement"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-supplement",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-supplement",title:"updateSupplierVariantSupplement",description:"Update an existing supplierVariantSupplement",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-supplement.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-supplement",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-supplement",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-supplement.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-variant-supplement",title:"updateSupplierVariantSupplement"},sidebar:"apisSidebar",previous:{title:"updateSupplierVariantLocale",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant-locale"},next:{title:"updateSupplierVariant",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-variant"}},o={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierVariantSupplementUpdateInput</code>)",id:"input-suppliervariantsupplementupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierVariantSupplement</code>",id:"suppliervariantsupplement",level:4}],d={toc:c};function m(e){var p=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:p,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Update an existing supplierVariantSupplement"),(0,a.kt)("p",null,"Requires suppliervariantsupplement/write permission on the requesting identity"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierVariantSupplement(\n  input: SupplierVariantSupplementUpdateInput!\n): SupplierVariantSupplement!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-suppliervariantsupplementupdateinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-supplement-update-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementUpdateInput")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"suppliervariantsupplement"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-supplement"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplement"))),(0,a.kt)("p",null,"This has a one to one relationship with SupplierVariant, and provides supplemental data for the SupplierVariant.\nThese items get updated at a lower frequency, and are therefore separate."))}m.isMDXComponent=!0}}]);