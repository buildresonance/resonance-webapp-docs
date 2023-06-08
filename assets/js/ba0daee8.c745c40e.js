"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[30082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var p=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);t&&(p=p.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,p)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,p,a=function(e,t){if(null==e)return{};var n,p,a={},r=Object.keys(e);for(p=0;p<r.length;p++)n=r[p],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(p=0;p<r.length;p++)n=r[p],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=p.createContext({}),s=function(e){var t=p.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return p.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return p.createElement(p.Fragment,{},t)}},m=p.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?p.createElement(f,i(i({ref:t},o),{},{components:n})):p.createElement(f,i({ref:t},o))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return p.createElement.apply(null,i)}return p.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18977:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var p=n(87462),a=n(67294),r=n(3905);const i={id:"update-supplier-variant-supplement",title:"updateSupplierVariantSupplement",hide_table_of_contents:!1},l=void 0,u={unversionedId:"supply/api/graphql-admin/reference/mutations/update-supplier-variant-supplement",id:"supply/api/graphql-admin/reference/mutations/update-supplier-variant-supplement",title:"updateSupplierVariantSupplement",description:"Update an existing supplierVariantSupplement",source:"@site/docs/supply/api/graphql-admin/reference/mutations/update-supplier-variant-supplement.mdx",sourceDirName:"supply/api/graphql-admin/reference/mutations",slug:"/supply/api/graphql-admin/reference/mutations/update-supplier-variant-supplement",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-variant-supplement",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/mutations/update-supplier-variant-supplement.mdx",tags:[],version:"current",frontMatter:{id:"update-supplier-variant-supplement",title:"updateSupplierVariantSupplement",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"updateSupplierQuickLink",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-quick-link"},next:{title:"updateSupplierVariant",permalink:"/supply/api/graphql-admin/reference/mutations/update-supplier-variant"}},s={},o=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateSupplierVariantSupplement.<b>input</b></code><Bullet /><code>SupplierVariantSupplementUpdateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatesuppliervariantsupplementbinputbcodesuppliervariantsupplementupdateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SupplierVariantSupplement</code> <Badge class="secondary" text="object"/>',id:"suppliervariantsupplement-",level:4}],c=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:o,Bullet:c,SpecifiedBy:d,Badge:m};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,p.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Update an existing supplierVariantSupplement"),(0,r.kt)("p",null,"Requires suppliervariantsupplement/write permission on the requesting identity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSupplierVariantSupplement(\n  input: SupplierVariantSupplementUpdateInput!\n): SupplierVariantSupplement!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatesuppliervariantsupplementbinputbcodesuppliervariantsupplementupdateinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateSupplierVariantSupplement.",(0,r.kt)("b",null,"input"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/inputs/supplier-variant-supplement-update-input"},(0,r.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplementUpdateInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"suppliervariantsupplement-"},(0,r.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/objects/supplier-variant-supplement"},(0,r.kt)("inlineCode",{parentName:"a"},"SupplierVariantSupplement"))," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This has a one to one relationship with SupplierVariant, and provides supplemental data for the SupplierVariant.\nThese items get updated at a lower frequency, and are therefore separate.")))}y.isMDXComponent=!0}}]);