"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[57196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40062:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(87462),a=n(67294),l=n(3905);const o={id:"order-item-tax-input",title:"OrderItemTaxInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"demand/api/graphql-admin/reference/inputs/order-item-tax-input",id:"demand/api/graphql-admin/reference/inputs/order-item-tax-input",title:"OrderItemTaxInput",description:"Input for OrderItemTax",source:"@site/docs/demand/api/graphql-admin/reference/inputs/order-item-tax-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/order-item-tax-input",permalink:"/demand/api/graphql-admin/reference/inputs/order-item-tax-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/order-item-tax-input.mdx",tags:[],version:"current",frontMatter:{id:"order-item-tax-input",title:"OrderItemTaxInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"OrderItemShippingChargeInput",permalink:"/demand/api/graphql-admin/reference/inputs/order-item-shipping-charge-input"},next:{title:"OrderItemUpdateInput",permalink:"/demand/api/graphql-admin/reference/inputs/order-item-update-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemTaxInput.<b>amount</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemtaxinputbamountbcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemTaxInput.<b>rate</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemtaxinputbratebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OrderItemTaxInput.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-orderitemtaxinputbtitlebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:s,Badge:u};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Input for OrderItemTax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input OrderItemTaxInput {\n  amount: Float!\n  rate: Float!\n  title: String!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-orderitemtaxinputbamountbcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OrderItemTaxInput.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-orderitemtaxinputbratebcodefloat--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OrderItemTaxInput.",(0,l.kt)("b",null,"rate"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,l.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-orderitemtaxinputbtitlebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"OrderItemTaxInput.",(0,l.kt)("b",null,"title"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/order-item-create-input"},(0,l.kt)("inlineCode",{parentName:"a"},"OrderItemCreateInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/order-item-update-input"},(0,l.kt)("inlineCode",{parentName:"a"},"OrderItemUpdateInput")),"  ",(0,l.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);