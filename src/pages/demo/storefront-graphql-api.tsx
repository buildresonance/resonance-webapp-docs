import { createGraphiQLFetcher } from "@graphiql/toolkit";
import GraphiQL from "graphiql";
import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { ReactElement } from "react";
import Layout from "@theme/Layout";

import "graphiql/graphiql.css";

const DEFAULT_QUERY = `# Welcome to GraphiQL
#
# GraphiQL is an in-browser tool for writing, validating, and
# testing GraphQL queries.
#
# Type queries into this side of the screen, and you will see intelligent
# typeaheads aware of the current GraphQL type schema and live syntax and
# validation errors highlighted within the text.
#
# GraphQL queries typically start with a "{" character. Lines that starts
# with a # are ignored.
#
# An example GraphQL query might look like:
#
#     {
#       field(arg: "value") {
#         subField
#       }
#     }
#
# Keyboard shortcuts:
#
#   Run Query:  Ctrl-Enter (or press the play button above)
#
#   Auto Complete:  Ctrl-Space (or just start typing)
#
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# Default endpoint is https://storefrontapi.buildresonance.com/graphql
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

# Change the below query to test the API as you see fit.
# Certain functionality that requires login will not work 
# (like customer, cart, or checkout).

{
  products(first: 3) {
    nodes {
      optionLabels      
      productId
      title
      contentItems(first: 10) {
        nodes {         
          contentKey
        }
      }
      locale(localeType: EN_US) {
        featureBullets
      }
      variants(first: 10) {
        nodes {
          price
          title
          variantId
        }
      }
    }
  }
}`;

const StorefrontApiDemo = (): ReactElement => {
    return (
        <Layout>
            <div style={{ height: "calc(100vh - 40px)" }}>
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        const fetcher = createGraphiQLFetcher({
                            url: "https://storefrontapi.buildresonance.com/graphql",
                            headers: {
                                "x-resonance-storefront-token":
                                    "eyJzbHVnIjoicHVibGljLWtleSIsInN0b3JlZnJvbnRJZCI6InN0Zm50LTJMbVo5QUxvSGUxV09tSk45amhjOFhFQTg3eCJ9",
                            },
                        });

                        return (
                            <GraphiQL
                                fetcher={fetcher}
                                defaultQuery={DEFAULT_QUERY}
                            />
                        );
                    }}
                </BrowserOnly>
            </div>
        </Layout>
    );
};

export default StorefrontApiDemo;
