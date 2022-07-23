import { gql } from '@apollo/client'

export const SOCIAL_NETWORKS = gql`
  query SocialNetworks {
    socialNetworks {
      nodes {
        content
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
