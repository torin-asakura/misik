import { gql } from '@apollo/client'

const GET_CONTACTS = gql`
  query GetContacts {
    contacts {
      nodes {
        title
        content
        contactAddons {
          address
          type
          messengers
          viberLink
          whatsappLink
        }
        fragmentParams {
          highlightedText
        }
        language {
          code
        }
      }
    }
  }
`

export { GET_CONTACTS }
