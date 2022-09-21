"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[43966],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62526:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"product-tags",title:"ProductTags",hide_table_of_contents:!1},s=void 0,c={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags",title:"ProductTags",description:"These are the tags associated to the product",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-tags.mdx",tags:[],version:"current",frontMatter:{id:"product-tags",title:"ProductTags",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"ProductContentItemConnection",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-content-item-connection"},next:{title:"ProductTermAggregations",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/product-term-aggregations"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>parsed</code> (<code>[ParsedTag]</code>)",id:"parsed-parsedtag",level:4},{value:"<code>raw</code> (<code>[String]</code>)",id:"raw-string",level:4}],u={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These are the tags associated to the product"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductTags {\n  parsed(\n  category: String\n  key: String\n): [ParsedTag]\n  raw: [String]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"parsed-parsedtag"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"parsed"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/parsed-tag"},(0,o.kt)("inlineCode",{parentName:"a"},"[ParsedTag]")),")"),(0,o.kt)("p",null,"Get parsed, and optionally filtered, tags for a Product."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"category-string"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"category"))," (",(0,o.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,o.kt)("p",null,"Optionally filter tags by category."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"key-string"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"key"))," (",(0,o.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,o.kt)("p",null,"Optionally filter tags by key. If category is not provided, but key is, category must be null to be returned."),(0,o.kt)("h4",{id:"raw-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"raw"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String]")),")"))}f.isMDXComponent=!0}}]);