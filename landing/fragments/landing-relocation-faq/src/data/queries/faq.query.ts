import { gql } from '@apollo/client'

const GET_FAQ = gql`
  query GetFAQ {
    faqs(first: 1000) {
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

export { GET_FAQ }
