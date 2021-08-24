import { gql } from '@apollo/client'

const GET_PARTNERS = gql`
  query GetPartners {
    partners {
      nodes {
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

export { GET_PARTNERS }
