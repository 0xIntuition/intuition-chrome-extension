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
            id
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
              positions{
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
              positions{
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

export const getThingsExtendedQuery = gql(/* GraphQL */ `
query GetThingsExtended($url: String) {
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
          positions {
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
            id
            label
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
              positions{
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
              positions{
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


export const getMyPositionsQuery = gql(/* GraphQL */ `
query GetMyPositions($address: String) {
  positions(where: { accountId: $address }) {
    items {
      id
      shares
      vault {
        positionCount
        totalShares
        currentSharePrice
        atom {
          id
          label
          image
        }
        triple {
          id
          label
          subject {
            id
            image
            label
            value {
              thing {
                url
              }
            }
          }
          predicate {
            id
            image
            label
          }
          object {
            id
            image
            label
          }
        }
      }
    }
  }
}
`);

export const searchAtomsQuery = gql(/* GraphQL */ `
query SearchAtoms($label: String!, $after: String) {
  atoms(
    orderBy: "blockTimestamp"
    after: $after
    orderDirection: "desc"
    limit: 30
    where: { type_in: [Thing, Person, Organization], label_contains: $label }
  ) {
    items {
      id
      image
      label
    }
    pageInfo {
      endCursor
      hasNextPage
      startCursor
    }
  }
}
`);
