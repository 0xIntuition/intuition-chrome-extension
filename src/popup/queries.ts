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
query GetThings($url: String) {
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
              positionCount
              totalShares
              currentSharePrice
            }
            vault {
              positionCount
              totalShares
              currentSharePrice
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