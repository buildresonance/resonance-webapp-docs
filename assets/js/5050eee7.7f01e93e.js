"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[53883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var p=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,p,r=function(e,t){if(null==e)return{};var n,p,r={},a=Object.keys(e);for(p=0;p<a.length;p++)n=a[p],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(p=0;p<a.length;p++)n=a[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=p.createContext({}),u=function(e){var t=p.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return p.createElement(i.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},d=p.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||y[d]||a;return n?p.createElement(m,l(l({ref:t},s),{},{components:n})):p.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return p.createElement.apply(null,l)}return p.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55880:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>c,SpecifiedBy:()=>y,assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var p=n(87462),r=n(67294),a=n(3905);const l={id:"supply-event-mutation-type",title:"SupplyEventMutationType",hide_table_of_contents:!1},o=void 0,i={unversionedId:"supply/api/graphql-admin/reference/enums/supply-event-mutation-type",id:"supply/api/graphql-admin/reference/enums/supply-event-mutation-type",title:"SupplyEventMutationType",description:"What type of event to listen for.",source:"@site/docs/supply/api/graphql-admin/reference/enums/supply-event-mutation-type.mdx",sourceDirName:"supply/api/graphql-admin/reference/enums",slug:"/supply/api/graphql-admin/reference/enums/supply-event-mutation-type",permalink:"/supply/api/graphql-admin/reference/enums/supply-event-mutation-type",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/enums/supply-event-mutation-type.mdx",tags:[],version:"current",frontMatter:{id:"supply-event-mutation-type",title:"SupplyEventMutationType",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplyEntityStatus",permalink:"/supply/api/graphql-admin/reference/enums/supply-entity-status"},next:{title:"SupplyEventProtocol",permalink:"/supply/api/graphql-admin/reference/enums/supply-event-protocol"}},u={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupplyEventMutationType.<b>CREATED</b></code>",id:"code-style-fontweight-normal-supplyeventmutationtypebcreatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplyEventMutationType.<b>DELETED</b></code>",id:"code-style-fontweight-normal-supplyeventmutationtypebdeletedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupplyEventMutationType.<b>UPDATED</b></code>",id:"code-style-fontweight-normal-supplyeventmutationtypebupdatedbcode",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:c,SpecifiedBy:y,Badge:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,p.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What type of event to listen for."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupplyEventMutationType {\n  CREATED\n  DELETED\n  UPDATED\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplyeventmutationtypebcreatedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplyEventMutationType.",(0,a.kt)("b",null,"CREATED")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplyeventmutationtypebdeletedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplyEventMutationType.",(0,a.kt)("b",null,"DELETED")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplyeventmutationtypebupdatedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplyEventMutationType.",(0,a.kt)("b",null,"UPDATED")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-event-subscription"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscription")),"  ",(0,a.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/inputs/supply-event-subscription-create-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplyEventSubscriptionCreateInput")),"  ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/supply-event-subscriptions"},(0,a.kt)("inlineCode",{parentName:"a"},"supplyEventSubscriptions")),"  ",(0,a.kt)(d,{class:"secondary",text:"query",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);