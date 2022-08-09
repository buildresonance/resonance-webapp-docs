"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[21138],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,d(d({ref:t},s),{},{components:n})):r.createElement(m,d({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84556:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),d=["components"],o={id:"product-update-input",title:"ProductUpdateInput",hide_table_of_contents:!1},p=void 0,l={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/inputs/product-update-input",id:"developers/demandhq-apis/demand-api/graphql/reference/inputs/product-update-input",title:"ProductUpdateInput",description:"ID Fields are required, but all other fields are optional, only included fields will be updated.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-update-input.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/inputs",slug:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-update-input",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-update-input.mdx",tags:[],version:"current",frontMatter:{id:"product-update-input",title:"ProductUpdateInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"ProductStatusFilterInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/product-status-filter-input"},next:{title:"StorefrontAuthenticationSettingsInput",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/inputs/storefront-authentication-settings-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>optionLabels</code> (<code>[String!]</code>)",id:"optionlabels-string",level:4},{value:"<code>productId</code> (<code>ID!</code>)",id:"productid-id",level:4},{value:"<code>publishedAt</code> (<code>Date</code>)",id:"publishedat-date",level:4},{value:"<code>seoTitle</code> (<code>String</code>)",id:"seotitle-string",level:4},{value:"<code>slug</code> (<code>String</code>)",id:"slug-string",level:4},{value:"<code>status</code> (<code>DemandEntityStatus</code>)",id:"status-demandentitystatus",level:4},{value:"<code>storefrontIds</code> (<code>[ID]</code>)",id:"storefrontids-id",level:4},{value:"<code>tags</code> (<code>[String]</code>)",id:"tags-string",level:4},{value:"<code>title</code> (<code>String</code>)",id:"title-string",level:4},{value:"<code>vendor</code> (<code>String</code>)",id:"vendor-string",level:4}],u={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ID Fields are required, but all other fields are optional, only included fields will be updated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ProductUpdateInput {\n  optionLabels: [String!]\n  productId: ID!\n  publishedAt: Date\n  seoTitle: String\n  slug: String\n  status: DemandEntityStatus\n  storefrontIds: [ID]\n  tags: [String]\n  title: String\n  vendor: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"optionlabels-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"optionLabels"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("p",null,'The labels for the possible option groups for this product, i.e. "Color", "Size", "Material", etc.\nThese will match with labelOptions in Variants.'),(0,i.kt)("h4",{id:"productid-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"productId"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"publishedat-date"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"publishedAt"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,i.kt)("p",null,"ISO format date when the product was published. Note that ensuing updates with\nstatus set to PUBLISHED will republish and re-set this date."),(0,i.kt)("h4",{id:"seotitle-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"seoTitle"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Title specific for SEO purposes, limit 256 characters."),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"slug"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Slug for the URL for this product. Limit 128 characters."),(0,i.kt)("h4",{id:"status-demandentitystatus"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"status"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-entity-status"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandEntityStatus")),")"),(0,i.kt)("p",null,"The status of the product, can be DRAFT or PUBLISHED."),(0,i.kt)("h4",{id:"storefrontids-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"storefrontIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID]")),")"),(0,i.kt)("p",null,"Which storefronts should have access to this product?"),(0,i.kt)("h4",{id:"tags-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"tags"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String]")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"title"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The title of the product, limit 256 characters."),(0,i.kt)("h4",{id:"vendor-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"vendor"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"AKA Brand. Limit 256 characters."))}h.isMDXComponent=!0}}]);