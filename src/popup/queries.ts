import { gql } from '../generated/gql.js';

export const getMyPositionQuery = gql(/* GraphQL */ `
  query GetMyPosition($id: BigInt!, $address: String) {  
    positions(where: { accountId: $address, vaultId: $id }, limit: 1) {
      items {
        shares
    }
  }
}
`);

export const getThingsQuery = gql(/* GraphQL */ `
query GetThings($url: String, $address: String) {
  things(where: { url_starts_with: $url }) {
    items {
      atomId
      url
      name
      image
      atom {
        value {
          thing {
            description
          }
        }
        vault {
          positionCount
          totalShares
          currentSharePrice
          myPosition: positions(limit: 1, where: { accountId: $address }) {
            items {
              shares
							accountId
            }
          }
          positions(orderBy: "shares", orderDirection: "desc", limit: 5) {
            items {
              shares
              account {
                id
                type
                image
                label
              }
            }
          }
        }
        asSubject {
          items {
            object {
              id
              label
              emoji
              image
            }
            predicate {
              emoji
              label
              image
              id
            }
            counterVault {
              id
              positionCount
              totalShares
              currentSharePrice
              myPosition: positions(limit: 1, where: { accountId: $address }) {
                items {
                  shares
                  accountId
                }
              }
            }
            vault {
              id
              positionCount
              totalShares
              currentSharePrice
              myPosition: positions(limit: 1, where: { accountId: $address }) {
                items {
                  shares
                  accountId
                }
              }
            }
          }
        }
      }
    }
  }
  chainlinkPrices(limit: 1, orderBy: "id", orderDirection: "desc") {
    items {
      usd
    }
  }
}
`);