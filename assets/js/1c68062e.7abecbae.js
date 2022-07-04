"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[73219],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(f,p(p({ref:t},l),{},{components:n})):a.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var d=2;d<o;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),p=["components"],i={id:"create-page",title:"createPage",hide_table_of_contents:!1},c=void 0,d={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page",title:"createPage",description:"Add a new Page to a DemandHq.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page.mdx",tags:[],version:"current",frontMatter:{id:"create-page",title:"createPage",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"createPageTypeContent",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content"},next:{title:"createProductLocale",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-product-locale"}},l={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>PageCreateInput!</code>)",id:"input-pagecreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Page</code>",id:"page",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add a new Page to a DemandHq."),(0,o.kt)("p",null,"Requires the page/write permission on the given DemandHq"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createPage(\n  input: PageCreateInput!\n): Page!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-pagecreateinput"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"input"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-create-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PageCreateInput!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"page"},(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page"},(0,o.kt)("inlineCode",{parentName:"a"},"Page"))),(0,o.kt)("p",null,'A Page is a part of the Demand Domain and represents a page with textual and\nimage content on it, that has nothing to do with products.\nThis can range from "About Us" pages to Blog articles. Use the "pageType" field to differentiate.\nPages do not have locales specified, but since everything would be different\nanyway, "pageType" can be a composite key with locale in it.'))}m.isMDXComponent=!0}}]);