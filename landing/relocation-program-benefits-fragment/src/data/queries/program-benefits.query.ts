import { gql } from '@apollo/client'

const GET_PROGRAM_BENEFITS = gql`
  query GetProgramBenefits {
    programBenefits(first: 1000) {
      nodes {
        title
        content
        language {
          code
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`

export { GET_PROGRAM_BENEFITS }
