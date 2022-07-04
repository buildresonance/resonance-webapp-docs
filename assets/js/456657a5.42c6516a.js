"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[63885],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),h=s(t),m=a,u=h["".concat(p,".").concat(m)]||h[m]||c[m]||i;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},70665:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],d={id:"user-update-input",title:"UserUpdateInput",hide_table_of_contents:!1},p=void 0,s={unversionedId:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",id:"developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",title:"UserUpdateInput",description:"Input object to update a User.",source:"@site/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input.mdx",sourceDirName:"developers/shared-apis/adminidentity-api/graphql/reference/inputs",slug:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input",draft:!1,editUrl:"https://github.com/obfns/resonance-webapp-docs/tree/main/docs/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-update-input.mdx",tags:[],version:"current",frontMatter:{id:"user-update-input",title:"UserUpdateInput",hide_table_of_contents:!1},sidebar:"apisSidebar",previous:{title:"UserNotificationUpdateStatusInput",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/inputs/user-notification-update-status-input"},next:{title:"createApp",permalink:"/developers/shared-apis/adminidentity-api/graphql/reference/mutations/create-app"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>address</code> (<code>String</code>)",id:"address-string",level:4},{value:"<code>birthdate</code> (<code>String</code>)",id:"birthdate-string",level:4},{value:"<code>email</code> (<code>String</code>)",id:"email-string",level:4},{value:"<code>familyName</code> (<code>String</code>)",id:"familyname-string",level:4},{value:"<code>gender</code> (<code>String</code>)",id:"gender-string",level:4},{value:"<code>givenName</code> (<code>String</code>)",id:"givenname-string",level:4},{value:"<code>locale</code> (<code>String</code>)",id:"locale-string",level:4},{value:"<code>nickname</code> (<code>String</code>)",id:"nickname-string",level:4},{value:"<code>phone</code> (<code>String</code>)",id:"phone-string",level:4},{value:"<code>picture</code> (<code>String</code>)",id:"picture-string",level:4},{value:"<code>profile</code> (<code>String</code>)",id:"profile-string",level:4},{value:"<code>userName</code> (<code>ID!</code>)",id:"username-id",level:4},{value:"<code>website</code> (<code>String</code>)",id:"website-string",level:4},{value:"<code>zoneinfo</code> (<code>String</code>)",id:"zoneinfo-string",level:4}],h={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input object to update a User.\nVery similiar to User, but does not include sub and email is not required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input UserUpdateInput {\n  address: String\n  birthdate: String\n  email: String\n  familyName: String\n  gender: String\n  givenName: String\n  locale: String\n  nickname: String\n  phone: String\n  picture: String\n  profile: String\n  userName: ID!\n  website: String\n  zoneinfo: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"address"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"birthdate-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"birthdate"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"End-User's birthday, represented as an ISO 8601:2004 YYYY-MM-DD format. The\nyear MAY be 0000, indicating that it is omitted. To represent only the year,\nYYYY format is allowed. Note that depending on the underlying platform's date\nrelated function, providing just year can result in varying month and day, so\nthe implementers need to take this factor into account to correctly process the dates."),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"email"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"familyname-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"familyName"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"gender-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"gender"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"givenname-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"givenName"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"locale-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"locale"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"String representing the User's locale, i.e. 'en-us'"),(0,i.kt)("h4",{id:"nickname-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"nickname"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The display name for the User"),(0,i.kt)("h4",{id:"phone-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"phone"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"End-User's preferred telephone number. E.164 ","[E.164]"," is RECOMMENDED as the\nformat of this Claim, for example, +1 (425) 555-1212 or +56 (2) 687 2400. If\nthe phone number contains an extension, it is RECOMMENDED that the extension\nbe represented using the RFC 3966 ","[RFC3966]"," extension syntax, for example, +1\n(604) 555-1234;ext=5678."),(0,i.kt)("h4",{id:"picture-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"picture"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"URL of the End-User's profile picture. This URL MUST refer to an image file\n(for example, a PNG, JPEG, or GIF image file), rather than to a Web page\ncontaining an image. Note that this URL SHOULD specifically reference a\nprofile photo of the End-User suitable for displaying when describing the\nEnd-User, rather than an arbitrary photo taken by the End-User."),(0,i.kt)("h4",{id:"profile-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"URL of the End-User's profile page. The contents of this Web page SHOULD be about the End-User."),(0,i.kt)("h4",{id:"username-id"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"userName"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"website-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"website"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"URL of the End-User's Web page or blog. This Web page SHOULD contain\ninformation published by the End-User or an organization that the End-User is\naffiliated with."),(0,i.kt)("h4",{id:"zoneinfo-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"zoneinfo"))," (",(0,i.kt)("a",{parentName:"h4",href:"/developers/shared-apis/adminidentity-api/graphql/reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"Timezone - String from zoneinfo time zone database representing the End-User's\ntime zone. For example, Europe/Paris or America/Los_Angeles."))}m.isMDXComponent=!0}}]);