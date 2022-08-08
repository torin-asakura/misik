import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_WORK_FORMAT = gql`
  query GetWorkFormat {
    workFormats {
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

const runWorkFormatsQuery = async () => {
  const client = getClient()
  let workFormats

  const { data: workFormatData } = await client.query({
    query: GET_WORK_FORMAT,
  })

  if (workFormatData) {
    workFormats = {
      workFormats: {
        RU: workFormatData.workFormats.nodes.filter(
          (workFormatFragment) => workFormatFragment.language.code === 'RU'
        ),
        EN: workFormatData.workFormats.nodes.filter(
          (workFormatFragment) => workFormatFragment.language.code === 'EN'
        ),
      },
    }
  } else workFormats = { workFormats: { RU: [], EN: [] } }

  return workFormats
}

export { runWorkFormatsQuery }
