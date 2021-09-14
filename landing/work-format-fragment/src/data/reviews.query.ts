import { gql } from '@apollo/client'

const GET_REVIEWS = gql`
  query GetReviews {
    reviews(first: 1000) {
      nodes {
        content
        excerpt
        title
        featuredImage {
          node {
            altText
            link
          }
        }
      }
    }
  }
`

export { GET_REVIEWS }
