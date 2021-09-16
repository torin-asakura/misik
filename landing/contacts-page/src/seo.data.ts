import { gql }      from '@apollo/client'
import { useQuery } from '@apollo/client'

const GET_CONTACTS_SEO = gql`
  query GetContactsSeo {
    pageBy(uri: "/contacts") {
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

const useSeo = () => {
  const { data } = useQuery(GET_CONTACTS_SEO)

  if (data) {
    return {
      RU: data.pageBy.seo,
      EN: data.pageBy.translation.seo,
    }
  }

  return { RU: {}, EN: {} }
}

export { useSeo }
