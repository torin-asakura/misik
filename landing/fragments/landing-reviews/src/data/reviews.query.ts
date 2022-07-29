import { gql } from '@apollo/client'

export const GET_REVIEWS = gql`
  query GetReviews {
    reviews {
      nodes {
        title
        content
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        language {
          code
        }
      }
    }
  }
`
