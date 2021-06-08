---
sidebar_position: 1
---

# Catalog API Overall Concepts

The Catalog API is where all of the Product data is interacted with on the Demander side. You could consider this the Product domain, but it includes other items as well, like managing Storefront visibility and static content like Product Videos and Images.

## Storefronts

These represent different ways of selling your goods. An example may be a React frontend, or selling on Google or Amazon.

## Price

Price is managed at the Demander/Storefront level. This gives the Demander a lot of control over pricing. This complexity is sometimes necessary as different storefronts have different costs, commission structures, etc, and the price must be adjusted to reflect that.

## Localization/Currency

Language and Currency are handled at the default level for a given Demander, and the fields uploaded will correlate with that locale or currency. Other locales or currencies will be handled through other means. This path was chosen due to most marketplaces having a primary locale/currency that covers 99% of use cases (including many storefronts).

## Content Items

Content items include Images, Videos, PDFs, or other static items. These have a one-to-many relationship with both Products and Variants (as in several can be related to either), and in both cases a "primary" content item can also be designated.