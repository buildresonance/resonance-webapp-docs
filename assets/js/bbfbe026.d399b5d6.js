"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[4164],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=i(a),u=o,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[s]="string"==typeof e?e:o,l[1]=d;for(var i=2;i<r;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},41877:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),o=a(67294),r=a(3905);const l={id:"taxonomy-branch-update-input",title:"TaxonomyBranchUpdateInput",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-admin/reference/inputs/taxonomy-branch-update-input",id:"demand/api/graphql-admin/reference/inputs/taxonomy-branch-update-input",title:"TaxonomyBranchUpdateInput",description:"The input for updating a TaxonomyBranch.",source:"@site/docs/demand/api/graphql-admin/reference/inputs/taxonomy-branch-update-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/taxonomy-branch-update-input",permalink:"/demand/api/graphql-admin/reference/inputs/taxonomy-branch-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/taxonomy-branch-update-input.mdx",tags:[],version:"current",frontMatter:{id:"taxonomy-branch-update-input",title:"TaxonomyBranchUpdateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"TaxonomyBranchCreateInput",permalink:"/demand/api/graphql-admin/reference/inputs/taxonomy-branch-create-input"},next:{title:"VariantCreateInput",permalink:"/demand/api/graphql-admin/reference/inputs/variant-create-input"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranchUpdateInput.<b>collectionId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchupdateinputbcollectionidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranchUpdateInput.<b>productTag</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchupdateinputbproducttagbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranchUpdateInput.<b>storefrontIds</b></code><Bullet /><code>[ID!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchupdateinputbstorefrontidsbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranchUpdateInput.<b>taxonomyBranchId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchupdateinputbtaxonomybranchidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TaxonomyBranchUpdateInput.<b>title</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-taxonomybranchupdateinputbtitlebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:p,Bullet:s,SpecifiedBy:m,Badge:u};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The input for updating a TaxonomyBranch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input TaxonomyBranchUpdateInput {\n  collectionId: ID\n  productTag: String\n  storefrontIds: [ID!]\n  taxonomyBranchId: ID!\n  title: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchupdateinputbcollectionidbcodeid-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranchUpdateInput.",(0,r.kt)("b",null,"collectionId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The collectionId associated with the TaxonomyBranch.\nNot required as a field, but is strongly suggested to be populated, and one is generally created with a TaxonomyBranch.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchupdateinputbproducttagbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranchUpdateInput.",(0,r.kt)("b",null,"productTag"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The product tag associated with this TaxonomyBranch, used for filtering or display matching.")),(0,r.kt)("p",null,'On a Root TaxonomyBranch, this is generally a taxPrefix that is used in all child TaxonomyBranches,\ni.e. "Taxonomy" for child branch productTags like "Taxonomy,Category,T-Shirts"'),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchupdateinputbstorefrontidsbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranchUpdateInput.",(0,r.kt)("b",null,"storefrontIds"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"[ID!]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The storefronts this taxonomyTree is published to.\nThis is only present on the Root TaxonomyBranch of a taxonomyTree and applies to all child taxonomyBranches.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchupdateinputbtaxonomybranchidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranchUpdateInput.",(0,r.kt)("b",null,"taxonomyBranchId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-taxonomybranchupdateinputbtitlebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TaxonomyBranchUpdateInput.",(0,r.kt)("b",null,"title"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The name of the taxonomyBranch.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-taxonomy-branch"},(0,r.kt)("inlineCode",{parentName:"a"},"updateTaxonomyBranch")),"  ",(0,r.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);