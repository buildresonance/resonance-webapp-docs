"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[11206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=o,b=u["".concat(l,".").concat(s)]||u[s]||p[s]||r;return n?a.createElement(b,d(d({ref:t},c),{},{components:n})):a.createElement(b,d({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,d=new Array(r);d[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,d[1]=i;for(var m=2;m<r;m++)d[m]=n[m];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89553:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>m,contentTitle:()=>i,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var a=n(87462),o=n(67294),r=n(3905);const d={id:"demand-hq-automation-job",title:"DemandHqAutomationJob",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/demand-hq-automation-job",id:"demand/api/graphql-admin/reference/objects/demand-hq-automation-job",title:"DemandHqAutomationJob",description:"An Automation Job to be run for a DemandHq",source:"@site/docs/demand/api/graphql-admin/reference/objects/demand-hq-automation-job.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/demand-hq-automation-job",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-automation-job",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/demand-hq-automation-job.mdx",tags:[],version:"current",frontMatter:{id:"demand-hq-automation-job",title:"DemandHqAutomationJob",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandGqlAction",permalink:"/demand/api/graphql-admin/reference/objects/demand-gql-action"},next:{title:"DemandHqAutomationSettings",permalink:"/demand/api/graphql-admin/reference/objects/demand-hq-automation-settings"}},m={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqAutomationJob.<b>automationJobType</b></code><Bullet /><code>DemandHqAutomationJobType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-demandhqautomationjobbautomationjobtypebcodedemandhqautomationjobtype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandHqAutomationJob.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandhqautomationjobbdemandhqidbcodeid--",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:c,Bullet:u,SpecifiedBy:p,Badge:s};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An Automation Job to be run for a DemandHq"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandHqAutomationJob {\n  automationJobType: DemandHqAutomationJobType!\n  demandHqId: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-demandhqautomationjobbautomationjobtypebcodedemandhqautomationjobtype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DemandHqAutomationJob.",(0,r.kt)("b",null,"automationJobType"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/demand-hq-automation-job-type"},(0,r.kt)("inlineCode",{parentName:"a"},"DemandHqAutomationJobType!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-demandhqautomationjobbdemandhqidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"DemandHqAutomationJob.",(0,r.kt)("b",null,"demandHqId"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/run-all-for-automation-job"},(0,r.kt)("inlineCode",{parentName:"a"},"runAllForAutomationJob")),"  ",(0,r.kt)(s,{class:"secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);