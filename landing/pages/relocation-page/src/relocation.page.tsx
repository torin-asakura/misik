import React                          from 'react'
import { FC }                         from 'react'
import { useState }                   from 'react'
import { useRef }                     from 'react'

import { LocomotiveScrollProvider }   from '@forks/react-locomotive-scroll'
import { DataProvider }               from '@globals/data'
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

import { Seo }                        from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const RelocationPage: FC<Props> = ({ ogCover, SEO = { RU: {}, EN: {} }, data: { feedback } }) => {
  const languageContext = useState<Language>('RU')
  const containerRef = useRef(null)

  return (
    <Preloader>
      <LanguageProvider value={languageContext}>
        <DataProvider>
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              smartphone: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
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
              <Feedback data={feedback} contacts />
              <Map />
              <Footer />
            </main>
          </LocomotiveScrollProvider>
        </DataProvider>
      </LanguageProvider>
    </Preloader>
  )
}

export default RelocationPage
