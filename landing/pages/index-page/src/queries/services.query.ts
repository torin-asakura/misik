import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetMainServices {
    mainServices {
      nodes {
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
  let services

  const { data: servicesData } = await client.query({
    query: GET_SERVICES,
  })

  if (servicesData) {
    services = {
      services: {
        RU: servicesData.mainServices.nodes.filter(
          (servicesFragment) => servicesFragment.language.code === 'RU'
        ),
        EN: servicesData.mainServices.nodes.filter(
          (servicesFragment) => servicesFragment.language.code === 'EN'
        ),
      },
    }
  } else services = { services: { RU: [], EN: [] } }

  return services
}

export { runServicesQuery }
