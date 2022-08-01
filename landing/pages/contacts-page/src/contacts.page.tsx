import React                        from 'react'
import { FC }                       from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useState }                 from 'react'
import { useRef }                   from 'react'

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

const ContactsPage: FC = () => {
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
            <main data-scroll-container ref={containerRef}>
              <Seo language={languageContext} />
              <Box backgroundColor='background.beige'>
                <Navigation />
              </Box>
              <Branches contacts />
              <Feedback background='background.beige' />
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
