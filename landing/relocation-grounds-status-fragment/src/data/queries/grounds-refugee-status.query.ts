import { gql } from '@apollo/client'

const GET_GROUNDS_REFUGEE_STATUS = gql`
  query GetGroundsRefugeeStatus {
    groundsRefugeeStatus(first: 1000) {
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

export { GET_GROUNDS_REFUGEE_STATUS }
