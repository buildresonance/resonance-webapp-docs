"use strict";(self.webpackChunkresonance_webapp_docs=self.webpackChunkresonance_webapp_docs||[]).push([[15029],{13529:(n,e,t)=>{t.r(e),t.d(e,{default:()=>l});var a=t(52094),r=t(37253),i=t(91262),o=t(67294),s=t(47981);const l=()=>o.createElement(s.Z,null,o.createElement("div",{style:{height:"calc(100vh - 40px)"}},o.createElement(i.Z,{fallback:o.createElement("div",null,"Loading...")},(()=>{const n=(0,a.nq)({url:"https://storefrontapi.buildresonance.com/graphql",headers:{"x-resonance-storefront-token":"eyJzbHVnIjoicHVibGljLWtleSIsInN0b3JlZnJvbnRJZCI6InN0Zm50LTJMbVo5QUxvSGUxV09tSk45amhjOFhFQTg3eCJ9"}});return o.createElement(r.ZP,{fetcher:n,defaultQuery:'# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a "{" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: "value") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#   Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n# Default endpoint is https://storefrontapi.buildresonance.com/graphql\n# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #\n\n# Change the below query to test the API as you see fit.\n# Certain functionality that requires login will not work \n# (like customer, cart, or checkout).\n\n{\n  products(first: 3) {\n    nodes {\n      optionLabels\n      publishedAt\n      productId\n      tags {\n        parsed {\n          category\n          key\n          value\n        }\n      }\n      title\n      vendor\n      contentItems(first: 10) {\n        nodes {\n          alt\n          category\n          contentKey\n          contentType\n          position\n        }\n      }\n      locale(localeType: EN_US) {\n        description\n        featureBullets\n      }\n      variants(first: 10) {\n        nodes {\n          barcode\n          contentItemIds\n          msrp\n          optionValues\n          position\n          price\n          shippingDimensions {\n            height\n            length\n            width\n            unit\n          }\n          sku\n          standardizedColor\n          title\n          variantId\n          weight {\n            amount\n            unit\n          }\n        }\n      }\n    }\n  }\n}'})}))))}}]);