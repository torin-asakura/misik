import { gql } from '@apollo/client'

export const GET_MESSENGER_ICON = gql`
  query GetMessengerIcon($uri: String!) {
    mediaItemBy(uri: $uri) {
      sourceUrl
      altText
    }
  }
`
