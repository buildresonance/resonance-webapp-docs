"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[33969],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return r?a.createElement(f,p(p({ref:t},d),{},{components:r})):a.createElement(f,p({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},72875:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>c,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>x,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var a=r(87462),n=r(67294),o=r(3905);const p={id:"export-variants",title:"exportVariants",hide_table_of_contents:!1},i=void 0,l={unversionedId:"demand/api/graphql-admin/reference/mutations/export-variants",id:"demand/api/graphql-admin/reference/mutations/export-variants",title:"exportVariants",description:"Create an export of variants using set parameters.",source:"@site/docs/demand/api/graphql-admin/reference/mutations/export-variants.mdx",sourceDirName:"demand/api/graphql-admin/reference/mutations",slug:"/demand/api/graphql-admin/reference/mutations/export-variants",permalink:"/demand/api/graphql-admin/reference/mutations/export-variants",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/mutations/export-variants.mdx",tags:[],version:"current",frontMatter:{id:"export-variants",title:"exportVariants",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"exportProducts",permalink:"/demand/api/graphql-admin/reference/mutations/export-products"},next:{title:"installApp",permalink:"/demand/api/graphql-admin/reference/mutations/install-app"}},s={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>exportVariants.<b>input</b></code><Bullet /><code>ExportInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-exportvariantsbinputbcodeexportinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>exportVariants.<b>parameters</b></code><Bullet /><code>ExportVariantsParametersInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-exportvariantsbparametersbcodeexportvariantsparametersinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>DemandExport</code> <Badge class="secondary" text="object"/>',id:"demandexport-",level:4}],c=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:c,SpecifiedBy:m,Badge:u};function x(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an export of variants using set parameters."),(0,o.kt)("p",null,"Requires the variant/read scope on the specified DemandHq."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"exportVariants(\n  input: ExportInput!\n  parameters: ExportVariantsParametersInput!\n): DemandExport!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-exportvariantsbinputbcodeexportinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"exportVariants.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/export-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ExportInput!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-exportvariantsbparametersbcodeexportvariantsparametersinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"exportVariants.",(0,o.kt)("b",null,"parameters"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/export-variants-parameters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ExportVariantsParametersInput!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"demandexport-"},(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/demand-export"},(0,o.kt)("inlineCode",{parentName:"a"},"DemandExport"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An export for the Demand Domain.")))}x.isMDXComponent=!0}}]);