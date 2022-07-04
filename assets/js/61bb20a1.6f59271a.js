"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[84333],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),s=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(d,".").concat(m)]||u[m]||l[m]||i;return r?t.createElement(f,o(o({ref:n},c),{},{components:r})):t.createElement(f,o({ref:n},c))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44342:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={id:"variants",title:"variants",hide_table_of_contents:!1},d=void 0,s={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/queries/variants",id:"developers/demandhq-apis/demand-api/graphql/reference/queries/variants",title:"variants",description:"Get several variants by VariantIds (currently)",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/variants.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/queries",slug:"/developers/demandhq-apis/demand-api/graphql/reference/queries/variants",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/variants",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/queries/variants.mdx",tags:[],version:"current",frontMatter:{id:"variants",title:"variants",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"variant",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/queries/variant"},next:{title:"Boolean",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/boolean"}},c={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>variantIds</code> (<code>[ID!]!</code>)",id:"variantids-id",level:4},{value:"Type",id:"type",level:3},{value:"<code>VariantConnection</code>",id:"variantconnection",level:4}],u={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Get several variants by VariantIds (currently)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Requires demandHqvariant/read permission on the requesting identity for all associated demandHqs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"variants(\n  variantIds: [ID!]!\n): VariantConnection!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"variantids-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"variantIds"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"variantconnection"},(0,i.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/variant-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"VariantConnection"))),(0,i.kt)("p",null,"Paginate through Variants"))}m.isMDXComponent=!0}}]);