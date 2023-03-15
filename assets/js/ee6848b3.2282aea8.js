"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[28999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||s;return n?r.createElement(f,a(a({ref:t},i),{},{components:n})):r.createElement(f,a({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:o,a[1]=d;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7088:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=n(67294),s=n(3905);const a={id:"customer-address-connection",title:"CustomerAddressConnection",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-storefront/reference/objects/customer-address-connection",id:"demand/api/graphql-storefront/reference/objects/customer-address-connection",title:"CustomerAddressConnection",description:"Paginate through CustomerAddresses",source:"@site/docs/demand/api/graphql-storefront/reference/objects/customer-address-connection.mdx",sourceDirName:"demand/api/graphql-storefront/reference/objects",slug:"/demand/api/graphql-storefront/reference/objects/customer-address-connection",permalink:"/demand/api/graphql-storefront/reference/objects/customer-address-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-storefront/reference/objects/customer-address-connection.mdx",tags:[],version:"current",frontMatter:{id:"customer-address-connection",title:"CustomerAddressConnection",hide_table_of_contents:!1},sidebar:"demandApiStorefrontSidebar",previous:{title:"CollectionTypeContentTags",permalink:"/demand/api/graphql-storefront/reference/objects/collection-type-content-tags"},next:{title:"CustomerAddressEdge",permalink:"/demand/api/graphql-storefront/reference/objects/customer-address-edge"}},l={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerAddressConnection.<b>edges</b></code><Bullet /><code>[CustomerAddressEdge]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-customeraddressconnectionbedgesbcodecustomeraddressedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerAddressConnection.<b>nodes</b></code><Bullet /><code>[CustomerAddress]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-customeraddressconnectionbnodesbcodecustomeraddress--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CustomerAddressConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-customeraddressconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:m,SpecifiedBy:p,Badge:u};function g(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Paginate through CustomerAddresses"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomerAddressConnection {\n  edges: [CustomerAddressEdge]!\n  nodes: [CustomerAddress]!\n  pageInfo: PageInfo!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-customeraddressconnectionbedgesbcodecustomeraddressedge--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"CustomerAddressConnection.",(0,s.kt)("b",null,"edges"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/customer-address-edge"},(0,s.kt)("inlineCode",{parentName:"a"},"[CustomerAddressEdge]!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-customeraddressconnectionbnodesbcodecustomeraddress--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"CustomerAddressConnection.",(0,s.kt)("b",null,"nodes"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/customer-address"},(0,s.kt)("inlineCode",{parentName:"a"},"[CustomerAddress]!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-customeraddressconnectionbpageinfobcodepageinfo--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"CustomerAddressConnection.",(0,s.kt)("b",null,"pageInfo"))),(0,s.kt)(m,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/demand/api/graphql-storefront/reference/objects/page-info"},(0,s.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,s.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/demand/api/graphql-storefront/reference/objects/customer"},(0,s.kt)("inlineCode",{parentName:"a"},"Customer")),"  ",(0,s.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);