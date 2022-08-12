import { gql } from '@apollo/client'

export const GET_RELOCATION_SEO = gql`
  query GetRelocationSeo {
    pageBy(uri: "/relocation") {
      seo {
        title
        metaDesc
      }
      translation(language: EN) {
        seo {
          title
          metaDesc
        }
      }
    }
  }
`
