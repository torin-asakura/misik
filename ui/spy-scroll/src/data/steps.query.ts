import { gql } from '@apollo/client'

const GET_STEPS = gql`
  query GetSteps {
    steps(first: 1000) {
      nodes {
        title
        menuOrder
        language {
          code
        }
        stepAddons {
          stepid
        }
      }
    }
  }
`

export { GET_STEPS }
