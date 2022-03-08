"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6915],{3905:function(e,n,i){i.d(n,{Zo:function(){return u},kt:function(){return h}});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function p(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?p(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},p=Object.keys(e);for(r=0;r<p.length;r++)i=p[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)i=p[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=r.createContext({}),s=function(e){var n=r.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(i),h=t,f=d["".concat(l,".").concat(h)]||d[h]||c[h]||p;return i?r.createElement(f,a(a({ref:n},u),{},{components:i})):r.createElement(f,a({ref:n},u))}));function h(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var p=i.length,a=new Array(p);a[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,a[1]=o;for(var s=2;s<p;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9461:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return h}});var r=i(7462),t=i(3366),p=(i(7294),i(3905)),a=["components"],o={id:"supplier-variant-shipping-dimensions",title:"SupplierVariantShippingDimensions"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-shipping-dimensions",id:"developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-shipping-dimensions",title:"SupplierVariantShippingDimensions",description:"Object to indicate all three shipping box dimensions and a unit",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-shipping-dimensions.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-shipping-dimensions",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-shipping-dimensions",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-shipping-dimensions.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-shipping-dimensions",title:"SupplierVariantShippingDimensions"},sidebar:"apisSidebar",previous:{title:"SupplierVariantOptions",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-options"},next:{title:"SupplierVariantSupplement",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-variant-supplement"}},u={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>Float</code>)",id:"height-float",level:4},{value:"<code>length</code> (<code>Float</code>)",id:"length-float",level:4},{value:"<code>unit</code> (<code>SupplierVariantShippingDimensionUnit</code>)",id:"unit-suppliervariantshippingdimensionunit",level:4},{value:"<code>width</code> (<code>Float</code>)",id:"width-float",level:4}],d={toc:c};function h(e){var n=e.components,i=(0,t.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Object to indicate all three shipping box dimensions and a unit"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplierVariantShippingDimensions {\n  height: Float!\n  length: Float!\n  unit: SupplierVariantShippingDimensionUnit!\n  width: Float!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"height-float"},(0,p.kt)("inlineCode",{parentName:"h4"},"height")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,p.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,p.kt)("h4",{id:"length-float"},(0,p.kt)("inlineCode",{parentName:"h4"},"length")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,p.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,p.kt)("h4",{id:"unit-suppliervariantshippingdimensionunit"},(0,p.kt)("inlineCode",{parentName:"h4"},"unit")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-shipping-dimension-unit"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplierVariantShippingDimensionUnit")),")"),(0,p.kt)("h4",{id:"width-float"},(0,p.kt)("inlineCode",{parentName:"h4"},"width")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/float"},(0,p.kt)("inlineCode",{parentName:"a"},"Float")),")"))}h.isMDXComponent=!0}}]);