import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_PREVIEW = gql`
  query GetPreview {
    mediaItemBy(uri: "/Contacts-preview/") {
      sourceUrl
    }
  }
`

const usePreview = () => {
  const { data } = useQuery(GET_PREVIEW)

  let preview

  if (data) {
    preview = data?.mediaItemBy.sourceUrl
  }

  return { preview }
}

export { usePreview }
