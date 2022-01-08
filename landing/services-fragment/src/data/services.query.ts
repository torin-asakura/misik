import { gql } from '@apollo/client'

const GET_SERVICES = gql`
  query GetMenus {
    services(first: 100) {
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
