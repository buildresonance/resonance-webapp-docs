"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[84282],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=d(t),f=a,u=g["".concat(c,".").concat(f)]||g[f]||s[f]||o;return t?r.createElement(u,i(i({ref:n},l),{},{components:t})):r.createElement(u,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},49133:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"page-connection",title:"PageConnection"},c=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",title:"PageConnection",description:"Paginate through Pages",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection.mdx",tags:[],version:"current",frontMatter:{id:"page-connection",title:"PageConnection"},sidebar:"apisSidebar",previous:{title:"PageConnectionWithSearch",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection-with-search"},next:{title:"PageContentItem",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-content-item"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>PageEdge</code>)",id:"edges-pageedge",level:4},{value:"<code>nodes</code> (<code>Page</code>)",id:"nodes-page",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],g={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through Pages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageConnection {\n  edges: [PageEdge]!\n  nodes: [Page]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-pageedge"},(0,o.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"PageEdge")),")"),(0,o.kt)("h4",{id:"nodes-page"},(0,o.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"))}f.isMDXComponent=!0}}]);