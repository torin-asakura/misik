import { gql } from '@apollo/client'

const GET_MENUS = gql`
  query GetMenus {
    menus(first: 1000) {
      nodes {
        name
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  }
`

export { GET_MENUS }
