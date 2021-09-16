import { gql } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm($name: String!, $email: String!, $phone: String!, $comment: String!) {
    submitForm(
      input: {
        formId: 2
        data: [
          { id: 5, value: $name }
          { id: 6, value: $phone }
          { id: 7, value: $email }
          { id: 8, value: $comment }
        ]
      }
    ) {
      errors {
        fieldId
        message
        slug
      }
      message
      success
    }
  }
`

export { SUBMIT_FORM }
