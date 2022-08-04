import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          content
          highlightedtext
          image {
            altText
            sourceUrl
          }
          role
          order
        }
        language {
          code
        }
      }
    }
  }
`
