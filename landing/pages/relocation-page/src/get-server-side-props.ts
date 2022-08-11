import { GET_PREVIEW }        from '@globals/data'
import { getClient }          from '@globals/data'
import { setCacheHeader }     from '@globals/data'

import { GET_RELOCATION_SEO } from './queries'
import { runFeedbackQuery }   from './queries'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  let SEO

  setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_RELOCATION_SEO,
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/relocation-preview/',
    },
  })

  if (seoData) {
    SEO = {
      RU: seoData.pageBy.seo,
      EN: seoData.pageBy.translation.seo,
    }
  } else SEO = { RU: {}, EN: {} }

  const ogCover = previewData?.mediaItemBy.sourceUrl

  const queryPromises: Array<Promise<any>> = [runFeedbackQuery()]

  const retrievedData = await Promise.all(queryPromises)

  const data = retrievedData.reduce((props, allData) => ({ ...props, ...allData }), {})

  return { props: { SEO, ogCover, data } }
}
