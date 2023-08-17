import { gql } from '@apollo/client'

const SUBMIT_FORM = gql`
  mutation SubmitForm($firstname: String!, $phone: String!, $email: String!, $textbox: String!) {
    submitForm(
      input: {
        formId: 2
        data: [
          { id: 5, value: $firstname }
          { id: 6, value: $phone }
          { id: 7, value: $email }
          { id: 8, value: $textbox }
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
