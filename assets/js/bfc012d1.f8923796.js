"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[40106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,u=s["".concat(d,".").concat(f)]||s[f]||m[f]||p;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51289:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var r=n(87462),a=n(67294),p=n(3905);const i={id:"app-edge",title:"AppEdge",hide_table_of_contents:!1},o=void 0,d={unversionedId:"adminidentity/api/graphql-admin/reference/objects/app-edge",id:"adminidentity/api/graphql-admin/reference/objects/app-edge",title:"AppEdge",description:"One edge producing one App node",source:"@site/docs/adminidentity/api/graphql-admin/reference/objects/app-edge.mdx",sourceDirName:"adminidentity/api/graphql-admin/reference/objects",slug:"/adminidentity/api/graphql-admin/reference/objects/app-edge",permalink:"/adminidentity/api/graphql-admin/reference/objects/app-edge",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/adminidentity/api/graphql-admin/reference/objects/app-edge.mdx",tags:[],version:"current",frontMatter:{id:"app-edge",title:"AppEdge",hide_table_of_contents:!1},sidebar:"adminIdentityApiAdminSidebar",previous:{title:"AppCreateResponse",permalink:"/adminidentity/api/graphql-admin/reference/objects/app-create-response"},next:{title:"App",permalink:"/adminidentity/api/graphql-admin/reference/objects/app"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AppEdge.<b>node</b></code><Bullet /><code>App</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-appedgebnodebcodeapp-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(a.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,p.kt)(a.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:l,Bullet:s,SpecifiedBy:m,Badge:f};function g(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"One edge producing one App node"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type AppEdge {\n  node: App\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-appedgebnodebcodeapp-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"AppEdge.",(0,p.kt)("b",null,"node"))),(0,p.kt)(s,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/adminidentity/api/graphql-admin/reference/objects/app"},(0,p.kt)("inlineCode",{parentName:"a"},"App"))," ",(0,p.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/adminidentity/api/graphql-admin/reference/objects/app-connection"},(0,p.kt)("inlineCode",{parentName:"a"},"AppConnection")),"  ",(0,p.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);