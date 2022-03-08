"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[7262],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,g=u["".concat(c,".").concat(f)]||u[f]||l[f]||p;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<p;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4778:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return s},toc:function(){return l},default:function(){return f}});var r=t(7462),a=t(3366),p=(t(7294),t(3905)),o=["components"],i={id:"app-connection",title:"AppConnection"},c=void 0,d={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection",id:"developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection",title:"AppConnection",description:"Paginate through Apps",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/objects",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-connection.mdx",tags:[],version:"current",frontMatter:{id:"app-connection",title:"AppConnection"},sidebar:"apisSidebar",previous:{title:"AppClientResponse",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-client-response"},next:{title:"AppCreateOutput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-create-output"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>edges</code> (<code>AppEdge</code>)",id:"edges-appedge",level:4},{value:"<code>nodes</code> (<code>App</code>)",id:"nodes-app",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4}],u={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Paginate through Apps"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type AppConnection {\n  edges: [AppEdge]\n  nodes: [App]\n  pageInfo: PageInfo!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"edges-appedge"},(0,p.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app-edge"},(0,p.kt)("inlineCode",{parentName:"a"},"AppEdge")),")"),(0,p.kt)("h4",{id:"nodes-app"},(0,p.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/app"},(0,p.kt)("inlineCode",{parentName:"a"},"App")),")"),(0,p.kt)("h4",{id:"pageinfo-pageinfo"},(0,p.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/objects/page-info"},(0,p.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"))}f.isMDXComponent=!0}}]);