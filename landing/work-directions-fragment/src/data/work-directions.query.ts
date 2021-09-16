import { gql } from '@apollo/client'

const GET_WORK_DIRECTIONS = gql`
  query GetWorkDirections {
    workDirections(first: 1000) {
      nodes {
        title
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        language {
          code
        }
      }
    }
  }
`

export { GET_WORK_DIRECTIONS }
