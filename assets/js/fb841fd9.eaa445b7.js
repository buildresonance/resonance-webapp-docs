"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[46053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,y=p["".concat(c,".").concat(u)]||p[u]||s[u]||i;return n?a.createElement(y,d(d({ref:t},m),{},{components:n})):a.createElement(y,d({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=n[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91893:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(67294),i=n(3905);const d={id:"create-demand-hq-identity",title:"createDemandHqIdentity",hide_table_of_contents:!1},o=void 0,c={unversionedId:"demand/api/graphql-admin/reference/mutations/create-demand-hq-identity",id:"demand/api/graphql-admin/reference/mutations/create-demand-hq-identity",title:"createDemandHqIdentity",description:"Add a new DemandHqIdentity to a DemandHq (give a user permissions)",source:"@site/docs/demand/api/graphql-admin/reference/mutations/create-demand-hq-identity.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/create-demand-hq-identity",permalink:"/demand/api/graphql-admin/reference/mutations/create-demand-hq-identity",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/create-demand-hq-identity.mdx",tags:[],version:"current",frontMatter:{id:"create-demand-hq-identity",title:"createDemandHqIdentity",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"createDemandHqComment",permalink:"/demand/api/graphql-admin/reference/mutations/create-demand-hq-comment"},next:{title:"createDemandHqNotification",permalink:"/demand/api/graphql-admin/reference/mutations/create-demand-hq-notification"}},l={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createDemandHqIdentity.<b>input</b></code><Bullet /><code>DemandHqIdentityCreateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createdemandhqidentitybinputbcodedemandhqidentitycreateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DemandHqIdentity</code> <Badge class="secondary" text="object"/>',id:"demandhqidentity-",level:4}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:p,SpecifiedBy:s,Badge:u};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add a new DemandHqIdentity to a DemandHq (give a user permissions)"),(0,i.kt)("p",null,"Requires the demandHqidentity/write permission on the given DemandHq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createDemandHqIdentity(\n  input: DemandHqIdentityCreateInput!\n): DemandHqIdentity!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createdemandhqidentitybinputbcodedemandhqidentitycreateinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"createDemandHqIdentity.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-identity-create-input"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentityCreateInput!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"demandhqidentity-"},(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-hq-identity"},(0,i.kt)("inlineCode",{parentName:"a"},"DemandHqIdentity"))," ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Indicates a User or App has permissions on a DemandHq")))}f.isMDXComponent=!0}}]);