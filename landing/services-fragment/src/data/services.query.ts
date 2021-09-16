import { gql } from '@apollo/client'

const GET_SERVICES = gql`
  query GetMenus {
    services {
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

export { GET_SERVICES }
