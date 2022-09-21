"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[46882],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return s}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),m=c(t),s=a,f=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var d={};for(var p in r)hasOwnProperty.call(r,p)&&(d[p]=r[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20430:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],d={id:"product-image-from-url-input",title:"ProductImageFromUrlInput",hide_table_of_contents:!1},p=void 0,c={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-url-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-url-input",title:"ProductImageFromUrlInput",description:"Input object for creating a ProductContentItem Image from a URL",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-url-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-url-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-url-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-url-input.mdx",tags:[],version:"current",frontMatter:{id:"product-image-from-url-input",title:"ProductImageFromUrlInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"ProductImageFromFileInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-image-from-file-input"},next:{title:"ProductLocaleCreateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-locale-create-input"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>alt</code> (<code>String!</code>)",id:"alt-string",level:4},{value:"<code>category</code> (<code>String</code>)",id:"category-string",level:4},{value:"<code>demandHqId</code> (<code>ID!</code>)",id:"demandhqid-id",level:4},{value:"<code>position</code> (<code>Int</code>)",id:"position-int",level:4},{value:"<code>productId</code> (<code>ID!</code>)",id:"productid-id",level:4},{value:"<code>url</code> (<code>String!</code>)",id:"url-string",level:4}],m={toc:u};function s(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object for creating a ProductContentItem Image from a URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProductImageFromUrlInput {\n  alt: String!\n  category: String\n  demandHqId: ID!\n  position: Int\n  productId: ID!\n  url: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"alt-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"alt"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"category-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"category"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"demandHqId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"position-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"position"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential."),(0,i.kt)("h4",{id:"productid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"productId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"url-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"url"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}s.isMDXComponent=!0}}]);