"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7961],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||s[m]||p;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],i={id:"create-page-type-content",title:"createPageTypeContent"},c=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content",title:"createPageTypeContent",description:"Create a new PageTypeContent.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-type-content.mdx",tags:[],version:"current",frontMatter:{id:"create-page-type-content",title:"createPageTypeContent"},sidebar:"apisSidebar",previous:{title:"createPageImagesFromFiles",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page-images-from-files"},next:{title:"createPage",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/create-page"}},d={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>PageTypeContentCreateInput</code>)",id:"input-pagetypecontentcreateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>PageTypeContent</code>",id:"pagetypecontent",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Create a new PageTypeContent."),(0,p.kt)("p",null,"Requires the pagetypecontent/write scope on the associated DemandHq."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"createPageTypeContent(\n  input: PageTypeContentCreateInput!\n): PageTypeContent!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-pagetypecontentcreateinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/page-type-content-create-input"},(0,p.kt)("inlineCode",{parentName:"a"},"PageTypeContentCreateInput")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"pagetypecontent"},(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-type-content"},(0,p.kt)("inlineCode",{parentName:"a"},"PageTypeContent"))),(0,p.kt)("p",null,"This holds content specific to a pageType. This is generally used on a page that lists all pages for a pageType."))}m.isMDXComponent=!0}}]);