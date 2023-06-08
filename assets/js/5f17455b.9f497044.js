"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[50994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(y,p(p({ref:t},i),{},{components:n})):a.createElement(y,p({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27515:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>i});var a=n(87462),r=n(67294),l=n(3905);const p={id:"supply-event",title:"SupplyEvent",hide_table_of_contents:!1},o=void 0,s={unversionedId:"supply/api/graphql-admin/reference/objects/supply-event",id:"supply/api/graphql-admin/reference/objects/supply-event",title:"SupplyEvent",description:"Contains before and after snapshots for every event that occurs within the Supply domain",source:"@site/docs/supply/api/graphql-admin/reference/objects/supply-event.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supply-event",permalink:"/supply/api/graphql-admin/reference/objects/supply-event",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supply-event.mdx",tags:[],version:"current",frontMatter:{id:"supply-event",title:"SupplyEvent",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplyEventSubscription",permalink:"/supply/api/graphql-admin/reference/objects/supply-event-subscription"},next:{title:"SupplyExportConnection",permalink:"/supply/api/graphql-admin/reference/objects/supply-export-connection"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyEvent.<b>message</b></code><Bullet /><code>SupplyEventMessage</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplyeventbmessagebcodesupplyeventmessage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyEvent.<b>messageId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventbmessageidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyEvent.<b>subject</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventbsubjectbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyEvent.<b>timestamp</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyeventbtimestampbcodedate--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:d,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Contains before and after snapshots for every event that occurs within the Supply domain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyEvent {\n  message: SupplyEventMessage\n  messageId: String!\n  subject: String\n  timestamp: Date!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplyeventbmessagebcodesupplyeventmessage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplyEvent.",(0,l.kt)("b",null,"message"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supply-event-message"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplyEventMessage"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is the event data and metadata.\nThe data is variable, but most typically contains a newItem and oldItem.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplyeventbmessageidbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplyEvent.",(0,l.kt)("b",null,"messageId"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"UUID")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplyeventbsubjectbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplyEvent.",(0,l.kt)("b",null,"subject"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A human-friendly string summarizing the event")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supplyeventbtimestampbcodedate--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupplyEvent.",(0,l.kt)("b",null,"timestamp"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ISO Date that the event occurred")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-event-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplyEventConnection")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/objects/supply-event-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"SupplyEventEdge")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);