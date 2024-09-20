/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetMyPosition($id: BigInt!, $address: String) {  \n    positions(where: { accountId: $address, vaultId: $id }, limit: 1) {\n      items {\n        shares\n    }\n  }\n}\n": types.GetMyPositionDocument,
    "\nquery GetThings($url: String, $address: String) {\n  things(where: { url_starts_with: $url }) {\n    items {\n      atomId\n      url\n      name\n      image\n      atom {\n        value {\n          thing {\n            description\n          }\n        }\n        vault {\n          positionCount\n          totalShares\n          currentSharePrice\n          myPosition: positions(limit: 1, where: { accountId: $address }) {\n            items {\n              shares\n\t\t\t\t\t\t\taccountId\n            }\n          }\n          positions(orderBy: \"shares\", orderDirection: \"desc\", limit: 5) {\n            items {\n              shares\n              account {\n                id\n                type\n                image\n                label\n              }\n            }\n          }\n        }\n        asSubject {\n          items {\n            object {\n              id\n              label\n              emoji\n              image\n            }\n            predicate {\n              emoji\n              label\n              image\n              id\n            }\n            counterVault {\n              id\n              positionCount\n              totalShares\n              currentSharePrice\n              myPosition: positions(limit: 1, where: { accountId: $address }) {\n                items {\n                  shares\n                  accountId\n                }\n              }\n            }\n            vault {\n              id\n              positionCount\n              totalShares\n              currentSharePrice\n              myPosition: positions(limit: 1, where: { accountId: $address }) {\n                items {\n                  shares\n                  accountId\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  chainlinkPrices(limit: 1, orderBy: \"id\", orderDirection: \"desc\") {\n    items {\n      usd\n    }\n  }\n}\n": types.GetThingsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMyPosition($id: BigInt!, $address: String) {  \n    positions(where: { accountId: $address, vaultId: $id }, limit: 1) {\n      items {\n        shares\n    }\n  }\n}\n"): (typeof documents)["\n  query GetMyPosition($id: BigInt!, $address: String) {  \n    positions(where: { accountId: $address, vaultId: $id }, limit: 1) {\n      items {\n        shares\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetThings($url: String, $address: String) {\n  things(where: { url_starts_with: $url }) {\n    items {\n      atomId\n      url\n      name\n      image\n      atom {\n        value {\n          thing {\n            description\n          }\n        }\n        vault {\n          positionCount\n          totalShares\n          currentSharePrice\n          myPosition: positions(limit: 1, where: { accountId: $address }) {\n            items {\n              shares\n\t\t\t\t\t\t\taccountId\n            }\n          }\n          positions(orderBy: \"shares\", orderDirection: \"desc\", limit: 5) {\n            items {\n              shares\n              account {\n                id\n                type\n                image\n                label\n              }\n            }\n          }\n        }\n        asSubject {\n          items {\n            object {\n              id\n              label\n              emoji\n              image\n            }\n            predicate {\n              emoji\n              label\n              image\n              id\n            }\n            counterVault {\n              id\n              positionCount\n              totalShares\n              currentSharePrice\n              myPosition: positions(limit: 1, where: { accountId: $address }) {\n                items {\n                  shares\n                  accountId\n                }\n              }\n            }\n            vault {\n              id\n              positionCount\n              totalShares\n              currentSharePrice\n              myPosition: positions(limit: 1, where: { accountId: $address }) {\n                items {\n                  shares\n                  accountId\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  chainlinkPrices(limit: 1, orderBy: \"id\", orderDirection: \"desc\") {\n    items {\n      usd\n    }\n  }\n}\n"): (typeof documents)["\nquery GetThings($url: String, $address: String) {\n  things(where: { url_starts_with: $url }) {\n    items {\n      atomId\n      url\n      name\n      image\n      atom {\n        value {\n          thing {\n            description\n          }\n        }\n        vault {\n          positionCount\n          totalShares\n          currentSharePrice\n          myPosition: positions(limit: 1, where: { accountId: $address }) {\n            items {\n              shares\n\t\t\t\t\t\t\taccountId\n            }\n          }\n          positions(orderBy: \"shares\", orderDirection: \"desc\", limit: 5) {\n            items {\n              shares\n              account {\n                id\n                type\n                image\n                label\n              }\n            }\n          }\n        }\n        asSubject {\n          items {\n            object {\n              id\n              label\n              emoji\n              image\n            }\n            predicate {\n              emoji\n              label\n              image\n              id\n            }\n            counterVault {\n              id\n              positionCount\n              totalShares\n              currentSharePrice\n              myPosition: positions(limit: 1, where: { accountId: $address }) {\n                items {\n                  shares\n                  accountId\n                }\n              }\n            }\n            vault {\n              id\n              positionCount\n              totalShares\n              currentSharePrice\n              myPosition: positions(limit: 1, where: { accountId: $address }) {\n                items {\n                  shares\n                  accountId\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  chainlinkPrices(limit: 1, orderBy: \"id\", orderDirection: \"desc\") {\n    items {\n      usd\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;