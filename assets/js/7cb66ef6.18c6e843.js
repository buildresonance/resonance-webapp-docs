"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[45722],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(t),f=o,d=g["".concat(c,".").concat(f)]||g[f]||u[f]||a;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11679:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"collection-term-aggregations",title:"collectionTermAggregations",hide_table_of_contents:!1},c=void 0,s={unversionedId:"developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-term-aggregations",id:"developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-term-aggregations",title:"collectionTermAggregations",description:"Term aggregations for Collections, typically used to suggest terms to use in Search Filters.",source:"@site/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-term-aggregations.mdx",sourceDirName:"developers/demandhq-apis/storefront-api/graphql/reference/queries",slug:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-term-aggregations",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-term-aggregations",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-term-aggregations.mdx",tags:[],version:"current",frontMatter:{id:"collection-term-aggregations",title:"collectionTermAggregations",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"VariantWeight",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/variant-weight"},next:{title:"collectionTypeContent",permalink:"/developers/demandhq-apis/storefront-api/graphql/reference/queries/collection-type-content"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>numberOfResults</code> (<code>Int!</code>)",id:"numberofresults-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>CollectionTermAggregations</code>",id:"collectiontermaggregations",level:4}],g={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Term aggregations for Collections, typically used to suggest terms to use in Search Filters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"collectionTermAggregations(\n  numberOfResults: Int!\n): CollectionTermAggregations\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"numberofresults-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"numberOfResults"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"The number of aggregations to return for each type."),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"collectiontermaggregations"},(0,a.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/storefront-api/graphql/reference/objects/collection-term-aggregations"},(0,a.kt)("inlineCode",{parentName:"a"},"CollectionTermAggregations"))),(0,a.kt)("p",null,"A Map of several fields of Collection and term aggregations for each"))}f.isMDXComponent=!0}}]);