"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[18375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||l[m]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19338:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>l,assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(87462),i=n(67294),o=n(3905);const r={id:"update-demand-hq-notification-status",title:"updateDemandHqNotificationStatus",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-status",id:"demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-status",title:"updateDemandHqNotificationStatus",description:"Update the status of a demandHqNotification.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-status.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-status",permalink:"/demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-status",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-status.mdx",tags:[],version:"current",frontMatter:{id:"update-demand-hq-notification-status",title:"updateDemandHqNotificationStatus",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"updateDemandHqIdentity",permalink:"/demand/api/graphql-admin/reference/mutations/update-demand-hq-identity"},next:{title:"updateDemandHqNotificationStatuses",permalink:"/demand/api/graphql-admin/reference/mutations/update-demand-hq-notification-statuses"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateDemandHqNotificationStatus.<b>input</b></code><Bullet /><code>DemandHqNotificationUpdateStatusInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatedemandhqnotificationstatusbinputbcodedemandhqnotificationupdatestatusinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DemandHqNotification</code> <Badge class="secondary" text="object"/>',id:"demandhqnotification-",level:4}],u=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),l=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:l,Badge:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update the status of a demandHqNotification."),(0,o.kt)("p",null,"Requires the demandhqnotification/write permission on the associated DemandHq."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateDemandHqNotificationStatus(\n  input: DemandHqNotificationUpdateStatusInput!\n): DemandHqNotification!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updatedemandhqnotificationstatusbinputbcodedemandhqnotificationupdatestatusinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateDemandHqNotificationStatus.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-notification-update-status-input"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandHqNotificationUpdateStatusInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"demandhqnotification-"},(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-hq-notification"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandHqNotification"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An actionable notification for a DemandHq.\nA User can acknowledge, ignore, or resolve a notification.\nIn some cases, a suggested action can be taken by the User to resolve the notification.")))}h.isMDXComponent=!0}}]);