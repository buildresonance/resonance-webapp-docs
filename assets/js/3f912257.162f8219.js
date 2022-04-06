"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4282],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=d(r),f=a,u=g["".concat(c,".").concat(f)]||g[f]||s[f]||o;return r?t.createElement(u,i(i({ref:n},l),{},{components:r})):t.createElement(u,i({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},49133:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return l},toc:function(){return s},default:function(){return f}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={id:"page-connection",title:"PageConnection"},c=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",title:"PageConnection",description:"Paginate through Pages",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/page-connection.mdx",tags:[],version:"current",frontMatter:{id:"page-connection",title:"PageConnection"},sidebar:"apisSidebar",previous:{title:"DemandHq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq"},next:{title:"PageContentItem",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-content-item"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>PageEdge</code>)",id:"edges-pageedge",level:4},{value:"<code>nodes</code> (<code>Page</code>)",id:"nodes-page",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],g={toc:s};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through Pages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageConnection {\n  edges: [PageEdge]!\n  nodes: [Page]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-pageedge"},(0,o.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"PageEdge")),")"),(0,o.kt)("h4",{id:"nodes-page"},(0,o.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"))}f.isMDXComponent=!0}}]);