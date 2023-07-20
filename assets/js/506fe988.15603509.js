"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[488],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=i(a),f=r,u=s["".concat(l,".").concat(f)]||s[f]||c[f]||o;return a?n.createElement(u,d(d({ref:t},p),{},{components:a})):n.createElement(u,d({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=f;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[s]="string"==typeof e?e:r,d[1]=m;for(var i=2;i<o;i++)d[i]=a[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},59738:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>c,assets:()=>i,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905);const d={id:"demand-import-data-response",title:"DemandImportDataResponse",hide_table_of_contents:!1},m=void 0,l={unversionedId:"demand/api/graphql-admin/reference/objects/demand-import-data-response",id:"demand/api/graphql-admin/reference/objects/demand-import-data-response",title:"DemandImportDataResponse",description:"The response from importData, containing data and metadata.",source:"@site/docs/demand/api/graphql-admin/reference/objects/demand-import-data-response.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/demand-import-data-response",permalink:"/demand/api/graphql-admin/reference/objects/demand-import-data-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/demand-import-data-response.mdx",tags:[],version:"current",frontMatter:{id:"demand-import-data-response",title:"DemandImportDataResponse",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"DemandImportDataAction",permalink:"/demand/api/graphql-admin/reference/objects/demand-import-data-action"},next:{title:"DemandImportData",permalink:"/demand/api/graphql-admin/reference/objects/demand-import-data"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DemandImportDataResponse.<b>data</b></code><Bullet /><code>DemandImportData</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandimportdataresponsebdatabcodedemandimportdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandImportDataResponse.<b>filename</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-demandimportdataresponsebfilenamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DemandImportDataResponse.<b>metadata</b></code><Bullet /><code>DemandImportMetadata!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-demandimportdataresponsebmetadatabcodedemandimportmetadata--",level:4},{value:"Returned by",id:"returned-by",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:s,SpecifiedBy:c,Badge:f};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The response from importData, containing data and metadata."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandImportDataResponse {\n  data: DemandImportData\n  filename: String!\n  metadata: DemandImportMetadata!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-demandimportdataresponsebdatabcodedemandimportdata-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DemandImportDataResponse.",(0,o.kt)("b",null,"data"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-import-data"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandImportData"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-demandimportdataresponsebfilenamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DemandImportDataResponse.",(0,o.kt)("b",null,"filename"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The filename of the import's data file, can be used similar to an ID.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-demandimportdataresponsebmetadatabcodedemandimportmetadata--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"DemandImportDataResponse.",(0,o.kt)("b",null,"metadata"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-import-metadata"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandImportMetadata!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/queries/import-data"},(0,o.kt)("inlineCode",{parentName:"a"},"importData")),"  ",(0,o.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);