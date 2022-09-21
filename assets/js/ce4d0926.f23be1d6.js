"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[10205],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=t.createContext({}),o=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=o(e.components);return t.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,p=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||p;return n?t.createElement(f,i(i({ref:r},l),{},{components:n})):t.createElement(f,i({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<p;o++)i[o]=n[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77007:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var t=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],s={id:"request-supplier-access",title:"requestSupplierAccess",hide_table_of_contents:!1},d=void 0,o={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/mutations/request-supplier-access",id:"developers/demandhq-apis/demand-api/graphql/reference/mutations/request-supplier-access",title:"requestSupplierAccess",description:"Request access to sell items from a Supplier.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/request-supplier-access.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/mutations",slug:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/request-supplier-access",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/request-supplier-access",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/mutations/request-supplier-access.mdx",tags:[],version:"current",frontMatter:{id:"request-supplier-access",title:"requestSupplierAccess",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"installApp",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/install-app"},next:{title:"updateAppPermissions",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/mutations/update-app-permissions"}},l={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>demandHqId</code> (<code>ID!</code>)",id:"demandhqid-id",level:4},{value:"<code>supplierId</code> (<code>ID!</code>)",id:"supplierid-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>DemandHqSupplier</code>",id:"demandhqsupplier",level:4}],u={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Request access to sell items from a Supplier."),(0,p.kt)("p",null,'Requires the requesting identity to have the "demandhqsupplier/write" permission on the associated DemandHq.'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"requestSupplierAccess(\n  demandHqId: ID!\n  supplierId: ID!\n): DemandHqSupplier!\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"demandhqid-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"demandHqId"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"supplierid-id"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"supplierId"))," (",(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"demandhqsupplier"},(0,p.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-supplier"},(0,p.kt)("inlineCode",{parentName:"a"},"DemandHqSupplier"))),(0,p.kt)("p",null,"A relationship between a Supplier and a DemandHQ."))}m.isMDXComponent=!0}}]);