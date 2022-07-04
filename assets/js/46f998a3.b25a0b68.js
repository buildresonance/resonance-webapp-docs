"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[6846],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return l}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),l=r,f=c["".concat(o,".").concat(l)]||c[l]||s[l]||d;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,i=new Array(d);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<d;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var a=n(87462),r=n(63366),d=(n(67294),n(3905)),i=["components"],p={id:"update-demand-hq-identity",title:"updateDemandHqIdentity",hide_table_of_contents:!1},o=void 0,u={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq-identity",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq-identity",title:"updateDemandHqIdentity",description:"Update a DemandHqIdentity for a DemandHq (give a user permissions)",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq-identity.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq-identity",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq-identity",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq-identity.mdx",tags:[],version:"current",frontMatter:{id:"update-demand-hq-identity",title:"updateDemandHqIdentity",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"updateCustomer",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-customer"},next:{title:"updateDemandHq",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-demand-hq"}},m={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>DemandHqIdentityUpdateInput!</code>)",id:"input-demandhqidentityupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>DemandHqIdentity</code>",id:"demandhqidentity",level:4}],c={toc:s};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,d.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Update a DemandHqIdentity for a DemandHq (give a user permissions)"),(0,d.kt)("p",null,"Requires the demandHqidentity/write permission on the given DemandHq"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"updateDemandHqIdentity(\n  input: DemandHqIdentityUpdateInput!\n): DemandHqIdentity!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"input-demandhqidentityupdateinput"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"input"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/demand-hq-identity-update-input"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityUpdateInput!")),")"),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"demandhqidentity"},(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity"))),(0,d.kt)("p",null,"Indicates a User or App has permissions on a DemandHq"))}l.isMDXComponent=!0}}]);