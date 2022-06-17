"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[160],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},25496:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],c={id:"collection-type-content-create-input",title:"CollectionTypeContentCreateInput"},d=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-create-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-create-input",title:"CollectionTypeContentCreateInput",description:"Input object to create a CollectionTypeContent.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-create-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-create-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-create-input.mdx",tags:[],version:"current",frontMatter:{id:"collection-type-content-create-input",title:"CollectionTypeContentCreateInput"},sidebar:"apisSidebar",previous:{title:"CollectionRulesInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-rules-input"},next:{title:"CollectionTypeContentUpdateInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/collection-type-content-update-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>collectionType</code> (<code>String</code>)",id:"collectiontype-string",level:4},{value:"<code>contentAsString</code> (<code>String</code>)",id:"contentasstring-string",level:4},{value:"<code>demandHqId</code> (<code>ID</code>)",id:"demandhqid-id",level:4},{value:"<code>secondaryContentAsString</code> (<code>String</code>)",id:"secondarycontentasstring-string",level:4},{value:"<code>storefrontId</code> (<code>ID</code>)",id:"storefrontid-id",level:4},{value:"<code>subtitle</code> (<code>String</code>)",id:"subtitle-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object to create a CollectionTypeContent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CollectionTypeContentCreateInput {\n  collectionType: String!\n  contentAsString: String\n  demandHqId: ID!\n  secondaryContentAsString: String\n  storefrontId: ID!\n  subtitle: String\n  title: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"collectiontype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"collectionType")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"contentasstring-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentAsString")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"demandhqid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"demandHqId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"secondarycontentasstring-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"secondaryContentAsString")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"storefrontid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"storefrontId")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"subtitle-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"subtitle")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);