import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          content
          highlightedtext
          image {
            altText
            sourceUrl
          }
          role
          order
        }
        language {
          code
        }
      }
    }
  }
`

const runHeroQuery = async () => {
  const client = getClient()
  let hero

  const { data: heroData } = await client.query({
    query: GET_HERO,
  })

  if (heroData) {
    hero = {
      hero: {
        RU: heroData.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'RU'),
        EN: heroData.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'EN'),
      },
    }
  } else hero = { hero: { RU: [], EN: [] } }

  return hero
}

export { runHeroQuery }
