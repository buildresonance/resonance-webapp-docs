"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[58785],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return u}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,m=f["".concat(c,".").concat(u)]||f[u]||s[u]||o;return r?t.createElement(m,i(i({ref:n},l),{},{components:r})):t.createElement(m,i({ref:n},l))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50107:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return s}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],d={id:"nav-connection",title:"NavConnection",hide_table_of_contents:!1},c=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/nav-connection",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/nav-connection",title:"NavConnection",description:"Paginate through Navs",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/nav-connection.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/nav-connection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/nav-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/nav-connection.mdx",tags:[],version:"current",frontMatter:{id:"nav-connection",title:"NavConnection",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"DemandHq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq"},next:{title:"NavEdge",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/nav-edge"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>[NavEdge]!</code>)",id:"edges-navedge",level:4},{value:"<code>nodes</code> (<code>[Nav]!</code>)",id:"nodes-nav",level:4},{value:"<code>pageInfo</code> (<code>PageInfo!</code>)",id:"pageinfo-pageinfo",level:4}],f={toc:s};function u(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Paginate through Navs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type NavConnection {\n  edges: [NavEdge]!\n  nodes: [Nav]!\n  pageInfo: PageInfo!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-navedge"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"edges"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/nav-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[NavEdge]!")),")"),(0,o.kt)("h4",{id:"nodes-nav"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/nav"},(0,o.kt)("inlineCode",{parentName:"a"},"[Nav]!")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"pageInfo"))," (",(0,o.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"))}u.isMDXComponent=!0}}]);