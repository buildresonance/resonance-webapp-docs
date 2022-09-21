"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[49011],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var p=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);r&&(p=p.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,p)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,p,n=function(e,r){if(null==e)return{};var t,p,n={},a=Object.keys(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)t=a[p],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=p.createContext({}),o=function(e){var r=p.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=o(e.components);return p.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return p.createElement(p.Fragment,{},r)}},c=p.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=o(t),m=n,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?p.createElement(f,i(i({ref:r},s),{},{components:t})):p.createElement(f,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=c;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<a;o++)i[o]=t[o];return p.createElement.apply(null,i)}return p.createElement.apply(null,t)}c.displayName="MDXCreateElement"},37296:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return d}});var p=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],u={id:"update-supplier-demand-hq",title:"updateSupplierDemandHq",hide_table_of_contents:!1},l=void 0,o={unversionedId:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-demand-hq",id:"developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-demand-hq",title:"updateSupplierDemandHq",description:"Updates an existing SupplierDemandHq.",source:"@site/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-demand-hq.mdx",sourceDirName:"developers/supplier-apis/supply-api/graphql/reference/mutations",slug:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-demand-hq",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-demand-hq",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-demand-hq.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-demand-hq",title:"updateSupplierDemandHq",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"updateAppPermissions",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-app-permissions"},next:{title:"updateSupplierIdentity",permalink:"/developers/supplier-apis/supply-api/graphql/reference/mutations/update-supplier-identity"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>SupplierDemandHqUpdateInput!</code>)",id:"input-supplierdemandhqupdateinput",level:4},{value:"Type",id:"type",level:3},{value:"<code>SupplierDemandHq</code>",id:"supplierdemandhq",level:4}],c={toc:d};function m(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,p.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Updates an existing SupplierDemandHq."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'        Requires the requesting identity to have the "supplierdemandhq/write" permission on the associated Supplier.\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierDemandHq(\n  input: SupplierDemandHqUpdateInput!\n): SupplierDemandHq!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-supplierdemandhqupdateinput"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"input"))," (",(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/inputs/supplier-demand-hq-update-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierDemandHqUpdateInput!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"supplierdemandhq"},(0,a.kt)("a",{parentName:"h4",href:"/developers/supplier-apis/supply-api/graphql/reference/objects/supplier-demand-hq"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierDemandHq"))),(0,a.kt)("p",null,"A relationship between a Supplier and a DemandHQ."))}m.isMDXComponent=!0}}]);