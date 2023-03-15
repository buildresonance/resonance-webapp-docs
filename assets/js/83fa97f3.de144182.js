"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[51963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var i=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,p=function(e,t){if(null==e)return{};var n,i,p={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,p=e.mdxType,a=e.originalType,u=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=c(n),k=p,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||a;return n?i.createElement(m,l(l({ref:t},o),{},{components:n})):i.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=n.length,l=new Array(a);l[0]=k;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[d]="string"==typeof e?e:p,l[1]=r;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},400:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>k,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var i=n(87462),p=n(67294),a=n(3905);const l={id:"supplier-quick-link-update-input",title:"SupplierQuickLinkUpdateInput",hide_table_of_contents:!1},r=void 0,u={unversionedId:"supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input",id:"supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input",title:"SupplierQuickLinkUpdateInput",description:"The required input fields to partially update an existing SupplierQuickLink",source:"@site/docs/supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input.mdx",sourceDirName:"supply/api/graphql-admin/reference/inputs",slug:"/supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/supply/api/graphql-admin/reference/inputs/supplier-quick-link-update-input.mdx",tags:[],version:"current",frontMatter:{id:"supplier-quick-link-update-input",title:"SupplierQuickLinkUpdateInput",hide_table_of_contents:!1},sidebar:"supplyApiAdminSidebar",previous:{title:"SupplierQuickLinkCreateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-quick-link-create-input"},next:{title:"SupplierUpdateInput",permalink:"/supply/api/graphql-admin/reference/inputs/supplier-update-input"}},c={},o=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierQuickLinkUpdateInput.<b>appId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierquicklinkupdateinputbappidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierQuickLinkUpdateInput.<b>dynamicUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierquicklinkupdateinputbdynamicurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierQuickLinkUpdateInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierquicklinkupdateinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierQuickLinkUpdateInput.<b>quickLinkType</b></code><Bullet /><code>SupplierQuickLinkType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supplierquicklinkupdateinputbquicklinktypebcodesupplierquicklinktype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupplierQuickLinkUpdateInput.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supplierquicklinkupdateinputbsupplieridbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,a.kt)(p.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(p.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),k=e=>(0,a.kt)(p.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:o,Bullet:d,SpecifiedBy:s,Badge:k};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The required input fields to partially update an existing SupplierQuickLink"),(0,a.kt)("p",null,"You must be calling from the pertaining app's AppClient"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input SupplierQuickLinkUpdateInput {\n  appId: ID!\n  dynamicUrl: String\n  label: String\n  quickLinkType: SupplierQuickLinkType!\n  supplierId: ID!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplierquicklinkupdateinputbappidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierQuickLinkUpdateInput.",(0,a.kt)("b",null,"appId"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Id of the App this quicklink pertains to.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplierquicklinkupdateinputbdynamicurlbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierQuickLinkUpdateInput.",(0,a.kt)("b",null,"dynamicUrl"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This can have dynamic parts, using ","[supplierProductId]"," format. It represents where the link goes.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplierquicklinkupdateinputblabelbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierQuickLinkUpdateInput.",(0,a.kt)("b",null,"label"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"What the text for the link should be to the user.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplierquicklinkupdateinputbquicklinktypebcodesupplierquicklinktype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierQuickLinkUpdateInput.",(0,a.kt)("b",null,"quickLinkType"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/enums/supplier-quick-link-type"},(0,a.kt)("inlineCode",{parentName:"a"},"SupplierQuickLinkType!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Indicates which page the SupplierQuickLink would live on")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supplierquicklinkupdateinputbsupplieridbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupplierQuickLinkUpdateInput.",(0,a.kt)("b",null,"supplierId"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/supply/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(k,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(k,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Id of the Supplier this quicklink pertains to (the one that has installed your app).")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/supply/api/graphql-admin/reference/mutations/update-supplier-quick-link"},(0,a.kt)("inlineCode",{parentName:"a"},"updateSupplierQuickLink")),"  ",(0,a.kt)(k,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);