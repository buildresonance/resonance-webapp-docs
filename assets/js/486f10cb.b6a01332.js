"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4724],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(a),u=n,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||p;return a?r.createElement(y,o(o({ref:t},d),{},{components:a})):r.createElement(y,o({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<p;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73816:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(87462),n=a(67294),p=a(3905);const o={id:"supply-import-data-response",title:"SupplyImportDataResponse",hide_table_of_contents:!1},l=void 0,s={unversionedId:"supply/api/graphql-admin/reference/objects/supply-import-data-response",id:"supply/api/graphql-admin/reference/objects/supply-import-data-response",title:"SupplyImportDataResponse",description:"The response from importData, containing data and metadata.",source:"@site/docs/supply/api/graphql-admin/reference/objects/supply-import-data-response.mdx",sourceDirName:"supply/api/graphql-admin/reference/objects",slug:"/supply/api/graphql-admin/reference/objects/supply-import-data-response",permalink:"/supply/api/graphql-admin/reference/objects/supply-import-data-response",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/objects/supply-import-data-response.mdx",tags:[],version:"current",frontMatter:{id:"supply-import-data-response",title:"SupplyImportDataResponse",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplyImportDataAction",permalink:"/supply/api/graphql-admin/reference/objects/supply-import-data-action"},next:{title:"SupplyImportData",permalink:"/supply/api/graphql-admin/reference/objects/supply-import-data"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyImportDataResponse.<b>data</b></code><Bullet /><code>SupplyImportData</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplyimportdataresponsebdatabcodesupplyimportdata-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyImportDataResponse.<b>filename</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplyimportdataresponsebfilenamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplyImportDataResponse.<b>metadata</b></code><Bullet /><code>SupplyImportMetadata!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supplyimportdataresponsebmetadatabcodesupplyimportmetadata--",level:4},{value:"Returned by",id:"returned-by",level:3}],c=()=>(0,p.kt)(n.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(n.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,p.kt)(n.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:c,SpecifiedBy:m,Badge:u};function f(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The response from importData, containing data and metadata."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupplyImportDataResponse {\n  data: SupplyImportData\n  filename: String!\n  metadata: SupplyImportMetadata!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplyimportdataresponsebdatabcodesupplyimportdata-"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplyImportDataResponse.",(0,p.kt)("b",null,"data"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supply-import-data"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplyImportData"))," ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplyimportdataresponsebfilenamebcodestring--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplyImportDataResponse.",(0,p.kt)("b",null,"filename"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,p.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"The filename of the import's data file, can be used similar to an ID.")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supplyimportdataresponsebmetadatabcodesupplyimportmetadata--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupplyImportDataResponse.",(0,p.kt)("b",null,"metadata"))),(0,p.kt)(c,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supply-import-metadata"},(0,p.kt)("inlineCode",{parentName:"a"},"SupplyImportMetadata!"))," ",(0,p.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,p.kt)("blockquote",null),(0,p.kt)("h3",{id:"returned-by"},"Returned by"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/queries/import-data"},(0,p.kt)("inlineCode",{parentName:"a"},"importData")),"  ",(0,p.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);