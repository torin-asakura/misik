import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_ABOUT = gql`
  query GetAbout {
    aboutItems {
      nodes {
        contentAddons {
          content
          image {
            altText
            sourceUrl
          }
          role
          highlightedtext
        }
        language {
          code
        }
      }
    }
  }
`

const runAboutQuery = async () => {
  const client = getClient()
  let about

  const { data: aboutData } = await client.query({
    query: GET_ABOUT,
  })

  if (aboutData) {
    about = {
      about: {
        RU: aboutData.aboutItems.nodes.filter(
          (aboutFragment) => aboutFragment.language.code === 'RU'
        ),
        EN: aboutData.aboutItems.nodes.filter(
          (aboutFragment) => aboutFragment.language.code === 'EN'
        ),
      },
    }
  } else about = { about: { RU: [], EN: [] } }

  return about
}

export { runAboutQuery }
