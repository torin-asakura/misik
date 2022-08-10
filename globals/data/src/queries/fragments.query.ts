import { gql } from '@apollo/client'

const GET_FRAGMENTS = gql`
  query GetFragments {
    fragments(first: 1000) {
      nodes {
        title
        content
        menuOrder
        featuredImage {
          node {
            altText
            link
            sourceUrl
            title
            mediaType
          }
        }
        language {
          code
        }
        fragmentParams {
          highlightedText
          object
          scope
          image {
            sourceUrl
          }
        }
      }
    }
  }
`

export { GET_FRAGMENTS }
