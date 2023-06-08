"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[72498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),l=r,g=c["".concat(m,".").concat(l)]||c[l]||u[l]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=l;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[c]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},69122:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>l,Bullet:()=>c,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905);const i={id:"create-or-update-demand-hq-automation-settings",title:"createOrUpdateDemandHqAutomationSettings",hide_table_of_contents:!1},d=void 0,m={unversionedId:"demand/api/graphql-admin/reference/mutations/create-or-update-demand-hq-automation-settings",id:"demand/api/graphql-admin/reference/mutations/create-or-update-demand-hq-automation-settings",title:"createOrUpdateDemandHqAutomationSettings",description:"Create or update DemandHqAutomationSettings for a DemandHq.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/create-or-update-demand-hq-automation-settings.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/create-or-update-demand-hq-automation-settings",permalink:"/demand/api/graphql-admin/reference/mutations/create-or-update-demand-hq-automation-settings",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/create-or-update-demand-hq-automation-settings.mdx",tags:[],version:"current",frontMatter:{id:"create-or-update-demand-hq-automation-settings",title:"createOrUpdateDemandHqAutomationSettings",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"createNav",permalink:"/demand/api/graphql-admin/reference/mutations/create-nav"},next:{title:"createOrderItem",permalink:"/demand/api/graphql-admin/reference/mutations/create-order-item"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createOrUpdateDemandHqAutomationSettings.<b>input</b></code><Bullet /><code>DemandHqAutomationSettingsUpdateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createorupdatedemandhqautomationsettingsbinputbcodedemandhqautomationsettingsupdateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DemandHqAutomationSettings</code> <Badge class="secondary" text="object"/>',id:"demandhqautomationsettings-",level:4}],c=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),l=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:c,SpecifiedBy:u,Badge:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create or update DemandHqAutomationSettings for a DemandHq."),(0,o.kt)("p",null,"Requires the demandhqautomationsettings/write permission on the associated DemandHq."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createOrUpdateDemandHqAutomationSettings(\n  input: DemandHqAutomationSettingsUpdateInput!\n): DemandHqAutomationSettings!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-createorupdatedemandhqautomationsettingsbinputbcodedemandhqautomationsettingsupdateinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"createOrUpdateDemandHqAutomationSettings.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/demand-hq-automation-settings-update-input"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandHqAutomationSettingsUpdateInput!"))," ",(0,o.kt)(l,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(l,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"demandhqautomationsettings-"},(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-hq-automation-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandHqAutomationSettings"))," ",(0,o.kt)(l,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Contains all of the settings regarding Automation for a DemandHq")))}f.isMDXComponent=!0}}]);