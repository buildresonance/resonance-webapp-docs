"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[85674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=m(n),s=o,f=u["".concat(l,".").concat(s)]||u[s]||c[s]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67569:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>c,assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const i={id:"demand-hq-automation-job-input",title:"DemandHqAutomationJobInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"demand/api/graphql-admin/reference/inputs/demand-hq-automation-job-input",id:"demand/api/graphql-admin/reference/inputs/demand-hq-automation-job-input",title:"DemandHqAutomationJobInput",description:"The input type for running an Automation Job for a DemandHq",source:"@site/docs/demand/api/graphql-admin/reference/inputs/demand-hq-automation-job-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/demand-hq-automation-job-input",permalink:"/demand/api/graphql-admin/reference/inputs/demand-hq-automation-job-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/demand-hq-automation-job-input.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-automation-job-input",title:"DemandHqAutomationJobInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandEntityStatusFilterInput",permalink:"/demand/api/graphql-admin/reference/inputs/demand-entity-status-filter-input"},next:{title:"DemandHqAutomationSettingsUpdateInput",permalink:"/demand/api/graphql-admin/reference/inputs/demand-hq-automation-settings-update-input"}},m={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqAutomationJobInput.<b>automationJobType</b></code><Bullet /><code>DemandHqAutomationJobType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-demandhqautomationjobinputbautomationjobtypebcodedemandhqautomationjobtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqAutomationJobInput.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqautomationjobinputbdemandhqidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:c,Badge:s};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The input type for running an Automation Job for a DemandHq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input DemandHqAutomationJobInput {\n  automationJobType: DemandHqAutomationJobType!\n  demandHqId: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-demandhqautomationjobinputbautomationjobtypebcodedemandhqautomationjobtype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DemandHqAutomationJobInput.",(0,r.kt)("b",null,"automationJobType"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/demand-hq-automation-job-type"},(0,r.kt)("inlineCode",{parentName:"a"},"DemandHqAutomationJobType!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-demandhqautomationjobinputbdemandhqidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DemandHqAutomationJobInput.",(0,r.kt)("b",null,"demandHqId"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/run-all-for-automation-job"},(0,r.kt)("inlineCode",{parentName:"a"},"runAllForAutomationJob")),"  ",(0,r.kt)(s,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);