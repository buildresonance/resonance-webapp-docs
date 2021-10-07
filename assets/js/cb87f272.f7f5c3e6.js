"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[5039],{3905:function(e,r,p){p.d(r,{Zo:function(){return u},kt:function(){return f}});var t=p(7294);function n(e,r,p){return r in e?Object.defineProperty(e,r,{value:p,enumerable:!0,configurable:!0,writable:!0}):e[r]=p,e}function a(e,r){var p=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),p.push.apply(p,t)}return p}function i(e){for(var r=1;r<arguments.length;r++){var p=null!=arguments[r]?arguments[r]:{};r%2?a(Object(p),!0).forEach((function(r){n(e,r,p[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(p)):a(Object(p)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(p,r))}))}return e}function l(e,r){if(null==e)return{};var p,t,n=function(e,r){if(null==e)return{};var p,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)p=a[t],r.indexOf(p)>=0||(n[p]=e[p]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)p=a[t],r.indexOf(p)>=0||Object.prototype.propertyIsEnumerable.call(e,p)&&(n[p]=e[p])}return n}var o=t.createContext({}),s=function(e){var r=t.useContext(o),p=r;return e&&(p="function"==typeof e?e(r):i(i({},r),e)),p},u=function(e){var r=s(e.components);return t.createElement(o.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var p=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(p),f=n,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||a;return p?t.createElement(m,i(i({ref:r},u),{},{components:p})):t.createElement(m,i({ref:r},u))}));function f(e,r){var p=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=p.length,i=new Array(a);i[0]=d;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=p[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,p)}d.displayName="MDXCreateElement"},3664:function(e,r,p){p.r(r),p.d(r,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=p(2122),n=p(9756),a=(p(7294),p(3905)),i=["components"],l={id:"supplier-variant-locale-update-input",title:"SupplierVariantLocaleUpdateInput"},o=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",isDocsHomePage:!1,title:"SupplierVariantLocaleUpdateInput",description:"The necessary fields in order to update a supplierVariantLocale.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-update-input.mdx",version:"current",frontMatter:{id:"supplier-variant-locale-update-input",title:"SupplierVariantLocaleUpdateInput"},sidebar:"apisSidebar",previous:{title:"SupplierVariantLocaleCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-locale-create-input"},next:{title:"SupplierVariantOptionInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-variant-option-input"}},u=[{value:"Fields",id:"fields",children:[]}],c={toc:u};function d(e){var r=e.components,p=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},c,p,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The necessary fields in order to update a supplierVariantLocale.\nID fields are required, others are optional, only included fields will be updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantLocaleUpdateInput {\n  featureBullets: [String]\n  isDefault: Boolean\n  localeType: ResonanceLocaleType!\n  productDescription: String\n  supplierId: ID!\n  supplierVariantId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"featurebullets-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,a.kt)("p",null,"Limited to 5 bullets"),(0,a.kt)("h4",{id:"isdefault-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"isDefault")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h4",{id:"localetype-resonancelocaletype"},(0,a.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!")),")"),(0,a.kt)("h4",{id:"productdescription-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"productDescription")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"supplierid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"suppliervariantid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"supplierVariantId")," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"))}d.isMDXComponent=!0}}]);