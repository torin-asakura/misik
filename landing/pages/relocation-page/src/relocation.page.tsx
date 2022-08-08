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
import { Preloader }                  from '@ui/preloader'
import { getClient }                  from '@globals/data'

import { Seo }                        from './seo.component'
import { GET_RELOCATION_SEO }         from './seo.data'

interface Props {
  ogCover: string
  SEO: any
}

const RelocationPage: FC<Props> = ({ ogCover, SEO = { RU: {}, EN: {} } }) => {
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
            <Navigation />
            <main data-scroll-container ref={containerRef}>
              <Seo language={languageContext} ogCover={ogCover} SEO={SEO} />
              <RelocationHero />
              <RelocationGroundsStatus />
              <RelocationProgramBenefits />
              <RelocationHowMoveToAmerica />
              <RelocationFaq />
              <RelocationOurRole />
              <Feedback contacts />
              <Map />
              <Footer />
            </main>
          </LocomotiveScrollProvider>
        </DataProvider>
      </LanguageProvider>
    </Preloader>
  )
}

export const getServerSideProps = async () => {
  const client = getClient()

  let SEO

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

  return { props: { SEO, ogCover } }
}

export default RelocationPage