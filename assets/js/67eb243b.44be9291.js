"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[38370],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(t),f=a,u=g["".concat(s,".").concat(f)]||g[f]||d[f]||o;return t?n.createElement(u,i(i({ref:r},c),{},{components:t})):n.createElement(u,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11813:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"page-tags",title:"PageTags"},s=void 0,l={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/objects/page-tags",id:"developers/demandhq-apis/storefront-api/graphql/reference/objects/page-tags",title:"PageTags",description:"These are the tags associated to the page",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-tags.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/objects",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-tags",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-tags",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-tags.mdx",tags:[],version:"current",frontMatter:{id:"page-tags",title:"PageTags"},sidebar:"apisSidebar",previous:{title:"PageInfo",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-info"},next:{title:"PageTermAggregations",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/page-term-aggregations"}},c={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>parsed</code> (<code>ParsedTag</code>)",id:"parsed-parsedtag",level:4},{value:"<code>raw</code> (<code>String</code>)",id:"raw-string",level:4}],g={toc:d};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These are the tags associated to the page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageTags {\n  parsed(\n  category: String\n  key: String\n): ParsedTag\n  raw: [String]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"parsed-parsedtag"},(0,o.kt)("inlineCode",{parentName:"h4"},"parsed")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/parsed-tag"},(0,o.kt)("inlineCode",{parentName:"a"},"ParsedTag")),")"),(0,o.kt)("p",null,"Get parsed, and optionally filtered, tags for a Page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"category-string"},(0,o.kt)("inlineCode",{parentName:"h5"},"category")," (",(0,o.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,o.kt)("p",null,"Optionally filter tags by category."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"key-string"},(0,o.kt)("inlineCode",{parentName:"h5"},"key")," (",(0,o.kt)("a",{parentName:"h5",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,o.kt)("p",null,"Optionally filter tags by key. If category is not provided, but key is, category must be null to be returned."),(0,o.kt)("h4",{id:"raw-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"raw")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);