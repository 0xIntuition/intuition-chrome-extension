import { gql } from '../generated/gql.js';

export const getMyPositionQuery = gql(/* GraphQL */ `
query GetMyPosition($id: numeric!, $address: String) {
  positions(
    where: { account_id: { _eq: $address }, vault_id: { _eq: $id } }
    limit: 1
  ) {
    shares
  }
}
`);

export const getThingsQuery = gql(/* GraphQL */ `
query GetThings($url: String, $address: String) {
  things(where: { url: { _eq: $url } }) {
    id
    url
    name
    image
    atom {
      id
      value {
        thing {
          description
        }
      }
      vault {
        position_count
        total_shares
        current_share_price
        myPosition: positions(
          limit: 1
          where: { account_id: { _eq: $address } }
        ) {
          shares
          account_id
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
      as_subject_triples {
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
        counter_vault {
          id
          position_count
          total_shares
          current_share_price
          myPosition: positions(
            limit: 1
            where: { account_id: { _eq: $address } }
          ) {
            shares
            account_id
          }
          positions {
            shares
            account_id
          }
        }
        vault {
          id
          position_count
          total_shares
          current_share_price
          myPosition: positions(
            limit: 1
            where: { account_id: { _eq: $address } }
          ) {
            shares
            account_id
          }
          positions {
            shares
            account_id
          }
        }
      }
    }
  }
}`);

export const getThingsExtendedQuery = gql(/* GraphQL */ `
query GetThingsExtended($url: String) {
  things(where: { url: { _eq: $url } }) {
    id
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
        position_count
        total_shares
        current_share_price
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
      as_subject_triples {
        id
        subject {
          id
          label
          emoji
          image
        }
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
        counter_vault {
          id
          position_count
          total_shares
          current_share_price
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
          position_count
          total_shares
          current_share_price
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
}
`);

export const getMyPositionsQuery = gql(/* GraphQL */ `
query GetMyPositions($address: String) {
  positions(where: { account_id: { _eq: $address } }) {
    id
    shares
    vault {
      position_count
      total_shares
      current_share_price
      atom {
        id
        label
        image
      }
      triple {
        id
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
    order_by: { block_timestamp: desc }
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
    positions(where: { account_id: { _eq: $address } }) {
      id
      shares
      vault {
        id
        position_count
        total_shares
        current_share_price
        atom {
          id
          label
          image
        }
        triple {
          id
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
}
`);

export const getClaimsFromFollowingAboutSubject = gql(/* GraphQL */ `
query ClaimsFromFollowingAboutSubject($address: String!, $subjectId: numeric!) {
  claims_from_following(
    args: { address: $address }
    where: { subject_id: { _eq: $subjectId } }
  ) {
    shares
    counter_shares
    triple {
      id
      vault_id
      counter_vault_id
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
      counter_vault {
        id
        position_count
        total_shares
        current_share_price
        myPosition: positions(
          limit: 1
          where: { account_id: { _eq: $address } }
        ) {
          shares
          account_id
        }
      }
      vault {
        id
        position_count
        total_shares
        current_share_price
        myPosition: positions(
          limit: 1
          where: { account_id: { _eq: $address } }
        ) {
          shares
          account_id
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
      position_count
      total_shares
      current_share_price
      myPosition: positions(limit: 1, where: { account_id: { _eq: $address } }) {
        shares
        account_id
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
    as_subject_triples {
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
      counter_vault {
        id
        position_count
        total_shares
        current_share_price
        myPosition: positions(
          limit: 1
          where: { account_id: { _eq: $address } }
        ) {
          shares
          account_id
        }
        positions {
          shares
          account_id
        }
      }
      vault {
        id
        position_count
        total_shares
        current_share_price
        myPosition: positions(
          limit: 1
          where: { account_id: { _eq: $address } }
        ) {
          shares
          account_id
        }
        positions {
          shares
          account_id
        }
      }
    }
  }
}`);

export const pinThingMutation = gql(/* GraphQL */ `
mutation PinThing($thing: PinThingInput!) {
  pinThing(thing: $thing) {
    uri
  }
}
`);
