import { gql } from '@apollo/client'

const GET_FORMS = gql`
  query MyQuery {
    forms {
      nodes {
        title
        fields {
          nodes {
            type
            label
            required
          }
        }
      }
    }
  }
`

export { GET_FORMS }
