"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[34570],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(a),m=r,y=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return a?n.createElement(y,l(l({ref:t},c),{},{components:a})):n.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39588:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(67294),i=a(3905);const l={id:"variant-supplier-variant-create-input",title:"VariantSupplierVariantCreateInput",hide_table_of_contents:!1},o=void 0,p={unversionedId:"demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input",id:"demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input",title:"VariantSupplierVariantCreateInput",description:"The fields required to create a new VariantSupplierVariant",source:"@site/docs/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input",permalink:"/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-create-input.mdx",tags:[],version:"current",frontMatter:{id:"variant-supplier-variant-create-input",title:"VariantSupplierVariantCreateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"VariantShippingDimensionsInput",permalink:"/demand/api/graphql-admin/reference/inputs/variant-shipping-dimensions-input"},next:{title:"VariantSupplierVariantHandlingCostInput",permalink:"/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-handling-cost-input"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>averageShippingCost</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbaverageshippingcostbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>cost</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbcostbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>handlingCost</b></code><Bullet /><code>VariantSupplierVariantHandlingCostInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbhandlingcostbcodevariantsuppliervarianthandlingcostinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>inventoryPolicy</b></code><Bullet /><code>InventoryPolicy!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbinventorypolicybcodeinventorypolicy--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>inventoryQuantity</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbinventoryquantitybcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>supplierId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbsupplieridbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>supplierProductId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbsupplierproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>supplierVariantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbsuppliervariantidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantSupplierVariantCreateInput.<b>variantId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbvariantidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:s,SpecifiedBy:u,Badge:m};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The fields required to create a new VariantSupplierVariant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input VariantSupplierVariantCreateInput {\n  averageShippingCost: Float\n  cost: Float\n  demandHqId: ID!\n  handlingCost: VariantSupplierVariantHandlingCostInput\n  inventoryPolicy: InventoryPolicy!\n  inventoryQuantity: Int!\n  productId: ID!\n  supplierId: ID!\n  supplierProductId: ID!\n  supplierVariantId: ID!\n  variantId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbaverageshippingcostbcodefloat-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"averageShippingCost"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A calculated metric for some kind of average for a common region. Uncommon.\nMust be a positive number.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbcostbcodefloat-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"cost"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"COGS, or Cost of Goods Sold for this VariantSupplierVariant\nMust be a positive number.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbdemandhqidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"demandHqId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbhandlingcostbcodevariantsuppliervarianthandlingcostinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"handlingCost"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/variant-supplier-variant-handling-cost-input"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantSupplierVariantHandlingCostInput"))," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Additional warehouse handling charge, typically for larger items.")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbinventorypolicybcodeinventorypolicy--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"inventoryPolicy"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/inventory-policy"},(0,i.kt)("inlineCode",{parentName:"a"},"InventoryPolicy!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbinventoryquantitybcodeint--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"inventoryQuantity"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbproductidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"productId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Id of the Product the parent Variant is associated with")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbsupplieridbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"supplierId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Id of the Supplier for the associated SupplierVariant")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbsupplierproductidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"supplierProductId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Id of the SupplierProduct for the associated SupplierVariant")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbsuppliervariantidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"supplierVariantId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Id of the SupplierVariant")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-variantsuppliervariantcreateinputbvariantidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"VariantSupplierVariantCreateInput.",(0,i.kt)("b",null,"variantId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Id of the parent Variant")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-variant-supplier-variant"},(0,i.kt)("inlineCode",{parentName:"a"},"createVariantSupplierVariant")),"  ",(0,i.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);