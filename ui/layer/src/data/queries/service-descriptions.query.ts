import { gql } from '@apollo/client'

const GET_SERVICE_DESCRIPTIONS = gql`
  query GetServiceDescriptions {
    serviceDescriptions(first: 1000) {
      nodes {
        title
        content
        language {
          code
        }
      }
    }
  }
`

export { GET_SERVICE_DESCRIPTIONS }
