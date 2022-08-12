import React                        from 'react'
import { FC }                       from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { DataProvider }             from '@globals/data'
import { LanguageProvider }         from '@globals/language'
import { Language }                 from '@globals/language'
import { Branches }                 from '@landing/branches-fragment'
import { Feedback }                 from '@landing/feedback-fragment'
import { Footer }                   from '@landing/footer-fragment'
import { Map }                      from '@landing/map-fragment'
import { Navigation }               from '@landing/navigation-fragment'
import { Box }                      from '@ui/layout'
import { Preloader }                from '@ui/preloader'

import { Seo }                      from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const ContactsPage: FC<Props> = ({ ogCover, SEO = { RU: {}, EN: {} }, data: { feedback } }) => {
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
            <Box backgroundColor='background.beige'>
              <Navigation />
            </Box>
            <main data-scroll-container ref={containerRef}>
              <Seo language={languageContext} ogCover={ogCover} SEO={SEO} />
              <Branches contacts />
              <Feedback data={feedback} background='background.lightBeige' />
              <Map />
              <Footer />
            </main>
          </LocomotiveScrollProvider>
        </DataProvider>
      </LanguageProvider>
    </Preloader>
  )
}

export default ContactsPage
