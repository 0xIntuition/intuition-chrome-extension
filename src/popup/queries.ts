import { gql } from '../generated/gql.js';

export const getMyPositionQuery = gql(/* GraphQL */ `
query GetMyPosition($id: numeric!, $address: String) {
  positions(
    where: { accountId: { _eq: $address }, vaultId: { _eq: $id } }
    limit: 1
  ) {
    shares
  }
}
`);

export const getThingsQuery = gql(/* GraphQL */ `
query GetThings($url: String, $address: String) {
  things(where: { url: { _eq: $url } }) {
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
        myPosition: positions(
          limit: 1
          where: { accountId: { _eq: $address } }
        ) {
          shares
          accountId
        }
        positions(order_by: { shares: desc }, limit: 5) {
          shares
          account {
            id
            type
            image
            label
          }
        }
      }
      asSubject {
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
          myPosition: positions(
            limit: 1
            where: { accountId: { _eq: $address } }
          ) {
            shares
            accountId
          }
          positions {
            shares
            accountId
          }
        }
        vault {
          id
          positionCount
          totalShares
          currentSharePrice
          myPosition: positions(
            limit: 1
            where: { accountId: { _eq: $address } }
          ) {
            shares
            accountId
          }
          positions {
            shares
            accountId
          }
        }
      }
    }
  }
  chainLinkPrices(limit: 1, order_by: { id: desc }) {
    usd
  }
}
`);

export const getThingsExtendedQuery = gql(/* GraphQL */ `
query GetThingsExtended($url: String) {
  things(where: { url: { _eq: $url } }) {
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
          shares
          account {
            id
            type
            image
            label
          }
        }
      }
      asSubject {
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
          positions {
            shares
            account {
              id
              label
            }
          }
        }
        vault {
          id
          positionCount
          totalShares
          currentSharePrice
          positions {
            shares
            account {
              id
              label
            }
          }
        }
      }
    }
  }

  chainLinkPrices(limit: 1, order_by: { id: desc }) {
    usd
  }
}
`);

export const getMyPositionsQuery = gql(/* GraphQL */ `
query GetMyPositions($address: String) {
  positions(where: { accountId: { _eq: $address } }) {
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
`);

export const searchAtomsQuery = gql(/* GraphQL */ `
query SearchAtoms($label: String!) {
  atoms(
    order_by: { blockTimestamp: desc }
    limit: 30
    where: {
      type: { _in: ["Thing", "Person", "Organization"] }
      label: { _ilike: $label }
    }
  ) {
    id
    image
    label
  }
}
`);

export const getAccountProfileQuery = gql(/* GraphQL */ `
query GetAccountProfile($address: String!) {
  account(id: $address) {
    image
    label
    id
  }
}
`);


export const getAccountInfoQuery = gql(/* GraphQL */ `
query GetAccountInfo($address: String!) {
  account(id: $address) {
    image
    label
    id
    positions(where: { accountId: { _eq: $address } }) {
      id
      shares
      vault {
        id
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
  chainLinkPrices(limit: 1, order_by: { id: desc }) {
    usd
  }
}
`);

export const getClaimsFromFollowingAboutSubject = gql(/* GraphQL */ `
query ClaimsFromFollowingAboutSubject($address: String!, $subjectId: numeric!) {
  claims_from_following(
    args: { address: $address }
    where: { subjectId: { _eq: $subjectId } }
  ) {
    shares
    counterShares
    triple {
      id
      vaultId
      counterVaultId
      label
      subject {
        emoji
        label
        image
        id
      }
      predicate {
        emoji
        label
        image
        id
      }
      object {
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
        myPosition: positions(
          limit: 1
          where: { accountId: { _eq: $address } }
        ) {
          shares
          accountId
        }
      }
      vault {
        id
        positionCount
        totalShares
        currentSharePrice
        myPosition: positions(
          limit: 1
          where: { accountId: { _eq: $address } }
        ) {
          shares
          accountId
        }
      }
    }
    account {
      id
      label
    }
  }
}
`);

export const searchAtomsByUriQuery = gql(/* GraphQL */ `
  query SearchAtomsByUri($uri: String, $address: String) {
  atoms(
    where: {
      _or: [
        { data: { _eq: $uri } }
        { value: { thing: { url: { _eq: $uri } } } }
        { value: { person: { url: { _eq: $uri } } } }
        { value: { organization: { url: { _eq: $uri } } } }
        { value: { book: { url: { _eq: $uri } } } }
      ]
    }
  ) {
    id
    data
    type
    label
    image
    emoji
    value {
      person {
        name
        image
        description
        email
        identifier
      }
      thing {
        url
        name
        image
        description
      }
      organization {
        name
        email
        description
        url
      }
    }
    vault {
      positionCount
      totalShares
      currentSharePrice
      myPosition: positions(limit: 1, where: { accountId: { _eq: $address } }) {
        shares
        accountId
      }
      positions(order_by: { shares: desc }, limit: 5) {
        shares
        account {
          id
          type
          image
          label
        }
      }
    }
    asSubject {
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
        myPosition: positions(
          limit: 1
          where: { accountId: { _eq: $address } }
        ) {
          shares
          accountId
        }
        positions {
          shares
          accountId
        }
      }
      vault {
        id
        positionCount
        totalShares
        currentSharePrice
        myPosition: positions(
          limit: 1
          where: { accountId: { _eq: $address } }
        ) {
          shares
          accountId
        }
        positions {
          shares
          accountId
        }
      }
    }
  }
  chainLinkPrices(limit: 1, order_by: { id: desc }) {
    usd
  }
}
`);