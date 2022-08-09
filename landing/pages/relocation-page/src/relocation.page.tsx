import React                          from 'react'
import { FC }                         from 'react'
import { useState }                   from 'react'
import { useRef }                     from 'react'

import { LocomotiveScrollProvider }   from '@forks/react-locomotive-scroll'
import { DataProvider }               from '@globals/data'
import { GET_PREVIEW }                from '@globals/data'
import { LanguageProvider }           from '@globals/language'
import { Language }                   from '@globals/language'
import { Feedback }                   from '@landing/feedback-fragment'
import { Footer }                     from '@landing/footer-fragment'
import { Map }                        from '@landing/map-fragment'
import { Navigation }                 from '@landing/navigation-fragment'
import { RelocationFaq }              from '@landing/relocation-faq-fragment'
import { RelocationGroundsStatus }    from '@landing/relocation-grounds-status-fragment'
import { RelocationHero }             from '@landing/relocation-hero-fragment'
import { RelocationHowMoveToAmerica } from '@landing/relocation-how-move-to-america-fragment'
import { RelocationOurRole }          from '@landing/relocation-our-role-fragment'
import { RelocationProgramBenefits }  from '@landing/relocation-program-benefits-fragment'
import { Box }                        from '@ui/layout'
import { Preloader }                  from '@ui/preloader'
import { getClient }                  from '@globals/data'

import { GET_RELOCATION_SEO }         from './queries'
import { Seo }                        from './seo.component'
import { runFeedbackQuery }           from './queries'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const RelocationPage: FC<Props> = ({ ogCover, SEO = { RU: {}, EN: {} }, data }) => {
  const languageContext = useState<Language>('RU')
  const containerRef = useRef(null)

  return (
    <Preloader>
      <LanguageProvider value={languageContext}>
        <DataProvider>
          <LocomotiveScrollProvider
            options={{ smooth: true }}
            containerRef={containerRef}
            watch={[]}
          >
            <Box backgroundColor='background.beige'>
              <Navigation />
            </Box>
            <main data-scroll-container ref={containerRef}>
              <Seo language={languageContext} ogCover={ogCover} SEO={SEO} />
              <RelocationHero />
              <RelocationGroundsStatus />
              <RelocationProgramBenefits />
              <RelocationHowMoveToAmerica />
              <RelocationFaq />
              <RelocationOurRole />
              <Feedback data={data} contacts />
              <Map />
              <Footer />
            </main>
          </LocomotiveScrollProvider>
        </DataProvider>
      </LanguageProvider>
    </Preloader>
  )
}

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  let SEO

  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=300')

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

export default RelocationPage
