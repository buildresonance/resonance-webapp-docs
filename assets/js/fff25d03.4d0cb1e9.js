"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[33433],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=g(e,["components","mdxType","originalType","parentName"]),l=c(t),m=a,u=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return t?n.createElement(u,i(i({ref:r},s),{},{components:t})):n.createElement(u,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var g={};for(var p in r)hasOwnProperty.call(r,p)&&(g[p]=r[p]);g.originalType=e,g.mdxType="string"==typeof e?e:a,i[1]=g;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},62980:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return d}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],g={id:"page-term-aggregations",title:"PageTermAggregations"},p=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations",title:"PageTermAggregations",description:"A Map of several fields of Page and term aggregations for each",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-term-aggregations.mdx",tags:[],version:"current",frontMatter:{id:"page-term-aggregations",title:"PageTermAggregations"},sidebar:"apisSidebar",previous:{title:"PageTags",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-tags"},next:{title:"PageTypeContentConnection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-type-content-connection"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>authors</code> (<code>TermAggregation</code>)",id:"authors-termaggregation",level:4},{value:"<code>pageTypes</code> (<code>TermAggregation</code>)",id:"pagetypes-termaggregation",level:4},{value:"<code>tags</code> (<code>TermAggregation</code>)",id:"tags-termaggregation",level:4}],l={toc:d};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Map of several fields of Page and term aggregations for each"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageTermAggregations {\n  authors: [TermAggregation!]\n  pageTypes: [TermAggregation!]\n  tags: [TermAggregation!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"authors-termaggregation"},(0,o.kt)("inlineCode",{parentName:"h4"},"authors")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"TermAggregation")),")"),(0,o.kt)("h4",{id:"pagetypes-termaggregation"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageTypes")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"TermAggregation")),")"),(0,o.kt)("h4",{id:"tags-termaggregation"},(0,o.kt)("inlineCode",{parentName:"h4"},"tags")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/term-aggregation"},(0,o.kt)("inlineCode",{parentName:"a"},"TermAggregation")),")"))}m.isMDXComponent=!0}}]);