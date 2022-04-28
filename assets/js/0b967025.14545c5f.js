"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[43535],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return v}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=t.createContext({}),d=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),v=i,f=s["".concat(p,".").concat(v)]||s[v]||u[v]||a;return n?t.createElement(f,l(l({ref:r},c),{},{components:n})):t.createElement(f,l({ref:r},c))}));function v(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70079:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var t=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],o={id:"supplier-variant-standardized-color",title:"SupplierVariantStandardizedColor"},p=void 0,d={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-standardized-color",id:"developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-standardized-color",title:"SupplierVariantStandardizedColor",description:"Indicates a standardized color for a variant, i.e. Blue for 'Topaz'",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-standardized-color.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/enums",slug:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-standardized-color",permalink:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-standardized-color",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-standardized-color.mdx",tags:[],version:"current",frontMatter:{id:"supplier-variant-standardized-color",title:"SupplierVariantStandardizedColor"},sidebar:"apisSidebar",previous:{title:"SupplierVariantShippingDimensionUnit",permalink:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-shipping-dimension-unit"},next:{title:"SupplierVariantStatus",permalink:"/developers/supplier-apis/supply-api/graphql/reference/enums/supplier-variant-status"}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code>BEIGE</code>",id:"beige",level:4},{value:"<code>BLACK</code>",id:"black",level:4},{value:"<code>BLUE</code>",id:"blue",level:4},{value:"<code>BRONZE</code>",id:"bronze",level:4},{value:"<code>BROWN</code>",id:"brown",level:4},{value:"<code>CLEAR</code>",id:"clear",level:4},{value:"<code>GOLD</code>",id:"gold",level:4},{value:"<code>GRAY</code>",id:"gray",level:4},{value:"<code>GREEN</code>",id:"green",level:4},{value:"<code>MULTICOLOR</code>",id:"multicolor",level:4},{value:"<code>OFFWHITE</code>",id:"offwhite",level:4},{value:"<code>ORANGE</code>",id:"orange",level:4},{value:"<code>PINK</code>",id:"pink",level:4},{value:"<code>PURPLE</code>",id:"purple",level:4},{value:"<code>RED</code>",id:"red",level:4},{value:"<code>SILVER</code>",id:"silver",level:4},{value:"<code>WHITE</code>",id:"white",level:4},{value:"<code>YELLOW</code>",id:"yellow",level:4}],s={toc:u};function v(e){var r=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Indicates a standardized color for a variant, i.e. Blue for 'Topaz'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupplierVariantStandardizedColor {\n  BEIGE\n  BLACK\n  BLUE\n  BRONZE\n  BROWN\n  CLEAR\n  GOLD\n  GRAY\n  GREEN\n  MULTICOLOR\n  OFFWHITE\n  ORANGE\n  PINK\n  PURPLE\n  RED\n  SILVER\n  WHITE\n  YELLOW\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"beige"},(0,a.kt)("inlineCode",{parentName:"h4"},"BEIGE")),(0,a.kt)("h4",{id:"black"},(0,a.kt)("inlineCode",{parentName:"h4"},"BLACK")),(0,a.kt)("h4",{id:"blue"},(0,a.kt)("inlineCode",{parentName:"h4"},"BLUE")),(0,a.kt)("h4",{id:"bronze"},(0,a.kt)("inlineCode",{parentName:"h4"},"BRONZE")),(0,a.kt)("h4",{id:"brown"},(0,a.kt)("inlineCode",{parentName:"h4"},"BROWN")),(0,a.kt)("h4",{id:"clear"},(0,a.kt)("inlineCode",{parentName:"h4"},"CLEAR")),(0,a.kt)("h4",{id:"gold"},(0,a.kt)("inlineCode",{parentName:"h4"},"GOLD")),(0,a.kt)("h4",{id:"gray"},(0,a.kt)("inlineCode",{parentName:"h4"},"GRAY")),(0,a.kt)("h4",{id:"green"},(0,a.kt)("inlineCode",{parentName:"h4"},"GREEN")),(0,a.kt)("h4",{id:"multicolor"},(0,a.kt)("inlineCode",{parentName:"h4"},"MULTICOLOR")),(0,a.kt)("h4",{id:"offwhite"},(0,a.kt)("inlineCode",{parentName:"h4"},"OFFWHITE")),(0,a.kt)("h4",{id:"orange"},(0,a.kt)("inlineCode",{parentName:"h4"},"ORANGE")),(0,a.kt)("h4",{id:"pink"},(0,a.kt)("inlineCode",{parentName:"h4"},"PINK")),(0,a.kt)("h4",{id:"purple"},(0,a.kt)("inlineCode",{parentName:"h4"},"PURPLE")),(0,a.kt)("h4",{id:"red"},(0,a.kt)("inlineCode",{parentName:"h4"},"RED")),(0,a.kt)("h4",{id:"silver"},(0,a.kt)("inlineCode",{parentName:"h4"},"SILVER")),(0,a.kt)("h4",{id:"white"},(0,a.kt)("inlineCode",{parentName:"h4"},"WHITE")),(0,a.kt)("h4",{id:"yellow"},(0,a.kt)("inlineCode",{parentName:"h4"},"YELLOW")))}v.isMDXComponent=!0}}]);