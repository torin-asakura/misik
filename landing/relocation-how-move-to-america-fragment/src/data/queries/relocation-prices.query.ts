import { gql } from '@apollo/client'

const GET_RELOCATION_PRICES = gql`
  query GetRelocationPrices {
    relocationPrices {
      nodes {
        title
        relocationParams {
          highlightedtext
          price
          scope
          object
        }
        language {
          code
        }
      }
    }
  }
`

export { GET_RELOCATION_PRICES }
