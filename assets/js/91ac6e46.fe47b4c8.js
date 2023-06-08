"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[33551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,y=s["".concat(i,".").concat(u)]||s[u]||g[u]||o;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81814:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>g,assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905);const l={id:"page-type-content-create-input",title:"PageTypeContentCreateInput",hide_table_of_contents:!1},c=void 0,i={unversionedId:"demand/api/graphql-admin/reference/inputs/page-type-content-create-input",id:"demand/api/graphql-admin/reference/inputs/page-type-content-create-input",title:"PageTypeContentCreateInput",description:"Input object to create a PageTypeContent.",source:"@site/docs/demand/api/graphql-admin/reference/inputs/page-type-content-create-input.mdx",sourceDirName:"demand/api/graphql-admin/reference/inputs",slug:"/demand/api/graphql-admin/reference/inputs/page-type-content-create-input",permalink:"/demand/api/graphql-admin/reference/inputs/page-type-content-create-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/demand/api/graphql-admin/reference/inputs/page-type-content-create-input.mdx",tags:[],version:"current",frontMatter:{id:"page-type-content-create-input",title:"PageTypeContentCreateInput",hide_table_of_contents:!1},sidebar:"demandApiAdminSidebar",previous:{title:"PageSortInput",permalink:"/demand/api/graphql-admin/reference/inputs/page-sort-input"},next:{title:"PageTypeContentTagsInput",permalink:"/demand/api/graphql-admin/reference/inputs/page-type-content-tags-input"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>contentAsString</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbcontentasstringbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>demandHqId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbdemandhqidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>description</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbdescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>pageType</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbpagetypebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>secondaryContentAsString</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbsecondarycontentasstringbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>seoDescription</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbseodescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>seoTitle</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbseotitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>storefrontId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbstorefrontidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>subtitle</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbsubtitlebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>tags</b></code><Bullet /><code>PageTypeContentTagsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbtagsbcodepagetypecontenttagsinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PageTypeContentCreateInput.<b>title</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pagetypecontentcreateinputbtitlebcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:s,SpecifiedBy:g,Badge:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input object to create a PageTypeContent."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input PageTypeContentCreateInput {\n  contentAsString: String\n  demandHqId: ID!\n  description: String\n  pageType: String!\n  secondaryContentAsString: String\n  seoDescription: String\n  seoTitle: String\n  storefrontId: ID!\n  subtitle: String\n  tags: PageTypeContentTagsInput\n  title: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbcontentasstringbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"contentAsString"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbdemandhqidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"demandHqId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbdescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"description"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A short description of the pageTypeContent, limit 1000 characters. This is\ntypically used off of the pageTypeContent page itself.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbpagetypebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"pageType"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbsecondarycontentasstringbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"secondaryContentAsString"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbseodescriptionbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"seoDescription"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Description specific for SEO purposes, limit 170 characters.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbseotitlebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"seoTitle"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Title specific for SEO purposes, limit 256 characters.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbstorefrontidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"storefrontId"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbsubtitlebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"subtitle"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The subtitle of the pageTypeContent, limit 256 characters.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbtagsbcodepagetypecontenttagsinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"tags"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/inputs/page-type-content-tags-input"},(0,o.kt)("inlineCode",{parentName:"a"},"PageTypeContentTagsInput"))," ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"These tags function in the opposite direction of other tags, allowing you to\nchoose several to focus on while displaying the content.\nCommonly, these are used to filter or categorize content by providing options that match tags on the content itself.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pagetypecontentcreateinputbtitlebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PageTypeContentCreateInput.",(0,o.kt)("b",null,"title"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/demand/api/graphql-admin/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The title of the pageTypeContent, limit 256 characters.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/demand/api/graphql-admin/reference/mutations/create-page-type-content"},(0,o.kt)("inlineCode",{parentName:"a"},"createPageTypeContent")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);