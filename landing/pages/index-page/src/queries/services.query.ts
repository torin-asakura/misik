import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetMainServices {
    mainServices {
      nodes {
        id
        contentAddons {
          image {
            altText
            sourceUrl
          }
          title
          content
          highlightedtext
          role
        }
        language {
          code
        }
      }
    }
  }
`

const runServicesQuery = async () => {
  const client = getClient()

  const { data: servicesData } = await client.query({
    query: GET_SERVICES,
  })

  const relocationId = ['cG9zdDo2MDI=', 'cG9zdDo2MDM=']

  const data = servicesData.mainServices.nodes.filter(
    (node) => relocationId[0] !== node.id && relocationId[1] !== node.id
  )

  if (servicesData) {
    return {
      services: {
        RU: data.filter((servicesFragment) => servicesFragment.language.code === 'RU'),
        EN: data.filter((servicesFragment) => servicesFragment.language.code === 'EN'),
      },
    }
  }

  return { services: { RU: [], EN: [] } }
}

export { runServicesQuery }
