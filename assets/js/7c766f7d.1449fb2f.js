"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[34280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||p;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const p={sidebar_position:1},i="Supplier Concepts",s={unversionedId:"concepts/suppliers/supplier-concepts",id:"concepts/suppliers/supplier-concepts",title:"Supplier Concepts",description:"Suppliers are where goods are supplied. This could be a warehouse, a group of digital creations, or even your garage. Sample important metrics are inventory quantity and cost.",source:"@site/docs/concepts/suppliers/supplier-concepts.md",sourceDirName:"concepts/suppliers",slug:"/concepts/suppliers/supplier-concepts",permalink:"/concepts/suppliers/supplier-concepts",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/concepts/suppliers/supplier-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"conceptsSidebar",previous:{title:"Notifications",permalink:"/concepts/notifications"},next:{title:"Supplier Permissions (SupplierIdentity)",permalink:"/concepts/suppliers/permissions"}},a={},c=[{value:"Free",id:"free",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supplier-concepts"},"Supplier Concepts"),(0,o.kt)("p",null,"Suppliers are where goods are supplied. This could be a warehouse, a group of digital creations, or even your garage. Sample important metrics are inventory quantity and cost."),(0,o.kt)("p",null,"A supplier is any location that contains goods to sell, and wants to supply those goods to DemandHQs. Suppliers typical actions include creating new supplierVariants, updating inventory, and approving DemandHQs to sell their goods. A Supplier can approve their supply be open to any number of DemandHQs and a DemandHQ can implement any number of Suppliers."),(0,o.kt)("h2",{id:"free"},"Free"),(0,o.kt)("p",null,"Suppliers are free to create and populate, the only requirement is that purchase orders get fulfilled in a timely manner."))}u.isMDXComponent=!0}}]);