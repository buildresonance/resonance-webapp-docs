"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[93310],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},i=Object.keys(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(p=0;p<i.length;p++)t=i[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=p.createContext({}),c=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return p.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},d=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return t?p.createElement(m,o(o({ref:r},u),{},{components:t})):p.createElement(m,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var c=2;c<i;c++)o[c]=t[c];return p.createElement.apply(null,o)}return p.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66250:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var p=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],a={id:"supplier-product-locale-in-composite-create-input",title:"SupplierProductLocaleInCompositeCreateInput"},l=void 0,c={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input",id:"developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input",title:"SupplierProductLocaleInCompositeCreateInput",description:"The necessary fields in order to create a new supplierProductLocale as part of a SupplierProductCompositeCreateInput",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/inputs",slug:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-in-composite-create-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-product-locale-in-composite-create-input",title:"SupplierProductLocaleInCompositeCreateInput"},sidebar:"apisSidebar",previous:{title:"SupplierProductLocaleCreateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-create-input"},next:{title:"SupplierProductLocaleUpdateInput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-product-locale-update-input"}},u={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>featureBullets</code> (<code>String</code>)",id:"featurebullets-string",level:4},{value:"<code>localeType</code> (<code>ResonanceLocaleType</code>)",id:"localetype-resonancelocaletype",level:4}],d={toc:s};function f(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,p.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new supplierProductLocale as part of a SupplierProductCompositeCreateInput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierProductLocaleInCompositeCreateInput {\n  description: String\n  featureBullets: [String]\n  localeType: ResonanceLocaleType!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"featurebullets-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"featureBullets")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Limited to 5 bullets"),(0,i.kt)("h4",{id:"localetype-resonancelocaletype"},(0,i.kt)("inlineCode",{parentName:"h4"},"localeType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/resonance-locale-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType")),")"))}f.isMDXComponent=!0}}]);