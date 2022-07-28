import { gql } from '@apollo/client'

const GET_NAVIGATION = gql`
  query GetNavigation {
    navigationItems {
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

export { GET_NAVIGATION }
