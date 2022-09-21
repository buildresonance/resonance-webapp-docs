"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[67521],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=p(t),u=r,f=l["".concat(s,".").concat(u)]||l[u]||m[u]||d;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=t.length,i=new Array(d);i[0]=l;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<d;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},73310:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=t(87462),r=t(63366),d=(t(67294),t(3905)),i=["components"],o={id:"demand-event",title:"DemandEvent",hide_table_of_contents:!1},s=void 0,p={unversionedId:"developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event",id:"developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event",title:"DemandEvent",description:"Contains before and after snapshots for every event that occurs within the Demand domain",source:"@site/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event.mdx",sourceDirName:"developers/demandhq-apis/demand-api/graphql/reference/objects",slug:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event.mdx",tags:[],version:"current",frontMatter:{id:"demand-event",title:"DemandEvent",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"DemandEventMetadata",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event-metadata"},next:{title:"DemandHqIdentityConnection",permalink:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-hq-identity-connection"}},c={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>message</code> (<code>DemandEventMessage</code>)",id:"message-demandeventmessage",level:4},{value:"<code>messageId</code> (<code>String!</code>)",id:"messageid-string",level:4},{value:"<code>subject</code> (<code>String</code>)",id:"subject-string",level:4},{value:"<code>timestamp</code> (<code>Date!</code>)",id:"timestamp-date",level:4}],l={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,d.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Contains before and after snapshots for every event that occurs within the Demand domain"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type DemandEvent {\n  message: DemandEventMessage\n  messageId: String!\n  subject: String\n  timestamp: Date!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"message-demandeventmessage"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"message"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/objects/demand-event-message"},(0,d.kt)("inlineCode",{parentName:"a"},"DemandEventMessage")),")"),(0,d.kt)("p",null,"This is the event data and metadata.\nThe data is variable, but most typically contains a newItem and oldItem."),(0,d.kt)("h4",{id:"messageid-string"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"messageId"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,d.kt)("p",null,"UUID"),(0,d.kt)("h4",{id:"subject-string"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"subject"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,d.kt)("p",null,"A human-friendly string summarizing the event"),(0,d.kt)("h4",{id:"timestamp-date"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("inlineCode",{parentName:"a"},"timestamp"))," (",(0,d.kt)("a",{parentName:"h4",href:"/developers/demandhq-apis/demand-api/graphql/reference/scalars/date"},(0,d.kt)("inlineCode",{parentName:"a"},"Date!")),")"),(0,d.kt)("p",null,"ISO Date that the event occurred"))}u.isMDXComponent=!0}}]);