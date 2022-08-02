import React                        from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { DataProvider }             from '@globals/data'
import { LanguageProvider }         from '@globals/language'
import { Language }                 from '@globals/language'
import { NotFound }                 from '@landing/404-fragment'
import { Footer }                   from '@landing/footer-fragment'
import { Navigation }               from '@landing/navigation-fragment'
import { Column }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Preloader }                from '@ui/preloader'

const Page404 = () => {
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
              <Box height='100vh' backgroundColor='background.lightBeige'>
                <Column fill>
                  <Navigation />
                  <NotFound />
                  <Footer />
                </Column>
              </Box>
            </main>
          </LocomotiveScrollProvider>
        </DataProvider>
      </LanguageProvider>
    </Preloader>
  )
}

export { Page404 }
