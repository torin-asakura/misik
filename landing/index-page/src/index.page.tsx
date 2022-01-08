import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Navigation }       from '@landing/navigation-fragment'
import { Hero }             from '@landing/hero-fragment'
import { About }            from '@landing/about-fragment'
import { Services }         from '@landing/services-fragment'
import { WorkFormat }       from '@landing/work-format-fragment'
import { WorkDirections }   from '@landing/work-directions-fragment'
import { Feedback }         from '@landing/feedback-fragment'
import { Map }              from '@landing/map-fragment'
import { Footer }           from '@landing/footer-fragment'
import { DataProvider }     from '@globals/data'
import { LanguageProvider } from '@globals/language'
import { Language }         from '@globals/language'
import { SpyScroll }        from '@ui/spy-scroll'
import { Drawer }           from '@ui/drawer'

import { Seo }              from './seo.component'

const IndexPage: FC = () => {
  const languageContext = useState<Language>('RU')

  return (
    <LanguageProvider value={languageContext}>
      <DataProvider>
        <Drawer>
          <SpyScroll>
            <Seo language={languageContext} />
            <Navigation />
            <Hero />
            <WorkDirections />
            <About />
            <Services />
            <WorkFormat />
            <Feedback />
            <Map />
            <Footer />
          </SpyScroll>
        </Drawer>
      </DataProvider>
    </LanguageProvider>
  )
}
export default IndexPage
