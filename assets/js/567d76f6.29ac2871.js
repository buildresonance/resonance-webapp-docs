"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[78460],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=o,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54850:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(87462),o=a(67294),r=a(3905);const i={id:"variant-in-composite-create-input",title:"VariantInCompositeCreateInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"demand/api/graphql-admin/reference/inputs/variant-in-composite-create-input",id:"demand/api/graphql-admin/reference/inputs/variant-in-composite-create-input",title:"VariantInCompositeCreateInput",description:"The necessary fields in order to create a new variant inside a ProductCompositeCreateInput",source:"@site/docs/demand/api/graphql-admin/reference/inputs/variant-in-composite-create-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/variant-in-composite-create-input",permalink:"/demand/api/graphql-admin/reference/inputs/variant-in-composite-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/variant-in-composite-create-input.mdx",tags:[],version:"current",frontMatter:{id:"variant-in-composite-create-input",title:"VariantInCompositeCreateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"VariantCreateInput",permalink:"/demand/api/graphql-admin/reference/inputs/variant-create-input"},next:{title:"VariantShippingDimensionsInput",permalink:"/demand/api/graphql-admin/reference/inputs/variant-shipping-dimensions-input"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>barcode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbbarcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>casePack</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbcasepackbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>contentItemInputIds</b></code><Bullet /><code>[String!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbcontentiteminputidsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>deliveryMethod</b></code><Bullet /><code>VariantDeliveryMethod</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbdeliverymethodbcodevariantdeliverymethod-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>manufacturer</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbmanufacturerbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>mapPrice</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbmappricebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>mpn</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbmpnbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>msrp</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbmsrpbcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>optionValues</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputboptionvaluesbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>position</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbpositionbcodeint-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>price</b></code><Bullet /><code>Float</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbpricebcodefloat-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>shippingDimensions</b></code><Bullet /><code>VariantShippingDimensionsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbshippingdimensionsbcodevariantshippingdimensionsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>sku</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbskubcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>standardizedColor</b></code><Bullet /><code>VariantStandardizedColor</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbstandardizedcolorbcodevariantstandardizedcolor-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>taxCode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbtaxcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>VariantInCompositeCreateInput.<b>weight</b></code><Bullet /><code>VariantWeightInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-variantincompositecreateinputbweightbcodevariantweightinput-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:s,Bullet:p,SpecifiedBy:m,Badge:u};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The necessary fields in order to create a new variant inside a ProductCompositeCreateInput"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input VariantInCompositeCreateInput {\n  barcode: String\n  casePack: Int\n  contentItemInputIds: [String!]\n  deliveryMethod: VariantDeliveryMethod\n  manufacturer: String\n  mapPrice: Float\n  mpn: String\n  msrp: Float\n  optionValues: [String!]!\n  position: Int\n  price: Float\n  shippingDimensions: VariantShippingDimensionsInput\n  sku: String\n  standardizedColor: VariantStandardizedColor\n  taxCode: String\n  weight: VariantWeightInput\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbbarcodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"barcode"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"UPC, ISBN, GTIN, etc.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbcasepackbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"casePack"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Quantity in one variant (i.e. 12-pack). Must be a positive integer.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbcontentiteminputidsbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"contentItemInputIds"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,r.kt)(u,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For contentItems where you are associating an existing contentItem, input the actual contentItemId.\nFor other contentItem Inputs, match this to the contentItemInputId you have assigned.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbdeliverymethodbcodevariantdeliverymethod-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"deliveryMethod"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/variant-delivery-method"},(0,r.kt)("inlineCode",{parentName:"a"},"VariantDeliveryMethod"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbmanufacturerbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"manufacturer"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Often same as vendor, but not always.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbmappricebcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"mapPrice"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Minimum Advertised Price. Must be a positive number.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbmpnbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"mpn"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Manufacturer Part Number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbmsrpbcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"msrp"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Manufacturer's Suggested Retail Price. Must be a positive number.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputboptionvaluesbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"optionValues"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An array of the option values that make up this variant.\nFor example, a product with a color and size option would have two option values,\none for each of the color and size options, i.e. ",'["Red", "Small"]','\nMust have 1-3, and it should match the number of options in the product, but there is no validation to do so.\nSet this to "No Option" if you don\'t want to use options for this product and this is the only variant.\nSee ',(0,r.kt)("a",{parentName:"p",href:"https://docs.buildresonance.com/concepts/products/#no-option-products"},"https://docs.buildresonance.com/concepts/products/#no-option-products")," for more info.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbpositionbcodeint-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"position"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Used to determine what order the content comes out in.\nPositive Integers are allowed, up to 9,999,999,999, and it does not have to be unique or sequential.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbpricebcodefloat-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"price"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Price for the defaultCurrency, can be any positive float number value.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbshippingdimensionsbcodevariantshippingdimensionsinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"shippingDimensions"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/variant-shipping-dimensions-input"},(0,r.kt)("inlineCode",{parentName:"a"},"VariantShippingDimensionsInput"))," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbskubcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"sku"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Stock Keeping Unit")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbstandardizedcolorbcodevariantstandardizedcolor-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"standardizedColor"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/variant-standardized-color"},(0,r.kt)("inlineCode",{parentName:"a"},"VariantStandardizedColor"))," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbtaxcodebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"taxCode"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sales Tax Related Code, can match your chosen sales tax provider")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-variantincompositecreateinputbweightbcodevariantweightinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"VariantInCompositeCreateInput.",(0,r.kt)("b",null,"weight"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/variant-weight-input"},(0,r.kt)("inlineCode",{parentName:"a"},"VariantWeightInput"))," ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/inputs/product-composite-create-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ProductCompositeCreateInput")),"  ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);