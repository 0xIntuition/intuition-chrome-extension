export const getThingsQuery = `
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
    `;