"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[53290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(a),m=l,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,r(r({ref:t},i),{},{components:a})):n.createElement(g,r({ref:t},i))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:l,r[1]=d;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87029:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var n=a(87462),l=a(67294),o=a(3905);const r={id:"product-locale",title:"ProductLocale",hide_table_of_contents:!1},d=void 0,c={unversionedId:"demand/api/graphql-admin/reference/objects/product-locale",id:"demand/api/graphql-admin/reference/objects/product-locale",title:"ProductLocale",description:"This has a many to one relationship with Product, and provides localized language data for the appropriate fields.",source:"@site/docs/demand/api/graphql-admin/reference/objects/product-locale.mdx",sourceDirName:"demand/api/graphql-admin/reference/objects",slug:"/demand/api/graphql-admin/reference/objects/product-locale",permalink:"/demand/api/graphql-admin/reference/objects/product-locale",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/objects/product-locale.mdx",tags:[],version:"current",frontMatter:{id:"product-locale",title:"ProductLocale",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"ProductImagesFromFilesResponse",permalink:"/demand/api/graphql-admin/reference/objects/product-images-from-files-response"},next:{title:"ProductMetrics",permalink:"/demand/api/graphql-admin/reference/objects/product-metrics"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>createdAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebcreatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>descriptionAsHTML</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebdescriptionashtmlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>featureBullets</b></code><Bullet /><code>[String]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebfeaturebulletsbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>localeType</b></code><Bullet /><code>ResonanceLocaleType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-productlocaleblocaletypebcoderesonancelocaletype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>updatedAt</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebupdatedatbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProductLocale.<b>updatedBy</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-productlocalebupdatedbybcodestring--",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(l.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:p,SpecifiedBy:u,Badge:m};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This has a many to one relationship with Product, and provides localized language data for the appropriate fields.\nThere will often only be one of these, and it should be the one set in defaultLocale for the supplier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProductLocale {\n  createdAt: String!\n  demandHqId: ID!\n  description: String\n  descriptionAsHTML: String\n  featureBullets: [String]\n  localeType: ResonanceLocaleType!\n  productId: ID!\n  updatedAt: String!\n  updatedBy: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebcreatedatbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebdemandhqidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"demandHqId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"description"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Can utilize Markdown")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebdescriptionashtmlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"descriptionAsHTML"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Returns the product (productLocale) description as HTML.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebfeaturebulletsbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"featureBullets"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String]"))," ",(0,o.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Limited to 5 bullets")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocaleblocaletypebcoderesonancelocaletype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"localeType"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/enums/resonance-locale-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ResonanceLocaleType!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebproductidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"productId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebupdatedatbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-productlocalebupdatedbybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProductLocale.",(0,o.kt)("b",null,"updatedBy"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-product-locale"},(0,o.kt)("inlineCode",{parentName:"a"},"createProductLocale")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/update-product-locale"},(0,o.kt)("inlineCode",{parentName:"a"},"updateProductLocale")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/objects/product"},(0,o.kt)("inlineCode",{parentName:"a"},"Product")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);