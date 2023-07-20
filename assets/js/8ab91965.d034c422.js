"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[98792],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),i=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=i(e.components);return o.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(t),f=r,g=s["".concat(l,".").concat(f)]||s[f]||m[f]||a;return t?o.createElement(g,d(d({ref:n},p),{},{components:t})):o.createElement(g,d({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:r,d[1]=c;for(var i=2;i<a;i++)d[i]=t[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89619:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var o=t(87462),r=t(67294),a=t(3905);const d={id:"demand-export-connection",title:"DemandExportConnection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/demand-export-connection",id:"demand/api/graphql-admin/reference/objects/demand-export-connection",title:"DemandExportConnection",description:"A connection that returns a list of DemandExport nodes.",source:"@site/docs/demand/api/graphql-admin/reference/objects/demand-export-connection.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/demand-export-connection",permalink:"/demand/api/graphql-admin/reference/objects/demand-export-connection",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/demand-export-connection.mdx",tags:[],version:"current",frontMatter:{id:"demand-export-connection",title:"DemandExportConnection",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandEvent",permalink:"/demand/api/graphql-admin/reference/objects/demand-event"},next:{title:"DemandExportEdge",permalink:"/demand/api/graphql-admin/reference/objects/demand-export-edge"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandExportConnection.<b>edges</b></code><Bullet /><code>[DemandExportEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandexportconnectionbedgesbcodedemandexportedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandExportConnection.<b>nodes</b></code><Bullet /><code>[DemandExport!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandexportconnectionbnodesbcodedemandexport--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandExportConnection.<b>pageInfo</b></code><Bullet /><code>SingleDirectionPageInfo</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandexportconnectionbpageinfobcodesingledirectionpageinfo-",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:s,SpecifiedBy:m,Badge:f};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A connection that returns a list of DemandExport nodes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandExportConnection {\n  edges: [DemandExportEdge!]!\n  nodes: [DemandExport!]!\n  pageInfo: SingleDirectionPageInfo\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-demandexportconnectionbedgesbcodedemandexportedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DemandExportConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-export-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[DemandExportEdge!]!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-demandexportconnectionbnodesbcodedemandexport--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DemandExportConnection.",(0,a.kt)("b",null,"nodes"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-export"},(0,a.kt)("inlineCode",{parentName:"a"},"[DemandExport!]!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-demandexportconnectionbpageinfobcodesingledirectionpageinfo-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DemandExportConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/single-direction-page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"SingleDirectionPageInfo"))," ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"returned-by"},"Returned by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/exports"},(0,a.kt)("inlineCode",{parentName:"a"},"exports")),"  ",(0,a.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);