"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[78196],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],d={id:"delete-page-content-item",title:"deletePageContentItem"},p=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item",title:"deletePageContentItem",description:"Delete a PageContentItem from a Page.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page-content-item.mdx",tags:[],version:"current",frontMatter:{id:"delete-page-content-item",title:"deletePageContentItem"},sidebar:"apisSidebar",previous:{title:"deleteDemandHqIdentity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-demand-hq-identity"},next:{title:"deletePage",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/delete-page"}},c={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>contentItemId</code> (<code>ID</code>)",id:"contentitemid-id",level:4},{value:"<code>pageId</code> (<code>ID</code>)",id:"pageid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>DeletePageContentItemResponse</code>",id:"deletepagecontentitemresponse",level:4}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Delete a PageContentItem from a Page."),(0,o.kt)("p",null,"Requires the page/write permission on the given DemandHq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"deletePageContentItem(\n  contentItemId: ID!\n  pageId: ID!\n): DeletePageContentItemResponse!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"contentitemid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"contentItemId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"pageid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageId")," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"deletepagecontentitemresponse"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/delete-page-content-item-response"},(0,o.kt)("inlineCode",{parentName:"a"},"DeletePageContentItemResponse"))),(0,o.kt)("p",null,"Returned object from deletePageContentItem"))}u.isMDXComponent=!0}}]);