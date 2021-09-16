import { gql } from '@apollo/client'

const GET_PARTNERS = gql`
  query GetPartners {
    partners {
      nodes {
        title
        excerpt
        clientsParameters {
          ssylka
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`

export { GET_PARTNERS }
