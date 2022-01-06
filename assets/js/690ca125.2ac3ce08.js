"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[2901],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,g=f["".concat(l,".").concat(d)]||f[d]||c[d]||p;return n?t.createElement(g,o(o({ref:r},u),{},{components:n})):t.createElement(g,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},314:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var t=n(3117),a=n(102),p=(n(7294),n(3905)),o=["components"],i={id:"page-info",title:"PageInfo"},l=void 0,s={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/objects/page-info",id:"developers/supplier-apis/supply-api/graphql/reference/objects/page-info",title:"PageInfo",description:"Information on Pagination",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/objects/page-info.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/objects",slug:"/developers/supplier-apis/supply-api/graphql/reference/objects/page-info",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/page-info",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/objects/page-info.mdx",tags:[],version:"current",frontMatter:{id:"page-info",title:"PageInfo"},sidebar:"apisSidebar",previous:{title:"AppInstallationOutput",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/app-installation-output"},next:{title:"PublicApp",permalink:"/developers/supplier-apis/supply-api/graphql/reference/objects/public-app"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>endCursor</code> (String)",id:"endcursor-string",children:[],level:4},{value:"<code>hasNextPage</code> (Boolean)",id:"hasnextpage-boolean",children:[],level:4},{value:"<code>hasPreviousPage</code> (Boolean)",id:"haspreviouspage-boolean",children:[],level:4},{value:"<code>startCursor</code> (String)",id:"startcursor-string",children:[],level:4}],level:3}],c={toc:u};function f(e){var r=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Information on Pagination"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type PageInfo {\n  endCursor: String\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"endcursor-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"endCursor")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"The cursor to use when paginating forwards (using first/after). Will always be\npopulated regardless of if a next page exists."),(0,p.kt)("h4",{id:"hasnextpage-boolean"},(0,p.kt)("inlineCode",{parentName:"h4"},"hasNextPage")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,p.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,p.kt)("p",null,"Whether or not using the endCursor will result in more results. Always\npopulated, but will always be false when paginating using last/before."),(0,p.kt)("h4",{id:"haspreviouspage-boolean"},(0,p.kt)("inlineCode",{parentName:"h4"},"hasPreviousPage")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/boolean"},(0,p.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,p.kt)("p",null,"Whether or not using the startCursor will result in more results. Always\npopulated, but will always be false when paginating using first/after."),(0,p.kt)("h4",{id:"startcursor-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"startCursor")," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("p",null,"The cursor to use when paginating backwards (using last/before). Will always\nbe populated regardless of if a previous page exists"))}f.isMDXComponent=!0}}]);