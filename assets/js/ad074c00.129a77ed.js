"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[27465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),p=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return r?l.createElement(b,o(o({ref:t},d),{},{components:r})):l.createElement(b,o({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15313:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var l=r(87462),n=r(67294),a=r(3905);const o={id:"public-supplier-product",title:"PublicSupplierProduct",hide_table_of_contents:!1},i=void 0,c={unversionedId:"demand/api/graphql-admin/reference/objects/public-supplier-product",id:"demand/api/graphql-admin/reference/objects/public-supplier-product",title:"PublicSupplierProduct",description:"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs.",source:"@site/docs/demand/api/graphql-admin/reference/objects/public-supplier-product.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/public-supplier-product",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-product",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/public-supplier-product.mdx",tags:[],version:"current",frontMatter:{id:"public-supplier-product",title:"PublicSupplierProduct",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"PublicSupplierProductTags",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-product-tags"},next:{title:"PublicSupplierVariantConnection",permalink:"/demand/api/graphql-admin/reference/objects/public-supplier-variant-connection"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>externalProductId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicsupplierproductbexternalproductidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>featuredImage</b></code><Bullet /><code>PublicSupplierProductContentItem</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsupplierproductbfeaturedimagebcodepublicsupplierproductcontentitem-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>optionLabels</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicsupplierproductboptionlabelsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicsupplierproductbsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>supplierProductId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicsupplierproductbsupplierproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>tags</b></code><Bullet /><code>PublicSupplierProductTags</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-publicsupplierproductbtagsbcodepublicsupplierproducttags-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>title</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicsupplierproductbtitlebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PublicSupplierProduct.<b>vendor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-publicsupplierproductbvendorbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(n.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(n.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:u,SpecifiedBy:s,Badge:m};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs.\nSKUs are represented by SupplierVariants, a child of this entity.\nThis entity is less frequently updated, it is more likely that SupplyVariant will be updated frequently."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PublicSupplierProduct {\n  externalProductId: String!\n  featuredImage: PublicSupplierProductContentItem\n  optionLabels: [String!]!\n  supplierId: ID!\n  supplierProductId: ID!\n  tags: PublicSupplierProductTags\n  title: String!\n  vendor: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbexternalproductidbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"externalProductId"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Passed along in PurchaseOrders so the Supplier can identify items in their warehouse.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbfeaturedimagebcodepublicsupplierproductcontentitem-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"featuredImage"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product-content-item"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicSupplierProductContentItem"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The first image content item, if it exists")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductboptionlabelsbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"optionLabels"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The labels for the options of this product, i.e. ",'["Color", "Size"]','\nThese will match with the order of the optionValues on the SupplierVariants.\nMust have 1-3, and it should match the number of options in the variants, but there is no validation to do so.\nSet the first optionLabel to "No Option" if you don\'t want to use options for this product.\nSee ',(0,a.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbsupplieridbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"supplierId"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reference to the Supplier that owns this product.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbsupplierproductidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"supplierProductId"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbtagsbcodepublicsupplierproducttags-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"tags"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product-tags"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicSupplierProductTags"))," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbtitlebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"title"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The title of the product.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-publicsupplierproductbvendorbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"PublicSupplierProduct.",(0,a.kt)("b",null,"vendor"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The brand or manufacturer of the product.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product-connection-with-search"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicSupplierProductConnectionWithSearch")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/public-supplier-product-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicSupplierProductEdge")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);