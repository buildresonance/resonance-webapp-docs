"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[35605],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=o(t),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(f,p(p({ref:n},l),{},{components:t})):r.createElement(f,p({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99218:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),p=["components"],s={id:"demand-hq-supplier-status",title:"DemandHqSupplierStatus",hide_table_of_contents:!1},d=void 0,o={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-supplier-status",id:"developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-supplier-status",title:"DemandHqSupplierStatus",description:"Indicates what status the current relationship between a Supplier and a DemandHQ is in.",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-supplier-status.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/enums",slug:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-supplier-status",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-supplier-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-supplier-status.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-supplier-status",title:"DemandHqSupplierStatus",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"DemandHqStatus",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-hq-status"},next:{title:"DemandSubscriptionCode",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/enums/demand-subscription-code"}},l={},u=[{value:"Values",id:"values",level:3},{value:"<code>APPROVED</code>",id:"approved",level:4},{value:"<code>DENIED</code>",id:"denied",level:4},{value:"<code>PENDING</code>",id:"pending",level:4}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Indicates what status the current relationship between a Supplier and a DemandHQ is in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DemandHqSupplierStatus {\n  APPROVED\n  DENIED\n  PENDING\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"approved"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"APPROVED"))),(0,i.kt)("p",null,"The DemandHq has permission to sell items from the Supplier."),(0,i.kt)("h4",{id:"denied"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"DENIED"))),(0,i.kt)("p",null,"The Supplier has denied permission to the DemandHQ to sell its items."),(0,i.kt)("h4",{id:"pending"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"PENDING"))),(0,i.kt)("p",null,"The DemandHq has requested permission to sell items from the Supplier."))}m.isMDXComponent=!0}}]);