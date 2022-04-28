"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[86129],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||l[f]||i;return t?n.createElement(m,p(p({ref:r},d),{},{components:t})):n.createElement(m,p({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},51838:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),p=["components"],o={id:"partner-create-input",title:"PartnerCreateInput"},c=void 0,s={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input",title:"PartnerCreateInput",description:"The necessary fields in order to create a new partner",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input",editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-create-input.mdx",tags:[],version:"current",frontMatter:{id:"partner-create-input",title:"PartnerCreateInput"},sidebar:"apisSidebar",previous:{title:"AppUpdateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/app-update-input"},next:{title:"PartnerIdentityCreateInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/partner-identity-create-input"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4}],u={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The necessary fields in order to create a new partner"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PartnerCreateInput {\n  description: String\n  name: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Description of the partner\nLimited to 8000 characters"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The name of the partner\nLimited to 128 characters"))}f.isMDXComponent=!0}}]);